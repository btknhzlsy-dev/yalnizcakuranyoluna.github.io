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
            "arapca": "بسم الله الرحمن الرحيم",
            "latinOkunus": "bismi llahi r-raHmāni r-raHīmi",
            "anaCeviri": "Rahman Rahim ALLAH'ın adıyla",
            "kelimeler": [
                { id: 1, "kelime": "bismi", "anlam": "adıyla", "kok": "س م و", "arapca": "بِسْمِ" }, 
                { id: 2, "kelime": "llahi", "anlam": "Allah’ın", "kok": "", "arapca": "اللَّهِ" },
                { id: 3, "kelime": "r-raHmāni", "anlam": "Rahman", "kok": "ر ح م", "arapca": "الرَّحْمَٰنِ" },
                { id: 4, "kelime": "r-raHīmi", "anlam": "Rahim", "kok": "ر ح م", "arapca": "الرَّحِيمِ" }, 
                
            ],
            "ceviriler": [
                { "yazar": "ŞG", "metin": "...." },
                { "yazar": "İE", "metin": "....." },
                { "yazar": "ZH", "metin": "Rahman Rahim ALLAH'ın adıyla" },
            ]
        },

        "2": {
            "arapca": "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            "latinOkunus": "El hamdu lillâhi rabbil âlemîn",
            "anaCeviri": "Alemlerin Rabbi Allah’a hamdolsun",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "الْحَمْدُ",
                    "kelime": "El-Hamdu",
                    "anlam": "hamdolsun",
                    "kok": "ح م د"
                },
                {
                    "id": 2,
                    "arapca": "لِلَّهِ",
                    "kelime": "lillahi",
                    "anlam": "Allah’a",
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
                    "yazar": "ŞG",
                    "metin": "Her işi kusursuz yapmak alemlerin rabbiALLAH'a aittir"
                },
                {
                    "yazar": "İE",
                    "metin": "Hamd Allah’adır; Rabbidir4 âlemlerin"
                },
                {
                    "yazar": "ZH",
                    "metin": "Alemlerin Rabbi Allah’a hamdolsun"
                }
            ]
        },
        "3": {
            "arapca": "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            "latinOkunus": "\"Er-raHmāni r-raHīmi\"",
            "anaCeviri": "Rahman’dır  Rahim’dir.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "الرَّحْمَٰنِ",
                    "kelime": "Er-raHmāni",
                    "anlam": "(O) Rahman’dır",
                    "kok": "ر ح م"
                },
                {
                    "id": 2,
                    "arapca": "الرَّحِيمِ",
                    "kelime": "r-raHīmi",
                    "anlam": "Rahim’dir",
                    "kok": "ر ح م"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ŞG",
                    "metin": "Rahman ve rahimdir."
                },
                {
                    "yazar": "İE",
                    "metin": "Rahmân'dır; Rahîm'dir."
                },
                {
                    "yazar": "ZH",
                    "metin": "Rahman’dır  Rahim’dir."
                }
            ]
        },

        "4": {
            "arapca": "مَٰلِكِ يَوْمِ ٱلدِّينِ",
            "latinOkunus": "Mâliki yevmid",
            "anaCeviri": "Din  gününün sahibidir.",
            "kelimeler": [
                {
                    "id": 1,
                    "arapca": "مَالِكِ",
                    "kelime": "māliki",
                    "anlam": "sahibidir",
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
                    "yazar": "ŞG",
                    "metin": "Din gününün sahibidir."
                },
                {
                    "yazar": "İE",
                    "metin": "Melik'idir din gününün"
                },
                {
                    "yazar": "ZH",
                    "metin": "Din  gününün sahibidir."
                }
            ]
        },


        "5": {
            "arapca": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
            "latinOkunus": "İyyâke na’budu ve iyyâke nestaîn",
            "anaCeviri": "Ancak sana kulluk ederiz ancak senden yardım isteriz.",
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
                    "yazar": "ŞG",
                    "metin": "ancak sana kulluk eder ancak senden yardım dileriz"
                },
                {
                    "yazar": "İE",
                    "metin": "Sana kulluk ederiz; ve sana yardım arz ederiz"
                },
                {
                    "yazar": "ZH",
                    "metin": "Ancak sana kulluk ederiz ancak senden yardım isteriz."
                }
            ]
        },


        "6": {
            "arapca": "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
            "latinOkunus": "İhdinas sırâtel mustakîm",
            "anaCeviri": "Bizi ilet doğru yola.",
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
                    "kelime": "S-SirāTa",
                    "anlam": "yola",
                    "kok": "ص ر ط"
                },
                {
                    "id": 3,
                    "arapca": "الْمُسْتَقِيمَ",
                    "kelime": "l-musteḳīme",
                    "anlam": "DOĞRU",
                    "kok": "ق و م"
                }
            ],
            "ceviriler": [
                {
                    "yazar": "ŞG",
                    "metin": "Bize doğru yolu göster.\t\t\t\\n\t\t\t\\nBize doğru yolu göster."
                },
                {
                    "yazar": "İE",
                    "metin": "Kılavuzla bizleri dosdoğru yola."
                },
                {
                    "yazar": "ZH",
                    "metin": "Bizi ilet doğru yola."
                }
            ]
        },

        "7": {
            "arapca": "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
            "latinOkunus": "Sırâtallezîne en’amte aleyhim gayril magdûbi aleyhim ve lâd dâllîn(dâllîne).",
            "anaCeviri": "Onlaraki nimet verdin kimselerin yoluna kendilerine gazab edilmiş ve sapmış olanların değil.",
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
                    "anlam": "onlar ki",
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
                    "anlam": "değil",
                    "kok": "غ ي ر"
                },
                {
                    "id": 6,
                    "arapca": "الْمَغْضُوبِ",
                    "kelime": "l-meğDūbi",
                    "anlam": "gazabedilmiş olanların",
                    "kok": "غ ض ب"
                },
                {
                    "id": 7,
                    "arapca": "عَلَيْهِمْ",
                    "kelime": "ǎleyhim",
                    "anlam": "kendilerine",
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
                    "yazar": "ŞG",
                    "metin": "Kendilerini nimetlendirdiğin kiselerin yolunu,hoşnut olmadıklarının ve sapıklıkta olanların değil."
                },
                {
                    "yazar": "İE",
                    "metin": "Kimselerin yoluna (ki) nimet verdin üzerlerine; olmayan gazap edilenüzerlerine; ve dalale içindekilerin değil."
                },
                {
                    "yazar": "ZH",
                    "metin": "Kimselerin yoluna (ki) nimet verdin üzerlerine; olmayan gazap edilenüzerlerine; ve dalale içindekilerin değil."
                }
            ]
        }
    },
    
    "2": { // Sure No: 2 (Bakara)
            "1": { 
                "arapca": "بسم الله الرحمن الرحيم",
                "latinOkunus": "bismi llahi r-raHmāni r-raHīmi",
                "anaCeviri": "Rahman Rahim ALLAH'ın adıyla",
                "kelimeler": [
                    { id: 1, "kelime": "bismi", "anlam": "adıyla", "kok": "س م و", "arapca": "بِسْمِ" }, 
                    { id: 2, "kelime": "llahi", "anlam": "Allah’ın", "kok": "ا ل ه", "arapca": "اللَّهِ" },
                    { id: 3, "kelime": "r-raHmāni", "anlam": "Rahman", "kok": "ر ح م", "arapca": "الرَّحْمَٰنِ" },
                    { id: 4, "kelime": "r-raHīmi", "anlam": "Rahim", "kok": "", "arapca": "الرَّحِيمِ" }, 
                    
                ],
                "ceviriler": [
                    { "yazar": "Şinasi Güneş", "metin": "...." },
                    { "yazar": "İbrahim Esinler", "metin": "....." },
                    { "yazar": "Zeki Hızlısoy", "metin": "hgfhgfgh" },
                ]
            },
    }    
    
}

const ayetAciklamalari = {
    "1": { // Fâtiha Suresi
        "2": "Bu ayette geçen 'âlemîn' kelimesi, tüm evreni ve varlıkları kapsar. Rabb'in evrenselliğine vurgu yapar.",
        "5": "Bu ayet, kulluğun ve yardım dilemenin yalnızca Allah'a yöneltilmesi gerektiğini vurgulayan tevhidi bir ilkedir."
    },
    "2": { // Bakara Suresi
        "2": "Bakara Suresi'nin bu ayeti, Kur'an'ın kılavuzluğunu ve sağlamlığını bildirir. Kitabın sağlamlığı, kuşkuya yer bırakmayacak şekilde vurgulanmıştır."
    }
};