import React from 'react';
import { motion } from 'framer-motion';

function ImpactSection() {
  const stats = [
    { number: "500+", label: "مدرسة مستهدفة" },
    { number: "10,000+", label: "طالب مستهدف" },
    { number: "85%", label: "زيادة متوقعة في التفاعل" },
    { number: "70%", label: "تحسن متوقع في الفهم" }
  ];

  return (
    <section className="impact" id="impact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          هدفنا في تحسين التعليم
        </motion.h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              className="stat-card"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div 
                className="stat-number"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;