# CLAUDE.md

This file provides guidance for Claude Code (or any AI assistant) working in this repository.

## Project Overview

Capstone project for the FlyRank AI Fluency Frontend track. Scope and features are still being finalized — this file will be updated once the project direction is locked in.

## Tech Stack

- **Framework:** React + Vite (placeholder — subject to change)
- **Language:** JavaScript/TypeScript
- **Package manager:** npm
- **Version control:** Git + GitHub

## Conventions

### Commit messages
Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
- `feat: add new feature`
- `fix: correct a bug`
- `docs: update documentation`
- `chore: maintenance tasks, config, tooling`
- `refactor: code change that neither fixes a bug nor adds a feature`
- `style: formatting, whitespace, etc. (no logic changes)`

### Code style
- Use descriptive variable and function names (no single-letter names except loop counters)
- Components in PascalCase, functions/variables in camelCase
- Keep components small and focused on a single responsibility
- Prefer functional components and hooks over class components

### File structure (planned)
```
src/
  components/   # Reusable UI components
  pages/        # Route-level views
  hooks/        # Custom React hooks
  utils/        # Helper functions
  assets/       # Images, fonts, static files
```

## Rules from the prompting drill

1. Forms must validate on submit and render errors inline (`role="alert"`, linked via `aria-describedby`), never via `alert()` or `window.confirm()`.
2. Any input handling secrets or tokens must be masked by default with an explicit show/hide toggle, and never logged to the console.
3. No feature involving validation, auth, or storage logic ships without a Vitest + React Testing Library test covering the empty/missing-input case, one invalid-input case, and one valid-input case.

## Notes for AI Assistants

- This is a learning project — prefer explaining *why* a change is made, not just making it silently.
- Ask before introducing new dependencies.
- Keep suggestions beginner-friendly; I'm still building fluency with AI-assisted development workflows.