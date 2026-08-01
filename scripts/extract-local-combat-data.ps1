$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.IO.Compression.FileSystem

$root = Split-Path -Parent $PSScriptRoot
$sourceBook = Join-Path $root '倍率文件(Ver.+1.16.2).xlsx'
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
    $shared = New-Object 'System.Collections.Generic.List[string]'
    $sharedText = Read-ZipText $zip 'xl/sharedStrings.xml'
    if ($sharedText) {
      $sharedDocument = [xml]$sharedText
      foreach ($item in $sharedDocument.SelectNodes('//x:si', $namespace)) { $shared.Add([string]$item.InnerText) }
    }
    $sheetDocument = [xml](Read-ZipText $zip ("xl/" + $sheetFile))
    $rows = @($sheetDocument.worksheet.sheetData.row)
    if ($rows.Count -eq 0) { return @() }
    $headers = @{}
    foreach ($cell in $rows[0].c) {
      $headers[[string]$cell.r -replace '\d+', ''] = Read-CellValue $cell $shared $namespace
    }
    $result = foreach ($row in ($rows | Select-Object -Skip 1)) {
      $record = [ordered]@{}
      foreach ($key in $headers.Keys) { $record[$headers[$key]] = '' }
      foreach ($cell in $row.c) {
        $column = ([string]$cell.r -replace '\d+', '')
        if ($headers.Contains($column)) { $record[$headers[$column]] = Read-CellValue $cell $shared $namespace }
      }
      [pscustomobject]$record
    }
    return $result
  } finally { $zip.Dispose() }
}

function NumberParts($value) {
  if ($null -eq $value) { return $null }
  $text = ([string]$value).Trim()
  if ([string]::IsNullOrWhiteSpace($text)) { return $null }
  $matches = [regex]::Matches($text, '-?\d+(?:\.\d+)?')
  if ($matches.Count -eq 0) { return $null }
  foreach ($match in $matches) {
    [double]::Parse($match.Value, [Globalization.CultureInfo]::InvariantCulture)
  }
}

function NumberOrNull($value) {
  $parts = @(NumberParts $value)
  if ($parts.Count -eq 0) { return $null }
  $sum = 0.0
  foreach ($part in $parts) { $sum += $part }
  return $sum
}

function SumParts($parts) {
  if ($null -eq $parts -or $parts.Count -eq 0) { return $null }
  $sum = 0.0
  foreach ($part in $parts) { $sum += $part }
  return $sum
}

function IntOrNull($value) {
  $number = NumberOrNull $value
  if ($null -eq $number) { return $null }
  return [int]$number
}

function PhysicalAttackTypeParts($value) {
  if ($null -eq $value) { return @() }
  foreach ($match in [regex]::Matches([string]$value, '普通|斩击|打击|突刺')) { $match.Value }
}

function BooleanValue($value) {
  $text = ([string]$value).Trim()
  return $text -eq '1' -or $text -eq 'TRUE'
}

$weaponRows = Read-Sheet $sourceBook 'worksheets/sheet35.xml'
$weaponByName = [ordered]@{}
foreach ($row in $weaponRows) {
  $weapon = [string]$row.'武器名'
  $action = [string]$row.'动作'
  if ([string]::IsNullOrWhiteSpace($weapon) -or [string]::IsNullOrWhiteSpace($action)) { continue }
  if (-not $weaponByName.Contains($weapon)) {
    $weaponByName[$weapon] = [ordered]@{
      weaponClass = $row.'武器种类'
      weapon = $weapon
      actions = [ordered]@{}
    }
  }
  $damageMultiplierParts = @(NumberParts $row.'动作倍率')
  $pvePoiseParts = @(NumberParts $row.'PVE削韧值')
  $weaponByName[$weapon].actions[$action] = [ordered]@{
    damageMultiplier = SumParts $damageMultiplierParts
    damageMultiplierParts = $damageMultiplierParts
    damageMultiplierText = [string]$row.'动作倍率'
    pvePoise = SumParts $pvePoiseParts
    pvePoiseParts = $pvePoiseParts
    pvePoiseText = [string]$row.'PVE削韧值'
    physicalAttackType = [string]$row.'物理攻击类型'
    physicalAttackTypes = @(PhysicalAttackTypeParts $row.'物理攻击类型')
  }
}
$weaponActions = @($weaponByName.Values)

