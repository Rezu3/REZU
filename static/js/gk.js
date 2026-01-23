const gkQuestions = [
    // ইতিহাস
    {
        question: "ভারতীয় জাতীয় কংগ্রেসের প্রতিষ্ঠা কত সালে হয়?",
        options: ["১৮৮৫", "১৮৯২", "১৯০৫", "১৯১১"],
        correctAnswer: 0
    },
    {
        question: "'দিল্লী চলো' আন্দোলন কে শুরু করেন?",
        options: ["মহাত্মা গান্ধী", "সুভাষচন্দ্র বসু", "ভগৎ সিং", "বাল গঙ্গাধর তিলক"],
        correctAnswer: 1
    },
    {
        question: "প্রাচীন ভারতের কোন সম্রাট 'দ্য গ্রেট' নামে পরিচিত?",
        options: ["চন্দ্রগুপ্ত মৌর্য", "অশোক", "সমুদ্রগুপ্ত", "হর্ষবর্ধন"],
        correctAnswer: 1
    },
    {
        question: "ভারতের প্রথম প্রধানমন্ত্রী কে ছিলেন?",
        options: ["জওহরলাল নেহেরু", "লাল বাহাদুর শাস্ত্রী", "ইন্দিরা গান্ধী", "মোরারজী দেসাই"],
        correctAnswer: 0
    },
    {
        question: "মহেঞ্জোদাড়ো সভ্যতা কোন নদীর তীরে অবস্থিত?",
        options: ["গঙ্গা", "সিন্ধু", "যমুনা", "ব্রহ্মপুত্র"],
        correctAnswer: 1
    },

    // ভূগোল
    {
        question: "ভারতের সর্বোচ্চ পর্বতশৃঙ্গ কোনটি?",
        options: ["কাঞ্চনজঙ্ঘা", "এভারেস্ট", "K2", "নন্দাদেবী"],
        correctAnswer: 0
    },
    {
        question: "ভারতের দীর্ঘতম নদী কোনটি?",
        options: ["গঙ্গা", "যমুনা", "গোদাবরী", "ব্রহ্মপুত্র"],
        correctAnswer: 0
    },
    {
        question: "কোন শহরকে 'সাত পাহাড়ের শহর' বলা হয়?",
        options: ["শিলং", "চেন্নাই", "ভুবনেশ্বর", "রাঁচি"],
        correctAnswer: 2
    },
    {
        question: "ভারতের বৃহত্তম রাজ্য কোনটি (আয়তনে)?",
        options: ["মহারাষ্ট্র", "উত্তরপ্রদেশ", "রাজস্থান", "মধ্যপ্রদেশ"],
        correctAnswer: 2
    },
    {
        question: "তাজমহল কোন নদীর তীরে অবস্থিত?",
        options: ["গঙ্গা", "যমুনা", "গোদাবরী", "কৃষ্ণা"],
        correctAnswer: 1
    },

    // বিজ্ঞান
    {
        question: "পৃথিবীর কেন্দ্রে কোন ধাতু পাওয়া যায়?",
        options: ["লোহা", "সোনা", "রূপা", "তামা"],
        correctAnswer: 0
    },
    {
        question: "মানুষের শরীরে কয়টি ক্রোমোজোম থাকে?",
        options: ["২৩", "৪৬", "৪৮", "৫০"],
        correctAnswer: 1
    },
    {
        question: "কোন গ্রহকে 'লাল গ্রহ' বলা হয়?",
        options: ["বুধ", "শুক্র", "মঙ্গল", "বৃহস্পতি"],
        correctAnswer: 2
    },
    {
        question: "সমুদ্রের পানির লবণাক্ততার প্রধান কারণ কী?",
        options: ["সোডিয়াম ক্লোরাইড", "ম্যাগনেসিয়াম সালফেট", "ক্যালসিয়াম কার্বনেট", "পটাসিয়াম নাইট্রেট"],
        correctAnswer: 0
    },
    {
        question: "বৈদ্যুতিক বাল্বের আবিষ্কারক কে?",
        options: ["থমাস আলভা এডিসন", "নিকোলা টেসলা", "আলেকজান্ডার গ্রাহাম বেল", "মাইকেল ফ্যারাডে"],
        correctAnswer: 0
    },

    // রাজনীতি
    {
        question: "ভারতের সংবিধান কত তারিখে কার্যকর হয়?",
        options: ["২৬ জানুয়ারি ১৯৫০", "১৫ আগস্ট ১৯৪৭", "২৬ নভেম্বর ১৯৪৯", "১ জানুয়ারি ১৯৫০"],
        correctAnswer: 0
    },
    {
        question: "লোকসভার সদস্য সংখ্যা কত?",
        options: ["৫৪২", "৫৪৫", "৫৫২", "৫৬০"],
        correctAnswer: 0
    },
    {
        question: "ভারতের রাষ্ট্রপতি কার দ্বারা নির্বাচিত হন?",
        options: ["সরাসরি জনগণ", "সংসদ সদস্য", "রাজ্য বিধানসভা", "নির্বাচকমণ্ডলী"],
        correctAnswer: 3
    },
    {
        question: "কোন নীতিকে ভারতের 'রাষ্ট্রীয় মৌলিক কর্তব্য' বলা হয়?",
        options: ["ধর্মনিরপেক্ষতা", "সমাজতন্ত্র", "গণতন্ত্র", "জাতীয়তাবাদ"],
        correctAnswer: 0
    },
    {
        question: "সুপ্রিম কোর্টের প্রধান বিচারপতির নিয়োগ কে করেন?",
        options: ["প্রধানমন্ত্রী", "রাষ্ট্রপতি", "সংসদ", "মন্ত্রিসভা"],
        correctAnswer: 1
    },

    // খেলাধুলা
    {
        question: "অলিম্পিক গেমসের প্রতিষ্ঠাতা কে?",
        options: ["ব্যারন পিয়েরে দ্য কুবার্তাঁ", "জুয়ান আন্তোনিও সামারঞ্চ", "থমাস বাচ", "ড. উইলিয়াম জি. মর্গান"],
        correctAnswer: 0
    },
    {
        question: "ক্রিকেট বিশ্বকাপ প্রথম কত সালে অনুষ্ঠিত হয়?",
        options: ["১৯৭৫", "১৯৭৯", "১৯৮৩", "১৯৮৭"],
        correctAnswer: 0
    },
    {
        question: "ফিফা বিশ্বকাপ প্রথম কত সালে অনুষ্ঠিত হয়?",
        options: ["১৯৩০", "১৯৩৪", "১৯৩৮", "১৯৫০"],
        correctAnswer: 0
    },
    {
        question: "টেনিস গ্র্যান্ড স্লাম টুর্নামেন্ট কয়টি?",
        options: ["৩", "৪", "৫", "৬"],
        correctAnswer: 1
    },
    {
        question: "অলিম্পিক পতাকায় কয়টি রিং আছে?",
        options: ["৪", "৫", "৬", "৭"],
        correctAnswer: 1
    },

    // শিল্প ও সংস্কৃতি
    {
        question: "বাংলার নবজাগরণের 'পিতা' কে বলা হয়?",
        options: ["রাজা রামমোহন রায়", "ঈশ্বরচন্দ্র বিদ্যাসাগর", "বঙ্কিমচন্দ্র চট্টোপাধ্যায়", "স্বামী বিবেকানন্দ"],
        correctAnswer: 0
    },
    {
        question: "রবীন্দ্রনাথ ঠাকুরের জন্মদিন কবে?",
        options: ["৭ মে", "১৫ আগস্ট", "২৫ ডিসেম্বর", "৯ মে"],
        correctAnswer: 0
    },
    {
        question: "ভারতের জাতীয় গান কী?",
        options: ["জন গণ মন", "বন্দে মাতরম", "সারেগামা", "ওয়েন্ডে ভারতম"],
        correctAnswer: 1
    },
    {
        question: "কোন নৃত্যকে 'স্বর্গীয় নৃত্য' বলা হয়?",
        options: ["ভরতনাট্যম", "কথক", "কুচিপুড়ি", "মণিপুরী"],
        correctAnswer: 3
    },
    {
        question: "তাজমহল কে নির্মাণ করেন?",
        options: ["আকবর", "জাহাঙ্গীর", "শাহজাহান", "আওরঙ্গজেব"],
        correctAnswer: 2
    },

    // অর্থনীতি
    {
        question: "ভারতের কেন্দ্রীয় ব্যাংকের নাম কী?",
        options: ["SBI", "PNB", "RBI", "ICICI"],
        correctAnswer: 2
    },
    {
        question: "GST কত সালে চালু হয়?",
        options: ["২০১৫", "২০১৬", "২০১৭", "২০১৮"],
        correctAnswer: 2
    },
    {
        question: "ভারতের মুদ্রার নাম কী?",
        options: ["রুপি", "টাকা", "পয়সা", "ডলার"],
        correctAnswer: 0
    },
    {
        question: "বিশ্বব্যাংকের সদর দপ্তর কোথায়?",
        options: ["নিউইয়র্ক", "জেনেভা", "ওয়াশিংটন ডি.সি.", "লন্ডন"],
        correctAnswer: 2
    },
    {
        question: "IMF এর পূর্ণরূপ কী?",
        options: ["International Monetary Fund", "International Money Fund", "Indian Monetary Fund", "International Market Fund"],
        correctAnswer: 0
    },

    // প্রযুক্তি
    {
        question: "কম্পিউটারের আবিষ্কারক কে?",
        options: ["চার্লস ব্যাবেজ", "স্টিভ জবস", "বিল গেটস", "অ্যালান টুরিং"],
        correctAnswer: 0
    },
    {
        question: "WWW এর আবিষ্কারক কে?",
        options: ["টিম বার্নার্স-লি", "মার্ক জুকারবার্গ", "ল্যারি পেজ", "স্টিভ ওজনিয়াক"],
        correctAnswer: 0
    },
    {
        question: "প্রথম সার্চ ইঞ্জিনের নাম কী?",
        options: ["Google", "Yahoo", "Archie", "Bing"],
        correctAnswer: 2
    },
    {
        question: "Android অপারেটিং সিস্টেম কোন কোম্পানি তৈরি করে?",
        options: ["Google", "Apple", "Microsoft", "Samsung"],
        correctAnswer: 0
    },
    {
        question: "প্রথম প্রোগ্রামিং ভাষার নাম কী?",
        options: ["FORTRAN", "COBOL", "C", "Ada Lovelace"],
        correctAnswer: 0
    },

    // আন্তর্জাতিক
    {
        question: "জাতিসংঘের সদর দপ্তর কোথায়?",
        options: ["জেনেভা", "নিউইয়র্ক", "হেগ", "প্যারিস"],
        correctAnswer: 1
    },
    {
        question: "WTO এর পূর্ণরূপ কী?",
        options: ["World Trade Organization", "World Technology Organization", "World Tourism Organization", "World Transport Organization"],
        correctAnswer: 0
    },
    {
        question: "এশিয়ার বৃহত্তম দেশ কোনটি?",
        options: ["চীন", "ভারত", "রাশিয়া", "কাজাখস্তান"],
        correctAnswer: 2
    },
    {
        question: "ইউরোপীয় ইউনিয়নের মুদ্রার নাম কী?",
        options: ["পাউন্ড", "ইউরো", "ফ্রাঙ্ক", "ডলার"],
        correctAnswer: 1
    },
    {
        question: "G7 দেশের সংখ্যা কত?",
        options: ["৫", "৬", "৭", "৮"],
        correctAnswer: 2
    },

    // সাহিত্য
    {
        question: "মাইকেল মধুসূদন দত্তের মহাকাব্য কোনটি?",
        options: ["মেঘনাদবধ কাব্য", "বিষাদসিন্ধু", "কপালকুণ্ডলা", "আনন্দমঠ"],
        correctAnswer: 0
    },
    {
        question: "বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের প্রথম উপন্যাস কোনটি?",
        options: ["কপালকুণ্ডলা", "দুর্গেশনন্দিনী", "আনন্দমঠ", "দেবী চৌধুরাণী"],
        correctAnswer: 1
    },
    {
        question: "কোনটি রবীন্দ্রনাথ ঠাকুরের নাটক?",
        options: ["গোরা", "ঘরে বাইরে", "রাজা", "যোগাযোগ"],
        correctAnswer: 2
    },
    {
        question: "শরৎচন্দ্র চট্টোপাধ্যায়ের প্রকৃত নাম কী?",
        options: ["শরৎচন্দ্র গুপ্ত", "শরৎচন্দ্র বসু", "শরৎচন্দ্র চট্টোপাধ্যায়", "শরৎচন্দ্র রায়"],
        correctAnswer: 2
    },
    {
        question: "'পথের পাঁচালী' উপন্যাসের রচয়িতা কে?",
        options: ["বিভূতিভূষণ বন্দ্যোপাধ্যায়", "তারাশঙ্কর বন্দ্যোপাধ্যায়", "মানিক বন্দ্যোপাধ্যায়", "বাণী বসু"],
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


