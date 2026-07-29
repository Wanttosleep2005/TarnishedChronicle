[CmdletBinding()]
param(
  [switch]$NoUpdate,
  [switch]$ForceUpdate
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$tcRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$tcAppExe = Join-Path $tcRoot 'TarnishedChronicle.exe'
$tcRepo = 'Wanttosleep2005/TarnishedChronicle'
$tcApiUri = "https://api.github.com/repos/$tcRepo/releases/latest"
$tcLauncherFiles = @(
  'TarnishedChronicleLauncher.ps1',
  'TarnishedChronicleLauncher.bat'
)
$tcMutex = $null

function Write-LauncherLog {
  param([string]$Message)

  $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
  Write-Host "[$stamp] $Message"
}

function Get-NormalizedVersion {
  param([string]$Value)

  if ($Value -match '(\d+\.\d+\.\d+)') {
    return [version]$Matches[1]
  }
  return [version]'0.0.0'
}

function Get-LocalVersion {
  if (-not (Test-Path -LiteralPath $tcAppExe)) {
    return [version]'0.0.0'
  }

  $info = [System.Diagnostics.FileVersionInfo]::GetVersionInfo($tcAppExe)
  $productVersion = $info.ProductVersion
  if ([string]::IsNullOrWhiteSpace($productVersion)) {
    $productVersion = $info.FileVersion
  }
  return Get-NormalizedVersion $productVersion
}

function Get-ReleaseAsset {
  param(
    [object]$Release,
    [version]$Version
  )

  $runtimeName = "TarnishedChronicle-runtime-$Version.zip"
  $runtime = @($Release.assets | Where-Object { $_.name -ieq $runtimeName }) | Select-Object -First 1
  if ($null -ne $runtime) {
    return $runtime
  }

  $installerName = "TarnishedChronicle-Setup-$Version.exe"
  return @($Release.assets | Where-Object { $_.name -ieq $installerName }) | Select-Object -First 1
}

function Get-LatestRelease {
  $headers = @{
    Accept = 'application/vnd.github+json'
    'User-Agent' = 'TarnishedChronicleLauncher'
  }
  return Invoke-RestMethod -Uri $tcApiUri -Headers $headers -UseBasicParsing
}

function Download-And-Verify {
  param(
    [object]$Asset,
    [string]$Destination
  )

  Write-LauncherLog "Downloading $($Asset.name)..."
  Invoke-WebRequest -Uri $Asset.browser_download_url -Headers @{ 'User-Agent' = 'TarnishedChronicleLauncher' } -OutFile $Destination -UseBasicParsing

  if ($Asset.digest -and $Asset.digest -match '^sha256:(.+)$') {
    $expected = $Matches[1].ToLowerInvariant()
    $actual = (Get-FileHash -LiteralPath $Destination -Algorithm SHA256).Hash.ToLowerInvariant()
    if ($actual -ne $expected) {
      throw "SHA-256 verification failed for $($Asset.name)."
    }
  }
}

function Get-AppProcesses {
  $fullExe = [System.IO.Path]::GetFullPath($tcAppExe)
  return @(Get-Process -Name 'TarnishedChronicle' -ErrorAction SilentlyContinue | Where-Object {
      try {
        [System.IO.Path]::GetFullPath($_.Path) -ieq $fullExe
      } catch {
        $false
      }
    })
}

function Stop-App {
  $processes = Get-AppProcesses
  if ($processes.Count -eq 0) {
    return
  }

  Write-LauncherLog 'Closing the running application...'
  foreach ($process in $processes) {
    if (-not $process.HasExited) {
      [void]$process.CloseMainWindow()
    }
  }

  $deadline = (Get-Date).AddSeconds(15)
  while ((Get-Date) -lt $deadline -and (Get-AppProcesses).Count -gt 0) {
    Start-Sleep -Milliseconds 250
  }

  foreach ($process in Get-AppProcesses) {
    Write-LauncherLog 'The application did not close cleanly; stopping it.'
    Stop-Process -Id $process.Id -Force
  }
}

function Get-PayloadRoot {
  param([string]$StagePath)

  if (Test-Path -LiteralPath (Join-Path $StagePath 'TarnishedChronicle.exe')) {
    return $StagePath
  }

  $folders = @(Get-ChildItem -LiteralPath $StagePath -Directory -Force)
  if ($folders.Count -eq 1 -and (Test-Path -LiteralPath (Join-Path $folders[0].FullName 'TarnishedChronicle.exe'))) {
    return $folders[0].FullName
  }

  throw 'The downloaded runtime package does not contain TarnishedChronicle.exe.'
}

function Restore-Backup {
  param([string]$BackupPath)

  $fullBackupPath = [System.IO.Path]::GetFullPath($BackupPath)
  foreach ($item in @(Get-ChildItem -LiteralPath $tcRoot -Force)) {
    if ($tcLauncherFiles -notcontains $item.Name -and [System.IO.Path]::GetFullPath($item.FullName) -ine $fullBackupPath) {
      Remove-Item -LiteralPath $item.FullName -Recurse -Force -ErrorAction SilentlyContinue
    }
  }
  foreach ($item in @(Get-ChildItem -LiteralPath $BackupPath -Force)) {
    Move-Item -LiteralPath $item.FullName -Destination $tcRoot -Force
  }
  Remove-Item -LiteralPath $BackupPath -Recurse -Force -ErrorAction SilentlyContinue
}

function Replace-WithRuntime {
  param(
    [string]$PayloadPath,
    [version]$Version
  )

  $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
  $backupPath = Join-Path $tcRoot ".update-backup-$Version-$stamp"
  New-Item -ItemType Directory -Path $backupPath -Force | Out-Null

  foreach ($item in @(Get-ChildItem -LiteralPath $tcRoot -Force)) {
    if ($tcLauncherFiles -notcontains $item.Name -and $item.Name -notlike '.update-backup-*') {
      Move-Item -LiteralPath $item.FullName -Destination $backupPath -Force
    }
  }

  try {
    foreach ($item in @(Get-ChildItem -LiteralPath $PayloadPath -Force)) {
      Copy-Item -LiteralPath $item.FullName -Destination $tcRoot -Recurse -Force
    }
    if (-not (Test-Path -LiteralPath $tcAppExe)) {
      throw 'The updated runtime is missing TarnishedChronicle.exe.'
    }
    Write-LauncherLog "Updated to v$Version. Backup kept at $backupPath."
  } catch {
    Write-LauncherLog 'Update failed; restoring the previous runtime.'
    Restore-Backup $backupPath
    throw
  }
}

function Update-FromZip {
  param(
    [string]$ZipPath,
    [version]$Version
  )

  $stagePath = Join-Path ([System.IO.Path]::GetTempPath()) "TarnishedChronicle-$Version-$([guid]::NewGuid().ToString('N'))"
  New-Item -ItemType Directory -Path $stagePath -Force | Out-Null
  try {
    Expand-Archive -LiteralPath $ZipPath -DestinationPath $stagePath -Force
    $payloadPath = Get-PayloadRoot $stagePath
    Stop-App
    Replace-WithRuntime $payloadPath $Version
  } finally {
    Remove-Item -LiteralPath $stagePath -Recurse -Force -ErrorAction SilentlyContinue
  }
}

function Update-FromInstaller {
  param(
    [string]$InstallerPath,
    [version]$Version
  )

  Stop-App
  Write-LauncherLog "Installing v$Version into the writable runtime directory..."
  $arguments = @('/S', "/D=`"$tcRoot`"")
  $installer = Start-Process -FilePath $InstallerPath -ArgumentList $arguments -Wait -PassThru
  if ($installer.ExitCode -ne 0) {
    throw "The installer exited with code $($installer.ExitCode)."
  }
  if (-not (Test-Path -LiteralPath $tcAppExe)) {
    throw 'The installer did not produce TarnishedChronicle.exe.'
  }
}

function Start-App {
  if (-not (Test-Path -LiteralPath $tcAppExe)) {
    throw "TarnishedChronicle.exe was not found in $tcRoot."
  }
  Start-Process -FilePath $tcAppExe -WorkingDirectory $tcRoot | Out-Null
}

try {
  if (-not (Test-Path -LiteralPath $tcRoot)) {
    throw "Launcher directory was not found: $tcRoot"
  }

  $tcMutex = New-Object System.Threading.Mutex($false, 'Local\TarnishedChronicleLauncher')
  if (-not $tcMutex.WaitOne(0)) {
    Write-LauncherLog 'Another launcher instance is already running.'
    exit 0
  }

  $localVersion = Get-LocalVersion
  Write-LauncherLog "Local version: v$localVersion"

  if (-not $NoUpdate) {
    try {
      $release = Get-LatestRelease
      $remoteVersion = Get-NormalizedVersion $release.tag_name
      $asset = Get-ReleaseAsset $release $remoteVersion

      if ($remoteVersion -gt $localVersion -or ($ForceUpdate -and $remoteVersion -eq $localVersion)) {
        if ($null -eq $asset) {
          throw "Release v$remoteVersion has no runtime ZIP or installer asset."
        }

        $downloadPath = Join-Path ([System.IO.Path]::GetTempPath()) $asset.name
        Download-And-Verify $asset $downloadPath
        try {
          if ($asset.name -like '*.zip') {
            Update-FromZip $downloadPath $remoteVersion
          } else {
            Update-FromInstaller $downloadPath $remoteVersion
          }
        } finally {
          Remove-Item -LiteralPath $downloadPath -Force -ErrorAction SilentlyContinue
        }
      } else {
        Write-LauncherLog "Already up to date (remote v$remoteVersion)."
      }
    } catch {
      Write-LauncherLog "Update skipped: $($_.Exception.Message)"
      Write-LauncherLog 'Starting the currently installed runtime.'
    }
  } else {
    Write-LauncherLog 'Update check disabled for this launch.'
  }

  Start-App
} catch {
  Write-Error $_.Exception.Message
  exit 1
} finally {
  if ($null -ne $tcMutex) {
    try { $tcMutex.ReleaseMutex() } catch { }
    $tcMutex.Dispose()
  }
}
