// Bu dosya, ana Kuran sure listesini ve ayet detaylarını içerir.

const kuranSureleri = [
    { id: 1, name: "Fâtiha", ayet_sayisi: 7 },
    { id: 2, name: "Bakara", ayet_sayisi: 286 },
    { id: 3, name: "Âl-i İmrân", ayet_sayisi: 200 },
    { id: 4, name: "Nisâ", ayet_sayisi: 176 },
    { id: 5, name: "Mâide", ayet_sayisi: 120 },
    { id: 6, name: "En'âm", ayet_sayisi: 165 },
    { id: 7, name: "A'râf", ayet_sayisi: 206 },
    { id: 8, name: "Enfâl", ayet_sayisi: 75 },
    { id: 9, name: "Tevbe", ayet_sayisi: 129 },
    { id: 10, name: "Yûnus", ayet_sayisi: 109 },
    { id: 11, name: "Hûd", ayet_sayisi: 123 },
    { id: 12, name: "Yûsuf", ayet_sayisi: 111 },
    { id: 13, name: "Ra'd", ayet_sayisi: 43 },
    { id: 14, name: "İbrâhim", ayet_sayisi: 52 },
    { id: 15, name: "Hicr", ayet_sayisi: 99 },
    { id: 16, name: "Nahl", ayet_sayisi: 128 },
    { id: 17, name: "İsrâ", ayet_sayisi: 111 },
    { id: 18, name: "Kehf", ayet_sayisi: 110 },
    { id: 19, name: "Meryem", ayet_sayisi: 98 },
    { id: 20, name: "Tâ-Hâ", ayet_sayisi: 135 },
    { id: 21, name: "Enbiyâ", ayet_sayisi: 112 },
    { id: 22, name: "Hac", ayet_sayisi: 78 },
    { id: 23, name: "Mü'minûn", ayet_sayisi: 118 },
    { id: 24, name: "Nûr", ayet_sayisi: 64 },
    { id: 25, name: "Furkan", ayet_sayisi: 77 },
    { id: 26, name: "Şuarâ", ayet_sayisi: 227 },
    { id: 27, name: "Neml", ayet_sayisi: 93 },
    { id: 28, name: "Kasas", ayet_sayisi: 88 },
    { id: 29, name: "Ankebût", ayet_sayisi: 69 },
    { id: 30, name: "Rûm", ayet_sayisi: 60 },
    { id: 31, name: "Lokmân", ayet_sayisi: 34 },
    { id: 32, name: "Secde", ayet_sayisi: 30 },
    { id: 33, name: "Ahzâb", ayet_sayisi: 73 },
    { id: 34, name: "Sebe'", ayet_sayisi: 54 },
    { id: 35, "name": "Fâtır", ayet_sayisi: 45 },
    { id: 36, "name": "Yâsîn", ayet_sayisi: 83 },
    { id: 37, "name": "Sâffât", ayet_sayisi: 182 },
    { id: 38, "name": "Sâd", ayet_sayisi: 88 },
    { id: 39, "name": "Zümer", ayet_sayisi: 75 },
    { id: 40, "name": "Mü'min", ayet_sayisi: 85 },
    { id: 41, "name": "Fussilet", ayet_sayisi: 54 },
    { id: 42, "name": "Şûrâ", ayet_sayisi: 53 },
    { id: 43, "name": "Zuhruf", ayet_sayisi: 89 },
    { id: 44, "name": "Duhân", ayet_sayisi: 59 },
    { id: 45, "name": "Câsiye", ayet_sayisi: 37 },
    { id: 46, "name": "Ahkâf", ayet_sayisi: 35 },
    { id: 47, "name": "Muhammed", ayet_sayisi: 38 },
    { id: 48, "name": "Fetih", ayet_sayisi: 29 },
    { id: 49, "name": "Hucurât", ayet_sayisi: 18 },
    { id: 50, "name": "Kâf", ayet_sayisi: 45 },
    { id: 51, "name": "Zâriyât", ayet_sayisi: 60 },
    { id: 52, "name": "Tûr", ayet_sayisi: 49 },
    { id: 53, "name": "Necm", ayet_sayisi: 62 },
    { id: 54, "name": "Kamer", ayet_sayisi: 55 },
    { id: 55, "name": "Rahmân", ayet_sayisi: 78 },
    { id: 56, "name": "Vâkıa", ayet_sayisi: 96 },
    { id: 57, "name": "Hadîd", ayet_sayisi: 29 },
    { id: 58, "name": "Mücâdele", ayet_sayisi: 22 },
    { id: 59, "name": "Haşr", ayet_sayisi: 24 },
    { id: 60, "name": "Mümtehine", ayet_sayisi: 13 },
    { id: 61, "name": "Saf", ayet_sayisi: 14 },
    { id: 62, "name": "Cum'a", ayet_sayisi: 11 },
    { id: 63, "name": "Münâfikûn", ayet_sayisi: 11 },
    { id: 64, "name": "Tegâbün", ayet_sayisi: 18 },
    { id: 65, "name": "Talâk", ayet_sayisi: 12 },
    { id: 66, "name": "Tahrîm", ayet_sayisi: 12 },
    { id: 67, "name": "Mülk", ayet_sayisi: 30 },
    { id: 68, "name": "Kalem", ayet_sayisi: 52 },
    { id: 69, "name": "Hâkka", ayet_sayisi: 52 },
    { id: 70, "name": "Meâric", ayet_sayisi: 44 },
    { id: 71, "name": "Nûh", ayet_sayisi: 28 },
    { id: 72, "name": "Cin", ayet_sayisi: 28 },
    { id: 73, "name": "Müzzemmil", ayet_sayisi: 20 },
    { id: 74, "name": "Müddessir", ayet_sayisi: 56 },
    { id: 75, "name": "Kıyâmet", ayet_sayisi: 40 },
    { id: 76, "name": "İnsân", ayet_sayisi: 31 },
    { id: 77, "name": "Mürselât", ayet_sayisi: 50 },
    { id: 78, "name": "Nebe'", ayet_sayisi: 40 },
    { id: 79, "name": "Nâzi'ât", ayet_sayisi: 46 },
    { id: 80, "name": "Abese", ayet_sayisi: 42 },
    { id: 81, "name": "Tekvîr", ayet_sayisi: 29 },
    { id: 82, "name": "İnfitâr", ayet_sayisi: 19 },
    { id: 83, "name": "Mutaffifîn", ayet_sayisi: 36 },
    { id: 84, "name": "İnşikâk", ayet_sayisi: 25 },
    { id: 85, "name": "Bürûc", ayet_sayisi: 22 },
    { id: 86, "name": "Târık", ayet_sayisi: 17 },
    { id: 87, "name": "A'lâ", ayet_sayisi: 19 },
    { id: 88, "name": "Gâşiye", ayet_sayisi: 26 },
    { id: 89, "name": "Fecr", ayet_sayisi: 30 },
    { id: 90, "name": "Beled", ayet_sayisi: 20 },
    { id: 91, "name": "Şems", ayet_sayisi: 15 },
    { id: 92, "name": "Leyl", ayet_sayisi: 21 },
    { id: 93, "name": "Duhâ", ayet_sayisi: 11 },
    { id: 94, "name": "İnşirâh", ayet_sayisi: 8 },
    { id: 95, "name": "Tîn", ayet_sayisi: 8 },
    { id: 96, "name": "Alak", ayet_sayisi: 19 },
    { id: 97, "name": "Kadir", ayet_sayisi: 5 },
    { id: 98, "name": "Beyyine", ayet_sayisi: 8 },
    { id: 99, "name": "Zilzâl", ayet_sayisi: 8 },
    { id: 100, "name": "Âdiyât", ayet_sayisi: 11 },
    { id: 101, "name": "Kâria", ayet_sayisi: 11 },
    { id: 102, "name": "Tekâsür", ayet_sayisi: 8 },
    { id: 103, "name": "Asr", ayet_sayisi: 3 },
    { id: 104, "name": "Hümeze", ayet_sayisi: 9 },
    { id: 105, "name": "Fîl", ayet_sayisi: 5 },
    { id: 106, "name": "Kureyş", ayet_sayisi: 4 },
    { id: 107, "name": "Mâ'ûn", ayet_sayisi: 7 },
    { id: 108, "name": "Kevser", ayet_sayisi: 3 },
    { id: 109, "name": "Kâfirûn", ayet_sayisi: 6 },
    { id: 110, "name": "Nasr", ayet_sayisi: 3 },
    { id: 111, "name": "Tebbet", ayet_sayisi: 5 },
    { id: 112, "name": "İhlâs", ayet_sayisi: 4 },
    { id: 113, "name": "Felak", ayet_sayisi: 5 },
    { id: 114, "name": "Nâs", ayet_sayisi: 6 }
];