$spellRows = Read-Sheet $sourceBook 'worksheets/sheet20.xml'
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

$enemyRows = Read-Sheet $sourceBook 'worksheets/sheet36.xml'
$clearCountRows = Read-Sheet $sourceBook 'worksheets/sheet29.xml'
$defenseColumns = [ordered]@{
  physical = '基础防御 phys'; magic = '基础防御 mag'; fire = '基础防御 fire'; lightning = '基础防御 thunder'; holy = '基础防御 dark'
}
$defenseScaleColumns = [ordered]@{
  physical = '常驻防御倍率 phys'; magic = '常驻防御倍率 mag'; fire = '常驻防御倍率 fire'; lightning = '常驻防御倍率 thunder'; holy = '常驻防御倍率 dark'
}
$newGameDefenseScaleColumns = [ordered]@{
  physical = '周目防御倍率 phys'; magic = '周目防御倍率 mag'; fire = '周目防御倍率 fire'; lightning = '周目防御倍率 thunder'; holy = '周目防御倍率 dark'
}
$cutColumns = [ordered]@{
  standard = '承伤倍率 普通'; slash = '承伤倍率 斩击'; strike = '承伤倍率 打击'; thrust = '承伤倍率 突刺'; magic = '承伤倍率 魔力'; fire = '承伤倍率 火'; lightning = '承伤倍率 雷'; holy = '承伤倍率 圣'
}
$statusColumns = [ordered]@{
  poison = '毒'; rot = '腐败'; bleed = '出血'; frost = '冻伤'; sleep = '睡眠'; madness = '发狂'; death = '抗死度'
}
$clearCountDefenseColumns = [ordered]@{
  physical = 'PhysicsDefenseRate'; magic = 'MagicDefenseRate'; fire = 'FireDefenseRate'; lightning = 'ThunderDefenseRate'; holy = 'DarkDefenseRate'
}
$clearCountStatusColumns = [ordered]@{
  poison = 'PoisionResistRate'; rot = 'DiseaseResistRate'; bleed = 'BloodResistRate'; frost = 'FreezeResistRate'; sleep = 'SleepResistRate'; madness = 'MadnessResistRate'; death = 'CurseResistRate'
}
$clearCountScaling = foreach ($row in $clearCountRows) {
  $cycle = IntOrNull $row.'ClearCount ID'
  if ($null -eq $cycle -or $cycle -lt 1 -or $cycle -gt 7) { continue }
  $defense = [ordered]@{}
  foreach ($key in $clearCountDefenseColumns.Keys) { $defense[$key] = NumberOrNull $row.($clearCountDefenseColumns[$key]) }
  $statusResistance = [ordered]@{}
  foreach ($key in $clearCountStatusColumns.Keys) { $statusResistance[$key] = NumberOrNull $row.($clearCountStatusColumns[$key]) }
  [ordered]@{
    cycle = $cycle
    hp = NumberOrNull $row.MaxHpRate
    defense = $defense
    statusResistance = $statusResistance
    poiseDamage = NumberOrNull $row.SuperArmorDamageRate
  }
}
$enemyData = foreach ($row in $enemyRows) {
  $npcId = IntOrNull $row.'NpcParam ID'
  if ($null -eq $npcId -or [string]::IsNullOrWhiteSpace($row.'中文名（官方/Smithbox）')) { continue }
  $defense = [ordered]@{}
  foreach ($key in $defenseColumns.Keys) { $defense[$key] = NumberOrNull $row.($defenseColumns[$key]) }
  $defenseScale = [ordered]@{}
  foreach ($key in $defenseScaleColumns.Keys) { $defenseScale[$key] = NumberOrNull $row.($defenseScaleColumns[$key]) }
  $newGameDefenseScale = [ordered]@{}
  foreach ($key in $newGameDefenseScaleColumns.Keys) { $newGameDefenseScale[$key] = NumberOrNull $row.($newGameDefenseScaleColumns[$key]) }
  $damageTaken = [ordered]@{}
  foreach ($key in $cutColumns.Keys) { $damageTaken[$key] = NumberOrNull $row.($cutColumns[$key]) }
  $baseStatusResistance = [ordered]@{}
  $statusResistance = [ordered]@{}
  $newGameStatusScale = [ordered]@{}
  $statusImmunity = [ordered]@{}
  foreach ($key in $statusColumns.Keys) {
    $label = $statusColumns[$key]
    $baseStatusResistance[$key] = NumberOrNull $row.("基础抗性 $label")
    $statusResistance[$key] = NumberOrNull $row.("常驻后抗性 $label")
    $newGameStatusScale[$key] = NumberOrNull $row.("周目抗性倍率 $label")
    $statusImmunity[$key] = BooleanValue $row.("常驻免疫 $label")
  }
  [ordered]@{
    kind = $row.'类型（含内部参数）'
    bossFlagId = IntOrNull $row.'BossFlag ID'
    npcParamId = $npcId
    name = $row.'中文名（官方/Smithbox）'
    nameEn = $row.'English (official/Smithbox)'
    region = $row.'区域'
    hp = NumberOrNull $row.'常驻后 HP'
    gameClearHpScale = NumberOrNull $row.'GameClear HP 倍率'
    saDurability = NumberOrNull $row.'SA 耐久'
    defense = $defense
    defenseScale = $defenseScale
    newGameDefenseScale = $newGameDefenseScale
    damageTaken = $damageTaken
    baseStatusResistance = $baseStatusResistance
    statusResistance = $statusResistance
    newGameStatusScale = $newGameStatusScale
    statusImmunity = $statusImmunity
  }
}

