// --- DOM ELEMENTLERİ (Global değişkenler, DOM yüklendiğinde atanacak) ---
let gorunumler, anaSayfaGorunumu, sureGorunumu, ayetDetayPenceresi, sureTablosu,
    anaSayfayaDonButonu, detayPenceresiKapatButonu, logoBaglantisi, sureBasligi,
    ayetListesi, detayPenceresiAyetBasligi, detayPenceresiArapca, detayPenceresiLatinOkunus,
    detayPenceresiKelimeTablosu, detayPenceresiCeviriListesi, kokPenceresi,
    kokPenceresiArkaplan, kokPenceresiKapatButonu, kokPenceresiKok, kokPenceresiAnlam,
    kokPenceresiBasligi;

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
    sureBasligi.textContent = `${sureId}. ${sureAdi} Suresi`;
    ayetListesi.innerHTML = ''; // Eski ayet listesini temizle

    // Örnek veri kontrolü
    // Not: ayetVerisi 'kuran_verisi.js' dosyasından geliyor
    const sureVerisi = ayetVerisi[sureId];

    if (sureVerisi) {
        // Veri varsa, ayetleri listele
        for (let i = 1; i <= ayetSayisi; i++) {
            const ayet = sureVerisi[i];
            if (ayet) {
                const ayetKarti = document.createElement('div');
                // Tıklama olayı için div'i ayarla
                ayetKarti.className = 'bg-white p-4 rounded-lg shadow-sm hover:bg-emerald-50 transition-colors relative';
                // DÜZELTME: Ses oynatma butonu ve ml-10 kaldırıldı
                ayetKarti.innerHTML = `
                    <div class="cursor-pointer" data-surah-id="${sureId}" data-verse-id="${i}">
                        <span class="font-bold text-emerald-600">${sureId}:${i}</span>
                        <p class="arabic-text text-right mt-2">${ayet.arapca}</p>
                        <p class="font-bold text-gray-800 mt-3">${ayet.anaCeviri || 'Çeviri bulunamadı.'}</p>
                        <p class="text-gray-600 mt-2 italic text-sm">${ayet.latinOkunus}</p>
                    </div>
                `;
                
                // Tıklama olayı: Ayet detay modalını aç (iç div'e)
                ayetKarti.querySelector('.cursor-pointer').addEventListener('click', () => {
                    ayetDetayPenceresiniGoster(sureId, i);
                });
                
                // DÜZELTME: TTS Tıklama olayı kaldırıldı

                ayetListesi.appendChild(ayetKarti);
            } else {
                // Ayet verisi objede bulunmuyorsa (örn. Fatiha 8 yok)
                 const ayetKarti = document.createElement('div');
                 ayetKarti.className = 'bg-white p-4 rounded-lg shadow-sm opacity-60';
                 ayetKarti.innerHTML = `
                    <span class="font-bold text-gray-400">${sureId}:${i}</span>
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
            ayetKarti.innerHTML = `
                <span class="font-bold text-gray-400">${sureId}:${i}</span>
                <p class="text-gray-400 mt-2">Bu ayet için örnek veri bulunmamaktadır.</p>
            `;
            ayetListesi.appendChild(ayetKarti);
        }
    }
    
    gorunumuGoster('surah-view');
}

// --- AYET DETAY MODALI GÖSTERME ---
function ayetDetayPenceresiniGoster(sureId, ayetId) {
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
    
    // Modalı göster
    ayetDetayPenceresi.classList.add('active');
}

// Kök Detay Modalını Gösterme Fonksiyonu
function kokPenceresiniGoster(kok, anlam) {
    kokPenceresiBasligi.textContent = "Kök Anlamı"; // Başlığı ayarla
    kokPenceresiKok.textContent = kok;
    kokPenceresiKok.style.direction = 'rtl'; // Kökler için RTL
    kokPenceresiKok.style.fontFamily = "'Noto Naskh Arabic', serif"; // Kökler için Arapça fontu
    kokPenceresiAnlam.textContent = anlam; 
    kokPenceresi.classList.add('active');
}

// Kelime Detay Modalını Gösterme Fonksiyonu
function kelimePenceresiniGoster(kelime, anlam) {
    kokPenceresiBasligi.textContent = "Kelime Anlamı"; // Başlığı ayarla
    kokPenceresiKok.textContent = kelime; // Kelimeyi göster
    kokPenceresiKok.style.direction = 'ltr'; // Kelimeler (transliterasyon) için LTR
    kokPenceresiKok.style.fontFamily = "'Inter', sans-serif"; // Standart font
    kokPenceresiAnlam.textContent = anlam;
    kokPenceresi.classList.add('active');
}

// YENİ: Anlam Detay Modalını Gösterme Fonksiyonu
function anlamPenceresiniGoster(anlam, aciklama) {
    kokPenceresiBasligi.textContent = "Anlam Açıklaması"; // Başlığı ayarla
    kokPenceresiKok.textContent = anlam; // Anlamı göster
    kokPenceresiKok.style.direction = 'ltr'; // Anlamlar (latin) için LTR
    kokPenceresiKok.style.fontFamily = "'Inter', sans-serif"; // Standart font
    kokPenceresiAnlam.textContent = aciklama;
    kokPenceresi.classList.add('active');
}

// YENİ: Arapça Kelime Detay Modalını Gösterme Fonksiyonu
function arapcaKelimePenceresiniGoster(arapcaKelime, aciklama) {
    kokPenceresiBasligi.textContent = "Arapça Kelime"; // Başlığı ayarla
    kokPenceresiKok.textContent = arapcaKelime; // Arapça kelimeyi göster
    kokPenceresiKok.style.direction = 'rtl'; // Arapça için RTL
    kokPenceresiKok.style.fontFamily = "'Noto Naskh Arabic', serif"; // Arapça fontu
    kokPenceresiAnlam.textContent = aciklama;
    kokPenceresi.classList.add('active');
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
    
    // --- OLAY DİNLEYİCİLERİ ---
    anaSayfayaDonButonu.addEventListener('click', anaSayfayiYukle);
    logoBaglantisi.addEventListener('click', (e) => {
        e.preventDefault();
        anaSayfayiYukle();
    });
    detayPenceresiKapatButonu.addEventListener('click', () => {
        ayetDetayPenceresi.classList.remove('active');
    });
    kokPenceresiKapatButonu.addEventListener('click', () => {
        kokPenceresi.classList.remove('active');
    });
    kokPenceresiArkaplan.addEventListener('click', () => {
        kokPenceresi.classList.remove('active');
    });
    ayetDetayPenceresi.addEventListener('click', (e) => {
        if (e.target === ayetDetayPenceresi) {
            ayetDetayPenceresi.classList.remove('active');
        }
    });

    // --- UYGULAMAYI BAŞLAT ---
    anaSayfayiYukle();
});