# CLAUDE.md - AI Assistant Guide

## About This Document

This document serves as a comprehensive guide for AI assistants (like Claude) working with this codebase. It provides context, conventions, and workflows to ensure consistent and effective collaboration.

**Last Updated:** 2025-11-28
**Repository:** alexstapfofficial/claudes-test

---

## Repository Overview

### Purpose
This repository serves as a test/sandbox environment for development workflows and AI-assisted coding practices.

### Current State
- **Status:** Newly initialized repository
- **Primary Branch:** Not yet established (awaiting first commit)
- **Active Development Branch:** `claude/claude-md-miiqv4ucpe40m2rl-01MjUntd63oH3BT4VqE58cSU`

---

## Codebase Structure

### Directory Layout
```
claudes-test/
├── .git/                 # Git repository metadata
└── CLAUDE.md            # This file
```

**Note:** As this is a new repository, the structure will evolve. Update this section as new directories and modules are added.

### Key Components
_To be populated as the project develops._

---

## Development Workflows

### Branch Strategy

#### Branch Naming Conventions
- Feature branches: `feature/<descriptive-name>`
- Bug fixes: `bugfix/<issue-description>`
- Claude AI branches: `claude/claude-md-<session-id>`

#### Workflow Process
1. **Create Branch:** Always work on feature branches, never directly on main
2. **Develop:** Make incremental commits with clear messages
3. **Test:** Ensure all tests pass before pushing
4. **Push:** Use `git push -u origin <branch-name>`
5. **PR:** Create pull request for review before merging to main

### Git Commit Conventions

#### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

#### Examples
```
feat(auth): add JWT authentication middleware

Implements token-based authentication using JWT.
Includes middleware for protected routes and token refresh logic.

Closes #123
```

```
fix(api): handle null response in user endpoint

Adds null check before accessing user data to prevent
runtime errors when user is not found.
```

### Testing Strategy
_To be defined as project grows._

---

## Code Conventions

### General Principles
1. **Simplicity First:** Write clear, maintainable code over clever solutions
2. **No Over-Engineering:** Only add what's needed for current requirements
3. **Security Awareness:** Always consider OWASP Top 10 vulnerabilities
4. **Clean Commits:** Each commit should be atomic and purposeful

### Style Guidelines
_Language-specific guidelines to be added as codebase develops._

### File Organization
- Keep related functionality together
- Avoid deep nesting (max 3-4 levels)
- Use clear, descriptive file and directory names

---

## AI Assistant Guidelines

### Before Making Changes
1. **Read First:** Always read existing code before modifying
2. **Understand Context:** Use Grep/Glob to understand related code
3. **Check Dependencies:** Look for files that import or depend on code you're changing

### During Development
1. **Use TodoWrite:** Track multi-step tasks with the TodoWrite tool
2. **Parallel Operations:** Run independent operations in parallel
3. **Incremental Commits:** Commit logical units of work
4. **Test As You Go:** Verify changes work before moving to next task

### Code Modification Rules
1. **Prefer Edit over Write:** Edit existing files rather than rewriting
2. **Minimal Changes:** Only modify what's necessary for the task
3. **No Unnecessary Improvements:** Don't refactor unrelated code
4. **Security First:** Watch for injection vulnerabilities, XSS, etc.

### What NOT to Do
- ❌ Don't add features not explicitly requested
- ❌ Don't refactor code not related to the current task
- ❌ Don't add comments/docstrings to unchanged code
- ❌ Don't add hypothetical error handling
- ❌ Don't create abstractions for one-time operations
- ❌ Don't add backwards-compatibility hacks

### Communication
- Be concise and technical
- Avoid emojis unless requested
- Reference code with `file:line` format
- Output information directly, not via bash echo

---

## Key Technologies

_To be populated as dependencies are added._

### Languages
- _Not yet determined_

### Frameworks & Libraries
- _Not yet determined_

### Tools & Services
- **Version Control:** Git
- **AI Assistant:** Claude Code

---

## Environment Setup

### Prerequisites
_To be defined._

### Installation
```bash
# Clone repository
git clone <repository-url>
cd claudes-test

# Additional setup steps to be added
```

### Configuration
_To be documented as configuration needs arise._

---

## Testing

### Running Tests
_To be documented._

### Test Coverage
_Target coverage goals to be defined._

### CI/CD
_Pipeline configuration to be added._

---

## Common Tasks

### Adding a New Feature
1. Create feature branch from main
2. Implement feature with tests
3. Update documentation
4. Create PR with clear description
5. Address review feedback
6. Merge after approval

### Fixing a Bug
1. Create bugfix branch
2. Write failing test that reproduces bug
3. Fix the bug
4. Verify test passes
5. Create PR with bug description and fix explanation

### Updating Dependencies
_Process to be defined._

---

## Troubleshooting

### Common Issues
_To be populated as issues are encountered._

### Debug Strategies
1. Check logs first
2. Verify environment configuration
3. Test with minimal reproduction
4. Review recent changes

---

## Resources

### Documentation
- Repository README: _To be created_
- API Documentation: _To be created_
- Architecture Diagrams: _To be created_

### External References
- [Git Documentation](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## Maintenance

### Updating This Document
- Update after major architectural changes
- Add new sections as project grows
- Keep examples current with actual code
- Review quarterly for accuracy

### Review Schedule
- **Weekly:** Check for outdated information
- **Monthly:** Update statistics and metrics
- **Quarterly:** Comprehensive review and reorganization

---

## Contact & Support

_Project maintainers and contact information to be added._

---

## Changelog

### 2025-11-28
- Initial CLAUDE.md creation
- Established repository structure documentation
- Defined AI assistant guidelines
- Set up development workflow templates
