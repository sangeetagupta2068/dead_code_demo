// Dead code - unused function
function unusedFunction() {
    console.log("This function is never called");
    return "Dead code";
}

// Dead code - unused variables
const unusedVariable1 = "I'm never used";
const unusedVariable2 = 42;

// Main functionality
document.addEventListener('DOMContentLoaded', () => {
    const analyzeButton = document.getElementById('analyzeButton');
    const ghostElement = document.getElementById('ghostElement');
    const resultsContainer = document.getElementById('results');

    // Dead code - unused event listener
    document.addEventListener('click', (e) => {
        console.log("This click handler is never used");
    });

    analyzeButton.addEventListener('click', () => {
        // Show ghost animation
        ghostElement.style.opacity = '1';
        
        // Simulate code analysis
        setTimeout(() => {
            ghostElement.style.opacity = '0';
            displayResults();
        }, 2000);
    });

    function displayResults() {
        const deadCodeItems = [
            "Unused CSS variables",
            "Unused animation keyframes",
            "Unused media query",
            "Unused JavaScript function",
            "Unused JavaScript variables",
            "Unused event listener"
        ];

        resultsContainer.innerHTML = `
            <h3>Dead Code Analysis Results</h3>
            <ul>
                ${deadCodeItems.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p>Total dead code found: ${deadCodeItems.length} items</p>
        `;
    }

    // Dead code - unused helper function
    function unusedHelper() {
        return "I'm never used either";
    }

    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add click effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Add smooth scrolling for navigation links
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

    // Add Halloween-themed cursor effect
    document.addEventListener('mousemove', (e) => {
        const cursor = document.createElement('div');
        cursor.className = 'halloween-cursor';
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
        document.body.appendChild(cursor);
        setTimeout(() => {
            cursor.remove();
        }, 1000);
    });

    // Add Boo! button functionality
    const booButton = document.getElementById('booButton');
    if (booButton) {
        booButton.addEventListener('click', () => {
            // Create floating Boo! text
            const booText = document.createElement('div');
            booText.textContent = 'Boo!';
            booText.style.position = 'fixed';
            booText.style.fontSize = '3rem';
            booText.style.color = 'white';
            booText.style.textShadow = '0 0 10px var(--primary-color)';
            booText.style.zIndex = '1000';
            booText.style.pointerEvents = 'none';
            booText.style.animation = 'floatUp 2s ease-out forwards';
            
            // Random position near the button
            const buttonRect = booButton.getBoundingClientRect();
            const x = buttonRect.left + (buttonRect.width / 2);
            const y = buttonRect.top;
            
            booText.style.left = `${x}px`;
            booText.style.top = `${y}px`;
            
            document.body.appendChild(booText);
            
            // Remove after animation
            setTimeout(() => {
                booText.remove();
            }, 2000);
        });
    }
});

// Add floatUp animation
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