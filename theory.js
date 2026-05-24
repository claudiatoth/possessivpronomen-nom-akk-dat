// ============================================
// THEORY — Possessivpronomen Nom + Akk + Dat
// Atelier A2 · Aprofundare · Annettes Deutschkurs
// ============================================
const theoryHTML = `
<div class="sub-section">
    <div class="sub-section-header" onclick="toggleSubSection(this)">
        <span>1. Ce e posesivul? Recap rapid</span>
        <span class="sub-arrow">▼</span>
    </div>
    <div class="sub-section-content" style="display:none;">
        <div class="theory-box">
            <h4>🎯 Posesivul = cine deține obiectul</h4>
            <p>Posesivul îți spune <strong>cine este proprietarul</strong>. Iese direct din pronumele personal (ich, du, er...) și se modifică după <strong>obiectul deținut</strong> (gen + caz).</p>
        </div>

        <h4 style="color:#065f46; margin-top:14px;">📋 Cele 8 forme brute (fără desinență)</h4>
        <table class="grammar-table">
            <thead><tr><th>Pronume personal</th><th>Posesiv brut</th><th>Exemplu (m/n singular)</th><th>Traducere RO</th></tr></thead>
            <tbody>
                <tr><td><strong>ich</strong> (Annette)</td><td><strong>mein</strong></td><td>mein Bruder</td><td>fratele MEU</td></tr>
                <tr><td><strong>du</strong> (Mihai)</td><td><strong>dein</strong></td><td>dein Vater</td><td>tatăl TĂU</td></tr>
                <tr><td><strong>er</strong> (Florian)</td><td><strong>sein</strong></td><td>sein Hund</td><td>câinele LUI</td></tr>
                <tr><td><strong>sie</strong> (Carolina)</td><td><strong>ihr</strong></td><td>ihr Bruder</td><td>fratele EI</td></tr>
                <tr><td><strong>es</strong> (das Kind)</td><td><strong>sein</strong></td><td>sein Spielzeug</td><td>jucăria LUI (a copilului)</td></tr>
                <tr><td><strong>wir</strong> (noi)</td><td><strong>unser</strong></td><td>unser Lehrer</td><td>profesorul NOSTRU</td></tr>
                <tr><td><strong>ihr</strong> (voi)</td><td><strong>euer</strong></td><td>euer Vater</td><td>tatăl VOSTRU</td></tr>
                <tr><td><strong>sie</strong> (ei/ele)</td><td><strong>ihr</strong></td><td>ihr Onkel</td><td>unchiul LOR</td></tr>
                <tr><td><strong>Sie</strong> (Dvs.)</td><td><strong>Ihr</strong></td><td>Ihr Termin</td><td>programarea Dvs.</td></tr>
            </tbody>
        </table>

        <div class="andreea-note">
            <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
            <div class="andreea-note-content">
                <div class="speaker">Andreea 🇷🇴 zice:</div>
                <em>„În română posesivul se schimbă DUPĂ proprietar: tatăl MEU, mama MEA, frații MEI. În germană se schimbă DUPĂ obiectul deținut: <strong>mein</strong> Vater (m), <strong>meine</strong> Mutter (f), <strong>meine</strong> Brüder (pl). E altă logică — învață-o ca atare."</em>
            </div>
        </div>

        <div class="lesson-audio">
            <button onclick="playAudio('audio/p-mein.wav')">▶</button> <span class="de">mein</span>
            <button onclick="playAudio('audio/p-dein.wav')">▶</button> <span class="de">dein</span>
            <button onclick="playAudio('audio/p-sein.wav')">▶</button> <span class="de">sein</span>
            <button onclick="playAudio('audio/p-ihr.wav')">▶</button> <span class="de">ihr</span>
            <button onclick="playAudio('audio/p-unser.wav')">▶</button> <span class="de">unser</span>
            <button onclick="playAudio('audio/p-euer.wav')">▶</button> <span class="de">euer</span>
        </div>
    </div>
</div>

<div class="sub-section">
    <div class="sub-section-header" onclick="toggleSubSection(this)">
        <span>2. 🎯 REGULA MAGICĂ — desinențele după caz și gen</span>
        <span class="sub-arrow">▼</span>
    </div>
    <div class="sub-section-content" style="display:none;">
        <div class="theory-box" style="background:#dbeafe">
            <h4>💡 Trucul Annette</h4>
            <p>Posesivul se comportă <strong>EXACT ca articolul nehotărât <em>ein/eine</em></strong>. Aceleași desinențe peste tot. Înveți o singură schemă și o aplici la toate cele 9 persoane.</p>
        </div>

        <h4 style="color:#065f46; margin-top:14px;">📋 Schema desinențelor (memorează ASTA!)</h4>
        <table class="grammar-table">
            <thead><tr><th>Caz</th><th>m (masculin)</th><th>n (neutru)</th><th>f (feminin)</th><th>pl (plural)</th></tr></thead>
            <tbody>
                <tr><td><strong>Nominativ</strong></td><td>—</td><td>—</td><td><strong>-e</strong></td><td><strong>-e</strong></td></tr>
                <tr><td><strong>Akkusativ</strong></td><td style="background:#fef3c7"><strong>-en</strong></td><td>—</td><td><strong>-e</strong></td><td><strong>-e</strong></td></tr>
                <tr><td><strong>Dativ</strong></td><td><strong>-em</strong></td><td><strong>-em</strong></td><td><strong>-er</strong></td><td><strong>-en</strong></td></tr>
            </tbody>
        </table>
        <p style="color:#6b7280; font-style:italic; margin-top:6px;">⚠️ Galben = singura modificare reală între Nominativ și Akkusativ (masculin -en). Restul Nom = Akk!</p>

        <div class="example-box">
            <div class="de"><strong>mein</strong> Vater (Nom m, brut) → <strong>meinen</strong> Vater (Akk m, +en) → <strong>meinem</strong> Vater (Dat m, +em)</div>
            <div class="ro">tatăl meu / pe tatăl meu / cu tatăl meu</div>
        </div>
        <div class="example-box">
            <div class="de"><strong>meine</strong> Mutter (Nom f, +e) → <strong>meine</strong> Mutter (Akk f, +e — la fel!) → <strong>meiner</strong> Mutter (Dat f, +er)</div>
            <div class="ro">mama mea / pe mama mea / cu mama mea</div>
        </div>
        <div class="example-box">
            <div class="de"><strong>meine</strong> Eltern (Nom pl, +e) → <strong>meine</strong> Eltern (Akk pl, +e) → <strong>meinen</strong> Eltern (Dat pl, +en)</div>
            <div class="ro">părinții mei / pe părinții mei / cu părinții mei</div>
        </div>

        <div class="theory-box warn-box">
            <h4>⚠️ Atenție capcană vizuală</h4>
            <p>La <strong>masculin</strong>: Akk = <code>-en</code>, Dat = <code>-em</code>. O singură literă diferență! Cursanții confundă des:</p>
            <ul>
                <li>✅ <em>Ich rufe <strong>meinen</strong> Vater an.</em> (Akk: cine? pe cine?)</li>
                <li>✅ <em>Ich helfe <strong>meinem</strong> Vater.</em> (Dat: cu cine? cui?)</li>
                <li>❌ <em>Ich helfe <strong>meinen</strong> Vater.</em> — GREȘIT (helfen cere Dativ!)</li>
            </ul>
        </div>
    </div>
</div>

<div class="sub-section">
    <div class="sub-section-header" onclick="toggleSubSection(this)">
        <span>3. Tabelul complet — Nom + Akk + Dat × 9 persoane</span>
        <span class="sub-arrow">▼</span>
    </div>
    <div class="sub-section-content" style="display:none;">
        <h4 style="color:#065f46;">🅰️ NOMINATIV (subiect — wer? was?)</h4>
        <table class="grammar-table">
            <thead><tr><th></th><th>ich</th><th>du</th><th>er</th><th>sie</th><th>es</th><th>wir</th><th>ihr</th><th>sie/Sie</th></tr></thead>
            <tbody>
                <tr><td><strong>m/n</strong></td><td>mein</td><td>dein</td><td>sein</td><td>ihr</td><td>sein</td><td>unser</td><td>euer</td><td>ihr / Ihr</td></tr>
                <tr><td><strong>f/pl</strong></td><td>meine</td><td>deine</td><td>seine</td><td>ihre</td><td>seine</td><td>unsere</td><td>eure</td><td>ihre / Ihre</td></tr>
            </tbody>
        </table>

        <h4 style="color:#065f46; margin-top:18px;">🅱️ AKKUSATIV (complement direct — wen? was?)</h4>
        <table class="grammar-table">
            <thead><tr><th></th><th>ich</th><th>du</th><th>er</th><th>sie</th><th>es</th><th>wir</th><th>ihr</th><th>sie/Sie</th></tr></thead>
            <tbody>
                <tr style="background:#fef3c7"><td><strong>m</strong></td><td>meinen</td><td>deinen</td><td>seinen</td><td>ihren</td><td>seinen</td><td>unseren</td><td>euren</td><td>ihren / Ihren</td></tr>
                <tr><td><strong>n</strong></td><td>mein</td><td>dein</td><td>sein</td><td>ihr</td><td>sein</td><td>unser</td><td>euer</td><td>ihr / Ihr</td></tr>
                <tr><td><strong>f/pl</strong></td><td>meine</td><td>deine</td><td>seine</td><td>ihre</td><td>seine</td><td>unsere</td><td>eure</td><td>ihre / Ihre</td></tr>
            </tbody>
        </table>
        <p style="color:#92400e; font-style:italic; margin-top:4px;">🟡 Rândul galben = singura schimbare reală! Neutrum și feminin/plural = identice cu Nominativul.</p>

        <h4 style="color:#065f46; margin-top:18px;">©️ DATIV (complement indirect — wem? — cu/la cine?)</h4>
        <table class="grammar-table">
            <thead><tr><th></th><th>ich</th><th>du</th><th>er</th><th>sie</th><th>es</th><th>wir</th><th>ihr</th><th>sie/Sie</th></tr></thead>
            <tbody>
                <tr><td><strong>m/n</strong></td><td>meinem</td><td>deinem</td><td>seinem</td><td>ihrem</td><td>seinem</td><td>unserem</td><td>eurem</td><td>ihrem / Ihrem</td></tr>
                <tr><td><strong>f</strong></td><td>meiner</td><td>deiner</td><td>seiner</td><td>ihrer</td><td>seiner</td><td>unserer</td><td>eurer</td><td>ihrer / Ihrer</td></tr>
                <tr><td><strong>pl</strong></td><td>meinen</td><td>deinen</td><td>seinen</td><td>ihren</td><td>seinen</td><td>unseren</td><td>euren</td><td>ihren / Ihren</td></tr>
            </tbody>
        </table>

        <div class="lesson-audio">
            <button onclick="playAudio('audio/p-meinen.wav')">▶</button> <span class="de">meinen (Akk m)</span>
            <button onclick="playAudio('audio/p-meinem.wav')">▶</button> <span class="de">meinem (Dat m/n)</span>
            <button onclick="playAudio('audio/p-meiner.wav')">▶</button> <span class="de">meiner (Dat f)</span>
            <button onclick="playAudio('audio/p-meine.wav')">▶</button> <span class="de">meine (Nom/Akk f, pl)</span>
        </div>
    </div>
</div>

<div class="sub-section">
    <div class="sub-section-header" onclick="toggleSubSection(this)">
        <span>4. 🚨 Capcana #1 — sein vs ihr (cine deține contează!)</span>
        <span class="sub-arrow">▼</span>
    </div>
    <div class="sub-section-content" style="display:none;">
        <div class="theory-box warn-box">
            <h4>⚠️ Capcana cea mai des întâlnită</h4>
            <p>În germană, posesivul depinde de <strong>cine deține</strong>, NU de obiectul deținut. Mulți cursanți confundă <strong>sein</strong> și <strong>ihr</strong>:</p>
            <ul>
                <li><strong>er</strong> (el) → <strong>sein-</strong> ✅ <em>Florian sucht <strong>seinen</strong> Schlüssel.</em></li>
                <li><strong>sie</strong> (ea sg) → <strong>ihr-</strong> ✅ <em>Carolina sucht <strong>ihren</strong> Schlüssel.</em></li>
                <li><strong>es</strong> (neutru, das Kind, das Mädchen) → <strong>sein-</strong> ✅ <em>Das Kind hat <strong>sein</strong> Spielzeug verloren.</em></li>
                <li><strong>sie</strong> (ei/ele pl) → <strong>ihr-</strong> ✅ <em>Mihai und Andreea grüßen <strong>ihre</strong> Eltern.</em></li>
                <li><strong>Sie</strong> (politicoasă, Dvs.) → <strong>Ihr-</strong> ✅ <em>Frau Bauer, ist das <strong>Ihr</strong> Auto?</em></li>
            </ul>
        </div>

        <div class="example-box">
            <div class="de">🎬 Florian liest <strong>sein</strong> Buch. — Carolina liest <strong>ihr</strong> Buch.</div>
            <div class="ro">Florian (el) → sein · Carolina (ea) → ihr</div>
        </div>
        <div class="example-box">
            <div class="de">🎬 Das Kind sucht <strong>seine</strong> Mutter. (das Kind = es → sein-)</div>
            <div class="ro">ATENȚIE: copilul (das Kind) e NEUTRU în germană → folosește sein- chiar dacă în RO am zice „mama LUI".</div>
        </div>
        <div class="example-box">
            <div class="de">🎬 Annette und Mihai feiern <strong>ihren</strong> Geburtstag. (sie pl → ihr-)</div>
            <div class="ro">Annette + Mihai = ei → ihr- (NU sein!).</div>
        </div>

        <div class="lesson-audio">
            <button onclick="playAudio('audio/cap-sein-florian.wav')">▶</button> <span class="de">Florian liest sein Buch.</span>
            <button onclick="playAudio('audio/cap-ihr-carolina.wav')">▶</button> <span class="de">Carolina liest ihr Buch.</span>
            <button onclick="playAudio('audio/cap-es-kind.wav')">▶</button> <span class="de">Das Kind sucht seine Mutter.</span>
            <button onclick="playAudio('audio/cap-sie-pl.wav')">▶</button> <span class="de">Annette und Mihai feiern ihren Geburtstag.</span>
        </div>

        <div class="andreea-note">
            <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
            <div class="andreea-note-content">
                <div class="speaker">Andreea 🇷🇴 zice:</div>
                <em>„Trucul meu: când văd <strong>sie</strong>, întreb <em>câți?</em>. Una singură (Carolina, Annette, Andreea) → ihr- singular. Mai mulți (Mihai+Andreea) → ihr- plural. Verbul ajută: <strong>sie ist</strong> = una, <strong>sie sind</strong> = mai mulți."</em>
            </div>
        </div>
    </div>
</div>

<div class="sub-section">
    <div class="sub-section-header" onclick="toggleSubSection(this)">
        <span>5. 🚨 Capcana #2 — euer se topește în -e- (eure, euren, eurem)</span>
        <span class="sub-arrow">▼</span>
    </div>
    <div class="sub-section-content" style="display:none;">
        <div class="theory-box warn-box">
            <h4>⚠️ euer + desinență = -e- DISPARE</h4>
            <p>Forma „brute" <strong>euer</strong> are un -e- intern. Când adăugăm desinență, <strong>acel -e- se topește</strong>:</p>
        </div>

        <table class="grammar-table">
            <thead><tr><th>Caz / gen</th><th>Formă completă</th><th>Atenție</th></tr></thead>
            <tbody>
                <tr><td>Nom m</td><td><strong>euer</strong> Vater</td><td>brut, fără desinență → -e- păstrat</td></tr>
                <tr><td>Nom n</td><td><strong>euer</strong> Kind</td><td>brut → -e- păstrat</td></tr>
                <tr><td>Nom/Akk f</td><td><strong>eure</strong> Mutter</td><td>+e → -e- intern TOPIT (NU „euere"!)</td></tr>
                <tr><td>Nom/Akk pl</td><td><strong>eure</strong> Eltern</td><td>+e → -e- topit</td></tr>
                <tr><td>Akk m</td><td><strong>euren</strong> Vater</td><td>+en → -e- topit</td></tr>
                <tr><td>Dat m/n</td><td><strong>eurem</strong> Vater / Kind</td><td>+em → -e- topit</td></tr>
                <tr><td>Dat f</td><td><strong>eurer</strong> Mutter</td><td>+er → -e- topit</td></tr>
                <tr><td>Dat pl</td><td><strong>euren</strong> Eltern</td><td>+en → -e- topit</td></tr>
            </tbody>
        </table>

        <div class="example-box">
            <div class="de">✅ <strong>euer</strong> Vater · <strong>eure</strong> Mutter · <strong>euren</strong> Bruder · <strong>eurem</strong> Vater · <strong>eurer</strong> Mutter</div>
            <div class="ro">tatăl vostru · mama voastră · pe fratele vostru · cu tatăl vostru · cu mama voastră</div>
        </div>
        <div class="example-box">
            <div class="de">❌ GREȘIT: euere Mutter / eueren Bruder / euerem Vater</div>
            <div class="ro">aceste forme NU există în germană standard!</div>
        </div>

        <div class="theory-box" style="background:#dbeafe">
            <h4>🎩 Forma Sie politicoasă (Dvs.) — Ihr / Ihre / Ihren / Ihrem</h4>
            <p>Identică cu „ihr-" (ei/ele) DAR cu MAJUSCULĂ inițială. Folosită când vorbim formal cu cineva.</p>
            <ul>
                <li>Frau Müller, ist das <strong>Ihr</strong> Auto? (Nom n)</li>
                <li>Herr Schmidt, haben Sie <strong>Ihren</strong> Pass dabei? (Akk m)</li>
                <li>Wir gratulieren <strong>Ihrer</strong> Tochter. (Dat f)</li>
            </ul>
        </div>

        <div class="lesson-audio">
            <button onclick="playAudio('audio/cap-euer-vater.wav')">▶</button> <span class="de">euer Vater</span>
            <button onclick="playAudio('audio/cap-eure-mutter.wav')">▶</button> <span class="de">eure Mutter</span>
            <button onclick="playAudio('audio/cap-euren-bruder.wav')">▶</button> <span class="de">euren Bruder</span>
            <button onclick="playAudio('audio/cap-ihr-auto.wav')">▶</button> <span class="de">Ihr Auto (Dvs.)</span>
        </div>
    </div>
</div>
`;
