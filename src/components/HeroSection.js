import React from 'react';
import { motion } from 'framer-motion';

function HeroSection({ scrollToSection }) {
  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          حوّل التعلم إلى مغامرة مشوقة
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          مبادرة Eduplay تجمع بين متعة التعلم وتقنية الواقع المعزز (AR) لخلق تجربة تعليمية تفاعلية فريدة تحفز الإبداع وتنمي المهارات
        </motion.p>
        
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <button 
            className="try-now-btn" 
            onClick={() => window.location.href = "pages/tryapp.html"}
          >
            جرّب الآن
          </button>
          
          <button 
            className="secondary-btn" 
            onClick={() => scrollToSection('about-ar')}
          >
            تعرف علينا
          </button>
        </motion.div>
      </div>
      
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
}

export default HeroSection;