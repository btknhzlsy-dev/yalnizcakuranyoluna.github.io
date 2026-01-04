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
            "arapca": "سُورَةُ ٱلْفَاتِحَةِ",
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
                    "anlam": "çokça merhametli",
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
                    "metin": "Çokça merhametli sarıp koruyan kollayan ALLAH'ın yüce ismi ile."
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
                    "kelime": "el-Hamdu",
                    "anlam": "hamdolsun",
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
                    "anlam": "rabbi",
                    "kok": "ر ب ب"
                },
                {
                    "id": 4,
                    "arapca": "الْعَالَمِينَ",
                    "kelime": "l-ǎālemīne",
                    "anlam": "alemlerin",
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
            "anaCeviri": "Çokça merhametli, sarıp koruyan kollayandır.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "الرَّحْمَٰنِ",
                    "kelime": "Er-raHmāni",
                    "anlam": "çokça merhametli",
                    "kok": "ر ح م"
                },
                {
                    "id": 2,
                    "arapca": "الرَّحِيمِ",
                    "kelime": "r-raHīmi",
                    "anlam": "sarıp koruyup kollayan",
                    "kok": "ر ح م"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Çokça merhametli, sarıp koruyan kollayandır."
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
                    "anlam": "din",
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
            ]
        },
        "6": {
            "arapca": "اِهْدِنَا الصِّرَاطَ الْمُسْتَق۪يمَۙ",
            "latinOkunus": "İhdinas sıratel mustakim.",
            "anaCeviri": "İlet bizi doğru yola.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "اهْدِنَا",
                    "kelime": "İhdinā",
                    "anlam": "bizi ilet",
                    "kok": "ه د ي"
                },
                {
                    "id": 2,
                    "arapca": "الصِّرَاطَ",
                    "kelime": "s-sirāTa",
                    "anlam": "yola",
                    "kok": "ص ر ط"
                },
                {
                    "id": 3,
                    "arapca": "الْمُسْتَقِيمَ",
                    "kelime": "l-musteḳīme",
                    "anlam": "doğru",
                    "kok": "ق و م"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "İlet bizi doğru yola."
                }
            ]
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
                    "kelime": "d-dāllīne",
                    "anlam": "sapmışların",
                    "kok": "ض ل ل"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Ni’met verdiğin, kimselerin yoluna,  öfkelendiklerinin ve sapmış kimselerin yoluna değil."
                }
            ]
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
            "arapca": "Elif, Lâm, Mîm",
            "latinOkunus": "Elif, Lâm, Mîm",
            "anaCeviri": "Elif, Lâm, Mîm",
            "kelimeler": [],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Elif, Lâm, Mîm"
                }
            ]
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
                    "anlam": "yoktur",
                    "kok": ""
                },
                {
                    "id": 4,
                    "arapca": "رَيْبَ",
                    "kelime": "raybe",
                    "anlam": "hiç şüphe",
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
                    "anlam": "yol göstericidir",
                    "kok": "ه د ي"
                },
                {
                    "id": 7,
                    "arapca": "لِلْمُتَّقِينَ",
                    "kelime": "lilmutteḳīne",
                    "anlam": "müttakiler için",
                    "kok": "و ق ي"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Şu  kitap içesinde hiç şüphe yoktur. Müttakiler için  yol göstericidir."
                }
            ]
        },
        "3": {
            "arapca": "اَلَّذ۪ينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُق۪يمُونَ الصَّلٰوةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَۙ",
            "latinOkunus": "Ellezine yu'minune bil gaybi ve yukimunes salate ve mimma razaknahum yunfikun.",
            "anaCeviri": "Öyle ki , gaybde  inanırlar ve Salāte dikilirler (ayakta tutarlar) ve rızıklandırdıklarımız dan harcarlar.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "الَّذِينَ",
                    "kelime": "elleƶīne",
                    "anlam": "öyle ki",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "يُؤْمِنُونَ",
                    "kelime": "yu'minūne",
                    "anlam": "inanırlar",
                    "kok": "ا م ن"
                },
                {
                    "id": 3,
                    "arapca": "بِالْغَيْبِ",
                    "kelime": "bil-ğaybi",
                    "anlam": "gaybde",
                    "kok": "غ ي ب"
                },
                {
                    "id": 4,
                    "arapca": "وَيُقِيمُونَ",
                    "kelime": "ve yuḳīmūne",
                    "anlam": "ve dikilirler",
                    "kok": "ق و م"
                },
                {
                    "id": 5,
                    "arapca": "الصَّلَاةَ",
                    "kelime": "s-salāte",
                    "anlam": "salāte",
                    "kok": "ص ل و"
                },
                {
                    "id": 6,
                    "arapca": "وَمِمَّا",
                    "kelime": "ve mimmā",
                    "anlam": "ve ( dan)",
                    "kok": ""
                },
                {
                    "id": 7,
                    "arapca": "رَزَقْنَاهُمْ",
                    "kelime": "razeḳnāhum",
                    "anlam": "rızıklandırdıklarımız",
                    "kok": "ر ز ق"
                },
                {
                    "id": 8,
                    "arapca": "يُنْفِقُونَ",
                    "kelime": "yunfiḳūne",
                    "anlam": "harcamak",
                    "kok": "ن ف ق"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Öyle ki , gaybde  inanırlar ve Salāte dikilirler (ayakta tutarlar) ve rızıklandırdıklarımız dan harcarlar."
                }
            ]
        },
        "4": {
            "arapca": "وَالَّذ۪ينَ يُؤْمِنُونَ بِمَٓا اُنْزِلَ اِلَيْكَ وَمَٓا اُنْزِلَ مِنْ قَبْلِكَۚ وَبِالْاٰخِرَةِ هُمْ يُوقِنُونَۜ",
            "latinOkunus": "Vellezine yu'minune bi ma unzile ileyke ve ma unzile min kablik ve bil ahireti hum yukınun.",
            "anaCeviri": "Ve onlar ki, sana  indirilen şeye  ve senden önceden indirilen şeye iman ederler ve onlar ahirete de kesinlikle inanırlar.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "وَالَّذِينَ",
                    "kelime": "velleƶīne",
                    "anlam": "ve onlar ki",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "يُؤْمِنُونَ",
                    "kelime": "yu'minūne",
                    "anlam": "iman ederler",
                    "kok": "ا م ن"
                },
                {
                    "id": 3,
                    "arapca": "بِمَا",
                    "kelime": "bimā",
                    "anlam": "şeye",
                    "kok": ""
                },
                {
                    "id": 4,
                    "arapca": "أُنْزِلَ",
                    "kelime": "unzile",
                    "anlam": "indirilen",
                    "kok": "ن ز ل"
                },
                {
                    "id": 5,
                    "arapca": "إِلَيْكَ",
                    "kelime": "ileyke",
                    "anlam": "sana",
                    "kok": ""
                },
                {
                    "id": 6,
                    "arapca": "وَمَا",
                    "kelime": "ve mā",
                    "anlam": "ve şeye",
                    "kok": ""
                },
                {
                    "id": 7,
                    "arapca": "أُنْزِلَ",
                    "kelime": "unzile",
                    "anlam": "indirilen",
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
                    "anlam": "senden önce",
                    "kok": "ق ب ل"
                },
                {
                    "id": 10,
                    "arapca": "وَبِالْاخِرَةِ",
                    "kelime": "ve bil-āḣirati",
                    "anlam": "ve ahirete de",
                    "kok": "ا خ ر"
                },
                {
                    "id": 11,
                    "arapca": "هُمْ",
                    "kelime": "hum",
                    "anlam": "onlar",
                    "kok": ""
                },
                {
                    "id": 12,
                    "arapca": "يُوقِنُونَ",
                    "kelime": "yūḳinūne",
                    "anlam": "kesinlikle inanırlar",
                    "kok": "ي ق ن"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Ve onlar ki, sana  indirilen şeye  ve senden önceden indirilen şeye iman ederler ve onlar ahirete de kesinlikle inanırlar."
                }
            ]
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
            "latinOkunus": "Hatemallahu ala kulubihim ve ala sem'ıhim, ve ala ebsarihim gışaveh, ve lehum azabun azim.",
            "anaCeviri": "ALLAH kalblerinin üzerini ve işitmelerinin üzerlerini mühürlemiştir ve görmelerinin üzerlerinde bir perde ve  muazzam  azab onlar içindir.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "خَتَمَ",
                    "kelime": "ḣateme",
                    "anlam": "mühürlemiştir",
                    "kok": "خ ت م"
                },
                {
                    "id": 2,
                    "arapca": "اللَّهُ",
                    "kelime": "llahu",
                    "anlam": "ALLAH",
                    "kok": ""
                },
                {
                    "id": 3,
                    "arapca": "عَلَىٰ",
                    "kelime": "ǎlā",
                    "anlam": "üzerini",
                    "kok": ""
                },
                {
                    "id": 4,
                    "arapca": "قُلُوبِهِمْ",
                    "kelime": "ḳulūbihim",
                    "anlam": "kalblerinin",
                    "kok": "ق ل ب"
                },
                {
                    "id": 5,
                    "arapca": "وَعَلَىٰ",
                    "kelime": "ve ǎlā",
                    "anlam": "ve üzerini",
                    "kok": ""
                },
                {
                    "id": 6,
                    "arapca": "سَمْعِهِمْ",
                    "kelime": "sem’ǐhim",
                    "anlam": "işitmelerinin",
                    "kok": "س م ع"
                },
                {
                    "id": 7,
                    "arapca": "وَعَلَىٰ",
                    "kelime": "ve ǎlā",
                    "anlam": "ve üzerlerinde",
                    "kok": ""
                },
                {
                    "id": 8,
                    "arapca": "أَبْصَارِهِمْ",
                    "kelime": "ebSārihim",
                    "anlam": "görmelerinin",
                    "kok": "ب ص ر"
                },
                {
                    "id": 9,
                    "arapca": "غِشَاوَةٌ",
                    "kelime": "ğişāvetun",
                    "anlam": "perde",
                    "kok": "غ ش و"
                },
                {
                    "id": 10,
                    "arapca": "وَلَهُمْ",
                    "kelime": "velehum",
                    "anlam": "ve onlar içindir",
                    "kok": ""
                },
                {
                    "id": 11,
                    "arapca": "عَذَابٌ",
                    "kelime": "ǎƶābun",
                    "anlam": "azab",
                    "kok": "ع ذ ب"
                },
                {
                    "id": 12,
                    "arapca": "عَظِيمٌ",
                    "kelime": "ǎZīmun",
                    "anlam": "muazzam",
                    "kok": "ع ظ م"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "ALLAH kalblerinin üzerini ve işitmelerinin üzerlerini mühürlemiştir ve görmelerinin üzerlerinde bir perde ve  muazzam  azab onlar içindir."
                }
            ]
        },
        "8": {
            "arapca": "وَمِنَ النَّاسِ مَنْ يَقُولُ اٰمَنَّا بِاللّٰهِ وَبِالْيَوْمِ الْاٰخِرِ وَمَا هُمْ بِمُؤْمِن۪ينَۢ",
            "latinOkunus": "Ve minen nasi men yekulu amenna billahi ve bil yevmil ahıri ve ma hum bi mu'minin.",
            "anaCeviri": "Ve insanlardan kimi , ALLAH'a ve ahiret gününe inandıklarını söyler ve onlar inanıyor değildirler.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "وَمِنَ",
                    "kelime": "ve mine",
                    "anlam": "ve -dan",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "النَّاسِ",
                    "kelime": "n-nāsi",
                    "anlam": "insanlar",
                    "kok": "ن و س"
                },
                {
                    "id": 3,
                    "arapca": "مَنْ",
                    "kelime": "men",
                    "anlam": "kimi",
                    "kok": ""
                },
                {
                    "id": 4,
                    "arapca": "يَقُولُ",
                    "kelime": "yeḳūlu",
                    "anlam": "söyler",
                    "kok": "ق و ل"
                },
                {
                    "id": 5,
                    "arapca": "امَنَّا",
                    "kelime": "āmennā",
                    "anlam": "inandık",
                    "kok": "ا م ن"
                },
                {
                    "id": 6,
                    "arapca": "بِاللَّهِ",
                    "kelime": "billahi",
                    "anlam": "ALLAH’a",
                    "kok": ""
                },
                {
                    "id": 7,
                    "arapca": "وَبِالْيَوْمِ",
                    "kelime": "ve bil-yevmi",
                    "anlam": "ve gününe",
                    "kok": "ي و م"
                },
                {
                    "id": 8,
                    "arapca": "الْاخِرِ",
                    "kelime": "l-āḣiri",
                    "anlam": "ahiret",
                    "kok": "ا خ ر"
                },
                {
                    "id": 9,
                    "arapca": "وَمَا",
                    "kelime": "vemā",
                    "anlam": "ve değildiler",
                    "kok": ""
                },
                {
                    "id": 10,
                    "arapca": "هُمْ",
                    "kelime": "hum",
                    "anlam": "onlar",
                    "kok": ""
                },
                {
                    "id": 11,
                    "arapca": "بِمُؤْمِنِينَ",
                    "kelime": "bimu'minīne",
                    "anlam": "inanıyor",
                    "kok": "ا م ن"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Ve insanlardan kimi , ALLAH'a ve ahiret gününe inandıklarını söyler ve onlar inanıyor değildirler."
                }
            ]
        },
        "9": {
            "arapca": "يُخَادِعُونَ اللّٰهَ وَالَّذ۪ينَ اٰمَنُواۚ وَمَا يَخْدَعُونَ اِلَّٓا اَنْفُسَهُمْ وَمَا يَشْعُرُونَۜ",
            "latinOkunus": "Yuhadiunallahe vellezine amenu, ve ma yahdeune illa enfusehum ve ma yeş'urun.",
            "anaCeviri": "Allah’ı ve inanan kimseleri aldatıyor (zannederler), halbuki kendilerinden başkasını aldatamazlar, anlayan değiller.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "يُخَادِعُونَ",
                    "kelime": "yuḣādiǔne",
                    "anlam": "aldatıyor",
                    "kok": "خ د ع"
                },
                {
                    "id": 2,
                    "arapca": "اللَّهَ",
                    "kelime": "llahe",
                    "anlam": "Allah’ı",
                    "kok": ""
                },
                {
                    "id": 3,
                    "arapca": "وَالَّذِينَ",
                    "kelime": "velleƶīne",
                    "anlam": "ve kimseleri",
                    "kok": ""
                },
                {
                    "id": 4,
                    "arapca": "امَنُوا",
                    "kelime": "āmenū",
                    "anlam": "inanan",
                    "kok": "ا م ن"
                },
                {
                    "id": 5,
                    "arapca": "وَمَا",
                    "kelime": "ve mā",
                    "anlam": "halbuki",
                    "kok": ""
                },
                {
                    "id": 6,
                    "arapca": "يَخْدَعُونَ",
                    "kelime": "yeḣdeǔne",
                    "anlam": "aldatamazlar",
                    "kok": "خ د ع"
                },
                {
                    "id": 7,
                    "arapca": "إِلَّا",
                    "kelime": "illā",
                    "anlam": "başkasını",
                    "kok": ""
                },
                {
                    "id": 8,
                    "arapca": "أَنْفُسَهُمْ",
                    "kelime": "enfusehum",
                    "anlam": "kendilerinden",
                    "kok": "ن ف س"
                },
                {
                    "id": 9,
                    "arapca": "وَمَا",
                    "kelime": "ve mā",
                    "anlam": "değiller",
                    "kok": ""
                },
                {
                    "id": 10,
                    "arapca": "يَشْعُرُونَ",
                    "kelime": "yeş’ǔrūne",
                    "anlam": "anlayan",
                    "kok": "ش ع ر"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Allah’ı ve inanan kimseleri aldatıyor (zannederler), halbuki kendilerinden başkasını aldatamazlar, anlayan değiller."
                }
            ]
        },
        "10": {
            "arapca": "ف۪ي قُلُوبِهِمْ مَرَضٌۙ فَزَادَهُمُ اللّٰهُ مَرَضاًۚ وَلَهُمْ عَذَابٌ اَل۪يمٌۙ بِمَا كَانُوا يَكْذِبُونَ",
            "latinOkunus": "Fi kulubihim maradun, fe zadehumullahu marada ve lehum azabun elimun bi ma kanu yekzibun.",
            "anaCeviri": "Onların kablerinde hastalık vardır  ve ALLAH hastalıklarını artırmıştır  yalancı oldukları sebebiyle ,onlara acı  bir azap (vardır).",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "فِي",
                    "kelime": "fī",
                    "anlam": "",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "قُلُوبِهِمْ",
                    "kelime": "ḳulūbihim",
                    "anlam": "onların kablerinde",
                    "kok": "ق ل ب"
                },
                {
                    "id": 3,
                    "arapca": "مَرَضٌ",
                    "kelime": "meraDun",
                    "anlam": "hastalık vardır",
                    "kok": "م ر ض"
                },
                {
                    "id": 4,
                    "arapca": "فَزَادَهُمُ",
                    "kelime": "fezādehumu",
                    "anlam": "artırmıştır",
                    "kok": "ز ي د"
                },
                {
                    "id": 5,
                    "arapca": "اللَّهُ",
                    "kelime": "llahu",
                    "anlam": "ALLAH",
                    "kok": ""
                },
                {
                    "id": 6,
                    "arapca": "مَرَضًا",
                    "kelime": "meraDan",
                    "anlam": "hastalıklarını",
                    "kok": "م ر ض"
                },
                {
                    "id": 7,
                    "arapca": "وَلَهُمْ",
                    "kelime": "velehum",
                    "anlam": "ve onlara",
                    "kok": ""
                },
                {
                    "id": 8,
                    "arapca": "عَذَابٌ",
                    "kelime": "ǎƶābun",
                    "anlam": "bir azab",
                    "kok": "ع ذ ب"
                },
                {
                    "id": 9,
                    "arapca": "أَلِيمٌ",
                    "kelime": "elīmun",
                    "anlam": "acı",
                    "kok": "ا ل م"
                },
                {
                    "id": 10,
                    "arapca": "بِمَا",
                    "kelime": "bimā",
                    "anlam": "sebebiyle",
                    "kok": ""
                },
                {
                    "id": 11,
                    "arapca": "كَانُوا",
                    "kelime": "kānū",
                    "anlam": "olduklarından",
                    "kok": "ك و ن"
                },
                {
                    "id": 12,
                    "arapca": "يَكْذِبُونَ",
                    "kelime": "yekƶibūne",
                    "anlam": "yalancı",
                    "kok": "ك ذ ب"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Onların kablerinde hastalık vardır  ve ALLAH hastalıklarını artırmıştır  yalancı oldukları sebebiyle ,onlara acı  bir azap (vardır)."
                }
            ]
        },
        "11": {
            "arapca": "وَاِذَا ق۪يلَ لَهُمْ لَا تُفْسِدُوا فِي الْاَرْضِۙ قَالُٓوا اِنَّمَا نَحْنُ مُصْلِحُونَ",
            "latinOkunus": "Ve iza kile lehum la tufsidu fil ardı, kalu innema nahnu muslihun.",
            "anaCeviri": "Onlara, yeryüzünde bozgunculuk yapmayın denildiği zaman, biz ancak  düzelticileriz dediler.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "وَإِذَا",
                    "kelime": "ve iƶā",
                    "anlam": "zaman",
                    "kok": ""
                },
                {
                    "id": 2,
                    "arapca": "قِيلَ",
                    "kelime": "ḳīle",
                    "anlam": "denildiği",
                    "kok": "ق و ل"
                },
                {
                    "id": 3,
                    "arapca": "لَهُمْ",
                    "kelime": "lehum",
                    "anlam": "onlara",
                    "kok": ""
                },
                {
                    "id": 4,
                    "arapca": "لَا",
                    "kelime": "lā",
                    "anlam": "yapmayın",
                    "kok": ""
                },
                {
                    "id": 5,
                    "arapca": "تُفْسِدُوا",
                    "kelime": "tufsidū",
                    "anlam": "bozgunculuk",
                    "kok": "ف س د"
                },
                {
                    "id": 6,
                    "arapca": "فِي",
                    "kelime": "fī",
                    "anlam": "",
                    "kok": ""
                },
                {
                    "id": 7,
                    "arapca": "الْأَرْضِ",
                    "kelime": "l-erDi",
                    "anlam": "yeryüzünde",
                    "kok": "ا ر ض"
                },
                {
                    "id": 8,
                    "arapca": "قَالُوا",
                    "kelime": "ḳālū",
                    "anlam": "dediler",
                    "kok": "ق و ل"
                },
                {
                    "id": 9,
                    "arapca": "إِنَّمَا",
                    "kelime": "innemā",
                    "anlam": "ancak",
                    "kok": ""
                },
                {
                    "id": 10,
                    "arapca": "نَحْنُ",
                    "kelime": "neHnu",
                    "anlam": "biz",
                    "kok": ""
                },
                {
                    "id": 11,
                    "arapca": "مُصْلِحُونَ",
                    "kelime": "muSliHūne",
                    "anlam": "düzelticileriz",
                    "kok": "ص ل ح"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ZH",
                    "metin": "Onlara, yeryüzünde bozgunculuk yapmayın denildiği zaman, biz ancak  düzelticileriz dediler."
                }
            ]
        }
    }
};
// YENİ: Ayet açıklamaları için boş nesne

const ayetAciklamalari = {
    "1": { // Fâtiha Suresi
        "2": "Bu ayette geçen 'âlemîn' kelimesi, tüm evreni ve varlıkları kapsar. Rabb'in evrenselliğine vurgu yapar.",
        "5": "Bu ayet, kulluğun ve yardım dilemenin yalnızca Allah'a yöneltilmesi gerektiğini vurgulayan tevhidi bir ilkedir."
    },
    "2": { // Bakara Suresi
        "2": "Bakara Suresi'nin bu ayeti, Kur'an'ın kılavuzluğunu ve sağlamlığını bildirir. Kitabın sağlamlığı, kuşkuya yer bırakmayacak şekilde vurgulanmıştır."
    }
}