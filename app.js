// --- DOM ELEMENTLERİ (Global değişkenler, DOM yüklendiğinde atanacak) ---
let gorunumler, anaSayfaGorunumu, sureGorunumu, ayetDetayPenceresi, sureTablosu,
    anaSayfayaDonButonu, detayPenceresiKapatButonu, logoBaglantisi, sureBasligi, headerAnaSayfaBaglantisi,
    ayetListesi, detayPenceresiAyetBasligi, detayPenceresiArapca, detayPenceresiLatinOkunus,
    detayPenceresiKelimeTablosu, detayPenceresiCeviriListesi, kokPenceresi,
    kokPenceresiArkaplan, kokPenceresiKapatButonu, kokPenceresiKok, kokPenceresiAnlam,
    kokPenceresiBasligi, oncekiAyetButonu, sonrakiAyetButonu, oncekiAyetMetni,
    sonrakiAyetMetni, ayetNavigasyonBilgisi;

// YENİ: Arama Elementleri
let aramaGorunumu, aramaFormu, aramaInputu, aramaGeriButonu, aramaBasligi, aramaSonucListesi,
    aramaTanimAlani, aramaTemizleButonu, kurandaAratButonu;

// --- UYGULAMA MANTIĞI (TÜRKÇELEŞTİRİLMİŞ FONKSİYONLAR) ---

// --- GÖRÜNÜM YÖNETİCİSİ ---
function gorunumuGoster(gorunumId) {
    gorunumler.forEach(gorunum => {
        if (gorunum.id === gorunumId) {
            gorunum.classList.add('active');
        } else {
            gorunum.classList.remove('active');
        }
    });
    window.scrollTo(0, 0); // Sayfanın başına git
}

// --- ANASAYFA YÜKLEME ---
function anaSayfayiYukle() {
    sureTablosu.innerHTML = ''; // Grid'i temizle
    // Not: kuranSureleri 'kuran_verisi.js' dosyasından geliyor
    kuranSureleri.forEach(sure => {
        const kart = document.createElement('div');
        kart.className = 'bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:border-emerald-500 border border-transparent transition-all duration-200 flex flex-col items-center justify-center text-center h-28';
        kart.innerHTML = `
            <span class="text-sm font-bold text-emerald-600">${sure.id}</span>
            <span class="text-lg font-semibold text-gray-800 mt-1">${sure.name}</span>
        `;
        // Tıklama olayı: İlgili sure görünümünü yükle
        kart.addEventListener('click', () => {
            sureGorunumunuYukle(sure.id, sure.name, sure.ayet_sayisi);
        });
        sureTablosu.appendChild(kart);
    });
    gorunumuGoster('home-view');
}

// --- SURE GÖRÜNÜMÜ YÜKLEME ---
function sureGorunumunuYukle(sureId, sureAdi, ayetSayisi) {
    // sureId'yi string'e çevir (ayetAciklamalari'nda key'ler string olduğu için)
    const sureIdStr = String(sureId);

    sureBasligi.textContent = `${sureIdStr}. ${sureAdi} Suresi`;
    ayetListesi.innerHTML = ''; // Eski ayet listesini temizle

    // Örnek veri kontrolü
    // Not: ayetVerisi ve ayetAciklamalari 'kuran_verisi.js' dosyasından geliyor
    const sureVerisi = ayetVerisi[sureIdStr];
    const aciklamalar = ayetAciklamalari[sureIdStr]; // Ayet açıklamalarını al

    if (sureVerisi) {
        // Veri varsa, ayetleri listele
        for (let i = 1; i <= ayetSayisi; i++) {
            const ayetIdStr = String(i);
            const ayet = sureVerisi[ayetIdStr];

            if (ayet) {
                const ayetKarti = document.createElement('div');
                // Ayet kartını konumlandırma için 'relative' yapıyoruz
                ayetKarti.className = 'bg-white p-4 rounded-lg shadow-sm hover:bg-emerald-50 transition-colors relative';

                // YENİ: Açıklama butonu için HTML'i kontrol et
                const aciklamaMetni = aciklamalar ? aciklamalar[ayetIdStr] : null;
                let aciklamaButonuHTML = '';

                if (aciklamaMetni) {
                    // Ayet numarasının sağ üst köşesine yuvarlak, küçük buton
                    aciklamaButonuHTML = `
                        <button class="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md hover:bg-red-600 transition-colors z-10"
                            data-action="show-explanation"
                            data-surah-id="${sureIdStr}"
                            data-verse-id="${ayetIdStr}"
                            title="Özel Açıklamayı Gör">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                            </svg>
                        </button>
                    `;
                }

                ayetKarti.innerHTML = `
                    <div class="cursor-pointer" data-surah-id="${sureIdStr}" data-verse-id="${ayetIdStr}">
                        <span class="font-bold text-emerald-600">${sureIdStr}:${ayetIdStr}</span>
                        <p class="arabic-text text-right mt-2">${ayet.arapca}</p>
                        <p class="font-bold text-gray-800 mt-3">${ayet.anaCeviri || 'Çeviri bulunamadı.'}</p>
                        <p class="text-gray-600 mt-2 italic text-sm">${ayet.latinOkunus}</p>
                    </div>
                    ${aciklamaButonuHTML}
                `;

                // Tıklama olayı: Ayet detay modalını aç (iç div'e)
                ayetKarti.querySelector('.cursor-pointer').addEventListener('click', () => {
                    ayetDetayPenceresiniGoster(sureIdStr, ayetIdStr);
                });

                // YENİ: Açıklama butonu tıklama olayı
                if (aciklamaMetni) {
                    const aciklamaButonu = ayetKarti.querySelector('[data-action="show-explanation"]');
                    aciklamaButonu.addEventListener('click', (e) => {
                        e.stopPropagation(); // Ayet kartının tıklanmasını engelle
                        ayetAciklamasiPenceresiniGoster(sureIdStr, ayetIdStr, aciklamaMetni);
                    });
                }

                ayetListesi.appendChild(ayetKarti);
            } else {
                // Ayet verisi objede bulunmuyorsa (örn. Fatiha 8 yok)
                const ayetKarti = document.createElement('div');
                ayetKarti.className = 'bg-white p-4 rounded-lg shadow-sm opacity-60';

                const ayetIdStr = String(i);

                ayetKarti.innerHTML = `
                    <span class="font-bold text-gray-400">${sureIdStr}:${ayetIdStr}</span>
                    <p class="text-gray-400 mt-2">Bu ayet için örnek veri bulunmamaktadır.</p>
                 `;
                ayetListesi.appendChild(ayetKarti);
            }
        }
    } else {
        // Örnek veri yoksa, ayet sayısı kadar placeholder oluştur
        for (let i = 1; i <= ayetSayisi; i++) {
            const ayetKarti = document.createElement('div');
            ayetKarti.className = 'bg-white p-4 rounded-lg shadow-sm opacity-60';

            // 'i' değişkenini string'e çevirerek tutarlılığı sağla
            const ayetIdStr = String(i);

            ayetKarti.innerHTML = `
                <span class="font-bold text-gray-400">${sureIdStr}:${ayetIdStr}</span>
                <p class="text-gray-400 mt-2">Bu ayet için örnek veri bulunmamaktadır.</p>
            `;
            ayetListesi.appendChild(ayetKarti);
        }
    }

    gorunumuGoster('surah-view');
}


