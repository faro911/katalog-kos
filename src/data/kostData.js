/**
 * DATABASE KOS - KOST EXCLUSIVE D3WI SEMARANG
 * Target: Single Property Catalog (Per-kos saja)
 * Lokasi: Jl. Graha Prasetya IV, Pedalangan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50268
 * Google Maps: https://maps.app.goo.gl/AdkNWGcGYWk4RAZR7
 * Kontak WhatsApp Pengelola: 0896-8818-0224 (6289688180224)
 */

export const databaseKos = {
  // PROPERTI UTAMA: KOST EXCLUSIVE D3WI
  d3wi: {
    id: 'd3wi',
    status: 'AKTIF',
    nama: 'Kost Exclusive D3WI Semarang',
    namaPendek: 'Kost Exclusive D3WI',
    tipe: 'Boarding House & Kost Eksklusif (Campur / Pasutri / Mahasiswa & Pekerja)',
    targetPenghuni: 'Mahasiswa UNDIP / Polines, Dokter Residen, Dosen, & Karyawan Profesional',
    tagline: 'Hunian Kost Eksklusif Modern & Nyaman di Banyumanik Tembalang — 5 Menit ke Kampus UNDIP',
    deskripsi: 'Kost Exclusive D3WI menghadirkan hunian modern berkelas dengan standar kenyamanan tinggi di kawasan strategis Banyumanik - Tembalang Semarang. Dikelilingi suasana tenang dan bebas bising, properti ini dilengkapi fasilitas premium seperti kamar fully furnished ber-AC, kamar mandi dalam dengan water heater, Smart TV, Wi-Fi fiber optic berkecepatan tinggi, area parkir mobil & motor yang aman, dapur bersama modern, serta akses masuk 24 jam.',
    temaWarna: 'amber-slate', // Luxury Modern Theme: Slate Obsidian & Champagne Gold
    rating: 4.9,
    totalUlasan: 38,
    
    whatsapp: '6289688180224',
    alamat: 'Jl. Graha Prasetya IV, Pedalangan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50268',
    alamatSingkat: 'Jl. Graha Prasetya IV, Banyumanik',
    lokasiSingkat: 'Tembalang - Banyumanik',
    lokasiJudul: 'Lokasi Strategis di Banyumanik - Tembalang, Semarang Atas',
    lokasiDeskripsi: 'Terletak di kawasan hunian yang asri, tenang, dan aman di Banyumanik. Sangat dekat dengan Kampus Universitas Diponegoro (UNDIP) Tembalang, Polines, RSND, pusat perbelanjaan Transmart, dan gerbang tol Banyumanik.',
    googleMapsUrl: 'https://maps.app.goo.gl/AdkNWGcGYWk4RAZR7',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=-7.0575995,110.4230222&hl=id&z=16&output=embed',

    stats: {
      totalKamar: 20,
      kamarTersedia: 3,
      jarakPusat: '5 Menit ke Kampus UNDIP Tembalang',
      kecepatanWifi: '100 Mbps Fiber Optic',
      parkir: 'Carport Mobil & Parkir Motor Indoor Aman',
      keamanan: 'CCTV 24 Jam & Smart Access Door',
    },

    keunggulan: [
      {
        judul: 'Hanya 5 Menit ke Kampus UNDIP',
        deskripsi: 'Sangat strategis di perbatasan Tembalang - Banyumanik. Dekat dengan kampus UNDIP, Polines, RSND, dan akses gerbang tol Banyumanik.',
        icon: 'MapPin',
        badge: 'Lokasi Strategis'
      },
      {
        judul: 'Area Parkir Mobil & Motor Aman',
        deskripsi: 'Dilengkapi area carport mobil dan parkir motor yang lega di dalam area gedung, terlindung dan terpantau kamera CCTV 24 jam.',
        icon: 'Car',
        badge: 'Carport Luas'
      },
      {
        judul: 'Akses Keluar Masuk Bebas 24 Jam',
        deskripsi: 'Akses mandiri 24 jam penuh tanpa jam malam kaku, memberikan fleksibilitas tinggi bagi mahasiswa aktif maupun pekerja shift/dokter.',
        icon: 'ShieldCheck',
        badge: 'Akses 24 Jam'
      },
      {
        judul: 'Kamar Hotel-Grade Fully Furnished',
        deskripsi: 'Setiap kamar telah dilengkapi AC sejuk, kamar mandi dalam dengan shower & kloset duduk, kasur springbed empuk, Smart TV, lemari, dan meja kerja.',
        icon: 'Sparkles',
        badge: 'Full Furnished'
      },
    ],

    fasilitasUmum: [
      { 
        nama: 'Carport Parkir Mobil Pribadi & Tamu', 
        kategori: 'Parkir & Mobilitas',
        icon: 'Car', 
        desc: 'Area parkir mobil beratap di dalam lingkungan kos yang aman dan mudah bermanuver' 
      },
      { 
        nama: 'Parkir Motor Indoor Aman & Luas', 
        kategori: 'Parkir & Mobilitas',
        icon: 'Car', 
        desc: 'Kapasitas parkir motor lega terlindung dari panas dan hujan di dalam pagar properti' 
      },
      { 
        nama: 'Akses Keluar Masuk Bebas 24 Jam', 
        kategori: 'Keamanan',
        icon: 'Key', 
        desc: 'Penghuni memegang akses mandiri bebas jam malam dengan tetap menjaga ketertiban bersama' 
      },
      { 
        nama: 'Pengawasan CCTV 24 Jam Nonstop', 
        kategori: 'Keamanan',
        icon: 'ShieldCheck', 
        desc: 'Kamera pengawas CCTV aktif di area gerbang, tempat parkir mobil/motor, dan seluruh lorong kamar' 
      },
      { 
        nama: 'Wi-Fi Fiber High Speed 100 Mbps', 
        kategori: 'Konektivitas',
        icon: 'Wifi', 
        desc: 'Koneksi internet fiber optic berkecepatan tinggi dengan access point di tiap lantai untuk kuliah daring & WFH' 
      },
      { 
        nama: 'Dapur & Pantry Bersama Lengkap', 
        kategori: 'Kuliner',
        icon: 'Utensils', 
        desc: 'Dilengkapi kompor gas, wastafel cuci piring, kulkas bersama, dan dispenser air minum siap konsumsi' 
      },
      { 
        nama: 'Ruang Tamu & Lobby Bersama', 
        kategori: 'Kenyamanan',
        icon: 'Building2', 
        desc: 'Area komunal yang bersih dan nyaman untuk menerima tamu keluarga maupun diskusi santai' 
      },
      { 
        nama: 'Area Cuci & Jemur Pakaian', 
        kategori: 'Layanan',
        icon: 'Shirt', 
        desc: 'Tempat mencuci dan menjemur pakaian terbuka dengan sirkulasi angin dan matahari optimal' 
      },
      { 
        nama: 'Kamar Mandi Dalam Water Heater', 
        kategori: 'Kenyamanan',
        icon: 'Droplets', 
        desc: 'Tersedia fasilitas water heater air hangat, shower berkualitas, dan kloset duduk bersih' 
      },
      { 
        nama: 'Housekeeping Area Umum Terjadwal', 
        kategori: 'Layanan',
        icon: 'CheckCircle2', 
        desc: 'Pembersihan rutin area lorong, dapur, ruang tamu, dan lingkungan kos demi kenyamanan penghuni' 
      },
    ],

    kamar: [
      {
        id: 'tipe-a-suite',
        nama: 'Tipe A - Suite VVIP (Extra Luas)',
        tipeKamar: 'Tipe A (VVIP)',
        kategori: 'tipe-a',
        tipeKm: 'KM Dalam + Water Heater',
        ukuran: '4 x 5 Meter (20 m²)',
        hargaBulan: 3650000,
        hargaTahun: 39500000,
        status: 'Tersedia',
        sisaKamar: 1,
        badgePromo: 'Paling Mewah & Lengkap',
        tipeKasur: 'Queen Bed (160 x 200 cm)',
        kapasitas: '1 - 2 Orang',
        gambarUtama: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Ruang Kamar Paling Luas (20 m²) dengan Plafon Tinggi & Desain Modern',
          'Kamar Mandi Dalam dengan Water Heater (Air Hangat) & Kloset Duduk',
          'AC Daikin / Panasonic Inverter Dingin Maksimal & Hemat Daya',
          'Smart TV Layar Datar LED di Dalam Kamar',
          'Kulkas Pribadi di Dalam Kamar',
          'Kasur Springbed Queen Size (160x200 cm) Nyaman & Bantal Hotel',
          'Meja Kerja / Belajar Luas Ergonomis + Kursi Busa Nyaman',
          'Lemari Pakaian Besar dengan Cermin Panjang',
          'Jendela Sirkulasi Udara Segar + Gorden Elegan',
          'Slot Parkir Mobil / Carport Khusus VVIP',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Sewa bulanan sudah termasuk air bersih, Wi-Fi fiber optic 100 Mbps, parkir mobil/motor, iuran sampah, dan kebersihan area umum. Listrik sistem token mandiri sesuai pemakaian.',
      },
      {
        id: 'tipe-b-deluxe',
        nama: 'Tipe B - Deluxe Room',
        tipeKamar: 'Tipe B (Deluxe)',
        kategori: 'tipe-b',
        tipeKm: 'KM Dalam + Kloset Duduk',
        ukuran: '3.5 x 4 Meter (14 m²)',
        hargaBulan: 2850000,
        hargaTahun: 31000000,
        status: 'Tersedia',
        sisaKamar: 2,
        badgePromo: 'Best Seller / Terpopuler',
        tipeKasur: 'Queen Bed (140 x 200 cm)',
        kapasitas: '1 - 2 Orang',
        gambarUtama: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kamar Mandi Dalam dengan Shower Air Kencang & Kloset Duduk',
          'AC Sejuk Dingin & Terawat Berkala',
          'Smart TV Layar Datar di Dalam Kamar',
          'Kasur Springbed Berkualitas + Sprei & Bantal Nyaman',
          'Meja Belajar / Kerja + Kursi',
          'Lemari Pakaian 2 Pintu dengan Gantungan Baju',
          'Jendela dengan Ventilasi Alami & Pencahayaan Optimal',
          'Akses Wi-Fi High Speed Kuat di Kamar',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Termasuk pemakaian air bersih, Wi-Fi 100 Mbps, parkir motor/mobil bersama, dan pemakaian dapur bersama. Listrik token mandiri.',
      },
      {
        id: 'tipe-c-superior',
        nama: 'Tipe C - Superior Standard',
        tipeKamar: 'Tipe C (Superior)',
        kategori: 'tipe-c',
        tipeKm: 'KM Dalam Shower + Kloset Duduk',
        ukuran: '3 x 4 Meter (12 m²)',
        hargaBulan: 2600000,
        hargaTahun: 28500000,
        status: 'Tersedia',
        sisaKamar: 1,
        badgePromo: 'Paling Terjangkau',
        tipeKasur: 'Single Bed (120 x 200 cm)',
        kapasitas: '1 Orang',
        gambarUtama: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kamar Mandi Dalam dengan Kloset Duduk & Shower',
          'AC Sejuk Dingin',
          'Kasur Springbed Single Empuk + Bantal',
          'Meja Belajar Minimalis & Kursi',
          'Lemari Pakaian Pintu Kayu Minimalis',
          'Koneksi Wi-Fi Fiber Optic Cepat',
          'Ventilasi Jendela Udara Segar',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Termasuk air bersih, Wi-Fi internet, dan fasilitas dapur bersama. Listrik sistem token mandiri.',
      },
    ],

    lokasiTerdekat: [
      { 
        nama: 'Kampus Universitas Diponegoro (UNDIP) Tembalang', 
        jarak: '5 Menit (2.1 km)', 
        icon: 'GraduationCap', 
        kategori: 'Kampus & Pendidikan',
        highlight: 'Kampus Utama UNDIP' 
      },
      { 
        nama: 'Politeknik Negeri Semarang (Polines)', 
        jarak: '6 Menit (2.5 km)', 
        icon: 'GraduationCap', 
        kategori: 'Kampus & Pendidikan',
        highlight: 'Dekat Polines' 
      },
      { 
        nama: 'RS Nasional Diponegoro (RSND) Tembalang', 
        jarak: '8 Menit (3.2 km)', 
        icon: 'HeartPulse', 
        kategori: 'Rumah Sakit & Kesehatan',
        highlight: 'Fasilitas Medis Lengkap' 
      },
      { 
        nama: 'Gerbang Pintu Tol Banyumanik & Tembalang', 
        jarak: '5 Menit (1.8 km)', 
        icon: 'Compass', 
        kategori: 'Transportasi & Tol',
        highlight: 'Akses Tol Trans Jawa' 
      },
      { 
        nama: 'Transmart Banyumanik & Cinema XXI', 
        jarak: '6 Menit (2.3 km)', 
        icon: 'ShoppingBag', 
        kategori: 'Mall & Belanja',
        highlight: 'Mall & Bioskop' 
      },
      { 
        nama: 'Superindo Sukun & Swalayan ADA Banyumanik', 
        jarak: '5 Menit (2.0 km)', 
        icon: 'ShoppingBag', 
        kategori: 'Kebutuhan Harian',
        highlight: 'Belanja Harian' 
      },
      { 
        nama: 'Sentra Kuliner Banyu Banyumanik & Cafe Tembalang', 
        jarak: '3 Menit (1.0 km)', 
        icon: 'UtensilsCrossed', 
        kategori: 'Sentra Kuliner',
        highlight: 'Banyak Pilihan Kuliner' 
      },
      { 
        nama: 'RS Banyumanik & RS Hermina Banyumanik', 
        jarak: '7 Menit (2.9 km)', 
        icon: 'HeartPulse', 
        kategori: 'Rumah Sakit & Kesehatan',
        highlight: 'Layanan Rumah Sakit' 
      },
      { 
        nama: 'Stasiun Kereta Tawang & Poncol Semarang', 
        jarak: '20 Menit (12 km)', 
        icon: 'Train', 
        kategori: 'Transportasi Antarkota',
        highlight: 'Akses Kereta Cepat' 
      },
    ],

    ulasanPenghuni: [
      {
        nama: 'Rian Pratama',
        profesi: 'Mahasiswa Pascasarjana UNDIP',
        rating: 5,
        teks: 'Tempatnya tenang sekali, sangat cocok untuk belajar dan ngerjain riset. Kamarnya bersih, kamar mandi dalam shower kloset duduk nyaman, AC dingin, dan WiFi lancar. Jarak ke kampus UNDIP cuma 5 menit naik motor.',
        waktu: '1 minggu lalu'
      },
      {
        nama: 'dr. Amanda Putri',
        profesi: 'Dokter Residen RSND Tembalang',
        rating: 5,
        teks: 'Fasilitas kamarnya lengkap setara hotel bintang, ada TV dan meja kerja yang nyaman. Akses 24 jam jadi tidak ribet kalau pulang dinas malam atau operasi mendadak. Parkir mobilnya juga aman di dalam pagar.',
        waktu: '3 minggu lalu'
      },
      {
        nama: 'Dimas & Istri',
        profesi: 'Karyawan BUMN & Dosen',
        rating: 5,
        teks: 'Senang tinggal di Kost Exclusive D3WI. Lingkungannya aman, bersih, dan pengelola ramah serta responsif. Kamar tipe VVIP-nya lega banget dengan sirkulasi udara yang segar di kawasan Banyumanik.',
        waktu: '1 bulan lalu'
      }
    ],

    faq: [
      {
        tanya: 'Apakah Kost Exclusive D3WI menerima mahasiswa dan pekerja?',
        jawab: 'Ya, Kost Exclusive D3WI terbuka untuk mahasiswa (UNDIP, Polines, dll), dokter residen, dosen, maupun karyawan profesional yang mencari hunian tenang, bersih, kondusif, dan berfasilitas lengkap.'
      },
      {
        tanya: 'Bagaimana fasilitas parkir kendaraan di Kost Exclusive D3WI?',
        jawab: 'Kami menyediakan area carport parkir mobil dan parkir motor yang aman di dalam area properti yang berpagar dan terpantau kamera CCTV 24 jam nonstop.'
      },
      {
        tanya: 'Apakah ada batasan jam malam di Kost Exclusive D3WI?',
        jawab: 'Penghuni memiliki akses mandiri 24 jam untuk keluar masuk gedung, sehingga sangat fleksibel bagi Anda yang memiliki jadwal kuliah padat, riset laboratorium, atau jam kerja dinas malam, dengan tetap menjaga ketenangan bersama.'
      },
      {
        tanya: 'Apakah biaya sewa bulanan sudah termasuk air dan internet Wi-Fi?',
        jawab: 'Ya, sewa bulanan sudah all-in termasuk air bersih, Wi-Fi fiber optic berkecepatan tinggi, pemakaian dapur bersama, iuran sampah, dan kebersihan area umum. Listrik menggunakan meteran token mandiri di tiap kamar sesuai pemakaian masing-masing.'
      },
      {
        tanya: 'Bagaimana cara survei kamar atau reservasi unit?',
        jawab: 'Anda dapat langsung menghubungi pengelola melalui tombol WhatsApp di website ini untuk menanyakan ketersediaan kamar kosong terbaru atau menjadwalkan kunjungan survei lokasi ke Jl. Graha Prasetya IV Banyumanik.'
      }
    ],

    peraturan: [
      'Menjaga ketenangan dan kenyamanan lingkungan bersama, terutama pada jam istirahat malam (pukul 22.00 - 06.00 WIB).',
      'Akses mandiri 24 jam. Harap selalu menutup dan mengunci kembali pintu gerbang setelah keluar-masuk demi keamanan bersama.',
      'Tamu dipersilakan berkunjung di Ruang Tamu / Lobby Bersama. Untuk tamu yang menginap wajib konfirmasi terlebih dahulu ke pengelola.',
      'Dilarang keras merokok di dalam kamar ber-AC. Merokok hanya diperbolehkan di area outdoor terbuka yang telah disediakan.',
      'Dilarang membawa hewan peliharaan, senjata tajam, miras, serta barang-barang terlarang/narkoba.',
      'Pembayaran sewa bulanan dilakukan tepat waktu pada awal periode sewa setiap bulannya.',
    ],
  }
};

