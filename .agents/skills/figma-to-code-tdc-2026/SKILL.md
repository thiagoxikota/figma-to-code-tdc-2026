```markdown
# figma-to-code-tdc-2026 Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you how to work effectively within the `figma-to-code-tdc-2026` React codebase. You'll learn the project's coding conventions, file organization, and how to contribute using the established commit and testing patterns. This repository focuses on converting Figma designs into robust React components using JavaScript, with an emphasis on maintainability and consistency.

## Coding Conventions

### File Naming
- Use **kebab-case** for all file and folder names.
  - Example:  
    ```
    button-group.js
    user-profile-card/
    ```

### Import Style
- Use **relative imports** for all modules.
  - Example:
    ```js
    import { Button } from './button';
    import { useTheme } from '../hooks/use-theme';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```js
    // button.js
    export const Button = () => { ... };

    // usage
    import { Button } from './button';
    ```

### Commit Messages
- Freeform style, often prefixed with context like `redesign`.
- Average commit message length: ~55 characters.
  - Example:
    ```
    redesign: update button styles for new theme
    fix: resolve alignment issue in header
    ```

## Workflows

### Adding a New Component
**Trigger:** When you need to implement a new UI component.
**Command:** `/add-component`

1. Create a new file or folder in kebab-case under the appropriate directory.
2. Write your component using React and JavaScript.
3. Use relative imports for dependencies.
4. Export your component using a named export.
5. Add a corresponding test file named `component-name.test.js`.
6. Commit with a descriptive message (e.g., `add: create avatar component`).

### Refactoring or Redesigning Components
**Trigger:** When updating the design or structure of existing components.
**Command:** `/refactor-component`

1. Identify the component to refactor.
2. Make changes following the coding conventions.
3. Update or add tests as needed.
4. Use a commit message prefixed with `redesign:` or `refactor:`.
   - Example: `redesign: update card layout for new spec`
5. Ensure all imports and exports remain consistent.

## Testing Patterns

- **File Pattern:** Test files are named using `*.test.*` (e.g., `button.test.js`).
- **Framework:** Not explicitly specified; likely using Jest or React Testing Library.
- **Placement:** Test files are located alongside or near the components they test.

**Example Test File:**
```js
// button.test.js
import { Button } from './button';

test('renders Button component', () => {
  // ...test implementation
});
```

## Commands
| Command           | Purpose                                         |
|-------------------|-------------------------------------------------|
| /add-component    | Scaffold and implement a new React component    |
| /refactor-component | Refactor or redesign an existing component     |
```
