import React from 'react';
import { motion } from 'framer-motion';

function TeacherSection() {
  const resources = [
    {
      image: "دليل الاستخدام",
      title: "دليل المعلم الشامل",
      description: "كل ما تحتاج معرفته لاستخدام تقنية الواقع المعزز بفعالية في الفصل الدراسي",
      downloadText: "تحميل الدليل"
    },
    {
      image: "أوراق عمل",
      title: "أوراق عمل تفاعلية",
      description: "مجموعة من أوراق العمل المصممة خصيصًا للاستخدام مع تطبيق الواقع المعزز",
      downloadText: "تحميل الأوراق"
    },
    {
      image: "خطط دروس",
      title: "نماذج خطط دروس",
      description: "خطط دروس جاهزة تدمج تقنية الواقع المعزز في مختلف المواد الدراسية",
      downloadText: "تحميل النماذج"
    }
  ];

  return (
    <section className="teacher-corner" id="teacher">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          ركن المعلم
        </motion.h2>
        
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <motion.div 
              className="resource-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="resource-img">{resource.image}</div>
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href="#" className="download-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  {resource.downloadText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeacherSection;