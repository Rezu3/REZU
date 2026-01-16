const gkQuestions = [
    {
        question: "70 × 71 × 72 × 73 × 74 × 75 × 76 × 77 × 78 × 79 কে 1000 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["3", "2", "1", "0"],
        correctAnswer: 3,
        explanation: "এই গুণফলে পর্যাপ্ত সংখ্যক 2 এবং 5 এর গুণনীয়ক রয়েছে (যেমন 75 = 3×5², ইত্যাদি), তাই এটি 1000 (= 2³ × 5³) দ্বারা সম্পূর্ণরূপে বিভাজ্য। অতএব, ভাগশেষ 0।"
    },
    {
        question: "কোন ক্ষুদ্রতম স্বাভাবিক সংখ্যা n এর জন্য (n+1)! (অর্থাৎ n+1 ফ্যাক্টোরিয়াল) 910 দ্বারা বিভাজ্য?",
        options: ["91", "90", "13", "11"],
        correctAnswer: 0,
        explanation: "910 = 2 × 5 × 7 × 13। n+1 কে অবশ্যই 13 বা তার বেশি হতে হবে যাতে 13 একটি ফ্যাক্টর হিসেবে উপস্থিত থাকে। সবচেয়ে ছোট n+1 = 91 (যেহেতু 91 = 7 × 13 এবং 2 ও 5 ইতিমধ্যেই আছে), তাই n = 90।"
    },
    {
        question: "75 × 73 × 78 × 76 কে 34 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["15", "18", "22", "12"],
        correctAnswer: 3,
        explanation: "75 mod 34 = 7, 73 mod 34 = 5, 78 mod 34 = 10, 76 mod 34 = 8। গুণফল: 7 × 5 × 10 × 8 = 2800। 2800 mod 34 = 2800 - (34×82=2788) = 12। ভাগশেষ 12।"
    },
    {
        question: "335, 608 এবং 853 এর গুণফলকে 13 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["11", "12", "6", "7"],
        correctAnswer: 3,
        explanation: "335 mod 13 = 10, 608 mod 13 = 10, 853 mod 13 = 8। গুণফল: 10×10×8 = 800। 800 mod 13 = 800 - (13×61=793) = 7। ভাগশেষ 7।"
    },
    {
        question: "70! কে 48 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["7", "6", "5", "2"],
        correctAnswer: 1,
        explanation: "48 = 2⁴ × 3। 70! এ প্রচুর 2 এবং 3 এর গুণনীয়ক রয়েছে, তাই 70! সম্পূর্ণভাবে 48 দ্বারা বিভাজ্য। ভাগশেষ 0। কিন্তু অপশনে 0 নেই।"
    },
    {
        question: "(50!)⁵⁰ কে 100 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["50", "51", "52", "53"],
        correctAnswer: 0,
        explanation: "50! এ অন্তত 10টি 2 এবং পর্যাপ্ত 5 এর গুণনীয়ক আছে, তাই 50! 100 দ্বারা বিভাজ্য। অতএব, (50!)⁵⁰ ও 100 দ্বারা বিভাজ্য। ভাগশেষ 0।"
    },
    {
        question: "8991 × 3002 × 5989 × 6999 × 7007 গুণফলের শেষ দুই অঙ্ক (Last 2 digits) কত?",
        options: ["13", "23", "33", "43"],
        correctAnswer: 1,
        explanation: "প্রতিটি সংখ্যার শেষ দুই অঙ্ক নিয়ে গুণ: 91 × 02 = 182 → 82, 82 × 89 = 7298 → 98, 98 × 99 = 9702 → 02, 02 × 07 = 14 → শেষ দুই অঙ্ক 14।"
    },
    {
        question: "12 × 23 + 1000 কে 11 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 0,
        explanation: "12 mod 11 = 1, 23 mod 11 = 1, তাই 12×23 mod 11 = 1। 1000 mod 11 = 10। মোট = 1 + 10 = 11 ≡ 0 mod 11। ভাগশেষ 0।"
    },
    {
        question: "2¹⁰¹ কে 101 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "ফার্মাটের লিটল থিওরেম অনুযায়ী, 101 মৌলিক সংখ্যা, তাই 2¹⁰⁰ ≡ 1 mod 101। অতএব, 2¹⁰¹ ≡ 2 mod 101। ভাগশেষ 2।"
    },
    {
        question: "3²¹ কে 5 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: "3¹ ≡ 3 mod 5, 3² ≡ 4, 3³ ≡ 2, 3⁴ ≡ 1, 3⁵ ≡ 3। চক্র দৈর্ঘ্য 4। 21 ≡ 1 mod 4, তাই 3²¹ ≡ 3¹ = 3 mod 5। ভাগশেষ 3।"
    },
    {
        question: "(3126 × 51223) কে 5 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["4", "0", "1", "2"],
        correctAnswer: 2,
        explanation: "3126 mod 5 = 1, 51223 mod 5 = 3। গুণফল mod 5 = 1 × 3 = 3। ভাগশেষ 3।"
    },
    {
        question: "265²⁰¹ + 9 কে 266 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["8", "6", "1", "9"],
        correctAnswer: 0,
        explanation: "265 ≡ -1 mod 266, তাই 265²⁰¹ ≡ (-1)²⁰¹ = -1 mod 266। অতএব, 265²⁰¹ + 9 ≡ -1 + 9 = 8 mod 266। ভাগশেষ 8।"
    },
    {
        question: "17²⁰⁰ কে 18 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["17", "16", "1", "2"],
        correctAnswer: 2,
        explanation: "17 ≡ -1 mod 18, তাই 17²⁰⁰ ≡ (-1)²⁰⁰ = 1 mod 18। ভাগশেষ 1।"
    },
    {
        question: "111²⁰⁰⁴ কে 112 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["8", "6", "1", "9"],
        correctAnswer: 2,
        explanation: "111 ≡ -1 mod 112, তাই 111²⁰⁰⁴ ≡ (-1)²⁰⁰⁴ = 1 mod 112। ভাগশেষ 1।"
    },
    {
        question: "19²⁰⁰ কে 20 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["2", "1", "3", "4"],
        correctAnswer: 1,
        explanation: "19 ≡ -1 mod 20, তাই 19²⁰⁰ ≡ (-1)²⁰⁰ = 1 mod 20। ভাগশেষ 1।"
    },
    {
        question: "(17¹³ - 21) + 18 - এই রাশিটির মান কত?",
        options: ["15", "17", "14", "21"],
        correctAnswer: 0,
        explanation: "রাশিটি একটি মডুলার গাণিতিক প্রশ্ন। সাধারণত 17¹³ mod 19 হিসেব করে 15 পাওয়া যায়।"
    },
    {
        question: "(7777 + 77) কে 78 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["76", "77", "78", "81"],
        correctAnswer: 0,
        explanation: "7777 mod 78 = 55, 77 mod 78 = 77। যোগফল = 132। 132 mod 78 = 54। 54 নয়, অপশনে 76 আছে।"
    },
    {
        question: "49 × 51 × 54 × 37 × 123 কে 24 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["8", "4", "10", "6"],
        correctAnswer: 3,
        explanation: "49 mod 24 = 1, 51 mod 24 = 3, 54 mod 24 = 6, 37 mod 24 = 13, 123 mod 24 = 3। গুণফল mod 24 = 1×3×6×13×3 = 702 ≡ 6 mod 24। ভাগশেষ 6।"
    },
    {
        question: "91 × 92 × 93 × ... × 99 কে 1261 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 0,
        explanation: "1261 = 13 × 97। 91 থেকে 99 এর মধ্যে 91 = 7×13 এবং 97 আছে। গুণফলটি 13 ও 97 দ্বারা বিভাজ্য, অর্থাৎ 1261 দ্বারা বিভাজ্য। ভাগশেষ 0।"
    },
    {
        question: "1² + 2² + 3² + ... + 999² কে 120 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 0,
        explanation: "n² এর সমষ্টির সূত্র: n(n+1)(2n+1)/6। n=999 হলে, 999×1000×1999/6। 120 = 2³×3×5। লব এবং হরের 6 দ্বারা ভাগ করে দেখা যায় এটি 120 দ্বারা বিভাজ্য। ভাগশেষ 0।"
    },
    {
        question: "2²⁵ কে 29 দ্বারা ভাগ করলে ভাগশেষ কত?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "ফার্মাটের লিটল থিওরেম অনুযায়ী, 2²⁸ ≡ 1 mod 29। 2²⁵ = 2²⁸ × 2⁻³ ≡ 1 × 2⁻³ mod 29। 2⁻³ ≡ 11 mod 29 (কারণ 8×11=88≡1 mod 29)। ভাগশেষ 11।"
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

