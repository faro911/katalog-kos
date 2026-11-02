/**
 * DATABASE KOS - KOST SEMARANG D'RESIDENT SUITE 5
 * Target: Single Property Catalog (Per-kos saja)
 * Lokasi: Jl. Singosari I Selatan No. 5, Pleburan, Kec. Semarang Selatan, Kota Semarang, Jawa Tengah 50242
 * Google Maps: https://maps.app.goo.gl/3DXSyLZ38fezS2Cv5
 * Kontak WhatsApp Pengelola: 0812-2923-456 (628122923456)
 */

export const databaseKos = {
  // PROPERTI UTAMA: D'RESIDENT SUITE 5 SEMARANG
  dresident: {
    id: 'dresident',
    status: 'AKTIF',
    nama: "Kost Semarang D'resident Suite 5",
    namaPendek: "D'resident Suite 5",
    tipe: 'Apartment-Style Boarding House & Serviced Suite (Campur)',
    targetPenghuni: 'Eksekutif Muda, Karyawan Profesional, Mahasiswa Undip/Polines, Dokter, & Pasutri',
    tagline: "Hunian Kost Suite Mewah dengan Private Kitchen di Jantung Kota — 3 Menit ke Simpang Lima & UNDIP Pleburan",
    deskripsi: "Kost Semarang D'resident Suite 5 menghadirkan konsep hunian apartemen mini modern dengan kamar tipe suite yang luas, nyaman, dan fully furnished di kawasan paling prestisius Pleburan, Semarang Selatan. Menawarkan keunggulan langka berupa unit dengan dapur pribadi (private kitchen) di dalam kamar, kulkas pribadi, AC dingin, Smart TV, kamar mandi dalam water heater, Wi-Fi fiber optic super cepat, parkir mobil/motor aman berpagar, dan akses bebas 24 jam.",
    temaWarna: 'amber-slate', // Luxury Modern Theme: Slate Obsidian & Champagne Gold
    rating: 4.9,
    totalUlasan: 52,
    
    whatsapp: '628122923456',
    alamat: 'Jl. Singosari I Selatan No. 5, Kel. Pleburan, Kec. Semarang Selatan, Kota Semarang, Jawa Tengah 50242',
    alamatSingkat: 'Jl. Singosari I Selatan No. 5, Pleburan',
    lokasiSingkat: 'Pleburan - Simpang Lima',
    lokasiJudul: 'Lokasi Emas di Pleburan, Jantung Kota Semarang Selatan',
    lokasiDeskripsi: 'Terletak di kawasan elite Pleburan yang tenang namun sangat dekat dengan Simpang Lima, pusat kuliner Hayam Wuruk & Erlangga, Kampus Pascasarjana UNDIP, Mall Ciputra, dan pusat bisnis Jalan Pahlawan.',
    googleMapsUrl: 'https://maps.app.goo.gl/3DXSyLZ38fezS2Cv5',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=-6.9988229,110.4258464&hl=id&z=16&output=embed',

    stats: {
      totalKamar: 22,
      kamarTersedia: 3,
      jarakPusat: '3 Menit ke Simpang Lima & UNDIP Pleburan',
      kecepatanWifi: '150 Mbps Fiber Optic',
      parkir: 'Parkir Mobil & Motor Indoor Aman Berpagar',
      keamanan: 'CCTV 24 Jam & One Gate System',
    },

    keunggulan: [
      {
        judul: '3 Menit ke Simpang Lima & UNDIP',
        deskripsi: 'Lokasi super prime di Singosari, Pleburan. Sangat dekat ke Simpang Lima, Kampus UNDIP Pleburan, RS Roemani, pusat kuliner, dan sentra bisnis Jl. Pahlawan.',
        icon: 'MapPin',
        badge: 'Lokasi Super Prime'
      },
      {
        judul: 'Unit dengan Private Kitchenette',
        deskripsi: 'Keunggulan langka di Semarang: tipe kamar suite dilengkapi dapur pribadi, kompor, kitchen sink, dan meja makan langsung di dalam kamar.',
        icon: 'Sparkles',
        badge: 'Fasilitas Langka'
      },
      {
        judul: 'Parkir Mobil & Motor Aman',
        deskripsi: 'Area parkir mobil dan motor beratap di dalam pagar gedung yang luas dan aman, dilengkapi pengawasan CCTV 24 jam nonstop.',
        icon: 'Car',
        badge: 'Parkir Nyaman'
      },
      {
        judul: 'Akses Mandiri Bebas 24 Jam',
        deskripsi: 'Memberikan fleksibilitas penuh bagi mobilitas kerja profesional, dokter, dan mahasiswa tanpa jam malam kaku dengan lingkungan aman kondusif.',
        icon: 'ShieldCheck',
        badge: 'Akses 24 Jam'
      },
    ],

    fasilitasUmum: [
      { 
        nama: 'Area Parkir Mobil & Motor Indoor Berpagar', 
        kategori: 'Parkir & Mobilitas',
        icon: 'Car', 
        desc: 'Area parkir mobil beratap dan motor yang aman dan terlindung di dalam pagar properti' 
      },
      { 
        nama: 'Akses Keluar Masuk Bebas 24 Jam Mandiri', 
        kategori: 'Keamanan',
        icon: 'Key', 
        desc: 'Penghuni memegang akses masuk sendiri kapan pun tanpa batas jam malam yang merepotkan' 
      },
      { 
        nama: 'Pengawasan Kamera CCTV 24 Jam Nonstop', 
        kategori: 'Keamanan',
        icon: 'ShieldCheck', 
        desc: 'Sistem keamanan CCTV aktif di seluruh area gerbang, koridor lantai, lobby, dan tempat parkir' 
      },
      { 
        nama: 'Wi-Fi Fiber Optic High Speed 150 Mbps', 
        kategori: 'Konektivitas',
        icon: 'Wifi', 
        desc: 'Koneksi internet fiber berkecepatan tinggi dengan access point stabil di setiap lantai untuk WFH & streaming' 
      },
      { 
        nama: 'Dapur & Pantry Bersama Modern', 
        kategori: 'Kuliner',
        icon: 'Utensils', 
        desc: 'Dilengkapi kompor gas, microwave, kitchen sink, dan dispenser air minum galon siap konsumsi' 
      },
      { 
        nama: 'Ruang Tamu & Lobby Bersama Ber-AC', 
        kategori: 'Kenyamanan',
        icon: 'Building2', 
        desc: 'Lobby yang bersih dan nyaman untuk menyambut rekan kerja, tamu keluarga, maupun diskusi santai' 
      },
      { 
        nama: 'Kulkas Pribadi di Setiap Unit Kamar', 
        kategori: 'Kenyamanan',
        icon: 'Coffee', 
        desc: 'Setiap kamar dilengkapi kulkas pribadi untuk kenyamanan menyimpan minuman dingin dan makanan' 
      },
      { 
        nama: 'Kamar Mandi Dalam Water Heater Hangat', 
        kategori: 'Kenyamanan',
        icon: 'Droplets', 
        desc: 'Water heater pemanas air di seluruh kamar mandi dalam dengan shower kencang dan kloset duduk' 
      },
      { 
        nama: 'Area Cuci & Laundry Bersama', 
        kategori: 'Layanan',
        icon: 'Shirt', 
        desc: 'Fasilitas area cuci dan jemur pakaian bersih serta kemudahan akses layanan laundry kiloan sekitar' 
      },
      { 
        nama: 'Housekeeping Kebersihan Koridor Rutin', 
        kategori: 'Layanan',
        icon: 'CheckCircle2', 
        desc: 'Petugas kebersihan membersihkan lorong umum, tangga, dan area bersama secara terjadwal setiap hari' 
      },
    ],

    kamar: [
      {
        id: 'executive-kitchen-suite',
        nama: 'Executive Suite with Private Kitchen',
        tipeKamar: 'Executive Suite',
        kategori: 'executive',
        tipeKm: 'KM Dalam Mewah + Water Heater',
        ukuran: '4.5 x 5.5 Meter (24 m²)',
        hargaBulan: 2850000,
        hargaTahun: 31000000,
        status: 'Tersedia',
        sisaKamar: 1,
        badgePromo: 'Unit Paling Eksklusif (Private Kitchen)',
        tipeKasur: 'King Bed (180 x 200 cm)',
        kapasitas: '1 - 2 Orang',
        gambarUtama: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Dapur Pribadi (Private Kitchenette) dengan Kompor, Sink & Kitchen Set di Dalam Kamar',
          'Kulkas Pribadi 2 Pintu / Jumbo di Dalam Kamar',
          'Ruang Kamar Paling Luas (24 m²) dengan Dining Area / Meja Makan',
          'Kamar Mandi Dalam Mewah + Water Heater (Air Hangat) + Kloset Duduk',
          'AC Daikin Inverter Dingin Maksimal & Hemat Daya Listrik',
          'Smart TV 43 Inch 4K Digital (YouTube, Netflix Ready)',
          'Kasur Springbed King Size (180x200 cm) Nyaman & Bantal Hotel Grade',
          'Workstation Meja Kerja Luas + Kursi Ergonomis Busa Nyaman',
          'Lemari Pakaian 3 Pintu Luas dengan Cermin Full-Length',
          'Jendela Kaca Lebar dengan Sirkulasi Udara & Pencahayaan Alami',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Sewa bulanan sudah termasuk air bersih, Wi-Fi 150 Mbps, parkir mobil/motor, iuran sampah, dan kebersihan area umum. Listrik sistem token mandiri sesuai pemakaian.',
      },
      {
        id: 'deluxe-suite',
        nama: 'Deluxe Suite Room',
        tipeKamar: 'Deluxe Suite',
        kategori: 'deluxe',
        tipeKm: 'KM Dalam + Water Heater',
        ukuran: '4 x 4.5 Meter (18 m²)',
        hargaBulan: 2500000,
        hargaTahun: 27500000,
        status: 'Tersedia',
        sisaKamar: 2,
        badgePromo: 'Best Seller / Favorit',
        tipeKasur: 'Queen Bed (160 x 200 cm)',
        kapasitas: '1 - 2 Orang',
        gambarUtama: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kulkas Pribadi 1 Pintu di Dalam Kamar',
          'Kamar Mandi Dalam dengan Water Heater (Air Hangat) & Kloset Duduk',
          'AC Sejuk Dingin Daikin / Panasonic',
          'Smart TV 32 Inch Layar Datar di Dalam Kamar',
          'Kasur Springbed Queen Size (160x200 cm) Berkualitas Hotel',
          'Meja Kerja / Belajar Nyaman + Kursi',
          'Lemari Pakaian 2 Pintu Sliding Minimalis',
          'Jendela Ventilasi Alami + Gorden Blackout',
          'Koneksi Wi-Fi Fiber Optic Cepat di Kamar',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Termasuk air bersih, Wi-Fi 150 Mbps, parkir mobil/motor, dan akses pantry bersama. Listrik sistem token mandiri.',
      },
      {
        id: 'studio-suite',
        nama: 'Studio Suite Room',
        tipeKamar: 'Studio Suite',
        kategori: 'studio',
        tipeKm: 'KM Dalam Shower + Kloset Duduk',
        ukuran: '3.5 x 4 Meter (14 m²)',
        hargaBulan: 2200000,
        hargaTahun: 24000000,
        status: 'Tersedia',
        sisaKamar: 1,
        badgePromo: 'Paling Terjangkau',
        tipeKasur: 'Queen Bed (140 x 200 cm)',
        kapasitas: '1 - 2 Orang',
        gambarUtama: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop',
        galeri: [
          'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
        ],
        fasilitasKamar: [
          'Kamar Mandi Dalam dengan Shower & Kloset Duduk Bersih',
          'AC Pendingin Ruangan Sejuk Dingin',
          'Smart TV Layar Datar di Kamar',
          'Kulkas Mini Pribadi di Dalam Kamar',
          'Kasur Springbed Queen (140x200 cm) Nyaman + Bantal',
          'Meja Belajar / Kerja Minimalis & Kursi',
          'Lemari Pakaian Kayu Minimalis',
          'Wi-Fi Fiber Optic Berkecepatan Tinggi',
          'Token Listrik Mandiri per Kamar',
        ],
        biayaLain: 'Termasuk air bersih, Wi-Fi 150 Mbps, dan pemakaian dapur bersama. Listrik sistem token mandiri.',
      },
    ],

    lokasiTerdekat: [
      { 
        nama: 'Kawasan Simpang Lima Semarang (Pusat Kota)', 
        jarak: '3 Menit (1.1 km)', 
        icon: 'Compass', 
        kategori: 'Pusat Kota & Landmark',
        highlight: 'Jantung Kota Semarang' 
      },
      { 
        nama: 'Kampus Pascasarjana UNDIP Pleburan', 
        jarak: '2 Menit (600 m)', 
        icon: 'GraduationCap', 
        kategori: 'Kampus & Pendidikan',
        highlight: 'Bisa Jalan Kaki' 
      },
      { 
        nama: 'Mall Ciputra & Plaza Simpang Lima', 
        jarak: '3 Menit (1.2 km)', 
        icon: 'ShoppingBag', 
        kategori: 'Mall & Belanja',
        highlight: 'Pusat Belanja & Bioskop' 
      },
      { 
        nama: 'RS Roemani Muhammadiyah Semarang', 
        jarak: '2 Menit (750 m)', 
        icon: 'HeartPulse', 
        kategori: 'Rumah Sakit & Kesehatan',
        highlight: 'Layanan Medis Terdekat' 
      },
      { 
        nama: 'Pusat Kuliner Hayam Wuruk & Erlangga Pleburan', 
        jarak: '1 Menit (300 m)', 
        icon: 'UtensilsCrossed', 
        kategori: 'Sentra Kuliner',
        highlight: 'Surga Kuliner & Cafe' 
      },
      { 
        nama: 'Jl. Pahlawan (Pusat Perkantoran & Gubernur Jateng)', 
        jarak: '3 Menit (1.0 km)', 
        icon: 'Building2', 
        kategori: 'Pusat Bisnis & Pemerintahan',
        highlight: 'Kawasan Kantor Pahlawan' 
      },
      { 
        nama: 'RS SMC Telogorejo Semarang', 
        jarak: '5 Menit (1.8 km)', 
        icon: 'HeartPulse', 
        kategori: 'Rumah Sakit & Kesehatan',
        highlight: 'Rumah Sakit Rujukan' 
      },
      { 
        nama: 'Tentrem Mall & Hotel (Gajah Mada)', 
        jarak: '5 Menit (1.9 km)', 
        icon: 'ShoppingBag', 
        kategori: 'Mall & Lifestyle',
        highlight: 'Modern Lifestyle Mall' 
      },
      { 
        nama: 'Stasiun Kereta Api Tawang & Poncol', 
        jarak: '8 Menit (3.5 km)', 
        icon: 'Train', 
        kategori: 'Transportasi Antarkota',
        highlight: 'Akses Kereta Cepat' 
      },
    ],

    ulasanPenghuni: [
      {
        nama: 'Arga Wicaksono',
        profesi: 'Senior IT Consultant / WFH',
        rating: 5,
        teks: "D'resident Suite 5 juara banget di Semarang. Kamar Executive ada dapur pribadi di dalam kamar, jadi praktis banget kalau mau masak tanpa antre. WiFi fiber-nya kencang dan stabil buat meeting seharian, lokasinya cuma 3 menit ke Simpang Lima.",
        waktu: '1 minggu lalu'
      },
      {
        nama: 'dr. Priscillia K.',
        profesi: 'Dokter Residen RS Roemani & SMC',
        rating: 5,
        teks: 'Dekat sekali ke RS Roemani dan Simpang Lima. Kamarnya hening, kasurnya empuk standar hotel, kulkas pribadi dan water heaternya berfungsi sempurna. Parkir mobilnya aman di dalam pagar dan bebas keluar masuk 24 jam.',
        waktu: '2 minggu lalu'
      },
      {
        nama: 'Iqbal & Amanda',
        profesi: 'Karyawan Swasta & Mahasiswa Magister Undip',
        rating: 5,
        teks: 'Sangat cocok untuk pasutri atau mahasiswa pascasarjana. Bersih, tertib, banyak tempat makan enak di sekitar Pleburan (Hayam Wuruk & Singosari). Pengelola sangat ramah dan cepat merespons kebutuhan penghuni.',
        waktu: '1 bulan lalu'
      }
    ],

    faq: [
      {
        tanya: "Apakah Kost Semarang D'resident Suite 5 menerima penghuni campur & pasutri?",
        jawab: "Ya, D'resident Suite 5 adalah hunian kos tipe suite eksklusif (campur) yang menerima pria, wanita, maupun pasangan suami istri sah (dengan melampirkan fotokopi buku nikah/KTP). Lingkungan sangat tertib, kondusif, dan didominasi karyawan profesional, dokter, dan mahasiswa pascasarjana."
      },
      {
        tanya: "Apakah semua tipe kamar dilengkapi dapur pribadi (kitchenette)?",
        jawab: "Tipe Executive Suite (24 m²) dilengkapi fasilitas dapur pribadi (private kitchenette), kompor, kitchen sink, dan meja makan langsung di dalam kamar. Untuk tipe Deluxe dan Studio dapat menggunakan dapur/pantry bersama yang lengkap dan modern."
      },
      {
        tanya: "Bagaimana fasilitas parkir kendaraan mobil dan motor?",
        jawab: "Tersedia area parkir mobil dan motor indoor beratap di dalam pagar gedung yang aman, terlindung dari panas/hujan, dan dipantau kamera CCTV 24 jam nonstop."
      },
      {
        tanya: "Apakah biaya sewa bulanan sudah termasuk air dan internet Wi-Fi?",
        jawab: "Ya, sewa bulanan sudah mencakup Wi-Fi fiber optic 150 Mbps, air bersih PDAM jernih, pemakaian dapur bersama/microwave, dispenser air galon, kebersihan area umum, dan keamanan 24 jam. Listrik kamar menggunakan sistem token PLN mandiri per kamar."
      },
      {
        tanya: "Bagaimana cara survei kamar atau reservasi unit?",
        jawab: "Anda dapat langsung mengklik tombol WhatsApp di website ini untuk terhubung langsung dengan pengelola D'resident Suite 5 untuk menanyakan ketersediaan kamar kosong terbaru atau menjadwalkan kunjungan survei ke Jl. Singosari I Selatan No. 5 Pleburan."
      }
    ],

    peraturan: [
      'Menjaga ketenangan dan privasi sesama penghuni, terutama pada jam istirahat malam (pukul 22.00 - 06.00 WIB).',
      'Akses mandiri 24 jam. Wajib menutup dan mengunci kembali gerbang utama saat keluar masuk demi keamanan bersama.',
      'Tamu dipersilakan berkunjung di Ruang Tamu / Lobby Bersama. Untuk kunjungan ke dalam kamar harap mengonfirmasi ke pengelola.',
      'Dilarang merokok di dalam kamar ber-AC. Merokok hanya diperkenankan di area outdoor terbuka yang telah ditentukan.',
      'Dilarang membawa hewan peliharaan, senjata tajam, minuman keras, serta barang-barang terlarang/narkoba.',
      'Pembayaran sewa bulanan dilakukan tepat waktu pada awal periode sewa setiap bulannya.',
    ],
  }
};

