 const gkQuestions = [
    {
        question: "ভারতের দীর্ঘতম নদীর নাম কী?",
        options: ["ব্রহ্মপুত্র", "গঙ্গা", "সিন্ধু", "গোদাবরী"],
        correctAnswer: 1
    },
    {
        question: "গঙ্গা নদী কোথায় উৎপন্ন হয়েছে?",
        options: ["যমুনোত্রী হিমবাহ", "গঙ্গোত্রী হিমবাহের গোমুখ গুহা", "মানস সরোবর", " অমরকন্টক"],
        correctAnswer: 1
    },
    {
        question: "দক্ষিণ ভারতের দীর্ঘতম নদী কোনটি?",
        options: ["কৃষ্ণা", "কাবেরী", "গোদাবরী", "নর্মদা"],
        correctAnswer: 2
    },
    {
        question: "কোন নদীকে 'দক্ষিণের গঙ্গা' (Ganga of South) বলা হয়?",
        options: ["কাবেরী", "গোদাবরী", "মহানদী", "পেন্নার"],
        correctAnswer: 0 // পবিত্রতার নিরিখে কাবেরী, দৈর্ঘ্যের নিরিখে গোদাবরী (এখানে কাবেরী প্রচলিত উত্তর)
    },
    {
        question: "কোন নদী তিব্বতে 'সাংপো' (Tsangpo) নামে পরিচিত?",
        options: ["সিন্ধু", "ব্রহ্মপুত্র", "শতদ্রু", "তিস্তা"],
        correctAnswer: 1
    },
    {
        question: "ভারতের একমাত্র অন্তর্বাহিনী নদী কোনটি?",
        options: ["লুনি", "সবরমতী", "মাহি", "তাপ্তি"],
        correctAnswer: 0
    },
    {
        question: "নর্মদা নদী কোথা থেকে উৎপন্ন হয়েছে?",
        options: ["মহাবালেশ্বর", "ব্রহ্মগিরি", "অমরকন্টক শৃঙ্গ", "বেতুল"],
        correctAnswer: 2
    },
    {
        question: "সিন্ধু নদ কোথায় গিয়ে মিশেছে?",
        options: ["বঙ্গোপসাগর", "আরব সাগর", "ভারত মহাসাগর", "খাম্বাত উপসাগর"],
        correctAnswer: 1
    },
    {
        question: "কোন নদীকে 'বিহারের দুঃখ' বলা হয়?",
        options: ["দামোদর", "কোশি", "গণ্ডক", "সোন"],
        correctAnswer: 1
    },
    {
        question: "পশ্চিমবঙ্গের দীর্ঘতম নদী কোনটি?",
        options: ["দামোদর", "ভাগীরথী-হুগলি", "তিস্তা", "রূপনারায়ণ"],
        correctAnswer: 1
    },
    {
        question: "যমুনা নদীর তীরে নিচের কোন শহরটি অবস্থিত?",
        options: ["লখনউ", "কানপুর", "দিল্লি", "বারাণসী"],
        correctAnswer: 2
    },
    {
        question: "হীরাকুঁদ বাঁধ কোন নদীর ওপর অবস্থিত?",
        options: ["মহানদী", "গোদাবরী", "কৃষ্ণা", "নর্মদা"],
        correctAnswer: 0
    },
    {
        question: "কোন নদী বিন্ধ্য ও সাতপুরা পর্বতের মধ্য দিয়ে প্রবাহিত হয়েছে?",
        options: ["তাপ্তি", "নর্মদা", "মাহি", "লুনি"],
        correctAnswer: 1
    },
    {
        question: "অলকানন্দা ও ভাগীরথী নদী কোথায় মিলিত হয়েছে?",
        options: ["রুদ্রপ্রয়াগ", "কর্ণপ্রয়াগ", "দেবপ্রয়াগ", "বিষ্ণুপ্রয়াগ"],
        correctAnswer: 2
    },
    {
        question: "সুন্দরবন বদ্বীপ কোন দুটি নদীর মোহনায় অবস্থিত?",
        options: ["গঙ্গা ও যমুনা", "গঙ্গা ও ব্রহ্মপুত্র", "গঙ্গা ও মহানদী", "ব্রহ্মপুত্র ও সিন্ধু"],
        correctAnswer: 1
    },
    {
        question: "ভারতের দ্বিতীয় বৃহত্তম নদী অববাহিকা কোনটি?",
        options: ["গঙ্গা", "গোদাবরী", "কৃষ্ণা", "নর্মদা"],
        correctAnswer: 1
    },
    {
        question: "সর্দার সরোবর প্রকল্প কোন নদীর ওপর গড়ে উঠেছে?",
        options: ["নর্মদা", "তাপ্তি", "চম্বল", "সোন"],
        correctAnswer: 0
    },
    {
        question: "কোন নদীকে 'বাংলার দুঃখ' বলা হত?",
        options: ["অজয়", "ময়ূরাক্ষী", "দামোদর", "রূপনারায়ণ"],
        correctAnswer: 2
    },
    {
        question: "মাজুলি দ্বীপ (বিশ্বের বৃহত্তম নদী দ্বীপ) কোন নদীতে অবস্থিত?",
        options: ["গঙ্গা", "ব্রহ্মপুত্র", "গোদাবরী", "সিন্ধু"],
        correctAnswer: 1
    },
    {
        question: "শ্রীনগর শহরটি কোন নদীর তীরে অবস্থিত?",
        options: ["ঝিলাম", "চেনাব", "রবি", "বিয়াস"],
        correctAnswer: 0
    },
    {
        question: "কোন নদীটি কর্কটক্রান্তি রেখাকে দুবার অতিক্রম করেছে?",
        options: ["নর্মদা", "তাপ্তি", "মাহি", "সবরমতী"],
        correctAnswer: 2
    },
    {
        question: "যমুনা নদী কোথায় গঙ্গার সাথে মিলিত হয়েছে?",
        options: ["হরিদ্বার", "বারাণসী", "ইলাহাবাদ (প্রয়াগরাজ)", "পাটনা"],
        correctAnswer: 2
    },
    {
        question: "ধুঁয়াধার জলপ্রপাত কোন নদীর ওপর অবস্থিত?",
        options: ["তাপ্তি", "নর্মদা", "কৃষ্ণা", "গোদাবরী"],
        correctAnswer: 1
    },
    {
        question: "সিন্ধু নদের প্রধান উপনদী কোনটি?",
        options: ["ঝিলাম", "শতদ্রু", "চেনাব", "সিন্ধু"],
        correctAnswer: 2
    },
    {
        question: "কোন নদীটি পশ্চিমবাহিনী নদী?",
        options: ["মহানদী", "গোদাবরী", "তাপ্তি", "কাবেরী"],
        correctAnswer: 2
    },
    {
        question: "বক্সা ব্যাঘ্র প্রকল্প দিয়ে প্রবাহিত নদী কোনটি?",
        options: ["তিস্তা", "তোর্সা", "রায়ডাক", "সঙ্কোশ"],
        correctAnswer: 3
    },
    {
        question: "গোমতী নদীর তীরে কোন শহরটি অবস্থিত?",
        options: ["লখনউ", "আগ্রা", "মথুরা", "গয়া"],
        correctAnswer: 0
    },
    {
        question: "নাগার্জুন সাগর বাঁধ কোন নদীর ওপর নির্মিত?",
        options: ["কাবেরী", "কৃষ্ণা", "গোদাবরী", "তুঙ্গভদ্রা"],
        correctAnswer: 1
    },
    {
        question: "শিবসমুদ্রম জলপ্রপাত কোন নদীতে অবস্থিত?",
        options: ["শরাবতী", "কাবেরী", "নর্মদা", "কৃষ্ণা"],
        correctAnswer: 1
    },
    {
        question: "গঙ্গার প্রধান উপনদী কোনটি?",
        options: ["যমুনা", "গণ্ডক", "কোশি", "সোন"],
        correctAnswer: 0
    },
    {
        question: "কোন নদী তিব্বতের মানস সরোবর থেকে উৎপন্ন হয়নি?",
        options: ["সিন্ধু", "শতদ্রু", "ব্রহ্মপুত্র", "ঝিলাম"],
        correctAnswer: 3
    },
    {
        question: "অযোধ্যা কোন নদীর তীরে অবস্থিত?",
        options: ["গঙ্গা", "যমুনা", "সরযূ", "গণ্ডক"],
        correctAnswer: 2
    },
    {
        question: "ব্রহ্মপুত্র নদ অরুণাচল প্রদেশে কী নামে প্রবেশ করেছে?",
        options: ["দিহং", "লোহিত", "মানস", "ধানসিঁড়ি"],
        correctAnswer: 0
    },
    {
        question: "ভাঁকরা-নাঙ্গাল বাঁধ কোন নদীর ওপর অবস্থিত?",
        options: ["শতদ্রু", "বিয়াস", "ঝিলাম", "চেনাব"],
        correctAnswer: 0
    },
    {
        question: "লুনি নদী কোথায় গিয়ে শেষ হয়েছে?",
        options: ["আরব সাগর", "খাম্বাত উপসাগর", "কচ্ছের রণ", "সম্বর হ্রদ"],
        correctAnswer: 2
    },
    {
        question: "সবরমতী নদী কোন পর্বতমালা থেকে উৎপন্ন হয়েছে?",
        options: ["আরাবল্লী", "বিন্ধ্য", "সাতপুরা", "সহ্যাদ্রি"],
        correctAnswer: 0
    },
    {
        question: "সুরাট শহর কোন নদীর তীরে অবস্থিত?",
        options: ["নর্মদা", "তাপ্তি", "সবরমতী", "মাহি"],
        correctAnswer: 1
    },
    {
        question: "কোন নদীটি বঙ্গোপসাগরে পতিত হয়নি?",
        options: ["মহানদী", "কৃষ্ণা", "তাপ্তি", "গোদাবরী"],
        correctAnswer: 2
    },
    {
        question: "হুগলি নদী পশ্চিমবঙ্গের কোন জেলায় গঙ্গা থেকে বিচ্ছিন্ন হয়েছে?",
        options: ["মুর্শিদাবাদ", "নদিয়া", "মালদা", "হুগলি"],
        correctAnswer: 0
    },
    {
        question: "বিজয়ওয়াড়া শহরটি কোন নদীর তীরে অবস্থিত?",
        options: ["গোদাবরী", "কৃষ্ণা", "কাবেরী", "পেন্নার"],
        correctAnswer: 1
    },
    {
        question: "ভারতের উচ্চতম জলপ্রপাত 'কুঞ্চিকল' কোন রাজ্যে অবস্থিত?",
        options: ["কর্ণাটক", "তামিলনাড়ু", "কেরালা", "মহারাষ্ট্র"],
        correctAnswer: 0
    },
    {
        question: "উজ্জয়িনী শহরটি কোন নদীর তীরে অবস্থিত?",
        options: ["চম্বল", "শিপরা", "সোন", "কেন"],
        correctAnswer: 1
    },
    {
        question: "কোন নদীটি গ্রস্থ উপত্যকার মধ্য দিয়ে প্রবাহিত হয়েছে?",
        options: ["নর্মদা", "গোদাবরী", "মহানদী", "কৃষ্ণা"],
        correctAnswer: 0
    },
    {
        question: "ভারতের সবচেয়ে পবিত্র নদী কোনটি?",
        options: ["যমুনা", "সরস্বতী", "গঙ্গা", "কাবেরী"],
        correctAnswer: 2
    },
    {
        question: "মেত্তুর বাঁধ কোন নদীর ওপর নির্মিত?",
        options: ["কাবেরী", "কৃষ্ণা", "গোদাবরী", "মহানদী"],
        correctAnswer: 0
    },
    {
        question: "কোন নদীটি ব্রহ্মপুত্রের ডান তীরের উপনদী?",
        options: ["লোহিত", "বুড়ি দিহিং", "সুবনগিরি", "ধানসিঁড়ি"],
        correctAnswer: 2
    },
    {
        question: "গঙ্গার ডান তীরের প্রধান উপনদী কোনটি?",
        options: ["যমুনা", "কোশি", "রামগঙ্গা", "গোমতী"],
        correctAnswer: 0
    },
    {
        question: "ভারতে প্রবাহিত নদীর জলের পরিমাণের দিক থেকে কোন নদী বৃহত্তম?",
        options: ["গঙ্গা", "ব্রহ্মপুত্র", "সিন্ধু", "গোদাবরী"],
        correctAnswer: 1
    },
    {
        question: "কুতুব মিনার ও যমুনা নদীর দূরত্ব খুব কম কোন শহরে?",
        options: ["আগ্রা", "দিল্লি", "মথুরা", "ফিরোজাবাদ"],
        correctAnswer: 1
    },
    {
        question: "কোন নদীটি হিমালয় অতিক্রম করে ভারতে প্রবেশ করেছে?",
        options: ["শতদ্রু", "রবি", "ঝিলাম", "চেনাব"],
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









