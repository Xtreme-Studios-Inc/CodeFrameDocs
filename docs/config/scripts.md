---
sidebar_position: 2
---

Scripts in CodeFrame let you define your own custom commands and automation steps—mixing system commands, CodeFrame operations, and chained combos—right inside your project config.  
Call any script with `cf run <scriptName>` for consistent, repeatable workflows.  
Scripts can run shell commands, invoke other CodeFrame commands, or combine multiple actions into a single shortcut,  
making your build and dev process faster and less error-prone.

## Supported Script Concepts

### System Commands

Direct calls to system tools or shell commands

Examples:

```json title="codeframe -> scripts"
{
  "clear": "rm -rf build",
  "list": "ls -l",
  "hello": "echo \"Hello World\""
}
```

### Codeframe Self Reference Scripts

Invokes commands from your the Codeframe tool

Example:

```json title="codeframe -> scripts"
{
  "test-all": "cf build && cf run hello",
  "do-build": "cf build",
  "do-bundle": "codeframe bundle",
  "hello": "echo \"Hello World\"",
  "do-say-hello": "cf run hello"
}
```

### Command Chains / Groups

Calls or chains other scripts, sometimes with logic

Example:

```json title="codeframe -> scripts"
{
  "test-all": "cf build && cf run hello"
}
```

Could reference other cf or custom scripts

## Example

```json title=".codeframe -> scripts"
"scripts": {
        "build-bundle": "cf build --release && cf bundle",
        "b:debug": "rm -rf './build/debug' && codeframe build m=debug && echo run:[ ./build/debug/appName.exe ]",
        "b:release": "cf build m=release",
        "bundle": "codeframe build && codeframe bundle",
        "clear": "cf clear:build",
        "clear:build": "rm -rf build && mkdir build",
        "start": "echo \"Hello World\"",
        "test": "./build/default/codeframe.exe", // Only supports direct execution of apps that execute once and then exit. TODO: Add support for persistent or interactive processes.
        "test-all": "run make-more && run remove-more"
    },
```