// --- YENİ: ARAMA FONKSİYONLARI ---

/**
 * YENİ: Arapça metni arama için normalleştirir (harekeleri, tatweel'i ve bazı varyasyonları kaldırır).
 */
function normalizeArabic(text) {
    if (!text) return "";
    return text
        .replace(/[\u064B-\u065F]/g, '') // Hareke, Mescit vb. kaldır
        .replace(/[\u0670]/g, 'ا')      // Dagger alif'i -> alif
        .replace(/[\u0671]/g, 'ا')      // 
        .replace(/[\u0640]/g, '')       // Tatweel (uzatma çizgisi) kaldır
        .replace(/أ|إ|آ/g, 'ا')          // Alif varyasyonlarını birleştir
        .replace(/ى/g, 'ي')             // Alif maksura'yı -> ya yap
        .replace(/ة/g, 'ه');            // Ta marbuta'yı -> ha yap
}


/**
 * Arama Tipi 1: Çevirilerde arama yapar.
 */
function ceviriAramaMantiginiCalistir(sorgu) {
    const sonuclar = [];
    const sorguKucuk = sorgu.toLowerCase();

    for (const sureId in ayetVerisi) {
        for (const ayetId in ayetVerisi[sureId]) {
            const ayet = ayetVerisi[sureId][ayetId];
            let eslesenMetinler = [];
            let eslesmeBulundu = false;

            if (ayet.anaCeviri && ayet.anaCeviri.toLowerCase().includes(sorguKucuk)) {
                eslesmeBulundu = true;
                eslesenMetinler.push({ yazar: 'Ana Çeviri', metin: ayet.anaCeviri });
            }

            if (ayet.ceviriler) {
                ayet.ceviriler.forEach(ceviri => {
                    if (ceviri.metin && ceviri.metin.toLowerCase().includes(sorguKucuk)) {
                        eslesmeBulundu = true;
                        if (!eslesenMetinler.find(m => m.yazar === ceviri.yazar)) {
                            eslesenMetinler.push(ceviri);
                        }
                    }
                });
            }

            if (eslesmeBulundu) {
                sonuclar.push({
                    sureId: sureId,
                    ayetId: ayetId,
                    ayet: ayet,
                    eslesenMetinler: eslesenMetinler,
                    eslesenKelimeler: [], // Bu arama tipi için boş
                    bulunanKokler: []  // Bu arama tipi için boş
                });
            }
        }
    }
    return sonuclar;
}

/**
 * Arama Tipi 2: Köklerde arama yapar. (Sorgu başında # olmalı)
 */
function kokAramaMantiginiCalistir(sorgu) {
    const sonuclar = [];

    for (const sureId in ayetVerisi) {
        for (const ayetId in ayetVerisi[sureId]) {
            const ayet = ayetVerisi[sureId][ayetId];
            if (!ayet.kelimeler) continue;

            let eslesenKelimelerArapca = [];

            ayet.kelimeler.forEach(kelime => {
                if (kelime.kok === sorgu) {
                    eslesenKelimelerArapca.push(kelime.arapca);
                }
            });

            if (eslesenKelimelerArapca.length > 0) {
                const uniqueKelimeler = [...new Set(eslesenKelimelerArapca)];
                sonuclar.push({
                    sureId: sureId,
                    ayetId: ayetId,
                    ayet: ayet,
                    eslesenMetinler: [],
                    eslesenKelimeler: uniqueKelimeler,
                    bulunanKokler: [] // Kök zaten sorgunun kendisi
                });
            }
        }
    }
    return sonuclar;
}

/**
 * YENİ: Arama Tipi 3: Arapça kelimelerde arama yapar.
 */
function arapcaAramaMantiginiCalistir(sorgu) {
    const sonuclar = [];
    const normSorgu = normalizeArabic(sorgu); // Aranan kelimeyi normalleştir

    for (const sureId in ayetVerisi) {
        for (const ayetId in ayetVerisi[sureId]) {
            const ayet = ayetVerisi[sureId][ayetId];
            if (!ayet.kelimeler) continue;

            let eslesenKelimelerArapca = new Set();
            let bulunanKokler = new Set();

            ayet.kelimeler.forEach(kelime => {
                const normKelime = normalizeArabic(kelime.arapca);

                // Normalleştirilmiş kelime, normalleştirilmiş sorguyu içeriyorsa
                if (normKelime.includes(normSorgu)) {
                    eslesenKelimelerArapca.add(kelime.arapca); // Vurgulamak için Orijinal kelimeyi kaydet
                    if (kelime.kok) {
                        bulunanKokler.add(kelime.kok); // Olası kökü kaydet
                    }
                }
            });

            if (eslesenKelimelerArapca.size > 0) {
                sonuclar.push({
                    sureId: sureId,
                    ayetId: ayetId,
                    ayet: ayet,
                    eslesenMetinler: [],
                    eslesenKelimeler: [...eslesenKelimelerArapca],
                    bulunanKokler: [...bulunanKokler]
                });
            }
        }
    }
    return sonuclar;
}


/**
 * Metin içinde aranan kelimeyi <mark> ile sararak vurgular.
 * GÜNCELLEME: Arapça için esnek regex kullanır.
 */
