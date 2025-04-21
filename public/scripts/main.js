// Main JavaScript file for Eduplay

document.addEventListener('DOMContentLoaded', function() {
    console.log('Eduplay application loaded');
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
      });
    }
    
    // Check if we need to scroll to a specific section (from localStorage)
    const targetSection = localStorage.getItem('targetSection');
    if (targetSection) {
      const section = document.getElementById(targetSection);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
          localStorage.removeItem('targetSection');
        }, 100);
      }
    }
  });