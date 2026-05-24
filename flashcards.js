// ============================================
// FLASHCARDS — Possessivpronomen Nom + Akk + Dat
// 32 fișe · 4 categorii × 8 fișe
// ============================================
const flashcardsData = [
    // ---- Categoria 1: Forme brute Nominativ m/n (8 fișe) ----
    { de: "mein Vater", ro: "tatăl meu (Nom m)", audio: "audio/fc-mein-vater.wav" },
    { de: "dein Bruder", ro: "fratele tău (Nom m)", audio: "audio/fc-dein-bruder.wav" },
    { de: "sein Hund", ro: "câinele lui (Nom m — er deține)", audio: "audio/fc-sein-hund.wav" },
    { de: "ihr Onkel", ro: "unchiul ei (Nom m — sie deține)", audio: "audio/fc-ihr-onkel.wav" },
    { de: "sein Spielzeug", ro: "jucăria lui (Nom n — es deține)", audio: "audio/fc-sein-spielzeug.wav" },
    { de: "unser Lehrer", ro: "profesorul nostru (Nom m)", audio: "audio/fc-unser-lehrer.wav" },
    { de: "euer Vater", ro: "tatăl vostru (Nom m — brut, -e- păstrat)", audio: "audio/fc-euer-vater.wav" },
    { de: "Ihr Termin", ro: "programarea Dvs. (Nom m — politicos)", audio: "audio/fc-ihr-termin.wav" },

    // ---- Categoria 2: Forme Akkusativ masculin -en (8 fișe) ----
    { de: "Ich rufe meinen Bruder an.", ro: "Îl sun pe fratele meu. (Akk m, +en)", audio: "audio/fc-meinen-bruder.wav" },
    { de: "Suchst du deinen Schlüssel?", ro: "Îți cauți cheia? (Akk m, +en)", audio: "audio/fc-deinen-schluessel.wav" },
    { de: "Florian besucht seinen Vater.", ro: "Florian își vizitează tatăl. (Akk m)", audio: "audio/fc-seinen-vater.wav" },
    { de: "Carolina liebt ihren Hund.", ro: "Carolina își iubește câinele. (Akk m — sie deține)", audio: "audio/fc-ihren-hund.wav" },
    { de: "Wir grüßen unseren Lehrer.", ro: "Îl salutăm pe profesorul nostru. (Akk m)", audio: "audio/fc-unseren-lehrer.wav" },
    { de: "Habt ihr euren Pass?", ro: "Aveți pașaportul vostru? (Akk m — -e- topit)", audio: "audio/fc-euren-pass.wav" },
    { de: "Sie hassen ihren Chef.", ro: "Își urăsc șeful. (Akk m — sie pl)", audio: "audio/fc-ihren-chef.wav" },
    { de: "Bitte zeigen Sie Ihren Pass.", ro: "Vă rog arătați pașaportul Dvs. (Akk m)", audio: "audio/fc-ihren-pass-sie.wav" },

    // ---- Categoria 3: Forme Dativ m/n / f / pl (8 fișe) ----
    { de: "Ich helfe meinem Vater.", ro: "Îmi ajut tatăl. (Dat m, +em)", audio: "audio/fc-meinem-vater.wav" },
    { de: "Ich gratuliere meiner Schwester.", ro: "O felicit pe sora mea. (Dat f, +er)", audio: "audio/fc-meiner-schwester.wav" },
    { de: "Florian wohnt bei seinen Eltern.", ro: "Florian locuiește la părinții lui. (Dat pl, +en)", audio: "audio/fc-seinen-eltern.wav" },
    { de: "Carolina spricht mit ihrem Bruder.", ro: "Carolina vorbește cu fratele ei. (Dat m, +em)", audio: "audio/fc-ihrem-bruder.wav" },
    { de: "Das Kind spielt mit seiner Mutter.", ro: "Copilul se joacă cu mama lui. (Dat f — es deține)", audio: "audio/fc-seiner-mutter.wav" },
    { de: "Wir helfen unserer Nachbarin.", ro: "O ajutăm pe vecina noastră. (Dat f)", audio: "audio/fc-unserer-nachbarin.wav" },
    { de: "Ihr fahrt mit eurem Onkel.", ro: "Voi plecați cu unchiul vostru. (Dat m — -e- topit)", audio: "audio/fc-eurem-onkel.wav" },
    { de: "Sie reisen mit ihren Kindern.", ro: "Călătoresc cu copiii lor. (Dat pl, +en)", audio: "audio/fc-ihren-kindern.wav" },

    // ---- Categoria 4: Capcane + forme speciale (8 fișe) ----
    { de: "Annette ruft ihren Sohn an.", ro: "🚨 sein vs ihr — Annette = SIE → ihr- (NU sein-)", audio: "audio/fc-cap-annette.wav" },
    { de: "Das Mädchen sucht seine Mutter.", ro: "🚨 das Mädchen = ES → sein- (chiar dacă în RO am zice „ea")", audio: "audio/fc-cap-maedchen.wav" },
    { de: "Mihai und Andreea grüßen ihre Eltern.", ro: "🚨 ei (pl) → ihr- (NU sein-)", audio: "audio/fc-cap-pl.wav" },
    { de: "eure Mutter (NU euere!)", ro: "🚨 -e- din euer DISPARE când are desinență", audio: "audio/fc-cap-eure.wav" },
    { de: "euren Bruder (Akk m, -e- topit)", ro: "🚨 euer → euren la masculin Akk", audio: "audio/fc-cap-euren.wav" },
    { de: "Frau Müller, ist das Ihr Auto?", ro: "🚨 Sie politicoasă → Ihr cu MAJUSCULĂ", audio: "audio/fc-cap-ihr-sie.wav" },
    { de: "Ich helfe meinem Vater.", ro: "🚨 helfen + DAT (-em), NU Akk (-en)", audio: "audio/fc-cap-helfen.wav" },
    { de: "Wir besuchen unsere Großeltern.", ro: "🚨 besuchen + AKK (+e pl), NU Dat", audio: "audio/fc-cap-besuchen.wav" }
];
