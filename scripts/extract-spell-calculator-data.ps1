$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.IO.Compression.FileSystem

$root = Split-Path -Parent $PSScriptRoot
$sourceCandidates = @(
  Get-ChildItem -LiteralPath $root -File -Filter '*.xlsx' |
    Where-Object { $_.Name -match 'v1\.16\.xlsx$' -and $_.Length -lt 300000 }
)
if ($sourceCandidates.Count -ne 1) {
  throw 'Expected exactly one local v1.16 spell-calculator workbook under 300 KB.'
}
$sourceBook = $sourceCandidates[0].FullName
$output = Join-Path $root 'src/renderer/src/data/generated/spell-calculator-data.ts'

function Read-ZipText($zip, [string]$name) {
  $entry = $zip.GetEntry($name)
  if ($null -eq $entry) { return $null }
  $reader = [IO.StreamReader]::new($entry.Open())
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
  return $raw
}

function Read-Sheet([string]$path, [string]$sheetFile) {
  $zip = [IO.Compression.ZipFile]::OpenRead($path)
  try {
    $document = New-Object System.Xml.XmlDocument
    $namespace = New-Object System.Xml.XmlNamespaceManager($document.NameTable)
    $namespace.AddNamespace('x', 'http://schemas.openxmlformats.org/spreadsheetml/2006/main')
    $shared = New-Object 'System.Collections.Generic.List[string]'
    $sharedDocument = [xml](Read-ZipText $zip 'xl/sharedStrings.xml')
    foreach ($item in $sharedDocument.SelectNodes('//x:si', $namespace)) {
      $shared.Add([string]$item.InnerText)
    }
    $sheetDocument = [xml](Read-ZipText $zip ("xl/" + $sheetFile))
    foreach ($row in @($sheetDocument.worksheet.sheetData.row | Select-Object -Skip 1)) {
      $record = @{}
      foreach ($cell in $row.c) {
        $record[[string]$cell.r -replace '\d+', ''] = Read-CellValue $cell $shared $namespace
      }
      $record
    }
  } finally { $zip.Dispose() }
}

function NumberOrNull($value) {
  if ([string]::IsNullOrWhiteSpace([string]$value)) { return $null }
  return [double]::Parse([string]$value, [Globalization.CultureInfo]::InvariantCulture)
}

function NumberOrZero($value) {
  $number = NumberOrNull $value
  if ($null -eq $number) { return 0 }
  return $number
}

function Tags($values) {
  $tags = [System.Collections.Generic.List[string]]::new()
  foreach ($value in ($values | Where-Object { $_ -and $_.Length -gt 1 -and $_.Length -le 10 } | Sort-Object -Unique)) {
    $tags.Add([string]$value)
  }
  return ,$tags
}

$damageColumns = [ordered]@{ physical = 'G'; magic = 'H'; fire = 'I'; lightning = 'J'; holy = 'K' }

$spellRows = Read-Sheet $sourceBook 'worksheets/sheet4.xml'
$spells = foreach ($row in $spellRows) {
  if (-not $row['A'] -or -not $row['B']) { continue }
  $damage = [ordered]@{}
  foreach ($entry in $damageColumns.GetEnumerator()) {
    $value = NumberOrZero $row[$entry.Value]
    if ($value -ne 0) { $damage[$entry.Key] = $value }
  }
  [ordered]@{
    atkId = [int]$row['A']
    name = [string]$row['B']
    type = [string]$row['P']
    hitCount = [int](NumberOrZero $row['C'])
    requirements = [ordered]@{
      int = [int](NumberOrZero $row['D'])
      fai = [int](NumberOrZero $row['E'])
      arc = [int](NumberOrZero $row['F'])
    }
    baseDamage = $damage
    staminaCost = NumberOrNull $row['Q']
    poiseDamage = NumberOrNull $row['R']
    impact = NumberOrNull $row['S']
    buildup = NumberOrNull $row['T']
    status = [string]$row['U']
    statusScales = ([string]$row['V']) -eq '1'
    bloodflame = NumberOrNull $row['W']
    tags = Tags @($row['M'], $row['N'], $row['O'])
  }
}

