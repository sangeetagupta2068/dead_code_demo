/**
 * Dead Code Demo - Main JavaScript
 * 
 * This file contains the interactive functionality for the Dead Code Demo website.
 * It handles UI interactions, animations, and the code scanning simulation.
 * 
 * @author Sangeeta Gupta
 * @version 1.0.0
 */

/**
 * Initialize all event listeners and UI interactions when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Add hover effects to feature cards
     * Creates a floating animation when users hover over feature cards
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
     * Creates a subtle "press" effect when buttons are clicked
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
     * Enable smooth scrolling for navigation links
     * Prevents default anchor behavior and smoothly scrolls to target sections
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

});






/**
 * NotificationManager Class
 * 
 * Manages the creation, display, and removal of notification messages.
 * Creates a container for notifications and provides methods to show and hide them.
 */
class NotificationManager {
    /**
     * Creates a new NotificationManager instance
     * Initializes the notification container and appends it to the document body
     */
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'notificationContainer';
        this.container.style.position = 'fixed';
        this.container.style.top = '20px';
        this.container.style.right = '20px';
        this.container.style.zIndex = '1000';
        document.body.appendChild(this.container);
    }
    
    /**
     * Displays a notification with the specified content
     * 
     * @param {string} title - The title of the notification
     * @param {string} message - The main message content
     * @param {string} type - The notification type (info, success, warning, error)
     * @param {number} duration - How long the notification should display (in ms)
     * @returns {HTMLElement} - The created notification element
     */
    show(title, message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        notification.innerHTML = `
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
            <button class="notification-close">×</button>
        `;
        
        this.container.appendChild(notification);
        
        // Force reflow to enable transition
        notification.offsetHeight;
        
        notification.classList.add('show');
        
        const closeButton = notification.querySelector('.notification-close');
        closeButton.addEventListener('click', () => {
            this.hide(notification);
        });
        
        if (duration > 0) {
            setTimeout(() => {
                this.hide(notification);
            }, duration);
        }
        
        return notification;
    }
    
    /**
     * Hides and removes a notification with animation
     * 
     * @param {HTMLElement} notification - The notification element to hide
     */
    hide(notification) {
        notification.classList.remove('show');
        
        notification.addEventListener('transitionend', () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        });
    }
}

/**
 * CodeScanner Class
 * 
 * Simulates a code scanning tool that detects and cleans up dead code.
 * Manages the scanning process, progress visualization, and results reporting.
 */
class CodeScanner {
    /**
     * Creates a new CodeScanner instance
     * Initializes UI elements and sets up the notification system
     */
    constructor() {
        this.scanButton = document.getElementById('scanButton');
        this.progressBar = document.getElementById('scanProgress')?.querySelector('.progress-fill');
        this.progressText = document.getElementById('progressText');
        this.isScanning = false;
        this.notifications = new NotificationManager();
        
        this.initEventListeners();
    }
    
    /**
     * Sets up event listeners for scanner control buttons
     * Connects UI buttons to their respective functionality
     */
    initEventListeners() {
        if (this.scanButton) {
            this.scanButton.addEventListener('click', () => {
                if (!this.isScanning) {
                    this.startScan();
                } else {
                    this.stopScan();
                }
            });
        }
        
        const analyticsButton = document.getElementById('analyticsButton');
        if (analyticsButton) {
            analyticsButton.addEventListener('click', () => {
                this.showAnalytics();
            });
        }
        
        const cleanupButton = document.getElementById('cleanupButton');
        if (cleanupButton) {
            cleanupButton.addEventListener('click', () => {
                this.performCleanup();
            });
        }
    }
    
