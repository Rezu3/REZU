// State Variables
let currentBatchId = null;
let currentBatchName = '';
let currentSubjectId = null;
let currentSubjectName = '';
let currentChapterId = null;
let currentChapterName = '';

let questions = [];
let currentQuestionIndex = 0;
let userAnswers = {};

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    loadBatches();
});

// ==========================================
// 1. API CALLS & DATA LOADING
// ==========================================

// Load Batches
async function loadBatches() {
    try {
        const response = await fetch('/api/batches');
        const batches = await response.json();
        
        const grid = document.getElementById('batches-grid');
        grid.innerHTML = '';

        batches.forEach(batch => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerText = batch.name;
            card.onclick = () => selectBatch(batch.id, batch.name);
            grid.appendChild(card);
        });

        showView('batches-view');
        updateBreadcrumb();
    } catch (error) {
        console.error('Error loading batches:', error);
    }
}

// Select Batch & Load Subjects
async function selectBatch(batchId, batchName) {
    currentBatchId = batchId;
    currentBatchName = batchName;

    try {
        const response = await fetch(`/api/batches/${batchId}/subjects`);
        const subjects = await response.json();

        const grid = document.getElementById('subjects-grid');
        grid.innerHTML = '';

        subjects.forEach(subject => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerText = subject.name;
            card.onclick = () => selectSubject(subject.id, subject.name);
            grid.appendChild(card);
        });

        showView('subjects-view');
        updateBreadcrumb();
    } catch (error) {
        console.error('Error loading subjects:', error);
    }
}

// Select Subject & Load Chapters
async function selectSubject(subjectId, subjectName) {
    currentSubjectId = subjectId;
    currentSubjectName = subjectName;

    try {
        const response = await fetch(`/api/batches/${currentBatchId}/subjects/${subjectId}/chapters`);
        const chapters = await response.json();

        const grid = document.getElementById('chapters-grid');
        grid.innerHTML = '';

        chapters.forEach(chapter => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerText = chapter.name;
            card.onclick = () => selectChapter(chapter.id, chapter.name);
            grid.appendChild(card);
        });

        showView('chapters-view');
        updateBreadcrumb();
    } catch (error) {
        console.error('Error loading chapters:', error);
    }
}

// Select Chapter & Start Quiz
async function selectChapter(chapterId, chapterName) {
    currentChapterId = chapterId;
    currentChapterName = chapterName;

    try {
        const response = await fetch(`/api/batches/${currentBatchId}/subjects/${currentSubjectId}/chapters/${chapterId}/questions`);
        questions = await response.json();

        currentQuestionIndex = 0;
        userAnswers = {};

        if (questions.length > 0) {
            document.getElementById('quiz-chapter-title').innerText = currentChapterName;
            showQuestion(currentQuestionIndex);
            showView('quiz-view');
            updateBreadcrumb();
        } else {
            alert('এই অধ্যায়ে কোনো প্রশ্ন পাওয়া যায়নি!');
        }
    } catch (error) {
        console.error('Error loading questions:', error);
    }
}

// ==========================================
// 2. QUIZ DISPLAY & MATHJAX LOGIC
// ==========================================

function showQuestion(index) {
    const q = questions[index];
    
    // Update Progress
    document.getElementById('quiz-progress').innerText = `প্রশ্ন ${index + 1} / ${questions.length}`;

    // Update Question Text
    const qTextElem = document.getElementById('question-text');
    qTextElem.innerHTML = `${index + 1}. ${q.question}`;

    // Update Image (If exists)
    const imgContainer = document.getElementById('question-image-container');
    const imgElem = document.getElementById('question-image');
    if (q.image) {
        imgElem.src = `/static/images/${q.image}`;
        imgContainer.style.display = 'block';
    } else {
        imgContainer.style.display = 'none';
    }

    // Render Options
    const optionsGrid = document.getElementById('options-container');
    optionsGrid.innerHTML = '';

    q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span style="margin-right:8px; font-weight:600;">${String.fromCharCode(65 + optIdx)}.</span> ${optText}`;

        // Check if user already answered
        if (userAnswers[index] !== undefined) {
            if (optIdx === q.answer) {
                btn.classList.add('correct');
            }
            if (userAnswers[index] === optIdx && optIdx !== q.answer) {
                btn.classList.add('wrong');
            }
        } else {
            btn.onclick = () => handleAnswer(optIdx);
        }

        optionsGrid.appendChild(btn);
    });

    // Navigation Buttons State
    document.getElementById('prev-btn').disabled = (index === 0);
    document.getElementById('next-btn').disabled = (index === questions.length - 1);

    // Re-render MathJax Equations for dynamic content
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([qTextElem, optionsGrid]).catch((err) => console.log(err));
    }
}

function handleAnswer(selectedIndex) {
    userAnswers[currentQuestionIndex] = selectedIndex;
    showQuestion(currentQuestionIndex);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// ==========================================
// 3. NAVIGATION & BREADCRUMB
// ==========================================

function showView(viewId) {
    document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');
}

function updateBreadcrumb() {
    const bc = document.getElementById('breadcrumb');
    const bcBatch = document.getElementById('bc-batch');
    const bcSub = document.getElementById('bc-subject');
    const bcChap = document.getElementById('bc-chapter');
    const sep1 = document.getElementById('sep1');
    const sep2 = document.getElementById('sep2');

    bc.style.display = 'flex';

    if (currentBatchId && !currentSubjectId) {
        bcBatch.innerText = currentBatchName;
        bcSub.style.display = 'none';
        bcChap.style.display = 'none';
        sep1.style.display = 'none';
        sep2.style.display = 'none';
    } else if (currentSubjectId && !currentChapterId) {
        bcBatch.innerText = currentBatchName;
        bcSub.innerText = currentSubjectName;
        bcSub.style.display = 'inline';
        bcChap.style.display = 'none';
        sep1.style.display = 'inline';
        sep2.style.display = 'none';
    } else if (currentChapterId) {
        bcBatch.innerText = currentBatchName;
        bcSub.innerText = currentSubjectName;
        bcChap.innerText = currentChapterName;
        bcSub.style.display = 'inline';
        bcChap.style.display = 'inline';
        sep1.style.display = 'inline';
        sep2.style.display = 'inline';
    } else {
        bc.style.display = 'none';
    }
}

function showBatchesView() {
    currentSubjectId = null;
    currentChapterId = null;
    loadBatches();
}

function showSubjectsView() {
    currentChapterId = null;
    selectBatch(currentBatchId, currentBatchName);
}

function showChaptersView() {
    selectSubject(currentSubjectId, currentSubjectName);
}

function resetToBatches() {
    currentBatchId = null;
    currentSubjectId = null;
    currentChapterId = null;
    loadBatches();
}

// ==========================================
// 4. FULLSCREEN API
// ==========================================

function toggleFullscreen() {
    let elem = document.documentElement;

    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        document.getElementById('fullscreenBtn').innerText = '✕ এক্সিট ফুল স্ক্রিন';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        document.getElementById('fullscreenBtn').innerText = '🖥️ ফুল স্ক্রিন';
    }
}