---
sidebar_position: 5
---

Run your own commands.  
Executes any script defined in your `.codeframe` configuration—just like `bun run` or `npm run`.

## Command

```bash
cf run <scriptName>
```

### Aliases

`run`, `r`

You can also run scripts directly:

```bash
cf [scriptName]
```

(e.g., `cf start`)

## Configuration

Define your scripts in the `.codeframe` file under the `scripts` section:

```json title=".codeframe"
"scripts": {
    "start": "echo 'run[ ./build/default/[PROJECT_NAME].exe ]'",
    "build": "codeframe build",
    "build:release": "codeframe build m=release",
    "clear": "cf clear:build",
    "clear:build": "rm -rf build && mkdir build"
  },
```
