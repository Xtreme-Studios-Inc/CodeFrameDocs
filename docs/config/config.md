---
title: ".codeframe"
---

The main config file or rather the `.codeframe` file is found inside the project root directory.  
This file includes the following configurations:

`projectName`:  
Specify a name for your project

`appEntry`:  
Relative path to the main.cpp file

`buildDir`:  
Relative path to where the .exe file should be generated

`libsDir`:  
Relative path to where all the libraries are dropped
structure has too look like the following

`projectPreset`:  
Defines your project’s language, toolchain, and key build settings,  
letting CodeFrame auto-configure and manage your project for you.  
[more details ...](./projectPreset.md)

`scripts`:  
Define your own command combos in the scripts configuration  
and call them with `cf run <scriptName>`  
[more details ...](./scripts.md)

`dependencies`:

```typescript
type: Array<{ name: String; includeDir: String; libraryPath: String }>;
```

[more details ...](./dependencies.md)

`systemLibs`:  
To extend your project build to link to custom system libraries that are not included by default.  
[more details ...](./systemLibs.md)

`bundle`:  
Conveniently bundles everything specified in the configuration inside a bundle folder in the build directory  
[more details ...](./bundle.md)

## Example

```json title=".codeframe"
{
  "projectName": "appName",
  "appEntry": "src/main.cpp",
  "buildDir": "build",
  "libsDir": "libs",
  "scripts": {
    "start": "./build/default/appName.exe",
    "build": "codeframe build",
    "build:release": "codeframe build -m=release",
    "clear": "clear:build",
    "clear:build": "rm -rf build && mkdir build"
  },
  "dependencies": [
    {
      "name": "CodeFrame",
      "includePath": "codeframe",
      "libPath": "codeframe",
      "custom": true
    }
  ],
  "bundle": {
    "bundlePath": "build/bundle",
    "resources": [
      {
        "from": "./build/release/appName.exe",
        "to": "./bin/appName.exe"
      }
    ]
  },
  "document": {
    "docsPath": "docs"
  },
  "projectPreset": {
    "type": "cpp",
    "details": {
      "compiler": "clang",
      "cppVersion": "c++23",
      "cVersion": "c23"
    }
  },
  "systemLibs": []
}
```
