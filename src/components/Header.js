import React from 'react';
import { motion } from 'framer-motion';

function Header({ isMenuOpen, setIsMenuOpen, scrollToSection, activeSection, hasScrolled }) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header ${hasScrolled ? 'scrolled' : ''}`}
    >
      <div className="container header-container">
        <div className="logo">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
          >
            <img 
              src="/assets/logo/logo.png" 
              alt="EDUplay Logo" 
              style={{ height: '120px', marginLeft: '18px' }} 
            />
          </a>
        </div>
        
        <div 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
            {[
              { id: 'home', label: 'الرئيسية' },
              { id: 'about-ar', label: 'عن الواقع المعزز' },
              { id: 'impact', label: 'الأثر' },
              { id: 'teacher', label: 'ركن المعلم' },
              { id: 'contact', label: 'تواصل معنا' }
            ].map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    scrollToSection(item.id); 
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      className="nav-indicator" 
                      layoutId="nav-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="try-now-btn" 
          onClick={() => window.location.href = "/pages/tryapp.html"}
        >
          جرّب الآن
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </motion.header>
  );
}

export default Header;