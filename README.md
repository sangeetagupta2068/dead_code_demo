# Dead Code Demo

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

A demonstration website for showcasing dead code detection and removal techniques. This project features a Halloween/spooky-themed interface with interactive elements that simulate code scanning and cleanup functionality.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Code Documentation](#code-documentation)
- [Contributing](#contributing)
- [License](#license)

## 🔍 Overview

Dead Code Demo is an educational project designed to illustrate the concept of dead code in web development. It provides a visual and interactive way to understand how unused code can accumulate in projects and how it can be detected and removed.

The website uses a Halloween/spooky theme to make the concept of "dead code" more engaging and memorable.

## ✨ Features

- **Interactive UI**: Engaging user interface with hover and click animations
- **Code Scanner Simulation**: Simulates scanning a codebase for dead code
- **Analytics Dashboard**: Displays mock results of code scans
- **Cleanup Tool**: Simulates the process of removing dead code
- **Notification System**: Provides feedback on actions through a custom notification system
- **Responsive Design**: Fully responsive layout that works on mobile and desktop

## 📁 Project Structure

```
dead_code_demo/
├── assets/              # Image assets for the project
├── index.html           # Main HTML document
├── styles.css           # CSS styles for the project
├── script.js            # JavaScript functionality
└── README.md            # Project documentation
```

## 🚀 Installation

This is a static website that doesn't require any build process or dependencies. Simply clone the repository and open the HTML file in a browser.

```bash
# Clone the repository
git clone https://github.com/sangeetagupta2068/dead_code_demo.git

# Navigate to the project directory
cd dead_code_demo

# Open index.html in your browser
open index.html
```

## 💻 Usage

1. **Explore the UI**: Navigate through the website to understand the theme and concept
2. **Try the Scanner**: Click the "Start Scan" button to see the scanning simulation
3. **View Analytics**: After running a scan, click "View Reports" to see the mock results
4. **Perform Cleanup**: Click "Clean Now" to simulate removing dead code
5. **Interact with Elements**: Hover over cards and click buttons to see the animations

## 📚 Code Documentation

### HTML Structure

The HTML is organized into several main sections:

- **Header**: Contains the navigation menu
- **Hero Section**: Main banner with call-to-action
- **Featured Hauntings**: Cards showcasing different types of dead code
- **Documentation Section**: Link to project documentation
- **Unused Features Section**: Interactive demo of the code scanner

### CSS Organization

The CSS uses custom properties (variables) for consistent theming and is organized into sections:

- **Variables & Reset**: CSS variables and basic reset styles
- **Layout & Typography**: Base layout and text styling
- **Components**: Styles for cards, buttons, and other UI components
- **Animations**: Keyframe animations for interactive elements
- **Responsive Design**: Media queries for different screen sizes

### JavaScript Architecture

The JavaScript code is organized into classes with clear responsibilities:

- **NotificationManager**: Handles the creation and display of notification messages
- **CodeScanner**: Manages the scanning simulation, progress tracking, and results

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

Please make sure to update tests and documentation as appropriate.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Created by [Sangeeta Gupta](https://github.com/sangeetagupta2068) © 2024