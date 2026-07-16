const gkQuestions = [
    // === বীজগণিত (Algebra) ===
    {
        question: "1. সমাধান কর: 3(2x - 5) - 4(x - 3) = 2(x + 5) - 7",
        options: ["3", "-3", "4", "কোনোটিই নয়"],
        correctAnswer: 3
    },
    {
        question: "2. সমাধান কর: (2x + 5)/(x - 3) - (x + 3)/(x - 3) = 2",
        options: ["5", "6", "8", "9"],
        correctAnswer: 2
    },
    {
        question: "3. সমাধান কর: 0.3x + 0.4 = 0.28x + 1.16",
        options: ["35", "36", "38", "40"],
        correctAnswer: 3
    },
    {
        question: "4. সমাধান কর: x/2 - x/3 = x/4 - 1",
        options: ["10", "12", "14", "16"],
        correctAnswer: 1
    },
    {
        question: "5. সমাধান কর: 5x - [2x - 2{x - (3x - 5)}] = 15",
        options: ["2", "3", "4", "5"],
        correctAnswer: 0
    },
    {
        question: "6. x + 1/x = 5 হলে, x² + 1/x² এর মান কত?",
        options: ["23", "25", "27", "29"],
        correctAnswer: 0
    },
    {
        question: "7. a - b = 4 এবং ab = 21 হলে, a³ - b³ এর মান কত?",
        options: ["312", "316", "320", "324"],
        correctAnswer: 1
    },
    {
        question: "8. (2a - 3b)² + 2(2a - 3b)(3b - a) + (3b - a)² এর সরলতম মান কোনটি?",
        options: ["a²", "b²", "4a²", "9b²"],
        correctAnswer: 0
    },
    {
        question: "9. x² - 5x + 6 এর উৎপাদক বিশ্লেষণ কোনটি?",
        options: ["(x-2)(x-3)", "(x+2)(x+3)", "(x-1)(x-6)", "(x+1)(x-6)"],
        correctAnswer: 0
    },
    {
        question: "10. a⁴ + a²b² + b⁴ এর একটি উৎপাদক (a² + ab + b²) হলে, অপরটি কত?",
        options: ["a² - ab - b²", "a² - ab + b²", "a² + ab - b²", "a² - 2ab + b²"],
        correctAnswer: 1
    },
    {
        question: "11. x³ - 7x - 6 এর একটি উৎপাদক কোনটি?",
        options: ["x - 1", "x + 1", "x - 2", "x + 2"],
        correctAnswer: 1
    },
    {
        question: "12. দুটি সংখ্যার সমষ্টি 45 এবং তাদের অন্তর 9 হলে, সমীকরণ গঠন করে বড় সংখ্যাটি কত নির্ণয় কর।",
        options: ["25", "27", "29", "31"],
        correctAnswer: 1
    },
    {
        question: "13. একটি ভগ্নাংশের লব হর অপেক্ষা 3 কম। লব ও হরের উভয়ের সাথে 2 যোগ করলে ভগ্নাংশটি 1/2 হয়। ভগ্নাংশটি কত?",
        options: ["1/4", "2/5", "3/6", "4/7"],
        correctAnswer: 0
    },
    {
        question: "14. পিতার বর্তমান বয়স পুত্রের বয়সের 4 গুণ। 5 বছর পর তাদের বয়সের সমষ্টি 60 বছর হলে, পুত্রের বর্তমান বয়স কত?",
        options: ["8 বছর", "10 বছর", "12 বছর", "15 বছর"],
        correctAnswer: 1
    },
    {
        question: "15. একটি আয়ােতাকার ক্ষেত্রের দৈর্ঘ্য প্রস্থের 3 গুণ। পরিসীমা 64 মিটার হলে, ক্ষেত্রটির ক্ষেত্রফল কত বর্গমিটার?",
        options: ["180", "192", "200", "210"],
        correctAnswer: 1
    },
    {
        question: "16. সমাধান কর: (x + 2)/3 - (x - 3)/4 = 5/6",
        options: ["-5", "-7", "-9", "-11"],
        correctAnswer: 1
    },
    {
        question: "17. x = 2 এবং y = -3 হলে, 9x² + 24xy + 16y² এর মান কত?",
        options: ["36", "49", "64", "81"],
        correctAnswer: 0
    },
    {
        question: "18. x² - y² - 6y - 9 এর উৎপাদক বিশ্লেষণ কোনটি?",
        options: ["(x+y+3)(x-y-3)", "(x+y-3)(x-y+3)", "(x+y+3)(x-y+3)", "(x-y-3)(x-y-3)"],
        correctAnswer: 0
    },

    // === পাটিগণিত (Arithmetic) ===
    {
        question: "19. একটি মিশ্রণে তামা ও দস্তার অনুপাত 5:3। যদি ওই মিশ্রণে 40 কিগ্রা তামা থাকে, তবে দস্তার পরিমাণ কত?",
        options: ["20 কিগ্রা", "24 kiগ্রা", "28 kiগ্রা", "32 kiগ্রা"],
        correctAnswer: 1
    },
    {
        question: "20. A:B = 2:3 এবং B:C = 4:5 হলে, A:B:C কত?",
        options: ["8:12:15", "6:9:15", "8:10:15", "8:12:20"],
        correctAnswer: 0
    },
    {
        question: "21. 4, 10, 12 এর চতুর্থ সমানুপাতীটি কত?",
        options: ["24", "26", "28", "30"],
        correctAnswer: 3
    },
    {
        question: "22. দুটি সংখ্যার অনুপাত 7:9 এবং তাদের গ.সা.গু 5 হলে, সংখ্যা দুটির ল.সা.গু কত?",
        options: ["305", "315", "325", "335"],
        correctAnswer: 1
    },
    {
        question: "23. 8 জন লোক একটি কাজ 15 দিনে করতে পারে। কাজটির 3 গুণ পরিমাণ কাজ 10 দিনে শেষ করতে কতজন লোক লাগবে?",
        options: ["32 জন", "36 জন", "40 জন", "45 জন"],
        correctAnswer: 1
    },
    {
        question: "24. সরল কর: (-15) + (+28) - (-12) + (-30)",
        options: ["-5", "-7", "-9", "-11"],
        correctAnswer: 0
    },
    {
        question: "25. [25 - {20 - (18 - 14 - 2)}] এর মান কত? (14 - 2 এর উপর রেখাবন্ধনী আছে)",
        options: ["15", "17", "19", "21"],
        correctAnswer: 1
    },
    {
        question: "26. (81)¾ এর মান কত?",
        options: ["9", "27", "81", "243"],
        correctAnswer: 1
    },
    {
        question: "27. 5³ × 25⁻² ÷ 5⁻¹ এর সরলতম মান কত?",
        options: ["1", "5", "25", "1/5"],
        correctAnswer: 0
    },
    {
        question: "28. √5.4756 এর মান কত?",
        options: ["2.32", "2.34", "2.36", "2.44"],
        correctAnswer: 1
    },
    {
        question: "29. কোনো একটি সংখ্যার বর্গের সাথে 12 যোগ করলে যোগফল 108 হয়। সংখ্যাটি কত?",
        options: ["√92", "4√6", "6√2", "8"],
        correctAnswer: 1
    },
    {
        question: "30. 0.0009 এর বর্গমূল কত?",
        options: ["0.3", "0.03", "0.003", "0.0003"],
        correctAnswer: 1
    },
    {
        question: "31. একটি ট্রেন ঘণ্টায় 54 কিমি বেগে চলে। ট্রেনটি 12 সেকেন্ডে একটি ল্যাম্পপোস্ট অতিক্রম করলে ট্রেনটির দৈর্ঘ্য কত মিটার?",
        options: ["160 মি", "180 মি", "200 মি", "220 মি"],
        correctAnswer: 1
    },
    {
        question: "32. স্থির জলে একটি নৌকার বেগ 8 কিমি/ঘণ্টা এবং স্রোতের বেগ 2 কিমি/ঘণ্টা। স্রোতের অনুকূলে 40 কিমি যেতে নৌকাটির কত সময় লাগবে?",
        options: ["3 ঘণ্টা", "4 ঘণ্টা", "5 ঘণ্টা", "6 ঘণ্টা"],
        correctAnswer: 1
    },
    {
        question: "33. √3 এর দুই দশমিক স্থান পর্যন্ত আসন্ন মান কত?",
        options: ["1.71", "1.72", "1.73", "1.74"],
        correctAnswer: 2
    },
    {
        question: "34. 45.8396 সংখ্যাটির তিন দশমিক স্থান পর্যন্ত আসন্ন মান লেখ।",
        options: ["45.839", "45.840", "45.830", "45.844"],
        correctAnswer: 1
    },
    {
        question: "35. একটি ক্লাবের সদস্যদের মধ্যে 4000 টাকা সমভাগে ভাগ করে দেওয়া হলো। প্রত্যেকে মেম্বার সংখ্যার সমান টাকা পেলে মেম্বার সংখ্যা কত ছিল (আসন্ন পূর্ণসংখ্যায়)?",
        options: ["61", "63", "65", "67"],
        correctAnswer: 1
    },

    // === জ্যামিতি (Geometry) ===
    {
        question: "36. একটি ত্রিভুজের দুটি কোণ যথাক্রমে 45° এবং 75° হলে, তৃতীয় কোণটির মান কত?",
        options: ["50°", "60°", "70°", "80°"],
        correctAnswer: 1
    },
    {
        question: "37. সমকোণী সমদ্বিবাহু ত্রিভুজের কোণগুলির অনুপাত কত?",
        options: ["1:1:2", "1:2:3", "1:1:1", "none"],
        correctAnswer: 0
    },
    {
        question: "38. দুটি সমান্তরাল সরলরেখাকে একটি ছেদক ছেদ করলে ছেদকের একই পাশের অন্তঃস্থ কোণদ্বয়ের সমষ্টি কত?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1
    },
    {
        question: "39. চিত্রে দুটি সমান্তরাল রেখার একটি ছেদক দ্বারা উৎপন্ন একান্তর কোণদ্বয় সর্বদা কেমন হয়?",
        options: ["পরস্পর সম্পূরক", "পরস্পর সমান", "পরস্পর পূরক", "অসমান"],
        correctAnswer: 1
    },
    {
        question: "40. একটি আয়তক্ষেত্রের দৈর্ঘ্য 12 সেমি এবং কর্ণ 13 সেমি হলে, এর প্রস্থ কত?",
        options: ["4 সেমি", "5 সেমি", "6 সেমি", "7 সেমি"],
        correctAnswer: 1
    },
    {
        question: "41. একটি বর্গক্ষেত্রের ক্ষেত্রফল 256 বর্গমিটার হলে, এর পরিসীমা কত মিটার?",
        options: ["56", "60", "64", "68"],
        correctAnswer: 2
    },
    {
        question: "42. সুষম পঞ্চভুজের প্রতিটি অন্তঃকোণের মান কত ডিগ্রি?",
        options: ["90°", "108°", "120°", "135°"],
        correctAnswer: 1
    },
    {
        question: "43. সামান্তরিকের একটি কোণ 70° হলে, তার বিপরীত কোণটির মান কত হবে?",
        options: ["70°", "110°", "180°", "20°"],
        correctAnswer: 0
    },
    {
        question: "44. কোনো চতুর্ভুজের কর্ণদ্বয় পরস্পরকে সমকোণে সমদ্বিখণ্ডিত করলে চতুর্ভুজটি অবশ্যই কী হবে?",
        options: ["রম্বস বা বর্গক্ষেত্র", "সামান্তরিক", "ট্রাপিজিয়াম", "আয়তক্ষেত্র"],
        correctAnswer: 0
    },
    {
        question: "45. একটি সুষম বহুভুজের বহিঃকোণ 45° হলে, বহুভুজটির বাহুর সংখ্যা কত?",
        options: ["6", "8", "10", "12"],
        correctAnswer: 1
    },
    {
        question: "46. রম্বসের কর্ণদ্বয়ের দৈর্ঘ্য 6 সেমি ও 8 সেমি হলে, রম্বসটির ক্ষেত্রফল কত বর্গ সেমি?",
        options: ["24", "48", "14", "28"],
        correctAnswer: 0
    },
    {
        question: "47. ত্রিভুজের যেকোনো দুটি বাহুর দৈর্ঘ্যের সমষ্টি তৃতীয় বাহুর দৈর্ঘ্য অপেক্ষা কী রূপ হতে হবে?",
        options: ["ক্ষুদ্রতর", "সমান", "বৃহত্তর", "অর্ধেক"],
        correctAnswer: 2
    },
    {
        question: "48. ইংরেজি বর্ণমালার 'H' অক্ষরের কয়টি প্রতিসাম্য রেখা (Line of symmetry) আছে?",
        options: ["1টি", "2টি", "3টি", "কোনোটিই নয়"],
        correctAnswer: 1
    },
    {
        question: "49. সমবাহু ত্রিভুজের ঘূর্ণন প্রতিসাম্যের মাত্রা (Order of rotational symmetry) কত?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2
    },
    {
        question: "50. একটি ট্রাপিজিয়ামের সমান্তরাল বাহুদ্বয়ের দৈর্ঘ্য 10 সেমি ও 18 সেমি এবং তাদের মধ্যকার লম্ব দূরত্ব 6 সেমি হলে, ট্রাপিজিয়ামটির ক্ষেত্রফল কত বর্গ সেমি?",
        options: ["84", "96", "108", "168"],
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








