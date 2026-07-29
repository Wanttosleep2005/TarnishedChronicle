$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.IO.Compression.FileSystem

$root = Split-Path -Parent $PSScriptRoot
$weaponBook = Join-Path $root '倍率(App+Ver.+1.16.2)-敌人整合.xlsx'
$formulaBook = Join-Path $root '倍率文件(App+Ver.+1.12.3).xlsx'
$output = Join-Path $root 'src/renderer/src/data/generated/combat-data.ts'

function Read-ZipText($zip, [string]$name) {
  $entry = $zip.GetEntry($name)
  if ($null -eq $entry) { return $null }
  $reader = New-Object System.IO.StreamReader($entry.Open())
  try { return $reader.ReadToEnd() } finally { $reader.Dispose() }
}

function Read-CellValue($cell, $shared, $namespace) {
  $type = $cell.GetAttribute('t')
  if ($type -eq 'inlineStr') {
    return [string]$cell.SelectSingleNode('x:is', $namespace).InnerText
  }
  $value = $cell.SelectSingleNode('x:v', $namespace)
  if ($null -eq $value) { return '' }
  $raw = [string]$value.InnerText
  if ($type -eq 's') { return [string]$shared[[int]$raw] }
  if ($type -eq 'b') { return $(if ($raw -eq '1') { 'TRUE' } else { 'FALSE' }) }
  return $raw
}

function Read-Sheet([string]$path, [string]$sheetFile) {
  $zip = [IO.Compression.ZipFile]::OpenRead($path)
  try {
    $document = New-Object System.Xml.XmlDocument
    $namespace = New-Object System.Xml.XmlNamespaceManager($document.NameTable)
    $namespace.AddNamespace('x', 'http://schemas.openxmlformats.org/spreadsheetml/2006/main')
    $shared = @()
    $sharedText = Read-ZipText $zip 'xl/sharedStrings.xml'
    if ($sharedText) {
      $sharedDocument = [xml]$sharedText
      foreach ($item in $sharedDocument.SelectNodes('//x:si', $namespace)) { $shared += [string]$item.InnerText }
    }
    $sheetDocument = [xml](Read-ZipText $zip ("xl/" + $sheetFile))
    $rows = @($sheetDocument.worksheet.sheetData.row)
    if ($rows.Count -eq 0) { return @() }
    $headers = @{}
    foreach ($cell in $rows[0].c) {
      $headers[[string]$cell.r -replace '\d+', ''] = Read-CellValue $cell $shared $namespace
    }
    $result = @()
    foreach ($row in ($rows | Select-Object -Skip 1)) {
      $record = [ordered]@{}
      foreach ($key in $headers.Keys) { $record[$headers[$key]] = '' }
      foreach ($cell in $row.c) {
        $column = ([string]$cell.r -replace '\d+', '')
        if ($headers.Contains($column)) { $record[$headers[$column]] = Read-CellValue $cell $shared $namespace }
      }
      $result += [pscustomobject]$record
    }
    return $result
  } finally { $zip.Dispose() }
}

function NumberOrNull($value) {
  if ($null -eq $value) { return $null }
  $text = ([string]$value).Trim()
  if ([string]::IsNullOrWhiteSpace($text)) { return $null }
  $text = ($text -replace '\([^)]*\)', '')
  $parts = $text -split '\+'
  $sum = 0.0
  foreach ($part in $parts) {
    $token = $part.Trim()
    if ($token -notmatch '^-?\d+(\.\d+)?$') { return $null }
    $sum += [double]::Parse($token, [Globalization.CultureInfo]::InvariantCulture)
  }
  return $sum
}

function IntOrNull($value) {
  $number = NumberOrNull $value
  if ($null -eq $number) { return $null }
  return [int]$number
}

$actionNames = @(
  '单手 轻击 1', '单手 轻击 2', '单手 重击 1', '单手 重击 2',
  '单手 满蓄力 重击 1', '单手 满蓄力 重击 2', '单手 跳 轻击', '单手 跳 重击',
  '双持 轻击 1', '双持 轻击 2', '双持 重击 1', '双持 重击 2',
  '双持 满蓄力 重击 1', '双持 满蓄力 重击 2', '双持 跳 轻击', '双持 跳 重击',
  '左手（副手） 轻击 1'
)

$weaponRows = Read-Sheet $weaponBook 'worksheets/sheet8.xml'
$weaponByName = [ordered]@{}
foreach ($row in $weaponRows) {
  $weapon = [string]$row.'武器名'
  $action = [string]$row.'动作'
  if ([string]::IsNullOrWhiteSpace($weapon) -or $actionNames -notcontains $action) { continue }
  if (-not $weaponByName.Contains($weapon)) {
    $weaponByName[$weapon] = [ordered]@{
      weaponClass = $row.'武器种类'
      weapon = $weapon
      actions = [ordered]@{}
    }
  }
  $weaponByName[$weapon].actions[$action] = [ordered]@{
    damageMultiplier = NumberOrNull $row.'动作倍率'
    pvePoise = NumberOrNull $row.'PVE削韧值'
  }
}
$weaponActions = @($weaponByName.Values)