function vurgula(metin, sorgu) {
    if (!sorgu || !metin) return metin;
    try {
        let regex;
        // Arapça karakter kontrolü
        if (/[\u0600-\u06FF]/.test(sorgu)) {
            const pattern = getArabicRegexPattern(sorgu);
            regex = new RegExp(`(${pattern})`, 'gi');
        } else {
            const escapedSorgu = escapeRegExp(sorgu);
            regex = new RegExp(`(${escapedSorgu})`, 'gi');
        }
        return metin.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
    } catch (e) {
        console.error("Vurgulama hatası (regex):", e);
        return metin;
    }
}

/**
 * Regex özel karakterlerini kaçış karakteriyle sarmalar.
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Arapça metin için esnek regex deseni oluşturur.
 * Harekeleri, tatweel'i ve harf varyasyonlarını dikkate alır.
 */
function getArabicRegexPattern(text) {
    // 1. Metni temizle (harekeleri ve tatweel'i kaldır)
    // Ancak harf varyasyonlarını korumak istiyoruz, bu yüzden normalizeArabic yerine
    // sadece hareke temizliği yapıp harf bazlı işlem yapacağız.

    // Harekeler ve tatweel için regex parçası (her harften sonra gelebilir)
    const diacritics = "[\\u064B-\\u065F\\u0670\\u0640]*";

    let pattern = "";

    // Girdi metnindeki her karakteri işle
    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        // Eğer karakter hareke veya tatweel ise, zaten diacritics deseni ile kapsanacak, atla
        if (/[\u064B-\u065F\u0670\u0640]/.test(char)) {
            continue;
        }

        // Harf varyasyonları
        let charPattern = escapeRegExp(char);

        if (/[أإآا]/.test(char)) {
            charPattern = "[أإآا]";
        } else if (/[ىي]/.test(char)) {
            charPattern = "[ىي]";
        } else if (/[ةه]/.test(char)) {
            charPattern = "[ةه]";
        }

        // Desene ekle: Harf + Olası Harekeler
        pattern += charPattern + diacritics;
    }

    return pattern;
}


/**
 * Bulunan arama sonuçlarını HTML olarak sayfaya basar.
 * GÜNCELLEME: Artık 3 arama tipini de destekliyor.
 */
function aramaSonuclariniGoster(sonuclar, sorgu, aramaTipi) {
    // 1. Başlığı ayarla
    let tipMetni = "Çeviri";
    if (aramaTipi === 'root') tipMetni = "Kök";
    if (aramaTipi === 'arabic') tipMetni = "Arapça";

    aramaBasligi.innerHTML = `Arama Sonucu (<span class="text-emerald-600">${tipMetni}</span>): <span class="text-gray-900">"${sorgu}"</span> 
        <span class="text-gray-500 font-normal text-xl">(${sonuclar.length} ayet bulundu)</span>`;

    // 2. Kök/Arapça tanımını ayarla
    aramaTanimAlani.innerHTML = ''; // Önceki tanımı temizle
    if (aramaTipi === 'root') {
        const kokAnlami = kokVeritabani[sorgu]; // sozlukler.js'den
        if (kokAnlami) {
            aramaTanimAlani.innerHTML = `
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-emerald-500">
                    <h3 class="text-xl font-bold text-emerald-700" style="font-family: 'Noto Naskh Arabic', serif; direction: rtl;">${sorgu}</h3>
                    <p class="text-gray-700 mt-2" style="white-space: pre-wrap;">${kokAnlami}</p>
                </div>
            `;
        }
    }
    // (Arapça arama için tanım alanı her ayet kartında ayrı ayrı gösterilecek)

    // 3. Sonuç listesini ayarla
    aramaSonucListesi.innerHTML = '';
    if (sonuclar.length === 0) {
        aramaSonucListesi.innerHTML = `<p class="text-gray-600 text-center">Aramanızla eşleşen sonuç bulunamadı.</p>`;
        return;
    }

    // Sonuçları döngüye al ve kart oluştur
    sonuclar.forEach(sonuc => {
        const ayetKarti = document.createElement('div');
        ayetKarti.className = 'bg-white p-4 rounded-lg shadow-sm hover:bg-emerald-50 transition-colors relative';
        // Ayet kartının tıklanmasını engelliyoruz, içindeki linke tıklanacak

        let ayetMetniHTML = '';
        let arapcaMetin = sonuc.ayet.arapca;

        if (aramaTipi === 'translation') {
            // Çeviri metnini vurgula
            ayetMetniHTML = sonuc.eslesenMetinler.map(ceviri => `
                <div class="border-t pt-2 mt-2">
                    <h4 class="font-semibold text-gray-700">${ceviri.yazar}</h4>
                    <p class="text-gray-600">${vurgula(ceviri.metin, sorgu)}</p>
                </div>
            `).join('');
        } else if (aramaTipi === 'root') {
            // Kök aramasında Arapça metni vurgula
            sonuc.eslesenKelimeler.forEach(kelime => {
                arapcaMetin = vurgula(arapcaMetin, kelime);
            });
            ayetMetniHTML = `<p class="font-bold text-gray-800 mt-3">${sonuc.ayet.anaCeviri || 'Çeviri bulunamadı.'}</p>`;

        } else if (aramaTipi === 'arabic') {
            // Arapça aramasında Arapça metni vurgula
            sonuc.eslesenKelimeler.forEach(kelime => {
                arapcaMetin = vurgula(arapcaMetin, kelime);
            });

            // "Olası Kök" kutucuğunu oluştur
            const kokMetni = sonuc.bulunanKokler.length > 0 ?
                sonuc.bulunanKokler.map(kok => `<span class="font-mono text-emerald-700">${kok}</span>`).join(', ') :
                "Kök bilgisi bulunamadı";

            ayetMetniHTML = `
                <div class="bg-emerald-50 p-2 rounded border-l-4 border-emerald-300 mt-2 w-max">
                    <h4 class="font-semibold text-gray-600 text-xs mb-1">Olası Kök:</h4>
                    <p class="text-base font-bold leading-none text-center" style="font-family: 'Noto Naskh Arabic', serif;">${kokMetni}</p>
                </div>
                <p class="font-bold text-gray-800 mt-3">${sonuc.ayet.anaCeviri || 'Çeviri bulunamadı.'}</p>
            `;
        }

        // Ayet kartı tıklandığında detay modalını açmak için
        const ayetGostermeLinki = document.createElement('div');
        ayetGostermeLinki.className = 'cursor-pointer';
        ayetGostermeLinki.innerHTML = `
            <span class="font-bold text-emerald-600">${sonuc.sureId}:${sonuc.ayetId}</span>
            <p class="arabic-text text-right mt-2">${arapcaMetin}</p>
            <div class="mt-3 space-y-2">
                ${ayetMetniHTML}
            </div>
        `;

        ayetGostermeLinki.addEventListener('click', () => {
            ayetDetayPenceresiniGoster(sonuc.sureId, sonuc.ayetId);
        });

        ayetKarti.appendChild(ayetGostermeLinki);
        aramaSonucListesi.appendChild(ayetKarti);
    });
}


