
/**
 * @file script.js
 * @description Main JavaScript file for the Dead Code Hunt application
 * @author sangeetagupta2068
 * @version 1.0.0
 * 
 * This file contains all the interactive functionality for the Dead Code Hunt application,
 * including animations, event handlers, and simulated code analysis features.
 */

/**
 * Initialize the application when the DOM is fully loaded
 * Sets up event listeners and interactive elements
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const analyzeButton = document.getElementById('analyzeButton');
    const ghostElement = document.getElementById('ghostElement');
    const resultsContainer = document.getElementById('results');

    /**
     * Event handler for the analyze button
     * Shows the ghost element and then displays results after a delay
     */
    analyzeButton.addEventListener('click', () => {
        // Show the ghost element
        ghostElement.style.opacity = '1';
        
        // Hide ghost and show results after 2 seconds
        setTimeout(() => {
            ghostElement.style.opacity = '0';
            displayResults();
        }, 2000);
    });

    /**
     * Display the simulated dead code analysis results
     * Populates the results container with a list of "found" dead code items
     */
    function displayResults() {
        // Sample list of dead code items to display
        const deadCodeItems = [
            "Unused CSS variables",
            "Unused animation keyframes",
            "Unused media query",
            "Unused JavaScript function",
            "Unused JavaScript variables",
            "Unused event listener"
        ];

        // Generate HTML for the results and insert into the container
        resultsContainer.innerHTML = `
            <h3>Dead Code Analysis Results</h3>
            <ul>
                ${deadCodeItems.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p>Total dead code found: ${deadCodeItems.length} items</p>
        `;
    }

    /**
     * Feature Cards Animation
     * Add hover effects to all feature cards
     */
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        // Lift card up on mouse enter
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        // Return card to original position on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    /**
     * Button Click Animation
     * Add a subtle scale animation to all buttons when clicked
     */
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Scale down button slightly when clicked
            button.style.transform = 'scale(0.95)';
            // Return to original size after a short delay
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });

    /**
     * Smooth Scrolling Navigation
     * Enable smooth scrolling when clicking on navigation links
     */
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href');
            // Find the target element in the DOM
            const targetElement = document.querySelector(targetId);
            // Scroll to the target element if it exists
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });



    /**
     * Boo Button Effect
     * Creates a floating "Boo!" text animation when the boo button is clicked
     */
    const booButton = document.getElementById('booButton');

    if (booButton) {
        booButton.addEventListener('click', () => {
            // Create the floating text element
            const booText = document.createElement('div');
            booText.textContent = 'Boo!';
            
            // Style the floating text
            booText.style.position = 'fixed';
            booText.style.fontSize = '3rem';
            booText.style.color = 'white';
            booText.style.textShadow = '0 0 10px var(--primary-color)';
            booText.style.zIndex = '1000';
            booText.style.pointerEvents = 'none';
            booText.style.animation = 'floatUp 2s ease-out forwards';
            
            // Position the text above the button
            const buttonRect = booButton.getBoundingClientRect();
            const x = buttonRect.left + (buttonRect.width / 2);
            const y = buttonRect.top;
            
            booText.style.left = `${x}px`;
            booText.style.top = `${y}px`;
            
            // Add the text to the document
            document.body.appendChild(booText);
            
            // Remove the text after animation completes
            setTimeout(() => {
                booText.remove();
            }, 2000);
        });
    }
});

/**
 * Dynamic Animation Styles
 * Creates and injects CSS animation for the floating text effect
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 
  