$spellRows = Read-Sheet $formulaBook 'worksheets/sheet20.xml'
$spellDamageColumns = [ordered]@{
  'physical' = 'Physical MV'
  'magic' = 'Magic MV'
  'fire' = 'Fire MV'
  'lightning' = 'Lightning MV'
  'holy' = 'Holy MV'
}
$spellData = foreach ($row in $spellRows) {
  if ([string]::IsNullOrWhiteSpace($row.Name)) { continue }
  $damage = [ordered]@{}
  foreach ($type in $spellDamageColumns.Keys) {
    $value = NumberOrNull $row.($spellDamageColumns[$type])
    if ($null -ne $value -and $value -ne 0) { $damage[$type] = $value }
  }
  [ordered]@{
    type = $row.Type
    name = $row.Name
    atkId = IntOrNull $row.AtkID
    damageMultipliers = $damage
    pveStaminaDamage = NumberOrNull $row.'PvE Stam Dmg'
    pvePoiseDamage = NumberOrNull $row.'PvE Poise Dmg'
    pvpPoiseDamage = NumberOrNull $row.'PvP Poise Dmg'
    damageLevel = IntOrNull $row.'Damage Level'
    status = $row.Status
    buildup = NumberOrNull $row.Buildup
  }
}

$enemyRows = Read-Sheet $weaponBook 'worksheets/sheet9.xml'
$defenseColumns = [ordered]@{
  physical = '基础防御 phys'; magic = '基础防御 mag'; fire = '基础防御 fire'; lightning = '基础防御 thunder'; dark = '基础防御 dark'
}
$cutColumns = [ordered]@{
  standard = '承伤倍率 普通'; slash = '承伤倍率 斩击'; strike = '承伤倍率 打击'; thrust = '承伤倍率 突刺'; magic = '承伤倍率 魔力'; fire = '承伤倍率 火'; lightning = '承伤倍率 雷'; holy = '承伤倍率 圣'
}
$enemyData = foreach ($row in $enemyRows) {
  $npcId = IntOrNull $row.'NpcParam ID'
  if ($null -eq $npcId -or [string]::IsNullOrWhiteSpace($row.'中文名（官方/Smithbox）')) { continue }
  $defense = [ordered]@{}
  foreach ($key in $defenseColumns.Keys) { $defense[$key] = NumberOrNull $row.($defenseColumns[$key]) }
  $damageTaken = [ordered]@{}
  foreach ($key in $cutColumns.Keys) { $damageTaken[$key] = NumberOrNull $row.($cutColumns[$key]) }
  [ordered]@{
    kind = $row.'类型（含内部参数）'
    bossFlagId = IntOrNull $row.'BossFlag ID'
    npcParamId = $npcId
    name = $row.'中文名（官方/Smithbox）'
    nameEn = $row.'English (official/Smithbox)'
    region = $row.'区域'
    hp = NumberOrNull $row.'常驻后 HP'
    saDurability = NumberOrNull $row.'SA 耐久'
    defense = $defense
    damageTaken = $damageTaken
  }
}

$payload = [ordered]@{
  source = '本地 Excel：倍率(App+Ver.+1.16.2)-敌人整合.xlsx、倍率文件(App+Ver.+1.12.3).xlsx'
  weaponActions = @($weaponActions)
  spells = @($spellData)
  enemies = @($enemyData)
}
$json = $payload | ConvertTo-Json -Compress -Depth 20
$header = @'
// @generated from local Excel workbooks; do not edit by hand.
// Regenerate with: powershell -ExecutionPolicy Bypass -File scripts/extract-local-combat-data.ps1

export interface WeaponCombatAction {
  readonly damageMultiplier: number | null;
  readonly pvePoise: number | null;
}

export interface WeaponCombatRow {
  readonly weaponClass: string;
  readonly weapon: string;
  readonly actions: Readonly<Record<string, WeaponCombatAction>>;
}

export interface SpellCombatRow {
  readonly type: string;
  readonly name: string;
  readonly atkId: number | null;
  readonly damageMultipliers: Readonly<Record<string, number>>;
  readonly pveStaminaDamage: number | null;
  readonly pvePoiseDamage: number | null;
  readonly pvpPoiseDamage: number | null;
  readonly damageLevel: number | null;
  readonly status: string;
  readonly buildup: number | null;
}

export interface EnemyCombatRow {
  readonly kind: string;
  readonly bossFlagId: number | null;
  readonly npcParamId: number;
  readonly name: string;
  readonly nameEn: string;
  readonly region: string;
  readonly hp: number | null;
  readonly saDurability: number | null;
  readonly defense: Readonly<Record<string, number | null>>;
  readonly damageTaken: Readonly<Record<string, number | null>>;
}

'@
$body = "export const LOCAL_COMBAT_SOURCE = $($payload.source | ConvertTo-Json -Compress) as const;`nexport const WEAPON_COMBAT_ACTIONS: readonly WeaponCombatRow[] = $($json | ConvertFrom-Json | Select-Object -ExpandProperty weaponActions | ConvertTo-Json -Compress -Depth 20) as const;`nexport const SPELL_COMBAT_DATA: readonly SpellCombatRow[] = $($json | ConvertFrom-Json | Select-Object -ExpandProperty spells | ConvertTo-Json -Compress -Depth 20) as const;`nexport const ENEMY_COMBAT_DATA: readonly EnemyCombatRow[] = $($json | ConvertFrom-Json | Select-Object -ExpandProperty enemies | ConvertTo-Json -Compress -Depth 20) as const;`n"
[IO.File]::WriteAllText($output, $header + $body, (New-Object Text.UTF8Encoding($false)))
Write-Output "Generated $output"
Write-Output "Weapon rows: $(@($weaponActions).Count); spell rows: $(@($spellData).Count); enemy rows: $(@($enemyData).Count)"