/**
 * Arama formunu yönetir.
 * GÜNCELLEME: Artık önek (#) veya Arapça karakterleri algılıyor.
 */
function aramaYap(e) {
    e.preventDefault();
    const sorgu = aramaInputu.value.trim();

    if (sorgu.length < 2) {
        alert("Lütfen en az 2 karakter giriniz.");
        return;
    }

    // Ayet referansı (örn. 2:255) kontrolü
    const ayetDeseni = /^\s*(\d{1,3})\s*:\s*(\d{1,3})\s*$/;
    const ayetEslesmesi = sorgu.match(ayetDeseni);
    if (ayetEslesmesi) {
        const sureIdNum = parseInt(ayetEslesmesi[1], 10);
        const ayetIdNum = parseInt(ayetEslesmesi[2], 10);
        const hedefSure = kuranSureleri.find(s => s.id === sureIdNum);

        if (!hedefSure) {
            alert("Girilen sure numarasına ait bir kayıt bulunamadı.");
            return;
        }
        if (ayetIdNum < 1 || ayetIdNum > hedefSure.ayet_sayisi) {
            alert(`${hedefSure.name} suresinde ${ayetIdNum} numaralı bir ayet bulunmuyor.`);
            return;
        }

        ayetDetayPenceresiniGoster(String(sureIdNum), String(ayetIdNum));
        return;
    }

    let sonuclar = [];
    let aramaTipi = 'translation'; // Varsayılan
    let temizSorgu = sorgu;

    if (sorgu.startsWith('#')) {
        // --- KÖK ARAMASI ---
        aramaTipi = 'root';
        temizSorgu = sorgu.substring(1).trim(); // #'i kaldır
        if (temizSorgu.length < 1) {
            alert("Lütfen # sembolünden sonra bir kök giriniz.");
            return;
        }
        sonuclar = kokAramaMantiginiCalistir(temizSorgu);
    } else if (/[\u0600-\u06FF]/.test(sorgu)) {
        // --- ARAPÇA ARAMA ---
        // (Sorgu içinde en az bir Arapça karakter varsa)
        aramaTipi = 'arabic';
        temizSorgu = sorgu;
        sonuclar = arapcaAramaMantiginiCalistir(temizSorgu);
    } else {
        // --- ÇEVİRİ ARAMASI (VARSAYILAN) ---
        aramaTipi = 'translation';
        temizSorgu = sorgu;
        sonuclar = ceviriAramaMantiginiCalistir(temizSorgu);
    }

    // Sonuçları göster
    aramaSonuclariniGoster(sonuclar, temizSorgu, aramaTipi);

    // Arama sonuçları görünümüne geç
    gorunumuGoster('search-view');
}


// --- YENİ: AYET NAVİGASYON FONKSİYONLARI ---

/**
 * Bir sonraki ayeti bulur. Eğer sure sonuna gelindiyse, sonraki sure'nin ilk ayetini döndürür.
 * @param {string} sureId - Mevcut sure ID'si
 * @param {string} ayetId - Mevcut ayet ID'si
 * @returns {Object|null} {sureId, ayetId} veya null (eğer son ayete gelindiyse)
 */
function sonrakiAyetiBul(sureId, ayetId) {
    const sureIdNum = parseInt(sureId);
    const ayetIdNum = parseInt(ayetId);

    // Mevcut sureyi bul
    const mevcutSure = kuranSureleri.find(s => s.id === sureIdNum);
    if (!mevcutSure) return null;

    // Aynı sure içinde bir sonraki ayet var mı?
    if (ayetIdNum < mevcutSure.ayet_sayisi) {
        const sonrakiAyetId = String(ayetIdNum + 1);
        // Ayet verisi var mı kontrol et
        if (ayetVerisi[sureId] && ayetVerisi[sureId][sonrakiAyetId]) {
            return { sureId: sureId, ayetId: sonrakiAyetId };
        }
        // Veri yoksa bile ayet numarasını döndür
        return { sureId: sureId, ayetId: sonrakiAyetId };
    }

    // Sure sonuna gelindiyse, sonraki sure'nin ilk ayetini bul
    const sonrakiSureIndex = kuranSureleri.findIndex(s => s.id === sureIdNum) + 1;
    if (sonrakiSureIndex < kuranSureleri.length) {
        const sonrakiSure = kuranSureleri[sonrakiSureIndex];
        const ilkAyetId = "1";
        return { sureId: String(sonrakiSure.id), ayetId: ilkAyetId };
    }

    // Son sure'nin son ayetine gelindiyse null döndür
    return null;
}

/**
 * Bir önceki ayeti bulur. Eğer sure başına gelindiyse, önceki sure'nin son ayetini döndürür.
 * @param {string} sureId - Mevcut sure ID'si
 * @param {string} ayetId - Mevcut ayet ID'si
 * @returns {Object|null} {sureId, ayetId} veya null (eğer ilk ayete gelindiyse)
 */
function oncekiAyetiBul(sureId, ayetId) {
    const sureIdNum = parseInt(sureId);
    const ayetIdNum = parseInt(ayetId);

    // Mevcut sureyi bul
    const mevcutSure = kuranSureleri.find(s => s.id === sureIdNum);
    if (!mevcutSure) return null;

    // Aynı sure içinde bir önceki ayet var mı?
    if (ayetIdNum > 1) {
        const oncekiAyetId = String(ayetIdNum - 1);
        // Ayet verisi var mı kontrol et
        if (ayetVerisi[sureId] && ayetVerisi[sureId][oncekiAyetId]) {
            return { sureId: sureId, ayetId: oncekiAyetId };
        }
        // Veri yoksa bile ayet numarasını döndür
        return { sureId: sureId, ayetId: oncekiAyetId };
    }

    // Sure başına gelindiyse, önceki sure'nin son ayetini bul
    const oncekiSureIndex = kuranSureleri.findIndex(s => s.id === sureIdNum) - 1;
    if (oncekiSureIndex >= 0) {
        const oncekiSure = kuranSureleri[oncekiSureIndex];
        const sonAyetId = String(oncekiSure.ayet_sayisi);
        return { sureId: String(oncekiSure.id), ayetId: sonAyetId };
    }

    // İlk sure'nin ilk ayetine gelindiyse null döndür
    return null;
}

