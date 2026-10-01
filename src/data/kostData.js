/**
 * DATABASE MULTI-KOSAN
 * Menampung berbagai properti kos dalam 1 repo.
 * Bisa diakses via URL /hanida, /griya-asri, atau ?kos=hanida
 */

export const databaseKos = {
  // 1. KOST PUTRI HANIDA 2 (SEMARANG - SAMPANGAN / BENDAN DHUWUR)
  hanida: {
    id: 'hanida',
    nama: 'Kost Putri Hanida 2',
    tipe: 'Khusus Putri (Mahasiswi & Karyawati)',
    tagline: 'Hunian Khusus Putri yang Nyaman, Bersih, dan Tenang di Area Kalipancur - Ngaliyan Semarang',
    temaWarna: 'rose', // rose / emerald / blue
    rating: 4.9,
    totalUlasan: 27,
    
    // Kontak Pengelola (Nomor real Google Maps)
    whatsapp: '6282172772420',
    alamat: 'Jl. Candi Pawon Tengah No.3, Kalipancur, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50183',
    googleMapsUrl: 'https://maps.app.goo.gl/H51eaiRMzdFxTH1i9',

    // Statistik Cepat
    stats: {
      totalKamar: 16,
      kamarTersedia: 4,
      jarakKampus: '1 Menit ke Mart & Kuliner',
      kecepatanWifi: '50 Mbps Fiber',
    },

    // Fasilitas Bersama Khusus Kost Putri
    fasilitasUmum: [
      { nama: 'Wi-Fi Fiber Kencang', icon: 'Wifi', desc: 'Internet stabil untuk tugas kuliah, Zoom meeting, dan streaming' },
      { nama: 'CCTV & Keamanan Gerbang', icon: 'ShieldCheck', desc: 'Akses gerbang tertutup, aman untuk mahasiswi dari orang luar' },
      { nama: 'Dapur Bersama Lengkap', icon: 'Utensils', desc: 'Kompor gas, wastafel cuci piring, & dispenser air minum galon' },
      { nama: 'Kulkas Bersama Tiap Lantai', icon: 'Coffee', desc: 'Penyimpanan bahan makanan dan minuman dingin penghuni' },
      { nama: 'Parkiran Motor Luas Beratap', icon: 'Car', desc: 'Parkir motor aman di dalam gerbang dan tidak kehujanan' },
      { nama: 'Mesin Cuci & Jemuran Luas', icon: 'Shirt', desc: 'Area cuci pakaian mandiri dengan atap transparan di lantai atas' },
      { nama: 'Ruang Tamu Depan Khusus', icon: 'Key', desc: 'Tempat menerima kunjungan keluarga / teman dengan nyaman' },
      { nama: 'Air Bersih PDAM Lancar', icon: 'Droplets', desc: 'Pasokan air jernih dengan tandon penampung cadangan' },
    ],

    // Daftar Kamar Kost Putri Hanida 2 (Kombinasi AC/Kipas & KM Dalam/Luar: 500rb - 1jt)
    kamar: [
      {
        id: 'hanida-ac-km-dalam',
        nama: 'Tipe 1: AC + Kamar Mandi Dalam',
        kategori: 'ac',
        tipeKm: 'KM Dalam',
        ukuran: '3.5 x 3.5 Meter',
        hargaBulan: 1000000,
        hargaTahun: 11000000,
        status: 'Tersedia',
        sisaKamar: 1,
        gambarUtama: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'AC Hemat Daya (Dingin & Hening)',
          'Kamar Mandi Dalam (Kloset Duduk & Shower Bersih)',
          'Kasur Springbed Single (120x200) + Bantal',
          'Meja Belajar Kayu & Kursi',
          'Lemari Pakaian 2 Pintu dengan Kaca Rias',
          'Jendela Ventilasi Udara Alami',
          'Gorden & Tempat Sampah Kamar',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Termasuk air bersih, iuran sampah, dan Wi-Fi gratis. Listrik sistem token mandiri.',
      },
      {
        id: 'hanida-ac-km-luar',
        nama: 'Tipe 2: AC + Kamar Mandi Luar',
        kategori: 'ac',
        tipeKm: 'KM Luar',
        ukuran: '3 x 3.5 Meter',
        hargaBulan: 850000,
        hargaTahun: 9500000,
        status: 'Tersedia',
        sisaKamar: 1,
        gambarUtama: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'AC Hemat Listrik 0.5 PK',
          'Kamar Mandi Luar Bersih (Rasio 1 KM untuk 2 Kamar)',
          'Kasur Springbed Single + Sprei',
          'Meja Belajar & Kursi Nyaman',
          'Lemari Pakaian 2 Pintu',
          'Ventilasi Udara Sejuk',
          'Token Listrik Mandiri',
        ],
        biayaLain: 'Termasuk air, Wi-Fi gratis, dan kebersihan lorong. Listrik token mandiri.',
      },
      {
        id: 'hanida-kipas-km-dalam',
        nama: 'Tipe 3: Kipas Angin + Kamar Mandi Dalam',
        kategori: 'non-ac',
        tipeKm: 'KM Dalam',
        ukuran: '3 x 3.5 Meter',
        hargaBulan: 700000,
        hargaTahun: 7800000,
        status: 'Tersedia',
        sisaKamar: 2,
        gambarUtama: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kipas Angin Dinding (Exhaust Wall Fan)',
          'Kamar Mandi Dalam (Shower & Kloset Jongkok Bersih)',
          'Kasur Busa Tebal Singlebed (120x200)',
          'Meja Belajar Minimalis & Kursi',
          'Lemari Pakaian Kayu',
          'Jendela Sirkulasi Udara Baik',
        ],
        biayaLain: 'All-in sudah termasuk air, listrik wajar (laptop/HP), dan Wi-Fi gratis.',
      },
      {
        id: 'hanida-kipas-km-luar',
        nama: 'Tipe 4: Kipas Angin + Kamar Mandi Luar (Hemat)',
        kategori: 'non-ac',
        tipeKm: 'KM Luar',
        ukuran: '3 x 3 Meter',
        hargaBulan: 500000,
        hargaTahun: 5500000,
        status: 'Penuh',
        sisaKamar: 0,
        gambarUtama: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=800&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=800&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kipas Angin Dinding',
          'Kamar Mandi Luar Bersih (Dibersihkan Rutin)',
          'Kasur Busa Single + Bantal',
          'Meja Belajar Lesehan / Kursi',
          'Lemari Pakaian',
          'Ventilasi Jendela Kamar',
        ],
        biayaLain: 'Pilihan paling hemat! All-in sudah termasuk air, listrik standar, dan Wi-Fi.',
      },
    ],

    // Tempat Strategis Kebutuhan Penghuni (Kuliner, Minimarket, Sekolah SD/SMP/SMA, Klinik, Kampus, Kawasan Kerja)
    lokasiTerdekat: [
      { nama: 'Minimarket (Indomaret / Alfamart Kalipancur & ATM)', jarak: '1–2 Menit (400 m)', icon: 'ShoppingBag' },
      { nama: 'Sentra Kuliner, Kafe & Warung Makan Kalipancur', jarak: '2 Menit (500 m)', icon: 'UtensilsCrossed' },
      { nama: 'SDN Kalipancur 01/02 & SD Islam Terpadu Insan Mulia', jarak: '2 Menit (500 m)', icon: 'School' },
      { nama: 'SMP IT Insan Cendekia & SMP Negeri 19 Semarang', jarak: '3–4 Menit (900 m)', icon: 'BookOpen' },
      { nama: 'SMA Negeri 7 Semarang & SMK Islamic Centre', jarak: '3–4 Menit (1.0 km)', icon: 'School' },
      { nama: 'Klinik Pratama & Apotek 24 Jam Kalipancur', jarak: '3 Menit (900 m)', icon: 'HeartPulse' },
      { nama: 'Kawasan Industri Candi (KIC) & Perkantoran Manyaran', jarak: '7 Menit (3.5 km)', icon: 'Compass' },
      { nama: 'Kampus UNWAHAS / Sampangan', jarak: '8 Menit (3.9 km)', icon: 'GraduationCap' },
      { nama: 'Pintu Gerbang Tol Manyaran', jarak: '5 Menit (2.4 km)', icon: 'Train' },
    ],

    // Peraturan Khusus Kost Putri
    peraturan: [
      'Khusus Putri: Tamu pria (termasuk pacar/teman) HANYA diperkenankan bertamu di ruang tamu depan, dilarang masuk ke lorong/kamar.',
      'Batas jam bertamu maksimal pukul 21.00 WIB demi kenyamanan dan istirahat sesama penghuni.',
      'Disediakan kunci gerbang mandiri untuk mahasiswi yang pulang malam karena tugas kampus/organisasi.',
      'Dilarang merokok, vaping, atau membawa minuman keras dan obat terlarang di lingkungan kos.',
      'Menjaga kebersihan dapur bersama dan segera mencuci peralatan makan setelah digunakan.',
      'Pembayaran sewa dilakukan tepat waktu setiap awal bulan sewa (tgl 1-5).',
    ],
  },

  // 2. KOST KEDUA: KOST HARLEY (KALIPANCUR - PASUTRI & CAMPUR)
  harley: {
    id: 'harley',
    nama: 'Kost Harley (Pasutri & Campur)',
    tipe: 'Pasutri (Suami Istri), Putra, & Putri',
    tagline: 'Hunian Kost Nyaman, Tenang, dan Bersih untuk Pasutri, Karyawan & Mahasiswa di Kalipancur Semarang',
    temaWarna: 'emerald', // emerald / rose / blue
    rating: 4.8,
    totalUlasan: 19,
    
    // Kontak Pengelola (Sesuai link WA https://maps.app.goo.gl/oVZVA1wSLFNtfJuy6)
    whatsapp: '62823940977134',
    alamat: 'Jl. Candi Pawon Tim. Jl. Raya Panjangan, Kalipancur, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50183',
    googleMapsUrl: 'https://maps.app.goo.gl/i8nsrjymHde2DUEY9',

    // Statistik Cepat
    stats: {
      totalKamar: 12,
      kamarTersedia: 3,
      jarakKampus: '1 Menit ke Mart & Kuliner',
      kecepatanWifi: '50 Mbps Fiber',
    },

    // Fasilitas Bersama Kost Harley
    fasilitasUmum: [
      { nama: 'Wi-Fi Fiber 50 Mbps', icon: 'Wifi', desc: 'Koneksi internet cepat untuk kerja, kuliah & hiburan' },
      { nama: 'Dapur Bersama Lengkap', icon: 'Utensils', desc: 'Kompor gas, tabung gas disediakan, wastafel cuci piring' },
      { nama: 'Area Parkir Motor & Mobil', icon: 'Car', desc: 'Parkiran luas, beratap dan aman di dalam area pagar' },
      { nama: 'CCTV & Keamanan 24 Jam', icon: 'ShieldCheck', desc: 'Lingkungan aman terpantau kamera CCTV' },
      { nama: 'Mesin Cuci & Jemuran Luas', icon: 'Shirt', desc: 'Fasilitas mencuci pakaian mandiri untuk seluruh penghuni' },
      { nama: 'Akses Gerbang 24 Jam', icon: 'Key', desc: 'Bebas jam malam dengan kunci gerbang mandiri masing-masing' },
      { nama: 'Air Bersih PDAM Lancar', icon: 'Droplets', desc: 'Pasokan air bersih terjamin dengan tandon cadangan' },
      { nama: 'Ruang Santai / Tamu', icon: 'Coffee', desc: 'Area duduk bersama untuk menerima tamu' },
    ],

    // Daftar Kamar Kost Harley (Rentang 500rb - 1jt)
    kamar: [
      {
        id: 'harley-deluxe-pasutri',
        nama: 'Tipe 1: Deluxe Pasutri (AC + KM Dalam)',
        kategori: 'ac',
        tipeKm: 'KM Dalam',
        ukuran: '3.5 x 4 Meter',
        hargaBulan: 1050000,
        hargaTahun: 11500000,
        status: 'Tersedia',
        sisaKamar: 1,
        gambarUtama: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'AC Hemat Listrik 0.5 PK (Dingin)',
          'Kamar Mandi Dalam (Shower & Kloset Duduk Bersih)',
          'Kasur Springbed Queen Size (Muat 2 Orang/Pasutri)',
          'Meja Kerja/Belajar & Kursi',
          'Lemari Pakaian 2 Pintu Kayu',
          'Jendela Sirkulasi Udara Baik',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Termasuk air bersih & Wi-Fi. Listrik sistem token mandiri per kamar.',
      },
      {
        id: 'harley-standard-ac',
        nama: 'Tipe 2: Standard Room (AC + KM Luar)',
        kategori: 'ac',
        tipeKm: 'KM Luar',
        ukuran: '3 x 3.5 Meter',
        hargaBulan: 850000,
        hargaTahun: 9500000,
        status: 'Tersedia',
        sisaKamar: 1,
        gambarUtama: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'AC Hemat Daya 0.5 PK',
          'Kamar Mandi Luar Bersih (Rasio 1 KM untuk 2 Kamar)',
          'Kasur Single Springbed + Bantal',
          'Meja Belajar & Kursi',
          'Lemari Pakaian 2 Pintu',
          'Ventilasi Udara Nyaman',
          'Token Listrik Mandiri',
        ],
        biayaLain: 'Termasuk air & Wi-Fi gratis. Listrik token mandiri.',
      },
      {
        id: 'harley-kipas-km-dalam',
        nama: 'Tipe 3: Room Kipas (Kipas + KM Dalam)',
        kategori: 'non-ac',
        tipeKm: 'KM Dalam',
        ukuran: '3 x 3.5 Meter',
        hargaBulan: 700000,
        hargaTahun: 7800000,
        status: 'Tersedia',
        sisaKamar: 1,
        gambarUtama: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kipas Angin Dinding',
          'Kamar Mandi Dalam (Shower & Kloset)',
          'Kasur Busa Tebal Singlebed',
          'Meja Belajar Minimalis & Kursi',
          'Lemari Pakaian',
          'Ventilasi Udara Alami',
        ],
        biayaLain: 'All-in termasuk air, Wi-Fi gratis, dan pemakaian listrik wajar.',
      },
      {
        id: 'harley-hemat-km-luar',
        nama: 'Tipe 4: Room Hemat (Kipas + KM Luar)',
        kategori: 'non-ac',
        tipeKm: 'KM Luar',
        ukuran: '3 x 3 Meter',
        hargaBulan: 500000,
        hargaTahun: 5500000,
        status: 'Penuh',
        sisaKamar: 0,
        gambarUtama: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=800&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=800&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kipas Angin Dinding',
          'Kamar Mandi Luar Bersih',
          'Kasur Busa Single + Bantal',
          'Meja Belajar & Kursi',
          'Lemari Pakaian',
          'Jendela Ventilasi',
        ],
        biayaLain: 'Pilihan paling hemat! All-in include air, listrik standar, dan Wi-Fi.',
      },
    ],

    // Tempat Strategis Sekitar Kalipancur / Manyaran
    lokasiTerdekat: [
      { nama: 'Minimarket (Indomaret / Alfamart Kalipancur & ATM)', jarak: '1–2 Menit (400 m)', icon: 'ShoppingBag' },
      { nama: 'Sentra Kuliner, Kafe & Warung Makan Kalipancur', jarak: '2 Menit (500 m)', icon: 'UtensilsCrossed' },
      { nama: 'SDN Kalipancur 01/02 & SD IT Insan Mulia', jarak: '2 Menit (500 m)', icon: 'School' },
      { nama: 'SMP IT Insan Cendekia & SMP Negeri 19 Semarang', jarak: '3–4 Menit (900 m)', icon: 'BookOpen' },
      { nama: 'SMA Negeri 7 Semarang & SMK Islamic Centre', jarak: '3–4 Menit (1.0 km)', icon: 'School' },
      { nama: 'Klinik Pratama & Apotek 24 Jam Kalipancur', jarak: '3 Menit (900 m)', icon: 'HeartPulse' },
      { nama: 'Kawasan Industri Candi (KIC) & Manyaran', jarak: '7 Menit (3.5 km)', icon: 'Compass' },
      { nama: 'Kampus UNWAHAS / Sampangan', jarak: '8 Menit (3.9 km)', icon: 'GraduationCap' },
      { nama: 'Pintu Gerbang Tol Manyaran', jarak: '5 Menit (2.4 km)', icon: 'Train' },
    ],

    // Peraturan Khusus Kost Harley
    peraturan: [
      'Bagi pasangan suami istri (Pasutri), wajib menyerahkan fotokopi Surat Nikah / KTP domisili saat pendaftaran sewa.',
      'Akses gerbang 24 jam dengan kunci mandiri (harap selalu mengunci kembali gerbang demi keamanan bersama).',
      'Dilarang membawa minuman keras, obat-obatan terlarang, atau melakukan tindakan melanggar hukum di area kos.',
      'Menjaga ketenangan dan kenyamanan sesama penghuni kos setelah pukul 22.00 WIB.',
      'Dilarang merokok di dalam kamar ber-AC.',
      'Pembayaran sewa dilakukan tepat waktu setiap tanggal 1–5 di awal masa sewa.',
    ],
  }
};

