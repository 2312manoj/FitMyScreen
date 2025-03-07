// Toggle navigation menu
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

// Show devices modal
function showDevices() {
    var deviceModal = document.getElementById("deviceModal");
    deviceModal.style.display = "flex";

    // Ensure the preview section is hidden when opening the modal
    document.getElementById("previewSection").style.display = "none";
}

// Close devices modal
function closeModal() {
    var deviceModal = document.getElementById("deviceModal");
    deviceModal.style.display = "none";
}

let currentOrientation = 'portrait'; // Default orientation

// Set orientation (portrait or landscape)
function setOrientation(orientation) {
    currentOrientation = orientation;

    // Update active button styles
    document.getElementById('portraitBtn').classList.remove('active');
    document.getElementById('landscapeBtn').classList.remove('active');
    if (orientation === 'portrait') {
        document.getElementById('portraitBtn').classList.add('active');
    } else {
        document.getElementById('landscapeBtn').classList.add('active');
    }
}

// Simulate device with selected orientation
function simulateDevice(element) {
    const urlInput = document.getElementById("urlInput").value.trim();

    // Check if URL is entered
    if (!urlInput) {
        alert("Please enter a valid URL.");
        return;
    }

    // Ensure URL starts with "http://" or "https://"
    let url = urlInput;
    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + urlInput;
    }

    // Get device dimensions from data attributes
    const width = parseInt(element.getAttribute("data-width"));
    const height = parseInt(element.getAttribute("data-height"));

    // Adjust dimensions based on orientation
    const adjustedWidth = currentOrientation === 'portrait' ? width : height;
    const adjustedHeight = currentOrientation === 'portrait' ? height : width;

    // Open the entered URL in a new popup window with specified dimensions
    const newWindow = window.open(url, "_blank", `width=${adjustedWidth},height=${adjustedHeight},scrollbars=yes,resizable=yes`);

    // Warn if popup is blocked
    if (!newWindow) {
        alert("Popup blocked! Please allow popups for this website.");
    }

     // Remove highlight from any previously selected device
     const previouslyHighlighted = document.querySelector('.device-list li.highlighted');
     if (previouslyHighlighted) {
         previouslyHighlighted.classList.remove('highlighted');
     }

        // Add highlight to the clicked device
        element.classList.add('highlighted');
}