// Aliases agar URL atau slug lama tetap aman dan kompatibel
databaseKos['d-resident'] = databaseKos.dresident;
databaseKos['dresident-suite-5'] = databaseKos.dresident;
databaseKos['d-resident-suite-5'] = databaseKos.dresident;
databaseKos.d3wi = databaseKos.dresident;
databaseKos['d-3wi'] = databaseKos.dresident;
databaseKos['kos-exclusive-d3wi'] = databaseKos.dresident;
databaseKos.bsresidence = databaseKos.dresident;
databaseKos.smartbrilian = databaseKos.dresident;
databaseKos.smart = databaseKos.dresident;
databaseKos['bs-residence'] = databaseKos.dresident;
databaseKos.kosa = databaseKos.dresident;
databaseKos.kosb = databaseKos.dresident;
databaseKos.hanida = databaseKos.dresident;

/**
 * HELPER: Mendapatkan kos aktif
 * Menargetkan per-kos saja (Single Property Catalog):
 * Selalu mengembalikan D'resident Suite 5 sebagai properti utama default.
 */
export function getActiveKost(customPath = null) {
  const defaultKost = databaseKos.dresident;

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
  return [databaseKos.dresident];
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
  const cleanNomor = (nomor || '628122923456').replace(/[^0-9]/g, '');
  let pesan = '';
  if (namaKamar) {
    pesan = `Halo Pengelola ${namaKos}, saya melihat katalog website untuk unit *${namaKamar}*. Apakah masih tersedia kamar kosong dan boleh saya jadwalkan survei lokasi minggu ini? Terima kasih!`;
  } else {
    pesan = `Halo Pengelola ${namaKos}, saya tertarik ingin menanyakan info ketersediaan kamar kosong dan survei lokasi di Jl. Singosari I Selatan No. 5 Pleburan. Boleh dibantu infonya? Terima kasih!`;
  }
  return `https://wa.me/${cleanNomor}?text=${encodeURIComponent(pesan)}`;
};
