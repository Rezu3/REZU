const gkQuestions = [
    {
        question: "1. গতি কাকে বলে?",
        options: ["স্থির থাকা", "অবস্থান পরিবর্তন", "শব্দ করা", "ওজন কমানো"],
        correctAnswer: 1
    },
    {
        question: "2. দূরত্ব কাকে বলে?",
        options: ["সর্বনিম্ন পথ", "মোট অতিক্রান্ত পথ", "বেগ", "ত্বরন"],
        correctAnswer: 1
    },
    {
        question: "3. সরণ কাকে বলে?",
        options: ["মোট পথ", "সর্বনিম্ন সরল পথ", "সময়", "শক্তি"],
        correctAnswer: 1
    },
    {
        question: "4. দ্রুতি কাকে বলে?",
        options: ["দূরত্ব/সময়", "সরণ/সময়", "বল/সময়", "ভর/সময়"],
        correctAnswer: 0
    },
    {
        question: "5. বেগ কাকে বলে?",
        options: ["দূরত্ব/সময়", "সরণ/সময়", "বল/সময়", "শক্তি/সময়"],
        correctAnswer: 1
    },
    {
        question: "6. ত্বরণ কাকে বলে?",
        options: ["বেগের পরিবর্তনের হার", "দূরত্বের হার", "সময়", "বল"],
        correctAnswer: 0
    },
    {
        question: "7. মন্দন কী?",
        options: ["বেগ বৃদ্ধি", "বেগ হ্রাস", "স্থির থাকা", "দ্রুতি"],
        correctAnswer: 1
    },
    {
        question: "8. ভরবেগের সূত্র কী?",
        options: ["mv", "ma", "v/t", "d/t"],
        correctAnswer: 0
    },
    {
        question: "9. ভরবেগ কিসের উপর নির্ভর করে?",
        options: ["ভর ও বেগ", "সময়", "দূরত্ব", "শক্তি"],
        correctAnswer: 0
    },
    {
        question: "10. গড় বেগ কাকে বলে?",
        options: ["মোট দূরত্ব/মোট সময়", "সরণ/সময়", "বল/সময়", "ভর/সময়"],
        correctAnswer: 0
    },
    {
        question: "11. জড়তা কাকে বলে?",
        options: ["চলাচল", "অবস্থার পরিবর্তনে বাধা", "তাপ", "শক্তি"],
        correctAnswer: 1
    },
    {
        question: "12. জড়তার কারণ কী?",
        options: ["ভর", "বেগ", "সময়", "শক্তি"],
        correctAnswer: 0
    },
    {
        question: "13. বলের SI একক কী?",
        options: ["জুল", "নিউটন", "ওয়াট", "মিটার"],
        correctAnswer: 1
    },
    {
        question: "14. বল কী?",
        options: ["ধাক্কা বা টান", "শক্তি", "সময়", "দূরত্ব"],
        correctAnswer: 0
    },
    {
        question: "15. নিউটনের প্রথম সূত্র কী বলে?",
        options: ["বল = ভর × ত্বরণ", "জড়তার সূত্র", "শক্তি সূত্র", "কার্য সূত্র"],
        correctAnswer: 1
    },

    {
        question: "16. নিউটনের দ্বিতীয় সূত্র কী?",
        options: ["F = ma", "E = mc²", "P = W/t", "v = d/t"],
        correctAnswer: 0
    },
    {
        question: "17. নিউটনের তৃতীয় সূত্র কী?",
        options: ["প্রত্যেক ক্রিয়ার সমান ও বিপরীত প্রতিক্রিয়া", "বল = ভর × ত্বরণ", "শক্তি সংরক্ষণ", "কিছুই না"],
        correctAnswer: 0
    },
    {
        question: "18. কার্য কাকে বলে?",
        options: ["বল × সরণ", "বল × সময়", "ভর × বেগ", "দূরত্ব × সময়"],
        correctAnswer: 0
    },
    {
        question: "19. কার্য এর SI একক কী?",
        options: ["নিউটন", "জুল", "ওয়াট", "মিটার"],
        correctAnswer: 1
    },
    {
        question: "20. শক্তি কাকে বলে?",
        options: ["কাজ করার ক্ষমতা", "বল", "দূরত্ব", "সময়"],
        correctAnswer: 0
    },

    {
        question: "21. শক্তির SI একক কী?",
        options: ["জুল", "নিউটন", "ওয়াট", "মিটার"],
        correctAnswer: 0
    },
    {
        question: "22. ক্ষমতা কাকে বলে?",
        options: ["কার্য/সময়", "বল/সময়", "দূরত্ব/সময়", "ভর/সময়"],
        correctAnswer: 0
    },
    {
        question: "23. ক্ষমতার SI একক কী?",
        options: ["জুল", "ওয়াট", "নিউটন", "মিটার"],
        correctAnswer: 1
    },
    {
        question: "24. কার্যহীন বল কখন হয়?",
        options: ["সরণ শূন্য হলে", "বল বেশি হলে", "সময় কম হলে", "বেগ বেশি হলে"],
        correctAnswer: 0
    },
    {
        question: "25. বস্তু স্থির থাকলে সরণ কত?",
        options: ["শূন্য", "বেশি", "কম", "অজানা"],
        correctAnswer: 0
    },

    {
        question: "26. সমবেগে চললে ত্বরণ কত?",
        options: ["শূন্য", "বেশি", "কম", "অজানা"],
        correctAnswer: 0
    },
    {
        question: "27. ত্বরণের SI একক কী?",
        options: ["m/s²", "m/s", "m", "s"],
        correctAnswer: 0
    },
    {
        question: "28. বেগের SI একক কী?",
        options: ["m/s", "m", "s", "m/s²"],
        correctAnswer: 0
    },
    {
        question: "29. দূরত্বের SI একক কী?",
        options: ["মিটার", "সেকেন্ড", "জুল", "ওয়াট"],
        correctAnswer: 0
    },
    {
        question: "30. সময়ের SI একক কী?",
        options: ["সেকেন্ড", "মিটার", "জুল", "নিউটন"],
        correctAnswer: 0
    },

    {
        question: "31. ভরবেগের SI একক কী?",
        options: ["kg m/s", "N", "J", "W"],
        correctAnswer: 0
    },
    {
        question: "32. বল প্রয়োগ না করলে বস্তু কী করে?",
        options: ["স্থির থাকে বা সমবেগে চলে", "দ্রুত চলে", "থেমে যায়", "উড়ে যায়"],
        correctAnswer: 0
    },
    {
        question: "33. বেশি ভরের বস্তুতে জড়তা কেমন?",
        options: ["বেশি", "কম", "সমান", "শূন্য"],
        correctAnswer: 0
    },
    {
        question: "34. বল প্রয়োগ করলে কী হয়?",
        options: ["গতি পরিবর্তন", "কিছু না", "সময় বাড়ে", "দূরত্ব কমে"],
        correctAnswer: 0
    },
    {
        question: "35. স্থির বস্তুতে ভরবেগ কত?",
        options: ["শূন্য", "বেশি", "কম", "অজানা"],
        correctAnswer: 0
    },

    {
        question: "36. সরণ শূন্য হলে কার্য কত?",
        options: ["শূন্য", "বেশি", "কম", "অজানা"],
        correctAnswer: 0
    },
    {
        question: "37. শক্তি ছাড়া কি কাজ সম্ভব?",
        options: ["না", "হ্যাঁ", "কখনো", "জানা নেই"],
        correctAnswer: 0
    },
    {
        question: "38. গতি পরিবর্তনের কারণ কী?",
        options: ["বল", "সময়", "দূরত্ব", "শক্তি"],
        correctAnswer: 0
    },
    {
        question: "39. বলের দিক পরিবর্তন করলে কী হয়?",
        options: ["গতি পরিবর্তন", "কিছু না", "সময় বাড়ে", "দূরত্ব কমে"],
        correctAnswer: 0
    },
    {
        question: "40. বস্তুতে বল না থাকলে কী হয়?",
        options: ["স্থির থাকে বা সমবেগে চলে", "থেমে যায়", "দ্রুত চলে", "উড়ে যায়"],
        correctAnswer: 0
    },

    {
        question: "41. কার্য কখন সর্বাধিক হয়?",
        options: ["বল ও সরণ একই দিকে হলে", "বিপরীত হলে", "শূন্য হলে", "সময় কম হলে"],
        correctAnswer: 0
    },
    {
        question: "42. শক্তি কোন রূপে থাকতে পারে?",
        options: ["গতিশক্তি", "স্থিতিশক্তি", "উভয়ই", "কোনোটাই না"],
        correctAnswer: 2
    },
    {
        question: "43. স্থির বস্তুর গতিশক্তি কত?",
        options: ["শূন্য", "বেশি", "কম", "অজানা"],
        correctAnswer: 0
    },
    {
        question: "44. চলন্ত বস্তুর শক্তি কী?",
        options: ["গতিশক্তি", "স্থিতিশক্তি", "তাপশক্তি", "শব্দশক্তি"],
        correctAnswer: 0
    },
    {
        question: "45. উচ্চতায় থাকা বস্তুর শক্তি কী?",
        options: ["স্থিতিশক্তি", "গতিশক্তি", "শব্দ", "তাপ"],
        correctAnswer: 0
    },

    {
        question: "46. ক্ষমতা বেশি হলে কী বোঝায়?",
        options: ["দ্রুত কাজ করা", "ধীরে কাজ", "কিছু না", "কম শক্তি"],
        correctAnswer: 0
    },
    {
        question: "47. সময় বেশি হলে ক্ষমতা কেমন?",
        options: ["কম", "বেশি", "সমান", "অজানা"],
        correctAnswer: 0
    },
    {
        question: "48. বলের প্রভাবে বস্তু কী পায়?",
        options: ["ত্বরণ", "সময়", "দূরত্ব", "শক্তি"],
        correctAnswer: 0
    },
    {
        question: "49. বেগ শূন্য হলে ভরবেগ কত?",
        options: ["শূন্য", "বেশি", "কম", "অজানা"],
        correctAnswer: 0
    },
    {
        question: "50. ভর বেশি হলে ভরবেগ কেমন?",
        options: ["বেশি", "কম", "সমান", "শূন্য"],
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








