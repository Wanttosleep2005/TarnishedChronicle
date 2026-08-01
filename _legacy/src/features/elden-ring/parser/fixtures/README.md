# Anonymized Save Fixtures

Real `ER0000.sl2` fixtures are intentionally not committed because they may
contain personal Steam identifiers and game-progress data. Before release, add
an anonymized valid multi-slot fixture here and verify its source-file hash is
unchanged before and after importing it. Unit tests in this repository use
bounded synthetic buffers for header and mapping safety.
