const gkQuestions = [
    {
        question: "The probability of the sample space S is:",
        options: ["0", "1", "Depends on experiment", "Infinite"],
        correctAnswer: 1
    },
    {
        question: "A random variable that takes countable values is called:",
        options: ["Continuous", "Discrete", "Mixed", "Constant"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an example of a continuous random variable?",
        options: ["Number of students", "Number of heads in coin toss", "Height of a person", "Number of cars"],
        correctAnswer: 2
    },
    {
        question: "For a discrete random variable X, the sum of all probabilities is:",
        options: ["0", "1", "Less than 1", "Greater than 1"],
        correctAnswer: 1
    },
    {
        question: "Probability density function (PDF) applies to:",
        options: ["Discrete variables", "Continuous variables", "Both", "None"],
        correctAnswer: 1
    },
    {
        question: "The CDF of a random variable X is defined as:",
        options: ["P(X = x)", "P(X ≥ x)", "P(X ≤ x)", "P(X > x)"],
        correctAnswer: 2
    },
    {
        question: "The limits of a CDF F(x) are:",
        options: ["F(-∞)=1, F(∞)=0", "F(-∞)=0, F(∞)=1", "Both 0", "Both 1"],
        correctAnswer: 1
    },
    {
        question: "Which condition must a PDF satisfy?",
        options: ["f(x) ≥ 0", "∫f(x)dx = 1", "Both A and B", "None"],
        correctAnswer: 2
    },
    {
        question: "Which is true for PMF?",
        options: ["Defined for continuous variables", "Defined for discrete variables", "Always constant", "Always increasing"],
        correctAnswer: 1
    },
    {
        question: "Expectation of a discrete random variable is:",
        options: ["∑xp(x)", "∫ x dx", "∑p(x)", "∫ p(x)dx"],
        correctAnswer: 0
    },
    {
        question: "If E(X) = 5, then E(2X) =",
        options: ["5", "10", "2", "25"],
        correctAnswer: 1
    },
    {
        question: "If E(X) = 3, then E(X+4) =",
        options: ["3", "4", "7", "12"],
        correctAnswer: 2
    },
    {
        question: "The r-th raw moment is:",
        options: ["E(X^r)", "E((X−μ)^r)", "rX", "X^r"],
        correctAnswer: 0
    },
    {
        question: "The first raw moment about origin is:",
        options: ["Variance", "Mean", "2 Variance", "None"],
        correctAnswer: 1
    },
    {
        question: "The second central moment represents:",
        options: ["Mean", "Variance", "Expectation", "Median"],
        correctAnswer: 1
    },
    {
        question: "Variance is defined as:",
        options: ["E(X)", "E(X²)", "E[(X−μ)²]", "(E(X))²"],
        correctAnswer: 2
    },
    {
        question: "Relation between variance and expectation:",
        options: ["Var(X) = E(X²)−[E(X)]²", "Var(X) = E(X)", "Var(X) = E(X²)", "None"],
        correctAnswer: 0
    },
    {
        question: "If X is discrete with p(1)=0.3, p(2)=0.7, then E(X) =",
        options: ["1.3", "1.7", "2", "0.7"],
        correctAnswer: 1
    },
    {
        question: "The total area under a PDF curve is:",
        options: ["0", "1", "Infinite", "Depends"],
        correctAnswer: 1
    },
    {
        question: "The third central moment is related to:",
        options: ["Mean", "Variance", "2 Raw Moment", "None"],
        correctAnswer: 3
    },
    {
        question: "If E(X)=4, E(X²)=20, then Var(X) =",
        options: ["4", "16", "20", "36"],
        correctAnswer: 0
    },
    {
        question: "If Var(X)=9 then standard deviation is:",
        options: ["3", "81", "6", "18"],
        correctAnswer: 0
    },
    {
        question: "If Y=3X, then Var(Y) =",
        options: ["3Var(X)", "9Var(X)", "Var(X)", "6Var(X)"],
        correctAnswer: 1
    },
    {
        question: "Binomial distribution depends on parameters:",
        options: ["n, p", "n, μ", "p, μ", "Only n"],
        correctAnswer: 0
    },
    {
        question: "Mean of a binomial distribution is:",
        options: ["np", "n/p", "p/n", "n + p"],
        correctAnswer: 0
    },
    {
        question: "A binomial experiment requires:",
        options: ["Infinite trials", "Independent trials", "Continuous outcomes", "Negative probabilities"],
        correctAnswer: 1
    },
    {
        question: "Mean and variance of Poisson distribution are:",
        options: ["Both equal to μ", "Mean = μ, Variance = 2μ", "Mean = 2μ, Variance = μ", "Both zero"],
        correctAnswer: 0
    },
    {
        question: "X takes values 1,2,3 with probabilities 0.2,0.5,0.3. Find E(X):",
        options: ["2.1", "3.2", "1.1", "None"],
        correctAnswer: 0
    },
    {
        question: "X takes values 1,2,3 with probabilities 0.2,0.5,0.3. Find Var(X):",
        options: ["0.49", "0.42", "4.2", "4.9"],
        correctAnswer: 0
    },
    {
        question: "If mean=3, find third central moment (X=2,3,4; p=0.3,0.4,0.3):",
        options: ["2", "0", "1", "4"],
        correctAnswer: 1
    },
    {
        question: "Second raw moment (X=1,2; p=0.6,0.4):",
        options: ["3.2", "1.2", "2.2", "4.2"],
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










