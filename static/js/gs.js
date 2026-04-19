const gkQuestions = [
    {
        question: "আলো কী ধরনের শক্তি?",
        options: ["যান্ত্রিক শক্তি", "তড়িৎচৌম্বকীয় শক্তি", "শব্দ শক্তি", "রাসায়নিক শক্তি"],
        correctAnswer: 1
    },
    {
        question: "নিচের কোনটি সপ্রভ বস্তু?",
        options: ["চাঁদ", "কাঁচ", "জ্বলন্ত মোমবাতি", "বই"],
        correctAnswer: 2
    },
    {
        question: "নিচের কোনটি অপ্রভ বস্তু?",
        options: ["সূর্য", "বিদ্যুৎবাহী বাল্ব", "কাঠের টেবিল", "জোনাকি পোকা"],
        correctAnswer: 2
    },
    {
        question: "আলোর প্রতিফলনের প্রথম সূত্র অনুযায়ী আপতিত রশ্মি, প্রতিফলিত রশ্মি এবং অভিলম্ব কোথায় থাকে?",
        options: ["ভিন্ন তলে", "একই তলে", "লম্বভাবে", "সমান্তরালে"],
        correctAnswer: 1
    },
    {
        question: "সমতল দর্পণে আলোর কী ধরনের প্রতিফলন ঘটে?",
        options: ["অনিয়মিত প্রতিফলন", "বিচ্ছুরিত প্রতিফলন", "নিয়মিত প্রতিফলন", "প্রতিসরণ"],
        correctAnswer: 2
    },
    {
        question: "ছায়া তৈরির প্রধান কারণ কী?",
        options: ["আলোর বক্রপথে চলা", "আলোর সরলরেখায় চলা", "আলোর প্রতিফলন", "আলোর প্রতিসরণ"],
        correctAnswer: 1
    },
    {
        question: "ছায়ার গাঢ় অংশকে কী বলা হয়?",
        options: ["উপছায়া", "প্রতিচ্ছবি", "ছায়া (Umbra)", "বিচ্ছুরণ"],
        correctAnswer: 2
    },
    {
        question: "উপছায়া (Penumbra) কোথায় গঠিত হয়?",
        options: ["ছায়ার মাঝখানে", "ছায়ার চারপাশে", "দর্পণের ভেতরে", "আলোর উৎসের ভেতরে"],
        correctAnswer: 1
    },
    {
        question: "সূর্যগ্রহণের সময় পৃথিবীর ওপর চাঁদের কী পড়ে?",
        options: ["আলো", "ছায়া বা উপছায়া", "প্রতিচ্ছবি", "প্রতিসরণ"],
        correctAnswer: 1
    },
    {
        question: "অমসৃণ তলে আলোর প্রতিফলনকে কী বলে?",
        options: ["নিয়মিত প্রতিফলন", "অনিয়মিত বা বিচ্ছুরিত প্রতিফলন", "প্রতিসরণ", "পূর্ণ প্রতিফলন"],
        correctAnswer: 1
    },
    {
        question: "আলোর প্রতিফলনের দ্বিতীয় সূত্র অনুযায়ী কোনটি সমান?",
        options: ["আপতন কোণ ও প্রতিফলন কোণ", "আপতন কোণ ও বিচ্যুতি কোণ", "অভিলম্ব ও প্রতিফলন কোণ", "প্রতিফলন কোণ ও প্রিজম কোণ"],
        correctAnswer: 0
    },
    {
        question: "নিচের কোনটি স্বচ্ছ মাধ্যম?",
        options: ["কাঁচ", "কাঠ", "ইট", "লোহার পাত"],
        correctAnswer: 0
    },
    {
        question: "নিচের কোনটি অস্বচ্ছ মাধ্যম?",
        options: ["বায়ু", "জল", "বই", "পরিষ্কার কাঁচ"],
        correctAnswer: 2
    },
    {
        question: "আলোক উৎস যদি বিন্দু হয়, তবে কোনটির সৃষ্টি হবে না?",
        options: ["ছায়া", "উপছায়া", "আলোর পথে বাধা", "প্রতিফলন"],
        correctAnswer: 1
    },
    {
        question: "সমতল দর্পণে গঠিত প্রতিবিম্ব কেমন হয়?",
        options: ["সদবিম্ব", "অসদবিম্ব", "উল্টানো", "খর্বাকৃতি"],
        correctAnswer: 1
    },
    {
        question: "আপতিত রশ্মি ও অভিলম্বের মধ্যবর্তী কোণকে কী বলে?",
        options: ["প্রতিফলন কোণ", "আপতন কোণ", "বিচ্যুতি কোণ", "সমকোণ"],
        correctAnswer: 1
    },
    {
        question: "চাঁদের নিজস্ব আলো আছে কি?",
        options: ["হ্যাঁ", "না", "মাঝেমধ্যে থাকে", "গ্রহণের সময় থাকে"],
        correctAnswer: 1
    },
    {
        question: "আলোর সরলরৈখিক প্রচারের একটি প্রমাণ হলো—",
        options: ["প্রতিসরণ", "ছায়া সৃষ্টি", "প্রতিফলন", "বিচ্ছুরণ"],
        correctAnswer: 1
    },
    {
        question: "নিয়মিত প্রতিফলনের ফলে প্রতিফলিত রশ্মিগুলো কেমন থাকে?",
        options: ["সমান্তরাল", "ছড়িয়ে পড়ে", "বক্রপথে চলে", "স্থির হয়ে যায়"],
        correctAnswer: 0
    },
    {
        question: "আলোর বেগের মান কত (প্রায়)?",
        options: ["৩ লক্ষ কিমি/সেকেন্ড", "৩০০ কিমি/সেকেন্ড", "৩০০০ কিমি/সেকেন্ড", "৩ কোটি কিমি/সেকেন্ড"],
        correctAnswer: 0
    },
    {
        question: "প্রতিফলন তলে আপতিত রশ্মি ও প্রতিফলিত রশ্মির মধ্যবর্তী কোণ যদি ৬০ ডিগ্রি হয়, তবে আপতন কোণ কত?",
        options: ["৬০ ডিগ্রি", "৩০ ডিগ্রি", "১৫ ডিগ্রি", "৯০ ডিগ্রি"],
        correctAnswer: 1
    },
    {
        question: "কোন বস্তু আমাদের চোখে আলো পাঠায় বলে আমরা তা দেখি?",
        options: ["কেবল সপ্রভ", "সপ্রভ ও অপ্রভ উভয়ই", "কেবল অপ্রভ", "কোনটিই নয়"],
        correctAnswer: 1
    },
    {
        question: "সূর্যগ্রহণের সময় কীসের ছায়া পৃথিবীর ওপর পড়ে?",
        options: ["সূর্যের", "পৃথিবীর", "চাঁদের", "গ্রহের"],
        correctAnswer: 2
    },
    {
        question: "বিস্তৃত আলোর উৎস ব্যবহার করলে কী সৃষ্টি হয়?",
        options: ["শুধু ছায়া", "শুধু উপছায়া", "ছায়া ও উপছায়া উভয়ই", "কোনটিই নয়"],
        correctAnswer: 2
    },
    {
        question: "আলোর প্রতিফলন কোনো তলে না ঘটলে—",
        options: ["আমরা বস্তু দেখতে পেতাম না", "বস্তু উজ্জ্বল দেখাত", "ছায়া তৈরি হতো", "কোনো পরিবর্তন হতো না"],
        correctAnswer: 0
    },
    {
        question: "আলোর প্রতিসরণ ঘটে কখন?",
        options: ["আলো প্রতিফলিত হলে", "আলো এক স্বচ্ছ মাধ্যম থেকে অন্য স্বচ্ছ মাধ্যমে প্রবেশ করলে", "আলো সরলরেখায় চললে", "ছায়া তৈরি হলে"],
        correctAnswer: 1
    },
    {
        question: "নিয়মিত প্রতিফলনের জন্য পৃষ্ঠটি কেমন হতে হবে?",
        options: ["অমসৃণ", "মসৃণ", "ঘষা কাঁচের মতো", "অস্বচ্ছ"],
        correctAnswer: 1
    },
    {
        question: "আলোর উৎস থেকে আলো আসতে কত সময় নেয়?",
        options: ["তাৎক্ষণিকভাবে", "১ মিনিট", "অনেকক্ষণ", "১০ সেকেন্ড"],
        correctAnswer: 0
    },
    {
        question: "ছায়ার দৈর্ঘ্য নির্ভর করে কীসের ওপর?",
        options: ["আলোর উৎসের অবস্থানের ওপর", "বস্তুর ওজনের ওপর", "রঙের ওপর", "তাপমাত্রার ওপর"],
        correctAnswer: 0
    },
    {
        question: "দর্পণে আমাদের ডান হাত বাম হাত মনে হয়, এটি আলোর কীসের কারণে ঘটে?",
        options: ["পার্শ্বীয় পরিবর্তন", "প্রতিসরণ", "বিচ্ছুরণ", "সদবিম্ব"],
        correctAnswer: 0
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








