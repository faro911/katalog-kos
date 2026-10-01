import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomCatalog from './components/RoomCatalog';
import Facilities from './components/Facilities';
import LocationRules from './components/LocationRules';
import Footer from './components/Footer';
import RoomModal from './components/RoomModal';
import NotFoundKos from './components/NotFoundKos';
import { getActiveKost, buatLinkWa } from './data/kostData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentKost, setCurrentKost] = useState(getActiveKost());
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Pantau perubahan URL (jika user navigasi atau ganti path)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentKost(getActiveKost());
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Update judul tab browser sesuai kos yang dibuka
  useEffect(() => {
    if (currentKost?.nama) {
      document.title = `${currentKost.nama} - Katalog & Booking Kamar`;
    } else {
      document.title = 'Katalog Kos Tidak Ditemukan';
    }
  }, [currentKost]);

  // Jika tidak ada path kos yang valid (misal buka root / atau path salah)
  if (!currentKost) {
    return <NotFoundKos />;
  }

  const isRose = currentKost.temaWarna === 'rose';

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-rose-500 selection:text-white">

      {/* Top Navbar */}
      <Navbar kost={currentKost} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero kost={currentKost} />
        <RoomCatalog 
          kost={currentKost} 
          onSelectRoom={(kamar) => setSelectedRoom(kamar)} 
        />
        <Facilities kost={currentKost} />
        <LocationRules kost={currentKost} />
      </main>

      {/* Footer */}
      <Footer kost={currentKost} />

      {/* Detail Room Modal (Popup) */}
      {selectedRoom && (
        <RoomModal
          kamar={selectedRoom}
          kost={currentKost}
          onClose={() => setSelectedRoom(null)}
        />
      )}

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="Aksi Cepat WhatsApp" className="fixed bottom-6 right-6 z-40">
        <a
          href={buatLinkWa(currentKost.whatsapp, currentKost.nama)}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-2.5 px-4 py-3 rounded-full text-white shadow-xl hover:scale-105 active:scale-95 transition-all ${
            isRose 
              ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/30' 
              : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30'
          }`}
        >
          <MessageCircle className="w-6 h-6 fill-white shrink-0" />
          <span className="font-semibold text-xs sm:text-sm pr-1 hidden sm:inline">
            Tanya Pengelola
          </span>
        </a>
      </aside>
    </div>
  );
}
