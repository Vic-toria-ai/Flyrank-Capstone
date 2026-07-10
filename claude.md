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

## Notes for AI Assistants

- This is a learning project — prefer explaining *why* a change is made, not just making it silently.
- Ask before introducing new dependencies.
- Keep suggestions beginner-friendly; I'm still building fluency with AI-assisted development workflows.