/**
 * DATABASE KOS - KOST PUTRI EKSKLUSIF SMART BRILIAN SEMARANG
 * Target saat ini adalah per-kos (single property catalog)
 * Link Google Maps: https://maps.app.goo.gl/bEqnX1ebCgWf5YM96
 */

export const databaseKos = {
  // PROPERTI UTAMA: KOST PUTRI EKSKLUSIF SMART BRILIAN
  smartbrilian: {
    id: 'smartbrilian',
    status: 'AKTIF',
    nama: 'Kost Putri Eksklusif Smart Brilian',
    namaPendek: 'Smart Brilian',
    tipe: 'Khusus Putri (Mahasiswi, Dokter Muda & Karyawati)',
    tagline: 'Hunian Putri Eksklusif, Tenang, & Nyaman Dekat Sam Poo Kong & RSUP Dr. Kariadi Semarang',
    deskripsi: 'Kost putri eksklusif modern yang dirancang khusus untuk kenyamanan belajar mahasiswi, dokter muda / koas RS Kariadi, serta karyawati. Menawarkan kamar ber-AC fully furnished dengan kamar mandi dalam (water heater), Wi-Fi kencang, keamanan CCTV 24 jam, dan lingkungan yang asri serta kondusif.',
    temaWarna: 'rose',
    rating: 4.9,
    totalUlasan: 38,
    
    whatsapp: '6281239914388',
    alamat: 'Jl. Gedung Batu Tengah II No.12A, Kel. Simongan, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50148',
    googleMapsUrl: 'https://maps.app.goo.gl/bEqnX1ebCgWf5YM96',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=-6.996413,110.4001106&hl=id&z=16&output=embed',

    stats: {
      totalKamar: 18,
      kamarTersedia: 3,
      jarakKampus: '2 Menit ke Sam Poo Kong & 5 Menit RS Kariadi',
      kecepatanWifi: '100 Mbps Dedicated Fiber',
      sistemListrik: 'Token Mandiri per Kamar',
    },

    keunggulan: [
      {
        judul: 'Keamanan 24 Jam & Terkontrol',
        deskripsi: 'Akses gerbang tertutup mandiri dengan pengawasan CCTV 24/7 di seluruh area publik untuk ketenangan penghuni dan orang tua.',
        icon: 'ShieldCheck',
      },
      {
        judul: 'Fasilitas Kamar Lengkap (Siap Huni)',
        deskripsi: 'Semua kamar dilengkapi Full AC, Smart TV, Kamar Mandi Dalam dengan Water Heater air hangat, springbed nyaman, dan meja belajar.',
        icon: 'Sparkles',
      },
      {
        judul: 'Lokasi Prime Semarang Barat',
        deskripsi: 'Hanya 2 menit dari Klenteng Sam Poo Kong, 3 menit PT Phapros & Kimia Farma, serta 5 menit RSUP Dr. Kariadi tanpa hambatan macet.',
        icon: 'MapPin',
      },
      {
        judul: 'Fasilitas Bersama Modern & Bersih',
        deskripsi: 'Dapur bersama kompor & gas, dispenser air minum RO gratis, kulkas bersama, mesin cuci & area jemur beratap transparan.',
        icon: 'Utensils',
      },
    ],

    fasilitasUmum: [
      { nama: 'Wi-Fi Fiber High Speed 100 Mbps', icon: 'Wifi', desc: 'Internet stabil untuk tugas kuliah, Zoom meeting, skripsi, dan streaming tanpa lag' },
      { nama: 'CCTV 24 Jam & Smart Access', icon: 'ShieldCheck', desc: 'Sistem keamanan gerbang tertutup dan pantauan kamera CCTV 24 jam demi kenyamanan privasi' },
      { nama: 'Kamar Mandi Dalam + Water Heater', icon: 'Droplets', desc: 'Setiap kamar dilengkapi kamar mandi dalam dengan pemanas air (water heater), shower, & kloset duduk' },
      { nama: 'Full AC & Sirkulasi Alami', icon: 'Wind', desc: 'Pendingin ruangan AC dingin dan hemat energi, dilengkapi jendela untuk sirkulasi udara segar' },
      { nama: 'Dapur Bersama Modern & Lengkap', icon: 'Utensils', desc: 'Dilengkapi kompor gas, wastafel cuci piring, rak piring, dan dispenser air minum galon gratis' },
      { nama: 'Kulkas Bersama & Ruang Penyimpanan', icon: 'Coffee', desc: 'Tersedia kulkas bersama di area dapur untuk menyimpan bahan makanan dan minuman dingin' },
      { nama: 'Mesin Cuci & Area Jemuran Beratap', icon: 'Shirt', desc: 'Fasilitas mesin cuci bersama gratis dan area jemuran luas beratap polycarbonate aman dari hujan' },
      { nama: 'Parkir Motor & Mobil Beratap', icon: 'Car', desc: 'Area parkir kendaraan di dalam pagar yang aman, beratap, dan tidak terpapar panas hujan' },
      { nama: 'Ruang Tamu & Lobby Bersama', icon: 'Key', desc: 'Area khusus untuk menerima kunjungan orang tua, keluarga, atau teman dengan sopan dan nyaman' },
      { nama: 'Petugas Kebersihan Area Bersama', icon: 'CheckCircle2', desc: 'Koridor, dapur, dan area bersama dibersihkan secara rutin oleh petugas kos profesional' },
    ],

    kamar: [
      {
        id: 'smart-deluxe-a',
        nama: 'Tipe A: Deluxe Smart Room (Favorit)',
        kategori: 'ac',
        tipeKm: 'KM Dalam + Water Heater',
        ukuran: '3.5 x 3.5 Meter',
        hargaBulan: 1950000,
        hargaTahun: 21500000,
        status: 'Tersedia',
        sisaKamar: 2,
        badgePromo: 'Paling Diminati',
        gambarUtama: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'AC Hemat Energi (Dingin & Hening)',
          'Smart TV Digital terpasang di dinding',
          'Kamar Mandi Dalam dengan Water Heater (Air Hangat)',
          'Shower Bersih, Kloset Duduk Toto, & Wastafel + Cermin',
          'Springbed Single Berkualitas (120x200 cm) + Bantal & Sprei',
          'Meja Belajar / Kerja Ergonomis & Kursi Nyaman',
          'Lemari Pakaian 2 Pintu dengan Kaca Rias Panjang',
          'Jendela Ventilasi Udara Luar & Gorden Blackout',
          'Stop Kontak Lengkap & Lampu Tidur Warm',
          'Token Listrik Mandiri per Kamar (Kontrol pemakaian pribadi)',
        ],
        biayaLain: 'Sewa bulanan sudah termasuk air bersih, Wi-Fi 100 Mbps, iuran sampah, dan fasilitas bersama. Listrik sistem token mandiri sesuai pemakaian.',
      },
      {
        id: 'smart-suite-b',
        nama: 'Tipe B: Executive Suite Room (Extra Luas)',
        kategori: 'ac',
        tipeKm: 'KM Dalam + Water Heater',
        ukuran: '4 x 4 Meter',
        hargaBulan: 2250000,
        hargaTahun: 24500000,
        status: 'Tersedia',
        sisaKamar: 1,
        badgePromo: 'Tipe Terluas',
        gambarUtama: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kamar Lebih Luas & Plafon Tinggi Sejuk (4 x 4 m)',
          'AC Daikin / Panasonic Dingin Maksimal',
          'Smart TV 32 Inch (YouTube & Netflix Ready)',
          'Kulkas Mini Pribadi di Dalam Kamar',
          'Kamar Mandi Dalam dengan Water Heater Ariston',
          'Kloset Duduk Toto, Shower Bertekanan Kencang & Wastafel Marmer',
          'Kasur Springbed Queen (160x200 cm) Premium Luxury',
          'Meja Kerja Luas + Kursi Hidrolik & Rak Buku',
          'Lemari Pakaian Besar 3 Pintu + Cermin Full Body',
          'Jendela Besar Menghadap View Luar Asri',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Termasuk air bersih, Wi-Fi 100 Mbps, parkir, dan iuran sampah. Listrik token mandiri.',
      },
      {
        id: 'smart-cozy-c',
        nama: 'Tipe C: Cozy Superior Room (Kompak & Nyaman)',
        kategori: 'ac',
        tipeKm: 'KM Dalam',
        ukuran: '3 x 3.5 Meter',
        hargaBulan: 1800000,
        hargaTahun: 19800000,
        status: 'Penuh Terisi',
        sisaKamar: 0,
        badgePromo: 'Waiting List',
        gambarUtama: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'AC Hemat Daya 0.5 PK Dingin & Tenang',
          'Kamar Mandi Dalam Bersih (Shower & Kloset Duduk)',
          'Kasur Springbed Single (100x200 cm) + Bantal',
          'Meja Belajar Kayu & Kursi Santai',
          'Lemari Pakaian 2 Pintu',
          'Jendela Ventilasi Sirkulasi Udara Baik',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Termasuk air bersih, Wi-Fi gratis, dan kebersihan lorong. Listrik sistem token mandiri.',
      },
    ],

    lokasiTerdekat: [
      { nama: 'Klenteng Wisata Sam Poo Kong', jarak: '2 Menit (700 m)', icon: 'Compass', kategori: 'Wisata & Landmark' },
      { nama: 'PT Phapros Tbk & Kawasan Industri Simongan', jarak: '3 Menit (1.1 km)', icon: 'Building2', kategori: 'Perkantoran & Industri' },
      { nama: 'PT Kimia Farma Simongan', jarak: '3 Menit (1.2 km)', icon: 'HeartPulse', kategori: 'Kesehatan & Farmasi' },
      { nama: 'RSUP Dr. Kariadi Semarang (Rumah Sakit Utama)', jarak: '5 Menit (2.3 km)', icon: 'HeartPulse', kategori: 'Rumah Sakit & Koas' },
      { nama: 'Kawasan Pamularsih & Kaligarang Raya', jarak: '3 Menit (1.3 km)', icon: 'Compass', kategori: 'Akses Utama Kota' },
      { nama: 'Universitas Dian Nuswantoro (UDINUS)', jarak: '7 Menit (3.4 km)', icon: 'GraduationCap', kategori: 'Kampus' },
      { nama: 'Pusat Simpang Lima & Ciputra Mall Semarang', jarak: '10 Menit (4.2 km)', icon: 'ShoppingBag', kategori: 'Pusat Perbelanjaan' },
      { nama: 'Bandara Internasional Jenderal Ahmad Yani', jarak: '12 Menit (5.5 km)', icon: 'Plane', kategori: 'Transportasi' },
      { nama: 'Minimarket (Indomaret & Alfamart) & Kuliner Simongan', jarak: '1 Menit (150 m)', icon: 'UtensilsCrossed', kategori: 'Kebutuhan Harian' },
    ],

    ulasanPenghuni: [
      {
        nama: 'dr. Anindya Putri',
        profesi: 'Dokter Muda / Koas RS Kariadi',
        rating: 5,
        teks: 'Lokasinya deket banget ke RSUP Dr. Kariadi, cuma 5 menit ga kena macet. Kamarnya tenang, AC dingin, dan ada water heater jadi pulang dinas malam bisa mandi air hangat dengan nyaman. Ibu kos juga sangat ramah!',
        waktu: '1 bulan lalu'
      },
      {
        nama: 'Clarissa Maharani',
        profesi: 'Mahasiswi S1 Farmasi / Kimia',
        rating: 5,
        teks: 'Kosnya aman banget karena gerbang selalu terkunci dan ada CCTV. Wi-Fi fiber nya kenceng buat nugas atau Zoom seminar. Dapur dan mesin cuci juga sangat membantu menghemat pengeluaran bulanan.',
        waktu: '2 bulan lalu'
      },
      {
        nama: 'Nabila Santoso',
        profesi: 'Karyawati Swasta di Simongan',
        rating: 5,
        teks: 'Parkir mobil dan motor aman di dalam pagar. Lingkungannya asri dan ga bising. Kamar mandi dalam bersih banget kloset duduknya. Rekomendasi buat mahasiswi atau karyawati yang cari kos eksklusif di Semarang.',
        waktu: '3 bulan lalu'
      }
    ],

    faq: [
      {
        tanya: 'Bagaimana cara menjadwalkan survei lokasi kamar?',
        jawab: 'Anda dapat langsung menekan tombol WhatsApp di website ini untuk terhubung dengan pengelola. Kami siap memandu survei langsung ke lokasi atau memberikan video tour kamar terkini.'
      },
      {
        tanya: 'Apakah biaya sewa bulanan sudah termasuk listrik?',
        jawab: 'Biaya sewa bulanan sudah mencakup seluruh fasilitas gratis: air bersih PDAM jernih, Wi-Fi 100 Mbps, pemakaian dapur bersama, mesin cuci, iuran sampah, dan keamanan. Listrik kamar menggunakan sistem token PLN mandiri sehingga Anda bebas mengontrol penggunaan sendiri.'
      },
      {
        tanya: 'Bagaimana ketentuan tamu yang berkunjung?',
        jawab: 'Demi kenyamanan dan privasi sesama penghuni putri, tamu pria (termasuk keluarga/teman) dipersilakan berkunjung di area ruang tamu lantai 1 maksimal hingga pukul 21.00 WIB dan tidak diperkenankan masuk ke lorong kamar.'
      },
      {
        tanya: 'Apakah tersedia fasilitas parkir mobil?',
        jawab: 'Ya, tersedia area parkir mobil dan motor beratap di dalam pagar lingkungan kos. Untuk reservasi slot parkir mobil, silakan konfirmasi terlebih dahulu dengan pengelola.'
      }
    ],

    peraturan: [
      'Khusus dihuni oleh putri (mahasiswi, koas/dokter muda, atau karyawati).',
      'Wajib menjaga ketertiban, kebersihan kamar & area bersama, serta norma kesopanan.',
      'Akses gerbang mandiri (wajib menutup dan mengunci kembali gerbang demi keamanan bersama).',
      'Tamu pria hanya diterima di Ruang Tamu lantai 1 hingga maksimal pukul 21.00 WIB.',
      'Dilarang merokok di dalam kamar tidur ber-AC serta dilarang membawa hewan peliharaan & miras/narkoba.',
      'Pembayaran sewa bulanan dilakukan tepat waktu pada awal periode sewa.',
    ],
  }
};

