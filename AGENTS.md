# Agent guidelines

## Communication

- Use plain English in responses, comments, and commit/PR text.
- No jargon padding or AI filler. Say what you mean.

## Code style

### Naming

- Prefer clear, explicit names for functions and components.
- Avoid clever abbreviations and vague names.
- Prefer precise naming over comments. If a name makes the code obvious, skip the comment.

### Comments

- In TypeScript/JavaScript, never use `/* */` or `/** */` for a single-line comment — use `//`.
- CSS has no `//`; use a one-line `/* ... */` only when a comment is warranted.
- Prefer very short, concise comments, and only in key places.
- Add a single-line comment above a function longer than ~50–70 lines when its name does not make the purpose obvious. Do not comment short, clearly named functions.
- No section banners, archaeology notes (“formerly Foo.tsx”), or comments that restate the next line of code.

### Layout

- Separate unrelated blocks of code with blank lines.
- Only keep semantically close / related blocks together when they obviously belong.
- Put a blank line before `return` statements.

### Functions

- Prefer arrow functions over `function` declarations.

### Types

- If a file needs more than 1–2 types, put them in a sibling types file next to the main `.ts` / `.tsx` file (e.g. `foo.ts` + `foo.types.ts`).
