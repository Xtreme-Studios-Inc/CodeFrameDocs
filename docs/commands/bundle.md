---
sidebar_position: 4
---

Copies the resources defined in the configuration from the specified "from" path to the "to" path, bundling them together into a single folder.

## Command

```bash
cf bundle
```

### Aliases

`bundle`, `bun`

## Arguments

None.

## Configuration

```json
"bundle": {
    "bundlePath": "build/bundle",
    "resources": [
      {
        "from": "./build/release/chorse.exe",
        "to": "./bin/chorse.exe"
      },
      {
        "from": "./Assets/project_templates",
        "to": "./project_templates"
      },
      {
        "from": "./Assets/schematic-configs",
        "to": "./schematic-configs"
      }
    ]
  }
```