    /**
     * Starts the code scanning simulation
     * Updates UI to show scanning progress and animates the progress bar
     */
    startScan() {
        this.isScanning = true;
        this.scanButton.textContent = 'Stop Scan';
        this.scanButton.classList.add('pulse');
        
        if (this.progressText) {
            this.progressText.textContent = 'Scanning...';
        }
        
        this.updateProgress(0);
        
        this.scanInterval = setInterval(() => {
            const currentWidth = parseInt(this.progressBar.style.width) || 0;
            if (currentWidth < 100) {
                this.updateProgress(currentWidth + 1);
            } else {
                this.completeScan();
            }
        }, 100);
    }
    
    /**
     * Stops an in-progress scan
     * Clears the scanning interval and updates UI accordingly
     */
    stopScan() {
        this.isScanning = false;
        clearInterval(this.scanInterval);
        this.scanButton.textContent = 'Start Scan';
        this.scanButton.classList.remove('pulse');
        
        if (this.progressText) {
            this.progressText.textContent = 'Scan stopped';
        }
        
        this.notifications.show('Scan Stopped', 'The code scan was stopped before completion.', 'warning');
    }
    
    /**
     * Updates the progress bar to show scan completion percentage
     * 
     * @param {number} percentage - The percentage of scan completion (0-100)
     */
    updateProgress(percentage) {
        if (this.progressBar) {
            this.progressBar.style.width = `${percentage}%`;
        }
    }
    
    /**
     * Handles scan completion
     * Updates UI, shows notification, and stores results in localStorage
     */
    completeScan() {
        this.isScanning = false;
        clearInterval(this.scanInterval);
        this.scanButton.textContent = 'Start Scan';
        this.scanButton.classList.remove('pulse');
        
        if (this.progressText) {
            this.progressText.textContent = 'Scan complete! Found 12 issues.';
        }
        
        this.notifications.show('Scan Complete', 'Your code scan has completed. 12 issues were found.', 'success');
        
        // Store mock scan results
        const results = {
            timestamp: new Date().toISOString(),
            issues: 12,
            categories: {
                'Unused Variables': 5,
                'Unused Functions': 3,
                'Unreachable Code': 2,
                'Unused CSS': 2
            }
        };
        
        localStorage.setItem('lastScanResults', JSON.stringify(results));
    }
    
    /**
     * Displays analytics from the last scan
     * Shows a notification with detailed scan results if available
     */
    showAnalytics() {
        const lastResults = localStorage.getItem('lastScanResults');
        
        if (lastResults) {
            const data = JSON.parse(lastResults);
            const message = `
                Last scan: ${new Date(data.timestamp).toLocaleString()}
                Total issues: ${data.issues}
                Categories:
                - Unused Variables: ${data.categories['Unused Variables']}
                - Unused Functions: ${data.categories['Unused Functions']}
                - Unreachable Code: ${data.categories['Unreachable Code']}
                - Unused CSS: ${data.categories['Unused CSS']}
            `;
            
            this.notifications.show('Analytics Report', message, 'info', 10000);
        } else {
            this.notifications.show('No Data', 'No scan has been performed yet. Run a scan first.', 'warning');
        }
    }
    
    /**
     * Simulates cleaning up dead code
     * Shows notifications for the cleanup process and resets the UI
     */
    performCleanup() {
        const lastResults = localStorage.getItem('lastScanResults');
        
        if (lastResults) {
            this.notifications.show('Cleanup Started', 'Cleaning up dead code...', 'info');
            
            setTimeout(() => {
                this.notifications.show('Cleanup Complete', 'Successfully removed 12 instances of dead code!', 'success');
                localStorage.removeItem('lastScanResults');
                
                if (this.progressText) {
                    this.progressText.textContent = 'Ready to scan';
                }
                
                if (this.progressBar) {
                    this.progressBar.style.width = '0%';
                }
            }, 3000);
        } else {
            this.notifications.show('No Data', 'No scan has been performed yet. Run a scan first.', 'warning');
        }
    }
}

/**
 * Initialize the CodeScanner
 * Creates a new instance of the CodeScanner class to enable scanning functionality
 */
const scanner = new CodeScanner();