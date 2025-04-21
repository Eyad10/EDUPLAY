// AR Features JavaScript for Eduplay

document.addEventListener('DOMContentLoaded', function() {
    // AR interaction buttons
    const arButtons = document.querySelectorAll('.ar-interaction-button');
    
    if (arButtons.length > 0) {
      console.log('AR buttons found:', arButtons.length);
      
      const categoriesSection = document.querySelector('.categories')?.parentElement;
      const arDemoSection = document.getElementById('ar-demo-section');
      const arContainer = document.getElementById('ar-container');
      const backButton = document.getElementById('back-to-categories');
      
      // Add event listeners to AR buttons
      arButtons.forEach(button => {
        button.addEventListener('click', function() {
          console.log('AR button clicked:', this.dataset.arType);
          
          const arType = this.dataset.arType;
          
          // Hide categories section and show AR demo section
          if (categoriesSection) categoriesSection.style.display = 'none';
          if (arDemoSection) arDemoSection.style.display = 'block';
          
          // Display appropriate content based on AR type
          if (arContainer) {
            switch(arType) {
              case 'science':
                console.log('Displaying science model');
                arContainer.innerHTML = `
                  <h3>تجربة العلوم</h3>
                  <p>استكشف نماذج ثلاثية الأبعاد للخلية النباتية، الجهاز الهضمي، وتركيب الذرة.</p>
                  
                  <h4 style="margin-top: 20px; margin-bottom: 10px;">تركيب الخلية النباتية</h4>
                  <div class="sketchfab-embed-wrapper"> 
                  <iframe title="Plant Cell Structure" frameborder="0" allowfullscreen mozallowfullscreen="true" 
                  webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" 
                  xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered 
                  web-share style="width: 100%; height: 400px;" 
                  src="https://sketchfab.com/models/7d97843eeaf948c387f94f96342abe00/embed"> 
                  </iframe> 
                  </div>
                  
                  <div class="model-info">
                  <h4>معلومات عن الخلية النباتية:</h4>
                  <ul>
                  <li>الخلية النباتية هي الوحدة الأساسية في بناء النبات</li>
                  <li>تحتوي على جدار خلوي يعطيها الدعم والشكل</li>
                  <li>البلاستيدات الخضراء تحتوي على الكلوروفيل وتقوم بعملية البناء الضوئي</li>
                  <li>الفجوة المركزية كبيرة وتخزن الماء والمواد الغذائية</li>
                  <li>النواة تحتوي على المادة الوراثية (DNA) وتتحكم في نشاط الخلية</li>
                  </ul>
                  <button id="test-cell-btn" class="test-btn">اختبار فهم الخلية النباتية</button>
                  </div>
                  
                  <h4 style="margin-top: 30px; margin-bottom: 10px;">الجهاز الهضمي</h4>
                  <div class="sketchfab-embed-wrapper"> 
                  <iframe title="Digestive System" frameborder="0" allowfullscreen mozallowfullscreen="true" 
                  webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" 
                  xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered 
                  web-share style="width: 100%; height: 400px;" 
                  src="https://sketchfab.com/models/3f598117d05044b88e95be6c5a3c59b9/embed"> 
                  </iframe> 
                  </div>
                  
                  <div class="model-info">
                  <h4>معلومات عن الجهاز الهضمي:</h4>
                  <ul>
                  <li>الجهاز الهضمي مسؤول عن تحويل الطعام إلى مواد مغذية يمكن للجسم امتصاصها</li>
                  <li>يبدأ الهضم في الفم عن طريق المضغ وإفراز اللعاب</li>
                  <li>المعدة تفرز الأحماض والإنزيمات لتكسير الطعام</li>
                  <li>الأمعاء الدقيقة هي موقع امتصاص معظم العناصر الغذائية</li>
                  <li>الكبد يساعد في تصنيع العصارة الصفراوية التي تساعد في هضم الدهون</li>
                  </ul>
                  <button id="test-digestive-btn" class="test-btn">اختبار فهم الجهاز الهضمي</button>
                  </div>
                  
                  <h4 style="margin-top: 30px; margin-bottom: 10px;">تركيب الذرة</h4>
                  <div class="sketchfab-embed-wrapper"> 
                  <iframe title="Chemistry_Atomic structure" frameborder="0" allowfullscreen mozallowfullscreen="true" 
                  webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" 
                  xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered 
                  web-share style="width: 100%; height: 400px;" 
                  src="https://sketchfab.com/models/329e3e423749420db86334947999061f/embed"> 
                  </iframe> 
                  </div>
                  
                  <div class="model-info">
                  <h4>معلومات عن تركيب الذرة:</h4>
                  <ul>
                  <li>الذرة هي أصغر وحدة من المادة تحتفظ بخصائص العنصر</li>
                  <li>تتكون الذرة من نواة مركزية تحتوي على البروتونات والنيوترونات</li>
                  <li>الإلكترونات تدور حول النواة في مدارات محددة</li>
                  <li>البروتونات تحمل شحنة موجبة والإلكترونات تحمل شحنة سالبة</li>
                  <li>النيوترونات متعادلة الشحنة وتوجد في نواة الذرة</li>
                  </ul>
                  <button id="test-atom-btn" class="test-btn">اختبار فهم تركيب الذرة</button>
                  </div>
                `;
                
                // Add event listeners to test buttons
                setTimeout(() => {
                  const testCellBtn = document.getElementById('test-cell-btn');
                  const testDigestiveBtn = document.getElementById('test-digestive-btn');
                  const testAtomBtn = document.getElementById('test-atom-btn');
                  
                  if (testCellBtn) testCellBtn.addEventListener('click', () => startQuiz('cell'));
                  if (testDigestiveBtn) testDigestiveBtn.addEventListener('click', () => startQuiz('digestive'));
                  if (testAtomBtn) testAtomBtn.addEventListener('click', () => startQuiz('atom'));
                }, 100);
                break;
                
              // Add more AR types as needed
            }
          }
        });
      });
      
      // Back button functionality
      if (backButton) {
        backButton.addEventListener('click', function() {
          if (arDemoSection) arDemoSection.style.display = 'none';
          if (categoriesSection) categoriesSection.style.display = 'block';
        });
      }
    }
    
    // Quiz functionality
    const quizModal = document.getElementById('quiz-modal');
    const closeQuizBtn = document.getElementById('close-quiz');
    
    if (quizModal && closeQuizBtn) {
      const quizTitle = document.getElementById('quiz-title');
      const questionText = document.getElementById('question-text');
      const questionImg = document.getElementById('question-img');
      const optionsContainer = document.getElementById('options-container');
      const feedbackEl = document.getElementById('feedback');
      const questionProgress = document.getElementById('question-progress');
      const nextBtn = document.getElementById('next-btn');
      const quizResult = document.getElementById('quiz-result');
      const questionContainer = document.getElementById('question-container');
      
      // Quiz questions
      const cellQuestions = [
        {
          question: "ما هي العضية رقم 10 في الصورة؟",
          image: "/assets/topics/cell_1.png",
          options: [
            { text: "البلاستيدات الخضراء", correct: true },
            { text: "الميتوكوندريا", correct: false },
            { text: "النواة", correct: false },
            { text: "جدار الخلية", correct: false }
          ],
          feedback: {
            correct: "ممتاز! هذه هي البلاستيدات الخضراء التي تحتوي على الكلوروفيل وتقوم بعملية البناء الضوئي.",
            incorrect: "للأسف، الإجابة غير صحيحة. هذه هي البلاستيدات الخضراء التي تقوم بعملية البناء الضوئي."
          }
        },
        {
          question: "ما هي العضية رقم 1 في الصورة؟",
          image: "/assets/topics/cell_2.png",
          options: [
            { text: "الميتوكوندريا", correct: false },
            { text: "البلاستيدات الخضراء", correct: false },
            { text: "النواة", correct: true },
            { text: "الفجوة المركزية", correct: false }
          ],
          feedback: {
            correct: "ممتاز! هذه هي النواة التي تحتوي على المادة الوراثية وتتحكم في نشاط الخلية.",
            incorrect: "للأسف، الإجابة غير صحيحة. هذه هي النواة التي تحتوي على المادة الوراثية."
          }
        },
        {
          question: "ما هي العضية رقم 4 في الصورة؟",
          image: "/assets/topics/cell_3.png",
          options: [
            { text: "الفجوة المركزية", correct: false },
            { text: "الميتوكوندريا", correct: true },
            { text: "البلاستيدات الخضراء", correct: false },
            { text: "جدار الخلية", correct: false }
          ],
          feedback: {
            correct: "ممتاز! هذه هي الميتوكوندريا المسؤولة عن إنتاج الطاقة في الخلية.",
            incorrect: "للأسف، الإجابة غير صحيحة. هذه هي الميتوكوندريا المسؤولة عن إنتاج الطاقة."
          }
        }
      ];
      
      const digestiveQuestions = [
        {
          question: "ما هو العضو المشار إليه في الصورة؟",
          image: "/assets/topics/b2.png",
          options: [
            { text: "المعدة", correct: true },
            { text: "الكبد", correct: false },
            { text: "الأمعاء الدقيقة", correct: false },
            { text: "المريء", correct: false }
          ],
          feedback: {
            correct: "ممتاز! هذه هي المعدة التي تخزن الطعام وتفرز العصارة المعدية لهضمه.",
            incorrect: "للأسف، الإجابة غير صحيحة. هذه هي المعدة التي تخزن الطعام وتفرز العصارة المعدية."
          }
        },
        {
          question: "ما هو العضو المشار إليه في الصورة؟",
          image: "/assets/topics/b1.png",
          options: [
            { text: "المعدة", correct: false },
            { text: "الأمعاء الغليظة", correct: false },
            { text: "الأمعاء الدقيقة", correct: true },
            { text: "المريء", correct: false }
          ],
          feedback: {
            correct: "ممتاز! هذه هي الأمعاء الدقيقة التي تتم فيها معظم عملية امتصاص المواد الغذائية.",
            incorrect: "للأسف، الإجابة غير صحيحة. هذه هي الأمعاء الدقيقة التي تتم فيها معظم عملية امتصاص المواد الغذائية."
          }
        },
        {
          question: "ما هو العضو المشار إليه في الصورة؟",
          image: "/assets/topics/b3.png",
          options: [
            { text: "البنكرياس", correct: false },
            { text: "الكبد", correct: true },
            { text: "المعدة", correct: false },
            { text: "الطحال", correct: false }
          ],
          feedback: {
            correct: "ممتاز! هذا هو الكبد الذي يعتبر من أهم أعضاء الجهاز الهضمي ويقوم بتصنيع العصارة الصفراوية.",
            incorrect: "للأسف، الإجابة غير صحيحة. هذا هو الكبد الذي يعتبر من أهم أعضاء الجهاز الهضمي."
          }
        }
      ];
      
      const atomQuestions = [
        {
          question: "ما هو الجزء رقم 4 في الصورة؟",
          image: "/assets/topics/a1.png",
          options: [
            { text: "النواة", correct: true },
            { text: "الإلكترون", correct: false },
            { text: "المدار", correct: false },
            { text: "الذرة بأكملها", correct: false }
          ],
          feedback: {
            correct: "ممتاز! هذه هي النواة التي تقع في مركز الذرة وتحتوي على البروتونات والنيوترونات.",
            incorrect: "للأسف، الإجابة غير صحيحة. هذه هي النواة التي تقع في مركز الذرة."
          }
        },
        {
          question: "ما هي الجسيمات المشار إليها برقم 2 في الصورة؟",
          image: "/assets/topics/a1.png",
          options: [
            { text: "البروتونات", correct: false },
            { text: "النيوترونات", correct: false },
            { text: "الإلكترونات", correct: true },
            { text: "الفوتونات", correct: false }
          ],
          feedback: {
            correct: "ممتاز! هذه هي الإلكترونات التي تدور حول النواة في مدارات محددة.",
            incorrect: "للأسف، الإجابة غير صحيحة. هذه هي الإلكترونات التي تدور حول النواة."
          }
        },
        {
          question: "ما هي الجسيمات المشار إليها برقم 5 في الصورة؟",
          image: "/assets/topics/a3.png",
          options: [
            { text: "الإلكترونات", correct: false },
            { text: "البروتونات", correct: true },
            { text: "النيوترونات", correct: false },
            { text: "الكواركات", correct: false }
          ],
          feedback: {
            correct: "ممتاز! هذه هي البروتونات التي توجد في نواة الذرة وتحمل شحنة موجبة.",
            incorrect: "للأسف، الإجابة غير صحيحة. هذه هي البروتونات التي توجد في نواة الذرة."
          }
        }
      ];
      
      // Quiz variables
      let currentQuiz = [];
      let currentQuestionIndex = 0;
      let score = 0;
      let quizType = '';
      
      // Close quiz modal
      closeQuizBtn.addEventListener('click', () => {
        quizModal.classList.remove('active');
      });
      
      // Start quiz
      window.startQuiz = function(type) {
        quizType = type;
        
        // Set quiz type
        if (type === 'cell') {
          currentQuiz = cellQuestions;
          quizTitle.textContent = "اختبار فهم تركيب الخلية النباتية";
        } else if (type === 'digestive') {
          currentQuiz = digestiveQuestions;
          quizTitle.textContent = "اختبار فهم الجهاز الهضمي";
        } else if (type === 'atom') {
          currentQuiz = atomQuestions;
          quizTitle.textContent = "اختبار فهم تركيب الذرة";
        }
        
        // Initialize quiz
        currentQuestionIndex = 0;
        score = 0;
        questionContainer.style.display = 'block';
        quizResult.style.display = 'none';
        quizModal.classList.add('active');
        
        // Show first question
        showQuestion();
      };
      
      // Show current question
      function showQuestion() {
        // Reset state
        resetState();
        
        // Get current question data
        const question = currentQuiz[currentQuestionIndex];
        
        // Update question info
        questionText.textContent = question.question;
        questionImg.src = question.image;
        questionProgress.textContent = `السؤال ${currentQuestionIndex + 1} من ${currentQuiz.length}`;
        
        // Create options
        question.options.forEach((option, index) => {
          const optionEl = document.createElement('div');
          optionEl.className = 'quiz-option';
          
          const marker = document.createElement('span');
          marker.className = 'option-marker';
          marker.textContent = String.fromCharCode(65 + index); // A, B, C, D
          
          const text = document.createElement('span');
          text.textContent = option.text;
          
          optionEl.appendChild(marker);
          optionEl.appendChild(text);
          optionEl.addEventListener('click', () => selectOption(optionEl, index, option.correct));
          
          optionsContainer.appendChild(optionEl);
        });
      }
      
      // Reset quiz state
      function resetState() {
        nextBtn.style.display = 'none';
        feedbackEl.style.display = 'none';
        feedbackEl.className = 'feedback';
        optionsContainer.innerHTML = '';
      }
      
      // Select an answer
      function selectOption(optionEl, optionIndex, isCorrect) {
        // Ensure no other option can be selected after answering
        const options = document.querySelectorAll('.quiz-option');
        if (options[0].classList.contains('correct') || options[0].classList.contains('incorrect')) {
          return;
        }
        
        // Mark selected option
        options.forEach(opt => opt.classList.remove('selected'));
        optionEl.classList.add('selected');
        
        // Check answer
        if (isCorrect) {
          optionEl.classList.add('correct');
          score++;
          feedbackEl.textContent = currentQuiz[currentQuestionIndex].feedback.correct;
          feedbackEl.classList.add('correct');
        } else {
          optionEl.classList.add('incorrect');
          feedbackEl.textContent = currentQuiz[currentQuestionIndex].feedback.incorrect;
          feedbackEl.classList.add('incorrect');
          
          // Show correct answer
          options.forEach((opt, idx) => {
            if (currentQuiz[currentQuestionIndex].options[idx].correct) {
              opt.classList.add('correct');
            }
          });
        }
        
        feedbackEl.style.display = 'block';
        nextBtn.style.display = 'block';
      }
      
      // Next button
      nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < currentQuiz.length) {
          showQuestion();
        } else {
          showResult();
        }
      });
      
      // Show final result
      function showResult() {
        questionContainer.style.display = 'none';
        quizResult.style.display = 'block';
        
        // Calculate percentage
        const percentage = Math.round((score / currentQuiz.length) * 100);
        
        // Determine appropriate message
        let resultMessage, resultClass, resultEmoji;
        
        if (percentage >= 80) {
          resultEmoji = '🏆';
          resultMessage = 'ممتاز! لقد أظهرت فهماً عميقاً للموضوع.';
          resultClass = 'result-good';
        } else if (percentage >= 60) {
          resultEmoji = '👍';
          resultMessage = 'جيد! يمكنك مراجعة بعض المعلومات لتحسين فهمك.';
          resultClass = 'result-average';
        } else {
          resultEmoji = '📚';
          resultMessage = 'تحتاج إلى مزيد من التعلم. حاول مراجعة المادة مرة أخرى.';
          resultClass = 'result-poor';
        }
        
        // Create result content
        quizResult.innerHTML = `
          <div class="${resultClass}" style="padding: 20px; border-radius: 8px;">
            <div style="font-size: 50px; margin-bottom: 15px;">${resultEmoji}</div>
            <h3 style="margin-bottom: 10px;">${resultMessage}</h3>
            <p style="margin-bottom: 20px;">النتيجة: ${score} من ${currentQuiz.length} (${percentage}%)</p>
            <div class="quiz-result-buttons">
              <button id="retry-quiz" class="test-btn">إعادة الاختبار</button>
              <button id="back-to-model" class="test-btn" style="background-color: #10B981;">العودة للنموذج</button>
            </div>
          </div>
        `;
        
        // Add event listeners to buttons
        document.getElementById('retry-quiz').addEventListener('click', () => {
          startQuiz(quizType);
        });
        
        document.getElementById('back-to-model').addEventListener('click', () => {
          quizModal.classList.remove('active');
        });
      }
      
      // Close quiz modal when clicking outside
      quizModal.addEventListener('click', (e) => {
        if (e.target === quizModal) {
          quizModal.classList.remove('active');
        }
      });
    }
  });