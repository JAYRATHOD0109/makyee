# Commit Message Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for creating standardized commit messages. This document outlines the rules and provides examples to help you create proper commit messages.

## Why Use Conventional Commits?

- **Automated version management**: Enables automatic versioning and changelog generation
- **Clear commit history**: Makes the project history more readable and structured
- **Streamlined code reviews**: Helps reviewers understand changes at a glance
- **Automated release notes**: Simplifies generating release notes

## Commit Message Structure

```
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

### Required Elements

#### Type

The type must be one of the following:

| Type       | Description                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| `feat`     | A new feature                                                                      |
| `fix`      | A bug fix                                                                          |
| `docs`     | Documentation only changes                                                         |
| `style`    | Changes that do not affect the meaning of the code (white-space, formatting, etc.) |
| `refactor` | A code change that neither fixes a bug nor adds a feature                          |
| `perf`     | A code change that improves performance                                            |
| `test`     | Adding missing tests or correcting existing tests                                  |
| `build`    | Changes that affect the build system or external dependencies                      |
| `ci`       | Changes to CI configuration files and scripts                                      |
| `chore`    | Other changes that don't modify src or test files                                  |
| `revert`   | Reverts a previous commit                                                          |

#### Description

- Use the imperative, present tense: "add" not "added" nor "adds"
- Don't capitalize the first letter
- No period (.) at the end
- Keep it brief but descriptive (ideally under 50 characters)

### Optional Elements

#### Scope

A scope may be provided to specify the section of the codebase affected by the change:

```
feat(auth): implement login functionality
fix(api): resolve user data fetch issue
```

Common scopes might include:

- `auth` - Authentication related changes
- `ui` - User interface components
- `api` - API related functionality
- `core` - Core functionality
- `config` - Configuration changes

#### Body

The body should include the motivation for the change and contrast with previous behavior:

```
fix(database): address memory leak when connections exceed 100

Our database connections weren't being properly closed under high load scenarios,
leading to memory leaks in production. This fix implements a connection pool
that properly manages and recycles connections.
```

#### Footer

The footer should contain any information about Breaking Changes and also reference GitHub issues that this commit closes:

```
feat(api): change authentication endpoint response format

BREAKING CHANGE: Authentication response now returns a JWT token object instead of a plain string

Closes #123
```

## Examples of Valid Commit Messages

```
feat: add user registration form
```

```
fix(auth): resolve login form validation error
```

```
docs(readme): update installation instructions
```

```
style: format code according to style guide
```

```
refactor(cart): simplify product addition logic
```

```
perf(images): optimize image loading process
```

```
test(api): add integration tests for user API
```

```
feat(ui): add dark mode support

Implements a system-wide dark mode toggle that respects user preferences.
All components have been updated to support both themes.

Closes #456
```

## Breaking Changes

Breaking changes MUST be indicated at the beginning of the footer section:

```
feat(api): completely restructure response format

BREAKING CHANGE: All API responses now follow JSend format instead of custom format
```

## Pre-commit Enforcement

This project uses Husky and commitlint to automatically enforce these commit message conventions. Commits that don't follow the convention will be rejected.

## Tips for Writing Good Commit Messages

1. **Be specific**: "Fix bug" is not as helpful as "fix(checkout): resolve total calculation when discount applied"
2. **One logical change per commit**: Don't combine unrelated changes in a single commit
3. **Present tense**: Write "add feature" not "added feature"
4. **No dots at the end**: Don't end your commit message with a period
5. **Reference issues**: Include "Closes #123" or "Related to #456" when applicable

## Getting Help

If you have questions about commit message formats or are unsure about how to structure your commit, please reach out to the team lead or refer to the [Conventional Commits specification](https://www.conventionalcommits.org/).
