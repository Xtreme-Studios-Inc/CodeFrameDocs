---
title: "string"
---

# `string` Module

**Purpose:**  
Essential string and vector utilities for manipulating, formatting, and processing text.

## **Functions Overview**

| Function                 | Purpose                                                         |
| ------------------------ | --------------------------------------------------------------- |
| `splitString`            | Split a string by any delimiter.                                |
| `skipWhitespace`         | Advance a position index past all whitespace chars in a string. |
| `trim`                   | Remove leading/trailing whitespace from a string.               |
| `replaceAll`             | Replace **all** occurrences of a substring.                     |
| `replaceAllInMap`        | Replace multiple placeholders using a map.                      |
| `joinStringsWithNewline` | Join vector of strings with `\n` as the separator.              |
| `genString`              | Generate a string of a specific character and length.           |
| `removeIndexes`          | Remove vector elements at the given indexes.                    |

---

## **Function Details**

### `vector<string> splitString(const string& input, char delimiter);`

Splits `input` into substrings using `delimiter`.

- **Returns:** `vector<string>`
- **Example:**
  ```cpp
  auto parts = splitString("a,b,c", ','); // ["a", "b", "c"]
  ```

### `void skipWhitespace(const string& input, size_t& pos);`

Moves `pos` forward in `input` until the next non-whitespace char or end.

- **Params:**

  - `input`: string to scan
  - `pos`: (in/out) index to advance

- **Example:**
  ```cpp
  size_t p = 0;
  skipWhitespace("   hello", p); // p now at index 3
  ```

### `string trim(const string& str);`

Strips whitespace from both ends.

- **Returns:** trimmed string
- **Example:**
  ```cpp
  trim("  test "); // "test"
  ```

---

### `string replaceAll(string& str, const string& from, const string& to);`

Replace **every** `from` in `str` with `to`.

- **Returns:** Modified string
- **Example:**
  ```cpp
  replaceAll("foo bar foo", "foo", "baz"); // "baz bar baz"
  ```

---

### `string replaceAllInMap(const string& input, const StringReplaceMap& replaceMap);`

Replace all keys in `replaceMap` with their values throughout `input`.

### **Types**

**`StringReplaceMap`**  
 `using StringReplaceMap = std::unordered_map<string, string>;`  
 Map of string → string, for bulk placeholder replacement.

---

- **Returns:** Modified string
- **Example:**

  ```cpp
  replaceAllInMap("Hi, {name}!", {{"{name}", "Sam"}}); // "Hi, Sam!"
  ```

---

### `string joinStringsWithNewline(const vector<string>& strings);`

Concatenate all strings, separated by newlines (`\n`).

- **Returns:** Single string
- **Example:**
  ```cpp
  joinStringsWithNewline({"a", "b", "c"}); // "a\nb\nc"
  ```

---

### `string genString(const string& character, int length);`

Repeats `character` for `length` times.

- **Returns:** Generated string
- **Example:**
  ```cpp
  genString("*", 5); // "*****"
  ```

---

### `void removeIndexes(vector<string>& vec, vector<int> indexes);`

Removes elements in `vec` at each index in `indexes`.

- **Params:**
  - `vec`: target vector
  - `indexes`: indices to remove (should be sorted descending to avoid shifting)
- **Example:**
  ```cpp
  vector<string> v = {"a", "b", "c"};
  removeIndexes(v, {1}); // v == {"a", "c"}
  ```

## **Case Transformation Functions**

**Purpose:**  
String case utilities for converting between common naming styles and detecting string case.

## **Types**

### `enum class StringCase`

- **Values:**
  - `Unknown`
  - `CamelCase`
  - `PascalCase`
  - `SnakeCase`
  - `KebabCase`

## **Functions Overview**

| Function          | Purpose                              |
| ----------------- | ------------------------------------ |
| `detectCaseStyle` | Detect the case style of a string.   |
| `toLowerCase`     | Convert all characters to lowercase. |
| `toUpperCase`     | Convert all characters to uppercase. |
| `toCamelCase`     | Convert a string to camelCase.       |
| `toPascalCase`    | Convert a string to PascalCase.      |
| `toSnakeCase`     | Convert a string to snake_case.      |
| `toKebabCase`     | Convert a string to kebab-case.      |

---

### `StringCase detectCaseStyle(const string& str);`

Detects the case style of the given string (camel, pascal, snake, kebab, or unknown).

- **Returns:** `StringCase` enum value
- **Example:**
  ```cpp
  detectCaseStyle("my_variable"); // StringCase::SnakeCase
  ```

---

### `string toLowerCase(const string& str);`

Converts all characters to lowercase.

- **Returns:** Lowercase string
- **Example:**
  ```cpp
  toLowerCase("HeLLo"); // "hello"
  ```

---

### `string toUpperCase(const string& str);`

Converts all characters to uppercase.

- **Returns:** Uppercase string
- **Example:**
  ```cpp
  toUpperCase("HeLLo"); // "HELLO"
  ```

---

### `string toCamelCase(const string& str);`

Converts string to camelCase.

- **Returns:** camelCase string
- **Example:**
  ```cpp
  toCamelCase("hello_world"); // "helloWorld"
  ```

---

### `string toPascalCase(const string& str);`

Converts string to PascalCase.

- **Returns:** PascalCase string
- **Example:**
  ```cpp
  toPascalCase("hello_world"); // "HelloWorld"
  ```

---

### `string toSnakeCase(const string& str);`

Converts string to snake_case.

- **Returns:** snake_case string
- **Example:**
  ```cpp
  toSnakeCase("HelloWorld"); // "hello_world"
  ```

---

### `string toKebabCase(const string& str);`

Converts string to kebab-case.

- **Returns:** kebab-case string
- **Example:**
  ```cpp
  toKebabCase("HelloWorld"); // "hello-world"
  ```
