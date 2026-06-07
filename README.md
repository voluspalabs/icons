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

## Scripts

- `bun run build` builds the package into `dist`.
- `bun run site:dev` starts the Vite presentation site.
- `bun run site:build` builds the presentation site.
- `bun run ci` runs package build, site build, Biome, and package export checks.
