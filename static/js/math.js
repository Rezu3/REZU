 const gkQuestions = [
    // অদ্ভুত প্রকৃতি ও ভূগোল (Nature & Geography)
    {
        question: "কোন হ্রদের জল গোলাপি রঙের হয়?",
        options: ["লেক হিলিয়ার (অস্ট্রেলিয়া)", "লেক ভিক্টোরিয়া", "লেক বৈকাল", "লেক সুপিরিয়র"],
        correctAnswer: 0
    },
    {
        question: "বিশ্বের কোন দেশে কোনো নদী নেই?",
        options: ["কাতার", "সৌদি আরব", "কুয়েত", "ওমান"],
        correctAnswer: 1
    },
    {
        question: "কোন দ্বীপে মানুষের চেয়ে পুতুলের সংখ্যা বেশি?",
        options: ["বালি দ্বীপ", "পুতুল দ্বীপ (মেক্সিকো)", "ফিজি", "জাভা"],
        correctAnswer: 1
    },
    {
        question: "রক্তের মতো লাল রঙের ঝরনা (Blood Falls) কোথায় অবস্থিত?",
        options: ["আইসল্যান্ড", "আন্টার্কটিকা", "গ্রিনল্যান্ড", "নরওয়ে"],
        correctAnswer: 1
    },
    {
        question: "বিশ্বের বৃহত্তম মরুভূমি কোনটি?",
        options: ["সাহারা", "গোবি", "আন্টার্কটিকা (শীতল মরুভূমি)", "থর"],
        correctAnswer: 2
    },
    {
        question: "কোন দেশের ওপর দিয়ে বিষুবরেখা ও মকরক্রান্তি রেখা উভয়ই গেছে?",
        options: ["ব্রাজিল", "ভারত", "অস্ট্রেলিয়া", "আর্জেন্টিনা"],
        correctAnswer: 0
    },
    {
        question: "কোন সাগরে মানুষ ডুবে যায় না (ভেসে থাকে)?",
        options: ["লোহিত সাগর", "মৃত সাগর (Dead Sea)", "আরব সাগর", "কাস্পিয়ান সাগর"],
        correctAnswer: 1
    },
    {
        question: "কোন দেশে অর্ধেক দিন আর অর্ধেক রাত থাকে?",
        options: ["রাশিয়া", "কানাডা", "নরওয়ে", "ফিনল্যান্ড"],
        correctAnswer: 2
    },
    {
        question: "বিশ্বের ছাদ (Roof of the World) কাকে বলা হয়?",
        options: ["হিমালয়", "পামির মালভূমি", "আন্দিজ", "আল্পস"],
        correctAnswer: 1
    },
    {
        question: "কোন মহাসাগরের জল সবচেয়ে বেশি লবণাক্ত?",
        options: ["প্রশান্ত মহাসাগর", "ভারত মহাসাগর", "আটলান্টিক মহাসাগর", "উত্তর মহাসাগর"],
        correctAnswer: 2
    },
    {
        question: "কোন আগ্নেয়গিরিকে 'ভূমধ্যসাগরের আলোকস্তম্ভ' বলা হয়?",
        options: ["মাউন্ট এटना", "ভিসুভিয়াস", "স্ট্রম্বোলি", "ক্রাকাতোয়া"],
        correctAnswer: 2
    },
    {
        question: "বিশ্বের বৃহত্তম বদ্বীপ (Delta) কোনটি?",
        options: ["নীল নদ বদ্বীপ", "সুন্দরবন বদ্বীপ", "মিসিসিপি বদ্বীপ", "অ্যামাজন বদ্বীপ"],
        correctAnswer: 1
    },
    {
        question: "কোন শহরকে 'নিশুতি সূর্যের দেশ' বলা হয়?",
        options: ["হ্যামারফেস্ট (নরওয়ে)", "টোকিও", "লন্ডন", "হেলসিংকি"],
        correctAnswer: 0
    },
    {
        question: "কোন মহাদেশে কোনো সক্রিয় আগ্নেয়গিরি নেই?",
        options: ["এশিয়া", "আফ্রিকা", "অস্ট্রেলিয়া", "ইউরোপ"],
        correctAnswer: 2
    },
    {
        question: "পৃথিবীর গভীরতম স্থান 'মারিয়ানা ট্রেঞ্চ' কোন মহাসাগরে?",
        options: ["আটলান্টিক", "প্রশান্ত মহাসাগর", "ভারত মহাসাগর", "দক্ষিণ মহাসাগর"],
        correctAnswer: 1
    },
    {
        question: "কোন দেশকে 'হাজার হ্রদের দেশ' বলা হয়?",
        options: ["ফিনল্যান্ড", "সুইডেন", "কানাডা", "স্কটল্যান্ড"],
        correctAnswer: 0
    },
    {
        question: "সাদা হাতির দেশ বলা হয় কোনটিকে?",
        options: ["ভারত", "মায়ানমার", "থাইল্যান্ড", "শ্রীলঙ্কা"],
        correctAnswer: 2
    },
    {
        question: "পৃথিবীর কোন দেশে সবচেয়ে বেশি দ্বীপ আছে?",
        options: ["ইন্দোনেশিয়া", "ফিলিপাইন", "সুইডেন", "জাপান"],
        correctAnswer: 2
    },
    {
        question: "পৃথিবীর শীতলতম জনবসতিপূর্ণ স্থান কোনটি?",
        options: ["ভস্তক", "ওমিয়াকন (রাশিয়া)", "গ্রিনল্যান্ড", "আলাস্কা"],
        correctAnswer: 1
    },
    {
        question: "কোন নদী দুবার বিষুবরেখাকে অতিক্রম করেছে?",
        options: ["অ্যামাজন", "কঙ্গো নদী", "নীল নদ", "গঙ্গা"],
        correctAnswer: 1
    },
    {
        question: "কোন দেশকে 'বজ্রপাতের দেশ' বলা হয়?",
        options: ["ভুটান", "নেপাল", "জাপান", "চীন"],
        correctAnswer: 0
    },
    {
        question: "কোন সাগরের কোনো উপকূল (Shoreline) নেই?",
        options: ["কালো সাগর", "সারগাসো সাগর", "বাল্টিক সাগর", "ভূমধ্যসাগর"],
        correctAnswer: 1
    },
    {
        question: "বিশ্বের বৃহত্তম প্রবাল প্রাচীর 'গ্রেট ব্যারিয়ার রিফ' কোথায়?",
        options: ["ব্রাজিল", "অস্ট্রেলিয়া", "ইন্দোনেশিয়া", "মালদ্বীপ"],
        correctAnswer: 1
    },
    {
        question: "কোন পর্বতমালা এশিয়া ও ইউরোপকে আলাদা করেছে?",
        options: ["হিমালয়", "আল্পস", "ইউরাল পর্বতমালা", "রকি"],
        correctAnswer: 2
    },
    {
        question: "পৃথিবীর বৃহত্তম মিষ্টি জলের হ্রদ কোনটি?",
        options: ["লেক বৈকাল", "লেক সুপিরিয়র", "কাস্পিয়ান সাগর", "ভিক্টোরিয়া হ্রদ"],
        correctAnswer: 1
    },
    {
        question: "কোন শহরকে 'সপ্ত পাহাড়ের শহর' বলা হয়?",
        options: ["প্যারিস", "রোম", "লন্ডন", "এথেন্স"],
        correctAnswer: 1
    },
    {
        question: "বিস্ময়কর 'পামুক্কালে' বা তুলার দুর্গ কোথায় অবস্থিত?",
        options: ["মিশর", "তুরস্ক", "ইরান", "গ্রিস"],
        correctAnswer: 1
    },
    {
        question: "কোন দেশে একই সাথে সূর্যোদয় এবং সূর্যাস্ত দেখা যায়?",
        options: ["রাশিয়া", "আমেরিকা", "নরওয়ে", "জাপান"],
        correctAnswer: 0
    },
    {
        question: "কোন বনকে 'পৃথিবীর ফুসফুস' বলা হয়?",
        options: ["সুন্দরবন", "তৈগা বন", "অ্যামাজন রেইনফরেস্ট", "কঙ্গো বেসিন"],
        correctAnswer: 2
    },
    {
        question: "পৃথিবীর উচ্চতম জলপ্রপাত কোনটি?",
        options: ["নায়াগ্রা", "ভিক্টোরিয়া ফলস", "অ্যাঞ্জেল ফলস", "যোগ জলপ্রপাত"],
        correctAnswer: 2
    },
    {
        question: "কোন শহরকে 'উড়ন্ত মাছের দেশ' বলা হয়?",
        options: ["বার্বাডোজ", "জ্যামাইকা", "মালদ্বীপ", "হাওয়াই"],
        correctAnswer: 0
    },
    {
        question: "কোন মহাসাগরে 'বারমুডা ট্রায়াঙ্গেল' অবস্থিত?",
        options: ["প্রশান্ত মহাসাগর", "আটলান্টিক মহাসাগর", "ভারত মহাসাগর", "আর্কটিক সাগর"],
        correctAnswer: 1
    },
    {
        question: "পৃথিবীর দীর্ঘতম পর্বতশ্রেণী কোনটি?",
        options: ["হিমালয়", "আন্দিজ", "রকি", "আল্টাই"],
        correctAnswer: 1
    },
    {
        question: "কোন মালভূমিকে 'পৃথিবীর ছাদ' বলা হয়?",
        options: ["তিব্বত মালভূমি", "পামির মালভূমি", "ডেকান মালভূমি", "কলোরাডো মালভূমি"],
        correctAnswer: 1
    },
    {
        question: "পৃথিবীর কোন দেশে কোনো মশা নেই?",
        options: ["আইসল্যান্ড", "গ্রিনল্যান্ড", "সুইজারল্যান্ড", "নিউজিল্যান্ড"],
        correctAnswer: 0
    },
    {
        question: "কোন দেশের ওপর দিয়ে কর্কটক্রান্তি রেখা গেছে?",
        options: ["ভারত", "চীন", "মিশর", "উপরের সবকটি"],
        correctAnswer: 3
    },
    {
        question: "বিশ্বের বৃহত্তম লবণাক্ত জলের হ্রদ কোনটি?",
        options: ["লেক বৈকাল", "লেক সুপিরিয়র", "কাস্পিয়ান সাগর", "মৃত সাগর"],
        correctAnswer: 2
    },
    {
        question: "কোন দেশকে 'সূর্যোদয়ের দেশ' বলা হয়?",
        options: ["নরওয়ে", "জাপান", "অস্ট্রেলিয়া", "চীন"],
        correctAnswer: 1
    },
    {
        question: "ভলগা নদী কোন সাগরে গিয়ে পড়েছে?",
        options: ["লোহিত সাগর", "কালো সাগর", "কাস্পিয়ান সাগর", "আরব সাগর"],
        correctAnswer: 2
    },
    {
        question: "কোন আগ্নেয়গিরিটিকে 'শান্ত আগ্নেয়গিরি' বলা হয়?",
        options: ["ফুজিয়ামা", "ভিসুভিয়াস", "স্ট্রম্বোলি", "ক্রাকাতোয়া"],
        correctAnswer: 0
    },
    {
        question: "বিশ্বের দীর্ঘতম নদী কোনটি?",
        options: ["অ্যামাজন", "নীল নদ", "মিসিসিপি", "ইয়াংতজে"],
        correctAnswer: 1
    },
    {
        question: "পৃথিবীর কোন স্থানকে 'নিষিদ্ধ শহর' বলা হয়?",
        options: ["লাসা (তিব্বত)", "বেইজিং", "মক্কা", "ভ্যাটিকান সিটি"],
        correctAnswer: 0
    },
    {
        question: "পৃথিবীর কোন মহাদেশ সবচেয়ে শুষ্ক?",
        options: ["আফ্রিকা", "অস্ট্রেলিয়া", "আন্টার্কটিকা", "দক্ষিণ আমেরিকা"],
        correctAnswer: 2
    },
    {
        question: "কোন গ্রহে সবচেয়ে বেশি বলয় (Ring) দেখা যায়?",
        options: ["বৃহস্পতি", "শনি", "ইউরেনাস", "নেপচুন"],
        correctAnswer: 1
    },
    {
        question: "কোন বায়ুপ্রবাহকে 'তুষার ভক্ষক' বলা হয়?",
        options: ["লু", "চিনুক", "মৌসুমি বায়ু", "ফন"],
        correctAnswer: 1
    },
    {
        question: "কোন হ্রদকে 'মুক্তোর দ্বীপ' বলা হয়?",
        options: ["বাহরাইন", "মালদ্বীপ", "মাদাগাস্কার", "কিউবা"],
        correctAnswer: 0
    },
    {
        question: "কোন জলপ্রপাতকে 'ধোঁয়াশা জলপ্রপাত' বলা হয়?",
        options: ["নায়াগ্রা", "ভিক্টোরিয়া ফলস", "অ্যাঞ্জেল ফলস", "ধুঁয়াধার"],
        correctAnswer: 1
    },
    {
        question: "পৃথিবীর ক্ষুদ্রতম মহাসাগর কোনটি?",
        options: ["আর্কটিক (উত্তর) মহাসাগর", "দক্ষিণ মহাসাগর", "ভারত মহাসাগর", "প্রশান্ত মহাসাগর"],
        correctAnswer: 0
    },
    {
        question: "কোন দ্বীপকে 'অগ্নদ্বীপ' বলা হয়?",
        options: ["আইসল্যান্ড", "জাপান", "হাওয়াই", "জাভা"],
        correctAnswer: 0
    },
    {
        question: "পৃথিবীর কোন জায়গায় ৬ মাস দিন আর ৬ মাস রাত থাকে?",
        options: ["বিষুবরেখা", "উত্তর ও দক্ষিণ মেরু", "কর্কটক্রান্তি রেখা", "মকরক্রান্তি রেখা"],
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







