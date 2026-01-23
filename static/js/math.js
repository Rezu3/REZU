const gkQuestions = [
    {
        question: "একটি সংখ্যা ও তার দ্বিগুণের সমষ্টি ৩৬ হলে সংখ্যাটি কত?",
        options: ["১২", "১৮", "৯", "২৪"],
        correctAnswer: 0
    },
    {
        question: "৫, ৮, ১১, ১৪, ... ধারাটির ১৫তম পদ কত?",
        options: ["৪৫", "৪৭", "৪৯", "৫১"],
        correctAnswer: 1
    },
    {
        question: "২৫ জন শ্রমিক একটি কাজ ১২ দিনে শেষ করে। ১৫ দিনে কাজটি শেষ করতে কতজন শ্রমিক লাগবে?",
        options: ["২০ জন", "১৮ জন", "২২ জন", "২৪ জন"],
        correctAnswer: 0
    },
    {
        question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য ২০% বাড়ানো হল এবং প্রস্থ ২০% কমানো হল। ক্ষেত্রফলের শতকরা পরিবর্তন কত?",
        options: ["৪% কমবে", "৪% বাড়বে", "৮% কমবে", "অপরিবর্তিত থাকবে"],
        correctAnswer: 0
    },
    {
        question: "একটি ট্রেন ১০০ মিটার লম্বা সেতু ২০ সেকেন্ডে ও ২০০ মিটার লম্বা প্ল্যাটফর্ম ৩০ সেকেন্ডে অতিক্রম করে। ট্রেনের দৈর্ঘ্য কত?",
        options: ["১০০ মিটার", "১৫০ মিটার", "২০০ মিটার", "২৫০ মিটার"],
        correctAnswer: 0
    },
    {
        question: "২, ৪, ৮, ১৬, ... ধারাটির প্রথম ১০টি পদের সমষ্টি কত?",
        options: ["২০৪৬", "২০৪৮", "২০৫০", "২০৫২"],
        correctAnswer: 0
    },
    {
        question: "একটি ঘড়ি প্রতি ঘণ্টায় ৫ মিনিট পিছিয়ে যায়। সকাল ৮টায় সঠিক সময় সেট করা হলে, বিকাল ৪টায় ঘড়িটি কত সময় দেখাবে?",
        options: ["৩:২০", "৩:৩৬", "৩:৪৪", "৩:৫০"],
        correctAnswer: 1
    },
    {
        question: "যদি A : B = 3 : 4 এবং B : C = 5 : 6 হয়, তবে A : C = কত?",
        options: ["5 : 8", "3 : 6", "5 : 6", "2 : 3"],
        correctAnswer: 0
    },
    {
        question: "একটি সংখ্যার ৩/৫ অংশ ৬০ হলে, সংখ্যাটির ২/৩ অংশ কত?",
        options: ["৫০", "৬০", "৬৬.৬৭", "৭৫"],
        correctAnswer: 2
    },
    {
        question: "৫টি পর্যবেক্ষণের গড় ২০। একটি নতুন পর্যবেক্ষণ ৩০ যোগ করলে নতুন গড় কত?",
        options: ["২১", "২১.৬৭", "২২", "২২.৫"],
        correctAnswer: 1
    },
    {
        question: "একটি বৃত্তের ব্যাসার্ধ ২০% বৃদ্ধি করলে ক্ষেত্রফল শতকরা কত বৃদ্ধি পাবে?",
        options: ["৪০%", "৪৪%", "৪৮%", "৫০%"],
        correctAnswer: 1
    },
    {
        question: "৩ জন পুরুষ বা ৫ জন মহিলা একটি কাজ ২০ দিনে শেষ করে। ২ জন পুরুষ ও ৩ জন মহিলা একত্রে কাজটি কত দিনে শেষ করবে?",
        options: ["১২ দিন", "১৫ দিন", "১৮ দিন", "২০ দিন"],
        correctAnswer: 1
    },
    {
        question: "log₁₀2 = 0.3010 হলে, log₁₀8 = কত?",
        options: ["0.9030", "0.6020", "0.4515", "0.2553"],
        correctAnswer: 0
    },
    {
        question: "একটি সমকোণী ত্রিভুজের লম্ব ও ভূমি যথাক্রমে ৬ সেমি ও ৮ সেমি হলে, অতিভুজ কত?",
        options: ["১০ সেমি", "১২ সেমি", "১৪ সেমি", "১৫ সেমি"],
        correctAnswer: 0
    },
    {
        question: "x + 1/x = 3 হলে, x² + 1/x² = কত?",
        options: ["৭", "৯", "১১", "১৩"],
        correctAnswer: 0
    },
    {
        question: "একটি সংখ্যা ৩২১ থেকে যত বড়, ২৩১ থেকে তত ছোট। সংখ্যাটি কত?",
        options: ["২৭৬", "২৮১", "২৮৬", "২৯১"],
        correctAnswer: 0
    },
    {
        question: "একজন দোকানদার একটি জিনিস ২০% লাভে বিক্রি করে। যদি ক্রয়মূল্য ১০% কম হতো এবং বিক্রয়মূল্য ২০ টাকা কম হতো, তাহলে ২৫% লাভ হতো। জিনিসটির প্রকৃত ক্রয়মূল্য কত?",
        options: ["২০০ টাকা", "২৫০ টাকা", "৩০০ টাকা", "৩৫০ টাকা"],
        correctAnswer: 2
    },
    {
        question: "একটি গাড়ি ৬০ কিমি/ঘণ্টা বেগে ৩ ঘণ্টা, ৪০ কিমি/ঘণ্টা বেগে ৪ ঘণ্টা এবং ৫০ কিমি/ঘণ্টা বেগে ৫ ঘণ্টা চলল। গড় গতিবেগ কত?",
        options: ["৪৮ কিমি/ঘণ্টা", "৫০ কিমি/ঘণ্টা", "৫২ কিমি/ঘণ্টা", "৫৪ কিমি/ঘণ্টা"],
        correctAnswer: 1
    },
    {
        question: "কোন ক্ষুদ্রতম সংখ্যা ১২, ১৫ ও ২০ দ্বারা বিভাজ্য?",
        options: ["৬০", "৯০", "১২০", "১৮০"],
        correctAnswer: 0
    },
    {
        question: "sin²θ + cos²θ = ?",
        options: ["০", "১", "tan²θ", "cot²θ"],
        correctAnswer: 1
    },
    {
        question: "একটি সমান্তর প্রগতির প্রথম পদ ৫ এবং সাধারণ অন্তর ৩ হলে, দশম পদ কত?",
        options: ["৩২", "৩৫", "৩৮", "৪১"],
        correctAnswer: 0
    },
    {
        question: "একটি সংখ্যার বর্গ তার তিনগুণ থেকে ১০ বেশি। সংখ্যাটি কত?",
        options: ["৫", "২", "৩", "৪"],
        correctAnswer: 0
    },
    {
        question: "৫, ১০, ২০, ৪০,... ধারাটির কোন পদ ১২৮০?",
        options: ["৭ম", "৮ম", "৯ম", "১০ম"],
        correctAnswer: 2
    },
    {
        question: "একটি ঘনকের কর্ণ ৮√৩ সেমি হলে, ঘনকের আয়তন কত?",
        options: ["৫১২ ঘন সেমি", "২১৬ ঘন সেমি", "১২৫ ঘন সেমি", "৩৪৩ ঘন সেমি"],
        correctAnswer: 0
    },
    {
        question: "যদি ২x + ৩y = ১২ এবং ৩x + ২y = ১৩ হয়, তবে x + y = ?",
        options: ["৫", "৬", "৭", "৮"],
        correctAnswer: 0
    },
    {
        question: "একটি বৃত্তের পরিধি ৪৪ সেমি হলে, ক্ষেত্রফল কত?",
        options: ["১৫৪ বর্গ সেমি", "১৬০ বর্গ সেমি", "১৬৪ বর্গ সেমি", "১৭২ বর্গ সেমি"],
        correctAnswer: 0
    },
    {
        question: "১ থেকে ১০০ পর্যন্ত মৌলিক সংখ্যা কয়টি?",
        options: ["২৪", "২৫", "২৬", "২৭"],
        correctAnswer: 1
    },
    {
        question: "১২ জন লোক একটি কাজ ১৮ দিনে শেষ করে। ৬ জন লোক ঐ কাজ কত দিনে শেষ করবে?",
        options: ["৩৬ দিন", "৩০ দিন", "২৭ দিন", "২৪ দিন"],
        correctAnswer: 0
    },
    {
        question: "একটি সমদ্বিবাহু ত্রিভুজের ভূমি ১২ সেমি এবং সমান বাহু ১০ সেমি হলে, ক্ষেত্রফল কত?",
        options: ["৪৮ বর্গ সেমি", "৩৬ বর্গ সেমি", "৬০ বর্গ সেমি", "৭২ বর্গ সেমি"],
        correctAnswer: 0
    },
    {
        question: "৬০০ টাকার ৫% হারে ৩ বছরের সরল সুদ কত?",
        options: ["৯০ টাকা", "১০০ টাকা", "১১০ টাকা", "১২০ টাকা"],
        correctAnswer: 0
    },
    {
        question: "একটি সংখ্যার ১/৪ অংশ ২৫ হলে, সংখ্যাটির ৬০% কত?",
        options: ["৬০", "৭৫", "৮০", "৯০"],
        correctAnswer: 0
    },
    {
        question: "যদি a + b = ১০ এবং ab = ২১ হয়, তবে a² + b² = ?",
        options: ["৫৮", "৫৪", "৪৬", "৪২"],
        correctAnswer: 0
    },
    {
        question: "একটি বস্তু ২০০ টাকায় ক্রয় করে ২৫০ টাকায় বিক্রি করলে শতকরা লাভ কত?",
        options: ["২০%", "২৫%", "৩০%", "৩৫%"],
        correctAnswer: 1
    },
    {
        question: "একটি কোণের সম্পূরক কোণ ৪৫° হলে, কোণটি কত?",
        options: ["৪৫°", "৯০°", "১৩৫°", "১৮০°"],
        correctAnswer: 2
    },
    {
        question: "যদি ৫টি কলমের মূল্য ৪০ টাকা হয়, তবে ১২টি কলমের মূল্য কত?",
        options: ["৮০ টাকা", "৯০ টাকা", "৯৬ টাকা", "১০০ টাকা"],
        correctAnswer: 2
    },
    {
        question: "একটি সংখ্যার ৩ গুণের সাথে ৫ যোগ করলে ২০ হয়। সংখ্যাটি কত?",
        options: ["৫", "৬", "৭", "৮"],
        correctAnswer: 0
    },
    {
        question: "১, ৩, ৬, ১০, ১৫,... ধারাটির পরবর্তী সংখ্যা কত?",
        options: ["২০", "২১", "২২", "২৩"],
        correctAnswer: 1
    },
    {
        question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য প্রস্থের দ্বিগুণ। পরিসীমা ৩৬ সেমি হলে, দৈর্ঘ্য কত?",
        options: ["৬ সেমি", "৯ সেমি", "১২ সেমি", "১৮ সেমি"],
        correctAnswer: 2
    },
    {
        question: "৪ জন বালক ৪টি কাজ ৪ দিনে করে। ৮ জন বালক ৮টি কাজ কত দিনে করবে?",
        options: ["৪ দিন", "৮ দিন", "২ দিন", "১ দিন"],
        correctAnswer: 0
    },
    {
        question: "একটি সমবাহু ত্রিভুজের প্রতিটি বাহু ১০ সেমি হলে, উচ্চতা কত?",
        options: ["৫√৩ সেমি", "৮ সেমি", "১০ সেমি", "১২ সেমি"],
        correctAnswer: 0
    },
    {
        question: "২৫% লাভে একটি জিনিসের বিক্রয়মূল্য ১২৫ টাকা হলে, ক্রয়মূল্য কত?",
        options: ["১০০ টাকা", "১১০ টাকা", "১২০ টাকা", "১৩০ টাকা"],
        correctAnswer: 0
    },
    {
        question: "যদি ২x = ৮y এবং ৩y = ২৭z হয়, তবে x : z = ?",
        options: ["১:১", "২:১", "৩:১", "৪:১"],
        correctAnswer: 2
    },
    {
        question: "একটি সংখ্যার বর্গমূল ৯ হলে, সংখ্যাটির ঘনমূল কত?",
        options: ["৩", "৯", "২৭", "৮১"],
        correctAnswer: 0
    },
    {
        question: "একটি রম্বসের কর্ণদ্বয় ১০ সেমি ও ২৪ সেমি হলে, ক্ষেত্রফল কত?",
        options: ["১২০ বর্গ সেমি", "১৪০ বর্গ সেমি", "১৬০ বর্গ সেমি", "১৮০ বর্গ সেমি"],
        correctAnswer: 0
    },
    {
        question: "যদি (x - 2)(x + 3) = 0 হয়, তবে x এর মান কত?",
        options: ["২, -৩", "-২, ৩", "২, ৩", "-২, -৩"],
        correctAnswer: 0
    },
    {
        question: "১০০ থেকে ২০০ পর্যন্ত কয়টি সংখ্যা ৭ দ্বারা বিভাজ্য?",
        options: ["১৪", "১৫", "১৬", "১৭"],
        correctAnswer: 0
    },
    {
        question: "একটি ঘড়ির মিনিটের কাঁটা ১ ঘণ্টায় কত ডিগ্রি ঘোরে?",
        options: ["৩০°", "৬০°", "১৮০°", "৩৬০°"],
        correctAnswer: 3
    },
    {
        question: "যদি ৫x + ২ = ১৭ হয়, তবে x এর মান কত?",
        options: ["২", "৩", "৪", "৫"],
        correctAnswer: 1
    },
    {
        question: "একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ ১৩৫° হলে, বাহুর সংখ্যা কত?",
        options: ["৬", "৮", "১০", "১২"],
        correctAnswer: 1
    },
    {
        question: "৮, ১২, ১৮, ২৭,... ধারাটির পরবর্তী সংখ্যা কত?",
        options: ["৩৬", "৪০.৫", "৪৫", "৫৪"],
        correctAnswer: 1
    }
];
 
































