# vaultkeepermcp.dev

Marketing site for VaultKeeper MCP, deployed via GitHub Pages at
[vaultkeepermcp.dev](https://vaultkeepermcp.dev).

## Structure

- `index.html` — Home
- `docs/` — Docs
- `logos/` — Logo options (design reference, not linked from nav)

Extracted from a single-file design bundle; assets live in per-page `assets/` directories.

## Deploy

GitHub Pages serves this repo from `main` at the apex domain `vaultkeepermcp.dev`
(`CNAME` pins the custom domain). DNS must point at the Pages servers:

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www    nhangen.github.io
```

## Local preview

```
python3 -m http.server 8000
```
