/**
 * DATABASE MULTI-KOSAN
 * Menampung berbagai properti kos dalam 1 repo.
 * Bisa diakses via URL /hanida, /griya-asri, atau ?kos=hanida
 */

export const databaseKos = {
  // 1. KOST PUTRI HANIDA 2 (SEMARANG - SAMPANGAN / BENDAN DHUWUR)
  hanida: {
    id: 'hanida',
    status: 'TOLAK',
    nama: 'Kost Putri Hanida 2',
    tipe: 'Khusus Putri (Mahasiswi & Karyawati)',
    tagline: 'Hunian Khusus Putri yang Nyaman, Bersih, dan Tenang di Area Kalipancur - Ngaliyan Semarang',
    temaWarna: 'rose',
    rating: 4.9,
    totalUlasan: 27,
    
    whatsapp: '6285725802480',
    alamat: 'Jl. Candi Pawon Tengah No.3, Kalipancur, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50183',
    googleMapsUrl: 'https://maps.app.goo.gl/H51eaiRMzdFxTH1i9',

    stats: {
      totalKamar: 16,
      kamarTersedia: 4,
      jarakKampus: '1 Menit ke Mart & Kuliner',
      kecepatanWifi: '50 Mbps Fiber',
    },

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
    status: 'AKTIF',
    nama: 'Kost Harley (Pasutri & Campur)',
    tipe: 'Pasutri (Suami Istri), Putra, & Putri',
    tagline: 'Hunian Kost Nyaman, Tenang, dan Bersih untuk Pasutri, Karyawan & Mahasiswa di Kalipancur Semarang',
    temaWarna: 'emerald',
    rating: 4.8,
    totalUlasan: 19,
    
    whatsapp: '6283869714498',
    alamat: 'Jl. Candi Pawon Tim. Jl. Raya Panjangan, Kalipancur, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50183',
    googleMapsUrl: 'https://maps.app.goo.gl/i8nsrjymHde2DUEY9',

    stats: {
      totalKamar: 12,
      kamarTersedia: 3,
      jarakKampus: '1 Menit ke Mart & Kuliner',
      kecepatanWifi: '50 Mbps Fiber',
    },

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

    peraturan: [
      'Bagi pasangan suami istri (Pasutri), wajib menyerahkan fotokopi Surat Nikah / KTP domisili saat pendaftaran sewa.',
      'Akses gerbang 24 jam dengan kunci mandiri (harap selalu mengunci kembali gerbang demi keamanan bersama).',
      'Dilarang membawa minuman keras, obat-obatan terlarang, atau melakukan tindakan melanggar hukum di area kos.',
      'Menjaga ketenangan dan kenyamanan sesama penghuni kos setelah pukul 22.00 WIB.',
      'Dilarang merokok di dalam kamar ber-AC.',
      'Pembayaran sewa dilakukan tepat waktu setiap tanggal 1–5 di awal masa sewa.',
    ],
  },

  // 3. KOST KETIGA: KOST BU BROTO (JL. CANDI PAWON TENGAH NO. 41 KALIPANCUR)
  bubroto: {
    id: 'bubroto',
    status: 'AKTIF',
    nama: 'Kost Bu Broto',
    tipe: 'Putra / Putri (Kamar Mandi Dalam & Luar)',
    tagline: 'Hunian Kost Bersih, Tenang, dan Terjangkau di Jl. Candi Pawon Tengah No. 41 Kalipancur',
    temaWarna: 'blue',
    rating: 4.8,
    totalUlasan: 14,
    
    whatsapp: '6285800409062',
    alamat: 'Jl. Candi Pawon Tengah No.41, Kalipancur, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50183',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jl.+Candi+Pawon+Tengah+No.41,+Kalipancur,+Kec.+Ngaliyan,+Kota+Semarang',

    stats: {
      totalKamar: 10,
      kamarTersedia: 2,
      jarakKampus: '1 Menit ke Mart & Kuliner',
      kecepatanWifi: '50 Mbps Fiber',
    },

    fasilitasUmum: [
      { nama: 'Dapur Bersama', icon: 'Utensils', desc: 'Fasilitas memasak harian, kompor gas & wastafel cuci piring' },
      { nama: 'Parkir Motor Aman di Pagar', icon: 'Car', desc: 'Area parkir motor di dalam pagar gerbang beratap' },
      { nama: 'Wi-Fi Internet Cepat', icon: 'Wifi', desc: 'Akses Wi-Fi lancar untuk kebutuhan nugas dan kerja' },
      { nama: 'Air Bersih PDAM Lancar', icon: 'Droplets', desc: 'Pasokan air jernih dan lancar sepanjang hari' },
      { nama: 'Akses Gerbang Mandiri', icon: 'Key', desc: 'Akses keluar masuk mandiri dengan kunci gerbang' },
      { nama: 'Tempat Cuci & Jemuran', icon: 'Shirt', desc: 'Area mencuci dan jemur pakaian yang leluasa' },
    ],

    kamar: [
      {
        id: 'broto-km-dalam',
        nama: 'Tipe 1: Kamar Mandi Dalam (Kipas Angin)',
        kategori: 'non-ac',
        tipeKm: 'KM Dalam',
        ukuran: '3 x 3.5 Meter',
        hargaBulan: 750000,
        hargaTahun: 8200000,
        status: 'Tersedia',
        sisaKamar: 2,
        gambarUtama: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kamar Mandi Dalam Bersih (Shower & Kloset)',
          'Kipas Angin Dinding',
          'Kasur Busa Tebal Singlebed + Bantal',
          'Lemari Pakaian Kayu',
          'Meja Belajar Minimalis & Kursi',
          'Jendela Ventilasi Udara Baik',
        ],
        biayaLain: 'Termasuk air bersih dan Wi-Fi. Pemakaian listrik standar laptop/HP sudah termasuk.',
      },
      {
        id: 'broto-km-luar',
        nama: 'Tipe 2: Kamar Mandi Luar (Pilihan Hemat)',
        kategori: 'non-ac',
        tipeKm: 'KM Luar',
        ukuran: '3 x 3 Meter',
        hargaBulan: 550000,
        hargaTahun: 6000000,
        status: 'Penuh',
        sisaKamar: 0,
        gambarUtama: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=800&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=800&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kamar Mandi Luar Bersih (Rasio 1 KM untuk 2 Kamar)',
          'Kipas Angin Dinding',
          'Kasur Singlebed Nyaman',
          'Lemari Pakaian',
          'Meja Belajar & Kursi',
          'Ventilasi Jendela Kamar',
        ],
        biayaLain: 'Pilihan paling hemat! All-in sudah termasuk air, listrik standar, dan Wi-Fi.',
      },
    ],

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

    peraturan: [
      'Akses gerbang mandiri (harap selalu menutup & mengunci kembali gerbang demi keamanan bersama).',
      'Tamu lawan jenis dilarang menginap di dalam kamar.',
      'Batas jam bertamu maksimal pukul 21.00 WIB.',
      'Dilarang merokok di area tertutup dan dilarang membawa miras / obat terlarang.',
      'Menjaga kebersihan dapur bersama dan ketenangan lingkungan setelah pukul 22.00 WIB.',
      'Pembayaran sewa tepat waktu di awal bulan sewa.',
    ],
  },

  // 4. KOST KEMPAT: KOST SUNFLOWER (JL. GUNUNG TALANG NO. 29 BENDAN DUWUR / SAMPANGAN)
  sunflower: {
    id: 'sunflower',
    status: 'AKTIF',
    nama: 'Kost Sunflower Sampangan',
    tipe: 'Campur (Mahasiswa, Karyawan, & Pasutri)',
    tagline: 'Hunian Kost Nyaman, Bersih & Strategis di Jl. Gunung Talang No. 29, Sampangan - Gajahmungkur Semarang',
    temaWarna: 'emerald',
    rating: 4.9,
    totalUlasan: 24,
    
    whatsapp: '62882008184716',
    alamat: 'Jl. Gunung Talang No. 29, Bendan Duwur, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah 50233',
    googleMapsUrl: 'https://maps.app.goo.gl/2s43yXrxF3HSbzFR8',

    stats: {
      totalKamar: 14,
      kamarTersedia: 2,
      jarakKampus: '3 Menit ke UNIKA / UNWAHAS',
      kecepatanWifi: '50 Mbps Fiber',
    },

    fasilitasUmum: [
      { nama: 'Wi-Fi Fiber Kencang', icon: 'Wifi', desc: 'Internet stabil untuk tugas kuliah, Zoom meeting, dan WFH' },
      { nama: 'Akses Gerbang 24 Jam', icon: 'Key', desc: 'Bebas jam malam dengan kunci mandiri gerbang yang aman' },
      { nama: 'Parkir Mobil & Motor Luas', icon: 'Car', desc: 'Area parkir beratap yang aman di dalam pagar' },
      { nama: 'Dapur Bersama & Dispenser', icon: 'Utensils', desc: 'Kompor gas, wastafel cuci piring & air galon gratis' },
      { nama: 'Pengawasan CCTV & Penjaga Kos', icon: 'ShieldCheck', desc: 'Lingkungan tertib, aman dan terjaga sepanjang hari' },
      { nama: 'Area Cuci & Jemuran Luas', icon: 'Shirt', desc: 'Fasilitas mencuci mandiri dan area jemuran pakaian beratap' },
      { nama: 'Ruang Tamu Bersama', icon: 'Coffee', desc: 'Tempat santai menerima teman atau keluarga berkunjung' },
      { nama: 'Air Bersih PDAM Lancar', icon: 'Droplets', desc: 'Pasokan air jernih dengan tandon cadangan penampung' },
    ],

    kamar: [
      {
        id: 'sunflower-eksklusif-ac',
        nama: 'Tipe 1: Eksklusif AC + KM Dalam',
        kategori: 'ac',
        tipeKm: 'KM Dalam',
        ukuran: '3.5 x 4 Meter',
        hargaBulan: 1350000,
        hargaTahun: 14850000,
        status: 'Tersedia',
        sisaKamar: 2,
        gambarUtama: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
        galeri: [
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        ],
        fasilitasKamar: [
          'AC (Air Conditioner) Dingin & Hemat Listrik',
          'Kamar Mandi Dalam Pribadi (Kloset Duduk & Shower)',
          'Kasur Springbed Single/Queen Empuk + Bantal Sprei',
          'Lemari Pakaian Kayu 2 Pintu',
          'Meja Kerja / Belajar & Kursi Nyaman',
          'Smart TV / TV Kamar',
          'Cermin Rias & Gantungan Baju',
          'Stopkontak Dekat Kasur & Jendela Sirkulasi Udara Bagus',
        ],
        biayaLain: 'Termasuk air bersih PDAM, Wi-Fi fiber cepat, dan kebersihan. Listrik token mandiri tiap kamar.',
      },
      {
        id: 'sunflower-standar-kipas',
        nama: 'Tipe 2: Reguler Kipas + KM Dalam',
        kategori: 'non-ac',
        tipeKm: 'KM Dalam',
        ukuran: '3 x 3.5 Meter',
        hargaBulan: 850000,
        hargaTahun: 9350000,
        status: 'Tersedia',
        sisaKamar: 1,
        gambarUtama: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
        galeri: [
          'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        ],
        fasilitasKamar: [
          'Kamar Mandi Dalam Pribadi (Kloset & Ember/Shower)',
          'Kipas Angin Dinding (Wall Fan) Sejuk',
          'Kasur Busa Tebal Single Empuk + Bantal Sprei',
          'Lemari Pakaian 2 Pintu',
          'Meja Belajar & Kursi',
          'Jendela Sirkulasi Menghadap Area Terbuka',
          'Stopkontak & Lampu Penerangan Terang',
        ],
        biayaLain: 'Pilihan paling hemat! Termasuk air bersih, Wi-Fi fiber, dan listrik pemakaian standar.',
      },
    ],

    lokasiTerdekat: [
      { nama: 'Kampus UNIKA Soegijapranata Bendan Dhuwur', jarak: '3 Menit (1.1 km)', icon: 'GraduationCap' },
      { nama: 'Kampus UNWAHAS Sampangan Menoreh Raya', jarak: '4 Menit (1.5 km)', icon: 'GraduationCap' },
      { nama: 'Pasar Sampangan & Sentra Kuliner Menoreh', jarak: '3 Menit (1.2 km)', icon: 'UtensilsCrossed' },
      { nama: 'Superindo & Indomaret/Alfamart Sampangan', jarak: '2 Menit (600 m)', icon: 'ShoppingBag' },
      { nama: 'Kampus UNNES Sekaran Gunungpati', jarak: '8–10 Menit (4.5 km)', icon: 'GraduationCap' },
      { nama: 'RSUP Dr. Kariadi Semarang', jarak: '7 Menit (3.8 km)', icon: 'HeartPulse' },
      { nama: 'Simpang Lima / Pusat Kota Semarang', jarak: '10–12 Menit (5.5 km)', icon: 'Compass' },
      { nama: 'Pintu Gerbang Tol Jatingaleh', jarak: '7 Menit (3.6 km)', icon: 'Train' },
    ],

    peraturan: [
      'Akses gerbang mandiri 24 jam (harap selalu mengunci kembali gerbang demi keamanan bersama).',
      'Menerima mahasiswa, karyawan, dan pasutri resmi (wajib menyertakan bukti surat nikah).',
      'Batas jam bertamu di area ruang tamu maksimal pukul 22.00 WIB.',
      'Dilarang merokok di dalam kamar ber-AC dan dilarang membawa miras / obat-obatan terlarang.',
      'Menjaga ketenangan lingkungan bersama dan kebersihan fasilitas dapur umum setelah dipakai.',
      'Pembayaran sewa dilakukan tepat waktu setiap awal bulan sewa (tanggal 1–5).',
    ],
  },

  // 5. KOST KELIMA: KOST 43 - KHUSUS PUTRI (JL. KENDENG BARAT III NO. 43 SAMPANGAN)
  kost43: {
    id: 'kost43',
    status: 'TOLAK',
    nama: 'Kost 43 - Khusus Putri',
    tipe: 'Khusus Putri (Mahasiswi & Karyawati)',
    tagline: 'Hunian Kos Putri Nyaman, Bersih, dan Tenang Dekat Kampus UNWAHAS & UNIKA Sampangan',
    temaWarna: 'rose',
    rating: 4.8,
    totalUlasan: 18,
    
    whatsapp: '628562687777',
    alamat: 'Jl. Kendeng Barat III No. 43, Sampangan, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah 50236',
    googleMapsUrl: 'https://maps.app.goo.gl/ooTkCrLD596EUfuM7',

    stats: {
      totalKamar: 12,
      kamarTersedia: 2,
      jarakKampus: '1 Menit ke UNWAHAS Sampangan',
      kecepatanWifi: '50 Mbps Fiber',
    },

    fasilitasUmum: [
      { nama: 'Wi-Fi Fiber Kencang', icon: 'Wifi', desc: 'Internet stabil untuk kuliah daring, tugas skripsi & streaming' },
      { nama: 'CCTV & Keamanan Gerbang', icon: 'ShieldCheck', desc: 'Akses gerbang tertib dan aman khusus penghuni putri' },
      { nama: 'Dapur Bersama Lengkap', icon: 'Utensils', desc: 'Kompor gas, wastafel cuci piring, & dispenser air minum galon' },
      { nama: 'Kulkas Bersama', icon: 'Coffee', desc: 'Penyimpanan bahan makanan dan minuman dingin penghuni' },
      { nama: 'Parkir Motor Aman di Dalam', icon: 'Car', desc: 'Area parkir motor tertutup dan berpagar aman dari cuaca' },
      { nama: 'Area Jemuran & Cuci Luas', icon: 'Shirt', desc: 'Tempat mencuci dan menjemur pakaian leluasa di lantai atas' },
      { nama: 'Ruang Tamu Depan Khusus', icon: 'Key', desc: 'Area menerima kunjungan orang tua / teman dengan nyaman' },
      { nama: 'Air Bersih PDAM Lancar', icon: 'Droplets', desc: 'Pasokan air jernih dengan tandon cadangan penampung' },
    ],

    kamar: [
      {
        id: 'kost43-ac-km-dalam',
        nama: 'Tipe 1: AC + Kamar Mandi Dalam',
        kategori: 'ac',
        tipeKm: 'KM Dalam',
        ukuran: '3.5 x 3.5 Meter',
        hargaBulan: 1250000,
        hargaTahun: 13800000,
        status: 'Tersedia',
        sisaKamar: 2,
        gambarUtama: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
        galeri: [
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        ],
        fasilitasKamar: [
          'AC (Air Conditioner) Sejuk & Dingin',
          'Kamar Mandi Dalam Pribadi (Kloset Duduk & Shower)',
          'Kasur Springbed Single Empuk + Bantal Sprei',
          'Lemari Pakaian Kayu 2 Pintu',
          'Meja Belajar Minimalis & Kursi',
          'Cermin Rias & Gantungan Baju',
          'Stopkontak & Jendela Sirkulasi Udara Segar',
        ],
        biayaLain: 'Sudah termasuk air bersih PDAM, Wi-Fi fiber, dan iuran sampah. Listrik token mandiri.',
      },
      {
        id: 'kost43-kipas-km-dalam',
        nama: 'Tipe 2: Reguler Kipas + KM Dalam',
        kategori: 'non-ac',
        tipeKm: 'KM Dalam',
        ukuran: '3 x 3.5 Meter',
        hargaBulan: 750000,
        hargaTahun: 8250000,
        status: 'Tersedia',
        sisaKamar: 1,
        gambarUtama: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
        galeri: [
          'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80',
        ],
        fasilitasKamar: [
          'Kamar Mandi Dalam Pribadi Bersih',
          'Kipas Angin Dinding (Wall Fan) Sejuk',
          'Kasur Busa Tebal Single Empuk + Bantal',
          'Lemari Pakaian 2 Pintu',
          'Meja Belajar & Kursi',
          'Ventilasi Jendela Kamar Baik',
          'Stopkontak & Lampu Penerangan Terang',
        ],
        biayaLain: 'Pilihan hemat mahasiswi! Sudah termasuk air bersih PDAM, Wi-Fi, dan listrik standar.',
      },
    ],

    lokasiTerdekat: [
      { nama: 'Kampus UNWAHAS Sampangan (Menoreh)', jarak: '1–2 Menit (350 m - Jalan Kaki)', icon: 'GraduationCap' },
      { nama: 'Kampus UNIKA Soegijapranata Bendan Dhuwur', jarak: '3 Menit (1.0 km)', icon: 'GraduationCap' },
      { nama: 'Sentra Kuliner & Kafe Menoreh Raya', jarak: '2 Menit (450 m)', icon: 'UtensilsCrossed' },
      { nama: 'Pasar Sampangan & Superindo', jarak: '3 Menit (800 m)', icon: 'ShoppingBag' },
      { nama: 'Minimarket (Indomaret / Alfamart Kendeng)', jarak: '1 Menit (200 m)', icon: 'ShoppingBag' },
      { nama: 'Klinik Pratama & Apotek 24 Jam Sampangan', jarak: '2 Menit (600 m)', icon: 'HeartPulse' },
      { nama: 'Kampus UNNES Sekaran Gunungpati', jarak: '8 Menit (4.0 km)', icon: 'GraduationCap' },
      { nama: 'RSUP Dr. Kariadi & Simpang Lima', jarak: '8–10 Menit (4.5 km)', icon: 'Compass' },
    ],

    peraturan: [
      'Akses khusus putri demi kenyamanan dan keamanan bersama.',
      'Tamu pria dilarang masuk ke dalam kamar (hanya boleh di ruang tamu depan).',
      'Batas jam bertamu maksimal pukul 21.30 WIB.',
      'Dilarang merokok di dalam area kos dan dilarang membawa miras / obat terlarang.',
      'Menjaga ketenangan belajar sesama mahasiswi setelah pukul 22.00 WIB.',
      'Pembayaran sewa tepat waktu setiap awal bulan sewa (tanggal 1–5).',
    ],
  },

  // 6. KOST KEENAM: KOST CITRALOKA DUA (JL. MENOREH UTARA III NO. 10 B SAMPANGAN)
  citraloka: {
    id: 'citraloka',
    status: 'AKTIF',
    nama: 'Kost Citraloka Dua',
    tipe: 'Campur (Mahasiswa, Karyawan, & Pasutri)',
    tagline: 'Hunian Kost Modern, Bersih & Nyaman di Jl. Menoreh Utara III No. 10 B, Sampangan Semarang',
    temaWarna: 'blue',
    rating: 4.9,
    totalUlasan: 26,
    
    whatsapp: '6281226703686',
    alamat: 'Jl. Menoreh Utara III No. 10 B, Sampangan, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah 50236',
    googleMapsUrl: 'https://maps.app.goo.gl/ftsreKeQdpK6EWeP6',

    stats: {
      totalKamar: 15,
      kamarTersedia: 2,
      jarakKampus: '2 Menit ke UNWAHAS & UNIKA',
      kecepatanWifi: '50 Mbps Fiber',
    },

    fasilitasUmum: [
      { nama: 'Wi-Fi Fiber Kencang', icon: 'Wifi', desc: 'Internet stabil untuk nugas kuliah, Zoom meeting, dan WFH' },
      { nama: 'Akses Gerbang Mandiri 24 Jam', icon: 'Key', desc: 'Bebas jam malam dengan kunci gerbang mandiri yang aman' },
      { nama: 'CCTV 24 Jam & Keamanan', icon: 'ShieldCheck', desc: 'Lingkungan kos tertib, aman dan selalu termonitor' },
      { nama: 'Dapur Bersama Lengkap', icon: 'Utensils', desc: 'Fasilitas memasak harian, kompor gas & wastafel cuci piring' },
      { nama: 'Kulkas Bersama', icon: 'Coffee', desc: 'Penyimpanan bahan makanan dan minuman dingin penghuni' },
      { nama: 'Parkir Motor Aman di Pagar', icon: 'Car', desc: 'Area parkir motor leluasa di dalam gerbang tertutup' },
      { nama: 'Tempat Cuci & Jemuran Luas', icon: 'Shirt', desc: 'Area mencuci dan jemur pakaian yang leluasa dan beratap' },
      { nama: 'Air Bersih PDAM Lancar', icon: 'Droplets', desc: 'Pasokan air jernih dengan tandon cadangan penampung' },
    ],

    kamar: [
      {
        id: 'citraloka-deluxe-ac',
        nama: 'Tipe 1: Deluxe AC + KM Dalam',
        kategori: 'ac',
        tipeKm: 'KM Dalam',
        ukuran: '3.5 x 4 Meter',
        hargaBulan: 1200000,
        hargaTahun: 13200000,
        status: 'Tersedia',
        sisaKamar: 2,
        gambarUtama: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
        galeri: [
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        ],
        fasilitasKamar: [
          'AC Daikin Dingin & Hemat Listrik',
          'Kamar Mandi Dalam Pribadi (Kloset Duduk & Shower)',
          'Kasur Springbed Berkualitas + Bantal Sprei',
          'Lemari Pakaian Kayu 2 Pintu',
          'Meja Kerja / Belajar & Kursi',
          'Jendela Ventilasi Sirkulasi Bagus',
          'Stopkontak Dekat Kasur & Cermin Rias',
        ],
        biayaLain: 'Sudah termasuk air PDAM, Wi-Fi fiber kencang, dan kebersihan. Listrik token mandiri per kamar.',
      },
      {
        id: 'citraloka-reguler-kipas',
        nama: 'Tipe 2: Reguler Kipas + KM Dalam',
        kategori: 'non-ac',
        tipeKm: 'KM Dalam',
        ukuran: '3 x 3.5 Meter',
        hargaBulan: 800000,
        hargaTahun: 8800000,
        status: 'Tersedia',
        sisaKamar: 1,
        gambarUtama: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
        galeri: [
          'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
        ],
        fasilitasKamar: [
          'Kamar Mandi Dalam Pribadi Bersih',
          'Kipas Angin Dinding (Wall Fan) Sejuk',
          'Kasur Busa Tebal Single Empuk + Bantal',
          'Lemari Pakaian 2 Pintu',
          'Meja Belajar & Kursi',
          'Jendela Sirkulasi Udara Alami',
          'Stopkontak & Lampu Penerangan Terang',
        ],
        biayaLain: 'Pilihan hemat! Sudah termasuk air bersih PDAM, Wi-Fi fiber, dan listrik standar.',
      },
    ],

    lokasiTerdekat: [
      { nama: 'Taman Sampangan & Kuliner Menoreh Raya', jarak: '1–2 Menit (300 m)', icon: 'UtensilsCrossed' },
      { nama: 'Kampus UNWAHAS Sampangan', jarak: '2–3 Menit (800 m)', icon: 'GraduationCap' },
      { nama: 'Kampus UNIKA Soegijapranata Bendan Dhuwur', jarak: '3 Menit (1.2 km)', icon: 'GraduationCap' },
      { nama: 'Kampus UNTAG & UTC Semarang', jarak: '4–5 Menit (1.8 km)', icon: 'GraduationCap' },
      { nama: 'Pasar Sampangan & Superindo', jarak: '2 Menit (650 m)', icon: 'ShoppingBag' },
      { nama: 'Pintu Gerbang Tol Jatingaleh', jarak: '6 Menit (3.2 km)', icon: 'Train' },
      { nama: 'RSUP Dr. Kariadi Semarang', jarak: '6–7 Menit (3.5 km)', icon: 'HeartPulse' },
      { nama: 'Kawasan Simpang Lima Semarang', jarak: '10 Menit (5.0 km)', icon: 'Compass' },
    ],

    peraturan: [
      'Akses gerbang mandiri 24 jam (harap selalu menutup & mengunci kembali gerbang demi keamanan bersama).',
      'Menerima mahasiswa, karyawan, dan pasutri resmi (wajib menyertakan bukti surat nikah).',
      'Batas jam bertamu di area ruang tamu maksimal pukul 22.00 WIB.',
      'Dilarang merokok di dalam kamar ber-AC dan dilarang membawa miras / obat terlarang.',
      'Menjaga ketenangan lingkungan bersama dan kebersihan fasilitas dapur umum setelah dipakai.',
      'Pembayaran sewa tepat waktu setiap awal bulan sewa (tanggal 1–5).',
    ],
  },

  // 7. KOST KETUJUH: KOST MANGGIS (JL. MANGGIS SEMARANG)
  manggis: {
    id: 'manggis',
    status: 'AKTIF',
    nama: 'Kost Manggis Semarang',
    tipe: 'Campur (Mahasiswa, Karyawan, & Pasutri)',
    tagline: 'Hunian Kost Nyaman, Tenang dan Strategis di Area Manggis Semarang',
    temaWarna: 'amber',
    rating: 4.8,
    totalUlasan: 15,
    
    whatsapp: '6281234567891',
    alamat: 'Jl. Manggis, Lamper Kidul, Kec. Semarang Sel., Kota Semarang, Jawa Tengah',
    googleMapsUrl: 'https://maps.app.goo.gl/jDfkx8FRRb37ViMV6',

    stats: {
      totalKamar: 12,
      kamarTersedia: 3,
      jarakKampus: 'Akses Mudah ke Pusat Kota',
      kecepatanWifi: '50 Mbps Fiber',
    },

    fasilitasUmum: [
      { nama: 'Wi-Fi Fiber Kencang', icon: 'Wifi', desc: 'Internet stabil untuk tugas kuliah, kerja, dan streaming' },
      { nama: 'Akses Gerbang Mandiri 24 Jam', icon: 'Key', desc: 'Bebas jam malam dengan kunci gerbang mandiri yang aman' },
      { nama: 'CCTV & Keamanan', icon: 'ShieldCheck', desc: 'Lingkungan kos tertib, aman dan selalu termonitor' },
      { nama: 'Dapur Bersama Lengkap', icon: 'Utensils', desc: 'Fasilitas memasak harian, kompor gas & wastafel cuci piring' },
      { nama: 'Parkir Motor Luas', icon: 'Car', desc: 'Area parkir motor aman dan beratap' },
      { nama: 'Tempat Cuci & Jemuran', icon: 'Shirt', desc: 'Area mencuci dan jemur pakaian yang leluasa' },
      { nama: 'Air Bersih Lancar', icon: 'Droplets', desc: 'Pasokan air jernih dengan tandon cadangan penampung' },
    ],

    kamar: [
      {
        id: 'manggis-ac-km-dalam',
        nama: 'Tipe 1: AC + Kamar Mandi Dalam',
        kategori: 'ac',
        tipeKm: 'KM Dalam',
        ukuran: '3.5 x 3.5 Meter',
        hargaBulan: 1100000,
        hargaTahun: 12000000,
        status: 'Tersedia',
        sisaKamar: 2,
        gambarUtama: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
        galeri: [
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
        ],
        fasilitasKamar: [
          'AC Hemat Energi',
          'Kamar Mandi Dalam (Kloset Duduk & Shower)',
          'Kasur Springbed Single/Queen',
          'Lemari Pakaian & Meja Belajar',
          'Ventilasi Udara Baik',
        ],
        biayaLain: 'Termasuk air dan Wi-Fi. Listrik token mandiri.',
      },
      {
        id: 'manggis-kipas-km-luar',
        nama: 'Tipe 2: Kipas Angin + Kamar Mandi Luar',
        kategori: 'non-ac',
        tipeKm: 'KM Luar',
        ukuran: '3 x 3 Meter',
        hargaBulan: 700000,
        hargaTahun: 7500000,
        status: 'Tersedia',
        sisaKamar: 1,
        gambarUtama: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80',
        galeri: [
          'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80',
        ],
        fasilitasKamar: [
          'Kipas Angin Dinding',
          'Kamar Mandi Luar Bersih',
          'Kasur Busa & Bantal',
          'Lemari Pakaian & Meja',
        ],
        biayaLain: 'All-in sudah termasuk air, listrik standar, dan Wi-Fi.',
      },
    ],

    lokasiTerdekat: [
      { nama: 'Minimarket Terdekat', jarak: '2 Menit (500 m)', icon: 'ShoppingBag' },
      { nama: 'Pusat Kuliner Semarang', jarak: '5 Menit', icon: 'UtensilsCrossed' },
      { nama: 'Klinik / Apotek', jarak: '3 Menit', icon: 'HeartPulse' },
    ],

    peraturan: [
      'Akses gerbang mandiri 24 jam (harap selalu mengunci kembali gerbang).',
      'Menjaga ketenangan dan kebersihan lingkungan kos bersama.',
      'Dilarang merokok di dalam kamar ber-AC dan membawa barang terlarang.',
      'Pembayaran sewa tepat waktu setiap awal bulan.',
    ],
  }
};

