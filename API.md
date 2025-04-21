# Dead Code Demo - API Documentation

This document provides detailed information about the JavaScript API available in the Dead Code Demo project. These classes and methods can be used to extend the functionality or integrate with other systems.

## Table of Contents

- [NotificationManager](#notificationmanager)
- [CodeScanner](#codescanner)
- [Data Structures](#data-structures)
- [Usage Examples](#usage-examples)

## NotificationManager

The `NotificationManager` class provides a system for displaying temporary notification messages to the user.

### Constructor

```javascript
/**
 * Creates a new NotificationManager instance
 * Initializes the notification container and appends it to the document body
 */
constructor()
```

### Methods

#### show

```javascript
/**
 * Displays a notification with the specified content
 * 
 * @param {string} title - The title of the notification
 * @param {string} message - The main message content
 * @param {string} type - The notification type (info, success, warning, error)
 * @param {number} duration - How long the notification should display (in ms)
 * @returns {HTMLElement} - The created notification element
 */
show(title, message, type = 'info', duration = 5000)
```

#### hide

```javascript
/**
 * Hides and removes a notification with animation
 * 
 * @param {HTMLElement} notification - The notification element to hide
 */
hide(notification)
```

### Example

```javascript
// Create a notification manager
const notifications = new NotificationManager();

// Show a success notification
notifications.show(
    'Operation Complete', 
    'The task was completed successfully!', 
    'success', 
    5000
);

// Show a warning notification
const warningNotification = notifications.show(
    'Warning', 
    'This action cannot be undone.', 
    'warning', 
    0  // Will not auto-dismiss
);

// Manually hide a notification
setTimeout(() => {
    notifications.hide(warningNotification);
}, 10000);
```

## CodeScanner

The `CodeScanner` class simulates scanning code for dead code and provides functionality for displaying results and cleaning up.

### Constructor

```javascript
/**
 * Creates a new CodeScanner instance
 * Initializes UI elements and sets up the notification system
 */
constructor()
```

### Methods

#### initEventListeners

```javascript
/**
 * Sets up event listeners for scanner control buttons
 * Connects UI buttons to their respective functionality
 */
initEventListeners()
```

#### startScan

```javascript
/**
 * Starts the code scanning simulation
 * Updates UI to show scanning progress and animates the progress bar
 */
startScan()
```

#### stopScan

```javascript
/**
 * Stops an in-progress scan
 * Clears the scanning interval and updates UI accordingly
 */
stopScan()
```

#### updateProgress

```javascript
/**
 * Updates the progress bar to show scan completion percentage
 * 
 * @param {number} percentage - The percentage of scan completion (0-100)
 */
updateProgress(percentage)
```

#### completeScan

```javascript
/**
 * Handles scan completion
 * Updates UI, shows notification, and stores results in localStorage
 */
completeScan()
```

#### showAnalytics

```javascript
/**
 * Displays analytics from the last scan
 * Shows a notification with detailed scan results if available
 */
showAnalytics()
```

#### performCleanup

```javascript
/**
 * Simulates cleaning up dead code
 * Shows notifications for the cleanup process and resets the UI
 */
performCleanup()
```

### Example

```javascript
// Create a new scanner instance
const scanner = new CodeScanner();

// Manually trigger a scan
document.getElementById('customScanButton').addEventListener('click', () => {
    scanner.startScan();
});

// Stop the scan after 5 seconds
setTimeout(() => {
    scanner.stopScan();
}, 5000);

// Show analytics in a custom element
document.getElementById('showResultsButton').addEventListener('click', () => {
    scanner.showAnalytics();
});
```

## Data Structures

### Scan Results

The scan results are stored in localStorage as a JSON string with the following structure:

```javascript
{
    timestamp: "2023-06-15T12:34:56.789Z",  // ISO timestamp of when the scan completed
    issues: 12,                             // Total number of issues found
    categories: {                           // Breakdown by category
        'Unused Variables': 5,
        'Unused Functions': 3,
        'Unreachable Code': 2,
        'Unused CSS': 2
    }
}
```

## Usage Examples

### Creating a Custom Scanner Interface

```javascript
class CustomScanner {
    constructor() {
        this.scanner = new CodeScanner();
        this.notifications = new NotificationManager();
        
        // Override the default notification behavior
        this.scanner.notifications = this.notifications;
        
        // Custom initialization
        this.initCustomUI();
    }
    
    initCustomUI() {
        const customButton = document.createElement('button');
        customButton.textContent = 'Custom Scan';
        customButton.addEventListener('click', () => this.startCustomScan());
        document.body.appendChild(customButton);
    }
    
    startCustomScan() {
        this.notifications.show('Custom Scan', 'Starting custom scan...', 'info');
        this.scanner.startScan();
        
        // Add custom behavior
        setTimeout(() => {
            this.exportResults();
        }, 12000);
    }
    
    exportResults() {
        const results = localStorage.getItem('lastScanResults');
        if (results) {
            const blob = new Blob([results], {type: 'application/json'});
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'scan-results.json';
            a.click();
            
            URL.revokeObjectURL(url);
        }
    }
}

// Usage
const customScanner = new CustomScanner();
```

### Extending the NotificationManager

```javascript
class EnhancedNotificationManager extends NotificationManager {
    constructor() {
        super();
        this.history = [];
    }
    
    show(title, message, type = 'info', duration = 5000) {
        const notification = super.show(title, message, type, duration);
        
        // Add to history
        this.history.push({
            title,
            message,
            type,
            timestamp: new Date().toISOString()
        });
        
        return notification;
    }
    
    getHistory() {
        return this.history;
    }
    
    clearHistory() {
        this.history = [];
    }
}

// Usage
const enhancedNotifications = new EnhancedNotificationManager();
enhancedNotifications.show('Test', 'This is a test');

// Later
console.log(enhancedNotifications.getHistory());
```

---

This API documentation is maintained by the Dead Code Demo team. Last updated: June 2024.