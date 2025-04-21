import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutARSection from './components/AboutARSection';
import ImpactSection from './components/ImpactSection';
import TeacherSection from './components/TeacherSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/responsive.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
      
      if (!isScrolling) {
        // Determine which section is currently in view
        const sections = ['home', 'about-ar', 'impact', 'teacher', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (!element) return false;
          
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    setIsMenuOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
      
      // Update active section after scrolling
      setTimeout(() => {
        setActiveSection(sectionId);
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <div className="app-container">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        hasScrolled={hasScrolled}
      />
      
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <FeaturesSection />
        <AboutARSection />
        <ImpactSection />
        <TeacherSection />
        <ContactSection />
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;