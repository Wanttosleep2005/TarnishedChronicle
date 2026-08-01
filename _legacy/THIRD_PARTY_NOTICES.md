# Third-Party Notices

## `@zebbedaja/er-save-parser`

- Purpose: Read-only Elden Ring PC save parsing base.
- License: MIT.
- Source: https://github.com/zebbedaja/er-save-parser

The inventory handle categories and ID recovery rules were cross-checked
against Elden Ring Compass's publicly delivered inventory module:
https://www.eldenringcompass.com/inventory/weapons-shields

The linked `EthanShoeDev/elden-ring-compass` GitHub repository had no readable
commits when this version was prepared. Save Scope contains no copied Compass
repository source, catalog, or image assets; the parser remains an independent
read-only implementation that returns IDs, handles, quantities, and source.

## Elden Ring Simplified Chinese text

- Purpose: display names for parsed inventory, Boss, and Site of Grace data.
- Source: the user's locally installed Elden Ring `msg/zhocn` message bundles,
  including the Shadow of the Erdtree message bundle.
- Scope: generated text lookup data only; no game archive or extracted image
  asset is included.
- Usage: this local-first build is for personal use. Elden Ring and related
  content remain the property of FromSoftware and Bandai Namco Entertainment.
