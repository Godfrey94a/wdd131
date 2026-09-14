// getdates.js
// WDD 131 - Dynamic Web Fundamentals
// Godfrey Pakati

// Display the current year in the footer's copyright span
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Display the date the document was last modified
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;