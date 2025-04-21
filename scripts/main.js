// This file contains the main JavaScript functionality for the website, including event listeners for navigation and the "Try Now" button.

document.addEventListener('DOMContentLoaded', function() {
    // التحقق من وجود قسم مستهدف مخزن
    const targetSection = localStorage.getItem('targetSection');
    
    if (targetSection) {
        // مسح القيمة من التخزين
        localStorage.removeItem('targetSection');
        
        // الانتقال إلى القسم بعد تأخير صغير
        setTimeout(() => {
            const section = document.getElementById(targetSection);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }, 300);
    }

    // التحقق مما إذا كان هناك قسم محدد للتمرير إليه (من صفحة try app)
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    
    if (scrollToSection) {
        // مسح القيمة من sessionStorage لتجنب التمرير التلقائي في المرات القادمة
        sessionStorage.removeItem('scrollToSection');
        
        // العثور على القسم وتنفيذ التمرير
        const targetSection = document.getElementById(scrollToSection);
        
        if (targetSection) {
            // إعطاء وقت قصير لتأكد من تحميل الصفحة بالكامل
            setTimeout(() => {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }

    // Toggle Try App Section
    const tryNowButtons = document.querySelectorAll('#try-now, #try-now-hero, #try-now-about');
    const backToHomeButton = document.getElementById('back-to-home');
    const mainSections = document.querySelectorAll('section:not(#tryapp-section)');
    const tryAppSection = document.getElementById('tryapp-section');
    
    tryNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide all main sections
            mainSections.forEach(section => {
                if (section.id !== 'tryapp-section') {
                    section.style.display = 'none';
                }
            });
            
            // Show try app section
            tryAppSection.style.display = 'block';
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    backToHomeButton.addEventListener('click', function() {
        // Hide try app section
        tryAppSection.style.display = 'none';
        
        // Show all main sections
        mainSections.forEach(section => {
            if (section.id !== 'tryapp-section') {
                section.style.display = 'block';
            }
        });
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Category selection
    const categoryCards = document.querySelectorAll('.category-card');
    const topicsSections = document.querySelectorAll('.topics');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            categoryCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Hide all topics sections
            topicsSections.forEach(section => section.classList.remove('active'));
            
            // Show corresponding topics section
            const category = this.dataset.category;
            document.getElementById(`${category}-topics`).classList.add('active');
        });
    });

    // Add event listeners for navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Smooth scroll to section
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});