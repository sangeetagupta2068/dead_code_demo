
/**
 * Dead Code Hunt - Main JavaScript
 * 
 * This file contains all the interactive functionality for the Dead Code Hunt application.
 * It handles animations, event listeners, and dynamic content generation.
 * 
 * @author Dead Code Hunt Team
 * @version 1.0.0
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize main UI elements
    const analyzeButton = document.getElementById('analyzeButton');
    const ghostElement = document.getElementById('ghostElement');
    const resultsContainer = document.getElementById('results');

    /**
     * Event handler for the analyze button
     * Shows the ghost animation and displays results after a delay
     */
    analyzeButton && analyzeButton.addEventListener('click', () => {
        ghostElement.style.opacity = '1';
        
        // Hide ghost and show results after animation completes
        setTimeout(() => {
            ghostElement.style.opacity = '0';
            displayResults();
        }, 2000);
    });

    /**
     * Displays the dead code analysis results in the results container
     * Generates HTML content from the list of dead code items
     */
    function displayResults() {
        // Sample list of dead code items that would be found in analysis
        const deadCodeItems = [
            "Unused CSS variables",
            "Unused animation keyframes",
            "Unused media query",
            "Unused JavaScript function",
            "Unused JavaScript variables",
            "Unused event listener"
        ];

        // Generate HTML for the results
        resultsContainer.innerHTML = `
            <h3>Dead Code Analysis Results</h3>
            <ul>
                ${deadCodeItems.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p>Total dead code found: ${deadCodeItems.length} items</p>
        `;
    }

    /**
     * Add hover animations to feature cards
     * Cards move up slightly when hovered and return to original position on mouse leave
     */
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    /**
     * Add click animation to all buttons
     * Buttons scale down slightly when clicked and return to original size after a delay
     */
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });

    /**
     * Add smooth scrolling to navigation links
     * Prevents default anchor behavior and scrolls smoothly to the target section
     */
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /**
     * Special effect for the "boo" button
     * Creates a floating "Boo!" text that appears and fades out when the button is clicked
     */
    const booButton = document.getElementById('booButton');

    if (booButton) {
        booButton.addEventListener('click', () => {
            // Create the floating text element
            const booText = document.createElement('div');
            booText.textContent = 'Boo!';
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
            
            // Add to DOM and remove after animation completes
            document.body.appendChild(booText);
            
            setTimeout(() => {
                booText.remove();
            }, 2000);
        });
    }
});

/**
 * Create and append dynamic CSS for animations
 * Adds the floatUp animation keyframes used by the Boo effect
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
  