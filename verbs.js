// ============================================
// VERBS — Possessivpronomen Nom + Akk + Dat
// Verbele care „comandă" cazul posesivului: Akk-magneți + Dat-magneți
// ============================================
const verbsHTML = `
<div class="verbs-intro">
    <p>📚 Posesivul ia desinența cazului <strong>cerut de verb</strong>. Învață lista celor mai folosite verbe care cer Akkusativ vs. Dativ — și posesivul tău va fi mereu corect.</p>
</div>

<h3 style="color:#065f46; margin-top:18px;">🅱️ Verbe care cer AKKUSATIV (posesivul ia -en la masculin)</h3>
<table class="grammar-table">
    <thead><tr><th>Verb</th><th>Traducere RO</th><th>Exemplu cu posesiv (Akk)</th></tr></thead>
    <tbody>
        <tr><td class="verb"><strong>haben</strong></td><td>a avea</td><td>Ich habe <strong>meinen</strong> Pass dabei.</td></tr>
        <tr><td class="verb"><strong>sehen</strong></td><td>a vedea</td><td>Florian sieht <strong>seinen</strong> Bruder.</td></tr>
        <tr><td class="verb"><strong>kennen</strong></td><td>a cunoaște</td><td>Kennst du <strong>meinen</strong> Vater?</td></tr>
        <tr><td class="verb"><strong>lieben</strong></td><td>a iubi</td><td>Carolina liebt <strong>ihren</strong> Hund.</td></tr>
        <tr><td class="verb"><strong>besuchen</strong></td><td>a vizita</td><td>Wir besuchen <strong>unseren</strong> Großvater.</td></tr>
        <tr><td class="verb"><strong>suchen</strong></td><td>a căuta</td><td>Annette sucht <strong>ihren</strong> Schlüssel.</td></tr>
        <tr><td class="verb"><strong>anrufen</strong></td><td>a suna (telefon)</td><td>Ich rufe <strong>meinen</strong> Bruder an.</td></tr>
        <tr><td class="verb"><strong>treffen</strong></td><td>a întâlni</td><td>Mihai trifft <strong>seinen</strong> Freund.</td></tr>
        <tr><td class="verb"><strong>fragen</strong></td><td>a întreba</td><td>Ich frage <strong>meinen</strong> Lehrer.</td></tr>
        <tr><td class="verb"><strong>brauchen</strong></td><td>a avea nevoie de</td><td>Ich brauche <strong>meinen</strong> Pass.</td></tr>
    </tbody>
</table>

<h3 style="color:#065f46; margin-top:24px;">©️ Verbe care cer DATIV (posesivul ia -em la m/n, -er la f, -en la pl)</h3>
<table class="grammar-table">
    <thead><tr><th>Verb</th><th>Traducere RO</th><th>Exemplu cu posesiv (Dat)</th></tr></thead>
    <tbody>
        <tr><td class="verb"><strong>helfen</strong></td><td>a ajuta (pe cineva)</td><td>Ich helfe <strong>meinem</strong> Vater. <em>(NU meinen!)</em></td></tr>
        <tr><td class="verb"><strong>danken</strong></td><td>a mulțumi</td><td>Wir danken <strong>unserem</strong> Lehrer.</td></tr>
        <tr><td class="verb"><strong>gratulieren</strong></td><td>a felicita</td><td>Ich gratuliere <strong>meiner</strong> Schwester.</td></tr>
        <tr><td class="verb"><strong>antworten</strong></td><td>a răspunde</td><td>Carolina antwortet <strong>ihrer</strong> Mutter.</td></tr>
        <tr><td class="verb"><strong>gehören</strong></td><td>a aparține</td><td>Das Buch gehört <strong>meinem</strong> Bruder.</td></tr>
        <tr><td class="verb"><strong>gefallen</strong></td><td>a-i plăcea</td><td>Das Geschenk gefällt <strong>meiner</strong> Mutter.</td></tr>
        <tr><td class="verb"><strong>passen</strong></td><td>a se potrivi</td><td>Der Anzug passt <strong>seinem</strong> Vater.</td></tr>
        <tr><td class="verb"><strong>glauben</strong></td><td>a crede (pe cineva)</td><td>Ich glaube <strong>meiner</strong> Schwester.</td></tr>
    </tbody>
</table>

<h3 style="color:#065f46; margin-top:24px;">🔄 Verbe + prepoziție care fixează cazul Dativ</h3>
<table class="grammar-table">
    <thead><tr><th>Verb + prep.</th><th>Traducere RO</th><th>Exemplu cu posesiv (Dat)</th></tr></thead>
    <tbody>
        <tr><td class="verb"><strong>wohnen bei</strong></td><td>a locui la (cineva)</td><td>Florian wohnt bei <strong>seinen</strong> Eltern.</td></tr>
        <tr><td class="verb"><strong>fahren mit</strong></td><td>a merge cu</td><td>Andreea fährt mit <strong>ihrem</strong> Bruder.</td></tr>
        <tr><td class="verb"><strong>sprechen mit</strong></td><td>a vorbi cu</td><td>Annette spricht mit <strong>ihren</strong> Schülern.</td></tr>
        <tr><td class="verb"><strong>spielen mit</strong></td><td>a se juca cu</td><td>Das Kind spielt mit <strong>seinem</strong> Hund.</td></tr>
        <tr><td class="verb"><strong>gehen zu</strong></td><td>a merge la</td><td>Carolina geht zu <strong>ihrer</strong> Freundin.</td></tr>
        <tr><td class="verb"><strong>reisen mit</strong></td><td>a călători cu</td><td>Mihai reist mit <strong>seinen</strong> Kindern.</td></tr>
    </tbody>
</table>

<div class="theory-box warn-box" style="margin-top:20px;">
    <h4>🚨 Capcana cheie: helfen vs. besuchen</h4>
    <p>Cursanții confundă aceste două des — au sens similar în română („a fi cu cineva"), DAR în germană:</p>
    <ul>
        <li><strong>helfen + Dativ</strong>: <em>Ich helfe <strong>meinem</strong> Vater.</em> (a-i ajuta = îi ajut LUI)</li>
        <li><strong>besuchen + Akkusativ</strong>: <em>Ich besuche <strong>meinen</strong> Vater.</em> (a-l vizita = îl vizitez pe EL)</li>
    </ul>
    <p style="margin-top:6px;">Diferența -em vs. -en e CRITICĂ. Memorizează cele 8 verbe Dativ ca o LISTĂ FIXĂ — toate celelalte verbe iau Akkusativ (regula 80%).</p>
</div>

<div class="theory-box" style="background:#dbeafe; margin-top:14px;">
    <h4>💡 Trucul Annette</h4>
    <p>Verbele <strong>cu prepoziție</strong> (wohnen <strong>bei</strong>, fahren <strong>mit</strong>, spielen <strong>mit</strong>...) iau cazul prepoziției. <strong>mit/bei/zu/von/aus/nach/seit</strong> sunt cele 7 prepoziții fixe Dativ (vezi Atelierul Dativ #2). Înveți o singură listă și o aplici la sute de verbe!</p>
</div>
`;
