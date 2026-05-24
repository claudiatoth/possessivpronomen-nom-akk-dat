// PDF BUILDER — Possessivpronomen Nom + Akk + Dat
// Atelier A2 · Claudia Toth · Annettes Deutschkurs
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildCast() + buildTheory() + buildExercises() + buildFlashcards() + buildVerbs();
    }

    function buildVerbs() {
        if (typeof verbsHTML !== 'string') return '';
        return '<h1 class="chapter new-section">🔁 4. Verbe — Akkusativ-magneți + Dativ-magneți</h1>' + verbsHTML;
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs"</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · ich / sie</div></div>
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Studentă · sie</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · du / er</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · er</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Fotografă · sie</div></div>
                <div class="cast-card"><img src="images/acar.png" alt="Acar"><div class="name">Acar</div><div class="detail">Maistru · er</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        // Curăță audio buttons + lesson-audio divs (anchor obligatoriu </span></div>)
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        // Înlocuiește sub-section-header cu h2 chapter
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*style="display:none;"[^>]*>/g, '<div>');
        // Stiluri theory-box
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fffbeb[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        return '<h1 class="chapter">📘 1. Teorie — Possessivpronomen complet</h1>' + t;
    }

    function buildExercises() {
        let html = '<h1 class="chapter new-section">✏️ 2. Exerciții — 7 × 10 itemi = 70 itemi</h1>';

        html += '<div class="ex-block"><h3>Übung 1 — sein sau ihr? Cine deține?</h3>' +
            '<div class="instruction">Alege posesivul corect. Atenție la cine deține (er/sie/es/sie pl/Sie politicoasă).</div>' +
            '<table><thead><tr><th style="width:60%">Propoziție</th><th>Răspuns</th></tr></thead><tbody>';
        ex1Data.forEach((it, i) => {
            html += `<tr><td>${i + 1}. ${it.sentence}<br><em style="color:#6b7280; font-size:9pt;">${it.translation}</em></td><td class="verb">${it.correct}</td></tr>`;
        });
        html += '</tbody></table></div>';

        html += '<div class="ex-block"><h3>Übung 2 — Lückentext Nominativ</h3>' +
            '<div class="instruction">Completează cu posesivul corect la NOMINATIV (subiect — wer? was?).</div>' +
            '<table><thead><tr><th style="width:60%">Propoziție</th><th>Răspuns</th></tr></thead><tbody>';
        ex2Data.forEach((it, i) => {
            html += `<tr><td>${i + 1}. ${it.sentence}<br><em style="color:#6b7280; font-size:9pt;">${it.translation}</em></td><td class="verb">${it.correct}</td></tr>`;
        });
        html += '</tbody></table></div>';

        html += '<div class="ex-block"><h3>Übung 3 — Lückentext Akkusativ</h3>' +
            '<div class="instruction">Completează cu posesivul corect la AKKUSATIV. Doar masculinul primește -en!</div>' +
            '<table><thead><tr><th style="width:60%">Propoziție</th><th>Răspuns</th></tr></thead><tbody>';
        ex3Data.forEach((it, i) => {
            html += `<tr><td>${i + 1}. ${it.sentence}<br><em style="color:#6b7280; font-size:9pt;">${it.translation}</em></td><td class="verb">${it.correct}</td></tr>`;
        });
        html += '</tbody></table></div>';

        html += '<div class="ex-block new-section"><h3>Übung 4 — Lückentext Dativ</h3>' +
            '<div class="instruction">Completează cu posesivul corect la DATIV. Schema: m/n → -em, f → -er, pl → -en.</div>' +
            '<table><thead><tr><th style="width:60%">Propoziție</th><th>Răspuns</th></tr></thead><tbody>';
        ex4Data.forEach((it, i) => {
            html += `<tr><td>${i + 1}. ${it.sentence}<br><em style="color:#6b7280; font-size:9pt;">${it.translation}</em></td><td class="verb">${it.correct}</td></tr>`;
        });
        html += '</tbody></table></div>';

        html += '<div class="ex-block"><h3>Übung 5 — Transformare Nom → Akk → Dat</h3>' +
            '<div class="instruction">Pornind de la propoziția-bază (Nom), completează formele Akk și Dat ale posesivului.</div>' +
            '<table><thead><tr><th style="width:50%">Bază (Nom)</th><th>Akkusativ</th><th>Dativ</th></tr></thead><tbody>';
        ex5Data.forEach((it, i) => {
            html += `<tr><td>${i + 1}. ${it.nom}<br><em style="color:#6b7280; font-size:9pt;">${it.translation}</em></td><td class="verb">${it.akkAccept[0]}</td><td class="verb">${it.datAccept[0]}</td></tr>`;
        });
        html += '</tbody></table></div>';

        html += '<div class="ex-block new-section"><h3>Übung 6 — Spot-the-mistake</h3>' +
            '<div class="instruction">Găsește greșeala din propoziție și scrie forma corectă a posesivului.</div>' +
            '<table><thead><tr><th style="width:40%">Propoziție greșită</th><th>Corect</th><th style="width:35%">Explicație</th></tr></thead><tbody>';
        ex6Data.forEach((it, i) => {
            html += `<tr><td><span style="text-decoration: line-through; color:#dc2626;">${i + 1}. ${it.wrong}</span></td><td class="verb">${it.correct}</td><td style="font-size:9pt; color:#6b7280;">${it.explanation}</td></tr>`;
        });
        html += '</tbody></table></div>';

        html += '<div class="ex-block"><h3>Übung 7 — Recompune propoziția</h3>' +
            '<div class="instruction">Cuvintele sunt amestecate. Recompune propoziția corect.</div>' +
            '<table><thead><tr><th style="width:45%">Cuvinte amestecate</th><th>Propoziție corectă</th></tr></thead><tbody>';
        ex7Data.forEach((it, i) => {
            html += `<tr><td>${i + 1}. ${it.words}<br><em style="color:#6b7280; font-size:9pt;">${it.translation}</em></td><td class="verb">${it.correct}</td></tr>`;
        });
        html += '</tbody></table></div>';

        return html;
    }

    function buildFlashcards() {
        if (typeof flashcardsData === 'undefined') return '';
        let html = '<h1 class="chapter new-section">📇 3. Flashcards — 32 cards</h1>' +
            '<p style="color:#6b7280; font-style:italic; margin-bottom:10px;">Material pentru memorare. 4 categorii × 8 cards: forme brute, Akk masculin, Dat (m/n/f/pl), capcane.</p>' +
            '<table><thead><tr><th style="width:55%">DE</th><th>RO</th></tr></thead><tbody>';
        flashcardsData.forEach((c, i) => {
            html += `<tr><td><strong>${i + 1}.</strong> ${c.de}</td><td style="font-size:9.5pt; color:#6b7280;">${c.ro}</td></tr>`;
        });
        html += '</tbody></table>';
        return html;
    }
})();
