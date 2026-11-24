# vaultkeepermcp.dev

Marketing site for VaultKeeper MCP, deployed via GitHub Pages at
[vaultkeepermcp.dev](https://vaultkeepermcp.dev).

## Structure

- `index.html` — Home
- `docs/` — Docs
- `logos/` — Logo options (design reference, not linked from nav)
- `tests/` — Measurement-ID and tracker pin for the analytics wiring

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

## Analytics

GA4 property `VaultKeeper MCP (vaultkeepermcp.dev)` (account Axelroark,
property id 565785163), measurement ID `G-SWDQLSGE4Y`. The only
third-party request is `googletagmanager.com/gtag/js`. Run the pin with
`npm test` (or `node --test tests/analytics.test.mjs`); it checks the ID and the
tracker wiring on every page and the README.
