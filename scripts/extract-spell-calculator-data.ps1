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
$catalystOutput = Join-Path $root 'src/renderer/src/data/generated/spell-catalyst-graphs.ts'

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
  try {
    return [double]::Parse([string]$value, [Globalization.CultureInfo]::InvariantCulture)
  } catch {
    return $null
  }
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

function Column-Name([int]$index) {
  $name = ''
  while ($index -gt 0) {
    $mod = ($index - 1) % 26
    $name = [char](65 + $mod) + $name
    $index = [int](($index - 1) / 26)
  }
  return $name
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

$catalystParams = @{}
$usedGraphs = [System.Collections.Generic.SortedSet[int]]::new()
foreach ($row in $catalystRows) {
  if (-not $row['A'] -or -not $row['B']) { continue }
  $itemId = [int]$row['A']
  $catalystKey = "$itemId`:$($row['C'])"
  if (-not $catalystParams.ContainsKey($catalystKey)) {
    $catalystParams.Add($catalystKey, [ordered]@{
      graphs = [ordered]@{
        physical = [int](NumberOrZero $row['N'])
        magic = [int](NumberOrZero $row['O'])
        fire = [int](NumberOrZero $row['P'])
        lightning = [int](NumberOrZero $row['Q'])
        holy = [int](NumberOrZero $row['R'])
      }
      statusGraph = [int](NumberOrZero $row['S'])
      correct = [ordered]@{
        str = NumberOrZero $row['I']
        dex = NumberOrZero $row['J']
        int = NumberOrZero $row['K']
        fai = NumberOrZero $row['L']
        arc = NumberOrZero $row['M']
      }
    })
  }
  foreach ($graphColumn in @('N', 'O', 'P', 'Q', 'R', 'S')) {
    [void]$usedGraphs.Add([int](NumberOrZero $row[$graphColumn]))
  }
}

$curveRows = Read-Sheet $sourceBook 'worksheets/sheet11.xml'
$curveByGraph = @{}
foreach ($row in $curveRows) {
  $graph = [int](NumberOrZero $row['A'])
  if (-not $usedGraphs.Contains($graph)) { continue }
  $values = [System.Collections.Generic.List[double]]::new()
  for ($stat = 1; $stat -le 148; $stat++) {
    $values.Add([double](NumberOrZero $row[(Column-Name ($stat + 1))]) / 100.0)
  }
  $curveByGraph[[string]$graph] = [ordered]@{ values = $values }
}

$usedWeaponUpIds = [System.Collections.Generic.SortedSet[int]]::new()
foreach ($row in $catalystRows) {
  if (-not $row['A'] -or -not $row['B']) { continue }
  $curve = [int](NumberOrZero $row['H'])
  $somber = (NumberOrZero $row['G']) -ne 0
  if ($curve -eq 3000) {
    [void]$usedWeaponUpIds.Add($curve)
  } elseif ($somber) {
    for ($level = 0; $level -le 10; $level++) {
      [void]$usedWeaponUpIds.Add($curve + $level)
    }
  } else {
    for ($level = 0; $level -le 25; $level++) {
      [void]$usedWeaponUpIds.Add($curve + $level)
    }
  }
}

$weaponUpRows = Read-Sheet $sourceBook 'worksheets/sheet8.xml'
$weaponUpByLevel = @{}
foreach ($row in $weaponUpRows) {
  $id = [int](NumberOrZero $row['A'])
  if (-not $usedWeaponUpIds.Contains($id)) { continue }
  $weaponUpByLevel[[string]$id] = [ordered]@{
    str = NumberOrZero $row['B']
    dex = NumberOrZero $row['C']
    int = NumberOrZero $row['D']
    fai = NumberOrZero $row['E']
    arc = NumberOrZero $row['F']
  }
}

$usedAtkCorrectIds = [System.Collections.Generic.SortedSet[int]]::new()
foreach ($row in $catalystRows) {
  if (-not $row['A'] -or -not $row['B']) { continue }
  [void]$usedAtkCorrectIds.Add([int](NumberOrZero $row['T']))
}

$atkCorrectRows = Read-Sheet $sourceBook 'worksheets/sheet6.xml'
$atkCorrectByType = [ordered]@{
  physical = @('B', 'C', 'D', 'E', 'F')
  magic = @('G', 'H', 'I', 'J', 'K')
  fire = @('L', 'M', 'N', 'O', 'P')
  lightning = @('Q', 'R', 'S', 'T', 'U')
  holy = @('V', 'W', 'X', 'Y', 'Z')
}
$atkAttrs = @('str', 'dex', 'int', 'fai', 'arc')
$atkCorrects = @{}
foreach ($row in $atkCorrectRows) {
  $id = [int](NumberOrZero $row['A'])
  if (-not $usedAtkCorrectIds.Contains($id)) { continue }
  $record = [ordered]@{}
  foreach ($entry in $atkCorrectByType.GetEnumerator()) {
    $attrRecord = [ordered]@{}
    for ($attrIndex = 0; $attrIndex -lt $atkAttrs.Count; $attrIndex++) {
      $attrRecord[$atkAttrs[$attrIndex]] = (NumberOrZero $row[$entry.Value[$attrIndex]]) -ne 0
    }
    $record[$entry.Key] = $attrRecord
  }
  $atkCorrects[[string]$id] = $record
}

$scaduDamageByLevel = @{}
$scaduTakenByLevel = @{}
# Scadu blessing growth rows (Curve sheet rows 20/21); kept explicit because
# PowerShell pipeline indexing of sparse XML rows is not reliable.
$scaduDamageValues = @(1, 1.1, 1.2, 1.25, 1.3, 1.35, 1.425, 1.5, 1.55, 1.6, 1.65, 1.75, 1.85, 1.875, 1.9, 1.925, 1.95, 1.975, 2, 2.025, 2.05)
$scaduTakenValues = @(1, 0.90909094, 0.8333333, 0.8, 0.7692308, 0.7407407, 0.7017544, 0.6666667, 0.6451613, 0.625, 0.6060606, 0.5714286, 0.5405405, 0.53333336, 0.5263158, 0.5194805, 0.51282054, 0.5063291, 0.5, 0.49382716, 0.4878049)
for ($level = 0; $level -le 20; $level++) {
  $scaduDamageByLevel[[string]$level] = $scaduDamageValues[$level]
  $scaduTakenByLevel[[string]$level] = $scaduTakenValues[$level]
}
$scaduGrowth = [ordered]@{}
for ($level = 0; $level -le 20; $level++) {
  $scaduGrowth[[string]$level] = [ordered]@{
    damageMultiplier = $scaduDamageByLevel[[string]$level]
    damageTakenMultiplier = $scaduTakenByLevel[[string]$level]
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

$catalystHeader = @'
// @generated from the local spell calculator workbook; do not edit by hand.
// Regenerate with: powershell -ExecutionPolicy Bypass -File scripts/extract-spell-calculator-data.ps1

export interface SpellCatalystParams {
  readonly graphs: Readonly<{
    physical: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
  }>;
  readonly statusGraph: number;
  readonly correct: Readonly<{ str: number; dex: number; int: number; fai: number; arc: number }>;
}

export interface SpellCurveGraph {
  readonly values: readonly number[];
}

export interface SpellWeaponUpGrowth {
  readonly str: number;
  readonly dex: number;
  readonly int: number;
  readonly fai: number;
  readonly arc: number;
}

export interface SpellAtkCorrect {
  readonly physical: Readonly<{ str: boolean; dex: boolean; int: boolean; fai: boolean; arc: boolean }>;
  readonly magic: Readonly<{ str: boolean; dex: boolean; int: boolean; fai: boolean; arc: boolean }>;
  readonly fire: Readonly<{ str: boolean; dex: boolean; int: boolean; fai: boolean; arc: boolean }>;
  readonly lightning: Readonly<{ str: boolean; dex: boolean; int: boolean; fai: boolean; arc: boolean }>;
  readonly holy: Readonly<{ str: boolean; dex: boolean; int: boolean; fai: boolean; arc: boolean }>;
}

export interface SpellScaduGrowth {
  readonly damageMultiplier: number;
  readonly damageTakenMultiplier: number;
}

'@
$paramsJson = $catalystParams | ConvertTo-Json -Compress -Depth 10
$curvesJson = $curveByGraph | ConvertTo-Json -Compress -Depth 10
$weaponUpJson = $weaponUpByLevel | ConvertTo-Json -Compress -Depth 10
$atkCorrectJson = $atkCorrects | ConvertTo-Json -Compress -Depth 10
$scaduJson = $scaduGrowth | ConvertTo-Json -Compress -Depth 10
$catalystBody = "export const SPELL_CATALYST_PARAMS: Readonly<Record<string, SpellCatalystParams>> = $paramsJson;`nexport const SPELL_CURVE_GRAPHS: Readonly<Record<number, SpellCurveGraph>> = $curvesJson;`nexport const SPELL_WEAPON_UP_GROWTH: Readonly<Record<number, SpellWeaponUpGrowth>> = $weaponUpJson;`nexport const SPELL_ATK_CORRECTS: Readonly<Record<number, SpellAtkCorrect>> = $atkCorrectJson;`nexport const SPELL_SCADU_GROWTH: Readonly<Record<number, SpellScaduGrowth>> = $scaduJson;`n"
[IO.File]::WriteAllText($catalystOutput, $catalystHeader + $catalystBody, [Text.UTF8Encoding]::new($false))
Write-Output "Generated $output"
Write-Output "Generated $catalystOutput"
Write-Output "Spells: $(@($spells).Count); buffs: $(@($buffs).Count); catalysts: $(@($catalysts).Count); curves: $($usedGraphs.Count); weaponUp: $(@($weaponUpByLevel).Count); atkCorrects: $(@($atkCorrects).Count)"
