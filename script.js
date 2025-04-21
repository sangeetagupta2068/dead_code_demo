document.addEventListener('DOMContentLoaded', () => {
    const analyzeButton = document.getElementById('analyzeButton');
    const ghostElement = document.getElementById('ghostElement');
    const resultsContainer = document.getElementById('results');

    analyzeButton?.addEventListener('click', () => {
        ghostElement.style.opacity = '1';
        
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

        if (resultsContainer) {
            resultsContainer.innerHTML = `
                <h3>Dead Code Analysis Results</h3>
                <ul>
                    ${deadCodeItems.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <p>Total dead code found: ${deadCodeItems.length} items</p>
            `;
        }
    }

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';

            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });

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

    const booButton = document.getElementById('booButton');

    if (booButton) {
        booButton.addEventListener('click', () => {
            const booText = document.createElement('div');
            booText.textContent = 'Boo!';
            
            booText.style.position = 'fixed';
            booText.style.fontSize = '3rem';
            booText.style.color = 'white';
            booText.style.textShadow = '0 0 10px var(--primary-color)';
            booText.style.zIndex = '1000';
            booText.style.pointerEvents = 'none';
            booText.style.animation = 'floatUp 2s ease-out forwards';
            
            const buttonRect = booButton.getBoundingClientRect();
            const x = buttonRect.left + (buttonRect.width / 2);
            const y = buttonRect.top;
            
            booText.style.left = `${x}px`;
            booText.style.top = `${y}px`;
            
            document.body.appendChild(booText);
            
            setTimeout(() => {
                booText.remove();
            }, 2000);
        });
    }
});


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

function initThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.body.classList.add(`theme-${currentTheme}`);
    
    if (themeToggle) {
        themeToggle.checked = currentTheme === 'light';
        
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.classList.remove('theme-dark');
                document.body.classList.add('theme-light');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.remove('theme-light');
                document.body.classList.add('theme-dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

class NotificationManager {
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'notificationContainer';
        this.container.style.position = 'fixed';
        this.container.style.top = '20px';
        this.container.style.right = '20px';
        this.container.style.zIndex = '1000';
        document.body.appendChild(this.container);
    }
    
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
    
    hide(notification) {
        notification.classList.remove('show');
        
        notification.addEventListener('transitionend', () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        });
    }
}

class CodeScanner {
    constructor() {
        this.scanButton = document.getElementById('scanButton');
        this.progressBar = document.getElementById('scanProgress')?.querySelector('.progress-fill');
        this.progressText = document.getElementById('progressText');
        this.isScanning = false;
        this.notifications = new NotificationManager();
        
        this.initEventListeners();
    }
    
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
    
    updateProgress(percentage) {
        if (this.progressBar) {
            this.progressBar.style.width = `${percentage}%`;
        }
    }
    
    completeScan() {
        this.isScanning = false;
        clearInterval(this.scanInterval);
        this.scanButton.textContent = 'Start Scan';
        this.scanButton.classList.remove('pulse');
        
        if (this.progressText) {
            this.progressText.textContent = 'Scan complete! Found 12 issues.';
        }
        
        this.notifications.show('Scan Complete', 'Your code scan has completed. 12 issues were found.', 'success');
        
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

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const scanner = new CodeScanner();
initThemeSwitcher();