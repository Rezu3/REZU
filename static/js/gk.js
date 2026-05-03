const gkQuestions = [
    {
        question: "1. পশ্চিমবঙ্গের কোন অঞ্চলে বেশি চা উৎপন্ন হয়?",
        options: ["দার্জিলিং", "মেদিনীপুর", "বীরভূম", "হাওড়া"],
        correctAnswer: 0
    },
    {
        question: "2. সুন্দরবন কোন ধরনের অরণ্য?",
        options: ["পাহাড়ি বন", "ম্যাংগ্রোভ বন", "শুষ্ক বন", "চিরসবুজ বন"],
        correctAnswer: 1
    },
    {
        question: "3. কৃষিকাজের জন্য সবচেয়ে গুরুত্বপূর্ণ প্রাকৃতিক উপাদান কী?",
        options: ["মাটি", "পাথর", "লোহা", "প্লাস্টিক"],
        correctAnswer: 0
    },
    {
        question: "4. নিচের কোনটি অরণ্য সম্পদ?",
        options: ["কাঠ", "লোহা", "প্লাস্টিক", "কাচ"],
        correctAnswer: 0
    },
    {
        question: "5. পশ্চিমবঙ্গে প্রধান খাদ্যশস্য কোনটি?",
        options: ["ধান", "গম", "ভুট্টা", "ডাল"],
        correctAnswer: 0
    },
    {
        question: "6. শক্তির SI একক কী?",
        options: ["জুল", "ওয়াট", "নিউটন", "পাস্কাল"],
        correctAnswer: 0
    },
    {
        question: "7. নিচের কোনটি শক্তির রূপ নয়?",
        options: ["তাপ", "আলো", "শব্দ", "ওজন"],
        correctAnswer: 3
    },
    {
        question: "8. সূর্য থেকে পৃথিবীতে শক্তি কীভাবে আসে?",
        options: ["তরঙ্গের মাধ্যমে", "পানির মাধ্যমে", "মাটির মাধ্যমে", "বাতাসের মাধ্যমে"],
        correctAnswer: 0
    },
    {
        question: "9. তাপ সবসময় কোন দিকে প্রবাহিত হয়?",
        options: ["ঠান্ডা থেকে গরমে", "গরম থেকে ঠান্ডায়", "উপরে থেকে নিচে", "নিচে থেকে উপরে"],
        correctAnswer: 1
    },
    {
        question: "10. থার্মোমিটার দিয়ে কী মাপা হয়?",
        options: ["তাপমাত্রা", "চাপ", "দৈর্ঘ্য", "ওজন"],
        correctAnswer: 0
    },
    {
        question: "11. কোনটি তাপের ভালো পরিবাহক?",
        options: ["লোহা", "কাঠ", "প্লাস্টিক", "রাবার"],
        correctAnswer: 0
    },
    {
        question: "12. কোনটি তাপের খারাপ পরিবাহক?",
        options: ["লোহা", "তামা", "কাঠ", "অ্যালুমিনিয়াম"],
        correctAnswer: 2
    },
    {
        question: "13. সূর্য কী ধরনের নক্ষত্র?",
        options: ["স্থির", "চলমান", "মধ্যম আকারের", "ক্ষুদ্র"],
        correctAnswer: 2
    },
    {
        question: "14. পৃথিবী সূর্যের চারপাশে ঘোরে কত দিনে?",
        options: ["২৪ ঘন্টা", "৩০ দিন", "৩৬৫ দিন", "১২ মাস"],
        correctAnswer: 2
    },
    {
        question: "15. পৃথিবীর নিজের অক্ষে ঘোরার ফলে কী হয়?",
        options: ["ঋতু পরিবর্তন", "দিন-রাত", "বৃষ্টি", "ভূমিকম্প"],
        correctAnswer: 1
    },
    {
        question: "16. মহাকাশে বায়ু না থাকার কারণ কী?",
        options: ["মাধ্যাকর্ষণ কম", "তাপ বেশি", "জল নেই", "আলো নেই"],
        correctAnswer: 0
    },
    {
        question: "17. নিচের কোনটি নবায়নযোগ্য শক্তি?",
        options: ["কয়লা", "পেট্রোল", "সূর্য শক্তি", "ডিজেল"],
        correctAnswer: 2
    },
    {
        question: "18. নিচের কোনটি অনবায়নযোগ্য শক্তি?",
        options: ["সূর্য", "বায়ু", "কয়লা", "জল"],
        correctAnswer: 2
    },
    {
        question: "19. মাছ চাষের জন্য কোন জল সবচেয়ে ভালো?",
        options: ["নোনা জল", "মিঠা জল", "গরম জল", "ঠান্ডা জল"],
        correctAnswer: 1
    },
    {
        question: "20. অরণ্য আমাদের কী দেয়?",
        options: ["অক্সিজেন", "কাঠ", "ঔষধ", "সবগুলো"],
        correctAnswer: 3
    },

    {
        question: "21. তাপমাত্রার SI একক কী?",
        options: ["সেলসিয়াস", "কেলভিন", "ফারেনহাইট", "জুল"],
        correctAnswer: 1
    },
    {
        question: "22. সূর্যের আলো পৃথিবীতে পৌঁছাতে কত সময় লাগে?",
        options: ["৮ মিনিট", "১ মিনিট", "১ ঘন্টা", "২৪ ঘন্টা"],
        correctAnswer: 0
    },
    {
        question: "23. চাঁদে দিন ও রাত কতদিন স্থায়ী হয় (প্রায়)?",
        options: ["১২ ঘন্টা", "২৪ ঘন্টা", "১৪ দিন", "৭ দিন"],
        correctAnswer: 2
    },
    {
        question: "24. পৃথিবীর উপগ্রহ কোনটি?",
        options: ["সূর্য", "চাঁদ", "মঙ্গল", "বৃহস্পতি"],
        correctAnswer: 1
    },
    {
        question: "25. গাছের কোন অংশ খাদ্য তৈরি করে?",
        options: ["মূল", "পাতা", "কাণ্ড", "ফুল"],
        correctAnswer: 1
    },

    {
        question: "26. শক্তি নষ্ট হয় কি?",
        options: ["হয়", "হয় না", "কখনো হয়", "জানা নেই"],
        correctAnswer: 1
    },
    {
        question: "27. শক্তি এক রূপ থেকে অন্য রূপে কী হয়?",
        options: ["নষ্ট হয়", "পরিবর্তিত হয়", "বাড়ে", "কমে"],
        correctAnswer: 1
    },
    {
        question: "28. সূর্য শক্তি কোন ধরনের শক্তি?",
        options: ["নবায়নযোগ্য", "অনবায়নযোগ্য", "রাসায়নিক", "যান্ত্রিক"],
        correctAnswer: 0
    },
    {
        question: "29. পৃথিবীর সবচেয়ে কাছের নক্ষত্র কোনটি?",
        options: ["চাঁদ", "সূর্য", "মঙ্গল", "শুক্র"],
        correctAnswer: 1
    },
    {
        question: "30. বায়ু কী ধরনের পদার্থ?",
        options: ["কঠিন", "তরল", "গ্যাস", "আগুন"],
        correctAnswer: 2
    },

    {
        question: "31. গরম বস্তু ঠান্ডা হলে কী হয়?",
        options: ["তাপ হারায়", "তাপ পায়", "আলো দেয়", "শব্দ করে"],
        correctAnswer: 0
    },
    {
        question: "32. বরফ গললে কী হয়?",
        options: ["গ্যাস", "পানি", "মাটি", "বাষ্প"],
        correctAnswer: 1
    },
    {
        question: "33. পানি ফুটলে কী হয়?",
        options: ["বরফ", "বাষ্প", "মাটি", "কাঠ"],
        correctAnswer: 1
    },
    {
        question: "34. পৃথিবীর আকৃতি কেমন?",
        options: ["চৌকো", "গোলাকার", "ত্রিভুজ", "লম্বা"],
        correctAnswer: 1
    },
    {
        question: "35. পৃথিবীতে জীবন থাকার প্রধান কারণ কী?",
        options: ["পানি", "বায়ু", "উপযুক্ত তাপমাত্রা", "সবগুলো"],
        correctAnswer: 3
    },

    {
        question: "36. কৃষিতে সার কেন ব্যবহার করা হয়?",
        options: ["মাটি শক্ত করতে", "উৎপাদন বাড়াতে", "গাছ শুকাতে", "রং করতে"],
        correctAnswer: 1
    },
    {
        question: "37. নদী কী ধরনের জল?",
        options: ["নোনা", "মিঠা", "গরম", "ঠান্ডা"],
        correctAnswer: 1
    },
    {
        question: "38. সাগরের জল কেমন?",
        options: ["মিঠা", "নোনা", "গরম", "ঠান্ডা"],
        correctAnswer: 1
    },
    {
        question: "39. মহাকাশে মানুষ কীভাবে যায়?",
        options: ["বিমান", "রকেট", "জাহাজ", "গাড়ি"],
        correctAnswer: 1
    },
    {
        question: "40. প্রথম মানুষ চাঁদে যান কে?",
        options: ["নিউটন", "আইনস্টাইন", "নীল আর্মস্ট্রং", "কালাম"],
        correctAnswer: 2
    },

    {
        question: "41. সূর্যগ্রহণ কখন হয়?",
        options: ["চাঁদ সূর্য ঢাকে", "পৃথিবী সূর্য ঢাকে", "সূর্য চাঁদ ঢাকে", "কিছুই না"],
        correctAnswer: 0
    },
    {
        question: "42. চন্দ্রগ্রহণ কখন হয়?",
        options: ["সূর্য চাঁদ ঢাকে", "পৃথিবী চাঁদ ঢাকে", "চাঁদ সূর্য ঢাকে", "কিছুই না"],
        correctAnswer: 1
    },
    {
        question: "43. শক্তির উৎস হিসেবে নিচের কোনটি ব্যবহৃত হয়?",
        options: ["সূর্য", "বায়ু", "জল", "সবগুলো"],
        correctAnswer: 3
    },
    {
        question: "44. গাছ না থাকলে কী হবে?",
        options: ["অক্সিজেন কমবে", "বৃষ্টি কমবে", "প্রাণী মারা যাবে", "সবগুলো"],
        correctAnswer: 3
    },
    {
        question: "45. পৃথিবীর কত ভাগ জল?",
        options: ["৫০%", "৭১%", "৩০%", "৯০%"],
        correctAnswer: 1
    },

    {
        question: "46. তাপমাত্রা বাড়লে কী হয়?",
        options: ["বস্তু প্রসারিত হয়", "বস্তু ছোট হয়", "কিছু হয় না", "ভেঙে যায়"],
        correctAnswer: 0
    },
    {
        question: "47. ঠান্ডা হলে বস্তু কী হয়?",
        options: ["প্রসারিত", "সংকুচিত", "ভেঙে যায়", "গলে যায়"],
        correctAnswer: 1
    },
    {
        question: "48. শক্তি ছাড়া কি কাজ সম্ভব?",
        options: ["হ্যাঁ", "না", "কখনো", "জানা নেই"],
        correctAnswer: 1
    },
    {
        question: "49. সূর্যের সবচেয়ে কাছে কোন গ্রহ?",
        options: ["পৃথিবী", "মঙ্গল", "বুধ", "শুক্র"],
        correctAnswer: 2
    },
    {
        question: "50. পৃথিবী কোন গ্যালাক্সিতে অবস্থিত?",
        options: ["অ্যান্ড্রোমিডা", "মিল্কি ওয়ে", "সোমব্রেরো", "ওরিয়ন"],
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
        
        questionTimer = initTimer(30, onTimeUp);
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
        let totalSeconds =1500; // 5 minutes
        
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