// gk.js - General Knowledge Quiz Logic

document.addEventListener('DOMContentLoaded', function() {

    // Quiz state variables
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let quizTimer;
    let questionTimer;
    let quizStartTime;
    let quizCompleted = false;
    let autoAdvanceInterval;
    let advanceProgressInterval;

    // DOM elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestionElement = document.getElementById('current-question');
    const scoreElement = document.getElementById('score');
    const totalTimeElement = document.getElementById('total-time');
    const timerElement = document.getElementById('timer');
    const feedbackElement = document.getElementById('feedback');
    const resultContainer = document.getElementById('result-container');
    const finalScoreElement = document.getElementById('final-score');
    const resultMessageElement = document.getElementById('result-message');
    const correctCountElement = document.getElementById('correct-count');
    const incorrectCountElement = document.getElementById('incorrect-count');
    const timeTakenElement = document.getElementById('time-taken');
    const percentageElement = document.getElementById('percentage');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');

    // Initialize the quiz
    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizCompleted = false;
        quizStartTime = Date.now();
        
        // Hide result container
        resultContainer.style.display = 'none';
        
        // Show quiz elements
        document.querySelector('.question-container').style.display = 'block';
        document.querySelector('.timer-container').style.display = 'block';
        
        // Update UI
        updateScore();
        updateQuestionCounter();
        updateTotalTime();
        
        // Load first question
        loadQuestion(currentQuestionIndex);
        
        // Start quiz timer
        startQuizTimer();
    }

    // Load a question
    function loadQuestion(index) {
        if (index >= gkQuestions.length) {
            endQuiz();
            return;
        }
        
        const question = gkQuestions[index];
        
        // Update question text
        questionText.textContent = question.question;
        
        // Clear options container
        optionsContainer.innerHTML = '';
        
        // Create option elements
        const optionLetters = ['A', 'B', 'C', 'D'];
        
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = i;
            
            // Check if user has already answered this question
            if (userAnswers[index] !== undefined) {
                if (userAnswers[index] === i) {
                    optionElement.classList.add('selected');
                }
                if (i === question.correctAnswer) {
                    optionElement.classList.add('correct');
                } else if (userAnswers[index] === i && userAnswers[index] !== question.correctAnswer) {
                    optionElement.classList.add('incorrect');
                }
            }
            
            optionElement.innerHTML = `
                <div class="option-letter">${optionLetters[i]}</div>
                <div class="option-text">${option}</div>
            `;
            
            // Add click event if not already answered
            if (userAnswers[index] === undefined) {
                optionElement.addEventListener('click', () => selectOption(i));
            }
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Update UI
        updateQuestionCounter();
        updateProgressBar(index + 1, gkQuestions.length);
        
        // Reset feedback
        feedbackElement.className = 'feedback';
        feedbackElement.textContent = '';
        
        // Start question timer
        startQuestionTimer();
    }

    // Select an option
    function selectOption(optionIndex) {
        // Prevent multiple selections
        if (userAnswers[currentQuestionIndex] !== undefined) return;
        
        // Mark the selected option
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('selected');
            option.style.pointerEvents = 'none'; // Disable further clicks
        });
        
        options[optionIndex].classList.add('selected');
        
        // Check answer
        const isCorrect = optionIndex === gkQuestions[currentQuestionIndex].correctAnswer;
        userAnswers[currentQuestionIndex] = optionIndex;
        
        if (isCorrect) {
            score++;
            updateScore();
            showFeedback(true);
            
            // Highlight correct answer
            options[gkQuestions[currentQuestionIndex].correctAnswer].classList.add('correct');
        } else {
            showFeedback(false, gkQuestions[currentQuestionIndex].options[gkQuestions[currentQuestionIndex].correctAnswer]);
            
            // Highlight correct and incorrect answers
            options[gkQuestions[currentQuestionIndex].correctAnswer].classList.add('correct');
            options[optionIndex].classList.add('incorrect');
        }
        
        // Stop question timer
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        // Auto advance to next question after 2 seconds
        startAutoAdvance(2000); // 2 seconds
    }

    // Auto advance to next question
    function startAutoAdvance(duration) {
        // Create or show auto-advance progress bar
        let progressBar = document.querySelector('.auto-advance-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'auto-advance-progress';
            progressBar.innerHTML = '<div class="advance-progress"></div>';
            feedbackElement.parentNode.insertBefore(progressBar, feedbackElement.nextSibling);
        }
        
        const progressFill = progressBar.querySelector('.advance-progress');
        progressBar.classList.add('active');
        progressFill.style.width = '0%';
        
        // Clear any existing intervals
        if (autoAdvanceInterval) clearTimeout(autoAdvanceInterval);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);
        
        // Start progress bar animation
        let progress = 0;
        const increment = 100 / (duration / 50); // Update every 50ms
        
        advanceProgressInterval = setInterval(() => {
            progress += increment;
            progressFill.style.width = `${Math.min(progress, 100)}%`;
        }, 50);
        
        // Auto advance after duration
        autoAdvanceInterval = setTimeout(() => {
            progressBar.classList.remove('active');
            clearInterval(advanceProgressInterval);
            goToNextQuestion();
        }, duration);
    }

    // Go to next question
    function goToNextQuestion() {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < gkQuestions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            endQuiz();
        }
    }

    // Start question timer (30 seconds)
    function startQuestionTimer() {
        // Stop previous timer if exists
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        questionTimer = initTimer(60, onTimeUp);
        if (questionTimer) {
            questionTimer.startTimer();
        }
    }

    // Handle time up for a question
    function onTimeUp() {
        // Disable all options
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Mark the correct answer
        const correctIndex = gkQuestions[currentQuestionIndex].correctAnswer;
        options[correctIndex].classList.add('correct');
        
        // Show feedback
        showFeedback(false, gkQuestions[currentQuestionIndex].options[correctIndex]);
        
        // Auto advance to next question after 2 seconds
        startAutoAdvance(2000);
    }

    // Show feedback
    function showFeedback(isCorrect, correctAnswer = null) {
        // Update feedback message
        if (isCorrect) {
            feedbackElement.textContent = "Correct! 🎉";
            feedbackElement.className = 'feedback correct show';
            playSound('correct');
            createConfetti();
        } else {
            feedbackElement.textContent = correctAnswer ? 
                `Incorrect. Correct answer: ${correctAnswer}` : 
                "Time's up!";
            feedbackElement.className = 'feedback incorrect show';
            playSound('incorrect');
        }
    }

    // Start quiz timer (5 minutes total)
    function startQuizTimer() {
        let totalSeconds =3000; // 5 minutes
        
        const updateTimerDisplay = () => {
            totalTimeElement.textContent = formatTime(totalSeconds);
        };
        
        updateTimerDisplay();
        
        const timerInterval = setInterval(() => {
            if (quizCompleted) {
                clearInterval(timerInterval);
                return;
            }
            
            totalSeconds--;
            updateTimerDisplay();
            
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }

    // Update question counter
    function updateQuestionCounter() {
        currentQuestionElement.textContent = `${currentQuestionIndex + 1}/${gkQuestions.length}`;
    }

    // Update score display
    function updateScore() {
        scoreElement.textContent = score;
    }

    // Update total time display
    function updateTotalTime() {
        totalTimeElement.textContent = "05:00";
    }

    // Update progress bar
    function updateProgressBar(current, total) {
        const progressBar = document.querySelector('.progress');
        if (progressBar) {
            const percentage = (current / total) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    }

    // End the quiz
    function endQuiz() {
        quizCompleted = true;
        
        // Stop timers
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        // Stop auto-advance
        if (autoAdvanceInterval) clearTimeout(autoAdvanceInterval);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);
        
        // Calculate quiz duration
        const quizDuration = Math.floor((Date.now() - quizStartTime) / 1000);
        
        // Calculate results
        const correctCount = score;
        const incorrectCount = gkQuestions.length - score;
        const percentage = Math.round((score / gkQuestions.length) * 100);
        
        // Update result display
        finalScoreElement.textContent = `${score}/${gkQuestions.length}`;
        correctCountElement.textContent = correctCount;
        incorrectCountElement.textContent = incorrectCount;
        timeTakenElement.textContent = formatTime(quizDuration);
        percentageElement.textContent = `${percentage}%`;
        
        // Set result message based on performance
        let message = "";
        if (percentage >= 90) {
            message = "Outstanding! You're a General Knowledge genius! 🎉";
        } else if (percentage >= 70) {
            message = "Excellent work! You have great knowledge! 👍";
        } else if (percentage >= 50) {
            message = "Good job! You know quite a bit! 👏";
        } else {
            message = "Keep learning! You'll do better next time! 💪";
        }
        resultMessageElement.textContent = message;
        
        // Show result container with animation
        document.querySelector('.question-container').style.display = 'none';
        document.querySelector('.timer-container').style.display = 'none';
        resultContainer.style.display = 'block';
        
        // Create confetti for good scores
        if (percentage >= 70) {
            createConfetti();
        }
    }

    // Event Listeners for result buttons
    restartBtn.addEventListener('click', function() {
        initQuiz();
    });

    homeBtn.addEventListener('click', function() {
        window.location.href = "index.html";
    });

    // Initialize the quiz when page loads
    initQuiz();

});




