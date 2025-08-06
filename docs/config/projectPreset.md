currently the only supported toolchain is the cpp clang toolchain

in the future we aim to support more languages making codeframe your one stop project management solution promising consistency

`type`:
The main language or project type (e.g., cpp).

`details`:
Key settings for your toolchain, such as:

- `compiler`: Which compiler to use (e.g., clang)
- `cppVersion`: C++ language standard (e.g., c++23)
- `cVersion`: C language standard (e.g., c23)

## Example

```json title=".codeframe"
{
  "projectPreset": {
    "type": "cpp",
    "details": {
      "compiler": "clang",
      "cppVersion": "c++23",
      "cVersion": "c23"
    }
  }
}
```
