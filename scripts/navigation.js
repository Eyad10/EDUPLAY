// Functions for site navigation

// Redirect to the tryapp page
function redirectToTryApp() {
    window.location.href = "pages/tryapp.html";
}

// Smooth scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for "Try Now" buttons
    const tryNowButtons = document.querySelectorAll('.try-now-btn');
    tryNowButtons.forEach(button => {
        if (button.id !== 'try-now' && button.id !== 'try-now-hero' && button.id !== 'try-now-about') {
            button.addEventListener('click', function() {
                redirectToTryApp();
            });
        }
    });

    // Add event listeners for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
            }
        });
    });
    
    // Check for localStorage section navigation (from other pages)
    const targetSection = localStorage.getItem('targetSection');
    if (targetSection) {
        scrollToSection(targetSection);
        // Clear after navigating
        localStorage.removeItem('targetSection');
    }
});