// Aliases agar URL atau slug lama tetap aman dan tidak error
databaseKos.smart = databaseKos.smartbrilian;
databaseKos['smart-brilian'] = databaseKos.smartbrilian;
databaseKos.kosa = databaseKos.smartbrilian;
databaseKos.kosb = databaseKos.smartbrilian;
databaseKos.hanida = databaseKos.smartbrilian;
databaseKos.hanida2 = databaseKos.smartbrilian;

/**
 * HELPER: Mendapatkan kos aktif
 * Menargetkan per-kos saja (Single Property Catalog):
 * Selalu mengembalikan Kost Putri Eksklusif Smart Brilian sebagai properti utama default,
 * baik dibuka di root (/) maupun subpath apa pun.
 */
export function getActiveKost(customPath = null) {
  // Properti utama default adalah Kost Putri Eksklusif Smart Brilian
  const defaultKost = databaseKos.smartbrilian;

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

/**
 * Cek apakah URL yang sedang dikunjungi adalah kos yang ditolak
 * (Tidak ada kos yang ditolak untuk katalog single property ini)
 */
export function checkIfCurrentPathRejected() {
  return null;
}

/**
 * Mengambil daftar kos aktif
 */
export function getActiveKostsList() {
  return [databaseKos.smartbrilian];
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
  const cleanNomor = nomor.replace(/[^0-9]/g, '');
  let pesan = '';
  if (namaKamar) {
    pesan = `Halo Pengelola ${namaKos}, saya melihat katalog website untuk *${namaKamar}*. Apakah masih tersedia dan bisa saya jadwalkan survei lokasi minggu ini? Terima kasih!`;
  } else {
    pesan = `Halo Pengelola ${namaKos}, saya tertarik ingin menanyakan ketersediaan kamar kosong dan info biaya sewa terbaru. Boleh info jadwal surveinya? Terima kasih!`;
  }
  return `https://wa.me/${cleanNomor}?text=${encodeURIComponent(pesan)}`;
};