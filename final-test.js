// ============================================
// FINAL TEST — Possessivpronomen Nom + Akk + Dat
// 15 întrebări mixte (5 MC, 5 Lückentext, 5 corectare)
// ============================================

function normalizeTestAnswer(s) {
    if (!s) return '';
    return s.toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

function testAnswerMatches(item, userInput) {
    const u = normalizeTestAnswer(userInput);
    if (!u) return false;
    const sentenceClean = (item.question || '').replace(/\s*\([^)]*\)\s*/g, ' ');
    return item.accept.some(a => {
        const aNorm = normalizeTestAnswer(a);
        if (aNorm === u) return true;
        const fullSentence = sentenceClean.replace(/_+/g, a);
        if (normalizeTestAnswer(fullSentence) === u) return true;
        return false;
    });
}

const testData = [
    // === 5 Multiple choice (alegere între 3 opțiuni) ===
    { type: 'mc', id: 1, question: 'Carolina trifft ____ Schwester.', options: ['seine', 'ihre', 'Ihre'], correct: 'ihre', accept: ['ihre'], translation: 'Carolina (ea) o întâlnește pe sora ei.' },
    { type: 'mc', id: 2, question: 'Florian wohnt bei ____ Eltern.', options: ['seine', 'seinen', 'seinem'], correct: 'seinen', accept: ['seinen'], translation: 'Florian locuiește la părinții lui. (Dat pl)' },
    { type: 'mc', id: 3, question: 'Frau Bauer, haben Sie ____ Auto?', options: ['ihr', 'Ihr', 'euer'], correct: 'Ihr', accept: ['Ihr'], translation: 'Doamnă Bauer, aveți mașina Dvs.? (politicoasă)' },
    { type: 'mc', id: 4, question: 'Das Kind hat ____ Spielzeug verloren.', options: ['sein', 'ihre', 'seinen'], correct: 'sein', accept: ['sein'], translation: 'Copilul (es) și-a pierdut jucăria. (Akk n)' },
    { type: 'mc', id: 5, question: 'Ihr fahrt mit ____ Onkel.', options: ['euer', 'euren', 'eurem'], correct: 'eurem', accept: ['eurem'], translation: 'Voi plecați cu unchiul vostru. (Dat m)' },

    // === 5 Lückentext mixt (Nom / Akk / Dat) ===
    { type: 'luckentext', id: 6, question: 'Annette ruft ____ Bruder an. (ea)', correct: 'ihren', accept: ['ihren'], translation: 'Annette îl sună pe fratele ei. (Akk m)' },
    { type: 'luckentext', id: 7, question: 'Wir helfen ____ Nachbarin. (noi)', correct: 'unserer', accept: ['unserer'], translation: 'Noi o ajutăm pe vecina noastră. (Dat f)' },
    { type: 'luckentext', id: 8, question: '____ Vater kommt heute. (eu)', correct: 'Mein', accept: ['mein'], translation: 'Tatăl meu vine astăzi. (Nom m)' },
    { type: 'luckentext', id: 9, question: 'Mihai spricht mit ____ Hund. (el)', correct: 'seinem', accept: ['seinem'], translation: 'Mihai vorbește cu câinele lui. (Dat m)' },
    { type: 'luckentext', id: 10, question: 'Habt ihr ____ Eltern besucht? (voi)', correct: 'eure', accept: ['eure'], translation: 'Voi v-ați vizitat părinții? (Akk pl)' },

    // === 5 Detectare greșeală (scrii forma CORECTĂ) ===
    { type: 'mistake', id: 11, question: 'Carolina sucht sein Schwester.', wrong: 'sein', correct: 'ihre', accept: ['ihre'], translation: 'Carolina = sie → ihr- · Schwester f → ihre' },
    { type: 'mistake', id: 12, question: 'Ich gratuliere meinen Schwester.', wrong: 'meinen', correct: 'meiner', accept: ['meiner'], translation: 'gratulieren + Dat · Schwester f → meiner' },
    { type: 'mistake', id: 13, question: 'Wir suchen euere Eltern.', wrong: 'euere', correct: 'eure', accept: ['eure'], translation: 'euer → eure la plural (-e- topit)' },
    { type: 'mistake', id: 14, question: 'Das Kind spielt mit ihre Mutter.', wrong: 'ihre', correct: 'seiner', accept: ['seiner'], translation: 'das Kind = es → sein- · Mutter f Dat → seiner' },
    { type: 'mistake', id: 15, question: 'Frau Müller, ist das ihr Pass?', wrong: 'ihr', correct: 'Ihr', accept: ['Ihr'], translation: 'Sie politicoasă → Ihr cu MAJUSCULĂ' }
];

