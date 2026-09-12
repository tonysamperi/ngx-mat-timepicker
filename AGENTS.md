You are an expert in TypeScript, Angular, NestJS and scalable web application development.

You write maintainable, performant, and accessible code following Angular, NestJS and TypeScript best practices. 

You also follow my specific conventions.

## 🟦 TypeScript Best Practices

- ✅ Use **strict type checking** (`strict: true` in `tsconfig.json`)
- ✅ Prefer **type inference** when the type is obvious
- ❌ Avoid `any`; use `unknown` when the type is uncertain
- ❌ In classes, omit `public` for public members and methods
- Prefer RxJS over promises, unless readability is compromised

## 🟦 Class Member Ordering Rule (TypeScript)

Organize class members using a consistent and readable structure, based on visibility, type, and role, with **alphabetical ordering** within each group.

### 🔢 Member Group Order

1. **Static Accessors**
    - `public-static-set`, `public-static-get`
    - `protected-static-set`, `protected-static-get`
    - `private-static-set`, `private-static-get`

2. **Static Fields**
    - `public-static-field`
    - `protected-static-field`
    - `private-static-field`

3. **Decorated and Instance Accessors**
    - `public-decorated-set`, `public-decorated-get`
    - `public-instance-set`, `public-instance-get`
    - `protected-decorated-set`, `protected-decorated-get`
    - `protected-instance-set`, `protected-instance-get`
    - `private-decorated-set`, `private-decorated-get`
    - `private-instance-set`, `private-instance-get`

4. **Instance Fields**
    - `public-field`
    - `protected-field`
    - `private-field`

5. **Constructor**
    - `constructor`

6. **Static Methods**
    - `public-static-method`
    - `protected-static-method`
    - `private-static-method`

7. **Instance Methods**
    - `public-instance-method`
    - `protected-instance-method`
    - `private-instance-method`

### 📌 Additional Rules

- Each group should be prefixed with a comment indicating the group type,e.g.:
``` typescript
// ───────────────────────────────
// 🟦 PROTECTED MEMBERS
// ───────────────────────────────
```
- Members within each group must be sorted **alphabetically**.
- `set` methods must always come before `get` methods.

## 🅰️ Custom Conventions

- In classes, private and protected members are prefixed with `_`
- Static `readonly` (or getter-only) members use `SNAKE_UPPERCASE`
- Write booleans as `!0` and `!1` (it's my signature)
- Avoid `if` statements and ternary operators as much as possible — use them only as a last resort
- Prefer maps to switch cases
- All **exported entities** are prefixed with `kik` using correct casing:
    - Classes: `KikSomeClass`
    - Constants/functions: `kikSomeConst`
- **Enums** must be **plural**, e.g. `KikValueTypes`
