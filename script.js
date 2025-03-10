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

    // Clear search input and show all devices
    document.getElementById('deviceSearch').value = '';
    filterDevices('all');
    // Ensure the preview section is hidden when opening the modal
    document.getElementById("previewSection").style.display = "none";
}

// Close devices modal
function closeModal() {
    var deviceModal = document.getElementById("deviceModal");
    deviceModal.style.display = "none";
}

// Filter devices by category
function filterDevices(category) {
    const devices = document.querySelectorAll(".device");
    const tabs = document.querySelectorAll(".tablinks");

    // Reset active tab
    tabs.forEach(tab => tab.classList.remove("active"));

    // Set the clicked tab as active
    const tabButton = document.querySelector(`.tablinks[onclick='filterDevices("${category}")']`);
    if (tabButton) {
        tabButton.classList.add("active");
    }

    devices.forEach(device => {
        if (category === "all") {
            device.style.display = "block";
        } else if (device.classList.contains(category)) {
            device.style.display = "block";
        } else {
            device.style.display = "none";
        }
    });

    updateOrientationButtons(category);
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
    let adjustedWidth = width;
    let adjustedHeight = height;

    // Do not adjust dimensions for desktop
    if (!element.classList.contains('desktop')) {
        adjustedWidth = currentOrientation === 'portrait' ? width : height;
        adjustedHeight = currentOrientation === 'portrait' ? height : width;
    }

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

function updateOrientationButtons(category) {
    const portraitBtn = document.getElementById('portraitBtn');
    const landscapeBtn = document.getElementById('landscapeBtn');
    const infoIcon = document.querySelector('.info-icon');

    if (category === 'desktop') {
        portraitBtn.style.display = 'none'; // Hide portrait button
        landscapeBtn.style.display = 'none'; // Hide landscape button
        infoIcon.style.display = 'none'; // Hide info icon
    } else {
        portraitBtn.style.display = 'inline-block'; // Show portrait button
        landscapeBtn.style.display = 'inline-block'; // Show landscape button
        infoIcon.style.display = 'inline-block'; // Show info icon
    }
}


// Initialize the landscape mode and button state for desktop on page load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'all'; // Default to 'all' if no category is set

    filterDevices(category); // Apply filter on load
    updateOrientationButtons(category); // Set initial button state
});

function searchDevices() {
    const searchTerm = document.getElementById('deviceSearch').value.toLowerCase();
    const devices = document.querySelectorAll('.device');

    devices.forEach(device => {
        const deviceText = device.textContent.toLowerCase();
        if (deviceText.includes(searchTerm)) {
            device.style.display = 'block';
        } else {
            device.style.display = 'none';
        }
    });
}
