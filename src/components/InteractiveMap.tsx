import { useState } from 'react';
import { translations, Language } from '../types';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Compass, Navigation } from 'lucide-react';

interface InteractiveMapProps {
  lang: Language;
}

interface MapLocation {
  id: string;
  name: Record<Language, string>;
  type: 'office' | 'project';
  lat: string;
  lng: string;
  address: Record<Language, string>;
  details: Record<Language, string>;
  phone?: string;
}

const mapLocations: MapLocation[] = [
  {
    id: "head-office",
    name: {
      en: "Ramzan Construction Head Office",
      ky: "«Рамзан Констракшн» Башкы кеңсеси",
      ru: "Головной офис Ramzan Construction"
    },
    type: "office",
    lat: "42.8746° N",
    lng: "74.6122° E",
    address: {
      en: "120 Chuy Avenue, Bishkek, Kyrgyzstan",
      ky: "Чүй проспектиси 120, Бишкек шаары, Кыргызстан",
      ru: "Проспект Чуй 120, Бишкек, Кыргызстан"
    },
    details: {
      en: "Our central executive suite where initial blueprints are approved and estimations are engineered.",
      ky: "Архитектуралык чиймелер бекитилген жана баалоо жүргүзүлгөн биздин борбордук кеңсебиз.",
      ru: "Центральный представительский офис, где утверждаются чертежи и осуществляются расчеты смет."
    },
    phone: "+996 (555) 777-888"
  },
  {
    id: "royal-crest-site",
    name: {
      en: "Royal Crest Villa",
      ky: "«Роял Крест» вилласы",
      ru: "Вилла Royal Crest"
    },
    type: "project",
    lat: "42.7533° N",
    lng: "74.6089° E",
    address: {
      en: "Alamudun Gorge, Foothills Area, Kyrgyzstan",
      ky: "Аламүдүн капчыгайы, Тоо этектери, Кыргызстан",
      ru: "Аламудунское ущелье, предгорный район, Кыргызстан"
    },
    details: {
      en: "A stunning 650m² concrete and steel luxury residence nearing final exterior landscaping.",
      ky: "Сырткы жашылдандыруу иштери аяктап жаткан 650м² аянттагы заманбап турак жай.",
      ru: "Роскошная вилла площадью 650м² из монолитного бетона на финальной стадии благоустройства."
    }
  },
  {
    id: "penthouse-site",
    name: {
      en: "Premium Erkindik Penthouse",
      ky: "Эркиндик премиум пентхаусу",
      ru: "Премиум-пентхаус на Эркиндик"
    },
    type: "project",
    lat: "42.8715° N",
    lng: "74.6092° E",
    address: {
      en: "88 Erkindik Boulevard, Bishkek, Kyrgyzstan",
      ky: "Эркиндик бульвары 88, Бишкек шаары, Кыргызстан",
      ru: "Бульвар Эркиндик 88, Бишкек, Кыргызстан"
    },
    details: {
      en: "An interior architectural marvel featuring bookmatched marble walls and acoustic ceiling engineering.",
      ky: "Мрамор дубалдары жана акустикалык шыптары бар заманбап ички жасалгалоо долбоору.",
      ru: "Интерьерный шедевр с облицовкой стен цельным мрамором и акустическим натяжным потолком."
    }
  }
];

