 const gkQuestions = [
    {
        question: "আলো কী ধরনের শক্তি?",
        options: ["যান্ত্রিক শক্তি", "তড়িৎচৌম্বকীয় শক্তি", "শব্দ শক্তি", "রাসায়নিক শক্তি"],
        correctAnswer: 1
    },
    {
        question: "নিচের কোনটি সপ্রভ বস্তু?",
        options: ["চাঁদ", "কাঁচ", "জ্বলন্ত মোমবাতি", "বই"],
        correctAnswer: 2
    },
    {
        question: "নিচের কোনটি অপ্রভ বস্তুর উদাহরণ?",
        options: ["সূর্য", "বাল্ব", "চাঁদ", "আগুন"],
        correctAnswer: 2
    },
    {
        question: "সমান্তরাল আলোক রশ্মি কেমন হয়?",
        options: ["এক বিন্দুতে মিলিত হয়", "একে অপরের থেকে দূরে সরে যায়", "সর্বদা সমান দূরত্ব বজায় রাখে", "বাঁকা পথে চলে"],
        correctAnswer: 2
    },
    {
        question: "অভিসারী আলোক রশ্মি কেমন হয়?",
        options: ["একটি বিন্দুতে মিলিত হয়", "বিভিন্ন বিন্দুতে ছড়িয়ে যায়", "সমান্তরালে চলে", "কোনো পথ পরিবর্তন করে না"],
        correctAnswer: 0
    },
    {
        question: "অপসারী আলোক রশ্মি কেমন হয়?",
        options: ["একটি বিন্দুতে মিলিত হয়", "একটি বিন্দু থেকে ছড়িয়ে পড়ে", "সমান্তরালে চলে", "স্থির থাকে"],
        correctAnswer: 1
    },
    {
        question: "প্রচ্ছায়া কী?",
        options: ["আলোর সম্পূর্ণ অনুপস্থিতি", "আংশিক আলো উপস্থিতি", "আলোর বিচ্ছুরণ", "আলোর প্রতিফলন"],
        correctAnswer: 0
    },
    {
        question: "উপছায়া কী?",
        options: ["সম্পূর্ণ অন্ধকার এলাকা", "আংশিক আলো ও আংশিক অন্ধকার এলাকা", "শুধু আলোর এলাকা", "প্রতিবিম্ব এলাকা"],
        correctAnswer: 1
    },
    {
        question: "মসৃণ পৃষ্ঠ থেকে আলোর প্রতিফলনকে কী বলে?",
        options: ["বিক্ষিপ্ত প্রতিফলন", "নিয়মিত প্রতিফলন", "অভিসারী প্রতিফলন", "অপসারী প্রতিফলন"],
        correctAnswer: 1
    },
    {
        question: "রুক্ষ পৃষ্ঠ থেকে আলোর প্রতিফলনকে কী বলে?",
        options: ["নিয়মিত প্রতিফলন", "বিক্ষিপ্ত প্রতিফলন", "সমান্তরাল প্রতিফলন", "অভ্যন্তরীণ প্রতিফলন"],
        correctAnswer: 1
    },
    {
        question: "আলোর প্রতিসরণ কীসের কারণে ঘটে?",
        options: ["আলোর বেগ পরিবর্তন", "আলোর রং পরিবর্তন", "আলোর তীব্রতা পরিবর্তন", "আলোর দিক অপরিবর্তিত থাকা"],
        correctAnswer: 0
    },
    {
        question: "সংকট কোণ কীসের সাথে সম্পর্কিত?",
        options: ["প্রতিসরণ", "প্রতিফলন", "পূর্ণ অভ্যন্তরীণ প্রতিফলন", "বিচ্ছুরণ"],
        correctAnswer: 2
    },
    {
        question: "সমতল দর্পনে প্রতিবিম্ব কেমন হয়?",
        options: ["উল্টো ও খর্বাকার", "সোজা ও সমআকার", "উল্টো ও বিবর্ধিত", "অবাস্তব ও খর্বাকার"],
        correctAnswer: 1
    },
    {
        question: "বর্ণালি সৃষ্টি হয় কীসের মাধ্যমে?",
        options: ["আলোর প্রতিফলন", "আলোর প্রতিসরণ ও বিচ্ছুরণ", "আলোর শোষণ", "আলোর বিক্ষেপণ"],
        correctAnswer: 1
    },
    {
        question: "অদৃশ্য আলোর ক্ষতিকারক প্রভাব কোনটি?",
        options: ["চোখের ক্ষতি", "ত্বক ক্যান্সার", "তাপ উৎপাদন", "উপরের সবকটি"],
        correctAnswer: 3
    },
    {
        question: "চুম্বকের মেরু দুটি কী কী?",
        options: ["উত্তর ও দক্ষিণ", "পূর্ব ও পশ্চিম", "ধনাত্মক ও ঋণাত্মক", "উপর ও নিচ"],
        correctAnswer: 0
    },
    {
        question: "প্রাকৃতিক চুম্বকের উদাহরণ কী?",
        options: ["লৌহচুম্বক", "নিকেল", "কোবল্ট", "চুম্বকপাথর (ম্যাগনেটাইট)"],
        correctAnswer: 3
    },
    {
        question: "কৃত্রিম চুম্বক তৈরিতে প্রধান ব্যবহার হয় কীসের?",
        options: ["তামা", "অ্যালুমিনিয়াম", "ইস্পাত বা লোহা", "রূপা"],
        correctAnswer: 2
    },
    {
        question: "চুম্বক বলরেখা কেমন হয়?",
        options: ["উত্তর মেরু থেকে দক্ষিণ মেরুতে বাইরে", "দক্ষিণ মেরু থেকে উত্তরে ভিতরে", "উত্তর থেকে দক্ষিণে ভিতরে ও দক্ষিণ থেকে উত্তরে বাইরে", "এলোমেলোভাবে চলে"],
        correctAnswer: 2
    },
    {
        question: "চুম্বকের জ্যামিতিক দৈর্ঘ্য ও চৌম্বক দৈর্ঘ্যের মধ্যে সম্পর্ক কী?",
        options: ["জ্যামিতিক দৈর্ঘ্য বেশি", "চৌম্বক দৈর্ঘ্য বেশি", "দুটো সমান", "চৌম্বক দৈর্ঘ্য কম"],
        correctAnswer: 3
    },
    {
        question: "উদাসীন বিন্দু কী?",
        options: ["চুম্বক সবচেয়ে শক্তিশালী", "কম্পাস সঠিক দিক দেখায় না", "কোনো ক্রিয়া অনুভূত হয় না", "তাপ সবচেয়ে বেশি"],
        correctAnswer: 2
    },
    {
        question: "পৃথিবী নিজেই একটি চুম্বক। এর চৌম্বক দক্ষিণ মেরু কোথায় অবস্থিত?",
        options: ["ভৌগোলিক উত্তরে", "ভৌগোলিক দক্ষিণে", "ভৌগোলিক পূর্বে", "ভৌগোলিক পশ্চিমে"],
        correctAnswer: 0
    },
    {
        question: "তড়িৎ চুম্বকের মূল অংশ কী?",
        options: ["স্থায়ী চুম্বক", "তড়িৎবাহী কুণ্ডলী ও লোহার কোর", "অ্যালুমিনিয়াম রড", "পিতলের তার"],
        correctAnswer: 1
    },
    {
        question: "প্রাইমারি সেল পুনরায় চার্জ করা যায় না কেন?",
        options: ["রাসায়নিক বিক্রিয়া অপরিবর্তনীয়", "ভোল্টেজ কম", "কারেন্ট বেশি", "দাম কম"],
        correctAnswer: 0
    },
    {
        question: "সেকেন্ডারি সেলের উদাহরণ কোনটি?",
        options: ["বোতাম সেল", "শুষ্ক সেল", "লেড-অ্যাসিড ব্যাটারি", "জিংক-কার্বন সেল"],
        correctAnswer: 2
    },
    {
        question: "বোতাম সেলে সাধারণত কী ধরণের ইলেক্ট্রোলাইট ব্যবহার হয়?",
        options: ["তরল", "পেস্ট বা শুষ্ক", "গ্যাস", "কঠিন ধাতু"],
        correctAnswer: 1
    },
    {
        question: "বৈদ্যুতিক বর্তনীতে ব্যাটারির প্রতীক কোনটি?",
        options: ["একটি লম্বা ও একটি ছোট সমান্তরাল রেখা", "একটি বৃত্তের ভেতর ক্রস", "একটি তরঙ্গায়িত রেখা", "একটি সরল রেখা"],
        correctAnswer: 0
    },
    {
        question: "LED-এর পূর্ণরূপ কী?",
        options: ["Light Emitting Device", "Light Emitting Diode", "Liquid Emitting Diode", "Low Energy Diode"],
        correctAnswer: 1
    },
    {
        question: "LED সাধারণত কীসের মাধ্যমে আলো উৎপন্ন করে?",
        options: ["তাপ", "গ্যাসের আয়নায়ন", "অর্ধপরিবাহীর ইলেকট্রন স্থানান্তর", "ফিলামেন্টের উত্তাপ"],
        correctAnswer: 2
    },
    {
        question: "তড়িৎ প্রবাহের ফলে তাপ উৎপন্ন হওয়ার সঠিক সূত্র কোনটি?",
        options: ["H = I^2Rt", "H = VIt", "H = V^2t/R", "উপরের সবকটি"],
        correctAnswer: 3
    },
    {
        question: "পরিবেশ বান্ধব শক্তির উদাহরণ কোনটি?",
        options: ["কয়লা", "পেট্রোলিয়াম", "সৌর শক্তি", "প্রাকৃতিক গ্যাস"],
        correctAnswer: 2
    },
    {
        question: "চুম্বকের কোন ধর্মটি সবচেয়ে গুরুত্বপূর্ণ?",
        options: ["তাপ পরিবাহিতা", "লোহা আকর্ষণ", "বিদ্যুৎ পরিবাহিতা", "দ্রাব্যতা"],
        correctAnswer: 1
    },
    {
        question: "চৌম্বক ক্ষেত্রের দিক নির্দেশ করে কোন যন্ত্র?",
        options: ["ভোল্টমিটার", "অ্যামিটার", "কম্পাস", "গ্যালভানোমিটার"],
        correctAnswer: 2
    },
    {
        question: "নিচের কোনটি নবায়নযোগ্য শক্তি নয়?",
        options: ["পবন শক্তি", "জলবিদ্যুৎ", "জৈব জ্বালানি", "ভূ-তাপীয় শক্তি"],
        correctAnswer: 2
    },
    {
        question: "LED বাল্ব সাধারণ বাল্বের চেয়ে ভালো কেন?",
        options: ["কম শক্তি খরচ", "দীর্ঘস্থায়ী", "কম তাপ উৎপন্ন করে", "উপরের সবকটি"],
        correctAnswer: 3
    },
    {
        question: "অভ্যন্তরীণ পূর্ণ প্রতিফলন ঘটে যখন—",
        options: ["আলো ঘন থেকে হালকা মাধ্যমে যায় এবং আপতন কোণ সংকট কোণের চেয়ে বড় হয়।", "আলো হালকা থেকে ঘন মাধ্যমে যায়", "আলো লম্বভাবে পতিত হয়", "আলো শোষিত হয়"],
        correctAnswer: 0
    },
    {
        question: "চুম্বক সংরক্ষণে কী ব্যবহার করা হয়?",
        options: ["তামার পাত", "অ্যালুমিনিয়াম বাক্স", "লোহার টুকরা (মুরজা)", "কাঠের বাক্স"],
        correctAnswer: 2
    },
    {
        question: "ইলেকট্রন প্রবাহের অভিমুখ কী?",
        options: ["ধনাত্মক থেকে ঋণাত্মকে", "ঋণাত্মক থেকে ধনাত্মকে", "যেকোনো দিকে", "স্থির থাকে"],
        correctAnswer: 1
    },
    {
        question: "কোন যন্ত্র তড়িৎ প্রবাহের উপস্থিতি বোঝাতে LED ব্যবহার করে?",
        options: ["ফ্যান", "ফ্রিজ", "মোবাইল চার্জার ইন্ডিকেটর", "হিটার"],
        correctAnswer: 2
    },
    {
        question: "পরিবেশের জন্য কোন শক্তি সবচেয়ে ক্ষতিকর?",
        options: ["সৌর", "জীবাশ্ম জ্বালানি", "বায়ু", "জল"],
        correctAnswer: 1
    },
    {
        question: "পূর্ণ অভ্যন্তরীণ প্রতিফলনের জন্য প্রয়োজনীয় শর্ত কোনটি?",
        options: ["আপতন কোণ > সংকট কোণ", "আপতন কোণ < সংকট কোণ", "আপতন কোণ = 0°", "আপতন কোণ = 90°"],
        correctAnswer: 0
    },
    {
        question: "সমান্তরাল আলোকরশ্মি কোন ক্ষেত্রে পাওয়া যায়?",
        options: ["সূর্য থেকে দূরে", "বাতি থেকে কাছে", "মোমবাতির আলোয়", "লেজার রশ্মিতে"],
        correctAnswer: 3
    },
    {
        question: "চুম্বকের উদাসীন অঞ্চলে কী হয়?",
        options: ["আকর্ষণ ধর্ম নষ্ট হয়", "শুধু বিকর্ষণ দেখা যায়", "কোনো ফল পাওয়া যায় না", "শুধু আকর্ষণ দেখা যায়"],
        correctAnswer: 2
    },
    {
        question: "তড়িৎচুম্বকের ব্যবহার কোথায় হয়?",
        options: ["ইলেকট্রিক বেল", "ক্রেন", "স্পিকার", "উপরের সবকটিতে"],
        correctAnswer: 3
    },
    {
        question: "নিচের কোনটি কৃত্রিম চুম্বক?",
        options: ["ম্যাগনেটাইট", "U-আকৃতির চুম্বক", "চুম্বক পাথর", "প্রাকৃতিক লোহার আকরিক"],
        correctAnswer: 1
    },
    {
        question: "কোন যন্ত্র তড়িৎ প্রবাহের তাপীয় ফল ব্যবহার করে?",
        options: ["পাখা", "ইলেকট্রিক কেটলি", "মাইক্রোফোন", "টেলিভিশন"],
        correctAnswer: 1
    },
    {
        question: "নিচের কোন রঙের আলোর বিচ্যুতি সবচেয়ে বেশি হয়?",
        options: ["লাল", "নীল", "হলুদ", "বেগুনি"],
        correctAnswer: 3
    },
    {
        question: "আলোর বেগ সর্বোচ্চ কোথায়?",
        options: ["জলে", "কাঁচে", "শূন্য মাধ্যমে", "হীরকে"],
        correctAnswer: 2
    },
    {
        question: "চুম্বকীয় বলরেখার ঘনত্ব বেশি যেখানে—",
        options: ["উদাসীন বিন্দুতে", "মেরু থেকে দূরে", "মেরুর কাছে", "কেন্দ্রে"],
        correctAnswer: 2
    },
    {
        question: "নিচের কোনটি নবায়নযোগ্য শক্তির উৎস?",
        options: ["ইউরেনিয়াম", "কয়লা", "প্রাকৃতিক গ্যাস", "বায়ু"],
        correctAnswer: 3
    },
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








