// ============================================
// MAIN.JS — Possessivpronomen Nom + Akk + Dat
// Atelier A2 · Claudia Toth · Annettes Deutschkurs
// ============================================

// ============================================
// TOGGLE SECȚIUNI PRINCIPALE
// ============================================
function toggleMainSection(i) {
    const content = document.getElementById('main-section-' + i);
    const arrow = document.querySelectorAll('.arrow')[i];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

// ============================================
// TOGGLE SUB-SECȚIUNI (în Teorie)
// ============================================
function toggleSubSection(headerEl) {
    const arrow = headerEl.querySelector('.sub-arrow');
    const content = headerEl.nextElementSibling;
    if (content) {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            if (arrow) arrow.classList.add('rotated');
        } else {
            content.style.display = 'none';
            if (arrow) arrow.classList.remove('rotated');
        }
    }
}

// ============================================
// OPEN SECTION FROM NAVBAR
// ============================================
function openSection(index) {
    const contents = document.querySelectorAll('.section-content');
    const arrows = document.querySelectorAll('.arrow');
    if (contents[index] && !contents[index].classList.contains('active')) {
        contents[index].classList.add('active');
        if (arrows[index]) arrows[index].classList.add('rotated');
    }
}

// ============================================
// AUDIO PLAYER simplu
// ============================================
let currentAudio = null;
function playAudio(src) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(src);
    currentAudio.play().catch(err => {
        console.warn('Audio nu poate fi redat:', src, err);
    });
}

// ============================================
// VERIFICĂ EXERCIȚIU INDIVIDUAL
// ============================================
function checkExercise(num) {
    let result;
    switch (num) {
        case 1: result = checkEx1(); break;
        case 2: result = checkEx2(); break;
        case 3: result = checkEx3(); break;
        case 4: result = checkEx4(); break;
        case 5: result = checkEx5(); break;
        case 6: result = checkEx6(); break;
        case 7: result = checkEx7(); break;
        default: return;
    }
    const percentage = Math.round((result.correct / result.total) * 100);
    let message = '';
    let emoji = '';
    if (percentage === 100) { emoji = '🏆'; message = 'Perfekt! / Perfect!'; }
    else if (percentage >= 80) { emoji = '⭐'; message = 'Sehr gut! / Foarte bine!'; }
    else if (percentage >= 60) { emoji = '👍'; message = 'Gut! / Bine!'; }
    else if (percentage >= 40) { emoji = '📚'; message = 'Übe noch! / Mai exersează!'; }
    else { emoji = '💪'; message = 'Wiederhole die Theorie! / Repetă teoria!'; }
    const scoreDiv = document.getElementById('score-' + num);
    scoreDiv.className = 'score show';
    scoreDiv.innerHTML = `
        <div class="score-value">${emoji} ${result.correct} / ${result.total} (${percentage}%)</div>
        <div class="score-message">${message}</div>
    `;
    scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ============================================
// RESETEAZĂ EXERCIȚIU INDIVIDUAL
// ============================================
function resetExercise(num) {
    // Rebuild exercise to clear inputs
    const buildFnName = 'buildEx' + num;
    if (typeof window[buildFnName] === 'function') {
        window[buildFnName]();
    }
    const scoreDiv = document.getElementById('score-' + num);
    if (scoreDiv) { scoreDiv.className = 'score'; scoreDiv.innerHTML = ''; }
    const exSection = document.getElementById('ex' + num);
    if (exSection) { exSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}

// ============================================
// FLASHCARDS RENDER
// ============================================
let currentCard = 0;
function buildFlashcards() {
    const c = document.getElementById('flashcards-container'); if (!c) return;
    if (typeof flashcardsData === 'undefined' || !flashcardsData.length) return;
    let h = `
        <div class="fc-controls">
            <button class="btn btn-reset" onclick="prevCard()">← Înapoi</button>
            <span class="fc-progress" id="fc-progress">1 / ${flashcardsData.length}</span>
            <button class="btn btn-check" onclick="nextCard()">Înainte →</button>
        </div>
        <div class="flashcard" id="flashcard-display" onclick="flipCard()">
            <div class="fc-front" id="fc-front"></div>
            <div class="fc-back" id="fc-back" style="display:none;"></div>
            <div class="fc-hint">📌 Click pentru a vedea traducerea</div>
        </div>
        <div class="fc-audio-row">
            <button class="btn btn-check" id="fc-audio-btn" onclick="playFlashcardAudio()">🔊 Pronunție</button>
        </div>
    `;
    c.innerHTML = h;
    renderCard();
}
function renderCard() {
    const card = flashcardsData[currentCard];
    document.getElementById('fc-front').innerHTML = `<span class="de">${card.de}</span>`;
    document.getElementById('fc-back').innerHTML = `<span class="ro">${card.ro}</span>`;
    document.getElementById('fc-back').style.display = 'none';
    document.getElementById('fc-front').style.display = 'block';
    document.getElementById('fc-progress').textContent = (currentCard + 1) + ' / ' + flashcardsData.length;
}
function flipCard() {
    const front = document.getElementById('fc-front');
    const back = document.getElementById('fc-back');
    if (front.style.display === 'none') {
        front.style.display = 'block';
        back.style.display = 'none';
    } else {
        front.style.display = 'none';
        back.style.display = 'block';
    }
}
function nextCard() {
    currentCard = (currentCard + 1) % flashcardsData.length;
    renderCard();
}
function prevCard() {
    currentCard = (currentCard - 1 + flashcardsData.length) % flashcardsData.length;
    renderCard();
}
function playFlashcardAudio() {
    const card = flashcardsData[currentCard];
    if (card.audio) playAudio(card.audio);
}

// ============================================
// INIT — la încărcarea paginii
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Render teorie
    const tc = document.getElementById('theory-container');
    if (tc && typeof theoryHTML !== 'undefined') tc.innerHTML = theoryHTML;
    // Build exerciții
    if (typeof buildEx1 === 'function') buildEx1();
    if (typeof buildEx2 === 'function') buildEx2();
    if (typeof buildEx3 === 'function') buildEx3();
    if (typeof buildEx4 === 'function') buildEx4();
    if (typeof buildEx5 === 'function') buildEx5();
    if (typeof buildEx6 === 'function') buildEx6();
    if (typeof buildEx7 === 'function') buildEx7();
    // Build flashcards
    buildFlashcards();
    // Render verbs
    const vc = document.getElementById('verbs-container');
    if (vc && typeof verbsHTML !== 'undefined') vc.innerHTML = verbsHTML;
});