/**
 * Navigasyon butonlarının durumunu günceller (aktif/pasif, metinler)
 */
function navigasyonButonlariniGuncelle(sureId, ayetId) {
    if (!oncekiAyetButonu || !sonrakiAyetButonu || !oncekiAyetMetni || !sonrakiAyetMetni || !ayetNavigasyonBilgisi) {
        return; // Butonlar henüz tanımlanmamışsa çık
    }

    const oncekiAyet = oncekiAyetiBul(sureId, ayetId);
    const sonrakiAyet = sonrakiAyetiBul(sureId, ayetId);

    // Önceki ayet butonu
    if (oncekiAyet) {
        oncekiAyetButonu.disabled = false;
        const oncekiSure = kuranSureleri.find(s => s.id === parseInt(oncekiAyet.sureId));
        if (oncekiSure && parseInt(oncekiAyet.sureId) < parseInt(sureId)) {
            // Önceki sure'ye geçiliyor
            oncekiAyetMetni.textContent = `${oncekiSure.name} Suresi (${oncekiAyet.ayetId})`;
        } else {
            oncekiAyetMetni.textContent = "Önceki Ayet";
        }
    } else {
        oncekiAyetButonu.disabled = true;
        oncekiAyetMetni.textContent = "Önceki Ayet";
    }

    // Sonraki ayet butonu
    if (sonrakiAyet) {
        sonrakiAyetButonu.disabled = false;
        const sonrakiSure = kuranSureleri.find(s => s.id === parseInt(sonrakiAyet.sureId));
        if (sonrakiSure && parseInt(sonrakiAyet.sureId) > parseInt(sureId)) {
            // Sonraki sure'ye geçiliyor
            sonrakiAyetMetni.textContent = `${sonrakiSure.name} Suresi (${sonrakiAyet.ayetId})`;
        } else {
            sonrakiAyetMetni.textContent = "Sonraki Ayet";
        }
    } else {
        sonrakiAyetButonu.disabled = true;
        sonrakiAyetMetni.textContent = "Sonraki Ayet";
    }

    // Navigasyon bilgisi
    const mevcutSure = kuranSureleri.find(s => s.id === parseInt(sureId));
    if (mevcutSure) {
        ayetNavigasyonBilgisi.textContent = `${mevcutSure.name} Suresi - ${ayetId}/${mevcutSure.ayet_sayisi}`;
    }
}