$buffRows = Read-Sheet $sourceBook 'worksheets/sheet10.xml'
$buffs = @()
foreach ($row in $buffRows) {
  if (-not $row['A']) { continue }
  $effects = @()
  if ($row['B'] -ne '') {
    $effects += [ordered]@{ multiplier = 1 + (NumberOrZero $row['B']); condition = [string]$row['C'] }
  }
  if ($row['D'] -ne '') {
    $effects += [ordered]@{ multiplier = 1 + (NumberOrZero $row['D']); condition = [string]$row['E'] }
  }
  $buffs += [ordered]@{
    id = ('excel-buff-{0:d3}' -f ($buffs.Count + 1))
    name = [string]$row['A']
    category = [string]$row['F']
    effects = $effects
    note = [string]$row['G']
  }
}

$catalystRows = Read-Sheet $sourceBook 'worksheets/sheet7.xml'
$catalysts = foreach ($row in $catalystRows) {
  if (-not $row['A'] -or -not $row['B']) { continue }
  [ordered]@{
    itemId = [int]$row['A']
    name = [string]$row['B']
    kind = [string]$row['C']
    requirements = [ordered]@{
      int = [int](NumberOrZero $row['D'])
      fai = [int](NumberOrZero $row['E'])
      arc = [int](NumberOrZero $row['F'])
    }
    somber = (NumberOrZero $row['G']) -ne 0
    reinforcementCurve = [int](NumberOrZero $row['H'])
    attackCorrectId = [int](NumberOrZero $row['T'])
    staminaMultiplier = NumberOrNull $row['U']
    specialMultiplier = NumberOrNull $row['V']
    specialTag = [string]$row['W']
  }
}

$header = @'
// @generated from the local spell calculator workbook; do not edit by hand.
// Regenerate with: powershell -ExecutionPolicy Bypass -File scripts/extract-spell-calculator-data.ps1

export type SpellDamageType = 'physical' | 'magic' | 'fire' | 'lightning' | 'holy';

export interface SpellCalculatorAttack {
  readonly atkId: number;
  readonly name: string;
  readonly type: string;
  readonly hitCount: number;
  readonly requirements: Readonly<{ int: number; fai: number; arc: number }>;
  readonly baseDamage: Readonly<Partial<Record<SpellDamageType, number>>>;
  readonly staminaCost: number | null;
  readonly poiseDamage: number | null;
  readonly impact: number | null;
  readonly buildup: number | null;
  readonly status: string;
  readonly statusScales: boolean;
  readonly bloodflame: number | null;
  readonly tags: readonly string[];
}

export interface SpellCalculatorBuff {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly effects: readonly { readonly multiplier: number; readonly condition: string }[];
  readonly note: string;
}

export interface SpellCalculatorCatalyst {
  readonly itemId: number;
  readonly name: string;
  readonly kind: string;
  readonly requirements: Readonly<{ int: number; fai: number; arc: number }>;
  readonly somber: boolean;
  readonly reinforcementCurve: number;
  readonly attackCorrectId: number;
  readonly staminaMultiplier: number | null;
  readonly specialMultiplier: number | null;
  readonly specialTag: string;
}

'@
$payload = [ordered]@{ spells = @($spells); buffs = @($buffs); catalysts = @($catalysts) }
$json = $payload | ConvertTo-Json -Compress -Depth 10
$body = "export const SPELL_CALCULATOR_ATTACKS: readonly SpellCalculatorAttack[] = $($json | ConvertFrom-Json | Select-Object -ExpandProperty spells | ConvertTo-Json -Compress -Depth 10) as const;`nexport const SPELL_CALCULATOR_BUFFS: readonly SpellCalculatorBuff[] = $($json | ConvertFrom-Json | Select-Object -ExpandProperty buffs | ConvertTo-Json -Compress -Depth 10) as const;`nexport const SPELL_CALCULATOR_CATALYSTS: readonly SpellCalculatorCatalyst[] = $($json | ConvertFrom-Json | Select-Object -ExpandProperty catalysts | ConvertTo-Json -Compress -Depth 10) as const;`n"
[IO.File]::WriteAllText($output, $header + $body, [Text.UTF8Encoding]::new($false))
Write-Output "Generated $output"
Write-Output "Spells: $(@($spells).Count); buffs: $(@($buffs).Count); catalysts: $(@($catalysts).Count)"
