# Ship Safe — VS Code Extension

Real-time security scanning inside your editor. 23 AI agents detect leaked secrets, prompt injections, MCP misconfigs, and CVEs as you save.

Powered by the [Ship Safe CLI](https://github.com/asamassekou10/ship-safe).

---

## Features

- **Inline diagnostics** — findings show as squigglies on the exact line and column
- **Status bar score** — live security score for the workspace
- **Auto-scan on save** — toggleable per-file scanning
- **Watch mode** — continuous scanning of the active workspace
- **Workspace report** — `Ship Safe: Show Report` opens the full findings list
- **Configurable severity threshold** — `low` / `medium` / `high` / `critical`

## Requirements

The extension shells out to the Ship Safe CLI. Install it once, globally:

```bash
npm install -g ship-safe
```

The extension will detect and use the global install. No API key required for local scans — pass `shipSafe.deep: true` if you want AI-assisted exploitability analysis (uses your own provider key).

## Commands

| Command | Description |
|---|---|
| `Ship Safe: Scan Workspace` | Full scan of the open workspace |
| `Ship Safe: Scan Current File` | Scan just the active editor file |
| `Ship Safe: Show Report` | Open the last scan's full report |
| `Ship Safe: Toggle Watch Mode` | Continuous scan on save |

## Configuration

| Setting | Default | Description |
|---|---|---|
| `shipSafe.autoScanOnSave` | `true` | Scan a file the moment you save it |
| `shipSafe.severity` | `medium` | Minimum severity surfaced as a diagnostic |
| `shipSafe.showInlineHints` | `true` | Render inline finding labels |
| `shipSafe.deep` | `false` | Enable AI deep analysis (provider key required) |

## Development

```bash
git clone https://github.com/asamassekou10/ship-safe-vscode
cd ship-safe-vscode
npm install
npm run compile     # or `npm run watch` for incremental builds
```

Press **F5** in VS Code to launch an Extension Development Host with the extension loaded.

### Packaging

```bash
npm run package     # produces ship-safe-X.Y.Z.vsix
```

### Publishing

```bash
npm run publish     # requires a marketplace PAT via `vsce login`
```

## License

MIT — see [LICENSE](./LICENSE).

## Related

- [Ship Safe CLI](https://github.com/asamassekou10/ship-safe) — the scanner itself
- [shipsafecli.com](https://www.shipsafecli.com) — docs & dashboard
