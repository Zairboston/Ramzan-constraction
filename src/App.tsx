import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  Globe, 
  Sun, 
  Moon, 
  ChevronDown, 
  Star, 
  ArrowUp, 
  Check, 
  Search, 
  Building2, 
  Calendar, 
  MapPin, 
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Zap,
  Hammer
} from 'lucide-react';

import { 
  translations, 
  Language, 
  servicesData, 
  projectsData, 
  galleryData, 
  testimonialsData, 
  faqsData, 
  blogsData, 
  BlogItem 
} from './types';

// Custom sub-components
import { Counter } from './components/Counter';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { InteractiveMap } from './components/InteractiveMap';
import { Lightbox } from './components/Lightbox';
import { QuoteModal, DocumentModal } from './components/Modals';

export default function App() {
  // Localization state
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('ramzan_lang');
    return (saved === 'en' || saved === 'ky' || saved === 'ru') ? (saved as Language) : 'en';
  });
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Dark/Light Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('ramzan_theme');
    return saved ? saved === 'dark' : true; // Default to luxury dark theme
  });

  // UI Interactive States
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(() => {
    return localStorage.getItem('ramzan_cookie_consent') === 'accepted' || localStorage.getItem('ramzan_cookie_consent') === 'declined';
  });

  // Filtering & Search for Services
  const [serviceSearch, setServiceSearch] = useState('');
  const [serviceFilter, setServiceFilter] = useState<'all' | 'construction' | 'renovation' | 'specialized'>('all');

  // Filtering for Projects
  const [projectFilter, setProjectFilter] = useState<'all' | 'residential' | 'commercial' | 'renovation'>('all');

  // Modal states
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  // Gallery Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Accordion active FAQ state
  const [faqActiveId, setFaqActiveId] = useState<string | null>(null);

  // Footer Quick contact form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const t = translations[lang];

  // Sync Language change to LocalStorage
  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('ramzan_lang', newLang);
    setLangDropdownOpen(false);
  };

  // Sync Dark Theme class with Document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ramzan_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ramzan_theme', 'light');
    }
  }, [darkMode]);

  // Viewport scroll listeners for sticky navigation and top buttons
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save Cookie preferences
  const handleCookie = (accepted: boolean) => {
    localStorage.setItem('ramzan_cookie_consent', accepted ? 'accepted' : 'declined');
    setCookieConsent(true);
  };

  // Filter service items based on search query and active tab
  const filteredServices = servicesData.filter(s => {
    const matchesCategory = serviceFilter === 'all' || s.category === serviceFilter;
    const matchesSearch = s.title[lang].toLowerCase().includes(serviceSearch.toLowerCase()) || 
                          s.desc[lang].toLowerCase().includes(serviceSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filter project items based on active tab
  const filteredProjects = projectsData.filter(p => {
    return projectFilter === 'all' || p.category === projectFilter;
  });

  // Submit quick contact inquiry
  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setContactStatus('sending');
    setTimeout(() => {
      setContactStatus('success');
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactMsg('');
    }, 1500);
  };

  const handleOpenBlog = (blog: BlogItem) => {
    setSelectedBlog(blog);
    setBlogModalOpen(true);
  };

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-main text-zinc-950 dark:text-white font-sans antialiased overflow-x-hidden selection:bg-gold-500 selection:text-black">
      
      {/* 1. STICKY NAVIGATION BAR */}
      <header 
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-dark-main/90 backdrop-blur-md border-b border-zinc-200/50 dark:border-white/10 shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => scrollToSection('home-hero')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-[#D4AF37] to-[#F9E29B] rounded-xl flex items-center justify-center text-[#0A0A0A] font-bold shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 text-[#0A0A0A]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl tracking-tight leading-none text-zinc-900 dark:text-white group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                RAMZAN
              </span>
              <span className="font-mono text-[9px] tracking-widest text-gold-600 dark:text-gold-400 uppercase font-semibold">
                CONSTRUCTION
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button onClick={() => scrollToSection('home-hero')} className="text-sm font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer">{t.navHome}</button>
            <button onClick={() => scrollToSection('about-us')} className="text-sm font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer">{t.navAbout}</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer">{t.navServices}</button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer">{t.navProjects}</button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer">{t.navGallery}</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer">{t.navTestimonials}</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer">{t.navFaq}</button>
            <button onClick={() => scrollToSection('blog')} className="text-sm font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer">{t.navBlog}</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer">{t.navContact}</button>
          </nav>

          {/* Nav Controls (Language, Dark Mode, Quote) */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-dark-card border border-zinc-200 dark:border-white/10 text-xs font-semibold hover:bg-zinc-200 dark:hover:bg-white/5 transition-all cursor-pointer text-zinc-800 dark:text-zinc-200"
              >
                <Globe className="w-3.5 h-3.5 text-gold-500" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 bg-white dark:bg-dark-card border border-zinc-200 dark:border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
                  >
                    <button 
                      onClick={() => handleLangChange('en')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-white/5 flex items-center gap-2 ${lang === 'en' ? 'text-gold-500 bg-gold-50/10' : 'text-zinc-700 dark:text-zinc-300'}`}
                    >
                      <span>🇬🇧</span> English
                    </button>
                    <button 
                      onClick={() => handleLangChange('ky')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-white/5 flex items-center gap-2 ${lang === 'ky' ? 'text-gold-500 bg-gold-50/10' : 'text-zinc-700 dark:text-zinc-300'}`}
                    >
                      <span>🇰🇬</span> Кыргызча
                    </button>
                    <button 
                      onClick={() => handleLangChange('ru')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-white/5 flex items-center gap-2 ${lang === 'ru' ? 'text-gold-500 bg-gold-50/10' : 'text-zinc-700 dark:text-zinc-300'}`}
                    >
                      <span>🇷🇺</span> Русский
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-dark-card border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/5 transition-all text-zinc-500 dark:text-zinc-400 hover:text-gold-500 dark:hover:text-gold-400 cursor-pointer"
              title="Toggle Theme Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            {/* Quote CTA Button */}
            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-zinc-900 hover:bg-zinc-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-zinc-950 text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-full transition-all shadow-md cursor-pointer hover:scale-102"
            >
              {t.heroCta}
            </button>
          </div>

          {/* Mobile Hamburguer trigger */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-dark-card border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-dark-card border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER NAVIGATION MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[64px] left-0 right-0 bg-white dark:bg-dark-main z-35 border-b border-zinc-200 dark:border-white/10 shadow-xl overflow-hidden lg:hidden"
          >
            <div className="px-6 py-6 space-y-3.5 flex flex-col text-zinc-900 dark:text-white">
              <button onClick={() => scrollToSection('home-hero')} className="text-left py-1 text-sm font-medium hover:text-gold-500">{t.navHome}</button>
              <button onClick={() => scrollToSection('about-us')} className="text-left py-1 text-sm font-medium hover:text-gold-500">{t.navAbout}</button>
              <button onClick={() => scrollToSection('services')} className="text-left py-1 text-sm font-medium hover:text-gold-500">{t.navServices}</button>
              <button onClick={() => scrollToSection('projects')} className="text-left py-1 text-sm font-medium hover:text-gold-500">{t.navProjects}</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left py-1 text-sm font-medium hover:text-gold-500">{t.navGallery}</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left py-1 text-sm font-medium hover:text-gold-500">{t.navTestimonials}</button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-1 text-sm font-medium hover:text-gold-500">{t.navFaq}</button>
              <button onClick={() => scrollToSection('blog')} className="text-left py-1 text-sm font-medium hover:text-gold-500">{t.navBlog}</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-1 text-sm font-medium hover:text-gold-500">{t.navContact}</button>

              <div className="pt-4 border-t border-zinc-100 dark:border-white/10 flex flex-col gap-4">
                {/* Language Selectors */}
                <div className="flex gap-2.5">
                  <button 
                    onClick={() => handleLangChange('en')} 
                    className={`flex-1 px-3 py-2 rounded-lg border text-xs font-bold text-center ${lang === 'en' ? 'bg-gold-500 border-gold-500 text-zinc-950' : 'bg-zinc-50 dark:bg-dark-card border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300'}`}
                  >
                    🇬🇧 EN
                  </button>
                  <button 
                    onClick={() => handleLangChange('ky')} 
                    className={`flex-1 px-3 py-2 rounded-lg border text-xs font-bold text-center ${lang === 'ky' ? 'bg-gold-500 border-gold-500 text-zinc-950' : 'bg-zinc-50 dark:bg-dark-card border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300'}`}
                  >
                    🇰🇬 КЫ
                  </button>
                  <button 
                    onClick={() => handleLangChange('ru')} 
                    className={`flex-1 px-3 py-2 rounded-lg border text-xs font-bold text-center ${lang === 'ru' ? 'bg-gold-500 border-gold-500 text-zinc-950' : 'bg-zinc-50 dark:bg-dark-card border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300'}`}
                  >
                    🇷🇺 РУ
                  </button>
                </div>

                {/* Mobile Quote button */}
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-zinc-950 text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all text-center"
                >
                  {t.heroCta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 2. HERO LANDING SECTION */}
      <section 
        id="home-hero" 
        className="relative min-h-[92vh] flex items-center justify-center pt-24 overflow-hidden"
      >
        {/* Large Construction Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 dark:bg-black/85 z-10" />
          <img 
            src="/src/assets/images/hero_construction_1782770516450.jpg" 
            alt="Premium Architectural Construction site background" 
            className="w-full h-full object-cover scale-102 filter brightness-110"
            referrerPolicy="no-referrer"
          />
          {/* Subtle slow visual pulse glow of golden color in the corner */}
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 px-4.5 py-1.5 rounded-full text-gold-400 font-mono text-2xs uppercase tracking-widest font-bold">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-ping" />
              <span>GOSSTROY LICENSED CONTRACTOR</span>
            </div>

            {/* Slogan */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-none">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600">Trust</span>.<br />
              Creating <span className="relative inline-block">
                Quality
                <span className="absolute left-0 bottom-1.5 w-full h-1 bg-gold-500/40 rounded-full" />
              </span>.
            </h1>

            {/* Sub-slogan */}
            <p className="max-w-2xl mx-auto text-zinc-300 dark:text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              {t.heroSubSlogan}
            </p>

            {/* CTA button section */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setQuoteModalOpen(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-zinc-950 font-bold uppercase tracking-wider text-xs px-8 py-4.5 rounded-full transition-all shadow-xl hover:shadow-gold-500/10 hover:scale-103 cursor-pointer"
              >
                {t.heroCta}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold uppercase tracking-wider text-xs px-8 py-4.5 rounded-full transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>{t.navServices}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* 3. CORE STATISTICS GRID */}
      <section 
        id="statistics-section"
        className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#121212] dark:bg-dark-card text-white rounded-2xl border border-zinc-200/50 dark:border-white/10 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Stat 1 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1 group">
              <div className="flex items-baseline gap-1">
                <Counter end={12} suffix="+" />
              </div>
              <span className="text-zinc-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
                {t.statsYears}
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1 group">
              <div className="flex items-baseline gap-1">
                <Counter end={180} suffix="+" />
              </div>
              <span className="text-zinc-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
                {t.statsProjects}
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1 group">
              <div className="flex items-baseline gap-1">
                <Counter end={165} suffix="+" />
              </div>
              <span className="text-zinc-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
                {t.statsClients}
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1 group">
              <div className="flex items-baseline gap-1">
                <Counter end={45} suffix="+" />
              </div>
              <span className="text-zinc-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
                {t.statsTeam}
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* 4. ABOUT US / WHY CHOOSE US */}
      <section 
        id="about-us" 
        className="py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-gold-500/10 text-gold-600 dark:text-gold-400 text-2xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ESTABLISHED 2014</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-50 leading-tight">
                {t.whyChooseUsTitle}
              </h2>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                {t.whyChooseUsSub}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5.5 h-5.5 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-zinc-50 font-bold">100% Seismic Tested:</strong> Built to withstand seismic forces up to Magnitude 9 under Gosstroy guidelines.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5.5 h-5.5 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-zinc-50 font-bold">Direct Supply Channels:</strong> We import Italian marble, German structural accessories, and Siberian timber directly.
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-zinc-950 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <span>Connect With Us</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Cards Grid Column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.whyCards.map((card, idx) => {
                const colors = [
                  "border-gold-500/20 bg-zinc-50/50 dark:bg-dark-card/60 dark:border-white/10",
                  "border-zinc-200/50 dark:border-white/5 bg-zinc-50/30 dark:bg-dark-card/30",
                  "border-zinc-200/50 dark:border-white/5 bg-zinc-50/30 dark:bg-dark-card/30",
                  "border-gold-500/20 bg-zinc-50/50 dark:bg-dark-card/60 dark:border-white/10"
                ];
                return (
                  <div 
                    key={idx}
                    className={`p-6 rounded-2xl border ${colors[idx]} hover:border-gold-500/50 transition-all duration-300 shadow-md group`}
                  >
                    <span className="font-mono text-xs font-bold text-gold-500 tracking-widest block mb-3 uppercase">
                      CRITERIA 0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-gold-500 transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>


      {/* 5. SERVICES SECTION */}
      <section 
        id="services" 
        className="py-16 sm:py-24 bg-zinc-50 dark:bg-dark-card/30 border-y border-zinc-100 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold text-gold-500 tracking-widest uppercase">
              EXPERTISE & SOLUTIONS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white leading-tight mt-1 mb-3">
              {t.servicesTitle}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.servicesSub}
            </p>
          </div>

          {/* Filtering and Search Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            {/* Search Box */}
            <div className="relative w-full md:max-w-xs shrink-0">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                value={serviceSearch}
                onChange={(e) => setServiceSearch(e.target.value)}
                placeholder="Search services..."
                className="w-full bg-white dark:bg-dark-card border border-zinc-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
              />
              {serviceSearch && (
                <button onClick={() => setServiceSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs">Clear</button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {(['all', 'construction', 'renovation', 'specialized'] as const).map((cat) => {
                const labelMap = {
                  all: lang === 'en' ? 'All Services' : lang === 'ky' ? 'Баары' : 'Все услуги',
                  construction: lang === 'en' ? 'Construction' : lang === 'ky' ? 'Курулуш' : 'Строительство',
                  renovation: lang === 'en' ? 'Renovation' : lang === 'ky' ? 'Оңдоп-түзөө' : 'Ремонт',
                  specialized: lang === 'en' ? 'Specialized' : lang === 'ky' ? 'Атайын жумуштар' : 'Спец-работы'
                };
                return (
                  <button
                    key={cat}
                    onClick={() => setServiceFilter(cat)}
                    className={`px-4 py-2 rounded-lg text-2xs md:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${serviceFilter === cat ? 'bg-zinc-900 dark:bg-gold-500 text-white dark:text-zinc-950 shadow-md' : 'bg-white dark:bg-dark-card border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50'}`}
                  >
                    {labelMap[cat]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: idx * 0.02 }}
                    key={service.id}
                    className="bg-white dark:bg-dark-card border border-zinc-150 dark:border-white/10 hover:border-gold-500/50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Icon Container */}
                      <div className="w-12 h-12 bg-zinc-50 dark:bg-dark-main border border-zinc-200/50 dark:border-white/10 rounded-xl flex items-center justify-center text-gold-500 mb-5 group-hover:bg-gold-500 group-hover:text-zinc-950 transition-colors">
                        <IconComponent className="w-5 h-5 transition-transform group-hover:rotate-6 duration-300" />
                      </div>

                      {/* Header Title */}
                      <h3 className="font-display font-bold text-base sm:text-lg text-zinc-900 dark:text-white mb-2 leading-snug group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                        {service.title[lang]}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                        {service.desc[lang]}
                      </p>
                    </div>

                    {/* Small CTA Trigger */}
                    <div className="border-t border-zinc-100 dark:border-white/10 pt-4 flex items-center justify-between text-2xs tracking-wider uppercase font-bold text-zinc-400 dark:text-zinc-500 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                      <span>{service.category}</span>
                      <button 
                        onClick={() => setQuoteModalOpen(true)}
                        className="flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <span>Quote</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Empty Results State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-sm">No services matches your search.</p>
              <button onClick={() => { setServiceSearch(''); setServiceFilter('all'); }} className="mt-2 text-xs font-bold text-gold-500 underline uppercase cursor-pointer">Reset Filters</button>
            </div>
          )}

          {/* Quick Consultation Ribbon */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-tr from-dark-card to-dark-main text-white rounded-2xl p-6 sm:p-8 border border-zinc-200/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-display font-bold text-lg text-white">Need a custom specialty project?</h4>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">Our civil engineering estimators operate across Kyrgyzstan. Connect directly to schedule physical concrete core tests.</p>
            </div>
            <button 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-gold-500 hover:bg-gold-600 text-zinc-950 text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
            >
              {t.servicesCta}
            </button>
          </div>

        </div>
      </section>


      {/* 6. PROJECTS SECTION (BEFORE & AFTER SLIDERS) */}
      <section 
        id="projects" 
        className="py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-mono text-xs font-bold text-gold-500 tracking-widest uppercase">
              STRUCTURAL PORTFOLIO
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-50 leading-tight mt-1 mb-3">
              {t.projectsTitle}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.projectsSub}
            </p>
          </div>

          {/* Project Category Filters */}
          <div className="flex justify-center gap-1 mb-8 overflow-x-auto pb-2 scrollbar-none">
            {(['all', 'residential', 'commercial', 'renovation'] as const).map((cat) => {
              const labelMap = {
                all: t.filterAll,
                residential: t.filterResidential,
                commercial: t.filterCommercial,
                renovation: t.filterRenovation
              };
              return (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-2xs sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${projectFilter === cat ? 'bg-gold-500 text-zinc-950 shadow-md' : 'bg-zinc-100 dark:bg-dark-card border border-zinc-200/50 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/5'}`}
                >
                  {labelMap[cat]}
                </button>
              );
            })}
          </div>

          {/* Projects Slider Cards Grid */}
          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50 dark:bg-dark-card/35 rounded-3xl p-6 sm:p-8 border border-zinc-200/40 dark:border-white/10 shadow-lg"
                >
                    {/* Left Column: Interactive Before/After slider */}
                    <div className="lg:col-span-7">
                      <BeforeAfterSlider 
                        beforeImage={project.beforeImage} 
                        afterImage={project.afterImage} 
                        lang={lang}
                      />
                    </div>

                    {/* Right Column: Project details */}
                    <div className="lg:col-span-5 space-y-4 lg:pl-4">
                      <div className="flex items-center gap-2 text-2xs font-mono font-bold uppercase text-gold-500 tracking-wider">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>YEAR {project.year}</span>
                      </div>

                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight leading-tight">
                        {project.title[lang]}
                      </h3>

                      <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                        {project.description[lang]}
                      </p>

                      <div className="space-y-2 border-t border-zinc-200/50 dark:border-white/10 pt-4 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 font-medium uppercase tracking-wider">STATUS:</span>
                          <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-2xs uppercase">
                            {t.projectCompleted}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 font-medium uppercase tracking-wider">{t.projectLocation}:</span>
                          <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-right">
                            {project.location[lang]}
                          </span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button 
                          onClick={() => {
                            setContactMsg(`I'm interested in reviewing structural files for "${project.title[lang]}". Please contact me.`);
                            scrollToSection('contact');
                          }}
                          className="w-full flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-white/5 dark:hover:bg-white/10 dark:border dark:border-white/10 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
                        >
                          <span>{t.viewDetails} Details</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* 7. GALLERY SECTION (BENTO GRID WITH LIGHTBOX) */}
      <section 
        id="gallery" 
        className="py-16 sm:py-24 bg-zinc-50 dark:bg-dark-card/30 border-y border-zinc-100 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold text-gold-500 tracking-widest uppercase">
              VISUAL CAPABILITIES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white leading-tight mt-1 mb-3">
              {t.galleryTitle}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.gallerySub}
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.map((item, idx) => {
              // Create custom height variations for bento rhythm
              const aspectRatios = [
                "h-64 sm:h-72 lg:h-80",
                "h-64 sm:h-72 lg:h-[340px]",
                "h-64 sm:h-72 lg:h-[300px]",
                "h-64 sm:h-72 lg:h-[300px]",
                "h-64 sm:h-72 lg:h-[340px]",
                "h-64 sm:h-72 lg:h-80"
              ];
              return (
                <div 
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className={`group relative overflow-hidden rounded-2xl cursor-zoom-in ${aspectRatios[idx % aspectRatios.length]} shadow-md border border-zinc-200/50 dark:border-white/10 hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Photo image */}
                  <img 
                    src={item.src} 
                    alt={item.alt[lang]} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dark mask on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                  {/* Caption revealed on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-left z-10">
                    <span className="font-mono text-3xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <p className="font-display font-bold text-sm text-white leading-snug">
                      {item.alt[lang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 8. TESTIMONIALS SECTION */}
      <section 
        id="testimonials" 
        className="py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold text-gold-500 tracking-widest uppercase">
              CLIENT RELATIONSHIPS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white leading-tight mt-1 mb-3">
              {t.testimonialsTitle}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.testimonialsSub}
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialsData.map((item) => (
              <div 
                key={item.id}
                className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-zinc-150 dark:border-white/10 hover:border-gold-500/50 shadow-md flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Stars Rating */}
                  <div className="flex gap-1 text-gold-500 mb-5">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>

                  {/* Quote Paragraph */}
                  <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{item.text[lang]}"
                  </p>
                </div>

                {/* Profile row */}
                <div className="flex items-center gap-3.5 border-t border-zinc-100 dark:border-white/10 pt-5">
                  <img 
                    src={item.avatarUrl} 
                    alt={item.name[lang]} 
                    className="w-11 h-11 rounded-full object-cover border border-zinc-200 dark:border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col text-left leading-tight">
                    <span className="font-display font-bold text-sm text-zinc-900 dark:text-white">
                      {item.name[lang]}
                    </span>
                    <span className="text-2xs text-zinc-400 font-medium mt-0.5">
                      {item.role[lang]}, <span className="text-gold-500">{item.company[lang]}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 9. FAQ ACCORDION SECTION */}
      <section 
        id="faq" 
        className="py-16 sm:py-24 bg-zinc-50 dark:bg-dark-card/30 border-y border-zinc-100 dark:border-white/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-mono text-xs font-bold text-gold-500 tracking-widest uppercase">
              SUPPORT INDEX
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-50 leading-tight mt-1 mb-3">
              {t.faqTitle}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              {t.faqSub}
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqsData.map((item) => {
              const isActive = faqActiveId === item.id;
              return (
                <div 
                  key={item.id}
                  className="bg-white dark:bg-dark-card border border-zinc-200/50 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:border-gold-500/30 transition-all duration-300"
                >
                  <button
                    onClick={() => setFaqActiveId(isActive ? null : item.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer"
                  >
                    <span>{item.question[lang]}</span>
                    <span className={`p-1.5 rounded-lg bg-zinc-50 dark:bg-dark-main border border-zinc-200/40 dark:border-white/10 text-zinc-500 shrink-0 ml-4 transition-transform duration-300 ${isActive ? 'rotate-180 text-gold-500' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-100 dark:border-white/10">
                          {item.answer[lang]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 10. BLOG SECTION */}
      <section 
        id="blog" 
        className="py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold text-gold-500 tracking-widest uppercase">
              SEO INSIGHTS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white leading-tight mt-1 mb-3">
              {t.blogTitle}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.blogSub}
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogsData.map((blog) => (
              <article 
                key={blog.id}
                className="bg-white dark:bg-dark-card border border-zinc-150 dark:border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:border-gold-500/50 transition-all duration-300 flex flex-col group"
              >
                {/* Photo frame */}
                <div className="h-48 sm:h-56 relative overflow-hidden shrink-0">
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title[lang]} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-gold-400 text-[10px] font-mono tracking-widest uppercase font-semibold px-2.5 py-1 rounded border border-gold-500/20 shadow-md">
                    {blog.date}
                  </div>
                </div>

                {/* Text area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-900 dark:text-white mb-2 leading-snug group-hover:text-gold-500 transition-colors">
                      {blog.title[lang]}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {blog.summary[lang]}
                    </p>
                  </div>

                  <div className="border-t border-zinc-100 dark:border-white/10 pt-4">
                    <button
                      onClick={() => handleOpenBlog(blog)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-zinc-100 hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer"
                    >
                      <span>{t.readMore}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* 11. CONTACT SECTION & INTERACTIVE MAP */}
      <section 
        id="contact" 
        className="py-16 sm:py-24 bg-zinc-50 dark:bg-dark-card/30 border-t border-zinc-100 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-xs font-bold text-gold-500 tracking-widest uppercase">
              GET COMMITTED
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white leading-tight mt-1 mb-3">
              {t.contactTitle}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.contactSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            
            {/* Left Hand: Quick contacts, times, and form */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Form card */}
              <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-zinc-150 dark:border-white/10 shadow-xl">
                {!contactName && contactStatus === 'success' ? (
                  /* Form Success panel */
                  <div className="text-center py-6 flex flex-col items-center">
                    <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 animate-pulse" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2">Message Sent</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed max-w-xs mb-5">
                      {t.contactFormSuccess}
                    </p>
                    <button 
                      onClick={() => setContactStatus('idle')}
                      className="bg-gold-500 hover:bg-gold-600 text-zinc-950 text-xs font-bold py-2 px-6 rounded-lg tracking-wider uppercase transition-all"
                    >
                      New Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-zinc-700 dark:text-zinc-300 text-2xs font-bold uppercase tracking-wider mb-1">
                        {t.contactFormName} *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-zinc-50 dark:bg-dark-main border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                        placeholder="e.g. Sultan Raimov"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-zinc-700 dark:text-zinc-300 text-2xs font-bold uppercase tracking-wider mb-1">
                          {t.contactFormPhone} *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          className="w-full bg-zinc-50 dark:bg-dark-main border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                          placeholder="+996 (555) 000-000"
                        />
                      </div>
                      <div>
                        <label className="block text-zinc-700 dark:text-zinc-300 text-2xs font-bold uppercase tracking-wider mb-1">
                          {t.contactFormEmail}
                        </label>
                        <input 
                          type="email"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          className="w-full bg-zinc-50 dark:bg-dark-main border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                          placeholder="sultan@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-zinc-700 dark:text-zinc-300 text-2xs font-bold uppercase tracking-wider mb-1">
                        {t.contactFormMessage}
                      </label>
                      <textarea 
                        rows={3}
                        required
                        value={contactMsg}
                        onChange={(e) => setContactMsg(e.target.value)}
                        className="w-full bg-zinc-50 dark:bg-dark-main border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50 resize-none"
                        placeholder="Project details..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={contactStatus === 'sending'}
                      className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gold-700 text-zinc-950 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {contactStatus === 'sending' ? (
                        <span>{t.contactFormSending}</span>
                      ) : (
                        <span>{t.contactFormSubmit}</span>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Physical metadata (times, phone, whatsapp direct numbers) */}
              <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-zinc-150 dark:border-white/10 shadow-lg space-y-4">
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-500" />
                  <span>{t.contactHours}</span>
                </h4>
                <div className="space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <p>{t.contactHoursWeekdays}</p>
                  <p>{t.contactHoursSaturday}</p>
                  <p className="text-zinc-400 dark:text-zinc-500">{t.contactHoursSunday}: <span className="font-bold text-red-500">{t.contactHoursClosed}</span></p>
                </div>

                <div className="border-t border-zinc-100 dark:border-white/10 pt-4 space-y-3 text-xs">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold-500" />
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">+996 (555) 777-888</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gold-500" />
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">office@ramzan.kg</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hand: Stylized Blueprint Custom Interactive Map */}
            <div className="lg:col-span-7">
              <InteractiveMap lang={lang} />
            </div>

          </div>

        </div>
      </section>


      {/* 12. FOOTER CHANNELS */}
      <footer 
        id="applet-footer"
        className="bg-dark-main text-zinc-400 py-12 md:py-16 border-t border-zinc-900 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
            
            {/* Brand column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gold-500 rounded-lg flex items-center justify-center text-zinc-950 font-bold">
                  <Building2 className="w-4.5 h-4.5 text-zinc-950" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-base text-zinc-100 tracking-tight leading-none">
                    RAMZAN
                  </span>
                  <span className="font-mono text-[8px] tracking-widest text-gold-400 uppercase font-semibold">
                    CONSTRUCTION
                  </span>
                </div>
              </div>
              <p className="text-xs leading-relaxed max-w-sm text-zinc-500">
                {t.footerText}
              </p>
            </div>

            {/* Nav connections */}
            <div className="md:col-span-3 space-y-3.5">
              <h4 className="text-zinc-200 text-xs font-bold uppercase tracking-wider">Navigation</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button onClick={() => scrollToSection('home-hero')} className="text-left hover:text-gold-400 transition-colors cursor-pointer">Home</button>
                <button onClick={() => scrollToSection('about-us')} className="text-left hover:text-gold-400 transition-colors cursor-pointer">About</button>
                <button onClick={() => scrollToSection('services')} className="text-left hover:text-gold-400 transition-colors cursor-pointer">Services</button>
                <button onClick={() => scrollToSection('projects')} className="text-left hover:text-gold-400 transition-colors cursor-pointer">Projects</button>
                <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-gold-400 transition-colors cursor-pointer">Gallery</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-gold-400 transition-colors cursor-pointer">Reviews</button>
                <button onClick={() => scrollToSection('faq')} className="text-left hover:text-gold-400 transition-colors cursor-pointer">FAQ</button>
                <button onClick={() => scrollToSection('blog')} className="text-left hover:text-gold-400 transition-colors cursor-pointer">Blog</button>
              </div>
            </div>

            {/* Social channels */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-zinc-200 text-xs font-bold uppercase tracking-wider">Direct Social Channels</h4>
              <p className="text-xs text-zinc-500">For ongoing structural video feeds and design previews, follow our media handles.</p>
              
              <div className="flex gap-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-zinc-900 dark:bg-dark-card hover:bg-gold-500 hover:text-zinc-950 transition-all border border-zinc-800 dark:border-white/10 text-zinc-300">
                  <span className="text-2xs font-bold block">INSTAGRAM</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-zinc-900 dark:bg-dark-card hover:bg-gold-500 hover:text-zinc-950 transition-all border border-zinc-800 dark:border-white/10 text-zinc-300">
                  <span className="text-2xs font-bold block">FACEBOOK</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-zinc-900 dark:bg-dark-card hover:bg-gold-500 hover:text-zinc-950 transition-all border border-zinc-800 dark:border-white/10 text-zinc-300">
                  <span className="text-2xs font-bold block">YOUTUBE</span>
                </a>
              </div>
            </div>

          </div>

          {/* Sub footer links */}
          <div className="border-t border-zinc-900 dark:border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
            <div>
              &copy; {new Date().getFullYear()} Ramzan Construction. {t.allRightsReserved}
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setPrivacyModalOpen(true)}
                className="hover:text-gold-400 transition-colors cursor-pointer hover:underline"
              >
                {t.privacyPolicy}
              </button>
              <span>|</span>
              <button 
                onClick={() => setTermsModalOpen(true)}
                className="hover:text-gold-400 transition-colors cursor-pointer hover:underline"
              >
                {t.termsConditions}
              </button>
            </div>
          </div>

        </div>
      </footer>


      {/* 13. FLOATING COMPLIANCES AND UTILITY FLUIDS */}
      
      {/* Floating WhatsApp Quick link button */}
      <a 
        href={`https://wa.me/996555777888?text=${encodeURIComponent(lang === 'en' ? "Hello! I am reviewing the Ramzan Construction website and would like a quote." : lang === 'ky' ? "Саламатсызбы! Рамзан Констракшн боюнча маалымат алгым келет." : "Здравствуйте! Я бы хотел получить оценку стоимости проекта от Ramzan Construction.")}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 p-4 rounded-full bg-emerald-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center hover:bg-emerald-600 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-sans text-xs font-bold uppercase tracking-wider group-hover:ml-2 whitespace-nowrap">
          WHATSAPP CHAT
        </span>
      </a>

      {/* Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 z-30 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-900 text-gold-400 backdrop-blur-md shadow-2xl border border-zinc-800 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {!cookieConsent && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-zinc-900 text-white border-t border-zinc-800 shadow-2xl"
          >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-zinc-400 text-2xs md:text-xs leading-relaxed text-center md:text-left max-w-2xl">
                {t.cookieText}
              </p>
              <div className="flex gap-2.5 shrink-0">
                <button 
                  onClick={() => handleCookie(false)}
                  className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 text-2xs font-bold uppercase tracking-wider border border-zinc-800 hover:bg-zinc-800/50 transition-all cursor-pointer"
                >
                  {t.cookieDecline}
                </button>
                <button 
                  onClick={() => handleCookie(true)}
                  className="px-4.5 py-1.5 rounded-lg bg-gold-500 text-zinc-950 hover:bg-gold-600 text-2xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {t.cookieAccept}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 14. MODAL INSTANCES AND LIGHTBOXES */}

      {/* Estimations Quote modal */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
        lang={lang} 
      />

      {/* Legal Privacy Policy Document */}
      <DocumentModal 
        isOpen={privacyModalOpen} 
        onClose={() => setPrivacyModalOpen(false)} 
        title={t.privacyPolicy} 
        lang={lang} 
        type="privacy" 
      />

      {/* Legal Terms & Conditions Document */}
      <DocumentModal 
        isOpen={termsModalOpen} 
        onClose={() => setTermsModalOpen(false)} 
        title={t.termsConditions} 
        lang={lang} 
        type="terms" 
      />

      {/* Gallery Lightbox */}
      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        items={galleryData} 
        currentIndex={lightboxIndex} 
        setCurrentIndex={setLightboxIndex} 
        lang={lang} 
      />

      {/* Blog Article Reader Modal */}
      <AnimatePresence>
        {blogModalOpen && selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBlogModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              <button 
                onClick={() => setBlogModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer bg-black/50 p-1.5 rounded-full z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Photo header */}
              <div className="h-48 sm:h-64 w-full relative">
                <img 
                  src={selectedBlog.imageUrl} 
                  alt={selectedBlog.title[lang]} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="font-mono text-3xs font-bold text-gold-400 uppercase tracking-widest block mb-1">{selectedBlog.date}</span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-tight">
                    {selectedBlog.title[lang]}
                  </h3>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                  {selectedBlog.content[lang]}
                </p>

                <div className="border-t border-zinc-150 dark:border-zinc-850 pt-5 mt-6 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-2xs text-zinc-400">
                    <Zap className="w-3.5 h-3.5 text-gold-500" />
                    <span>Ramzan Civil Engineering Team</span>
                  </div>
                  <button 
                    onClick={() => setBlogModalOpen(false)}
                    className="bg-zinc-900 hover:bg-zinc-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-zinc-950 text-xs font-bold uppercase tracking-wider py-2.5 px-6 rounded-xl transition-all"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
