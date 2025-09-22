:::note Note
Use custom flags only as a last resort for convenience flags like extra defines or library links not covered by the package manager. Do not use them to change core optimizations, warnings, debugging, or language version flags—CodeFrame handles those automatically.
:::

The `custom` property is intended for adding project-specific flags to the build process.  
These flags are directly injected into the underlying compilation and linking commands.

`compileFlags`:

```json
"compileFlags": ["-DDEFINE_1", "-DDEFINE_2"]
```

A array of flags applied to every object’s compilation command.

`linkFlags`:

```json
"linkFlags": ["-llib-1", "-llib-2"]
```

An array of flags applied to the final link command.

:::warning Reserved Flags
CodeFrame automatically manages many common compiler and linker options.  
**Do not add these manually in `custom.compileFlags` or `custom.linkFlags`,** as doing so may cause conflicts or undefined behavior.

### Flags automatically handled by CodeFrame

- **Warnings & Errors**  
  `-Wall`, `-Wextra`, `-Werror`, `-pedantic`

- **Optimization & Performance**  
  `-O0`, `-O2`, `-O3`, `-march=native`

- **Debugging**  
  `-g`, `-fsanitize=address`, `-fsanitize=undefined`

- **Language / Standard Control**  
  `-std=<...>`, `-fno-exceptions`, `-fno-rtti`

Use the **custom** section only for project-specific flags that are not already managed by CodeFrame.
:::