// Aliases agar semua variasi penulisan URL cocok
databaseKos.hanida2 = databaseKos.hanida;
databaseKos.kostharley = databaseKos.harley;

/**
 * HELPER: Mendapatkan kos aktif berdasarkan URL path (/hanida2, /harley)
 */
export function getActiveKost(customPath = null) {
  if (typeof window === 'undefined') return databaseKos.hanida2;

  // 1. Cek parameter query ?kos=xxx
  const urlParams = new URLSearchParams(window.location.search);
  const paramSlug = urlParams.get('kos');
  if (paramSlug) {
    const clean = paramSlug.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (clean.includes('harley')) return databaseKos.harley;
    if (clean.includes('hanida')) return databaseKos.hanida2;
  }

  // 2. Cek path URL misal /hanida2 atau /harley
  const rawPath = customPath !== null ? customPath : window.location.pathname;
  const pathSlug = rawPath.replace(/^\/+|\/+$/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
  if (pathSlug) {
    if (pathSlug.includes('harley')) return databaseKos.harley;
    if (pathSlug.includes('hanida')) return databaseKos.hanida2;
  }

  // 3. Cek subdomain
  const hostnameParts = window.location.hostname.split('.');
  if (hostnameParts.length > 2) {
    const sub = hostnameParts[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    if (sub.includes('harley')) return databaseKos.harley;
    if (sub.includes('hanida')) return databaseKos.hanida2;
  }

  // Default fallback: Kost Putri Hanida 2
  return databaseKos.hanida2;
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

// WhatsApp Link Generator
export const buatLinkWa = (nomor, namaKos, namaKamar = '') => {
  let pesan = '';
  if (namaKamar) {
    pesan = `Halo Pengelola ${namaKos}, saya melihat info dari katalog website. Apakah ${namaKamar} masih tersedia untuk jadwal survei minggu ini?`;
  } else {
    pesan = `Halo Pengelola ${namaKos}, saya ingin menanyakan info kamar kosong dan membuat janji survei lokasi. Terima kasih!`;
  }
  return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
};