// Detaylı ayet verisi (TÜRKÇELEŞTİRİLMİŞ YAPI)
const ayetVerisi = {
    "1": { // Sure No: 1 (Fatiha)
        "1": {
            "arapca": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّح۪يمِ",
            "latinOkunus": "Bismillahir rahmanir rahim",
            "anaCeviri": "Çokça merhametli sarıp koruyan kollayan ALLAH'ın yüce ismi ile .",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "بِسْمِ",
                    "kelime": "bismi",
                    "anlam": "adı ile",
                    "kok": "س م و"
                },
                {
                    "id": 2,
                    "arapca": "اللَّهِ",
                    "kelime": "llahi",
                    "anlam": "ALLAH’ın",
                    "kok": ""
                },
                {
                    "id": 3,
                    "arapca": "الرَّحْمَٰنِ",
                    "kelime": "r-raHmāni",
                    "anlam": "Çokça merhametli",
                    "kok": "ر ح م"
                },
                {
                    "id": 4,
                    "arapca": "الرَّحِيمِ",
                    "kelime": "r-raHīmi",
                    "anlam": "sarıp koruyup kollayan",
                    "kok": "ر ح م"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Çokça merhametli sarıp koruyan kollayan ALLAH'ın yüce ismi ile ."
                }
            ]
        },
        "2": {
            "arapca": "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَم۪ينَۙ",
            "latinOkunus": "El hamdu lillahi rabbil alemin .",
            "anaCeviri": "Alemlerin rabbi ALLAH'a hamdolsun.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "الْحَمْدُ",
                    "kelime": "El-Hamdu",
                    "anlam": "Hamdolsun",
                    "kok": "ح م د"
                },
                {
                    "id": 2,
                    "arapca": "لِلَّهِ",
                    "kelime": "lillahi",
                    "anlam": "ALLAH'a",
                    "kok": ""
                },
                {
                    "id": 3,
                    "arapca": "رَبِّ",
                    "kelime": "rabbi",
                    "anlam": "Rabbi",
                    "kok": "ر ب ب"
                },
                {
                    "id": 4,
                    "arapca": "الْعَالَمِينَ",
                    "kelime": "l-ǎālemīne",
                    "anlam": "Alemlerin",
                    "kok": "ع ل م"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Alemlerin rabbi ALLAH'a hamdolsun."
                }
            ]
        },

        "3": {
            "arapca": "اَلرَّحْمٰنِ الرَّح۪يمِۙ",
            "latinOkunus": "Er rahmanir rahim.",
            "anaCeviri": "Çokça merhametli, sarıp koruyan kollayandır",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "الرَّحْمَٰنِ",
                    "kelime": "Er-raHmāni",
                    "anlam": "Çokça merhametli",
                    "kok": "ر ح م"
                },
                {
                    "id": 2,
                    "arapca": "الرَّحِيمِ",
                    "kelime": "r-raHīmi",
                    "anlam": "Sarıp koruyup kollayan",
                    "kok": "ر ح م"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Çokça merhametli, sarıp koruyan kollayandır"
                }
            ]
        },


        "4": {
            "arapca": "مَالِكِ يَوْمِ الدّ۪ينِۜ",
            "latinOkunus": "Maliki yevmid din.",
            "anaCeviri": "Din gününün sahibidir.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "مَالِكِ",
                    "kelime": "māliki",
                    "anlam": "sahibi",
                    "kok": "م ل ك"
                },
                {
                    "id": 2,
                    "arapca": "يَوْمِ",
                    "kelime": "yevmi",
                    "anlam": "gününün",
                    "kok": "ي و م"
                },
                {
                    "id": 3,
                    "arapca": "الدِّينِ",
                    "kelime": "d-dīni",
                    "anlam": "Din",
                    "kok": "د ي ن"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Din gününün sahibidir."
                }
            ],
        },
        "5": {
            "arapca": "اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَع۪ينُۜ",
            "latinOkunus": "İyyake na'budu ve iyyake nestain.",
            "anaCeviri": "Ancak sana kulluk ederiz, ancak senden yardım isteriz.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "إِيَّاكَ",
                    "kelime": "iyyāke",
                    "anlam": "ancak sana",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "نَعْبُدُ",
                    "kelime": "nǎ’budu",
                    "anlam": "kulluk ederiz",
                    "kok": "ع ب د"
                },
                {
                    "id": 3,
                    "arapca": "وَإِيَّاكَ",
                    "kelime": "ve iyyāke",
                    "anlam": "ancak senden",
                    "kok": ""
                },
                {
                    "id": 4,
                    "arapca": "نَسْتَعِينُ",
                    "kelime": "nesteǐynu",
                    "anlam": "yardım isteriz",
                    "kok": "ع و ن"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Ancak sana kulluk ederiz, ancak senden yardım isteriz."
                }
            ],
        },
        "6": {
            "arapca": "صِرَاطَ الَّذ۪ينَ اَنْعَمْتَ عَلَيْهِمْۙ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّٓالّ۪ينَ",
            "latinOkunus": "Sıratallezine en'amte aleyhim gayril magdubi aleyhim ve lad dallin.",
            "anaCeviri": "Ni’met verdin, kimselerin yoluna,  öfkelendiklerinin ve sapmış kimselerin yolunu değil.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "صِرَاطَ",
                    "kelime": "sirāTa",
                    "anlam": "Yoluna",
                    "kok": "ص ر ط"
                },
                {
                    "id": 2,
                    "arapca": "الَّذِينَ",
                    "kelime": "elleƶīne",
                    "anlam": "Onlarki ki",
                    "kok": ""
                },
                {
                    "id": 3,
                    "arapca": "أَنْعَمْتَ",
                    "kelime": "en’ǎmte",
                    "anlam": "Ni’met verdin",
                    "kok": "ن ع م"
                },
                {
                    "id": 4,
                    "arapca": "عَلَيْهِمْ",
                    "kelime": "ǎleyhim",
                    "anlam": "Kimselerin",
                    "kok": ""
                },
                {
                    "id": 5,
                    "arapca": "غَيْرِ",
                    "kelime": "ğayri",
                    "anlam": "Dışında",
                    "kok": "غ ي ر"
                },
                {
                    "id": 6,
                    "arapca": "الْمَغْضُوبِ",
                    "kelime": "l-meğDūbi",
                    "anlam": "Öfkelendiklerinin",
                    "kok": "غ ض ب"
                },
                {
                    "id": 7,
                    "arapca": "عَلَيْهِمْ",
                    "kelime": "ǎleyhim",
                    "anlam": "Kimselerin",
                    "kok": ""
                },
                {
                    "id": 8,
                    "arapca": "وَلَا",
                    "kelime": "ve lā",
                    "anlam": "Ve değil",
                    "kok": ""
                },
                {
                    "id": 9,
                    "arapca": "الضَّالِّينَ",
                    "kelime": "D-Dāllīne",
                    "anlam": "Sapmışların",
                    "kok": "ض ل ل"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Ni’met verdin, kimselerin yoluna,  öfkelendiklerinin ve sapmış kimselerin yolunu değil."
                }
            ],
        },
        "7": {
            "arapca": "صِرَاطَ الَّذ۪ينَ اَنْعَمْتَ عَلَيْهِمْۙ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّٓالّ۪ينَ",
            "latinOkunus": "Sıratallezine en'amte aleyhim gayril magdubi aleyhim ve lad dallin.",
            "anaCeviri": "Ni’met verdin, kimselerin yoluna,  öfkelendiklerinin ve sapmış kimselerin yolunu değil.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "صِرَاطَ",
                    "kelime": "SirāTa",
                    "anlam": "yoluna",
                    "kok": "ص ر ط"
                },
                {
                    "id": 2,
                    "arapca": "الَّذِينَ",
                    "kelime": "elleƶīne",
                    "anlam": "onlarki ki",
                    "kok": ""
                },
                {
                    "id": 3,
                    "arapca": "أَنْعَمْتَ",
                    "kelime": "en’ǎmte",
                    "anlam": "ni’met verdin",
                    "kok": "ن ع م"
                },
                {
                    "id": 4,
                    "arapca": "عَلَيْهِمْ",
                    "kelime": "ǎleyhim",
                    "anlam": "kimselerin",
                    "kok": ""
                },
                {
                    "id": 5,
                    "arapca": "غَيْرِ",
                    "kelime": "ğayri",
                    "anlam": "dışında",
                    "kok": "غ ي ر"
                },
                {
                    "id": 6,
                    "arapca": "الْمَغْضُوبِ",
                    "kelime": "l-meğDūbi",
                    "anlam": "öfkelendiklerinin",
                    "kok": "غ ض ب"
                },
                {
                    "id": 7,
                    "arapca": "عَلَيْهِمْ",
                    "kelime": "ǎleyhim",
                    "anlam": "kimselerin",
                    "kok": ""
                },
                {
                    "id": 8,
                    "arapca": "وَلَا",
                    "kelime": "ve lā",
                    "anlam": "ve değil",
                    "kok": ""
                },
                {
                    "id": 9,
                    "arapca": "الضَّالِّينَ",
                    "kelime": "D-Dāllīne",
                    "anlam": "sapmışların",
                    "kok": "ض ل ل"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Ni’met verdin, kimselerin yoluna,  öfkelendiklerinin ve sapmış kimselerin yolunu değil."
                }
            ],
        },
    },
    "2": { // Sure No: 2 (Bakara)    
        "0": {
            "arapca": "سُورَةُ ٱلْفَاتِحَةِ",
            "latinOkunus": "",
            "anaCeviri": "",
            "kelimeler": [],
            "ceviriler": [],
        },
        "1": {
            "arapca": "الم",
            "latinOkunus": "Elif, Lâm, Mîm",
            "anaCeviri": "Elif, Lâm, Mîm",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "الم",
                    "kelime": "Elif, Lâm, Mîm",
                    "anlam": "Elif Lâm Mîm",
                    "kok": ""
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Elif, Lâm, Mîm"
                }
            ],
        },
        "2": {
            "arapca": "ذٰلِكَ الْكِتَابُ لَا رَيْبَۚۛ ف۪يهِۚۛ هُدًى لِلْمُتَّق۪ينَۙ",
            "latinOkunus": "Zalikel kitabu la reybe fih, huden lil muttekin.",
            "anaCeviri": "Şu  kitap içesinde hiç şüphe yoktur. Müttakiler için  yol göstericidir.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "ذَٰلِكَ",
                    "kelime": "ƶālike",
                    "anlam": "şu",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "الْكِتَابُ",
                    "kelime": "l-kitābu",
                    "anlam": "Kitap",
                    "kok": "ك ت ب"
                },
                {
                    "id": 3,
                    "arapca": "لَا",
                    "kelime": "lā",
                    "anlam": "Yoktur",
                    "kok": ""
                },
                {
                    "id": 4,
                    "arapca": "رَيْبَ",
                    "kelime": "raybe",
                    "anlam": "Hiç şüphe",
                    "kok": "ر ي ب"
                },
                {
                    "id": 5,
                    "arapca": "فِيهِ",
                    "kelime": "fīhi",
                    "anlam": "içesinde",
                    "kok": ""
                },
                {
                    "id": 6,
                    "arapca": "هُدًى",
                    "kelime": "huden",
                    "anlam": "Yol göstericidir",
                    "kok": "ه د ي"
                },
                {
                    "id": 7,
                    "arapca": "لِلْمُتَّقِينَ",
                    "kelime": "lilmutteḳīne",
                    "anlam": "Müttakiler için",
                    "kok": "و ق ي"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Şu  kitap içesinde hiç şüphe yoktur. Müttakiler için  yol göstericidir."
                }
            ],
        },
        "3": {
            "arapca": "اَلَّذ۪ينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُق۪يمُونَ الصَّلٰوةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَۙ",
            "latinOkunus": "Ellezine yu'minune bil gaybi ve yukimunes salate ve mimma razaknahum yunfikun.",
            "anaCeviri": "Öyle ki , gaybde  inanırlar ve Salāte dikilirler (ayakta tutanlar) ve rızıklandırdıklarımız dan harcarlar.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "الَّذِينَ",
                    "kelime": "elleƶīne",
                    "anlam": "Öyle ki",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "يُؤْمِنُونَ",
                    "kelime": "yu'minūne",
                    "anlam": "İnanırlar",
                    "kok": "ا م ن"
                },
                {
                    "id": 3,
                    "arapca": "بِالْغَيْبِ",
                    "kelime": "bil-ğaybi",
                    "anlam": "Gaybde",
                    "kok": "غ ي ب"
                },
                {
                    "id": 4,
                    "arapca": "وَيُقِيمُونَ",
                    "kelime": "ve yuḳīmūne",
                    "anlam": "Ve dikilirler",
                    "kok": "ق و م"
                },
                {
                    "id": 5,
                    "arapca": "الصَّلَاةَ",
                    "kelime": "S-Salāte",
                    "anlam": "Salāte",
                    "kok": "ص ل و"
                },
                {
                    "id": 6,
                    "arapca": "وَمِمَّا",
                    "kelime": "ve mimmā",
                    "anlam": "Ve ( dan)",
                    "kok": ""
                },
                {
                    "id": 7,
                    "arapca": "رَزَقْنَاهُمْ",
                    "kelime": "razeḳnāhum",
                    "anlam": "Rızıklandırdıklarımız",
                    "kok": "ر ز ق"
                },
                {
                    "id": 8,
                    "arapca": "يُنْفِقُونَ",
                    "kelime": "yunfiḳūne",
                    "anlam": "Harcamak",
                    "kok": "ن ف ق"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Öyle ki , gaybde  inanırlar ve Salāte dikilirler (ayakta tutanlar) ve rızıklandırdıklarımız dan harcarlar."
                }
            ],
        },
        "4": {
            "arapca": "اَلَّذ۪ينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُق۪يمُونَ الصَّلٰوةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَۙ",
            "latinOkunus": "Ellezine yu'minune bil gaybi ve yukimunes salate ve mimma razaknahum yunfikun.",
            "anaCeviri": "Öyle ki , gaybde  inanırlar ve Salāte dikilirler (ayakta tutanlar) ve rızıklandırdıklarımız dan harcarlar.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "وَالَّذِينَ",
                    "kelime": "velleƶīne",
                    "anlam": "Ve onlar ki",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "يُؤْمِنُونَ",
                    "kelime": "yu'minūne",
                    "anlam": "İman ederler",
                    "kok": "ا م ن"
                },
                {
                    "id": 3,
                    "arapca": "بِمَا",
                    "kelime": "bimā",
                    "anlam": "Şeye",
                    "kok": ""
                },
                {
                    "id": 4,
                    "arapca": "أُنْزِلَ",
                    "kelime": "unzile",
                    "anlam": "İndirilen",
                    "kok": "ن ز ل"
                },
                {
                    "id": 5,
                    "arapca": "إِلَيْكَ",
                    "kelime": "ileyke",
                    "anlam": "Sana",
                    "kok": ""
                },
                {
                    "id": 6,
                    "arapca": "وَمَا",
                    "kelime": "ve mā",
                    "anlam": "Ve şeye",
                    "kok": ""
                },
                {
                    "id": 7,
                    "arapca": "أُنْزِلَ",
                    "kelime": "unzile",
                    "anlam": "İndirilen",
                    "kok": "ن ز ل"
                },
                {
                    "id": 8,
                    "arapca": "مِنْ",
                    "kelime": "min",
                    "anlam": "-den",
                    "kok": ""
                },
                {
                    "id": 9,
                    "arapca": "قَبْلِكَ",
                    "kelime": "ḳablike",
                    "anlam": "Senden önce",
                    "kok": "ق ب ل"
                },
                {
                    "id": 10,
                    "arapca": "وَبِالْاخِرَةِ",
                    "kelime": "ve bil-āḣirati",
                    "anlam": "Ve ahirete de",
                    "kok": "ا خ ر"
                },
                {
                    "id": 11,
                    "arapca": "هُمْ",
                    "kelime": "hum",
                    "anlam": "Onlar",
                    "kok": ""
                },
                {
                    "id": 12,
                    "arapca": "يُوقِنُونَ",
                    "kelime": "yūḳinūne",
                    "anlam": "Kesinlikle inanırlar",
                    "kok": "ي ق ن"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Öyle ki , gaybde  inanırlar ve Salāte dikilirler (ayakta tutanlar) ve rızıklandırdıklarımız dan harcarlar."
                }
            ],
        },
        "5": {
            "arapca": "اُو۬لٰٓئِكَ عَلٰى هُدًى مِنْ رَبِّهِمْ وَاُو۬لٰٓئِكَ هُمُ الْمُفْلِحُونَ",
            "latinOkunus": "Ulaike ala huden min rabbihim ve ulaike humul muflihun.",
            "anaCeviri": "İşte onlar, Rablerinden bir hidayet üzeredirler ve işte başarılı olanlar onlardır.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "أُولَٰئِكَ",
                    "kelime": "ulāike",
                    "anlam": "işte onlar",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "عَلَىٰ",
                    "kelime": "ǎlā",
                    "anlam": "Üzeredirler",
                    "kok": ""
                },
                {
                    "id": 3,
                    "arapca": "هُدًى",
                    "kelime": "huden",
                    "anlam": "Bir hidayet",
                    "kok": "ه د ي"
                },
                {
                    "id": 4,
                    "arapca": "مِنْ",
                    "kelime": "min",
                    "anlam": "-nden",
                    "kok": ""
                },
                {
                    "id": 5,
                    "arapca": "رَبِّهِمْ",
                    "kelime": "rabbihim",
                    "anlam": "Rableri-",
                    "kok": "ر ب ب"
                },
                {
                    "id": 6,
                    "arapca": "وَأُولَٰئِكَ",
                    "kelime": "ve ulāike",
                    "anlam": "Ve işte",
                    "kok": ""
                },
                {
                    "id": 7,
                    "arapca": "هُمُ",
                    "kelime": "humu",
                    "anlam": "Onlardır",
                    "kok": ""
                },
                {
                    "id": 8,
                    "arapca": "الْمُفْلِحُونَ",
                    "kelime": "l-mufliHūne",
                    "anlam": "Başarılı olanlar",
                    "kok": "ف ل ح"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "İşte onlar, Rablerinden bir hidayet üzeredirler ve işte başarılı olanlar onlardır."
                }
            ],
        },

        "6": {
            "arapca": "اِنَّ الَّذ۪ينَ كَفَرُوا سَوَٓاءٌ عَلَيْهِمْ ءَاَنْذَرْتَهُمْ اَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ",
            "latinOkunus": "İnnellezine keferu sevaun aleyhim e enzertehum em lem tunzirhum la yu'minun.",
            "anaCeviri": "Elbette ki, onlar inkar edenler eşittir, onları uyarsan yada  uyarmasan da  inanmazlar.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "إِنَّ",
                    "kelime": "inne",
                    "anlam": "Elbette",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "الَّذِينَ",
                    "kelime": "elleƶīne",
                    "anlam": "Onlar ki",
                    "kok": ""
                },
                {
                    "id": 3,
                    "arapca": "كَفَرُوا",
                    "kelime": "keferū",
                    "anlam": "İnkar edenler",
                    "kok": "ك ف ر"
                },
                {
                    "id": 4,
                    "arapca": "سَوَاءٌ",
                    "kelime": "sevāun",
                    "anlam": "Eşittir",
                    "kok": "س و ي"
                },
                {
                    "id": 5,
                    "arapca": "عَلَيْهِمْ",
                    "kelime": "ǎleyhim",
                    "anlam": "Onlara",
                    "kok": ""
                },
                {
                    "id": 6,
                    "arapca": "أَأَنْذَرْتَهُمْ",
                    "kelime": "e enƶertehum",
                    "anlam": "Onları uyarsan",
                    "kok": "ن ذ ر"
                },
                {
                    "id": 7,
                    "arapca": "أَمْ",
                    "kelime": "em",
                    "anlam": "Yada",
                    "kok": ""
                },
                {
                    "id": 8,
                    "arapca": "لَمْ",
                    "kelime": "lem",
                    "anlam": "Me-",
                    "kok": ""
                },
                {
                    "id": 9,
                    "arapca": "تُنْذِرْهُمْ",
                    "kelime": "tunƶirhum",
                    "anlam": "Uyarmasan da",
                    "kok": "ن ذ ر"
                },
                {
                    "id": 10,
                    "arapca": "لَا",
                    "kelime": "lā",
                    "anlam": "Mez-",
                    "kok": ""
                },
                {
                    "id": 11,
                    "arapca": "يُؤْمِنُونَ",
                    "kelime": "yu'minūne",
                    "anlam": "İnanmazlar",
                    "kok": "ا م ن"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Elbette ki, onlar inkar edenler eşittir, onları uyarsan yada  uyarmasan da  inanmazlar."
                }
            ],
        },
        "7": {
            "arapca": "خَتَمَ اللّٰهُ عَلٰى قُلُوبِهِمْ وَعَلٰى سَمْعِهِمْۜ وَعَلٰٓى اَبْصَارِهِمْ غِشَاوَةٌۘ وَلَهُمْ عَذَابٌ عَظ۪يمٌ۟",
            "latinOkunus": "Hatemallahu ala kulubihim ve ala sem'ihim, ve ala ebsarihim gişaveh, ve lehum azabun azim.",
            "anaCeviri": "Mühürlemiştir ALLAH kalblerinin üzerini ve işitmelerinin üzerlerini ve görmelerinin üzerlerinde bir perde,  onlar için muazzam  azab.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "خَتَمَ",
                    "kelime": "ḣateme",
                    "anlam": "Mühürlemiştir",
                    "kok": "خ ت م"
                },
                {
                    "id": 2,
                    "arapca": "اللَّهُ",
                    "kelime": "llāhu",
                    "anlam": "ALLAH",
                    "kok": ""
                },
                {
                    "id": 3,
                    "arapca": "عَلَىٰ",
                    "kelime": "ǎlā",
                    "anlam": "Üzerini",
                    "kok": ""
                },
                {
                    "id": 4,
                    "arapca": "قُلُوبِهِمْ",
                    "kelime": "ḳulūbihim",
                    "anlam": "Kalblerinin",
                    "kok": "ق ل ب"
                },
                {
                    "id": 5,
                    "arapca": "وَعَلَىٰ",
                    "kelime": "ve ǎlā",
                    "anlam": "Ve üzerlerini",
                    "kok": ""
                },
                {
                    "id": 6,
                    "arapca": "سَمْعِهِمْ",
                    "kelime": "semǐhim",
                    "anlam": "İşitmelerinin",
                    "kok": "س م ع"
                },
                {
                    "id": 7,
                    "arapca": "وَعَلَىٰ",
                    "kelime": "ve ǎlā",
                    "anlam": "Ve üzerlerinde",
                    "kok": ""
                },
                {
                    "id": 8,
                    "arapca": "أَبْصَارِهِمْ",
                    "kelime": "ebSārihim",
                    "anlam": "Görmelerinin",
                    "kok": "ب ص ر"
                },
                {
                    "id": 9,
                    "arapca": "غِشَاوَةٌ",
                    "kelime": "ğişāvetun",
                    "anlam": "Bir perde",
                    "kok": "غ ش و"
                },
                {
                    "id": 10,
                    "arapca": "وَلَهُمْ",
                    "kelime": "velehum",
                    "anlam": "Onlar için",
                    "kok": ""
                },
                {
                    "id": 11,
                    "arapca": "عَذَابٌ",
                    "kelime": "ǎƶābun",
                    "anlam": "Azab",
                    "kok": "ع ذ ب"
                },
                {
                    "id": 12,
                    "arapca": "عَظِيمٌ",
                    "kelime": "ǎZīmun",
                    "anlam": "Muazzam",
                    "kok": "ع ظ م"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Mühürlemiştir ALLAH kalblerinin üzerini ve işitmelerinin üzerlerini ve görmelerinin üzerlerinde bir perde,  onlar için muazzam  azab."
                }
            ]
        },
    },
}

// YENİ: Ayet açıklamaları için boş nesne
const ayetAciklamalari = {
    "1": { // Fâtiha Suresi
        "2": "Bu ayette geçen 'âlemîn' kelimesi, tüm evreni ve varlıkları kapsar. Rabb'in evrenselliğine vurgu yapar.",
        "5": "Bu ayet, kulluğun ve yardım dilemenin yalnızca Allah'a yöneltilmesi gerektiğini vurgulayan tevhidi bir ilkedir."
    },
    "2": { // Bakara Suresi
        "2": "Bakara Suresi'nin bu ayeti, Kur'an'ın kılavuzluğunu ve sağlamlığını bildirir. Kitabın sağlamlığı, kuşkuya yer bırakmayacak şekilde vurgulanmıştır."
    }
};