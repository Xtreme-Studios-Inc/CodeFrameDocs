---
sidebar_position: 4
---

Run your own commands.
Executes any script defined in your `.codeframe` configuration—just like `bun run` or `npm run`.

## Command

```bash
cf run [scriptName]
```

#### Aliases

`r`

You can also run scripts directly:

```bash
cf [scriptName]
```

(e.g., `cf start`)

## Configuration

Define your scripts in the `.codeframe` file under the `scripts` section:

```json
"scripts": {
    "start": "echo 'run[ ./build/default/[PROJECT_NAME].exe ]'",
    "build": "codeframe build",
    "build:release": "codeframe build m=release",
    "build:debug": "rm -rf './build/debug' && codeframe build m=debug && echo run:[ ./build/debug/[PROJECT_NAME].exe ]",
    "debug:start": "./build/debug/[PROJECT_NAME].exe",
    "clear": "clear:build",
    "clear:build": "rm -rf build && mkdir build"
  },
```
