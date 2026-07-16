/* ===== DÁTA RECEPTOV =====
   Nový recept = jeden objekt. Kategórie výhradne zo SLOVNIK (kategorie.json).
   suroviny: t = text, s = špajza (bežná surovina, do nákupného zoznamu len voliteľne) */

const RECEPTY = [
  {
    "id": "pecene-donuty",
    "nazov": "Domáce pečené donuty s čokoládou",
    "chod": "dezert/sladké",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "vajcia",
      "čokoláda"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 40,
    "porcie": "12 ks",
    "suroviny": [
      {
        "t": "3 vajíčka"
      },
      {
        "t": "50 g cukru",
        "s": true
      },
      {
        "t": "25 ml oleja",
        "s": true
      },
      {
        "t": "125 g bieleho jogurtu"
      },
      {
        "t": "5 g prášku do pečiva"
      },
      {
        "t": "5 g vanilkového cukru"
      },
      {
        "t": "120 g hladkej múky"
      },
      {
        "t": "čokoláda + troška smotany (poleva)"
      },
      {
        "t": "cukríky na ozdobenie"
      }
    ],
    "obrazok": "img/pecene-donuty.jpg",
    "zdroj": "instagram.com/lucia_koren",
    "url": "https://www.instagram.com/reel/Cq-2kKaujgV/",
    "pridane": "2026-07-16",
    "hladanie": "donuty donut šišky pečené jogurt čokoláda cukríky deti",
    "video": "https://www.instagram.com/reel/Cq-2kKaujgV/"
  },
  {
    "id": "mrkva-orzo-kokos",
    "nazov": "Mrkva s orzom a kokosovým mliekom",
    "chod": "hlavné jedlo",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "cestoviny/ryža",
      "zelenina"
    ],
    "prakticke": [
      "jedna panvica/hrniec"
    ],
    "stav": "nové",
    "cas": 25,
    "porcie": "4 porcie (~25 Kč/porcia)",
    "suroviny": [
      {
        "t": "2 PL olivového oleja",
        "s": true
      },
      {
        "t": "3 väčšie mrkvy (~350 g)"
      },
      {
        "t": "200 g orza (cestovinová ryža)"
      },
      {
        "t": "500 ml kuracieho alebo zeleninového vývaru"
      },
      {
        "t": "250 ml kokosového mlieka"
      },
      {
        "t": "300 g mrazeného hrášku"
      },
      {
        "t": "soľ",
        "s": true
      }
    ],
    "obrazok": "img/mrkva-orzo-kokos.jpg",
    "zdroj": "instagram.com/buchtavtroube.cz",
    "url": "https://www.instagram.com/reel/C74VmxIMXlk/",
    "pridane": "2026-07-16",
    "hladanie": "orzo mrkev kokosové mléko hrášek jedna pánev deti buchtavtroube",
    "video": "https://www.instagram.com/reel/C74VmxIMXlk/"
  },
  {
    "id": "obalovany-karfiol-vo-vrecku",
    "nazov": "Obaľovaný karfiol vo vrecku (trik)",
    "chod": "hlavné jedlo",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "zelenina",
      "vajcia"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 40,
    "porcie": "podľa množstva",
    "suroviny": [
      {
        "t": "1 karfiol (surový, rozobratý na malé ružičky)"
      },
      {
        "t": "hladká múka"
      },
      {
        "t": "2–3 vajcia (rozšľahané)"
      },
      {
        "t": "strúhanka"
      },
      {
        "t": "soľ",
        "s": true
      },
      {
        "t": "olej na pečenie/smaženie",
        "s": true
      }
    ],
    "obrazok": "img/obalovany-karfiol-vo-vrecku.jpg",
    "zdroj": "instagram.com/jana_smid_winterova",
    "url": "https://www.instagram.com/reel/CddLM8olg3j/",
    "pridane": "2026-07-16",
    "hladanie": "květák obalovaný sáček trik lifehack smažený karfiol",
    "video": "https://www.instagram.com/reel/CddLM8olg3j/"
  },
  {
    "id": "cestovinove-tacos",
    "nazov": "Cestovinové tacos",
    "chod": "hlavné jedlo",
    "dieta": [],
    "surovina": [
      "hovädzie/bravčové",
      "cestoviny/ryža"
    ],
    "prakticke": [
      "jedna panvica/hrniec"
    ],
    "stav": "nové",
    "cas": 35,
    "porcie": "3 dospelé + 3 detské porcie",
    "suroviny": [
      {
        "t": "250 g mletého hovädzieho mäsa"
      },
      {
        "t": "1 cibuľa"
      },
      {
        "t": "240 g rajčín z plechovky"
      },
      {
        "t": "2 KL rasce"
      },
      {
        "t": "1 KL cesnaku"
      },
      {
        "t": "400 g cestovín"
      },
      {
        "t": "240 g čiernej fazule (prepláchnutej)"
      },
      {
        "t": "140 g kukurice (prepláchnutej)"
      },
      {
        "t": "100 g cheddaru"
      },
      {
        "t": "900 ml vývaru (ak sa cestoviny varia spolu; inak ~150 ml)"
      },
      {
        "t": "masť alebo olej",
        "s": true
      },
      {
        "t": "avokádo a smotana na podávanie"
      }
    ],
    "obrazok": "img/cestovinove-tacos.jpg",
    "zdroj": "instagram.com/bistro_umarty",
    "url": "https://www.instagram.com/reel/DAXrTUGOEMF/",
    "pridane": "2026-07-16",
    "hladanie": "tacos cestoviny mleté mäso fazuľa kukurica one pot bistro umarty",
    "video": "https://www.instagram.com/reel/DAXrTUGOEMF/"
  },
  {
    "id": "kuracie-kung-pao",
    "nazov": "Kuracie Kung Pao ako z bistra",
    "chod": "hlavné jedlo",
    "dieta": [],
    "surovina": [
      "kuracie",
      "zelenina"
    ],
    "prakticke": [
      "jedna panvica/hrniec"
    ],
    "stav": "nové",
    "cas": 35,
    "porcie": "4 porcie",
    "suroviny": [
      {
        "t": "2 kuracie prsia"
      },
      {
        "t": "jazmínová ryža"
      },
      {
        "t": "1 cibuľa"
      },
      {
        "t": "2 strúčiky cesnaku"
      },
      {
        "t": "zelenina: mrkva a pórek (príp. paprika či mrazená čínska zmes)"
      },
      {
        "t": "1 PL kari korenia (príp. korenie na čínu)"
      },
      {
        "t": "1 PL sójovej omáčky"
      },
      {
        "t": "3 dl vody alebo vývaru"
      },
      {
        "t": "1 PL kukuričného škrobu"
      },
      {
        "t": "1 ČL rybej omáčky (voliteľné)"
      },
      {
        "t": "1 PL oleja",
        "s": true
      },
      {
        "t": "soľ, čierne korenie",
        "s": true
      },
      {
        "t": "pražené arašidy a jarná cibuľka na posypanie"
      }
    ],
    "obrazok": "img/kuracie-kung-pao.jpg",
    "zdroj": "instagram.com/foodlover_veru",
    "url": "https://www.instagram.com/reel/DC9FZgIs-2y/",
    "pridane": "2026-07-16",
    "hladanie": "kung pao kuřecí čína bistro rýže arašídy foodlover veru",
    "video": "https://www.instagram.com/reel/DC9FZgIs-2y/"
  },
  {
    "id": "butter-chicken",
    "nazov": "Butter Chicken s domácim naan",
    "chod": "hlavné jedlo",
    "dieta": [],
    "surovina": [
      "kuracie"
    ],
    "prakticke": [
      "jedna panvica/hrniec"
    ],
    "stav": "nové",
    "cas": 40,
    "porcie": "~4 porcie",
    "suroviny": [
      {
        "t": "300–400 g kuracieho mäsa (marináda)"
      },
      {
        "t": "1 PL gréckeho jogurtu (marináda)"
      },
      {
        "t": "1 ČL papriky + 1 ČL granulovaného cesnaku + 1 ČL kari + 1 ČL soli (marináda)"
      },
      {
        "t": "1 PL oleja na opečenie",
        "s": true
      },
      {
        "t": "1 cibuľa (omáčka)"
      },
      {
        "t": "3–4 strúčiky cesnaku (omáčka)"
      },
      {
        "t": "3 PL masla (omáčka)"
      },
      {
        "t": "1 konzerva krájaných rajčín (omáčka)"
      },
      {
        "t": "hrsť kešu namočených aspoň 30 min + 50 ml vody (omáčka)"
      },
      {
        "t": "300 ml smotany na šľahanie (omáčka)"
      },
      {
        "t": "1 PL cukru",
        "s": true
      },
      {
        "t": "1 ČL kari + 1½ ČL garam masala + 1 ČL granulovaného cesnaku (omáčka)"
      },
      {
        "t": "soľ, čierne korenie, petržlenová vňať",
        "s": true
      },
      {
        "t": "1 menší hrnček hladkej múky (naan)"
      },
      {
        "t": "1 menší hrnček gréckeho jogurtu (naan)"
      },
      {
        "t": "½ ČL prášku do pečiva alebo sódy (naan)"
      },
      {
        "t": "maslo na potretie (naan)"
      }
    ],
    "obrazok": "img/butter-chicken.jpg",
    "zdroj": "instagram.com/anetjiskra",
    "url": "https://www.instagram.com/reel/DEfo5c4gBXk/",
    "pridane": "2026-07-16",
    "hladanie": "butter chicken indické kuře naan marináda garam masala kešu anetjiskra",
    "video": "https://www.instagram.com/reel/DEfo5c4gBXk/"
  },
  {
    "id": "dukatove-buchticky",
    "nazov": "Dukátové buchtičky s proteínovým pudingom",
    "chod": "dezert/sladké",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 45,
    "porcie": "4 porcie (447 kcal, 26 g B)",
    "suroviny": [
      {
        "t": "250 g hladkej múky (buchtičky)"
      },
      {
        "t": "250 g odtučneného jemného tvarohu (buchtičky)"
      },
      {
        "t": "12 g kypriaceho prášku (buchtičky)"
      },
      {
        "t": "1 vajce (buchtičky)"
      },
      {
        "t": "25 g masla (buchtičky)"
      },
      {
        "t": "25 g erythritolu alebo iného sladidla (buchtičky)"
      },
      {
        "t": "soľ",
        "s": true
      },
      {
        "t": "5 g repkového oleja na potretie",
        "s": true
      },
      {
        "t": "400 g polotučného mlieka (puding)"
      },
      {
        "t": "1 žĺtok (puding)"
      },
      {
        "t": "30 g vanilkového proteínu (puding)"
      },
      {
        "t": "20 g kukuričného škrobu (puding)"
      },
      {
        "t": "15 g vanilkového cukru alebo sladidla (puding)"
      },
      {
        "t": "vanilková esencia (voliteľné)"
      },
      {
        "t": "~250 ml vody na zriedenie",
        "s": true
      }
    ],
    "obrazok": "img/dukatove-buchticky.jpg",
    "zdroj": "instagram.com/domiskitchendiary",
    "url": "https://www.instagram.com/reel/C4GIDNjq_GY/",
    "pridane": "2026-07-16",
    "hladanie": "dukátové buchtičky puding vanilka protein bez kysnutia tvaroh domiskitchendiary",
    "video": "https://www.instagram.com/reel/C4GIDNjq_GY/"
  },
  {
    "id": "buchty-z-cottage",
    "nazov": "Buchty z cottage cheese s ovocnou plnkou",
    "chod": "dezert/sladké",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr",
      "ovocie"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 110,
    "porcie": "8 ks (1 porcia = 2 ks: 462 kcal, 25 g B)",
    "suroviny": [
      {
        "t": "400 g cottage cheese light (cesto)"
      },
      {
        "t": "1 vajce (cesto)"
      },
      {
        "t": "12 g kypriaceho prášku (cesto)"
      },
      {
        "t": "50 g erythritolu — možno vynechať (cesto)"
      },
      {
        "t": "300 g hladkej špaldovej múky (230 g do cesta + ~70 g na vyvaľkanie)"
      },
      {
        "t": "soľ",
        "s": true
      },
      {
        "t": "245 g mrazených čiernych ríbezlí alebo iného ovocia (plnka)"
      },
      {
        "t": "90 ml vody",
        "s": true
      },
      {
        "t": "10 g chia semiačok (plnka)"
      },
      {
        "t": "15 g čakankového sirupu alebo iného sladidla (plnka)"
      },
      {
        "t": "20 g masla (na vrch)"
      },
      {
        "t": "10 g trstinového práškového cukru (na vrch)"
      }
    ],
    "obrazok": "img/buchty-z-cottage.jpg",
    "zdroj": "instagram.com/domiskitchendiary",
    "url": "https://www.instagram.com/reel/C2w7e9wqe0b/",
    "pridane": "2026-07-16",
    "hladanie": "buchty cottage cheese ríbezle chia plnené špaldová domiskitchendiary",
    "video": "https://www.instagram.com/reel/C2w7e9wqe0b/"
  },
  {
    "id": "ovocne-knedle",
    "nazov": "Ovocné knedle z dvoch surovín",
    "chod": "dezert/sladké",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr",
      "ovocie"
    ],
    "prakticke": [
      "jedna panvica/hrniec"
    ],
    "stav": "nové",
    "cas": 60,
    "porcie": "4 veľké / 8 mini porcií (~16 knedlí)",
    "suroviny": [
      {
        "t": "500 g tvarohu v kocke"
      },
      {
        "t": "200 g detskej krupice (alebo hrubej múky)"
      },
      {
        "t": "štipka soli",
        "s": true
      },
      {
        "t": "jahody, marhule alebo slivky na plnenie"
      },
      {
        "t": "tvrdý tvaroh na posypanie"
      },
      {
        "t": "práškový cukor",
        "s": true
      },
      {
        "t": "rozpustené maslo (1 PL na porciu)"
      }
    ],
    "obrazok": "img/ovocne-knedle.jpg",
    "zdroj": "instagram.com/karolinafour",
    "url": "https://www.instagram.com/reel/DKsJRqlMK7S/",
    "pridane": "2026-07-16",
    "hladanie": "ovocné knedlíky tvaroh krupička jahody meruňky švestky karolinafour",
    "video": "https://www.instagram.com/reel/DKsJRqlMK7S/"
  },
  {
    "id": "zapeceny-chlieb-cottage",
    "nazov": "Zapečený chlieb s cottage a goudou",
    "chod": "raňajky/desiata",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 15,
    "porcie": "1 porcia (334 kcal, 20 g B)",
    "suroviny": [
      {
        "t": "80 g kváskového chleba (1 hrubší plátok)"
      },
      {
        "t": "75 g cottage syra"
      },
      {
        "t": "20 g goudy"
      },
      {
        "t": "jarná cibuľka"
      },
      {
        "t": "oregano",
        "s": true
      },
      {
        "t": "sriracha omáčka na dokvapnutie"
      }
    ],
    "obrazok": "img/zapeceny-chlieb-cottage.jpg",
    "zdroj": "instagram.com/vilgainrecepty",
    "url": "https://www.instagram.com/reel/DOnU5YlDWfY/",
    "pridane": "2026-07-16",
    "hladanie": "zapečený chléb cottage gouda toast sriracha rychlá večeře vilgain",
    "video": "https://www.instagram.com/reel/DOnU5YlDWfY/"
  },
  {
    "id": "brokolicova-polievka",
    "nazov": "Brokolicovo-syrová polievka",
    "chod": "polievka",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "zelenina",
      "tvaroh/syr"
    ],
    "prakticke": [
      "jedna panvica/hrniec"
    ],
    "stav": "nové",
    "cas": 40,
    "porcie": "~6 porcií",
    "suroviny": [
      {
        "t": "2 PL masla"
      },
      {
        "t": "2 stredné cibule"
      },
      {
        "t": "4–5 strúčikov cesnaku"
      },
      {
        "t": "1 celá brokolica"
      },
      {
        "t": "4 stredné zemiaky"
      },
      {
        "t": "4 stredné mrkvy"
      },
      {
        "t": "1 l vývaru (zeleninový alebo kurací)"
      },
      {
        "t": "200 ml smotany 31 %"
      },
      {
        "t": "250 g čedaru"
      },
      {
        "t": "soľ, čierne korenie",
        "s": true
      }
    ],
    "obrazok": "img/brokolicova-polievka.jpg",
    "zdroj": "instagram.com/kacenik",
    "url": "https://www.instagram.com/reel/DGH-EgdMMSd/",
    "pridane": "2026-07-16",
    "hladanie": "brokolicová polévka sýr čedar krémová brokolice kacenik",
    "video": "https://www.instagram.com/reel/DGH-EgdMMSd/"
  },
  {
    "id": "zeleninove-rezance-kokos",
    "nazov": "Zeleninové rezance v kokosovej omáčke",
    "chod": "hlavné jedlo",
    "dieta": [
      "vegánske",
      "vegetariánske"
    ],
    "surovina": [
      "cestoviny/ryža",
      "zelenina"
    ],
    "prakticke": [],
    "stav": "nové",
    "cas": 25,
    "porcie": "2–3 porcie",
    "suroviny": [
      {
        "t": "obľúbené rezance/nudle"
      },
      {
        "t": "1 mrkva (na tenké nudličky)"
      },
      {
        "t": "1 červená paprika (na prúžky)"
      },
      {
        "t": "hrsť brokolicových ružičiek"
      },
      {
        "t": "edamame"
      },
      {
        "t": "1 plechovka kokosového mlieka"
      },
      {
        "t": "2 hrste kešu"
      },
      {
        "t": "2 PL sójovej omáčky"
      },
      {
        "t": "soľ, mletá paprika, rasca, sušený cesnak, chilli",
        "s": true
      },
      {
        "t": "voda podľa potreby",
        "s": true
      }
    ],
    "obrazok": "img/zeleninove-rezance-kokos.jpg",
    "zdroj": "instagram.com/lojdovale",
    "url": "https://www.instagram.com/reel/DRuzoZVDHNY/",
    "pridane": "2026-07-16",
    "hladanie": "zeleninové nudle kokosová omáčka edamame kešu airfryer horkovzdušná fritéza lojdovale",
    "video": "https://www.instagram.com/reel/DRuzoZVDHNY/"
  },
  {
    "id": "syrovo-cesnakovy-snack",
    "nazov": "Syrovo-cesnakový snack",
    "chod": "chuťovka",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 30,
    "porcie": "1 placka",
    "suroviny": [
      {
        "t": "140 g gréckeho jogurtu"
      },
      {
        "t": "3 PL hladkej špaldovej múky"
      },
      {
        "t": "soľ",
        "s": true
      },
      {
        "t": "hrsť mozzarelly (strúhaná)"
      },
      {
        "t": "2 PL cream cheese (žervé)"
      },
      {
        "t": "cesnak podľa chuti"
      },
      {
        "t": "pažítka a jarná cibuľka podľa chuti"
      }
    ],
    "obrazok": "img/syrovo-cesnakovy-snack.jpg",
    "zdroj": "instagram.com/kukucka.pecie",
    "url": "https://www.instagram.com/reel/DZArPERADb0/",
    "pridane": "2026-07-16",
    "hladanie": "syr cesnak snack jogurt špaldová múka mozzarella kukucka pecie",
    "video": "https://www.instagram.com/reel/DZArPERADb0/"
  },
  {
    "id": "cottage-kosicky-cokolada",
    "nazov": "Vláčne košíčky z cottage s čokoládou",
    "chod": "dezert/sladké",
    "dieta": [
      "bez lepku",
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr",
      "čokoláda"
    ],
    "prakticke": [
      "bez pečenia"
    ],
    "stav": "nové",
    "cas": 30,
    "porcie": "7 ks (1 ks ~211 kcal, 9 g B)",
    "suroviny": [
      {
        "t": "130 g cottage syra"
      },
      {
        "t": "130 g mandľovej múky"
      },
      {
        "t": "25 g proteínu (vanilka)"
      },
      {
        "t": "20 g čakankového sirupu"
      },
      {
        "t": "½ ČL vanilkového aroma"
      },
      {
        "t": "20 g kúskov horkej čokolády"
      },
      {
        "t": "55 g horkej čokolády (poleva)"
      },
      {
        "t": "5 g kokosového oleja (poleva)"
      },
      {
        "t": "štipka soli",
        "s": true
      }
    ],
    "obrazok": "img/cottage-kosicky-cokolada.jpg",
    "zdroj": "instagram.com/mlsna_zenska",
    "url": "https://www.instagram.com/reel/DZDFYAIMELo/",
    "pridane": "2026-07-16",
    "hladanie": "cottage košíčky čokoláda protein mandľová múka fit svačinka mlsna zenska",
    "video": "https://www.instagram.com/reel/DZDFYAIMELo/"
  },
  {
    "id": "mini-pizza-cottage",
    "nazov": "Mini pizza z cottage cesta",
    "chod": "chuťovka",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr",
      "vajcia"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 25,
    "porcie": "6–8 ks",
    "suroviny": [
      {
        "t": "3 PL hladkej špaldovej múky"
      },
      {
        "t": "1 vajce"
      },
      {
        "t": "1 ČL prášku do pečiva"
      },
      {
        "t": "cottage cheese"
      },
      {
        "t": "soľ",
        "s": true
      },
      {
        "t": "obloha podľa chuti (pretlak, syr, zelenina…)"
      }
    ],
    "obrazok": "img/mini-pizza-cottage.jpg",
    "zdroj": "instagram.com/kukucka.pecie",
    "url": "https://www.instagram.com/reel/DKzpJJhqEAK/",
    "pridane": "2026-07-16",
    "hladanie": "mini pizza cottage špaldová múka desiata high protein kukucka pecie",
    "video": "https://www.instagram.com/reel/DKzpJJhqEAK/"
  },
  {
    "id": "cizrnove-cookies",
    "nazov": "Čokoládové cookies z cíceru",
    "chod": "dezert/sladké",
    "dieta": [
      "bez lepku",
      "vegetariánske"
    ],
    "surovina": [
      "strukoviny",
      "čokoláda"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 45,
    "porcie": "9 ks",
    "suroviny": [
      {
        "t": "250 g cíceru z konzervy (1½ hrnčeka)"
      },
      {
        "t": "2 prezreté banány"
      },
      {
        "t": "80 ml javorového sirupu (⅓ hrnčeka)"
      },
      {
        "t": "45 g arašidového masla (3 PL)"
      },
      {
        "t": "130 g mletých mandlí (1⅓ hrnčeka)"
      },
      {
        "t": "1 ČL jedlej sódy"
      },
      {
        "t": "1 ČL vanilkového extraktu"
      },
      {
        "t": "štipka morskej soli",
        "s": true
      },
      {
        "t": "80 g čokolády, nasekanej"
      }
    ],
    "obrazok": "img/cizrnove-cookies.jpg",
    "zdroj": "instagram.com/gqjordannutrition",
    "url": "https://www.instagram.com/reel/DXLgxmNCP3I/",
    "pridane": "2026-07-16",
    "hladanie": "chickpea cookies cícer cizrna sušienky banán arašidové maslo bez múky chocolate",
    "video": "https://www.instagram.com/reel/DXLgxmNCP3I/"
  },
  {
    "id": "jahodova-cottage-pena",
    "nazov": "Jahodová cottage pena",
    "chod": "dezert/sladké",
    "dieta": [
      "bez lepku",
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr",
      "ovocie"
    ],
    "prakticke": [
      "bez pečenia"
    ],
    "stav": "nové",
    "cas": 5,
    "porcie": "1 veľký pohár",
    "suroviny": [
      {
        "t": "150 g mrazených jahôd"
      },
      {
        "t": "200 g cottage syra"
      },
      {
        "t": "1 PL sladidla podľa chuti (erythritol, med…)"
      },
      {
        "t": "voliteľne odmerka proteínu (vanilka/jahoda)"
      }
    ],
    "obrazok": "img/jahodova-cottage-pena.jpg",
    "zdroj": "instagram.com/terez_fitmomof4",
    "url": "https://www.instagram.com/reel/DYY2CPGMPGO/",
    "pridane": "2026-07-16",
    "hladanie": "jahody cottage pěna dezert protein zdravá závislost fitmom",
    "video": "https://www.instagram.com/reel/DYY2CPGMPGO/"
  },
  {
    "id": "chia-krekry",
    "nazov": "Chia krekry so semienkami",
    "chod": "chuťovka",
    "dieta": [
      "vegánske",
      "vegetariánske"
    ],
    "surovina": [
      "ovsené vločky/obilniny"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 40,
    "porcie": "1 plech",
    "suroviny": [
      {
        "t": "20 g chia semienok"
      },
      {
        "t": "60 ml vody",
        "s": true
      },
      {
        "t": "170 g celozrnnej špaldovej múky hladkej"
      },
      {
        "t": "1 ČL prášku do pečiva"
      },
      {
        "t": "20 g celých nelúpaných ľanových semienok"
      },
      {
        "t": "20 g sezamových semienok (alebo mak)"
      },
      {
        "t": "3 PL olivového oleja",
        "s": true
      },
      {
        "t": "2 ČL sušeného tymianu"
      },
      {
        "t": "soľ",
        "s": true
      }
    ],
    "obrazok": "img/chia-krekry.jpg",
    "zdroj": "instagram.com/biobrusinka",
    "url": "https://www.instagram.com/reel/DWGZj18NVqO/",
    "pridane": "2026-07-16",
    "hladanie": "chia krekry crackers semínka lněná sezam špaldová tymián biobrusinka",
    "video": "https://www.instagram.com/reel/DWGZj18NVqO/"
  },
  {
    "id": "cottage-palacinka-na-plech",
    "nazov": "Cottage palacinka na plech",
    "chod": "raňajky/desiata",
    "dieta": [],
    "surovina": [
      "tvaroh/syr",
      "vajcia"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 20,
    "porcie": "1 plech",
    "suroviny": [
      {
        "t": "200 g cottage syra"
      },
      {
        "t": "95 ml mlieka"
      },
      {
        "t": "2 vajcia"
      },
      {
        "t": "85 g hladkej múky"
      },
      {
        "t": "1 ČL prášku do pečiva"
      },
      {
        "t": "voliteľne jarná cibuľka a korenie"
      },
      {
        "t": "šunka a syr na zapečenie"
      }
    ],
    "obrazok": "img/cottage-palacinka-na-plech.jpg",
    "zdroj": "instagram.com/i_am_luc",
    "url": "https://www.instagram.com/reel/DXcKtvvjDq6/",
    "pridane": "2026-07-16",
    "hladanie": "cottage palačinka plech high protein bariatrie slaná svačina Lucie Blahová",
    "video": "https://www.instagram.com/reel/DXcKtvvjDq6/"
  },
  {
    "id": "cesnekove-placky",
    "nazov": "Cesnakové placky plnené syrom",
    "chod": "príloha",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr"
    ],
    "prakticke": [
      "jedna panvica/hrniec"
    ],
    "stav": "nové",
    "cas": 30,
    "porcie": "4–6 ks",
    "suroviny": [
      {
        "t": "2 hrnčeky hladkej múky (+ na podsypanie)"
      },
      {
        "t": "5 veľkých PL jogurtu"
      },
      {
        "t": "strúhaný syr na plnenie"
      },
      {
        "t": "cesnakové maslo na potretie"
      },
      {
        "t": "soľ",
        "s": true
      },
      {
        "t": "olej na omastenie panvice",
        "s": true
      },
      {
        "t": "zakysaná smotana na podávanie"
      }
    ],
    "obrazok": "img/cesnekove-placky.jpg",
    "zdroj": "instagram.com/anetavignerova",
    "url": "https://www.instagram.com/reel/DT47H85DEgQ/",
    "pridane": "2026-07-16",
    "hladanie": "česnekové placky jogurt sýr naan chlebové placky vignerova",
    "video": "https://www.instagram.com/reel/DT47H85DEgQ/"
  },
  {
    "id": "misa-dortiky",
    "nazov": "Tvarohové Míša tortičky",
    "chod": "dezert/sladké",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr",
      "čokoláda"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 90,
    "porcie": "12 ks",
    "suroviny": [
      {
        "t": "100 g piškót (základ)"
      },
      {
        "t": "1 PL prírodného kakaa (základ)"
      },
      {
        "t": "60 g rozpusteného masla (základ)"
      },
      {
        "t": "250 g tučného tvarohu (náplň)"
      },
      {
        "t": "200 g čerstvého syra typu cream cheese (náplň)"
      },
      {
        "t": "100–120 g kryštálového cukru (náplň)"
      },
      {
        "t": "2 vajcia veľkosti M (náplň)"
      },
      {
        "t": "100 g zakysanej smotany 16 % (náplň)"
      },
      {
        "t": "mletá vanilka alebo vanilková pasta (náplň)"
      },
      {
        "t": "100 g horkej čokolády 55 % (poleva)"
      },
      {
        "t": "100 g smotany na šľahanie 33 % (poleva)"
      },
      {
        "t": "piškóty, čoko pecičky a cukrové očká na ozdobenie"
      }
    ],
    "obrazok": "img/misa-dortiky.jpg",
    "zdroj": "instagram.com/misalandova",
    "url": "https://www.instagram.com/reel/DNyLQQU2PRs/",
    "pridane": "2026-07-16",
    "hladanie": "míša dortíky tvaroh cheesecake medvedík čokoláda piškoty misalandova",
    "video": "https://www.instagram.com/reel/DNyLQQU2PRs/"
  },
  {
    "id": "kesu-gulicky-maliny",
    "nazov": "Kešu guličky s malinami",
    "chod": "dezert/sladké",
    "dieta": [
      "vegánske",
      "vegetariánske"
    ],
    "surovina": [
      "ovsené vločky/obilniny",
      "ovocie"
    ],
    "prakticke": [
      "bez pečenia"
    ],
    "stav": "nové",
    "cas": 10,
    "porcie": "16 guličiek",
    "suroviny": [
      {
        "t": "100 g kešu orechov"
      },
      {
        "t": "80 g minútových ovsených vločiek"
      },
      {
        "t": "40 g javorového sirupu alebo medu"
      },
      {
        "t": "16 g lyofilizovaných malín"
      },
      {
        "t": "40 ml ovseného mlieka"
      }
    ],
    "obrazok": "img/kesu-gulicky-maliny.jpg",
    "zdroj": "instagram.com/buchtavtroube.cz",
    "url": "https://www.instagram.com/reel/C9-ZO2JMSxA/",
    "pridane": "2026-07-16",
    "hladanie": "kešu kuličky maliny energy balls svačina na cesty deti buchtavtroube",
    "video": "https://www.instagram.com/reel/C9-ZO2JMSxA/"
  },
  {
    "id": "parene-buchty",
    "nazov": "Domáce parené buchty plné bielkovín",
    "chod": "dezert/sladké",
    "dieta": [
      "vegetariánske"
    ],
    "surovina": [
      "tvaroh/syr"
    ],
    "prakticke": [
      "jedna panvica/hrniec"
    ],
    "stav": "nové",
    "cas": 30,
    "porcie": "4 ks",
    "suroviny": [
      {
        "t": "150 g gréckeho jogurtu"
      },
      {
        "t": "1 vajce"
      },
      {
        "t": "120 g polohrubej múky"
      },
      {
        "t": "1 ČL prášku do pečiva"
      },
      {
        "t": "1 ČL cukru",
        "s": true
      },
      {
        "t": "štipka soli",
        "s": true
      },
      {
        "t": "4 PL čoko krému alebo džemu (plnka)"
      },
      {
        "t": "maslo, granko či mak na posypanie"
      }
    ],
    "obrazok": "img/parene-buchty.jpg",
    "zdroj": "instagram.com/kukucka.pecie",
    "url": "https://www.instagram.com/reel/DUONc0qDBC5/",
    "pridane": "2026-07-16",
    "hladanie": "parené buchty na pare jogurt lekvár bez kysnutia proteín kukucka pecie",
    "video": "https://www.instagram.com/reel/DUONc0qDBC5/"
  },
  {
    "id": "pecene-karbonatky",
    "nazov": "Pečené karbonátky z rúry",
    "chod": "hlavné jedlo",
    "dieta": [],
    "surovina": [
      "kuracie"
    ],
    "prakticke": [
      "z rúry"
    ],
    "stav": "nové",
    "cas": 50,
    "porcie": "podľa množstva mäsa",
    "suroviny": [
      {
        "t": "morčacie mleté mäso"
      },
      {
        "t": "1 vajce"
      },
      {
        "t": "strúhanka"
      },
      {
        "t": "čedar alebo iný syr"
      },
      {
        "t": "soľ, čierne korenie, sladká paprika, cesnak, majorán",
        "s": true
      },
      {
        "t": "olivový olej na pečenie",
        "s": true
      },
      {
        "t": "zemiaky alebo iná zelenina ako príloha"
      }
    ],
    "obrazok": "img/pecene-karbonatky.jpg",
    "zdroj": "instagram.com/minispajz",
    "url": "https://www.instagram.com/reel/DFMyBGlNbpv/",
    "pridane": "2026-07-16",
    "hladanie": "karbanátky krůtí mleté maso trouba fašírky pre deti minispajz",
    "video": "https://www.instagram.com/reel/DFMyBGlNbpv/"
  },
  {
    id: "vlacny-pernik",
    nazov: "Vláčny perník s povidlami a čokoládou",
    chod: "dezert/sladké",
    dieta: ["vegetariánske"],
    surovina: ["ovsené vločky/obilniny", "čokoláda"],
    prakticke: ["z rúry"],
    stav: "nové",
    cas: 55, porcie: "1 pekáč",
    suroviny: [
      { t: "3 hrnčeky špaldovej múky" },
      { t: "2 hrnčeky mlieka" },
      { t: "½ hrnčeka erythritolu" },
      { t: "½ kelímka povidiel (slivkový lekvár)" },
      { t: "2 vajcia" },
      { t: "1 lyžička jedlej sódy" },
      { t: "1 lyžička perníkového korenia" },
      { t: "4 lyžice kakaa" },
      { t: "250 g masla (rozpustené)" },
      { t: "marmeláda na potretie" },
      { t: "2 balenia čokolády 85 % na polevu" }
    ],
    obrazok: "img/vlacny-pernik.jpg",
    zdroj: "instagram.com/mamabalancuje",
    url: "https://www.instagram.com/reel/DYRXSD8qnnF/",
    video: "https://www.instagram.com/reel/DYRXSD8qnnF/",
    pridane: "2026-07-16",
    hladanie: "perník špaldová mouka povidla erythritol perníkové koření anjelský andělský buchta koláč"
  },
  {
    id: "tvarohova-pizza",
    nazov: "Tvarohová pizza — rýchle cesto bez kysnutia",
    chod: "hlavné jedlo",
    dieta: [],
    surovina: ["tvaroh/syr"],
    prakticke: ["z rúry"],
    stav: "nové",
    cas: 25, porcie: "1 pizza (plech)",
    suroviny: [
      { t: "250 g tvarohu (vanička)" },
      { t: "70 g jemnej špaldovej múky (špaldovky)" },
      { t: "1 vajce" },
      { t: "rajčinový pretlak" },
      { t: "šunka" },
      { t: "mozzarella" },
      { t: "paprika" },
      { t: "šampiňóny" },
      { t: "gouda" }
    ],
    obrazok: "img/tvarohova-pizza.jpg",
    zdroj: "FB skupina Vaříme malým dětem",
    url: "",
    pridane: "2026-07-16",
    hladanie: "pizza tvarohové těsto špaldovka rýchla večera pre deti bez kysnutia"
  },
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
