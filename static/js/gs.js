const gkQuestions = [
    // অদ্ভুত প্রাণী ও তাদের বৈশিষ্ট্য
    {
        question: "কোন প্রাণীর ১১টি মস্তিষ্ক আছে?",
        options: ["অক্টোপাস", "জোঁক", "সিল্কওয়ার্ম (রেশম মথ)", "স্টারফিশ"],
        correctAnswer: 2
    },
    {
        question: "কোন প্রাণীর ৯টি মস্তিষ্ক এবং ৩টি হৃদপিণ্ড আছে?",
        options: ["হাঙর", "অক্টোপাস", "তিমি", "স্কুইড"],
        correctAnswer: 1
    },
    {
        question: "কোন প্রাণীর রক্ত নীল রঙের হয়?",
        options: ["অক্টোপাস", "কাঁকড়া", "চিংড়ি", "উপরের সবকটি"],
        correctAnswer: 3
    },
    {
        question: "কোন প্রাণী জিভ দিয়ে কান পরিষ্কার করতে পারে?",
        options: ["জিরাফ", "উট", "হাতি", "ক্যাঙ্গারু"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী চোখ খুলে ঘুমায়?",
        options: ["সাপ", "মাছ", "ব্যাঙ", "কুমির"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর ৩২টি মস্তিষ্ক আছে?",
        options: ["জোঁক", "কেঁচো", "শামুক", "মাকড়সা"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী দাঁড়িয়ে ঘুমাতে পারে?",
        options: ["গরু", "ঘোড়া", "গাধা", "উট"],
        correctAnswer: 1
    },
    {
        question: "কোন পাখি উড়তে পারে না?",
        options: ["পেঙ্গুইন", "উটপাখি", "কিউয়ি", "উপরের সবকটি"],
        correctAnswer: 3
    },
    {
        question: "কোন প্রাণী জল পান না করে সারাজীবন বেঁচে থাকতে পারে?",
        options: ["ক্যাঙ্গারু র‍্যাট", "উট", "মরুভূমির সাপ", "গিনিপিগ"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর ৪টি পাকস্থলী আছে?",
        options: ["হাতি", "উট", "গরু", "জিরাফ"],
        correctAnswer: 2
    },
    {
        question: "কোন প্রাণী তার শরীরের ওজনের ৫০ গুণ বেশি ওজন বহন করতে পারে?",
        options: ["পিঁপড়ে", "মৌমাছি", "গুবরে পোকা", "ফড়িং"],
        correctAnswer: 0
    },
    {
        question: "কোন মাছ ডাঙ্গায় হাঁটতে পারে?",
        options: ["কই মাছ", "মাগুর মাছ", "ট্রি ফ্রগ", "ক্যাট ফিশ"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর ঘাম গোলাপী রঙের হয়?",
        options: ["জলহস্তী", "গণ্ডার", "শুয়োর", "ভালুক"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর হৃদপিণ্ড তার মাথায় থাকে?",
        options: ["চিংড়ি", "কাঁকড়া", "অক্টোপাস", "শামুক"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর আয়ু সবচেয়ে বেশি?",
        options: ["হাতি", "কচ্ছপ", "নীল তিমি", "মানুষ"],
        correctAnswer: 1
    },
    {
        question: "কোন প্রাণী তিন বছর পর্যন্ত ঘুমাতে পারে?",
        options: ["শামুক", "সাপ", "ভালুক", "কচ্ছপ"],
        correctAnswer: 0
    },
    {
        question: "কোন পাখির ডিম সবচেয়ে বড়?",
        options: ["বাজপাখি", "উটপাখি", "ইগল", "ময়ূর"],
        correctAnswer: 1
    },
    {
        question: "কোন প্রাণীর দাঁত পেটে থাকে?",
        options: ["গলদা চিংড়ি", "কেঁচো", "পঙ্গপাল", "মাকড়সা"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী জিহ্বা বের করতে পারে না?",
        options: ["সাপ", "কুমির", "টিকটিকি", "ব্যাঙ"],
        correctAnswer: 1
    },
    {
        question: "কোন প্রাণীর দুধের রঙ কালো হয়?",
        options: ["কালো গণ্ডার", "বুনো মোষ", "নীল গাই", "হিপো"],
        correctAnswer: 0
    },
    {
        question: "কোন মাছ পিছন দিকে সাঁতার কাটতে পারে?",
        options: ["হাঙর", "জেল ফিশ", "ইিল মাছ", "ঘোড়া মাছ"],
        correctAnswer: 2
    },
    {
        question: "কোন প্রাণী মুখ দিয়ে মলত্যাগ করে?",
        options: ["বাদুড়", "পেঁচা", "ফড়িং", "মাকড়সা"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর পায়ে কান থাকে?",
        options: ["ঝিঁঝিঁ পোকা", "পিঁপড়ে", "প্রজাপতি", "মশা"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর তিনটি চোখ আছে?",
        options: ["টুয়াতারা", "ব্যাঙ", "টিকটিকি", "কাঁকড়া বিছে"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী এক চোখ খোলা রেখে ঘুমায়?",
        options: ["ডলফিন", "হাঙর", "তিমি", "সিল"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী বাতাস খেয়ে বেঁচে থাকে?",
        options: ["অ্যামিবা", "গিরগিটি", "সালামাণ্ডার", "প্রজাপতি"],
        correctAnswer: 1
    },
    {
        question: "কোন প্রাণীর লিঙ্গ পরিবর্তন করা সম্ভব?",
        options: ["ক্লাউন ফিশ", "ঝিনুক", "স্টারফিশ", "উপরের সবকটি"],
        correctAnswer: 3
    },
    {
        question: "কোন প্রাণী কখনো ঘুমায় না?",
        options: ["বুলফ্রগ", "পিঁপড়ে", "মহা হাঙর", "মশা"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী জিভ দিয়ে স্বাদ গ্রহণ না করে পা দিয়ে করে?",
        options: ["মৌমাছি", "প্রজাপতি", "মশা", "ফড়িং"],
        correctAnswer: 1
    },
    {
        question: "কোন প্রাণীর জিহ্বা তার শরীরের চেয়েও বড়?",
        options: ["গিরগিটি", "ব্যাঙ", "সাপ", "কুকুর"],
        correctAnswer: 0
    },
    {
        question: "পৃথিবীর ক্ষুদ্রতম পাখির নাম কী?",
        options: ["হামিং বার্ড", "টুনটুনি", "চড়ুই", "বাবুই"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী এক বছর না খেয়ে বেঁচে থাকতে পারে?",
        options: ["বিচ্ছু", "সাপ", "উট", "কচ্ছপ"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর শরীরে কোনো হাড় নেই?",
        options: ["হাঙর", "জেলফিশ", "অক্টোপাস", "উপরের সবকটি"],
        correctAnswer: 3
    },
    {
        question: "কোন পাখি উড়ন্ত অবস্থায় ডিম পাড়ে?",
        options: ["হোমা পাখি", "ইগল", "শকুন", "আলবাট্রস"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর কামড়ে মানুষ হাসতে হাসতে মারা যায়?",
        options: ["কালো বিধবা মাকড়সা", "ব্লু রিংড অক্টোপাস", "আফ্রিকান স্লিপিং ফ্লাই", "এক ধরণের মাকড়সা (ইতালি)"],
        correctAnswer: 3
    },
    {
        question: "কোন মাছ সবচেয়ে বেশি শক্তিশালী বিদ্যুৎ উৎপন্ন করে?",
        options: ["ইলেকট্রিক ইল", "ক্যাট ফিশ", "হাঙর", "রে মাছ"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী উল্টো দিকে হাঁটতে পারে না?",
        options: ["ক্যাঙ্গারু", "হাতি", "উট", "জিরাফ"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী শব্দ শুনতে পায় না?",
        options: ["পিঁপড়ে", "মাকড়সা", "সাপ", "মাছ"],
        correctAnswer: 2
    },
    {
        question: "কোন প্রাণী চোখ দিয়ে শোনে?",
        options: ["সাপ", "টিকটিকি", "ব্যাঙ", "মাছ"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর মল চারকোণা (Cube) আকৃতির হয়?",
        options: ["ওমব্যাট", "ক্যাঙ্গারু", "কোয়ালা", "পান্ডা"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী মাথা ছাড়াও ৯ দিন বেঁচে থাকতে পারে?",
        options: ["তেলাপোকা", "পিঁপড়ে", "মাকড়সা", "ঝিঁঝিঁ পোকা"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর শরীরে সবচেয়ে বেশি রক্ত থাকে?",
        options: ["হাতি", "নীল তিমি", "জিরাফ", "গণ্ডার"],
        correctAnswer: 1
    },
    {
        question: "কোন প্রাণীর কোনো আওয়াজ বা শব্দ নেই?",
        options: ["জিরাফ", "উট", "গাধা", "হরিণ"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী দাঁড়িয়ে জন্ম দেয়?",
        options: ["জিরাফ", "হাতি", "ঘোড়া", "উপরের সবকটি"],
        correctAnswer: 3
    },
    {
        question: "কোন সামুদ্রিক প্রাণী কখনও বৃদ্ধ হয়ে মরে না (অমর)?",
        options: ["ইমমর্টাল জেলিফিশ", "স্টারফিশ", "অক্টোপাস", "সমুদ্র ঘোড়া"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণীর ৪টি নাক থাকে?",
        options: ["শামুক", "জোঁক", "স্লাগ", "কেঁচো"],
        correctAnswer: 2
    },
    {
        question: "কোন প্রাণী মানুষের গলার আওয়াজ নকল করতে পারে?",
        options: ["টিয়া", "কাক", "লাইয়ারবার্ড", "ময়না"],
        correctAnswer: 2
    },
    {
        question: "কোন পাখির ডানা নেই?",
        options: ["কিউয়ি", "উটপাখি", "পেঙ্গুইন", "এমু"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী শরীরের ছিদ্র দিয়ে জল পান করে?",
        options: ["ব্যাঙ", "সাপ", "টিকটিকি", "কেঁচো"],
        correctAnswer: 0
    },
    {
        question: "কোন প্রাণী আয়নায় নিজেকে চিনতে পারে?",
        options: ["ডলফিন", "শিম্পাঞ্জি", "হাতি", "উপরের সবকটি"],
        correctAnswer: 3
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