// --- AYET DETAY MODALI GÖSTERME (Mevcut fonksiyon) ---
function ayetDetayPenceresiniGoster(sureId, ayetId) {
    // ... (Bu fonksiyonun içeriği değişmedi, olduğu gibi kalabilir) ...
    // Veriyi al
    const veri = ayetVerisi[sureId] ? ayetVerisi[sureId][ayetId] : null;


    if (!veri || !veri.kelimeler || veri.kelimeler.length === 0) {
        // Detaylı veri yoksa bile ana verileri göster
        const geciciVeri = ayetVerisi[sureId] ? ayetVerisi[sureId][ayetId] : null;
        detayPenceresiAyetBasligi.textContent = `${sureId}:${ayetId} - Detaylar`;
        detayPenceresiArapca.textContent = geciciVeri ? geciciVeri.arapca : 'Ayet metni bulunamadı.';
        detayPenceresiLatinOkunus.textContent = geciciVeri ? geciciVeri.latinOkunus : 'Transliterasyon bulunamadı.';
        detayPenceresiKelimeTablosu.innerHTML = '<tr><td colspan="5" class="p-4 text-center text-gray-500">Bu ayet için detaylı kelime analizi verisi eklenmemiştir.</td></tr>';

        // Çevirileri yine de göster (varsa)
        if (geciciVeri && geciciVeri.ceviriler && geciciVeri.ceviriler.length > 0) {
            detayPenceresiCeviriListesi.innerHTML = ''; // Listeyi temizle
            geciciVeri.ceviriler.forEach(ceviri => {
                const oge = document.createElement('div');
                oge.className = 'border-b pb-3';
                oge.innerHTML = `
                    <h4 class="font-semibold text-gray-700">${ceviri.yazar}</h4>
                    <p class="text-gray-600">${ceviri.metin}</p>
                `;
                detayPenceresiCeviriListesi.appendChild(oge);
            });
        } else {
            detayPenceresiCeviriListesi.innerHTML = '<div class="p-4 text-center text-gray-500">Bu ayet için çeviri verisi eklenmemiştir.</div>';
        }

        // Navigasyon butonlarını güncelle
        navigasyonButonlariniGuncelle(sureId, ayetId);

        // Modal içeriğine mevcut sure ve ayet ID'lerini kaydet
        const modalIcerik = document.getElementById('verse-modal-content');
        if (modalIcerik) {
            modalIcerik.setAttribute('data-sure-id', sureId);
            modalIcerik.setAttribute('data-ayet-id', ayetId);
        }

        ayetDetayPenceresi.classList.add('active');
        return;
    }

    // --- Veri varsa modalı doldur ---

    // Başlık
    detayPenceresiAyetBasligi.textContent = `${sureId}:${ayetId} - Ayet Detayları`;

    // Ayet
    detayPenceresiArapca.textContent = veri.arapca;
    detayPenceresiLatinOkunus.textContent = veri.latinOkunus;

    // Kelime Tablosu
    detayPenceresiKelimeTablosu.innerHTML = ''; // Tabloyu temizle
    veri.kelimeler.forEach(kelime => {
        const satir = document.createElement('tr');
        satir.style.display = 'table-row';

        // Standart hücreleri oluştur
        const idHucresi = document.createElement('td');
        idHucresi.className = 'px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900';
        idHucresi.style.display = 'table-cell';
        idHucresi.textContent = kelime.id;

        // YENİ: Arapça Kelime Hücresi
        const arapcaHucresi = document.createElement('td');
        arapcaHucresi.className = 'px-4 py-2 text-sm text-emerald-800 font-medium'; // Rengi belirgin olsun
        arapcaHucresi.style.display = 'table-cell';
        arapcaHucresi.style.fontFamily = "'Noto Naskh Arabic', serif"; // Arapça fontu
        arapcaHucresi.style.fontSize = '1.25rem'; // Fontu büyüt
        arapcaHucresi.style.direction = 'rtl'; // Sağdan sola

        // Arapça kelime açıklamasını 'arapcaKelimeVeritabani' sözlüğünden al (sozlukler.js'den)
        const arapcaAciklamasi = arapcaKelimeVeritabani[kelime.arapca];

        if (arapcaAciklamasi) {
            const arapcaButonu = document.createElement('button');
            arapcaButonu.className = 'hover:text-emerald-600 border-b border-emerald-700 border-dotted cursor-pointer text-right w-full';
            arapcaButonu.textContent = kelime.arapca;

            // Tıklama olayı: Arapça kelime modalını aç
            arapcaButonu.addEventListener('click', () => {
                arapcaKelimePenceresiniGoster(kelime.arapca, arapcaAciklamasi); // Bulunan anlamı gönder
            });

            arapcaHucresi.appendChild(arapcaButonu);
        } else {
            arapcaHucresi.textContent = kelime.arapca;
        }

        const kelimeHucresi = document.createElement('td');
        kelimeHucresi.className = 'px-4 py-2 text-sm text-gray-700 font-medium';
        kelimeHucresi.style.display = 'table-cell';

        // Kelime anlamını 'kelimeVeritabani' sözlüğünden al (sozlukler.js'den)
        const kelimeAnlami = kelimeVeritabani[kelime.kelime];

        // Kelimeyi de tıklanabilir yap
        if (kelimeAnlami) {
            const kelimeButonu = document.createElement('button');
            kelimeButonu.className = 'text-emerald-700 font-medium hover:text-emerald-900 border-b border-emerald-700 border-dotted cursor-pointer text-left';
            kelimeButonu.textContent = kelime.kelime;

            // Tıklama olayı: Kelime modalını aç
            kelimeButonu.addEventListener('click', () => {
                kelimePenceresiniGoster(kelime.kelime, kelimeAnlami); // Bulunan anlamı gönder
            });

            kelimeHucresi.appendChild(kelimeButonu);
        } else {
            kelimeHucresi.textContent = kelime.kelime;
        }

        const anlamHucresi = document.createElement('td');
        anlamHucresi.className = 'px-4 py-2 text-sm text-gray-500';
        anlamHucresi.style.display = 'table-cell';

        // Anlam açıklamasını 'anlamVeritabani' sözlüğünden al (sozlukler.js'den)
        const anlamAciklamasi = anlamVeritabani[kelime.anlam];

        // Anlamı da tıklanabilir yap
        if (anlamAciklamasi) {
            const anlamButonu = document.createElement('button');
            anlamButonu.className = 'text-emerald-700 font-medium hover:text-emerald-900 border-b border-emerald-700 border-dotted cursor-pointer text-left';
            anlamButonu.textContent = kelime.anlam;

            // Tıklama olayı: Anlam modalını aç
            anlamButonu.addEventListener('click', () => {
                anlamPenceresiniGoster(kelime.anlam, anlamAciklamasi); // Bulunan açıklamayı gönder
            });

            anlamHucresi.appendChild(anlamButonu);
        } else {
            anlamHucresi.textContent = kelime.anlam;
        }


        // Hücreleri satıra ekle (YENİ SIRAYLA)
        satir.appendChild(idHucresi);
        satir.appendChild(arapcaHucresi); // Arapça eklendi
        satir.appendChild(kelimeHucresi);
        satir.appendChild(anlamHucresi);

        // Kök hücresini (rootCell) oluştur
        const kokHucresi = document.createElement('td');
        kokHucresi.className = 'px-4 py-2 text-sm text-gray-500';
        kokHucresi.style.display = 'table-cell'; // Explicitly set display

        // Kök anlamını 'kokVeritabani' sözlüğünden al (sozlukler.js'den)
        const kokAnlami = kokVeritabani[kelime.kok];

        if (kokAnlami && kelime.kok) {
            // Tıklanabilir kök butonu oluştur
            const kokButonu = document.createElement('button');
            kokButonu.className = 'text-emerald-700 font-medium hover:text-emerald-900 border-b border-emerald-700 border-dotted cursor-pointer';
            kokButonu.textContent = kelime.kok;

            // Tıklama olayı: Kök modalını aç
            kokButonu.addEventListener('click', () => {
                kokPenceresiniGoster(kelime.kok, kokAnlami); // Bulunan anlamı gönder
            });

            kokHucresi.appendChild(kokButonu);
        } else {
            kokHucresi.textContent = kelime.kok;
        }

        satir.appendChild(kokHucresi); // Kök hücresini satıra ekle
        detayPenceresiKelimeTablosu.appendChild(satir); // Tamamlanmış satırı tabloya ekle
    });

    // Çeviri Listesi
    detayPenceresiCeviriListesi.innerHTML = ''; // Listeyi temizle
    if (veri.ceviriler && veri.ceviriler.length > 0) {
        veri.ceviriler.forEach(ceviri => {
            const oge = document.createElement('div');
            oge.className = 'border-b pb-3';
            oge.innerHTML = `
                <h4 class="font-semibold text-gray-700">${ceviri.yazar}</h4>
                <p class="text-gray-600">${ceviri.metin}</p>
            `;
            detayPenceresiCeviriListesi.appendChild(oge);
        });
    } else {
        detayPenceresiCeviriListesi.innerHTML = '<div class="p-4 text-center text-gray-500">Bu ayet için çeviri verisi eklenmemiştir.</div>';
    }

    // Navigasyon butonlarını güncelle
    navigasyonButonlariniGuncelle(sureId, ayetId);

    // Modal içeriğine mevcut sure ve ayet ID'lerini kaydet
    const modalIcerik = document.getElementById('verse-modal-content');
    if (modalIcerik) {
        modalIcerik.setAttribute('data-sure-id', sureId);
        modalIcerik.setAttribute('data-ayet-id', ayetId);
    }

    // Modalı göster
    ayetDetayPenceresi.classList.add('active');
}

