/**
 * AI SERVICE
 * Menghubungkan instruksi chat pengguna dengan Google Gemini API
 * untuk memproses pembaruan data kos dan menghasilkan kode JavaScript yang valid.
 */

const GEMINI_MODELS = [
  'gemini-2.5-flash',
  'gemini-1.5-flash',
];

/**
 * Memproses perintah pengguna menggunakan Google Gemini API
 * @param {string} apiKey - Kunci API Google AI Studio
 * @param {string} currentCode - Isi file kostData.js saat ini
 * @param {string} userPrompt - Perintah pengguna dari chat
 */
export async function processKostUpdateWithAI(apiKey, currentCode, userPrompt) {
  if (!apiKey || apiKey.trim() === '') {
    throw new Error('Kunci Google Gemini API belum diisi. Silakan masukkan di tombol Pengaturan (⚙️).');
  }

  const systemInstruction = `Anda adalah Antigravity AI Code Assistant untuk platform Katalog Kos Multi-Tenant React.
Tugas Anda adalah memperbarui atau menambahkan data properti kos pada file 'src/data/kostData.js' sesuai instruksi pengguna.

ATURAN KRUSIAL STRUKTUR DATA:
1. File 'src/data/kostData.js' mengekspor:
   - export const databaseKos = { ... };
   - Aliases (misal: databaseKos.namakos2 = databaseKos.namakos);
   - export function getActiveKost(customPath = null) { ... };
   - export function checkIfCurrentPathRejected() { ... };
   - export function getActiveKostsList() { ... };
   - export const formatRupiah = (angka) => { ... };
   - export const buatLinkWa = (nomor, namaKos, namaKamar = '') => { ... };

2. Setiap properti kos di 'databaseKos' WAJIB memiliki:
   - id: string unik huruf kecil (contoh: 'barokah')
   - status: 'AKTIF' atau 'TOLAK'
   - nama: string nama kos
   - tipe: string (contoh: 'Khusus Putri', 'Campur', atau 'Pasutri')
   - tagline: string singkat menarik
   - temaWarna: 'emerald' | 'blue' | 'rose' | 'amber'
   - rating: number (contoh: 4.8)
   - totalUlasan: number (contoh: 20)
   - whatsapp: nomor HP berformat internasional tanpa tanda plus (contoh: '6281234567890')
   - alamat: string alamat lengkap dengan kecamatan dan kota
   - googleMapsUrl: string tautan Google Maps
   - stats: { totalKamar, kamarTersedia, jarakKampus, kecepatanWifi }
   - fasilitasUmum: array 6-8 item { nama, icon, desc } dengan icon dari Lucide: Wifi, Key, Car, Utensils, ShieldCheck, Shirt, Coffee, Droplets
   - kamar: array tipe kamar, masing-masing WAJIB memiliki:
     * id: string unik
     * nama: string nama tipe kamar
     * kategori: 'ac' atau 'non-ac'
     * tipeKm: 'KM Dalam' atau 'KM Luar'
     * ukuran: string (contoh: '3.5 x 4 Meter')
     * hargaBulan: number angka bulat (contoh: 1200000)
     * hargaTahun: number angka bulat (contoh: 13200000)
     * status: 'Tersedia' atau 'Penuh'
     * sisaKamar: number (contoh: 2)
     * gambarUtama: URL gambar Unsplash kamar kos yang relevan
     * galeri: array 2-3 URL gambar Unsplash
     * fasilitasKamar: array string fasilitas
     * biayaLain: string catatan iuran/listrik
   - lokasiTerdekat: array tempat terdekat { nama, jarak, icon } dengan icon valid: GraduationCap, UtensilsCrossed, ShoppingBag, HeartPulse, Compass, Train, School, BookOpen
   - peraturan: array string peraturan kos

3. Jangan pernah menghapus data kos lain yang sudah ada kecuali diminta secara eksplisit.
4. Pastikan menambahkan id kos baru ke:
   - databaseKos[id] = ...
   - Aliases di bawah databaseKos
   - getActiveKost (pengecekan query param, pathSlug, dan subdomain)
   - getActiveKostsList (tambahkan ke array list kos aktif)
   - Jika kos berstatus 'TOLAK', tambahkan ke checkIfCurrentPathRejected.

OUTPUT WAJIB DALAM FORMAT JSON MURNI TANPA MARKDOWN BACKTICKS:
{
  "summary": "Rangkuman singkat dan ramah dalam bahasa Indonesia mengenai perubahan yang dilakukan",
  "slug": "slug-url-kos (contoh: 'barokah' atau null)",
  "commitMessage": "feat: pesan commit singkat dan jelas",
  "updatedCode": "Seluruh kode JavaScript lengkap dan valid untuk src/data/kostData.js tanpa ada bagian yang dipotong atau terputus"
}`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: `Berikut adalah isi file 'src/data/kostData.js' saat ini:
\`\`\`javascript
${currentCode}
\`\`\`

Instruksi Pengguna:
"${userPrompt}"

Tolong proses instruksi di atas dan berikan respons JSON sesuai format yang ditentukan.`,
          },
        ],
      },
    ],
    systemInstruction: {
      parts: [{ text: systemInstruction }],
    },
    generationConfig: {
      temperature: 0.2,
      responseMimeType: 'application/json',
    },
  };

  let lastError = null;

  for (const model of GEMINI_MODELS) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData?.error?.message || `HTTP error ${response.status}`);
      }

      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!rawText) {
        throw new Error('AI tidak menghasilkan jawaban yang valid.');
      }

      // Bersihkan kemungkinan markdown jika ada
      const cleanedJson = rawText.replace(/^\`\`\`json\n?/, '').replace(/\n?\`\`\`$/, '').trim();
      const parsed = JSON.parse(cleanedJson);

      if (!parsed.updatedCode) {
        throw new Error('Hasil AI tidak menyertakan kode yang diperbarui.');
      }

      return {
        success: true,
        summary: parsed.summary || 'Perubahan data kos berhasil disiapkan.',
        slug: parsed.slug || null,
        commitMessage: parsed.commitMessage || 'feat: update katalog kos via AI Assistant',
        updatedCode: parsed.updatedCode,
      };
    } catch (err) {
      lastError = err;
      console.warn(`Percobaan dengan model ${model} gagal: ${err.message}. Mencoba model berikutnya jika ada...`);
    }
  }

  throw new Error(`Gagal memproses dengan Gemini AI: ${lastError?.message || 'Unknown error'}`);
}