// Aliases agar URL atau slug lama tetap aman dan kompatibel
databaseKos['d-3wi'] = databaseKos.d3wi;
databaseKos['kos-exclusive-d3wi'] = databaseKos.d3wi;
databaseKos['kos-exclusive-d-3wi'] = databaseKos.d3wi;
databaseKos.d3wibanyumanik = databaseKos.d3wi;
databaseKos.bsresidence = databaseKos.d3wi;
databaseKos.smartbrilian = databaseKos.d3wi;
databaseKos.smart = databaseKos.d3wi;
databaseKos['bs-residence'] = databaseKos.d3wi;
databaseKos.kosa = databaseKos.d3wi;
databaseKos.kosb = databaseKos.d3wi;
databaseKos.hanida = databaseKos.d3wi;

/**
 * HELPER: Mendapatkan kos aktif
 * Menargetkan per-kos saja (Single Property Catalog):
 * Selalu mengembalikan Kost Exclusive D3WI sebagai properti utama default.
 */
export function getActiveKost(customPath = null) {
  const defaultKost = databaseKos.d3wi;

  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const paramSlug = urlParams.get('kos');
    if (paramSlug && databaseKos[paramSlug.toLowerCase()]) {
      return databaseKos[paramSlug.toLowerCase()];
    }

    const rawPath = customPath !== null ? customPath : window.location.pathname;
    const pathSlug = rawPath.replace(/^\/+|\/+$/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (pathSlug && databaseKos[pathSlug]) {
      return databaseKos[pathSlug];
    }
  }

  return defaultKost;
}

export function checkIfCurrentPathRejected() {
  return null;
}

export function getActiveKostsList() {
  return [databaseKos.d3wi];
}

// Format Rupiah Helper
export const formatRupiah = (angka) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
};

// WhatsApp Link Generator dengan format pesan profesional & ramah
export const buatLinkWa = (nomor, namaKos, namaKamar = '') => {
  const cleanNomor = (nomor || '6289688180224').replace(/[^0-9]/g, '');
  let pesan = '';
  if (namaKamar) {
    pesan = `Halo Pengelola ${namaKos}, saya melihat katalog website untuk unit *${namaKamar}*. Apakah masih tersedia kamar kosong dan boleh saya jadwalkan survei lokasi minggu ini? Terima kasih!`;
  } else {
    pesan = `Halo Pengelola ${namaKos}, saya tertarik ingin menanyakan info ketersediaan kamar kosong dan survei lokasi di Jl. Graha Prasetya IV Banyumanik. Boleh dibantu infonya? Terima kasih!`;
  }
  return `https://wa.me/${cleanNomor}?text=${encodeURIComponent(pesan)}`;
};
