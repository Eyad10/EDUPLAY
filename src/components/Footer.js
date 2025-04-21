import React from 'react';

function Footer({ scrollToSection }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <img src="/assets/logo/logo.png" alt="EDUplay Logo" />
              <span>Eduplay</span>
            </div>
            <p>نسعى لتغيير طريقة التعليم في الوطن العربي من خلال توظيف التقنيات الحديثة لخلق تجارب تعليمية ممتعة وفعالة.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>روابط سريعة</h3>
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
                    onClick={(e) => { 
                      e.preventDefault(); 
                      scrollToSection(item.id); 
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>الدعم</h3>
            <ul>
              <li><a href="#">الأسئلة الشائعة</a></li>
              <li><a href="#">الدعم الفني</a></li>
              <li><a href="#">سياسة الخصوصية</a></li>
              <li><a href="#">الشروط والأحكام</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2023 Eduplay. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;