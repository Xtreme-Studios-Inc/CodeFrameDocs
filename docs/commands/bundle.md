---
sidebar_position: 5
---

Copies the resources specified in the configuration.
From the specified "from" path to the "to" path. This allows all these resources to be bundled in to one folder.

## Command

```bash
cf bundle
```

#### Aliases

`bun`

#### Arguments

###### Non Positional Arguments

_Dry Run_
--dry-run
-d

_Verbose_
--verbose ??
-v

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