$payload = [ordered]@{
  source = '本地 Excel：倍率文件(Ver.+1.16.2).xlsx'
  weaponActions = @($weaponActions)
  spells = @($spellData)
  enemies = @($enemyData)
  clearCountScaling = @($clearCountScaling)
}
$json = $payload | ConvertTo-Json -Compress -Depth 20
$header = @'
// @generated from local Excel workbooks; do not edit by hand.
// Regenerate with: powershell -ExecutionPolicy Bypass -File scripts/extract-local-combat-data.ps1

export interface WeaponCombatAction {
  readonly damageMultiplier: number | null;
  readonly damageMultiplierParts: readonly number[];
  readonly damageMultiplierText: string;
  readonly pvePoise: number | null;
  readonly pvePoiseParts: readonly number[];
  readonly pvePoiseText: string;
  readonly physicalAttackType: string;
  readonly physicalAttackTypes: readonly string[];
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
  readonly gameClearHpScale: number | null;
  readonly saDurability: number | null;
  readonly defense: Readonly<Record<string, number | null>>;
  readonly defenseScale: Readonly<Record<string, number | null>>;
  readonly newGameDefenseScale: Readonly<Record<string, number | null>>;
  readonly damageTaken: Readonly<Record<string, number | null>>;
  readonly baseStatusResistance: Readonly<Record<string, number | null>>;
  readonly statusResistance: Readonly<Record<string, number | null>>;
  readonly newGameStatusScale: Readonly<Record<string, number | null>>;
  readonly statusImmunity: Readonly<Record<string, boolean>>;
}

export interface ClearCountScaling {
  readonly cycle: number;
  readonly hp: number | null;
  readonly defense: Readonly<Record<string, number | null>>;
  readonly statusResistance: Readonly<Record<string, number | null>>;
  readonly poiseDamage: number | null;
}

'@
$body = "export const LOCAL_COMBAT_SOURCE = $($payload.source | ConvertTo-Json -Compress) as const;`nexport const WEAPON_COMBAT_ACTIONS: readonly WeaponCombatRow[] = $($json | ConvertFrom-Json | Select-Object -ExpandProperty weaponActions | ConvertTo-Json -Compress -Depth 20) as const;`nexport const SPELL_COMBAT_DATA: readonly SpellCombatRow[] = $($json | ConvertFrom-Json | Select-Object -ExpandProperty spells | ConvertTo-Json -Compress -Depth 20) as const;`nexport const ENEMY_COMBAT_DATA: readonly EnemyCombatRow[] = $($json | ConvertFrom-Json | Select-Object -ExpandProperty enemies | ConvertTo-Json -Compress -Depth 20) as const;`nexport const CLEAR_COUNT_SCALING: readonly ClearCountScaling[] = $($json | ConvertFrom-Json | Select-Object -ExpandProperty clearCountScaling | ConvertTo-Json -Compress -Depth 20) as const;`n"
[IO.File]::WriteAllText($output, $header + $body, (New-Object Text.UTF8Encoding($false)))
Write-Output "Generated $output"
Write-Output "Weapon rows: $(@($weaponActions).Count); spell rows: $(@($spellData).Count); enemy rows: $(@($enemyData).Count)"
