const gkQuestions = [
    // সাম্প্রতিক নিয়োগ ও ব্যক্তিত্ব (Appointments)
    {
        question: "ভারতের বর্তমান রাষ্ট্রপতির নাম কী?",
        options: ["দ্রৌপদী মুর্মু", "জগদীপ ধনখর", "রামনাথ কোবিন্দ", "যশবন্ত সিনহা"],
        correctAnswer: 0
    },
    {
        question: "ভারতের বর্তমান উপরাষ্ট্রপতি কে?",
        options: ["অমিত শাহ", "জগদীপ ধনখর", "ভেঙ্কাইয়া নাইডু", "রাজনাথ সিং"],
        correctAnswer: 1
    },
    {
        question: "ভারতের বর্তমান চিফ অফ ডিফেন্স স্টাফ (CDS) কে?",
        options: ["বিপিন রাওয়াত", "মনোজ পান্ডে", "অনিল চৌহান", "আর. হরি কুমার"],
        correctAnswer: 2
    },
    {
        question: "ISRO-র বর্তমান চেয়ারম্যান কে?",
        options: ["কে. শিবন", "এস. সোমনাথ", "এ.এস. কিরণ কুমার", "জি. মাধবন নায়ার"],
        correctAnswer: 1
    },
    {
        question: "ভারতের বর্তমান প্রধান নির্বাচন কমিশনার কে?",
        options: ["রাজীব কুমার", "অনুপ চন্দ্র পান্ডে", "সুনীল আরোরা", "অরুণ গোয়েল"],
        correctAnswer: 0
    },

    // খেলাধুলা (Sports Current Affairs)
    {
        question: "২০২৪ সালের টি-টোয়েন্টি বিশ্বকাপ জয়ী দেশ কোনটি?",
        options: ["দক্ষিণ আফ্রিকা", "অস্ট্রেলিয়া", "ভারত", "ইংল্যান্ড"],
        correctAnswer: 2
    },
    {
        question: "২০২৪ প্যারিস অলিম্পিকে ভারত মোট কয়টি পদক জিতেছে?",
        options: ["৫টি", "৬টি", "৭টি", "১০টি"],
        correctAnswer: 1
    },
    {
        question: "নীরাজ চোপড়া কোন খেলার সাথে যুক্ত?",
        options: ["কুস্তি", "বক্সিং", "জেভলিন থ্রো", "শুটিং"],
        correctAnswer: 2
    },
    {
        question: "২০২৩ সালের ওয়ানডে ক্রিকেট বিশ্বকাপ জয়ী দেশ কোনটি?",
        options: ["ভারত", "নিউজিল্যান্ড", "অস্ট্রেলিয়া", "পাকিস্তান"],
        correctAnswer: 2
    },
    {
        question: "২০২৬ সালের ফিফা (FIFA) বিশ্বকাপ কোথায় অনুষ্ঠিত হবে?",
        options: ["কাতার", "ব্রাজিল", "আমেরিকা, কানাডা ও মেক্সিকো", "ফ্রান্স"],
        correctAnswer: 2
    },

    // পুরস্কার ও সম্মান (Awards)
    {
        question: "২০২৪ সালে কাকে মরণোত্তর 'ভারতরত্ন' সম্মানে ভূষিত করা হয়েছে?",
        options: ["লালকৃষ্ণ আদভানি", "কর্পূরী ঠাকুর", "এম.এস. স্বামীনাথন", "উপরের সবাই"],
        correctAnswer: 3
    },
    {
        question: "২০২৩ সালের দাদাসাহেব ফালকে পুরস্কার কে পেয়েছেন?",
        options: ["ওয়াহিদা রেহমান", "আশা পারেখ", "অমিতাভ বচ্চন", "রজনীকান্ত"],
        correctAnswer: 0
    },
    {
        question: "২০২৪ সালের মিস ইউনিভার্স কে হয়েছেন?",
        options: ["শেনিস প্যালাসিওস", "ভিক্টোরিয়া কেজের থেইলভিগ", "হরনাজ সান্ধু", "অদিতি স্বামী"],
        correctAnswer: 1
    },

    // যোজনা ও ইনডেক্স (Schemes & Index)
    {
        question: "পশ্চিমবঙ্গের 'লক্ষ্মীর ভাণ্ডার' প্রকল্পে সাধারণ বিভাগের মহিলারা বর্তমানে মাসে কত টাকা পান?",
        options: ["৫০০ টাকা", "১০০০ টাকা", "১২০০ টাকা", "২০০০ টাকা"],
        correctAnswer: 1
    },
    {
        question: "বিশ্বের সবথেকে শক্তিশালী পাসপোর্টের তালিকায় (Henley Passport Index 2024) ভারতের স্থান কত?",
        options: ["৮০তম", "৮৫তম", "৯০তম", "৭৫তম"],
        correctAnswer: 0
    },

    // বিজ্ঞান ও প্রযুক্তি (Science & Tech)
    {
        question: "ভারতের চন্দ্রযান-৩ অভিযানের ল্যান্ডারটির নাম কী ছিল?",
        options: ["প্রজ্ঞান", "বিক্রম", "আকাশ", "ধ্রুব"],
        correctAnswer: 1
    },
    {
        question: "আদিত্য L-1 মিশন কোন মহাজাগতিক বস্তুকে নিয়ে গবেষণার জন্য পাঠানো হয়েছে?",
        options: ["চাঁদ", "মঙ্গল", "সূর্য", "শুক্র"],
        correctAnswer: 2
    },
    {
        question: "ভারতের প্রথম সৌর শহরের (Solar City) নাম কী?",
        options: ["সাঁচী", "ইন্দোর", "পুরী", "আমেদাবাদ"],
        correctAnswer: 0
    },

    // আরও গুরুত্বপূর্ণ বর্তমান ঘটনাবলী (Mixed Topics)
    { question: "জি-২০ (G20) ২০২৪ সম্মেলন কোন দেশে অনুষ্ঠিত হয়েছে?", options: ["ভারত", "ব্রাজিল", "দক্ষিণ আফ্রিকা", "ইন্দোনেশিয়া"], correctAnswer: 1 },
    { question: "ভারতের নতুন সংসদ ভবনের স্থপতির নাম কী?", options: ["বিমল প্যাটেল", "সতীশ গুজরাল", "রাজ রেওয়াল", "বি.ভি. দোশি"], correctAnswer: 0 },
    { question: "বিশ্বের দীর্ঘতম রেলওয়ে প্ল্যাটফর্ম কোনটি?", options: ["খড়গপুর", "গোরক্ষপুর", "শ্রী সিদ্ধারুধা স্বামীজি (হুবলি)", "মুম্বাই"], correctAnswer: 2 },
    { question: "বর্তমানে ভারতের সংবিধানে কতটি মৌলিক কর্তব্য আছে?", options: ["১০টি", "১১টি", "১২টি", "৯টি"], correctAnswer: 1 },
    { question: "২০২৪ সালের অস্কারে 'সেরা চলচ্চিত্র' কোনটি হয়েছে?", options: ["ওপেনহাইমার", "বার্বি", "প্যারাাসাইট", "সবই"], correctAnswer: 0 },
    { question: "ভারতের প্রথম থ্রি-ডি (3D) প্রিন্টেড পোস্ট অফিস কোথায় তৈরি হয়েছে?", options: ["কলকাতা", "মুম্বাই", "বেঙ্গালুরু", "হায়দ্রাবাদ"], correctAnswer: 2 },
    { question: "পশ্চিমবঙ্গের বর্তমান রাজ্যপাল কে?", options: ["সি.ভি. আনন্দ বোস", "জগদীপ ধনখর", "লা গণেশন", "কেশরী নাথ ত্রিপাঠী"], correctAnswer: 0 },
    { question: "নীতি আয়োগ (NITI Aayog)-এর বর্তমান CEO কে?", options: ["বি.ভি.আর সুব্রহ্মণ্যম", "পরমেশ্বরন আইয়ার", "অমিতাভ কান্ত", "সুমন বেরি"], correctAnswer: 0 },
    { question: "কোন শহরকে ভারতের প্রথম 'AI City' হিসেবে গড়ে তোলা হচ্ছে?", options: ["বেঙ্গালুরু", "লখনউ", "নয়ডা", "পুনে"], correctAnswer: 1 },
    { question: "২০২৪ সালের ইউরো কাপ জয়ী দেশ কোনটি?", options: ["ইংল্যান্ড", "স্পেন", "ফ্রান্স", "জার্মানি"], correctAnswer: 1 },
    { question: "ভারতের বর্তমান সলিসিটর জেনারেল কে?", options: ["তুষার মেহতা", "আর ভেঙ্কটরামানি", "মনোজ সোনি", "অমিত শাহ"], correctAnswer: 0 },
    { question: "সম্প্রতি কোন রাজ্যকে 'টাইগার স্টেট' ঘোষণা করা হয়েছে সর্বাধিক বাঘের জন্য?", options: ["পশ্চিমবঙ্গ", "কর্ণাটক", "মধ্যপ্রদেশ", "উত্তরাখণ্ড"], correctAnswer: 2 },
    { question: "দাদাসাহেব ফালকে আন্তর্জাতিক চলচ্চিত্র উৎসব ২০২৪-এ সেরা অভিনেতা কে হয়েছেন?", options: ["রণবীর কাপুর", "শাহরুখ খান", "সালমান খান", "ভিকি কৌশল"], correctAnswer: 1 },
    { question: "ভারতের প্রথম আন্ডারওয়াটার মেট্রো কোথায় চালু হয়েছে?", options: ["মুম্বাই", "কোচি", "কলকাতা", "চেন্নাই"], correctAnswer: 2 },
    { question: "২০২৪ সালের প্রজাতন্ত্র দিবসের প্রধান অতিথি কে ছিলেন?", options: ["ইমানুয়েল ম্যাক্রন", "জো বাইডেন", "ঋষি সুনাক", "আবদেল ফাত্তাহ আল সিসি"], correctAnswer: 0 },
    { question: "বর্তমানে ভারতের সুপ্রিম কোর্টের প্রধান বিচারপতি কে?", options: ["ডি ওয়াই চন্দ্রচূড়", "ইউ ইউ ললিত", "এন ভি রমনা", "সঞ্জীব খান্না (নিযুক্ত)"], correctAnswer: 3 },
    { question: "BRICS ২০২৩ সম্মেলন কোথায় অনুষ্ঠিত হয়েছিল?", options: ["চীন", "রাশিয়া", "দক্ষিণ আফ্রিকা", "ভারত"], correctAnswer: 2 },
    { question: "ভারতের বৃহত্তম টাইগার রিজার্ভ কোনটি হতে চলেছে?", options: ["নাগার্জুন সাগর", "দमोह টাইগার রিজার্ভ (নৌরাদেহি)", "সুন্দরবন", "করবেট"], correctAnswer: 1 },
    { question: "বিশ্বের উচ্চতম রেলওয়ে ব্রিজের নাম কী?", options: ["চিনাব ব্রিজ", "হাওড়া ব্রিজ", "পাম্বান ব্রিজ", "বগিবিল ব্রিজ"], correctAnswer: 0 },
    { question: "২০২৪ সালের গ্লোবাল হাঙ্গার ইনডেক্সে ভারতের স্থান কত?", options: ["১০১", "১০৫", "১১১", "১২৭"], correctAnswer: 2 },
    { question: "অযোধ্যার রাম মন্দিরের প্রধান স্থপতির নাম কী?", options: ["বিমল প্যাটেল", "চন্দ্রকান্ত সোমপুরা", "রতন টাটা", "অরুণ যোগীরাজ (মূর্তি)"], correctAnswer: 1 },
    { question: "২০২৪ সালে কতজনকে পদ্মবিভূষণ দেওয়া হয়েছে?", options: ["৪ জন", "৫ জন", "১০ জন", "১৭ জন"], correctAnswer: 1 },
    { question: "বর্তমানে ভারতের মোট কতটি রামসার সাইট (Ramsar Sites) আছে?", options: ["৭৫টি", "৮০টি", "৮৫টি", "৭০টি"], correctAnswer: 1 },
    { question: "প্রথম ভারতীয় মহিলা হিসেবে কে আইপিএল (IPL)-এ আম্পায়ারিং করেছেন?", options: ["জানি পোলসাক", "বৃন্দা রাঠি", "ক্লেয়ার পোলোস্যাক", "মিতালি রাজ"], correctAnswer: 1 },
    { question: "ইউনেস্কোর তালিকায় অন্তর্ভুক্ত ৪২তম বিশ্ব ঐতিহ্যবাহী স্থান (World Heritage Site) কোনটি?", options: ["শান্তিনিকেতন", "হয়সালা মন্দির", "ধোলাভিরা", "কাঞ্চনজঙ্ঘা"], correctAnswer: 1 },
    { question: "ভারতের বৃহত্তম হকি স্টেডিয়াম বিরসা মুন্ডা স্টেডিয়াম কোথায় অবস্থিত?", options: ["রাঁচি", "ভুবনেশ্বর", "রাউরকেল্লা", "জামশেদপুর"], correctAnswer: 2 },
    { question: "কোন দেশকে হারিয়ে ভারত এশিয়ান কাবাডি চ্যাম্পিয়নশিপ ২০২৩ জিতেছে?", options: ["ইরান", "পাকিস্তান", "দক্ষিণ কোরিয়া", "জাপান"], correctAnswer: 0 },
    { question: "২০২৪ সালের সাহিত্যে নোবেল পুরস্কার কে পেয়েছেন?", options: ["অ্যানি এরনাক্স", "হান কাং", "জন ফসে", "লুইস গ্লাক"], correctAnswer: 1 },
    { question: "বর্তমানে ভারতের রিজার্ভ ব্যাঙ্কের গভর্নর কে?", options: ["উর্জিত প্যাটেল", "শক্তিকান্ত দাস", "রঘুরাম রাজন", "নির্মলা সীতারামন"], correctAnswer: 1 },
    { question: "ভারতের প্রথম গগনযান মিশনের জন্য কজন মহাকাশচারীকে বেছে নেওয়া হয়েছে?", options: ["৩ জন", "৪ জন", "৫ জন", "২ জন"], correctAnswer: 1 },
    { question: "২০২৪ সালে জাতীয় ক্রীড়া দিবস কবে পালন করা হয়েছে?", options: ["২৯শে আগস্ট", "১৫ই আগস্ট", "১২ই জানুয়ারি", "২৬শে জানুয়ারি"], correctAnswer: 0 },
    { question: "বর্তমানে ভারতের বিদেশ মন্ত্রীর নাম কী?", options: ["অমিত শাহ", "এস. জয়শঙ্কর", "রাজনাথ সিং", "জে.পি. নাড্ডা"], correctAnswer: 1 }
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





