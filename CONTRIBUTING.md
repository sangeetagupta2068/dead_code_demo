# Contributing to Dead Code Demo

Thank you for your interest in contributing to the Dead Code Demo project! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Documentation](#documentation)
- [Testing](#testing)
- [Community](#community)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- Git installed on your local machine
- A GitHub account

### Setting Up the Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/dead_code_demo.git
   cd dead_code_demo
   ```
3. Add the original repository as an upstream remote:
   ```bash
   git remote add upstream https://github.com/sangeetagupta2068/dead_code_demo.git
   ```
4. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make your changes in your feature branch
2. Test your changes locally
3. Commit your changes with clear, descriptive commit messages
4. Push your branch to your fork on GitHub
5. Submit a pull request to the main repository

### Keeping Your Fork Updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## Pull Request Process

1. Ensure your code follows the project's coding standards
2. Update documentation as necessary
3. Include a clear description of the changes in your pull request
4. Link any related issues in the pull request description
5. Wait for a maintainer to review your pull request
6. Address any feedback from the code review
7. Once approved, a maintainer will merge your pull request

## Coding Standards

### HTML

- Use semantic HTML elements
- Maintain proper indentation (2 spaces)
- Use lowercase for element names and attributes
- Use double quotes for attribute values
- Include appropriate ARIA attributes for accessibility

### CSS

- Follow the existing organization structure
- Use CSS variables for colors and repeated values
- Use clear, descriptive class names
- Avoid using IDs for styling when possible
- Include comments for complex selectors or rules

### JavaScript

- Follow ES6+ syntax and features
- Use camelCase for variable and function names
- Use PascalCase for class names
- Add JSDoc comments for all functions and classes
- Avoid global variables
- Use meaningful variable and function names

## Documentation

Good documentation is crucial for the project. When contributing:

1. Update the README.md if your changes affect usage or installation
2. Add JSDoc comments to all new functions and classes
3. Update DOCUMENTATION.md for significant changes
4. Update API.md if you modify or add to the public API

## Testing

Before submitting a pull request:

1. Test your changes in multiple browsers (Chrome, Firefox, Safari, Edge)
2. Test on different screen sizes to ensure responsive design
3. Verify that all interactive elements work as expected
4. Check for any console errors or warnings

## Community

### Reporting Bugs

If you find a bug, please report it by creating an issue on GitHub. Include:

- A clear, descriptive title
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser and OS information

### Suggesting Enhancements

We welcome suggestions for enhancements! When suggesting:

- Use a clear, descriptive title
- Provide a detailed description of the proposed enhancement
- Explain why this enhancement would be useful
- Include mockups or examples if possible

### Questions and Discussions

For questions or discussions:

- Check existing issues and discussions first
- Create a new issue with the "question" label
- Be clear and specific in your question

---

Thank you for contributing to Dead Code Demo! Your efforts help make this project better for everyone.