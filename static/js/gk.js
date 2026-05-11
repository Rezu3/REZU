const gkQuestions = [
{
    question: "1. পরমাণুর কেন্দ্রে কী থাকে?",
    options: ["ইলেকট্রন", "প্রোটন ও নিউট্রন", "শুধু নিউট্রন", "শুধু ইলেকট্রন"],
    correctAnswer: 1
},
{
    question: "2. ইলেকট্রনের চার্জ কেমন?",
    options: ["ধনাত্মক", "ঋণাত্মক", "নিরপেক্ষ", "পরিবর্তনশীল"],
    correctAnswer: 1
},
{
    question: "3. প্রোটনের চার্জ কী?",
    options: ["ঋণাত্মক", "ধনাত্মক", "নিরপেক্ষ", "শূন্য"],
    correctAnswer: 1
},
{
    question: "4. নিউট্রনের চার্জ কত?",
    options: ["ধনাত্মক", "ঋণাত্মক", "নিরপেক্ষ", "পরিবর্তনশীল"],
    correctAnswer: 2
},
{
    question: "5. পরমাণুর ভর প্রধানত কোথায় থাকে?",
    options: ["ইলেকট্রনে", "নিউক্লিয়াসে", "কক্ষপথে", "বাইরের স্তরে"],
    correctAnswer: 1
},
{
    question: "6. H এর সংকেত কোন উপাদানের?",
    options: ["হাইড্রোজেন", "হিলিয়াম", "অক্সিজেন", "নাইট্রোজেন"],
    correctAnswer: 0
},
{
    question: "7. O এর সংকেত কী বোঝায়?",
    options: ["অক্সিজেন", "ওজোন", "অক্সাইড", "অ্যালুমিনিয়াম"],
    correctAnswer: 0
},
{
    question: "8. NaCl কী?",
    options: ["অ্যাসিড", "লবণ", "ক্ষার", "ধাতু"],
    correctAnswer: 1
},
{
    question: "9. রাসায়নিক বিক্রিয়া কী?",
    options: ["পদার্থের অবস্থা পরিবর্তন", "নতুন পদার্থ সৃষ্টি", "শুধু গরম হওয়া", "শুধু ঠান্ডা হওয়া"],
    correctAnswer: 1
},
{
    question: "10. রাসায়নিক সমীকরণ কী?",
    options: ["গল্প", "গাণিতিক হিসাব", "বিক্রিয়ার প্রতীকী প্রকাশ", "চিত্র"],
    correctAnswer: 2
},
{
    question: "11. H2 + O2 → H2O কোন ধরনের বিক্রিয়া?",
    options: ["সংযোজন", "বিয়োজন", "বিস্থাপন", "দ্বিগুণ বিক্রিয়া"],
    correctAnswer: 0
},
{
    question: "12. সমীকরণ সমতা বিধান কেন প্রয়োজন?",
    options: ["সৌন্দর্যের জন্য", "গণনার জন্য", "ভর সংরক্ষণ আইন মানতে", "সহজ করার জন্য"],
    correctAnswer: 2
},
{
    question: "13. Fe + S → FeS কোন বিক্রিয়া?",
    options: ["সংযোজন", "বিয়োজন", "বিস্থাপন", "দহন"],
    correctAnswer: 0
},
{
    question: "14. CaCO3 → CaO + CO2 কোন বিক্রিয়া?",
    options: ["সংযোজন", "বিয়োজন", "বিস্থাপন", "নিরপেক্ষকরণ"],
    correctAnswer: 1
},
{
    question: "15. Zn + HCl → ZnCl2 + H2 কোন বিক্রিয়া?",
    options: ["সংযোজন", "বিয়োজন", "বিস্থাপন", "দ্বিগুণ"],
    correctAnswer: 2
},
{
    question: "16. ইলেকট্রন কোথায় থাকে?",
    options: ["নিউক্লিয়াসে", "কক্ষপথে", "প্রোটনে", "নিউট্রনে"],
    correctAnswer: 1
},
{
    question: "17. পরমাণুর সংখ্যা নির্দেশ করে?",
    options: ["প্রোটন সংখ্যা", "নিউট্রন সংখ্যা", "ইলেকট্রন সংখ্যা", "ভর সংখ্যা"],
    correctAnswer: 0
},
{
    question: "18. ভর সংখ্যা = ?",
    options: ["প্রোটন", "ইলেকট্রন", "প্রোটন + নিউট্রন", "নিউট্রন"],
    correctAnswer: 2
},
{
    question: "19. CO2 কী ধরনের যৌগ?",
    options: ["অক্সাইড", "অ্যাসিড", "ক্ষার", "লবণ"],
    correctAnswer: 0
},
{
    question: "20. রাসায়নিক সংকেত লেখার উদ্দেশ্য কী?",
    options: ["সহজ করা", "দেখানোর জন্য", "বিক্রিয়া বোঝানো", "সবগুলো"],
    correctAnswer: 3
},

// Continue same pattern till 50

{
    question: "21. H2SO4 কী?",
    options: ["লবণ", "অ্যাসিড", "ক্ষার", "ধাতু"],
    correctAnswer: 1
},
{
    question: "22. NaOH কী?",
    options: ["অ্যাসিড", "ক্ষার", "লবণ", "গ্যাস"],
    correctAnswer: 1
},
{
    question: "23. রাসায়নিক বিক্রিয়ায় কী পরিবর্তন হয়?",
    options: ["রঙ", "তাপ", "গ্যাস উৎপন্ন", "সবগুলো"],
    correctAnswer: 3
},
{
    question: "24. দহন বিক্রিয়ায় কী লাগে?",
    options: ["অক্সিজেন", "নাইট্রোজেন", "হাইড্রোজেন", "কার্বন"],
    correctAnswer: 0
},
{
    question: "25. Mg + O2 → MgO কোন বিক্রিয়া?",
    options: ["সংযোজন", "বিয়োজন", "বিস্থাপন", "দ্বিগুণ"],
    correctAnswer: 0
},
{
    question: "26. AgNO3 + NaCl → AgCl + NaNO3 কোন বিক্রিয়া?",
    options: ["সংযোজন", "বিয়োজন", "দ্বিগুণ বিক্রিয়া", "বিস্থাপন"],
    correctAnswer: 2
},
{
    question: "27. পরমাণু নিরপেক্ষ কেন?",
    options: ["প্রোটন বেশি", "ইলেকট্রন বেশি", "প্রোটন=ইলেকট্রন", "নিউট্রন বেশি"],
    correctAnswer: 2
},
{
    question: "28. নিউক্লিয়াসে কী থাকে?",
    options: ["ইলেকট্রন", "প্রোটন ও নিউট্রন", "শুধু প্রোটন", "শুধু নিউট্রন"],
    correctAnswer: 1
},
{
    question: "29. H2O কী?",
    options: ["যৌগ", "মৌল", "মিশ্রণ", "গ্যাস"],
    correctAnswer: 0
},
{
    question: "30. রাসায়নিক সমীকরণে → কী বোঝায়?",
    options: ["যোগ", "বিয়োগ", "ফলাফল", "সমান"],
    correctAnswer: 2
},
{
    question: "31. তাপ নির্গত হলে তাকে কী বলে?",
    options: ["উষ্মাশোষী", "উষ্মা নির্গামী", "বিয়োজন", "সংযোজন"],
    correctAnswer: 1
},
{
    question: "32. তাপ শোষিত হলে?",
    options: ["উষ্মাশোষী", "উষ্মা নির্গামী", "বিস্থাপন", "দহন"],
    correctAnswer: 0
},
{
    question: "33. রাসায়নিক বিক্রিয়ায় কী সংরক্ষিত থাকে?",
    options: ["ভর", "তাপ", "রঙ", "গন্ধ"],
    correctAnswer: 0
},
{
    question: "34. C + O2 → CO2 কোন বিক্রিয়া?",
    options: ["দহন", "বিয়োজন", "বিস্থাপন", "দ্বিগুণ"],
    correctAnswer: 0
},
{
    question: "35. KClO3 → KCl + O2 কোন বিক্রিয়া?",
    options: ["সংযোজন", "বিয়োজন", "দহন", "দ্বিগুণ"],
    correctAnswer: 1
},
{
    question: "36. Fe + CuSO4 → FeSO4 + Cu কোন বিক্রিয়া?",
    options: ["বিস্থাপন", "সংযোজন", "বিয়োজন", "দ্বিগুণ"],
    correctAnswer: 0
},
{
    question: "37. Na + Cl2 → NaCl কোন বিক্রিয়া?",
    options: ["সংযোজন", "বিয়োজন", "দ্বিগুণ", "বিস্থাপন"],
    correctAnswer: 0
},
{
    question: "38. রাসায়নিক বিক্রিয়ার আগে পদার্থকে কী বলে?",
    options: ["উৎপাদ", "প্রতিক্রিয়ক", "ফলাফল", "উপাদান"],
    correctAnswer: 1
},
{
    question: "39. বিক্রিয়ার পরে পদার্থকে কী বলে?",
    options: ["প্রতিক্রিয়ক", "উৎপাদ", "মিশ্রণ", "মৌল"],
    correctAnswer: 1
},
{
    question: "40. HCl + NaOH → NaCl + H2O কোন বিক্রিয়া?",
    options: ["নিরপেক্ষকরণ", "দহন", "বিয়োজন", "সংযোজন"],
    correctAnswer: 0
},
{
    question: "41. ইলেকট্রনের ভর কেমন?",
    options: ["বেশি", "কম", "সমান", "অজানা"],
    correctAnswer: 1
},
{
    question: "42. প্রোটনের ভর কেমন?",
    options: ["বেশি", "কম", "শূন্য", "নিরপেক্ষ"],
    correctAnswer: 0
},
{
    question: "43. সংকেত লেখার উদাহরণ কোনটি?",
    options: ["H2O", "Water", "Liquid", "Gas"],
    correctAnswer: 0
},
{
    question: "44. রাসায়নিক বিক্রিয়ায় রঙ পরিবর্তন কী নির্দেশ করে?",
    options: ["ভৌত পরিবর্তন", "রাসায়নিক পরিবর্তন", "কিছুই না", "তাপ"],
    correctAnswer: 1
},
{
    question: "45. গ্যাস উৎপন্ন হওয়া কী নির্দেশ করে?",
    options: ["রাসায়নিক বিক্রিয়া", "ভৌত পরিবর্তন", "শুধু গরম", "শুধু ঠান্ডা"],
    correctAnswer: 0
},
{
    question: "46. লবণ তৈরি হয় কী থেকে?",
    options: ["অ্যাসিড + ক্ষার", "ধাতু + ধাতু", "গ্যাস + গ্যাস", "মৌল"],
    correctAnswer: 0
},
{
    question: "47. CaO + H2O → Ca(OH)2 কোন বিক্রিয়া?",
    options: ["সংযোজন", "বিয়োজন", "দ্বিগুণ", "বিস্থাপন"],
    correctAnswer: 0
},
{
    question: "48. রাসায়নিক সমীকরণে সংখ্যা বসানোকে কী বলে?",
    options: ["সমতা বিধান", "গণনা", "যোগ", "বিয়োগ"],
    correctAnswer: 0
},
{
    question: "49. O2 কী?",
    options: ["যৌগ", "মৌল", "লবণ", "অ্যাসিড"],
    correctAnswer: 1
},
{
    question: "50. N2 কী?",
    options: ["যৌগ", "মৌল", "ক্ষার", "অ্যাসিড"],
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








