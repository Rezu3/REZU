
const gkQuestions = [
    // আবিষ্কার ও আবিষ্কারক
    {
        question: "পেনিসিলিন কে আবিষ্কার করেন?",
        options: ["আলেকজান্ডার ফ্লেমিং", "লুই পাস্তুর", "রবার্ট কখ", "জোসেফ লিস্টার"],
        correctAnswer: 0
    },
    {
        question: "গ্রাভিটি বা মহাকর্ষ সূত্র কে আবিষ্কার করেন?",
        options: ["আলবার্ট আইনস্টাইন", "গ্যালিলিও গ্যালিলি", "আইজাক নিউটন", "নিকোলাস কোপার্নিকাস"],
        correctAnswer: 2
    },
    {
        question: "রেডিয়াম কে আবিষ্কার করেন?",
        options: ["আইজাক নিউটন", "মেরি কুরি", "আলবার্ট আইনস্টাইন", "নিলস বোর"],
        correctAnswer: 1
    },
    {
        question: "বিদ্যুতের বাতি (প্রাকটিক্যাল) কে আবিষ্কার করেন?",
        options: ["টমাস আলভা এডিসন", "নিকোলা টেসলা", "আলেকজান্ডার গ্রাহাম বেল", "মাইকেল ফ্যারাডে"],
        correctAnswer: 0
    },
    {
        question: "টেলিফোন কে আবিষ্কার করেন?",
        options: ["গুগ্লিয়েলমো মার্কোনি", "টমাস এডিসন", "আলেকজান্ডার গ্রাহাম বেল", "জেমস ওয়াট"],
        correctAnswer: 2
    },
    {
        question: "রেডিও কার অগ্রগতি/আবিষ্কারের জন্য সর্বাধিক পরিচিত?",
        options: ["গুগ্লিয়েলমো মার্কোনি", "জন লোগি বেয়ার্ড", "হাইনরিখ হার্টজ", "নিকোলা টেসলা"],
        correctAnswer: 0
    },
    {
        question: "কম্পিউটারের "প্রোগ্রামেবল" ধারণার জনক কে?",
        options: ["চার্লস ব্যাবেজ", "অ্যালান টুরিং", "জন ভন নিউম্যান", "অ্যাডা লাভলেস"],
        correctAnswer: 0
    },
    {
        question: "আধুনিক ইন্টারনেটের পূর্বসূরি ARPANET এর বিকাশে প্রধান ভূমিকা কার?",
        options: ["টিম বার্নার্স-লি", "ভিন্টন সার্ফ", "বব কান", "স্টিভ জবস"],
        correctAnswer: 1
    },
    {
        question: "ওয়ার্ল্ড ওয়াইড ওয়েব (WWW) কে আবিষ্কার করেন?",
        options: ["টিম বার্নার্স-লি", "বিল গেটস", "স্টিভ জবস", "মার্ক জুকারবার্গ"],
        correctAnswer: 0
    },
    {
        question: "পোলিও ভ্যাকসিন (সাল্ক ভ্যাকসিন) কে আবিষ্কার করেন?",
        options: ["জোনাস সাল্ক", "অ্যালবার্ট সাবিন", "লুই পাস্তুর", "রবার্ট কখ"],
        correctAnswer: 0
    },
    {
        question: "স্মলপক্সের টিকা কে আবিষ্কার করেন?",
        options: ["লুই পাস্তুর", "এডওয়ার্ড জেনার", "রবার্ট কখ", "আলেকজান্ডার ফ্লেমিং"],
        correctAnswer: 1
    },
    {
        question: "রক্তের গ্রুপ ABO সিস্টেম কে আবিষ্কার করেন?",
        options: ["কার্ল ল্যান্ডস্টেইনার", "লুই পাস্তুর", "জোসেফ লিস্টার", "উইলিয়াম হার্ভে"],
        correctAnswer: 0
    },
    {
        question: "জৈব রসায়নে ইউরিয়া সিন্থেসিস কে আবিষ্কার করেন?",
        options: ["ফ্রিডরিশ ভোলার", "রবার্ট বয়েল", "অ্যান্টনি ল্যাভয়সিয়ে", "জন ডালটন"],
        correctAnswer: 0
    },
    {
        question: "পেন্ডুলাম ঘড়ি কে আবিষ্কার করেন?",
        options: ["ক্রিশ্চিয়ান হাইজেনস", "গ্যালিলিও গ্যালিলি", "আইজাক নিউটন", "জোহানেস কেপলার"],
        correctAnswer: 0
    },
    {
        question: "বাষ্প ইঞ্জিন (উন্নত) কে আবিষ্কার করেন?",
        options: ["জেমস ওয়াট", "জর্জ স্টিফেনসন", "টমাস স্যাভেরি", "রিচার্ড ট্রেভিথিক"],
        correctAnswer: 0
    },
    {
        question: "আধুনিক টেলিভিশন (ইলেকট্রনিক) কে আবিষ্কার করেন?",
        options: ["জন লোগি বেয়ার্ড", "ফিলো ফার্নসওয়ার্থ", "ভ্লাদিমির জোরিকিন", "চার্লস ফ্রান্সিস জেনকিন্স"],
        correctAnswer: 1
    },
    {
        question: "এক্স-রে কে আবিষ্কার করেন?",
        options: ["মেরি কুরি", "আর্নেস্ট রাদারফোর্ড", "উইলহেলম কনরাড রন্টজেন", "জে.জে. থমসন"],
        correctAnswer: 2
    },
    {
        question: "ইলেকট্রন কে আবিষ্কার করেন?",
        options: ["আর্নেস্ট রাদারফোর্ড", "জে.জে. থমসন", "জন ডালটন", "নিলস বোর"],
        correctAnswer: 1
    },
    {
        question: "নিউট্রন কে আবিষ্কার করেন?",
        options: ["আর্নেস্ট রাদারফোর্ড", "জে.জে. থমসন", "জেমস চ্যাডউইক", "নিলস বোর"],
        correctAnswer: 2
    },
    {
        question: "সুচিকিৎসাবিজ্ঞানের জনক বলা হয় কাকে?",
        options: ["হিপোক্রেটিস", "জোসেফ লিস্টার", "লুই পাস্তুর", "আলেকজান্ডার ফ্লেমিং"],
        correctAnswer: 0
    },
    {
        question: "জৈব রসায়নের জনক কে?",
        options: ["ফ্রিডরিশ ভোলার", "অ্যান্টনি ল্যাভয়সিয়ে", "রবার্ট বয়েল", "জন ডালটন"],
        correctAnswer: 0
    },
    {
        question: "আধুনিক রসায়নের জনক কে?",
        options: ["রবার্ট বয়েল", "অ্যান্টনি ল্যাভয়সিয়ে", "জন ডালটন", "দিমিত্রি মেন্ডেলিভ"],
        correctAnswer: 1
    },
    {
        question: "আণবিক সূত্র প্রণয়নকারী (আধুনিক পরমাণুবাদ) কে?",
        options: ["জন ডালটন", "অ্যাভোগ্যাড্রো", "রবার্ট বয়েল", "জোসেফ প্রাউস্ট"],
        correctAnswer: 0
    },
    {
        question: "পর্যায় সারণি কে আবিষ্কার করেন?",
        options: ["জন নিউল্যান্ডস", "দিমিত্রি মেন্ডেলিভ", "হেনরি মোজলে", "অ্যান্টনি ল্যাভয়সিয়ে"],
        correctAnswer: 1
    },
    {
        question: "ভ্যাকুয়াম ক্লিনার (হুভার) কে আবিষ্কার করেন?",
        options: ["হুবার্ট বুট", "জেমস ডাইসন", "আলফ্রেড বেচার", "আইভস ম্যাকগাফি"],
        correctAnswer: 0
    },
    {
        question: "ডায়নামাইট কে আবিষ্কার করেন?",
        options: ["আলফ্রেড নোবেল", "রবার্ট ওপেনহাইমার", "মাইকেল ফ্যারাডে", "জোসেফ প্রিস্টলি"],
        correctAnswer: 0
    },
    {
        question: "ব্যাটারি (ভোল্টাইক পাইল) কে আবিষ্কার করেন?",
        options: ["আলেসান্দ্রো ভোল্টা", "মাইকেল ফ্যারাডে", "থমাস এডিসন", "জর্জ ওহম"],
        correctAnswer: 0
    },
    {
        question: "বৈদ্যুতিক মোটরের (প্রাথমিক) ধারণা দেন কে?",
        options: ["মাইকেল ফ্যারাডে", "থোমাস ডেভেনপোর্ট", "নিকোলা টেসলা", "জর্জ ওয়েস্টিংহাউস"],
        correctAnswer: 0
    },
    {
        question: "আলটারনেটিং কারেন্ট (AC) সিস্টেমের উন্নয়নে প্রধান ভূমিকা কে রাখেন?",
        options: ["টমাস এডিসন", "নিকোলা টেসলা", "জর্জ ওয়েস্টিংহাউস", "মাইকেল ফ্যারাডে"],
        correctAnswer: 1
    },
    {
        question: "ফটোগ্রাফি (ডাগেরোটাইপ) কে আবিষ্কার করেন?",
        options: ["জর্জ ইস্টম্যান", "লুই দাগের", "উইলিয়াম হেনরি ফক্স ট্যালবট", "জোসেফ নাইসফোর নিপস"],
        correctAnswer: 1
    },
    {
        question: "মোশন পিকচার (সিনেমাটোগ্রাফি) কে আবিষ্কার করেন?",
        options: ["থমাস এডিসন", "লুমিয়ের ভ্রাতৃদ্বয়", "জর্জ ইস্টম্যান", "এডওয়ার্ড মাইব্রিজ"],
        correctAnswer: 1
    },
    {
        question: "রেডিওঅ্যাকটিভিটি শব্দটি কে প্রথম ব্যবহার করেন?",
        options: ["আর্নেস্ট রাদারফোর্ড", "মেরি কুরি", "অঁরি বেকেরেল", "নিলস বোর"],
        correctAnswer: 1
    },
    {
        question: "প্লাস্টিক (ব্যাকেলাইট) কে আবিষ্কার করেন?",
        options: ["লিও বেকেল্যান্ড", "জন ওয়েসলি হায়াট", "অ্যালেক্সান্ডার পার্কস", "ওয়ালেস হিউম কারothers"],
        correctAnswer: 0
    },
    {
        question: "নাইলন কে আবিষ্কার করেন?",
        options: ["ডুপন্ট কোম্পানির গবেষক দল (ওয়ালেস কারothers)", "লিও বেকেল্যান্ড", "জন ওয়েসলি হায়াট", "অ্যালেক্সান্ডার পার্কস"],
        correctAnswer: 0
    },
    {
        question: "ভেলক্রো কে আবিষ্কার করেন?",
        options: ["জর্জ ডি মেস্ট্রাল", "আর্থার ফ্রাই", "রিচার্ড ড্রু", "জন বয়েড"],
        correctAnswer: 0
    },
    {
        question: "মাইক্রোওয়েভ ওভেন কে আবিষ্কার করেন?",
        options: ["পার্সি স্পেনসার", "জন হারি", "থোমাস এডিসন", "জেমস ডাইসন"],
        correctAnswer: 0
    },
    {
        question: "লেজার কে আবিষ্কার করেন?",
        options: ["থিওডোর মাইম্যান", "গর্ডন গোল্ড", "আলবার্ট আইনস্টাইন", "চার্লস হার্ড টাউনস"],
        correctAnswer: 0
    },
    {
        question: "ট্রানজিস্টর কে আবিষ্কার করেন?",
        options: ["জন বারডিন, ওয়াল্টার ব্র্যাটেইন ও উইলিয়াম শক্লি", "জ্যাক কিলবি", "রবার্ট নয়েস", "টিম বার্নার্স-লি"],
        correctAnswer: 0
    },
    {
        question: "ইন্টিগ্রেটেড সার্কিট (আইসি) কে আবিষ্কার করেন?",
        options: ["জ্যাক কিলবি", "রবার্ট নয়েস", "জন বারডিন", "উইলিয়াম শক্লি"],
        correctAnswer: 0
    },
    {
        question: "DNA-এর ডাবল হেলিক্স গঠন কে আবিষ্কার করেন?",
        options: ["জেমস ওয়াটসন ও ফ্রান্সিস ক্রিক", "রোজালিন্ড ফ্র্যাংকলিন", "মরিস উইলকিন্স", "এরউইন চার্গাফ"],
        correctAnswer: 0
    },
    {
        question: "ইনসুলিন (প্রথম ব্যবহারিক) কে আবিষ্কার করেন?",
        options: ["ফ্রেডরিখ বান্টিং ও চার্লস বেস্ট", "জন ম্যাকলিয়ড", "জেমস কলিপ", "ওয়াডি রাইট"],
        correctAnswer: 0
    },
    {
        question: "হেপাটাইটিস-বি ভ্যাকসিন কে আবিষ্কার করেন?",
        options: ["বারুচ ব্লumberবার্গ", "মরিস হিলম্যান", "জোনাস সাল্ক", "অ্যালবার্ট সাবিন"],
        correctAnswer: 1
    },
    {
        question: "ইবোলা ভাইরাস কে আবিষ্কার করেন?",
        options: ["পিটার পিয়োট", "জিন-জ্যাক ম্যুয়েম্বে টামফুম", "ডেভিড হিউমার", "কার্ল জনসন"],
        correctAnswer: 1
    },
    {
        question: "এইচআইভি (এইডসের কারণ) ভাইরাস কে আবিষ্কার করেন?",
        options: ["লুক মন্টাগনিয়ার ও ফ্রাঁসোয়াজ বারে-সিনুসি", "রবার্ট গ্যালো", "জয় লেভি", "ফ্লসি ডেডি"],
        correctAnswer: 0
    },
    {
        question: "জিপার কে আবিষ্কার করেন?",
        options: ["হুইটকম্ব জাডসন", "গিডিয়ন সান্ডব্যাক", "ওটো ফ্রেডরিখ গিডিয়ন", "ওয়াল্টার হান্ট"],
        correctAnswer: 1
    },
    {
        question: "বেলুন (হট এয়ার) কে আবিষ্কার করেন?",
        options: ["মোঙ্গলফিয়ের ভ্রাতৃদ্বয়", "জাক শার্ল", "আলবার্তো স্যান্টোস-ডumont", "রাইট ভ্রাতৃদ্বয়"],
        correctAnswer: 0
    },
    {
        question: "এরোপ্লেন (নিয়ন্ত্রিত, শক্তি চালিত) কে আবিষ্কার করেন?",
        options: ["রাইট ভ্রাতৃদ্বয়", "স্যামুয়েল পি. ল্যাংলি", "গ্লেন কার্টিস", "অ্যালবার্তো স্যান্টোস-ডumont"],
        correctAnswer: 0
    },
    {
        question: "হেলিকপ্টার (প্রাকটিক্যাল) কে আবিষ্কার করেন?",
        options: ["ইগর সিকোর্সকি", "জuan de la cierva", "লিওনার্দো দা ভিঞ্চি (ধারণা)", "পল কর্নু"],
        correctAnswer: 0
    },
    {
        question: "ইন্টারনাল কম্বাশন ইঞ্জিন (গ্যাসোলিন) কে আবিষ্কার করেন?",
        options: ["নিকোলাস অটো", "রুডলফ ডিজেল", "গটলিয়েব ডাইমলার", "কার্ল বেঞ্জ"],
        correctAnswer: 0
    },
    {
        question: "ডিজেল ইঞ্জিন কে আবিষ্কার করেন?",
        options: ["রুডলফ ডিজেল", "নিকোলাস অটো", "গটলিয়েব ডাইমলার", "কার্ল বেঞ্জ"],
        correctAnswer: 0
    },
    {
        question: "সেমাফোর (অপটিক্যাল টেলিগ্রাফ) কে আবিষ্কার করেন?",
        options: ["ক্লড শাপ", "স্যামুয়েল মোর্স", "আলফ্রেড ভেইল", "গুগ্লিয়েলমো মার্কোনি"],
        correctAnswer: 0
    },
    {
        question: "মর্স কোড কে আবিষ্কার করেন?",
        options: ["স্যামুয়েল মোর্স", "আলফ্রেড ভেইল", "ক্লড শাপ", "টমাস এডিসন"],
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



