import { useEffect, useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldAlert, Award, FileText } from 'lucide-react';
import { translations, Language, servicesData } from '../types';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuoteModalProps extends BaseModalProps {
  lang: Language;
}

export function QuoteModal({ isOpen, onClose, lang }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium assessment analysis
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear inputs
      setName('');
      setPhone('');
      setEmail('');
      setService('');
      setMessage('');
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg bg-white dark:bg-dark-card border border-zinc-200/50 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Top Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-gold-500/10 text-gold-500 text-2xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Premium Architecture</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white">
                    {t.quoteTitle}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1 leading-relaxed">
                    {t.quoteSub}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-zinc-700 dark:text-zinc-300 text-xs font-semibold mb-1">
                      {t.contactFormName} *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-dark-main border border-zinc-200/50 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                      placeholder="e.g. Sultan Raimov"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-700 dark:text-zinc-300 text-xs font-semibold mb-1">
                        {t.contactFormPhone} *
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-zinc-50 dark:bg-dark-main border border-zinc-200/50 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                        placeholder="+996 (555) 000-000"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-700 dark:text-zinc-300 text-xs font-semibold mb-1">
                        {t.contactFormEmail}
                      </label>
                      <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-50 dark:bg-dark-main border border-zinc-200/50 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                        placeholder="sultan@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-700 dark:text-zinc-300 text-xs font-semibold mb-1">
                      {t.contactFormService} *
                    </label>
                    <select 
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-dark-main border border-zinc-200/50 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50 cursor-pointer"
                    >
                      <option value="">-- {t.contactFormService} --</option>
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title[lang]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-700 dark:text-zinc-300 text-xs font-semibold mb-1">
                      {t.contactFormMessage}
                    </label>
                    <textarea 
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-dark-main border border-zinc-200/50 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-gold-500/50 resize-none"
                      placeholder="e.g. Need high-end foundations on a mountain slope..."
                    />
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button 
                    type="button" 
                    onClick={onClose}
                    className="flex-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/10 dark:border dark:border-white/10 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-750 text-white dark:text-zinc-950 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white dark:text-zinc-950" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{t.contactFormSending}</span>
                      </>
                    ) : (
                      <span>{t.contactFormSubmit}</span>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success Screen */
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 border border-gold-500/30 mb-5 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-3">
                  Inquiry Registered
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed max-w-sm mb-6">
                  {t.contactFormSuccess}
                </p>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="bg-gold-500 hover:bg-gold-600 text-white dark:text-zinc-950 text-xs font-bold uppercase tracking-wider py-3 px-8 rounded-xl transition-all shadow-md"
                >
                  Close Panel
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface DocModalProps extends BaseModalProps {
  title: string;
  lang: Language;
  type: 'privacy' | 'terms';
}

export function DocumentModal({ isOpen, onClose, title, lang, type }: DocModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const privacyContent = {
    en: [
      { h: "1. Information Collection", p: "We collect names, emails, and phone numbers exclusively volunteered through our contact forms to deliver construction estimates." },
      { h: "2. Data Usage", p: "All details remain strictly confidential and are solely utilized to prepare architectural and physical cost calculations. We do not sell or lease client information to third-party marketing brokers." },
      { h: "3. Structural Security", p: "We deploy standard digital encryption to safeguard the records and structural blueprints provided by our partners." }
    ],
    ky: [
      { h: "1. Маалымат чогултуу", p: "Биз курулуш сметасын даярдоо үчүн байланыш формалары аркылуу өз каалооңуз менен берилген аттарды, электрондук даректерди жана телефон номерлерин гана чогултабыз." },
      { h: "2. Маалыматты колдонуу", p: "Бардык чоо-жайлар толугу менен купуя сакталат жана курулуш баасын эсептөө үчүн гана колдонулат. Биз маалыматтарды үчүнчү жактарга сатпайбыз." },
      { h: "3. Маалымат коопсуздугу", p: "Кардарларыбыз берген архитектуралык чиймелерди жана жеке маалыматтарды коргоо үчүн заманбап санариптик шифрлөөлөрдү колдонобуз." }
    ],
    ru: [
      { h: "1. Сбор информации", p: "Мы собираем имена, адреса электронной почты и номера телефонов, предоставленные добровольно через форму связи, исключительно для составления смет." },
      { h: "2. Использование данных", p: "Все данные строго конфиденциальны и используются исключительно для оценки стоимости работ. Мы не продаем и не передаем ваши контакты сторонним маркетологам." },
      { h: "3. Безопасность данных", p: "Мы применяем надежное шифрование для защиты ваших личных данных и загруженных архитектурных планов." }
    ]
  };

  const termsContent = {
    en: [
      { h: "1. Architectural Scopes", p: "All estimations provided online or physically represent non-binding general forecasts based on standard material costs in Bishkek." },
      { h: "2. Licensing and Compliance", p: "Ramzan Construction operates in full adherence to State Construction Administration (Gosstroy) licensing of Grade-I parameters." },
      { h: "3. Copyright of Blueprints", p: "Custom structural models, drafts, and architectural solutions designed by our staff remain under the copyright ownership of Ramzan Construction." }
    ],
    ky: [
      { h: "1. Архитектуралык баалоо", p: "Биз сунуштаган бардык баалоолор жана эсептөөлөр Бишкек шаарындагы курулуш материалдарынын орточо баасына негизделген жана акыркы келишим болуп эсептелбейт." },
      { h: "2. Лицензия жана мыйзамдуулук", p: "«Рамзан Констракшн» Мамлекеттик курулуш комитетинин (Мамкурулуш) 1-категориядагы лицензияларынын негизинде толугу менен мыйзамдуу иш алып барат." },
      { h: "3. Автордук укук", p: "Биздин адистер тарабынан даярдалган бардык дизайн чиймелери, моделдер жана архитектуралык чечимдер «Рамзан Констракшн» компаниясынын автордук менчиги болуп саналат." }
    ],
    ru: [
      { h: "1. Оценка и сметы", p: "Все расчеты, предоставленные онлайн, являются предварительными оценками стоимости, основанными на рыночных ценах материалов в г. Бишкек." },
      { h: "2. Лицензирование и стандарты", p: "Ramzan Construction ведет строительную деятельность в строгом соответствии с лицензиями Государственного агентства архитектуры и строительства (Госстрой)." },
      { h: "3. Авторские права", p: "Все чертежи, 3D-модели и уникальные архитектурные решения, разработанные нашими специалистами, защищены законом об авторском праве компании." }
    ]
  };

  const activeContent = type === 'privacy' ? privacyContent[lang] : termsContent[lang];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg bg-white dark:bg-dark-card border border-zinc-200/50 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center text-gold-500 border border-gold-500/20">
                {type === 'privacy' ? <ShieldAlert className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white">
                {title}
              </h3>
            </div>

            <div className="space-y-5 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
              {activeContent.map((section, idx) => (
                <div key={idx} className="border-b border-zinc-100 dark:border-white/10 pb-4 last:border-0 last:pb-0">
                  <h4 className="font-display font-bold text-sm text-zinc-800 dark:text-zinc-200 mb-1.5">
                    {section.h}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                    {section.p}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-150 dark:border-white/10 flex justify-end">
              <button 
                onClick={onClose}
                className="bg-zinc-900 hover:bg-zinc-800 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-zinc-950 text-xs font-bold uppercase tracking-wider py-2.5 px-6 rounded-xl transition-all"
              >
                Close Document
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
