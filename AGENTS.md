# AGENTS.md — zbierka receptov

Statický web so zbierkou receptov, ktoré chodia cez Signal (linky, screenshoty, text).
Žiadny build systém, žiadne závislosti — čisté HTML + JS, nasadené na GitHub Pages.

## Štruktúra

```
recepty/
├── index.html          # prehľad: vyhľadávanie, fazetové filtre, nákupný zoznam, obľúbené
├── data.js             # VŠETKY dáta receptov (pole RECEPTY) + SLOVNIK + STAVY
├── kategorie.json      # kontrolovaný slovník kategórií (zdroj pravdy, zrkadlí SLOVNIK v data.js)
├── generator.py        # generátor detailných stránok — použi pri dávkach (viď nižšie)
├── manifest.json       # PWA manifest (nemeniť bez dôvodu)
├── sw.js               # service worker — offline cache; pri zásadnej zmene štruktúry zdvihni CACHE verziu
├── img/                # ikony PWA + lokálne uložené fotky receptov
├── AGENTS.md           # tento súbor
└── <id-receptu>.html   # detailná stránka, jedna na recept
```

## Ako pridať recept

Vstupom môže byť: URL blogu, URL videa (Instagram/YouTube/TikTok), screenshot,
fotka alebo text. Postup:

1. **Extrahuj dáta.** Extrahuj: názov, suroviny (s množstvami), postup po krokoch,
   čas, porcie, fotku, autora/zdroj. Podľa typu vstupu:
   - **URL blogu/webu**: preferuj schema.org/Recipe (JSON-LD), inak parsuj obsah stránky.
   - **URL videa (Instagram, YouTube, TikTok…)**: recept býva v popisku videa —
     skús ho fetchnúť. Instagram a TikTok často fetch nepustia (login wall);
     vtedy si od používateľa vypýtaj screenshot popisku alebo skopírovaný text.
     Ak popisok odkazuje na blog, choď na blog a spracuj ten (do `url` daj blog,
     do `video` odkaz na video).
   - **Recept len vo videu (bez textu)**: video neviem pozrieť — vypýtaj si
     screenshoty kľúčových záberov (suroviny, kroky) alebo stručný prepis.
   - **Screenshot/fotka**: prečítaj vision-om. Fotku ulož do `img/<id>.jpg`
     a použi ako hero obrázok.
2. **Prelož do slovenčiny** — platí aj pre anglické a české recepty (názvy,
   suroviny, kroky). Zachovaj pôvodné množstvá a jednotky; pri anglických
   prepočítaj imperiálne jednotky (cups, oz, °F) na metrické (ml/g, °C)
   a pôvodný údaj nechaj v zátvorke. Pôvodný názov a kľúčové anglické
   výrazy pridaj do `hladanie`.
3. **Zaraď do kategórií — VÝHRADNE z `kategorie.json`:**
   - `chod`: presne jedna hodnota
   - `dieta`, `surovina` (1–2 hlavné), `prakticke`: polia, môžu byť prázdne
   - Nikdy nevymýšľaj nové hodnoty ani varianty ("polievka" vs "polievky").
     Novú kategóriu pridaj do slovníka len na výslovnú žiadosť používateľa,
     alebo keď sa nazbierajú 3+ recepty, ktoré nikam nesedia — a vtedy ju
     pridaj do `kategorie.json` AJ do `SLOVNIK` v `data.js`.
4. **Pridaj objekt do `RECEPTY` v `data.js`.** Formát pozri na existujúcich záznamoch. Polia:
   - `id`: kebab-case slug názvu (bez diakritiky), zhodný s názvom HTML súboru
   - `stav`: lifecycle receptu — nový recept dostáva vždy `"nové"`. Na `"vyskúšané"`
     alebo `"osvedčené"` ho mení len používateľ (žiadosťou typu "housky sme skúšali,
     označ ich"). Povolené hodnoty sú v STAVY v data.js.
   - `cas`: celkový čas v minútach (číslo), `porcie`: text
   - `suroviny`: `[{t: "500 g zemiakov"}, {t: "soľ", s: true}]` — `s: true` označuje
     bežnú surovinu zo špajze (soľ, voda, olej, korenie…), tá sa do nákupného
     zoznamu pre Rohlík pridáva len voliteľne
   - `hladanie`: kľúčové slová navyše pre fulltext (synonymá, CZ/EN výrazy z originálu)
   - `pridane`: dátum spracovania YYYY-MM-DD, `url`: originál, `zdroj`: doména
     (pri Instagrame `instagram.com/<autor>`)
   - `video` (voliteľné): URL videa (reel, YouTube…), ak recept pochádza z videa
     alebo ho video dopĺňa. Na detailnej stránke zobraz vedľa zdroja link
     "▶️ pozrieť video".
   - `jazykOriginalu` (voliteľné): uveď ak nie je CZ/SK, napr. `"en"`
5. **Vytvor detailnú stránku `<id>.html`.** Pri 2+ receptoch naraz VŽDY použi
   `generator.py`: sprav JSON dávku (pole objektov — polia ako v data.js plus
   `emoji`, `lead`, `fakty`, `kroky`, `tipy`, `metaAutor`, `zdrojText`; vzor
   v hlavičke skriptu) a spusti `python3 generator.py davka.json`. Vygeneruje
   stránky, placeholder obrázky aj vloží záznamy do data.js s kontrolou duplicít.
   Pri jednom recepte môžeš stránku spraviť aj ručne: Skopíruj štruktúru existujúcej stránky
   (napr. `spanielska-zemiakova-omeleta.html`) vrátane CSS a skriptov na konci.
   Vymeň: title, h1, OG meta tagy (og:title, og:description, og:image — kvôli
   náhľadom pri zdieľaní cez Signal/WhatsApp), meta riadok, tagy, hero obrázok,
   lead, facts, suroviny (checkboxy), kroky postupu, tipy (ak sú), zdrojový link.
   Nič iné nemeň.
6. **Over pred commitom:**
   - `node --check` na `data.js` aj na `<script>` bloky
   - každý `id` v RECEPTY má existujúci `<id>.html` a naopak
   - všetky kategórie receptu existujú v slovníku
   - detailná stránka má funkčný link späť na `index.html` a link na originál

## Konvencie

- Jazyk obsahu: slovenčina. Kód a komentáre: slovenčina.
- Dizajn: nemeniť bez žiadosti. Farby cez CSS premenné v `:root`, serif Georgia
  na obsah, system-ui na UI prvky. Všetok CSS/JS inline v stránke (žiadne externé
  závislosti, jediná výnimka je zdieľaný `data.js`).
- Fotky: zatiaľ hotlink na originál (pole `obrazok`). Ak zdroj zanikol alebo je
  fotka zo screenshotu, ulož ju do `img/<id>.jpg` a odkazuj relatívne.
- `noindex` meta ostáva na všetkých stránkach — web je poloverejný.
- localStorage kľúče `recepty_fav` a `recepty_kosik` nemeniť (stratili by sa
  uložené obľúbené a košíky používateľov).

## Čo nerobiť

- Nezakladať build pipeline, framework ani npm — jednoduchosť je zámer.
- Nemazať ani neprepisovať existujúce recepty bez výslovnej žiadosti.
- Neduplikovať: pred pridaním skontroluj podľa `url` a názvu, či recept už neexistuje.
  Pri duplicite iba doplň chýbajúce údaje k existujúcemu záznamu.

## Nasadenie

GitHub Pages z hlavnej vetvy. Po zmene: commit + push, Pages sa obnoví samo.
Plán do budúcna: GitHub Action, ktorá pri builde stiahne hotlinkované fotky do `img/`.
