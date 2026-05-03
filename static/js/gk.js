const gkQuestions = [
    {
        question: "1. পশ্চিমবঙ্গের প্রধান ফসল কী?",
        options: ["গম", "ধান", "ভুট্টা", "চা"],
        correctAnswer: 1
    },
    {
        question: "2. কৃষি কী?",
        options: ["মাছ ধরা", "গাছ লাগানো ও ফসল উৎপাদন", "বাড়ি বানানো", "পড়াশোনা"],
        correctAnswer: 1
    },
    {
        question: "3. পশ্চিমবঙ্গের একটি প্রধান নদী কোনটি?",
        options: ["গঙ্গা", "যমুনা", "নাইল", "আমাজন"],
        correctAnswer: 0
    },
    {
        question: "4. মাছ চাষকে কী বলা হয়?",
        options: ["কৃষি", "মৎস্য চাষ", "অরণ্য", "খনি"],
        correctAnswer: 1
    },
    {
        question: "5. সুন্দরবন কী জন্য বিখ্যাত?",
        options: ["বাঘ", "হাতি", "সিংহ", "ঘোড়া"],
        correctAnswer: 0
    },
    {
        question: "6. গাছ থেকে আমরা কী পাই?",
        options: ["কাঠ", "লোহা", "প্লাস্টিক", "কাচ"],
        correctAnswer: 0
    },
    {
        question: "7. সূর্য থেকে আমরা কী শক্তি পাই?",
        options: ["তাপ শক্তি", "শব্দ শক্তি", "রং শক্তি", "গন্ধ শক্তি"],
        correctAnswer: 0
    },
    {
        question: "8. শক্তি কী?",
        options: ["কাজ করার ক্ষমতা", "খেলার নাম", "গান", "কিছুই না"],
        correctAnswer: 0
    },
    {
        question: "9. তাপ কী?",
        options: ["ঠান্ডা", "উষ্ণতা", "পানি", "বাতাস"],
        correctAnswer: 1
    },
    {
        question: "10. আগুন থেকে আমরা কী পাই?",
        options: ["তাপ", "বরফ", "বৃষ্টি", "বাতাস"],
        correctAnswer: 0
    },
    {
        question: "11. উষ্ণতা কিসের সাথে সম্পর্কিত?",
        options: ["তাপ", "রং", "গন্ধ", "শব্দ"],
        correctAnswer: 0
    },
    {
        question: "12. সূর্য কী?",
        options: ["গ্রহ", "নক্ষত্র", "উপগ্রহ", "পাহাড়"],
        correctAnswer: 1
    },
    {
        question: "13. পৃথিবী কী?",
        options: ["নক্ষত্র", "গ্রহ", "উপগ্রহ", "সূর্য"],
        correctAnswer: 1
    },
    {
        question: "14. চাঁদ কী?",
        options: ["গ্রহ", "নক্ষত্র", "উপগ্রহ", "সূর্য"],
        correctAnswer: 2
    },
    {
        question: "15. আমরা কোথায় বাস করি?",
        options: ["চাঁদে", "পৃথিবীতে", "সূর্যে", "মঙ্গলে"],
        correctAnswer: 1
    },
    {
        question: "16. শক্তির একটি উৎস কী?",
        options: ["সূর্য", "পাথর", "বালি", "মাটি"],
        correctAnswer: 0
    },
    {
        question: "17. তাপ পেলে বস্তু কী হয়?",
        options: ["ঠান্ডা হয়", "গরম হয়", "ভেঙে যায়", "উড়ে যায়"],
        correctAnswer: 1
    },
    {
        question: "18. ঠান্ডা কাকে বলে?",
        options: ["কম তাপ", "বেশি তাপ", "আলো", "শব্দ"],
        correctAnswer: 0
    },
    {
        question: "19. মহাকাশ কী?",
        options: ["পৃথিবী", "আকাশের বাইরে স্থান", "জল", "মাটি"],
        correctAnswer: 1
    },
    {
        question: "20. সূর্যের চারপাশে কে ঘোরে?",
        options: ["চাঁদ", "পৃথিবী", "মানুষ", "গাছ"],
        correctAnswer: 1
    },
    {
        question: "21. বন থেকে কী পাই?",
        options: ["কাঠ", "মাছ", "লোহা", "পানি"],
        correctAnswer: 0
    },
    {
        question: "22. পশ্চিমবঙ্গে চা কোথায় বেশি হয়?",
        options: ["দার্জিলিং", "কলকাতা", "হাওড়া", "দুর্গাপুর"],
        correctAnswer: 0
    },
    {
        question: "23. মাছ কোথায় থাকে?",
        options: ["জলে", "আকাশে", "মাটিতে", "গাছে"],
        correctAnswer: 0
    },
    {
        question: "24. সূর্য কখন ওঠে?",
        options: ["রাতে", "সকালে", "দুপুরে", "সন্ধ্যায়"],
        correctAnswer: 1
    },
    {
        question: "25. রাত হলে কী দেখা যায়?",
        options: ["সূর্য", "তারা", "বৃষ্টি", "মেঘ"],
        correctAnswer: 1
    },

    // extra 25
    {
        question: "26. গাছ আমাদের কী দেয়?",
        options: ["অক্সিজেন", "ধোঁয়া", "ধুলা", "আগুন"],
        correctAnswer: 0
    },
    {
        question: "27. বাতাস কী?",
        options: ["গ্যাস", "তরল", "কঠিন", "আগুন"],
        correctAnswer: 0
    },
    {
        question: "28. পানি কী?",
        options: ["কঠিন", "তরল", "গ্যাস", "আগুন"],
        correctAnswer: 1
    },
    {
        question: "29. সূর্যের আলোকে কী বলে?",
        options: ["তাপ", "আলো শক্তি", "শব্দ", "গন্ধ"],
        correctAnswer: 1
    },
    {
        question: "30. শীতকালে কেমন লাগে?",
        options: ["গরম", "ঠান্ডা", "ভেজা", "শুকনো"],
        correctAnswer: 1
    },
    {
        question: "31. গ্রীষ্মকালে কেমন লাগে?",
        options: ["ঠান্ডা", "গরম", "বরফ", "বৃষ্টি"],
        correctAnswer: 1
    },
    {
        question: "32. আগুনের রং কী?",
        options: ["নীল", "লাল", "সবুজ", "কালো"],
        correctAnswer: 1
    },
    {
        question: "33. মহাকাশে কী থাকে?",
        options: ["গ্রহ", "গাছ", "মানুষ", "নদী"],
        correctAnswer: 0
    },
    {
        question: "34. পৃথিবী কী দিয়ে তৈরি?",
        options: ["মাটি", "পানি", "বায়ু", "সবগুলো"],
        correctAnswer: 3
    },
    {
        question: "35. চাঁদে কি বাতাস আছে?",
        options: ["আছে", "নেই", "অনেক", "কম"],
        correctAnswer: 1
    },
    {
        question: "36. সূর্য থেকে দূরে গেলে কেমন লাগে?",
        options: ["গরম", "ঠান্ডা", "ভেজা", "গন্ধ"],
        correctAnswer: 1
    },
    {
        question: "37. গাছ লাগানো কেন দরকার?",
        options: ["অক্সিজেনের জন্য", "খেলার জন্য", "ঘুমানোর জন্য", "কিছুই না"],
        correctAnswer: 0
    },
    {
        question: "38. বন ধ্বংস হলে কী হয়?",
        options: ["ক্ষতি", "লাভ", "কিছু না", "আলো"],
        correctAnswer: 0
    },
    {
        question: "39. মাছ কী খায়?",
        options: ["জলজ খাবার", "মাটি", "পাথর", "লোহা"],
        correctAnswer: 0
    },
    {
        question: "40. সূর্য কী দেয়?",
        options: ["আলো ও তাপ", "শব্দ", "গন্ধ", "বৃষ্টি"],
        correctAnswer: 0
    },
    {
        question: "41. গরম জিনিসে হাত দিলে কী হয়?",
        options: ["ঠান্ডা লাগে", "পুড়ে যায়", "ভিজে যায়", "কিছু না"],
        correctAnswer: 1
    },
    {
        question: "42. বরফ কী?",
        options: ["ঠান্ডা পানি", "গরম পানি", "গ্যাস", "আগুন"],
        correctAnswer: 0
    },
    {
        question: "43. পানি জমে কী হয়?",
        options: ["বরফ", "বাষ্প", "গ্যাস", "মাটি"],
        correctAnswer: 0
    },
    {
        question: "44. পানি গরম করলে কী হয়?",
        options: ["বরফ", "বাষ্প", "মাটি", "পাথর"],
        correctAnswer: 1
    },
    {
        question: "45. বৃষ্টি কোথা থেকে আসে?",
        options: ["মেঘ", "মাটি", "গাছ", "আগুন"],
        correctAnswer: 0
    },
    {
        question: "46. আকাশের রং কী?",
        options: ["নীল", "লাল", "সবুজ", "কালো"],
        correctAnswer: 0
    },
    {
        question: "47. রাতে আকাশে কী দেখা যায়?",
        options: ["তারা", "সূর্য", "গাছ", "পানি"],
        correctAnswer: 0
    },
    {
        question: "48. পৃথিবী ঘোরে কেন?",
        options: ["দিন-রাত হয়", "বৃষ্টি হয়", "গাছ জন্মায়", "কিছু না"],
        correctAnswer: 0
    },
    {
        question: "49. দিন কখন হয়?",
        options: ["সূর্য উঠলে", "সূর্য ডুবলে", "রাতে", "বৃষ্টিতে"],
        correctAnswer: 0
    },
    {
        question: "50. রাত কখন হয়?",
        options: ["সূর্য উঠলে", "সূর্য ডুবলে", "সকালে", "দুপুরে"],
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