// Aliases agar semua variasi penulisan URL cocok
databaseKos.hanida2 = databaseKos.hanida;
databaseKos.kostharley = databaseKos.harley;
databaseKos.broto = databaseKos.bubroto;
databaseKos.kostbubroto = databaseKos.bubroto;
databaseKos.kostsunflower = databaseKos.sunflower;
databaseKos['43'] = databaseKos.kost43;
databaseKos.citralokadua = databaseKos.citraloka;
databaseKos.kostcitraloka = databaseKos.citraloka;
databaseKos.kostmanggis = databaseKos.manggis;
databaseKos.manggis = databaseKos.manggis;

/**
 * HELPER: Mendapatkan kos aktif berdasarkan URL path
 */
export function getActiveKost(customPath = null) {
  let matched = null;

  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const paramSlug = urlParams ? urlParams.get('kos') : null;
  if (paramSlug) {
    const clean = paramSlug.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (clean.includes('manggis')) matched = databaseKos.manggis;
    else if (clean.includes('citraloka')) matched = databaseKos.citraloka;
    else if (clean.includes('43')) matched = databaseKos.kost43;
    else if (clean.includes('sunflower')) matched = databaseKos.sunflower;
    else if (clean.includes('broto')) matched = databaseKos.bubroto;
    else if (clean.includes('harley')) matched = databaseKos.harley;
    else if (clean.includes('hanida')) matched = databaseKos.hanida2;
  }

  if (!matched && typeof window !== 'undefined') {
    const rawPath = customPath !== null ? customPath : window.location.pathname;
    const pathSlug = rawPath.replace(/^\/+|\/+$/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (pathSlug) {
      if (pathSlug.includes('manggis')) matched = databaseKos.manggis;
      else if (pathSlug.includes('citraloka')) matched = databaseKos.citraloka;
      else if (pathSlug.includes('43')) matched = databaseKos.kost43;
      else if (pathSlug.includes('sunflower')) matched = databaseKos.sunflower;
      else if (pathSlug.includes('broto')) matched = databaseKos.bubroto;
      else if (pathSlug.includes('harley')) matched = databaseKos.harley;
      else if (pathSlug.includes('hanida')) matched = databaseKos.hanida2;
    }
  }

  if (!matched && typeof window !== 'undefined') {
    const hostnameParts = window.location.hostname.split('.');
    if (hostnameParts.length > 2) {
      const sub = hostnameParts[0].toLowerCase().replace(/[^a-z0-9]/g, '');
      if (sub.includes('manggis')) matched = databaseKos.manggis;
      else if (sub.includes('citraloka')) matched = databaseKos.citraloka;
      else if (sub.includes('43')) matched = databaseKos.kost43;
      else if (sub.includes('sunflower')) matched = databaseKos.sunflower;
      else if (sub.includes('broto')) matched = databaseKos.bubroto;
      else if (sub.includes('harley')) matched = databaseKos.harley;
      else if (sub.includes('hanida')) matched = databaseKos.hanida2;
    }
  }

  if (matched && matched.status === 'TOLAK') {
    return null;
  }

  return matched;
}

/**
 * Cek apakah URL yang sedang dikunjungi adalah kos yang ditolak
 */
export function checkIfCurrentPathRejected() {
  if (typeof window === 'undefined') return null;
  const rawPath = (window.location.pathname + window.location.search).toLowerCase();
  if (rawPath.includes('43') && databaseKos.kost43?.status === 'TOLAK') {
    return databaseKos.kost43;
  }
  if (rawPath.includes('hanida') && databaseKos.hanida?.status === 'TOLAK') {
    return databaseKos.hanida;
  }
  return null;
}

/**
 * Mengambil daftar kos yang statusnya AKTIF untuk ditampilkan di rekomendasi
 */
export function getActiveKostsList() {
  const list = [
    databaseKos.harley,
    databaseKos.bubroto,
    databaseKos.sunflower,
    databaseKos.citraloka,
    databaseKos.manggis,
    databaseKos.kost43
  ];
  return list.filter((item) => item && item.status === 'AKTIF');
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
