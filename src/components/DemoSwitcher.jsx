import React from 'react';
import { databaseKos } from '../data/kostData';
import { Layers, Sparkles } from 'lucide-react';

export default function DemoSwitcher({ currentKos, onSwitchKos }) {
  return (
    <div className="bg-gray-900 text-white text-xs py-2 px-4 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 font-semibold text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded-md border border-rose-500/30">
            <Sparkles className="w-3 h-3" />
            <span>Mode Demo Multi-Kos</span>
          </span>
          <span className="text-gray-400 hidden md:inline">
            1 Repo yang sama bisa menghasilkan banyak website kos:
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-[11px] font-medium hidden sm:inline">Pilih Demo:</span>
          {Object.values(databaseKos).map((kos) => (
            <button
              key={kos.id}
              onClick={() => onSwitchKos(kos)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentKos.id === kos.id
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {kos.id === 'hanida' ? '🏠 Kost Putri Hanida 2' : '🏡 Kost Griya Asri'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
