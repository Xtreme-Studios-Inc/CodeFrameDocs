---
sidebar_position: 3
---

The bundle configuration lets you define exactly which files and directories should be collected and packaged into your bundle output.  
Each resource lists a **from (source)** path and a **to (destination)** path,  
making it easy to copy executables, assets, libraries, and templates into a single bundle folder.  
Use this to gather everything your project needs for deployment or distribution—all in one place, every time you run `cf bundle`.

`bundlePath`:
The directory where your bundle will be generated.
You can name the bundle folder however you like (e.g., build/myBundle).

`resources`:
A list of resources to copy into specific locations within your bundle.
Each resource contains:

- `from`: Path to the source file or directory to copy, relative to your .codeframe config.
- `to`: Destination path (including filename), relative to the bundlePath.

## Example

```json title=".codeframe"
{
  "bundle": {
    "bundlePath": "build/bundle",
    "resources": [
      {
        "from": "./build/release/[PROJECT_NAME].exe",
        "to": "./bin/[PROJECT_NAME].exe"
      }
    ]
  }
}
```
