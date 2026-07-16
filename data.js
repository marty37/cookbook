/* ===== DÁTA RECEPTOV =====
   Nový recept = jeden objekt. Kategórie výhradne zo SLOVNIK (kategorie.json).
   suroviny: t = text, s = špajza (bežná surovina, do nákupného zoznamu len voliteľne) */

const RECEPTY = [
  {
    id: "housky-z-ovsenych-vlociek",
    nazov: "Bezlepkové housky z ovsených vločiek",
    chod: "pečivo",
    dieta: ["bez lepku", "bez vajec", "vegetariánske"],
    surovina: ["ovsené vločky/obilniny", "tvaroh/syr"],
    prakticke: ["z rúry"],
    stav: "nové",
    cas: 120, porcie: "1 plech húsok",
    suroviny: [
      { t: "1 hrnček bezlepkových ovsených vločiek" },
      { t: "½ balenia sušeného droždia" },
      { t: "1 balenie tučného tvarohu" },
      { t: "½ lyžičky soli (himalájska)", s: true },
      { t: "~¼ hrnčeka vlažnej vody", s: true }
    ],
    obrazok: "https://eshop.celiakarna.cz/user/articles/images/housky_ovesne__.jpg",
    zdroj: "celiakarna.cz",
    url: "https://eshop.celiakarna.cz/bezlepkove-recepty/housky-ovesne-vlocky/",
    pridane: "2026-07-16",
    hladanie: "housky ovesné vločky tvaroh droždí kysnuté"
  },
  {
    id: "spanielska-zemiakova-omeleta",
    nazov: "Španielska zemiaková omeleta (tortilla de patatas)",
    chod: "hlavné jedlo",
    dieta: ["bez lepku", "vegetariánske"],
    surovina: ["zemiaky", "vajcia"],
    prakticke: ["jedna panvica/hrniec"],
    stav: "nové",
    cas: 40, porcie: "1 panvica (24–26 cm)",
    suroviny: [
      { t: "500 g zemiakov" },
      { t: "1 veľká biela cibuľa" },
      { t: "5 vajec" },
      { t: "soľ podľa chuti", s: true },
      { t: "olivový olej", s: true }
    ],
    obrazok: "https://varilamysicka.cz/wp-content/uploads/2026/03/IMG_4010-1-scaled-1.jpg",
    zdroj: "varilamysicka.cz",
    url: "https://varilamysicka.cz/zdrave-recepty/spanelska-bramborova-omeleta/",
    pridane: "2026-07-16",
    hladanie: "tortilla de patatas brambory cibule olivový olej tapas"
  }
];

/* ===== KONTROLOVANÝ SLOVNÍK (poradie = poradie zobrazenia) ===== */
const SLOVNIK = {
  chod: ["raňajky/desiata","polievka","hlavné jedlo","príloha","šalát","nátierka","pečivo","dezert/sladké","chuťovka","omáčka/základ"],
  dieta: ["bez lepku","bez laktózy","bez vajec","vegetariánske","vegánske"],
  surovina: ["kuracie","hovädzie/bravčové","ryby","strukoviny","zelenina","zemiaky","cestoviny/ryža","tvaroh/syr","vajcia","ovsené vločky/obilniny","ovocie","čokoláda"],
  prakticke: ["z rúry","jedna panvica/hrniec","na zamrazenie","bez pečenia"]
};

/* ===== STAVY (lifecycle receptu) ===== */
const STAVY = [
  ["nové", "🆕"],          /* spracované, ešte nevarené */
  ["vyskúšané", "🍴"],     /* varené aspoň raz */
  ["osvedčené", "✅"]      /* opakovane funguje, rodinná klasika */
];
