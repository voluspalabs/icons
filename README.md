# @voluspalabs/icons

React SVG icons from Voluspa Labs.

## Install

```sh
bun add @voluspalabs/icons react
```

## Usage

```tsx
import { PiGithubStroke } from "@voluspalabs/icons";

export function Example() {
  return <PiGithubStroke aria-hidden="true" />;
}
```

Subpath imports are also supported:

```tsx
import { PiGithubStroke } from "@voluspalabs/icons/pi-github-stroke";
```

## For LLMs / AI agents

Agents can search and fetch icons without cloning this repo. Start at `/llms.txt`
(served at the site root), which documents everything below.

- **MCP server (recommended):** `<site>/api/mcp` — Streamable HTTP, tools `search_icons`,
  `get_icon`, `list_categories`. Example client config:

  ```json
  { "mcpServers": { "voluspa-icons": { "url": "https://<site>/api/mcp" } } }
  ```

- **HTTP (no MCP needed):**
  - `GET /api/search?q=arrow+right&limit=25` — token-light, returns names only.
  - `GET /api/icon?name=pi-github-stroke` — one icon as raw SVG + React import + usage.
  - `GET /i/pi-github-stroke.svg` — raw SVG file.
  - `GET /icons.json` — full compact catalog.

Token tip: search returns names only; fetch one icon at a time — never request the whole set.

## Scripts

- `bun run build` builds the package into `dist`.
- `bun run generate:llm` regenerates the LLM artifacts in `site/public`.
- `bun run site:dev` starts the Vite presentation site.
- `bun run site:build` regenerates LLM artifacts, then builds the presentation site.
- `bun run ci` runs package build, site build, Biome, and package export checks.
