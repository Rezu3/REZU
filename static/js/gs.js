const gkQuestions = [
    // ভৌত পরিবেশ (বল ও চাপ, আলো, তাপ)
    {
        question: "SI পদ্ধতিতে বলের একক কী?",
        options: ["প্যাসকাল", "নিউটন", "জুল", "ওয়াট"],
        correctAnswer: 1
    },
    {
        question: "স্থির তড়িৎ বল পরিমাপের সূত্রটি কে আবিষ্কার করেন?",
        options: ["নিউটন", "প্যাসকাল", "কুলম্ব", "আর্কিমিডিস"],
        correctAnswer: 2
    },
    {
        question: "বায়ুমণ্ডলীয় চাপ মাপার যন্ত্রের নাম কী?",
        options: ["ব্যারোমিটার", "থার্মোমিটার", "ল্যাকটোমিটার", "অ্যানিমোমিটার"],
        correctAnswer: 0
    },
    {
        question: "নিচের কোনটি তড়িতের সুপরিবাহী?",
        options: ["কাঠ", "প্লাস্টিক", "তামা", "কাঁচ"],
        correctAnswer: 2
    },
    {
        question: "আলোর প্রতিসরণের সময় আপতন কোণ ৯০° হলে প্রতিসরণ কোণকে কী বলে?",
        options: ["প্রতিফলন কোণ", "বিচ্যুতি কোণ", "সংকট কোণ", "সরল কোণ"],
        correctAnswer: 2
    },
    {
        question: "বস্তুর উষ্ণতা বাড়লে অণুগুলোর গতিবেগ-",
        options: ["কমে", "বাড়ে", "একই থাকে", "শূন্য হয়"],
        correctAnswer: 1
    },
    {
        question: "লোহার ওপর দস্তার প্রলেপ দেওয়াকে কী বলে?",
        options: ["অক্সিডেশন", "গ্যালভানাইজেশন", "ইলেক্ট্রোপ্লেটিং", "ভলকানাইজেশন"],
        correctAnswer: 1
    },
    {
        question: "আর্কিমিডিসের নীতি নিচের কোনটির ক্ষেত্রে প্রযোজ্য?",
        options: ["কঠিন", "গ্যাস", "তরল ও গ্যাস", "শূন্যস্থান"],
        correctAnswer: 2
    },
    {
        question: "এক ক্যালোরি সমান কত জুল?",
        options: ["৪.১৮", "৩.২", "৯.৮", "১.৫"],
        correctAnswer: 0
    },
    {
        question: "সমতল দর্পণে গঠিত প্রতিবিম্ব সবসময় কী হয়?",
        options: ["সদ", "অসদ ও সমশীর্ষ", "উল্টো", "ছোট"],
        correctAnswer: 1
    },

    // মৌল, যৌগ ও রাসায়নিক বিক্রিয়া
    {
        question: "পরমাণুর নিউক্লিয়াসে কী কী থাকে?",
        options: ["প্রোটন ও ইলেকট্রন", "প্রোটন ও নিউট্রন", "শুধু ইলেকট্রন", "নিউট্রন ও ইলেকট্রন"],
        correctAnswer: 1
    },
    {
        question: "অক্সিজেন গ্যাস প্রস্তুতিতে অনুঘটক হিসেবে কী ব্যবহৃত হয়?",
        options: ["MnO2", "NaCl", "CO2", "H2O"],
        correctAnswer: 0
    },
    {
        question: "লোহার মরিচা ধরা কী ধরনের বিক্রিয়া?",
        options: ["জারণ", "বিজারণ", "প্রতিস্থাপন", "বিয়োজন"],
        correctAnswer: 0
    },
    {
        question: "সবচেয়ে হালকা মৌল কোনটি?",
        options: ["হিলিয়াম", "অক্সিজেন", "হাইড্রোজেন", "নাইট্রোজেন"],
        correctAnswer: 2
    },
    {
        question: "কার্বনের একটি কঠিন রূপভেদ হলো-",
        options: ["কয়লা", "গ্রাফাইট", "পেট্রোল", "মিথেন"],
        correctAnswer: 1
    },
    {
        question: "মিথেন গ্যাসের সংকেত কী?",
        options: ["CO2", "NH3", "CH4", "C2H6"],
        correctAnswer: 2
    },
    {
        question: "কোন গ্যাসটি পচা ডিমের মতো গন্ধযুক্ত?",
        options: ["H2S", "NH3", "SO2", "Cl2"],
        correctAnswer: 0
    },
    {
        question: "একটি প্রাকৃতিক পলিমারের উদাহরণ হলো-",
        options: ["নাইলন", "সেলুলোজ", "পিভিসি", "পলিথিন"],
        correctAnswer: 1
    },
    {
        question: "হাইড্রোজেন গ্যাস নীল শিখায় জ্বলে কী উৎপন্ন করে?",
        options: ["ধোঁয়া", "কার্বন", "জলীয় বাষ্প", "অ্যাসিড"],
        correctAnswer: 2
    },
    {
        question: "নিচের কোনটি ধাতুকল্প?",
        options: ["সোনা", "লোহা", "আর্সেনিক", "পারদ"],
        correctAnswer: 2
    },

    // জীবদেহের গঠন ও শারীরবৃত্তীয় প্রক্রিয়া
    {
        question: "কোষের মস্তিষ্ক কাকে বলা হয়?",
        options: ["মাইটোকন্ড্রিয়া", "রাইবোজোম", "নিউক্লিয়াস", "লাইসোজোম"],
        correctAnswer: 2
    },
    {
        question: "কাকে কোষের শক্তিঘর বলা হয়?",
        options: ["গলগি বডি", "মাইটোকন্ড্রিয়া", "প্লাস্টিড", "ভ্যাকুওল"],
        correctAnswer: 1
    },
    {
        question: "উদ্ভিদ কোষে থাকে কিন্তু প্রাণী কোষে থাকে না-",
        options: ["নিউক্লিয়াস", "সাইটোপ্লাজম", "কোষপ্রাচীর", "কোষপর্দা"],
        correctAnswer: 2
    },
    {
        question: "রক্তের লাল বর্ণের জন্য দায়ী কোনটি?",
        options: ["হিমোগ্লোবিন", "ক্লোরোফিল", "হিমোসায়ানিন", "রজন"],
        correctAnswer: 0
    },
    {
        question: "ইনসুলিন হরমোন কোন গ্রন্থি থেকে নিঃসৃত হয়?",
        options: ["থাইরয়েড", "পিটুইটারি", "অগ্ন্যাশয়", "অ্যাড্রিনাল"],
        correctAnswer: 2
    },
    {
        question: "সবচেয়ে ছোট কোষ কোনটি?",
        options: ["উটপাখির ডিম", "মাইকোপ্লাজমা", "স্নায়ুকোষ", "রক্তকোষ"],
        correctAnswer: 1
    },
    {
        question: "ডিএনএ (DNA) কোথায় থাকে?",
        options: ["নিউক্লিয়াস", "কোষপর্দা", "লাইসোজোম", "সেন্ট্রোজোম"],
        correctAnswer: 0
    },
    {
        question: "কোন অঙ্গাণু প্রোটিন সংশ্লেষে সাহায্য করে?",
        options: ["মাইটোকন্ড্রিয়া", "রাইবোজোম", "লাইসোজোম", "ভ্যাকুওল"],
        correctAnswer: 1
    },
    {
        question: "কোন হরমোনকে আপাতকালীন হরমোন বলা হয়?",
        options: ["থাইরক্সিন", "অ্যাড্রিনালিন", "ইনসুলিন", "ইস্ট্রোজেন"],
        correctAnswer: 1
    },
    {
        question: "মাস্টার গ্ল্যান্ড বা প্রভু গ্রন্থি কাকে বলা হয়?",
        options: ["পিটুইটারি", "থাইরয়েড", "যকৃৎ", "লালাগ্রন্থি"],
        correctAnswer: 0
    },

    // অন্তক্ষরা গ্রন্থি ও বয়ঃসন্ধি
    {
        question: "গয়টার রোগ কোন মৌলের অভাবে হয়?",
        options: ["লোহা", "ক্যালসিয়াম", "আয়োডিন", "ম্যাগনেসিয়াম"],
        correctAnswer: 2
    },
    {
        question: "রক্তে শর্করার মাত্রা নিয়ন্ত্রণ করে কোন হরমোন?",
        options: ["গ্লুকাগন", "ইনসুলিন", "থাইরক্সিন", "টেস্টোস্টেরন"],
        correctAnswer: 1
    },
    {
        question: "ছেলেদের গৌণ যৌন বৈশিষ্ট্যের জন্য দায়ী হরমোন কোনটি?",
        options: ["ইস্ট্রোজেন", "প্রোজেস্টেরন", "টেস্টোস্টেরন", "রিল্যাক্সিন"],
        correctAnswer: 2
    },
    {
        question: "বয়ঃসন্ধিকালের সাধারণ সময়সীমা কত?",
        options: ["৫-১০ বছর", "১০-১৯ বছর", "২০-৩০ বছর", "৪০-৫০ বছর"],
        correctAnswer: 1
    },
    {
        question: "থাইরক্সিন হরমোন কোথা থেকে নিঃসৃত হয়?",
        options: ["অগ্ন্যাশয়", "থাইরয়েড গ্রন্থি", "বৃক্ক", "মস্তিষ্ক"],
        correctAnswer: 1
    },

    // অণুজীবের জগত ও পরিবেশ
    {
        question: "পেনিসিলিন কে আবিষ্কার করেন?",
        options: ["লুই পাস্তুর", "আলেকজান্ডার ফ্লেমিং", "এডওয়ার্ড জেনার", "রবার্ট হুক"],
        correctAnswer: 1
    },
    {
        question: "দই তৈরিতে কোন ব্যাকটেরিয়া সাহায্য করে?",
        options: ["ল্যাকটোব্যাসিলাস", "রাইজোবিয়াম", "ই-কোলাই", "ভাইব্রো কলেরি"],
        correctAnswer: 0
    },
    {
        question: "নিচের কোনটি একটি ভাইরাসঘটিত রোগ?",
        options: ["কলেরা", "টাইফয়েড", "ইনফ্লুয়েঞ্জা", "যক্ষ্মা"],
        correctAnswer: 2
    },
    {
        question: "ম্যালেরিয়া রোগের বাহক কে?",
        options: ["স্ত্রী অ্যানোফিলিস মশা", "স্ত্রী কিউলেক্স মশা", "এডিস মশা", "মাছি"],
        correctAnswer: 0
    },
    {
        question: "বসন্ত রোগের টিকা কে আবিষ্কার করেন?",
        options: ["রবার্ট কোচ", "এডওয়ার্ড জেনার", "লুই পাস্তুর", "সেলম্যান ওয়াকসম্যান"],
        correctAnswer: 1
    },

    // উদ্ভিদ ও প্রাণী সম্পদ
    {
        question: "ধানের একটি উচ্চফলনশীল জাত হলো-",
        options: ["জয়া", "কল্যাণ সোনা", "রতন", "সোনালী"],
        correctAnswer: 0
    },
    {
        question: "মৌমাছি পালনকে কী বলা হয়?",
        options: ["পিসি কালচার", "এপি কালচার", "সেরি কালচার", "হর্টিকালচার"],
        correctAnswer: 1
    },
    {
        question: "একটি রবি শস্যের উদাহরণ হলো-",
        options: ["ধান", "ভুট্টা", "গম", "পাট"],
        correctAnswer: 2
    },
    {
        question: "জৈব সার হিসেবে ব্যবহৃত একটি নীল-সবুজ শৈবাল হলো-",
        options: ["অ্যানাবিনা", "স্পাইরোগাইরা", "ভলভক্স", "ইউলোথ্রিক্স"],
        correctAnswer: 0
    },
    {
        question: "শীতকালে কোনো প্রাণীর দীর্ঘ নিদ্রাকে কী বলে?",
        options: ["হাইপোক্সিয়া", "হাইবারনেশন", "অ্যাডাপ্টেশন", "সুইমিং"],
        correctAnswer: 1
    },

    // পরিবেশের সংকট ও সংরক্ষণ
    {
        question: "বিশ্ব পরিবেশ দিবস কবে পালিত হয়?",
        options: ["৫ই জুন", "৭ই এপ্রিল", "২২শে মার্চ", "১লা ডিসেম্বর"],
        correctAnswer: 0
    },
    {
        question: "চিপকো আন্দোলন কিসের সাথে যুক্ত?",
        options: ["জল সংরক্ষণ", "গাছ বাঁচানো", "মাটি সংরক্ষণ", "বায়ু দূষণ রোধ"],
        correctAnswer: 1
    },
    {
        question: "একটি বিপন্ন প্রাণীর উদাহরণ হলো-",
        options: ["গরু", "ছাগল", "একশৃঙ্গ গন্ডার", "কুকুর"],
        correctAnswer: 2
    },
    {
        question: "সুন্দরবন কীসের জন্য বিখ্যাত?",
        options: ["সিংহ", "রয়্যাল বেঙ্গল টাইগার", "হাতি", "গন্ডার"],
        correctAnswer: 1
    },
    {
        question: "জৈব বৈচিত্র্য বা Biodiversity শব্দটি প্রথম কে ব্যবহার করেন?",
        options: ["ডারউইন", "ওয়াল্টার রোজেন", "ল্যামার্ক", "অ্যারিস্টটল"],
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





