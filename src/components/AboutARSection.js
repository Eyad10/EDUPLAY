import React from 'react';
import { motion } from 'framer-motion';

function AboutARSection() {
  return (
    <section className="about-ar" id="about-ar">
      <div className="container">
        <div className="about-ar-content">
          <motion.div 
            className="about-ar-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>ما هو الواقع المعزز؟</h2>
            <p>الواقع المعزز (AR) هو تقنية تدمج العناصر الرقمية مع العالم الحقيقي، مما يخلق طبقة إضافية من المعلومات والتفاعل. في Eduplay، نستخدم هذه التقنية لتحويل الكتب المدرسية والمواد التعليمية إلى تجارب تفاعلية ثلاثية الأبعاد.</p>
            <p>من خلال توجيه كاميرا الهاتف أو الجهاز اللوحي نحو صفحة أو صورة معينة، يمكن للطلاب رؤية النماذج والرسوم المتحركة تنبض بالحياة أمامهم، مما يساعدهم على فهم المفاهيم المعقدة بطريقة بسيطة وممتعة.</p>
          </motion.div>
          
          <motion.div 
            className="about-ar-img"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/assets/topics/q.jpg" alt="استخدام الواقع المعزز في التعليم" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutARSection;