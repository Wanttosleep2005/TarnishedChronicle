$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.IO.Compression.FileSystem

$root = Split-Path -Parent $PSScriptRoot
$sourceCandidates = @(
  Get-ChildItem -LiteralPath $root -File -Filter '*.xlsx' |
    Where-Object { $_.Name -match 'v1\.16\.xlsx$' -and $_.Length -gt 900000 -and $_.Length -lt 1200000 }
)
if ($sourceCandidates.Count -ne 1) {
  throw 'Expected exactly one local Elden Ring v1.16 weapon-skill calculator workbook.'
}
$sourceBook = $sourceCandidates[0].FullName
$output = Join-Path $root 'src/renderer/src/data/generated/weapon-skill-data.ts'

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

function Read-Sheet([string]$path, [string]$sheetFile, [bool]$includeHeader = $false) {
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
    $rows = @($sheetDocument.worksheet.sheetData.row)
    if (-not $includeHeader) { $rows = @($rows | Select-Object -Skip 1) }
    foreach ($row in $rows) {
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
  $number = 0.0
  if (-not [double]::TryParse([string]$value, [Globalization.NumberStyles]::Float, [Globalization.CultureInfo]::InvariantCulture, [ref]$number)) {
    return $null
  }
  return $number
}

function NumberOrZero($value) {
  $number = NumberOrNull $value
  if ($null -eq $number) { return 0 }
  return $number
}

$listRows = @(Read-Sheet $sourceBook 'worksheets/sheet14.xml')
$specialTypeById = @{}
foreach ($row in $listRows) {
  if ($row['I'] -and $row['J']) { $specialTypeById[[string]$row['I']] = [string]$row['J'] }
}

$damageColumns = [ordered]@{ physical = 'D'; magic = 'E'; fire = 'F'; lightning = 'G'; holy = 'H' }
$baseColumns = [ordered]@{ physical = 'I'; magic = 'J'; fire = 'K'; lightning = 'L'; holy = 'M' }
$attackRows = @(Read-Sheet $sourceBook 'worksheets/sheet3.xml')
$attacks = foreach ($row in $attackRows) {
  if (-not $row['A'] -or -not $row['B']) { continue }
  $motionValues = [ordered]@{}
  $baseDamage = [ordered]@{}
  foreach ($entry in $damageColumns.GetEnumerator()) {
    $value = NumberOrZero $row[$entry.Value]
    if ($value -ne 0) { $motionValues[$entry.Key] = $value }
  }
  foreach ($entry in $baseColumns.GetEnumerator()) {
    $value = NumberOrZero $row[$entry.Value]
    if ($value -ne 0) { $baseDamage[$entry.Key] = $value }
  }
  $specialTypes = @(
    @($row['N'], $row['O'], $row['P'], $row['Q']) |
      ForEach-Object { $specialTypeById[[string]$_] } |
      Where-Object { $_ } |
      Sort-Object -Unique
  )
  [ordered]@{
    id = [int]$row['A']
    skill = [string]$row['B']
    note = [string]$row['C']
    kind = [string]$row['AJ']
    valueDescription = [string]$row['AK']
    motionValues = $motionValues
    baseDamage = $baseDamage
    physicalTypeId = [int](NumberOrZero $row['U'])
    impact = [int](NumberOrZero $row['R'])
    poiseDamage = NumberOrZero $row['S']
    poiseMultiplier = NumberOrZero $row['T']
    statusMultiplier = NumberOrZero $row['V']
    enchantMultiplier = NumberOrZero $row['W']
    specialCorrectionId = [int](NumberOrZero $row['Y'])
    buildup = NumberOrNull $row['AD']
    forcedEnchantType = [string]$row['AE']
    forcedEnchantAttack = NumberOrZero $row['AF']
    status = [string]$row['AG']
    statusValue = NumberOrZero $row['AH']
    statusScales = ([string]$row['AI']) -eq '1'
    specialTypes = $specialTypes
  }
}

$weaponRows = @(Read-Sheet $sourceBook 'worksheets/sheet12.xml')
$weaponById = @{}
foreach ($row in $weaponRows) {
  if ($row['A']) { $weaponById[[string]$row['A']] = $row }
}
$skillWeapons = foreach ($row in $listRows) {
  if (-not $row['A'] -or -not $row['B']) { continue }
  $source = $weaponById[[string]$row['A']]
  if ($null -eq $source) { continue }
  [ordered]@{
    id = [int]$row['A']
    name = [string]$row['B']
    category = [string]$row['C']
    defaultSkill = [string]$row['D']
    basePoise = NumberOrZero $source['E']
    somber = (NumberOrZero $source['D']) -ne 0
    allowAshOfWar = (NumberOrZero $source['AE']) -ne 0
    swingType = [string]$source['Z']
    thrustType = [string]$source['AA']
  }
}

$warAshSheet = @(Read-Sheet $sourceBook 'worksheets/sheet5.xml' $true)
$warAshHeader = $warAshSheet[0]
$warAshes = foreach ($row in @($warAshSheet | Select-Object -Skip 1)) {
  if (-not $row['A'] -or -not $row['B']) { continue }
  $categories = @(
    foreach ($column in $warAshHeader.Keys) {
      if ($column -in @('A', 'B', 'C') -or $column.Length -gt 2) { continue }
      if ((NumberOrZero $row[$column]) -ne 0 -and $warAshHeader[$column]) { [string]$warAshHeader[$column] }
    }
  )
  [ordered]@{
    id = [int]$row['A']
    name = [string]$row['B']
    affinity = [string]$row['C']
    categories = @($categories | Sort-Object -Unique)
  }
}

$specialSheet = @(Read-Sheet $sourceBook 'worksheets/sheet11.xml' $true)
$specialHeader = $specialSheet[0]
$specialVariants = foreach ($row in @($specialSheet | Select-Object -Skip 1)) {
  if (-not $row['A']) { continue }
  $variants = [ordered]@{}
  foreach ($column in $specialHeader.Keys) {
    if ($column -eq 'A' -or -not $specialHeader[$column] -or -not $row[$column]) { continue }
    $variants[[string]$specialHeader[$column]] = [string]$row[$column]
  }
  [ordered]@{ skill = [string]$row['A']; variants = $variants }
}

$buffRows = @(Read-Sheet $sourceBook 'worksheets/sheet8.xml')
$buffs = @()
foreach ($row in $buffRows) {
  $bonus = NumberOrNull $row['B']
  if (-not $row['A'] -or $null -eq $bonus) { continue }
  $targets = @($row['C'], $row['D'] | Where-Object { $_ })
  $buffs += [ordered]@{
    id = ('excel-skill-buff-{0:d3}' -f ($buffs.Count + 1))
    name = [string]$row['A']
    category = [string]$row['F']
    multiplier = 1 + $bonus
    targets = @($targets)
    restriction = [string]$row['E']
    note = [string]$row['G']
  }
}

$header = @'
// @generated from the local Elden Ring v1.16 weapon-skill calculator workbook; do not edit by hand.
// Regenerate with: powershell -ExecutionPolicy Bypass -File scripts/extract-weapon-skill-data.ps1

import type { DamageType } from '../../lib/ar.ts';

export interface SkillAttack {
  readonly id: number;
  readonly skill: string;
  readonly note: string;
  readonly kind: string;
  readonly valueDescription: string;
  readonly motionValues: Readonly<Partial<Record<DamageType, number>>>;
  readonly baseDamage: Readonly<Partial<Record<DamageType, number>>>;
  readonly physicalTypeId: number;
  readonly impact: number;
  readonly poiseDamage: number;
  readonly poiseMultiplier: number;
  readonly statusMultiplier: number;
  readonly enchantMultiplier: number;
  readonly specialCorrectionId: number;
  readonly buildup: number | null;
  readonly forcedEnchantType: string;
  readonly forcedEnchantAttack: number;
  readonly status: string;
  readonly statusValue: number;
  readonly statusScales: boolean;
  readonly specialTypes: readonly string[];
}

export interface SkillWeapon {
  readonly id: number;
  readonly name: string;
  readonly category: string;
  readonly defaultSkill: string;
  readonly basePoise: number;
  readonly somber: boolean;
  readonly allowAshOfWar: boolean;
  readonly swingType: string;
  readonly thrustType: string;
}

export interface WarAsh {
  readonly id: number;
  readonly name: string;
  readonly affinity: string;
  readonly categories: readonly string[];
}

export interface SpecialSkillVariant {
  readonly skill: string;
  readonly variants: Readonly<Record<string, string>>;
}

export interface SkillBuff {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly multiplier: number;
  readonly targets: readonly string[];
  readonly restriction: string;
  readonly note: string;
}

'@
$payload = [ordered]@{
  attacks = @($attacks)
  weapons = @($skillWeapons)
  warAshes = @($warAshes)
  specialVariants = @($specialVariants)
  buffs = @($buffs)
}
$json = $payload | ConvertTo-Json -Compress -Depth 12 | ConvertFrom-Json
$body = "export const SKILL_ATTACKS: readonly SkillAttack[] = $($json.attacks | ConvertTo-Json -Compress -Depth 12) as const;`n"
$body += "export const SKILL_WEAPONS: readonly SkillWeapon[] = $($json.weapons | ConvertTo-Json -Compress -Depth 12) as const;`n"
$body += "export const WAR_ASHES: readonly WarAsh[] = $($json.warAshes | ConvertTo-Json -Compress -Depth 12) as const;`n"
$body += "export const SPECIAL_SKILL_VARIANTS: readonly SpecialSkillVariant[] = $($json.specialVariants | ConvertTo-Json -Compress -Depth 12) as const;`n"
$body += "export const SKILL_BUFFS: readonly SkillBuff[] = $($json.buffs | ConvertTo-Json -Compress -Depth 12) as const;`n"
[IO.File]::WriteAllText($output, $header + $body, [Text.UTF8Encoding]::new($false))

Write-Output "Generated $output"
Write-Output "Attacks: $(@($attacks).Count); weapons: $(@($skillWeapons).Count); war ashes: $(@($warAshes).Count); variants: $(@($specialVariants).Count); buffs: $(@($buffs).Count)"
