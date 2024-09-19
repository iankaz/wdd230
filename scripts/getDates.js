// Function to update the current year in the footer
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').innerText = currentYear;
}

// Function to update the last modified date in the footer
function updateLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').innerText = `Last Modified: ${lastModified}`;
}

// Call the functions to update the footer immediately
updateCurrentYear();
updateLastModified();