let currentTestIndex = 0;
let testScore = 0;
let testAnswers = [];

function startTest() {
    currentTestIndex = 0;
    testScore = 0;
    testAnswers = [];
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-question').style.display = 'block';
    document.getElementById('test-result').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const q = testData[currentTestIndex];
    const total = testData.length;
    let html = `<div class="test-progress">Întrebarea ${currentTestIndex + 1} din ${total}</div>`;
    html += `<div class="test-question-card">`;

    if (q.type === 'mc') {
        html += `<h4>📝 Alege varianta corectă:</h4><p class="test-sentence">${q.question}</p>`;
        html += `<small class="test-translation">💬 ${q.translation}</small>`;
        html += `<div class="test-options">`;
        q.options.forEach(opt => {
            html += `<button class="test-option" onclick="selectOption(this, '${opt}')">${opt}</button>`;
        });
        html += `</div>`;
    } else if (q.type === 'luckentext') {
        html += `<h4>📝 Completează spațiul:</h4><p class="test-sentence">${q.question}</p>`;
        html += `<small class="test-translation">💬 ${q.translation}</small>`;
        html += `<input type="text" id="test-input" placeholder="scrie răspunsul..." onkeypress="if(event.key === 'Enter') submitAnswer()">`;
    } else if (q.type === 'mistake') {
        html += `<h4>🔍 Găsește greșeala:</h4><p class="test-sentence" style="text-decoration: line-through; color:#dc2626;">${q.question}</p>`;
        html += `<small class="test-translation" style="color:#047857;">✏️ Scrie forma CORECTĂ a posesivului (doar cuvântul):</small>`;
        html += `<input type="text" id="test-input" placeholder="forma corectă..." onkeypress="if(event.key === 'Enter') submitAnswer()">`;
    }

    html += `<div class="test-actions"><button class="test-submit" onclick="submitAnswer()">Răspunde →</button></div>`;
    html += `</div>`;
    document.getElementById('test-question').innerHTML = html;
}

let selectedOption = null;
function selectOption(btn, opt) {
    document.querySelectorAll('.test-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedOption = opt;
}

function submitAnswer() {
    const q = testData[currentTestIndex];
    let userAnswer = '';
    if (q.type === 'mc') {
        userAnswer = selectedOption || '';
    } else {
        const inp = document.getElementById('test-input');
        userAnswer = inp ? inp.value : '';
    }

    const ok = testAnswerMatches(q, userAnswer);
    if (ok) testScore++;
    testAnswers.push({ q, userAnswer, ok });
    selectedOption = null;
    currentTestIndex++;

    if (currentTestIndex < testData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('test-question').style.display = 'none';
    document.getElementById('test-result').style.display = 'block';
    const total = testData.length;
    const pct = Math.round((testScore / total) * 100);
    let medal = '🥉';
    if (pct >= 90) medal = '🏆';
    else if (pct >= 75) medal = '🥇';
    else if (pct >= 60) medal = '🥈';

    let html = `<div class="test-result-card">
        <h3>${medal} Rezultat final: ${testScore} / ${total} (${pct}%)</h3>
        <p style="color:#6b7280; margin: 12px 0;">${pct >= 90 ? 'Felicitări! Ești expertă la Possessivpronomen.' : pct >= 75 ? 'Foarte bine! Mai exersezi puțin la capcane și ești perfectă.' : pct >= 60 ? 'Bun început. Reia teoria și încearcă din nou.' : 'Mai e nevoie de practică. Recitește tabelul și flashcards-urile.'}</p>
        <h4 style="margin-top:18px; color:#065f46;">📋 Recapitulare răspunsuri:</h4>
        <div class="test-review">`;
    testAnswers.forEach((a, i) => {
        const status = a.ok ? '✅' : '❌';
        const userShown = a.userAnswer ? `<em>(răspunsul tău: ${a.userAnswer})</em>` : '<em>(nu ai răspuns)</em>';
        html += `<div class="test-review-item ${a.ok ? 'correct' : 'incorrect'}">
            <strong>${status} ${i + 1}.</strong> ${a.q.question}<br>
            <small>Corect: <strong>${a.q.correct}</strong> ${a.ok ? '' : userShown}</small>
        </div>`;
    });
    html += `</div>
        <button class="test-submit" style="margin-top: 20px;" onclick="startTest()">🔁 Reia testul</button>
    </div>`;
    document.getElementById('test-result').innerHTML = html;
}
