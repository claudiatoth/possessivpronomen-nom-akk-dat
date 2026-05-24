// ============================================
// EXERCISES — Possessivpronomen Nom + Akk + Dat
// 7 exerciții × 10 itemi = 70 itemi
// ============================================

function normalizeAnswer(s) {
    if (!s) return '';
    return s.toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

// Helper care acceptă fragment SAU propoziție completă
function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    // Curăță hint-urile din paranteză din sentence dacă există
    const sentenceClean = (item.sentence || '').replace(/\s*\([^)]*\)\s*/g, ' ');
    return item.accept.some(a => {
        const aNorm = normalizeAnswer(a);
        if (aNorm === u) return true;
        // Acceptă și propoziția completă cu răspunsul inserat
        const fullSentence = sentenceClean.replace(/_+/g, a);
        if (normalizeAnswer(fullSentence) === u) return true;
        return false;
    });
}

// ============================================
// EX 1: Multiple choice — sein sau ihr? (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Florian liest ____ Buch.', translation: 'Florian (el) citește cartea LUI.', correct: 'sein', accept: ['sein'], hint: 'sein / ihr / Ihr' },
    { id: 'b', sentence: 'Carolina ruft ____ Bruder an.', translation: 'Carolina (ea) îl sună pe fratele EI.', correct: 'ihren', accept: ['ihren'], hint: 'seinen / ihren / Ihren' },
    { id: 'c', sentence: 'Das Kind sucht ____ Mutter.', translation: 'Copilul (es) o caută pe mama LUI.', correct: 'seine', accept: ['seine'], hint: 'seine / ihre / Ihre' },
    { id: 'd', sentence: 'Mihai und Andreea grüßen ____ Eltern.', translation: 'Mihai și Andreea (ei) îi salută pe părinții LOR.', correct: 'ihre', accept: ['ihre'], hint: 'seine / ihre / unsere' },
    { id: 'e', sentence: 'Frau Bauer, ist das ____ Auto?', translation: 'Doamnă Bauer, e mașina Dvs.?', correct: 'Ihr', accept: ['Ihr'], hint: 'ihr / Ihr / euer' },
    { id: 'f', sentence: 'Annette telefoniert mit ____ Schwester.', translation: 'Annette (ea) vorbește la telefon cu sora EI.', correct: 'ihrer', accept: ['ihrer'], hint: 'seiner / ihrer / Ihrer' },
    { id: 'g', sentence: 'Acar arbeitet mit ____ Kollegen.', translation: 'Acar (el) lucrează cu colegii LUI.', correct: 'seinen', accept: ['seinen'], hint: 'seinen / ihren / Ihren' },
    { id: 'h', sentence: 'Das Mädchen vergisst ____ Tasche.', translation: 'Fetița (das Mädchen = es!) își uită geanta.', correct: 'seine', accept: ['seine'], hint: 'seine / ihre / Ihre' },
    { id: 'i', sentence: 'Herr Schmidt, haben Sie ____ Pass dabei?', translation: 'Domnule Schmidt, aveți pașaportul Dvs. la voi?', correct: 'Ihren', accept: ['Ihren'], hint: 'ihren / Ihren / euren' },
    { id: 'j', sentence: 'Die Kinder spielen mit ____ Hunden.', translation: 'Copiii (sie pl) se joacă cu câinii LOR.', correct: 'ihren', accept: ['ihren'], hint: 'seinen / ihren / Ihren' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📚 Alege posesivul corect.</strong><br>Atenție la <em>cine deține</em> (er/sie/es/sie pl/Sie politicoasă) — NU la obiectul deținut.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation} <span style="color:#7c3aed;">· opțiuni: ${it.hint}</span></small><input type="text" id="ex1-${it.id}" placeholder="alege..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 2: Lückentext NOMINATIV (10 itemi)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Das ist ____ Auto. (eu — Annette)', translation: 'Asta e mașina mea.', correct: 'mein', accept: ['mein'] },
    { id: 'b', sentence: '____ Schwester wohnt in Berlin. (tu — Mihai)', translation: 'Sora ta locuiește la Berlin.', correct: 'Deine', accept: ['deine'] },
    { id: 'c', sentence: 'Hier kommt ____ Vater. (Florian — el)', translation: 'Iată că vine tatăl lui.', correct: 'sein', accept: ['sein'] },
    { id: 'd', sentence: 'Wo ist ____ Tasche? (Carolina — ea)', translation: 'Unde e geanta ei?', correct: 'ihre', accept: ['ihre'] },
    { id: 'e', sentence: '____ Lehrerin heißt Annette. (noi)', translation: 'Profesoara noastră se numește Annette.', correct: 'Unsere', accept: ['unsere'] },
    { id: 'f', sentence: 'Wie heißt ____ Bruder? (voi)', translation: 'Cum îl cheamă pe fratele vostru?', correct: 'euer', accept: ['euer'] },
    { id: 'g', sentence: 'Das sind ____ Bücher. (ei/ele — Mihai și Andreea)', translation: 'Acelea sunt cărțile lor.', correct: 'ihre', accept: ['ihre'] },
    { id: 'h', sentence: 'Frau Klein, ____ Termin ist um 10. (Dvs.)', translation: 'Doamnă Klein, programarea Dvs. e la 10.', correct: 'Ihr', accept: ['Ihr'] },
    { id: 'i', sentence: '____ Eltern wohnen in Köln. (voi)', translation: 'Părinții voștri locuiesc în Köln.', correct: 'Eure', accept: ['eure'] },
    { id: 'j', sentence: '____ Hund heißt Bello. (Mihai — el)', translation: 'Câinele lui se numește Bello.', correct: 'Sein', accept: ['sein'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📚 Completează cu posesivul corect la NOMINATIV.</strong><br>Indiciu: pronumele personal e între paranteze.</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="scrie..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 3: Lückentext AKKUSATIV (10 itemi)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Ich rufe ____ Bruder an. (eu)', translation: 'Îl sun pe fratele meu.', correct: 'meinen', accept: ['meinen'] },
    { id: 'b', sentence: 'Suchst du ____ Schlüssel? (tu)', translation: 'Îți cauți cheia (de la casă)?', correct: 'deinen', accept: ['deinen'] },
    { id: 'c', sentence: 'Florian besucht ____ Großvater. (el)', translation: 'Florian își vizitează bunicul.', correct: 'seinen', accept: ['seinen'] },
    { id: 'd', sentence: 'Carolina liebt ____ Hund. (ea)', translation: 'Carolina își iubește câinele.', correct: 'ihren', accept: ['ihren'] },
    { id: 'e', sentence: 'Das Kind sucht ____ Spielzeug. (es)', translation: 'Copilul își caută jucăria.', correct: 'sein', accept: ['sein'] },
    { id: 'f', sentence: 'Wir treffen ____ Freunde heute. (noi)', translation: 'Ne întâlnim cu prietenii noștri astăzi.', correct: 'unsere', accept: ['unsere'] },
    { id: 'g', sentence: 'Habt ihr ____ Pass dabei? (voi)', translation: 'Aveți pașaportul vostru la voi?', correct: 'euren', accept: ['euren'] },
    { id: 'h', sentence: 'Mihai und Andreea grüßen ____ Lehrer. (ei)', translation: 'Mihai și Andreea își salută profesorul.', correct: 'ihren', accept: ['ihren'] },
    { id: 'i', sentence: 'Annette korrigiert ____ Schüler. (ea — mai mulți elevi)', translation: 'Annette își corectează elevii.', correct: 'ihre', accept: ['ihre'] },
    { id: 'j', sentence: 'Frau Klein, haben Sie ____ Auto? (Dvs.)', translation: 'Doamnă Klein, aveți mașina Dvs.?', correct: 'Ihr', accept: ['Ihr'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📚 Completează cu posesivul corect la AKKUSATIV.</strong><br>🎯 Atenție: doar masculinul primește -en! Restul = la fel ca Nominativul.</div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex3-${it.id}" placeholder="scrie..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 4: Lückentext DATIV (10 itemi)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Mit ____ Vater fahre ich in Urlaub. (eu)', translation: 'Plec în vacanță cu tatăl meu.', correct: 'meinem', accept: ['meinem'] },
    { id: 'b', sentence: 'Spielst du mit ____ Bruder? (tu)', translation: 'Te joci cu fratele tău?', correct: 'deinem', accept: ['deinem'] },
    { id: 'c', sentence: 'Florian wohnt bei ____ Eltern. (el — pl)', translation: 'Florian locuiește la părinții lui.', correct: 'seinen', accept: ['seinen'] },
    { id: 'd', sentence: 'Carolina geht zu ____ Freundin. (ea)', translation: 'Carolina merge la prietena ei.', correct: 'ihrer', accept: ['ihrer'] },
    { id: 'e', sentence: 'Wir helfen ____ Nachbarin. (noi)', translation: 'Noi o ajutăm pe vecina noastră.', correct: 'unserer', accept: ['unserer'] },
    { id: 'f', sentence: 'Kommt ihr mit ____ Onkel? (voi)', translation: 'Veniți cu unchiul vostru?', correct: 'eurem', accept: ['eurem'] },
    { id: 'g', sentence: 'Mihai und Andreea reisen mit ____ Kindern. (ei — pl)', translation: 'Mihai și Andreea călătoresc cu copiii lor.', correct: 'ihren', accept: ['ihren'] },
    { id: 'h', sentence: 'Das Kind spielt mit ____ Mutter. (es)', translation: 'Copilul se joacă cu mama lui.', correct: 'seiner', accept: ['seiner'] },
    { id: 'i', sentence: 'Frau Bauer, kommen Sie mit ____ Hund? (Dvs.)', translation: 'Doamnă Bauer, veniți cu câinele Dvs.?', correct: 'Ihrem', accept: ['Ihrem'] },
    { id: 'j', sentence: 'Ich gratuliere ____ Schwester. (eu)', translation: 'O felicit pe sora mea.', correct: 'meiner', accept: ['meiner'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📚 Completează cu posesivul corect la DATIV.</strong><br>🎯 Schema: m/n → -em · f → -er · pl → -en. NU confunda cu Akkusativ -en (masculin)!</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="scrie..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 5: Transformare Nom → Akk → Dat (10 itemi, 3 căsuțe per item)
// ============================================
const ex5Data = [
    { id: 'a', base: 'mein Vater', nom: 'Mein Vater ist nett.', akk: 'Ich sehe ____ Vater.', dat: 'Ich helfe ____ Vater.', akkAccept: ['meinen'], datAccept: ['meinem'], translation: 'tatăl meu (Nom → Akk → Dat)' },
    { id: 'b', base: 'dein Bruder', nom: 'Dein Bruder kommt heute.', akk: 'Ich rufe ____ Bruder an.', dat: 'Ich gebe ____ Bruder ein Buch.', akkAccept: ['deinen'], datAccept: ['deinem'], translation: 'fratele tău' },
    { id: 'c', base: 'sein Hund', nom: 'Sein Hund schläft.', akk: 'Florian füttert ____ Hund.', dat: 'Florian spielt mit ____ Hund.', akkAccept: ['seinen'], datAccept: ['seinem'], translation: 'câinele lui (Florian)' },
    { id: 'd', base: 'ihre Mutter', nom: 'Ihre Mutter wohnt in Köln.', akk: 'Carolina besucht ____ Mutter.', dat: 'Carolina telefoniert mit ____ Mutter.', akkAccept: ['ihre'], datAccept: ['ihrer'], translation: 'mama ei (Carolina)' },
    { id: 'e', base: 'unser Lehrer', nom: 'Unser Lehrer ist freundlich.', akk: 'Wir grüßen ____ Lehrer.', dat: 'Wir danken ____ Lehrer.', akkAccept: ['unseren'], datAccept: ['unserem'], translation: 'profesorul nostru' },
    { id: 'f', base: 'euer Onkel', nom: 'Euer Onkel kommt morgen.', akk: 'Ihr trefft ____ Onkel.', dat: 'Ihr fahrt mit ____ Onkel.', akkAccept: ['euren'], datAccept: ['eurem'], translation: 'unchiul vostru' },
    { id: 'g', base: 'meine Schwester', nom: 'Meine Schwester studiert.', akk: 'Ich frage ____ Schwester.', dat: 'Ich helfe ____ Schwester.', akkAccept: ['meine'], datAccept: ['meiner'], translation: 'sora mea' },
    { id: 'h', base: 'ihr Kind', nom: 'Ihr Kind ist klein.', akk: 'Sie liebt ____ Kind.', dat: 'Sie spielt mit ____ Kind.', akkAccept: ['ihr'], datAccept: ['ihrem'], translation: 'copilul ei' },
    { id: 'i', base: 'unsere Eltern', nom: 'Unsere Eltern wohnen weit.', akk: 'Wir besuchen ____ Eltern.', dat: 'Wir schreiben ____ Eltern eine Mail.', akkAccept: ['unsere'], datAccept: ['unseren'], translation: 'părinții noștri (plural!)' },
    { id: 'j', base: 'Ihr Pass (Sie politicoasă)', nom: 'Ihr Pass ist abgelaufen.', akk: 'Bitte zeigen Sie ____ Pass.', dat: 'Was steht in ____ Pass?', akkAccept: ['Ihren'], datAccept: ['Ihrem'], translation: 'pașaportul Dvs.' }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📚 Transformă: Nom → Akk → Dat.</strong><br>Pornești de la propoziția-bază (Nom) și completezi căsuțele Akkusativ și Dativ.</div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group">
            <label><strong>Bază (Nom):</strong> ${it.nom}</label>
            <small class="translation-hint">💬 ${it.translation}</small>
            <div style="margin:6px 0;"><span style="color:#047857; font-weight:600;">Akkusativ:</span> ${it.akk.replace('____', '<input type="text" id="ex5-' + it.id + '-akk" style="width:120px; display:inline-block;" placeholder="Akk...">')}</div>
            <div style="margin:6px 0;"><span style="color:#047857; font-weight:600;">Dativ:</span> ${it.dat.replace('____', '<input type="text" id="ex5-' + it.id + '-dat" style="width:120px; display:inline-block;" placeholder="Dat...">')}</div>
        </div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length * 2;
    ex5Data.forEach(it => {
        const akkInp = document.getElementById(`ex5-${it.id}-akk`);
        const datInp = document.getElementById(`ex5-${it.id}-dat`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const akkU = normalizeAnswer(akkInp.value);
        const datU = normalizeAnswer(datInp.value);
        const akkOk = it.akkAccept.some(a => normalizeAnswer(a) === akkU);
        const datOk = it.datAccept.some(a => normalizeAnswer(a) === datU);
        if (akkOk) correct++;
        if (datOk) correct++;
        const allOk = akkOk && datOk;
        fb.className = allOk ? 'feedback correct' : 'feedback incorrect';
        fb.innerHTML = `Akk: <strong>${it.akkAccept[0]}</strong> ${akkOk ? '✓' : '✗'} · Dat: <strong>${it.datAccept[0]}</strong> ${datOk ? '✓' : '✗'}`;
    });
    return { correct, total };
}

// ============================================
// EX 6: Spot-the-mistake (10 itemi)
// ============================================
const ex6Data = [
    { id: 'a', wrong: 'Florian hat sein Schwester verloren.', correct: 'seine', explanation: 'Schwester e feminin → seine (+e)', accept: ['seine'] },
    { id: 'b', wrong: 'Wir suchen euere Eltern.', correct: 'eure', explanation: '-e- intern din euer dispare la pl/fem → eure (NU euere)', accept: ['eure'] },
    { id: 'c', wrong: 'Carolina spricht mit ihrer Bruder.', correct: 'ihrem', explanation: 'Bruder e masculin Dat → ihrem (NU ihrer)', accept: ['ihrem'] },
    { id: 'd', wrong: 'Annette grüßt sein Schüler.', correct: 'ihre', explanation: 'Annette = ea → ihr- (NU sein-) · Schüler aici e pl → ihre', accept: ['ihre'] },
    { id: 'e', wrong: 'Das Kind spielt mit sein Hund.', correct: 'seinem', explanation: 'Hund masculin Dat → seinem (NU sein)', accept: ['seinem'] },
    { id: 'f', wrong: 'Ich rufe meiner Vater an.', correct: 'meinen', explanation: 'anrufen + Akk → masculin -en (NU Dat -er!)', accept: ['meinen'] },
    { id: 'g', wrong: 'Habt ihr euer Tasche?', correct: 'eure', explanation: 'Tasche feminin Akk → eure (-e- topit)', accept: ['eure'] },
    { id: 'h', wrong: 'Sie wohnt bei ihrer Eltern.', correct: 'ihren', explanation: 'Eltern e PLURAL Dat → ihren (NU ihrer feminin)', accept: ['ihren'] },
    { id: 'i', wrong: 'Mihai besucht seiner Großmutter.', correct: 'seine', explanation: 'Großmutter feminin Akk → seine (NU seiner Dat)', accept: ['seine'] },
    { id: 'j', wrong: 'Frau Müller, ist das ihr Auto?', correct: 'Ihr', explanation: 'Forma politicoasă Sie → Ihr cu MAJUSCULĂ', accept: ['Ihr'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📚 Găsește greșeala și corectează.</strong><br>Scrie DOAR posesivul corect (NU toată propoziția).</div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group">
            <label style="text-decoration: line-through; color:#dc2626;">${it.wrong}</label>
            <small class="translation-hint" style="color:#047857;">✏️ Scrie forma CORECTĂ (doar posesivul)</small>
            <input type="text" id="ex6-${it.id}" placeholder="forma corectă...">
        </div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const u = normalizeAnswer(inp.value);
        const ok = it.accept.some(a => normalizeAnswer(a) === u);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.innerHTML = `Corect: <strong>${it.correct}</strong> — ${it.explanation}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 7: Recompune propoziția (10 itemi)
// ============================================
const ex7Data = [
    { id: 'a', words: 'unseren · wir · sehen · Lehrer', correct: 'Wir sehen unseren Lehrer.', accept: ['Wir sehen unseren Lehrer.', 'wir sehen unseren lehrer'], translation: 'Îl vedem pe profesorul nostru.' },
    { id: 'b', words: 'mein · Bruder · heißt · Florian', correct: 'Mein Bruder heißt Florian.', accept: ['Mein Bruder heißt Florian.', 'mein bruder heisst florian'], translation: 'Fratele meu se numește Florian.' },
    { id: 'c', words: 'mit · spielt · Hund · seinem · Mihai', correct: 'Mihai spielt mit seinem Hund.', accept: ['Mihai spielt mit seinem Hund.', 'mihai spielt mit seinem hund'], translation: 'Mihai se joacă cu câinele lui.' },
    { id: 'd', words: 'eure · sind · Eltern · freundlich', correct: 'Eure Eltern sind freundlich.', accept: ['Eure Eltern sind freundlich.', 'eure eltern sind freundlich'], translation: 'Părinții voștri sunt prietenoși.' },
    { id: 'e', words: 'Carolina · ihren · ruft · Bruder · an', correct: 'Carolina ruft ihren Bruder an.', accept: ['Carolina ruft ihren Bruder an.', 'carolina ruft ihren bruder an'], translation: 'Carolina îl sună pe fratele ei.' },
    { id: 'f', words: 'gratuliere · meiner · ich · Schwester', correct: 'Ich gratuliere meiner Schwester.', accept: ['Ich gratuliere meiner Schwester.', 'ich gratuliere meiner schwester'], translation: 'O felicit pe sora mea.' },
    { id: 'g', words: 'Sie · Auto · ist · Ihr · das · Frau Bauer', correct: 'Frau Bauer, ist das Ihr Auto?', accept: ['Frau Bauer, ist das Ihr Auto?', 'frau bauer ist das ihr auto', 'frau bauer ist das ihr auto?'], translation: 'Doamnă Bauer, e asta mașina Dvs.?' },
    { id: 'h', words: 'mit · fährt · Andreea · ihrer · Freundin · Mihai', correct: 'Andreea fährt mit ihrer Freundin Mihai.', accept: ['Andreea fährt mit ihrer Freundin Mihai.', 'andreea faehrt mit ihrer freundin mihai'], hint: '(Andreea pleacă cu prietena ei Mihai)', translation: 'Andreea pleacă cu Mihai (prietenul ei).' },
    { id: 'i', words: 'Vater · besucht · seinen · Florian', correct: 'Florian besucht seinen Vater.', accept: ['Florian besucht seinen Vater.', 'florian besucht seinen vater'], translation: 'Florian își vizitează tatăl.' },
    { id: 'j', words: 'sind · meine · wo · Bücher', correct: 'Wo sind meine Bücher?', accept: ['Wo sind meine Bücher?', 'wo sind meine buecher', 'wo sind meine buecher?'], translation: 'Unde îmi sunt cărțile?' }
];

function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📚 Recompune propoziția corect.</strong><br>Cuvintele sunt amestecate, separate cu „·". Aranjează-le în ordinea corectă (atenție la majuscule și punctuație).</div>';
    ex7Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group">
            <label><strong>Cuvinte:</strong> ${it.words}</label>
            <small class="translation-hint">💬 ${it.translation}</small>
            <input type="text" id="ex7-${it.id}" placeholder="scrie propoziția...">
        </div><div class="feedback" id="ex7-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx7() {
    let correct = 0; const total = ex7Data.length;
    ex7Data.forEach(it => {
        const inp = document.getElementById(`ex7-${it.id}`); const fb = document.getElementById(`ex7-f${it.id}`);
        const u = normalizeAnswer(inp.value);
        const ok = it.accept.some(a => normalizeAnswer(a) === u);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