// Kök Detay Modalını Gösterme Fonksiyonu (Mevcut fonksiyon)
function kokPenceresiniGoster(kok, anlam) {
    kokPenceresiBasligi.textContent = "Kök Anlamı"; // Başlığı ayarla
    kokPenceresiKok.textContent = kok;
    kokPenceresiKok.style.direction = 'rtl'; // Kökler için RTL
    kokPenceresiKok.style.fontFamily = "'Noto Naskh Arabic', serif"; // Kökler için Arapça fontu
    kokPenceresiAnlam.textContent = anlam;

    // YENİ: Arama butonunu gizle
    if (kurandaAratButonu) kurandaAratButonu.classList.add('hidden');

    kokPenceresi.classList.add('active');
}

// Kelime Detay Modalını Gösterme Fonksiyonu (Mevcut fonksiyon)
function kelimePenceresiniGoster(kelime, anlam) {
    kokPenceresiBasligi.textContent = "Kelime Anlamı"; // Başlığı ayarla
    kokPenceresiKok.textContent = kelime; // Kelimeyi göster
    kokPenceresiKok.style.direction = 'ltr'; // Kelimeler (transliterasyon) için LTR
    kokPenceresiKok.style.fontFamily = "'Inter', sans-serif"; // Standart font
    kokPenceresiAnlam.textContent = anlam;

    // YENİ: Arama butonunu gizle
    if (kurandaAratButonu) kurandaAratButonu.classList.add('hidden');

    kokPenceresi.classList.add('active');
}

// Anlam Detay Modalını Gösterme Fonksiyonu (Mevcut fonksiyon)
function anlamPenceresiniGoster(anlam, aciklama) {
    kokPenceresiBasligi.textContent = "Anlam Açıklaması"; // Başlığı ayarla
    kokPenceresiKok.textContent = anlam; // Anlamı göster
    kokPenceresiKok.style.direction = 'ltr'; // Anlamlar (latin) için LTR
    kokPenceresiKok.style.fontFamily = "'Inter', sans-serif"; // Standart font
    kokPenceresiAnlam.textContent = aciklama;

    // YENİ: Arama butonunu gizle
    if (kurandaAratButonu) kurandaAratButonu.classList.add('hidden');

    kokPenceresi.classList.add('active');
}

// Arapça Kelime Detay Modalını Gösterme Fonksiyonu (Mevcut fonksiyon)
function arapcaKelimePenceresiniGoster(arapcaKelime, aciklama) {
    kokPenceresiBasligi.textContent = "Arapça Kelime"; // Başlığı ayarla
    kokPenceresiKok.textContent = arapcaKelime; // Arapça kelimeyi göster
    kokPenceresiKok.style.direction = 'rtl'; // Arapça için RTL
    kokPenceresiKok.style.fontFamily = "'Noto Naskh Arabic', serif"; // Arapça fontu
    kokPenceresiAnlam.textContent = aciklama;

    // YENİ: Arama butonunu göster ve işlevsellik ekle
    if (kurandaAratButonu) {
        kurandaAratButonu.classList.remove('hidden');

        // Eski event listener'ları temizlemek için klonlama (basit yöntem)
        const yeniButon = kurandaAratButonu.cloneNode(true);
        kurandaAratButonu.parentNode.replaceChild(yeniButon, kurandaAratButonu);
        kurandaAratButonu = yeniButon;

        kurandaAratButonu.addEventListener('click', () => {
            // Modalları kapat
            kokPenceresi.classList.remove('active');
            ayetDetayPenceresi.classList.remove('active');

            // Arama inputuna kelimeyi yaz
            aramaInputu.value = arapcaKelime;

            // Arama fonksiyonunu tetikle (submit eventini simüle et)
            const event = new Event('submit');
            aramaFormu.dispatchEvent(event);
        });
    }

    kokPenceresi.classList.add('active');
}

// YENİ: Ayet Açıklaması Modalını Gösterme Fonksiyonu
function ayetAciklamasiPenceresiniGoster(sureId, ayetId, aciklamaMetni) {
    const ayet = ayetVerisi[sureId] ? ayetVerisi[sureId][ayetId] : null;

    // Açılır pencerenin başlığını ve içeriğini ayarla
    kokPenceresiBasligi.textContent = `Özel Açıklama (${sureId}:${ayetId})`;

    // Ayet metnini üst kısımda göster (Arapça)
    kokPenceresiKok.textContent = ayet ? ayet.arapca : '';
    kokPenceresiKok.style.direction = 'rtl';
    kokPenceresiKok.style.fontFamily = "'Noto Naskh Arabic', serif";
    kokPenceresiKok.classList.add('border-b', 'pb-4', 'mb-4'); // Ayrım çizgisi ekle

    // Açıklamayı anlam alanında göster
    kokPenceresiAnlam.textContent = aciklamaMetni;

    // Modalı göster
    kokPenceresi.classList.add('active');

    // YENİ: Arama butonunu gizle (Ayet açıklamasında gerek yok veya farklı bir mantık olabilir)
    if (kurandaAratButonu) kurandaAratButonu.classList.add('hidden');
}

