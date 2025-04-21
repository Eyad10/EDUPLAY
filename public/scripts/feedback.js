// Feedback JavaScript for Eduplay

document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
          alert('الرجاء ملء جميع الحقول المطلوبة');
          return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
        contactForm.reset();
      });
    }
  });