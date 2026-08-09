# Agent guidelines

## Communication

- Use plain English in responses, comments, and commit/PR text.
- No jargon padding or AI filler. Say what you mean.

## Code style

### Naming

- Prefer clear, explicit names for functions and components.
- Avoid clever abbreviations and vague names.

### Layout

- Separate unrelated blocks of code with blank lines.
- Only keep semantically close / related blocks together when they obviously belong.
- Put a blank line before `return` statements.

### Functions

- Prefer arrow functions over `function` declarations.

### Types

- If a file needs more than 1–2 types, put them in a sibling types file next to the main `.ts` / `.tsx` file (e.g. `foo.ts` + `foo.types.ts`).