export function InteractiveMap({ lang }: InteractiveMapProps) {
  const [selectedLoc, setSelectedLoc] = useState<MapLocation>(mapLocations[0]);
  const [mapTheme, setMapTheme] = useState<'blueprint' | 'satellite'>('blueprint');

  const t = translations[lang];

  return (
    <div className="bg-zinc-50 dark:bg-dark-card rounded-2xl border border-zinc-200/60 dark:border-white/10 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
      {/* Interactive Map Visualizer */}
      <div className="lg:col-span-7 relative h-72 sm:h-96 bg-zinc-950 flex flex-col justify-between p-4 overflow-hidden select-none">
        {/* Decorative Grid Lines to make it look like a high-tech architectural blueprint */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c58d0910_1px,transparent_1px),linear-gradient(to_bottom,#c58d0910_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Animated Radar Effect radiating from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-gold-500/5 animate-ping pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-gold-500/10 pointer-events-none" />
        
        {/* Top Control Bar */}
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold-500/20 text-xs font-mono text-gold-400">
            <Compass className="w-3.5 h-3.5 animate-spin" />
            <span>BISHKEK COORDINATES</span>
          </div>
          <div className="flex gap-1 bg-black/80 backdrop-blur-md p-1 rounded-lg border border-zinc-800">
            <button 
              onClick={() => setMapTheme('blueprint')}
              className={`px-2 py-1 rounded text-2xs font-bold transition-all ${mapTheme === 'blueprint' ? 'bg-gold-500 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              BLUEPRINT
            </button>
            <button 
              onClick={() => setMapTheme('satellite')}
              className={`px-2 py-1 rounded text-2xs font-bold transition-all ${mapTheme === 'satellite' ? 'bg-gold-500 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              SATELLITE
            </button>
          </div>
        </div>

        {/* The Mock Map Space */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {mapTheme === 'satellite' ? (
            /* Satellite stylized background */
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity filter blur-xs" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')` }} />
          ) : (
            /* Blueprint architectural circle radar design */
            <div className="w-full h-full flex items-center justify-center opacity-25">
              <div className="border border-gold-500/20 rounded-full w-96 h-96 absolute" />
              <div className="border border-gold-500/10 rounded-full w-[500px] h-[500px] absolute" />
              <div className="absolute h-full w-[1px] bg-gold-500/10" />
              <div className="absolute w-full h-[1px] bg-gold-500/10" />
            </div>
          )}
        </div>

        {/* Map Markers */}
        <div className="absolute inset-0 z-10">
          {/* Office Marker */}
          <button 
            onClick={() => setSelectedLoc(mapLocations[0])}
            className={`absolute transition-all hover:scale-125 duration-200 flex flex-col items-center group cursor-pointer`}
            style={{ top: '40%', left: '50%' }}
          >
            <div className={`p-2 rounded-full shadow-lg border-2 flex items-center justify-center transition-all ${selectedLoc.id === 'head-office' ? 'bg-gold-500 border-white text-white scale-110 ring-4 ring-gold-500/30' : 'bg-black border-gold-500 text-gold-400'}`}>
              <MapPin className="w-4 h-4" />
            </div>
            <span className="mt-1 bg-black/90 text-[10px] text-zinc-300 px-2 py-0.5 rounded border border-zinc-800 shadow-md font-sans">
              Head Office
            </span>
          </button>

          {/* Royal Crest Villa Project Marker */}
          <button 
            onClick={() => setSelectedLoc(mapLocations[1])}
            className={`absolute transition-all hover:scale-125 duration-200 flex flex-col items-center group cursor-pointer`}
            style={{ top: '75%', left: '40%' }}
          >
            <div className={`p-2 rounded-full shadow-lg border-2 flex items-center justify-center transition-all ${selectedLoc.id === 'royal-crest-site' ? 'bg-gold-500 border-white text-white scale-110 ring-4 ring-gold-500/30' : 'bg-black border-zinc-500 text-zinc-400'}`}>
              <MapPin className="w-4 h-4" />
            </div>
            <span className="mt-1 bg-black/90 text-[10px] text-zinc-300 px-2 py-0.5 rounded border border-zinc-800 shadow-md font-sans">
              Royal Crest Villa
            </span>
          </button>

          {/* Erkindik Penthouse Marker */}
          <button 
            onClick={() => setSelectedLoc(mapLocations[2])}
            className={`absolute transition-all hover:scale-125 duration-200 flex flex-col items-center group cursor-pointer`}
            style={{ top: '48%', left: '46%' }}
          >
            <div className={`p-2 rounded-full shadow-lg border-2 flex items-center justify-center transition-all ${selectedLoc.id === 'penthouse-site' ? 'bg-gold-500 border-white text-white scale-110 ring-4 ring-gold-500/30' : 'bg-black border-zinc-500 text-zinc-400'}`}>
              <MapPin className="w-4 h-4" />
            </div>
            <span className="mt-1 bg-black/90 text-[10px] text-zinc-300 px-2 py-0.5 rounded border border-zinc-800 shadow-md font-sans">
              Penthouse Project
            </span>
          </button>
        </div>

        {/* Bottom Legend */}
        <div className="flex justify-between items-end z-10">
          <span className="text-[10px] font-mono text-zinc-500">SCALE: 1 : 25,000</span>
          <div className="flex items-center gap-2 bg-black/60 px-2 py-1 rounded border border-zinc-800 text-[10px] text-zinc-400">
            <span className="inline-block w-2.5 h-2.5 bg-gold-500 rounded-full" />
            <span>Office</span>
            <span className="inline-block w-2.5 h-2.5 bg-zinc-600 rounded-full ml-1" />
            <span>Active Project</span>
          </div>
        </div>
      </div>

      {/* Side Information Panel */}
      <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-dark-card border-t lg:border-t-0 lg:border-l border-zinc-200 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-1 bg-gold-500/10 text-gold-600 dark:text-gold-400 text-2xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-4">
            <ShieldCheck className="w-3 h-3" />
            <span>Verified Location</span>
          </div>

          <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white leading-tight mb-2">
            {selectedLoc.name[lang]}
          </h3>

          <div className="flex items-start gap-2.5 text-zinc-500 dark:text-zinc-400 text-xs mb-4">
            <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
            <span>{selectedLoc.address[lang]}</span>
          </div>

          <p className="text-zinc-600 dark:text-zinc-300 text-xs leading-relaxed mb-6">
            {selectedLoc.details[lang]}
          </p>

          <div className="space-y-2.5 border-t border-zinc-150 dark:border-white/10 pt-4 font-mono text-2xs text-zinc-500">
            <div className="flex justify-between">
              <span>LATITUDE:</span>
              <span className="text-zinc-800 dark:text-zinc-300 font-bold">{selectedLoc.lat}</span>
            </div>
            <div className="flex justify-between">
              <span>LONGITUDE:</span>
              <span className="text-zinc-800 dark:text-zinc-300 font-bold">{selectedLoc.lng}</span>
            </div>
            {selectedLoc.phone && (
              <div className="flex justify-between border-t border-zinc-150 dark:border-white/10 pt-2 text-xs">
                <span className="font-sans text-zinc-400">PHONE:</span>
                <span className="font-sans text-gold-500 font-bold flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  {selectedLoc.phone}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(selectedLoc.address.en)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-zinc-950 text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all shadow-md active:scale-98"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
}