// --- UYGULAMA BAŞLANGICI (DOM YÜKLENDİĞİNDE) ---
document.addEventListener('DOMContentLoaded', () => {
    // Gerekli DOM elementlerini global değişkenlere ata
    gorunumler = document.querySelectorAll('.view');
    anaSayfaGorunumu = document.getElementById('home-view');
    sureGorunumu = document.getElementById('surah-view');
    ayetDetayPenceresi = document.getElementById('verse-modal');
    sureTablosu = document.getElementById('surah-grid');
    anaSayfayaDonButonu = document.getElementById('back-to-home');
    detayPenceresiKapatButonu = document.getElementById('close-modal');
    logoBaglantisi = document.getElementById('logo-link');
    headerAnaSayfaBaglantisi = document.getElementById('header-home-link');
    sureBasligi = document.getElementById('surah-title');
    ayetListesi = document.getElementById('verse-list');
    detayPenceresiAyetBasligi = document.getElementById('modal-verse-title');
    detayPenceresiArapca = document.getElementById('modal-arabic');
    detayPenceresiLatinOkunus = document.getElementById('modal-transliteration');
    detayPenceresiKelimeTablosu = document.getElementById('modal-words-table');
    detayPenceresiCeviriListesi = document.getElementById('modal-translations-list');
    kokPenceresi = document.getElementById('root-modal');
    kokPenceresiArkaplan = document.getElementById('root-modal-overlay');
    kokPenceresiKapatButonu = document.getElementById('close-root-modal');
    kokPenceresiKok = document.getElementById('root-modal-root');
    kokPenceresiAnlam = document.getElementById('root-modal-meaning');
    kokPenceresiBasligi = document.getElementById('root-modal-title');

    // YENİ: Arama elementlerini ata
    aramaGorunumu = document.getElementById('search-view');
    aramaFormu = document.getElementById('search-form');
    aramaInputu = document.getElementById('search-input');
    aramaGeriButonu = document.getElementById('search-back-to-home');
    aramaBasligi = document.getElementById('search-title');
    aramaSonucListesi = document.getElementById('search-results-list');
    aramaTanimAlani = document.getElementById('search-definition'); // Kök tanımı alanı
    aramaTemizleButonu = document.getElementById('search-clear-btn');

    // YENİ: Kur'an'da arat butonu
    kurandaAratButonu = document.getElementById('search-in-quran-btn');

    // YENİ: Navigasyon butonlarını ata
    oncekiAyetButonu = document.getElementById('prev-verse-btn');
    sonrakiAyetButonu = document.getElementById('next-verse-btn');
    oncekiAyetMetni = document.getElementById('prev-verse-text');
    sonrakiAyetMetni = document.getElementById('next-verse-text');
    ayetNavigasyonBilgisi = document.getElementById('verse-navigation-info');


    // --- UYGULAMAYI BAŞLAT (HATADAN ÖNCE) ---
    anaSayfayiYukle();

    // --- OLAY DİNLEYİCİLERİ ---

    // Navigasyon
    anaSayfayaDonButonu.addEventListener('click', anaSayfayiYukle);
    logoBaglantisi.addEventListener('click', (e) => {
        e.preventDefault();
        anaSayfayiYukle();
    });

    // YENİ: Header Ana Sayfa butonu
    if (headerAnaSayfaBaglantisi) {
        headerAnaSayfaBaglantisi.addEventListener('click', (e) => {
            e.preventDefault();
            anaSayfayiYukle();
        });
    }

    // YENİ: Arama navigasyonu
    if (aramaGeriButonu) {
        aramaGeriButonu.addEventListener('click', anaSayfayiYukle);
    }
    if (aramaFormu) {
        aramaFormu.addEventListener('submit', aramaYap);
    }

    // YENİ: Arama çubuğu placeholder metnini güncelle
    if (aramaInputu) {
        aramaInputu.placeholder = "Çeviri, #kök (örn: #س م و) veya Arapça kelime ara...";
    }

    // YENİ: Arama temizle butonu görünürlüğünü yönet
    if (aramaInputu && aramaTemizleButonu) {
        const temizleButonunuGuncelle = () => {
            if (aramaInputu.value.trim().length > 0) {
                aramaTemizleButonu.classList.remove('hidden');
            } else {
                aramaTemizleButonu.classList.add('hidden');
            }
        };

        aramaInputu.addEventListener('input', temizleButonunuGuncelle);
        aramaTemizleButonu.addEventListener('click', () => {
            aramaInputu.value = '';
            aramaInputu.focus();
            temizleButonunuGuncelle();
        });

        temizleButonunuGuncelle();
    }

    // Modallar
    detayPenceresiKapatButonu.addEventListener('click', () => {
        ayetDetayPenceresi.classList.remove('active');
    });

    // YENİ: Navigasyon butonları event listener'ları
    if (oncekiAyetButonu) {
        oncekiAyetButonu.addEventListener('click', () => {
            // Mevcut ayet bilgisini modal data attribute'larından al
            const modalIcerik = document.getElementById('verse-modal-content');
            if (modalIcerik) {
                const sureId = modalIcerik.getAttribute('data-sure-id');
                const ayetId = modalIcerik.getAttribute('data-ayet-id');
                if (sureId && ayetId) {
                    const oncekiAyet = oncekiAyetiBul(sureId, ayetId);
                    if (oncekiAyet) {
                        ayetDetayPenceresiniGoster(oncekiAyet.sureId, oncekiAyet.ayetId);
                    }
                }
            }
        });
    }

    if (sonrakiAyetButonu) {
        sonrakiAyetButonu.addEventListener('click', () => {
            // Mevcut ayet bilgisini modal data attribute'larından al
            const modalIcerik = document.getElementById('verse-modal-content');
            if (modalIcerik) {
                const sureId = modalIcerik.getAttribute('data-sure-id');
                const ayetId = modalIcerik.getAttribute('data-ayet-id');
                if (sureId && ayetId) {
                    const sonrakiAyet = sonrakiAyetiBul(sureId, ayetId);
                    if (sonrakiAyet) {
                        ayetDetayPenceresiniGoster(sonrakiAyet.sureId, sonrakiAyet.ayetId);
                    }
                }
            }
        });
    }
    // Kök/Açıklama modalını kapatma
    kokPenceresiKapatButonu.addEventListener('click', () => {
        kokPenceresi.classList.remove('active');
        // Kök modalı kapatıldığında stil düzenlemelerini geri al
        kokPenceresiKok.classList.remove('border-b', 'pb-4', 'mb-4');
    });
    kokPenceresiArkaplan.addEventListener('click', () => {
        kokPenceresi.classList.remove('active');
        // Kök modalı kapatıldığında stil düzenlemelerini geri al
        kokPenceresiKok.classList.remove('border-b', 'pb-4', 'mb-4');
    });
    ayetDetayPenceresi.addEventListener('click', (e) => {
        if (e.target === ayetDetayPenceresi) {
            ayetDetayPenceresi.classList.remove('active');
        }
    });

    // YENİ: Klavye kısayolları (sol/sağ ok tuşları ile navigasyon)
    document.addEventListener('keydown', (e) => {
        // Sadece modal açıkken çalışsın ve butonlar tanımlıysa
        if (ayetDetayPenceresi.classList.contains('active') && oncekiAyetButonu && sonrakiAyetButonu) {
            if (e.key === 'ArrowLeft' && !oncekiAyetButonu.disabled) {
                e.preventDefault();
                oncekiAyetButonu.click();
            } else if (e.key === 'ArrowRight' && !sonrakiAyetButonu.disabled) {
                e.preventDefault();
                sonrakiAyetButonu.click();
            }
        }
    });

});