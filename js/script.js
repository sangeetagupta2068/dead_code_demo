// --- Tightly Coupled Functions ---

function generateSpookyMessage() {
    const messages = [
        "Boo!",
        "Beware...",
        "Something wicked this way comes...",
        "Happy Haunting!",
        "Creep it real!",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function displaySpookyMessage(message) {
    const resultDiv = document.getElementById('spookyResult');
    resultDiv.textContent = message;
    resultDiv.classList.remove('hidden');
}

function handleSpookyButtonClick() {
    const message = generateSpookyMessage();
    displaySpookyMessage(message);
}

// Display "Documentation found" in the spookyResult element when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const resultDiv = document.getElementById('spookyResult');
    if (resultDiv) {
        resultDiv.textContent = "Documentation found";
        resultDiv.classList.remove('hidden');
    }
});

// Event listener for the spooky button
const spookyButton = document.getElementById('spookyButton');
if (spookyButton) {
    spookyButton.addEventListener('click', handleSpookyButtonClick);
}

// --- Modern UI Enhancements (Example - Subtle Scroll Animation) ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Added Functionality (Example - Theme Toggle) ---
const body = document.body;
let isDarkMode = true; // Start in dark mode (consistent with Halloween theme)

function toggleTheme() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }
    console.log("Theme toggled:", isDarkMode ? "Dark" : "Light");
}

// You might have a button in the HTML to trigger this:
// <button id="themeToggle">Toggle Theme</button>
// const themeToggleButton = document.getElementById('themeToggle');
// if (themeToggleButton) {
//     themeToggleButton.addEventListener('click', toggleTheme);
// }

// --- Dead JavaScript Code (Approx. 20%) ---

// Unused variable
const unusedVariable = "This variable is never used.";

// Unused function
function calculateSomething() {
    const x = 5;
    const y = 10;
    return x + y;
}

// Conditional block that will never execute
if (false) {
    console.log("This will never be logged.");
}

// Event listener for a non-existent element
const nonExistentButton = document.getElementById('nonExistentButton');