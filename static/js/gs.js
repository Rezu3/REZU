const gkQuestions = [
    {
        question: "1. যদি কোনো বস্তু সমবেগে চলতে থাকে, তাহলে তার ত্বরণ কত হবে?",
        options: ["0", "ধ্রুবক", "বাড়তে থাকে", "কমতে থাকে"],
        correctAnswer: 0
    },
    {
        question: "2. সরণ (Displacement) একটি —",
        options: ["স্কেলার রাশি", "ভেক্টর রাশি", "উভয়ই", "কোনোটিই নয়"],
        correctAnswer: 1
    },
    {
        question: "3. গড় দ্রুতি নির্ণয় করা হয় —",
        options: ["মোট সরণ / সময়", "মোট দূরত্ব / মোট সময়", "দূরত্ব / সরণ", "সময় / দূরত্ব"],
        correctAnswer: 1
    },
    {
        question: "4. যদি কোনো বস্তু বৃত্তাকার পথে সমবেগে চলে, তবে তার বেগ —",
        options: ["ধ্রুবক", "পরিবর্তনশীল", "শূন্য", "অসীম"],
        correctAnswer: 1
    },
    {
        question: "5. নিউটনের প্রথম সূত্র কী বোঝায়?",
        options: ["বল ও ত্বরণ সম্পর্ক", "জাড্য", "ভরবেগ", "কার্য"],
        correctAnswer: 1
    },
    {
        question: "6. ভরবেগের একক কী?",
        options: ["kg m/s", "N", "J", "W"],
        correctAnswer: 0
    },
    {
        question: "7. কোনো বস্তু স্থির থাকলে তার দ্রুতি —",
        options: ["অসীম", "ধনাত্মক", "0", "ঋণাত্মক"],
        correctAnswer: 2
    },
    {
        question: "8. ত্বরণ নির্ণয় করা হয় —",
        options: ["বেগ × সময়", "বেগ / সময়", "বেগের পরিবর্তন / সময়", "দূরত্ব / সময়"],
        correctAnswer: 2
    },
    {
        question: "9. মন্দন বলতে বোঝায় —",
        options: ["বেগ বৃদ্ধি", "বেগ হ্রাস", "দূরত্ব বৃদ্ধি", "সময় বৃদ্ধি"],
        correctAnswer: 1
    },
    {
        question: "10. নিউটনের দ্বিতীয় সূত্র অনুযায়ী বল =",
        options: ["m/a", "ma", "mv", "v/t"],
        correctAnswer: 1
    },
    {
        question: "11. ভরবেগ =",
        options: ["mv", "ma", "m/v", "v/m"],
        correctAnswer: 0
    },
    {
        question: "12. কার্য (Work) এর একক —",
        options: ["N", "J", "W", "kg"],
        correctAnswer: 1
    },
    {
        question: "13. যদি বল প্রয়োগ করা হয় কিন্তু সরণ না হয়, তবে কার্য —",
        options: ["ধনাত্মক", "ঋণাত্মক", "শূন্য", "অসীম"],
        correctAnswer: 2
    },
    {
        question: "14. ক্ষমতা (Power) =",
        options: ["Work × Time", "Work / Time", "Time / Work", "Force × Distance"],
        correctAnswer: 1
    },
    {
        question: "15. জাড্য নির্ভর করে —",
        options: ["দ্রুতি", "ভর", "সময়", "দূরত্ব"],
        correctAnswer: 1
    },
    {
        question: "16. বেগ একটি —",
        options: ["স্কেলার", "ভেক্টর", "উভয়ই", "কোনোটিই নয়"],
        correctAnswer: 1
    },
    {
        question: "17. গড় বেগ =",
        options: ["মোট সরণ / মোট সময়", "মোট দূরত্ব / সময়", "দূরত্ব / সরণ", "সময় / সরণ"],
        correctAnswer: 0
    },
    {
        question: "18. নিউটনের তৃতীয় সূত্র বলে —",
        options: ["F=ma", "প্রত্যেক ক্রিয়ার সমান ও বিপরীত প্রতিক্রিয়া আছে", "জাড্য", "ভরবেগ"],
        correctAnswer: 1
    },
    {
        question: "19. শক্তির একক —",
        options: ["N", "J", "W", "kg"],
        correctAnswer: 1
    },
    {
        question: "20. ক্ষমতার একক —",
        options: ["J", "W", "N", "kg"],
        correctAnswer: 1
    },
    {
        question: "21. যদি বেগ অপরিবর্তিত থাকে, তবে ত্বরণ —",
        options: ["ধনাত্মক", "ঋণাত্মক", "0", "অসীম"],
        correctAnswer: 2
    },
    {
        question: "22. দূরত্ব একটি —",
        options: ["ভেক্টর", "স্কেলার", "উভয়ই", "কোনোটিই নয়"],
        correctAnswer: 1
    },
    {
        question: "23. বলের একক —",
        options: ["J", "N", "W", "kg"],
        correctAnswer: 1
    },
    {
        question: "24. ভরবেগের পরিবর্তন =",
        options: ["বল × সময়", "বল / সময়", "সময় / বল", "দূরত্ব × সময়"],
        correctAnswer: 0
    },
    {
        question: "25. সমবেগে গতি হলে —",
        options: ["ত্বরণ আছে", "ত্বরণ নেই", "দূরত্ব নেই", "সময় নেই"],
        correctAnswer: 1
    },
    {
        question: "26. শক্তি =",
        options: ["ক্ষমতা × সময়", "কার্য", "বল × সময়", "দূরত্ব / সময়"],
        correctAnswer: 1
    },
    {
        question: "27. সরণ কখন শূন্য হয়?",
        options: ["যখন দূরত্ব শূন্য", "প্রারম্ভ ও শেষ অবস্থান এক হলে", "সময় শূন্য হলে", "বেগ শূন্য হলে"],
        correctAnswer: 1
    },
    {
        question: "28. বেগ পরিবর্তন হলে —",
        options: ["ত্বরণ শূন্য", "ত্বরণ হয়", "দূরত্ব শূন্য", "সময় শূন্য"],
        correctAnswer: 1
    },
    {
        question: "29. কাজের সূত্র —",
        options: ["F × s", "F / s", "s / F", "F × t"],
        correctAnswer: 0
    },
    {
        question: "30. ক্ষমতা বেশি মানে —",
        options: ["কম কাজ", "বেশি কাজ কম সময়ে", "কম সময়", "কোনোটিই নয়"],
        correctAnswer: 1
    },
    {
        question: "31. বৃত্তাকার গতি হলে ত্বরণ —",
        options: ["শূন্য", "কেন্দ্রাভিমুখী", "বাইরের দিকে", "অনির্দিষ্ট"],
        correctAnswer: 1
    },
    {
        question: "32. জাড্য বেশি হলে —",
        options: ["গতি সহজে বদলায়", "গতি বদলানো কঠিন", "ত্বরণ বেশি", "দূরত্ব কম"],
        correctAnswer: 1
    },
    {
        question: "33. ভর বেশি হলে —",
        options: ["জাড্য কম", "জাড্য বেশি", "ত্বরণ বেশি", "সময় কম"],
        correctAnswer: 1
    },
    {
        question: "34. বল না থাকলে —",
        options: ["গতি পরিবর্তন হয়", "গতি অপরিবর্তিত থাকে", "দূরত্ব কমে", "সময় থামে"],
        correctAnswer: 1
    },
    {
        question: "35. বেগ =",
        options: ["দূরত্ব/সময়", "সরণ/সময়", "সময়/দূরত্ব", "সরণ×সময়"],
        correctAnswer: 1
    },
    {
        question: "36. গড় দ্রুতি ও গড় বেগ সমান হয় যখন —",
        options: ["পথ সরলরেখা", "বেগ শূন্য", "সময় শূন্য", "দূরত্ব শূন্য"],
        correctAnswer: 0
    },
    {
        question: "37. শক্তি সংরক্ষণ সূত্র বলে —",
        options: ["শক্তি সৃষ্টি হয়", "শক্তি নষ্ট হয়", "শক্তি অপরিবর্তিত থাকে", "শক্তি দ্বিগুণ হয়"],
        correctAnswer: 2
    },
    {
        question: "38. যদি সময় কম লাগে, ক্ষমতা —",
        options: ["কম", "বেশি", "শূন্য", "অসীম"],
        correctAnswer: 1
    },
    {
        question: "39. বল প্রয়োগ করলে —",
        options: ["সবসময় গতি হবে", "গতি পরিবর্তন হতে পারে", "সময় কমে", "দূরত্ব শূন্য"],
        correctAnswer: 1
    },
    {
        question: "40. ভেক্টর রাশির উদাহরণ —",
        options: ["দূরত্ব", "বেগ", "সময়", "ভর"],
        correctAnswer: 1
    },
    {
        question: "41. স্কেলার রাশির উদাহরণ —",
        options: ["বেগ", "সরণ", "দূরত্ব", "ত্বরণ"],
        correctAnswer: 2
    },
    {
        question: "42. বল = ভর × —",
        options: ["দ্রুতি", "ত্বরণ", "সময়", "দূরত্ব"],
        correctAnswer: 1
    },
    {
        question: "43. কাজ শূন্য হয় যখন —",
        options: ["বল নেই", "সরণ নেই", "সময় নেই", "ভর নেই"],
        correctAnswer: 1
    },
    {
        question: "44. শক্তি বেশি হলে —",
        options: ["কাজ কম", "কাজ বেশি", "সময় কম", "দূরত্ব কম"],
        correctAnswer: 1
    },
    {
        question: "45. ত্বরণ ধনাত্মক হলে —",
        options: ["বেগ বাড়ে", "বেগ কমে", "বেগ শূন্য", "কিছুই না"],
        correctAnswer: 0
    },
    {
        question: "46. ত্বরণ ঋণাত্মক হলে —",
        options: ["বেগ বাড়ে", "বেগ কমে", "বেগ শূন্য", "স্থির থাকে"],
        correctAnswer: 1
    },
    {
        question: "47. সময়ের একক —",
        options: ["m", "s", "kg", "N"],
        correctAnswer: 1
    },
    {
        question: "48. দূরত্বের একক —",
        options: ["m", "s", "kg", "J"],
        correctAnswer: 0
    },
    {
        question: "49. ভর এর একক —",
        options: ["N", "kg", "m", "s"],
        correctAnswer: 1
    },
    {
        question: "50. বল প্রয়োগের ফলে —",
        options: ["আকার বদলায়", "গতি বদলায়", "উভয়ই", "কোনোটিই নয়"],
        correctAnswer: 2
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
        
        questionTimer = initTimer(60, onTimeUp);
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








