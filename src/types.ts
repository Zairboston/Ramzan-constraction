import { 
  HardHat, 
  Home, 
  Maximize, 
  Building2, 
  Utensils, 
  Bath, 
  Ruler, 
  ChevronUp, 
  Layers, 
  Paintbrush, 
  PenTool, 
  Grid3X3, 
  Droplets, 
  Zap, 
  Leaf,
  Shield,
  Award,
  Clock,
  ThumbsUp
} from 'lucide-react';

export type Language = 'en' | 'ky' | 'ru';

export interface Translation {
  navHome: string;
  navAbout: string;
  navServices: string;
  navProjects: string;
  navGallery: string;
  navTestimonials: string;
  navContact: string;
  navFaq: string;
  navBlog: string;
  
  heroSlogan: string;
  heroSubSlogan: string;
  heroCta: string;
  
  statsYears: string;
  statsProjects: string;
  statsClients: string;
  statsTeam: string;
  
  whyChooseUsTitle: string;
  whyChooseUsSub: string;
  whyCards: {
    title: string;
    description: string;
  }[];
  
  servicesTitle: string;
  servicesSub: string;
  servicesCta: string;
  
  projectsTitle: string;
  projectsSub: string;
  filterAll: string;
  filterResidential: string;
  filterCommercial: string;
  filterRenovation: string;
  beforeLabel: string;
  afterLabel: string;
  viewDetails: string;
  projectCompleted: string;
  projectLocation: string;
  
  galleryTitle: string;
  gallerySub: string;
  
  testimonialsTitle: string;
  testimonialsSub: string;
  
  faqTitle: string;
  faqSub: string;
  
  blogTitle: string;
  blogSub: string;
  readMore: string;
  
  contactTitle: string;
  contactSub: string;
  contactFormName: string;
  contactFormPhone: string;
  contactFormEmail: string;
  contactFormService: string;
  contactFormMessage: string;
  contactFormSubmit: string;
  contactFormSending: string;
  contactFormSuccess: string;
  contactHours: string;
  contactHoursWeekdays: string;
  contactHoursSaturday: string;
  contactHoursSunday: string;
  contactHoursClosed: string;
  
  cookieText: string;
  cookieAccept: string;
  cookieDecline: string;
  
  footerText: string;
  privacyPolicy: string;
  termsConditions: string;
  allRightsReserved: string;
  
  // Quote dialog
  quoteTitle: string;
  quoteSub: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navProjects: "Projects",
    navGallery: "Gallery",
    navTestimonials: "Testimonials",
    navContact: "Contact",
    navFaq: "FAQ",
    navBlog: "Blog",
    
    heroSlogan: "Building Trust. Creating Quality.",
    heroSubSlogan: "Ramzan Construction delivers premium architectural design, durable builds, and pristine renovations. We turn your ambitious structural visions into luxurious real estate.",
    heroCta: "Request a Free Quote",
    
    statsYears: "Years of Experience",
    statsProjects: "Projects Completed",
    statsClients: "Happy Clients",
    statsTeam: "Professional Craftsmen",
    
    whyChooseUsTitle: "Why Choose Us",
    whyChooseUsSub: "We combine engineering precision, exceptional craftsmanship, and absolute transparency to deliver projects of unparalleled quality.",
    whyCards: [
      {
        title: "Uncompromising Quality",
        description: "We use premium materials and state-of-the-art techniques to guarantee structures that withstand the test of time."
      },
      {
        title: "Elite Team",
        description: "Our certified engineers, talented architects, and master builders bring decades of combined construction expertise."
      },
      {
        title: "On-Time & On-Budget",
        description: "Rigorous project management and transparent tracking ensure we hand over the keys exactly when promised without hidden costs."
      },
      {
        title: "Workmanship Guarantee",
        description: "Every brick laid and nail driven is backed by our comprehensive structural and cosmetic warranty for your peace of mind."
      }
    ],
    
    servicesTitle: "Our Premium Services",
    servicesSub: "From conceptual foundations to bespoke finishings, we offer a complete suite of expert construction and renovation services.",
    servicesCta: "Discuss Your Project",
    
    projectsTitle: "Our Featured Projects",
    projectsSub: "Explore some of our recently completed structural works. Slide to see interactive Before & After results.",
    filterAll: "All Projects",
    filterResidential: "Residential",
    filterCommercial: "Commercial",
    filterRenovation: "Renovations",
    beforeLabel: "Before",
    afterLabel: "After",
    viewDetails: "View Project",
    projectCompleted: "Completed",
    projectLocation: "Location",
    
    galleryTitle: "Our Visual Gallery",
    gallerySub: "Immerse yourself in our craftsmanship. Click any image to view details in the premium lightbox.",
    
    testimonialsTitle: "What Our Clients Say",
    testimonialsSub: "We pride ourselves on our client relationships and exceptional results. Here is what our premium partners say about us.",
    
    faqTitle: "Frequently Asked Questions",
    faqSub: "Find fast answers regarding our workflow, guarantees, licensing, and project planning.",
    
    blogTitle: "Construction Insights & Blog",
    blogSub: "Discover expert tips on home renovations, sustainable construction practices, and architectural trends.",
    readMore: "Read Full Article",
    
    contactTitle: "Get in Touch",
    contactSub: "Ready to discuss your dream project? Reach out to our specialist team for a consultation and a tailored estimate.",
    contactFormName: "Full Name",
    contactFormPhone: "Phone Number",
    contactFormEmail: "Email Address",
    contactFormService: "Select Service",
    contactFormMessage: "Project Details / Message",
    contactFormSubmit: "Send Inquiry",
    contactFormSending: "Submitting inquiry...",
    contactFormSuccess: "Thank you! Your inquiry has been sent. Our team will contact you within 24 hours.",
    contactHours: "Business Hours",
    contactHoursWeekdays: "Monday - Friday: 08:00 AM - 06:00 PM",
    contactHoursSaturday: "Saturday: 09:00 AM - 04:00 PM",
    contactHoursSunday: "Sunday",
    contactHoursClosed: "Closed",
    
    cookieText: "We use cookies to optimize your browsing experience on our premium platform. By continuing to navigate, you agree to our policies.",
    cookieAccept: "Accept All",
    cookieDecline: "Decline Optional",
    
    footerText: "Ramzan Construction is a leading full-service general contractor dedicated to superior craftsmanship, engineering integrity, and customer satisfaction.",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    allRightsReserved: "All rights reserved.",
    
    quoteTitle: "Request a Premium Quote",
    quoteSub: "Provide your project details below. Our senior estimator will analyze your request and provide a detailed structural projection."
  },
  ky: {
    navHome: "Башкы бет",
    navAbout: "Биз жөнүндө",
    navServices: "Кызматтар",
    navProjects: "Долбоорлор",
    navGallery: "Галерея",
    navTestimonials: "Пикирлер",
    navContact: "Байланыш",
    navFaq: "Суроо-Жооп",
    navBlog: "Блог",
    
    heroSlogan: "Ишенимди Курабыз. Сапатты Түзөбүз.",
    heroSubSlogan: "«Рамзан Констракшн» премиум-класстагы архитектуралык долбоорлоону, туруктуу курулуштарды жана жогорку деңгээлдеги оңдоп-түзөөлөрдү сунуштайт. Биз сиздин эң дымактуу курулуш кыялдарыңызды ишке ашырабыз.",
    heroCta: "Акысыз баалоону суроо",
    
    statsYears: "Жылдык тажрыйба",
    statsProjects: "Бүткөрүлгөн долбоорлор",
    statsClients: "Ыраазы болгон кардарлар",
    statsTeam: "Профессионал адистер",
    
    whyChooseUsTitle: "Эмне үчүн бизди тандоо керек?",
    whyChooseUsSub: "Биз теңдешсиз курулуштарды сунуштоо үчүн инженердик тактыкты, өзгөчө чеберчиликти жана толук ачык-айкындуулукту айкалыштырабыз.",
    whyCards: [
      {
        title: "Кынтыксыз сапат",
        description: "Биз убакыттын сыноосуна туруштук бере турган курулуштарга кепилдик берүү үчүн премиум материалдарды жана заманбап ыкмаларды колдонобуз."
      },
      {
        title: "Элиталык команда",
        description: "Биздин тастыкталган инженерлер, таланттуу архитекторлор жана тажрыйбалуу куруучулар курулуш тармагында чоң тажрыйбага ээ."
      },
      {
        title: "Өз убагында жана бюджетке ылайык",
        description: "Долбоорду так башкаруу жана ачык-айкындуулук бизге жашыруун чыгымдарсыз, убада кылынган убакта ачкычтарды тапшырууга мүмкүнчүлүк берет."
      },
      {
        title: "Кепилденген чеберчилик",
        description: "Сиздин бейпилдигиңиз үчүн биз жасаган ар бир иш курулуштун сапаты жана кооздугу үчүн толук кепилдик менен коштолот."
      }
    ],
    
    servicesTitle: "Биздин Премиум Кызматтар",
    servicesSub: "Долбоордун баштапкы пайдубалынан тартып өзгөчө акыркы жасалгаларына чейин курулуш жана оңдоп-түзөө боюнча толук кызматтарды сунуштайбыз.",
    servicesCta: "Долбоорду талкуулоо",
    
    projectsTitle: "Биздин тандалган долбоорлор",
    projectsSub: "Биз жакында бүтүргөн курулуш иштери менен таанышыңыз. Интерактивдүү 'Мурун жана Кийин' натыйжаларын көрүү үчүн сыдырыңыз.",
    filterAll: "Бардык долбоорлор",
    filterResidential: "Турак жай",
    filterCommercial: "Коммерциялык",
    filterRenovation: "Оңдоп-түзөө",
    beforeLabel: "Мурун",
    afterLabel: "Кийин",
    viewDetails: "Долбоорду көрүү",
    projectCompleted: "Бүткөрүлгөн",
    projectLocation: "Дареги",
    
    galleryTitle: "Биздин курулуш галереясы",
    gallerySub: "Биздин жасаган иштерибизден ырахат алыңыз. Ар бир сүрөттү чоңойтуп көрүү үчүн аны басыңыз.",
    
    testimonialsTitle: "Кардарлардын пикирлери",
    testimonialsSub: "Биз кардарларыбыз менен болгон мамилеге жана сонун натыйжаларга сыймыктанабыз. Биздин өнөктөштөрдүн пикирлери төмөндө.",
    
    faqTitle: "Көп берилүүчү суроолор",
    faqSub: "Биздин иш процессибиз, кепилдиктер, лицензиялар жана долбоорду пландаштыруу жөнүндө тез жоопторду табыңыз.",
    
    blogTitle: "Курулуш сырлары жана блог",
    blogSub: "Үйдү оңдоо, туруктуу курулуш практикасы жана архитектуралык тенденциялар боюнча адистердин кеңештерин алыңыз.",
    readMore: "Макаланы толук окуу",
    
    contactTitle: "Биз менен байланышыңыз",
    contactSub: "Курулуш долбооруңузду талкуулоого даярсызбы? Кеңеш алуу жана жекече баалоо үчүн биздин адистерге кайрылыңыз.",
    contactFormName: "Толук аты-жөнүңүз",
    contactFormPhone: "Телефон номериңиз",
    contactFormEmail: "Электрондук дарек",
    contactFormService: "Кызматты тандоо",
    contactFormMessage: "Долбоордун чоо-жайы / Билдирүү",
    contactFormSubmit: "Суроо-талап жөнөтүү",
    contactFormSending: "Жөнөтүлүүдө...",
    contactFormSuccess: "Рахмат! Сиздин суроо-талабыңыз ийгиликтүү жөнөтүлдү. Командабыз 24 сааттын ичинде сиз менен байланышат.",
    contactHours: "Иш убактысы",
    contactHoursWeekdays: "Дүйшөмбү - Жума: 08:00 - 18:00",
    contactHoursSaturday: "Ишемби: 09:00 - 16:00",
    contactHoursSunday: "Жекшемби",
    contactHoursClosed: "Жабык",
    
    cookieText: "Биздин сайтты колдонуу тажрыйбаңызды жакшыртуу үчүн кукилерди колдонобуз. Кабыл алуу менен сиз биздин саясатка макул болосуз.",
    cookieAccept: "Баарын кабыл алуу",
    cookieDecline: "Баш тартуу",
    
    footerText: "«Рамзан Констракшн» — мыкты чеберчиликке, инженердик бүтүндүккө жана кардарлардын канааттануусуна умтулган алдыңкы курулуш компаниясы.",
    privacyPolicy: "Купуялуулук саясаты",
    termsConditions: "Колдонуу шарттары",
    allRightsReserved: "Бардык укуктар корголгон.",
    
    quoteTitle: "Премиум баалоону суроо",
    quoteSub: "Төмөндө долбоордун чоо-жайын калтырыңыз. Биздин улук адис маалыматты талдап, сизге толук инженердик эсептеп берүүнү сунуштайт."
  },
  ru: {
    navHome: "Главная",
    navAbout: "О нас",
    navServices: "Услуги",
    navProjects: "Проекты",
    navGallery: "Галерея",
    navTestimonials: "Отзывы",
    navContact: "Контакты",
    navFaq: "FAQ",
    navBlog: "Блог",
    
    heroSlogan: "Строим доверие. Создаем качество.",
    heroSubSlogan: "Ramzan Construction предоставляет услуги премиального архитектурного проектирования, надежного строительства и первоклассного ремонта. Мы воплощаем ваши самые амбициозные строительные идеи.",
    heroCta: "Запросить расчет стоимости",
    
    statsYears: "Лет опыта работы",
    statsProjects: "Выполненных проектов",
    statsClients: "Довольных клиентов",
    statsTeam: "Профессиональных мастеров",
    
    whyChooseUsTitle: "Почему выбирают нас",
    whyChooseUsSub: "Мы сочетаем инженерную точность, выдающееся мастерство и абсолютную прозрачность, чтобы реализовывать проекты непревзойденного качества.",
    whyCards: [
      {
        title: "Бескомпромиссное качество",
        description: "Мы используем материалы премиум-класса и передовые технологии, чтобы гарантировать долговечность всех возводимых конструкций."
      },
      {
        title: "Элитная команда",
        description: "Наши сертифицированные инженеры, талантливые архитекторы и профессиональные строители обладают многолетним опытом работы."
      },
      {
        title: "Точно в срок и в рамках бюджета",
        description: "Строгое управление проектами гарантирует сдачу объекта точно в обещанный срок без каких-либо скрытых наценок."
      },
      {
        title: "Гарантия на работу",
        description: "Для вашего душевного спокойствия на каждую выполненную работу предоставляется наша долгосрочная комплексная гарантия."
      }
    ],
    
    servicesTitle: "Наши премиальные услуги",
    servicesSub: "От заливки фундамента до эксклюзивной чистовой отделки — мы предоставляем полный спектр услуг по строительству и ремонту.",
    servicesCta: "Обсудить проект",
    
    projectsTitle: "Наши избранные проекты",
    projectsSub: "Познакомьтесь с нашими недавними работами. Проведите слайдер, чтобы увидеть интерактивное сравнение «До и После».",
    filterAll: "Все проекты",
    filterResidential: "Жилые",
    filterCommercial: "Коммерческие",
    filterRenovation: "Ремонт",
    beforeLabel: "До",
    afterLabel: "После",
    viewDetails: "Смотреть проект",
    projectCompleted: "Завершен",
    projectLocation: "Местоположение",
    
    galleryTitle: "Наша визуальная галерея",
    gallerySub: "Погрузитесь в эстетику нашего мастерства. Нажмите на любое изображение для просмотра в полноэкранной лайтбокс-галерее.",
    
    testimonialsTitle: "Отзывы наших клиентов",
    testimonialsSub: "Мы гордимся долгосрочными отношениями с нашими клиентами и превосходными результатами. Вот что говорят наши премиум-партнеры.",
    
    faqTitle: "Часто задаваемые вопросы",
    faqSub: "Найдите быстрые ответы по поводу нашего рабочего процесса, гарантий, лицензий и планирования проектов.",
    
    blogTitle: "Строительный блог",
    blogSub: "Полезные советы по ремонту дома, экологически чистому строительству и современным архитектурным трендам.",
    readMore: "Читать статью",
    
    contactTitle: "Связаться с нами",
    contactSub: "Готовы обсудить проект вашей мечты? Свяжитесь с нашими специалистами для консультации и составления сметы.",
    contactFormName: "Полное имя",
    contactFormPhone: "Номер телефона",
    contactFormEmail: "Электронная почта",
    contactFormService: "Выберите услугу",
    contactFormMessage: "Детали проекта / Сообщение",
    contactFormSubmit: "Отправить запрос",
    contactFormSending: "Отправка запроса...",
    contactFormSuccess: "Спасибо! Ваш запрос успешно отправлен. Наша команда свяжется с вами в течение 24 часов.",
    contactHours: "Часы работы",
    contactHoursWeekdays: "Понедельник - Пятница: 08:00 - 18:00",
    contactHoursSaturday: "Суббота: 09:00 - 16:00",
    contactHoursSunday: "Воскресенье",
    contactHoursClosed: "Выходной",
    
    cookieText: "Мы используем файлы cookie для оптимизации вашего взаимодействия с нашей премиум-платформой. Продолжая работу, вы соглашаетесь с нашей политикой.",
    cookieAccept: "Принять всё",
    cookieDecline: "Отклонить необязательные",
    
    footerText: "Ramzan Construction — ведущий генеральный подрядчик полного цикла, стремящийся к исключительному мастерству, инженерной честности и полному удовлетворению клиентов.",
    privacyPolicy: "Политика конфиденциальности",
    termsConditions: "Условия использования",
    allRightsReserved: "Все права защищены.",
    
    quoteTitle: "Заказать премиум расчет",
    quoteSub: "Предоставьте детали вашего проекта ниже. Наш ведущий сметчик проанализирует информацию и предоставит детальный структурный расчет."
  }
};

export interface ServiceItem {
  id: string;
  icon: any;
  title: Record<Language, string>;
  desc: Record<Language, string>;
  category: 'construction' | 'renovation' | 'specialized';
}

export const servicesData: ServiceItem[] = [
  {
    id: "general-construction",
    icon: HardHat,
    category: "construction",
    title: {
      en: "General Construction",
      ky: "Жалпы курулуш",
      ru: "Общее строительство"
    },
    desc: {
      en: "Full-scale building solutions from initial groundwork and concrete structures to structural steel installations.",
      ky: "Баштапкы жер жумуштарынан жана бетон конструкцияларынан тартып структуралык болотту орнотууга чейинки курулуш чечимдери.",
      ru: "Полномасштабные строительные решения от первоначальных земляных и бетонных работ до монтажа несущих металлоконструкций."
    }
  },
  {
    id: "house-building",
    icon: Home,
    category: "construction",
    title: {
      en: "House Building",
      ky: "Үй куруу",
      ru: "Строительство домов"
    },
    desc: {
      en: "Bespoke residential estates designed by elite architects and crafted perfectly to meet your unique family needs.",
      ky: "Элиталык архитекторлор тарабынан долбоорлонгон жана үй-бүлөңүздүн уникалдуу муктаждыктарын канааттандыруу үчүн курулган үйлөр.",
      ru: "Индивидуальные жилые дома, спроектированные элитными архитекторами и построенные в соответствии с пожеланиями вашей семьи."
    }
  },
  {
    id: "home-extensions",
    icon: Maximize,
    category: "construction",
    title: {
      en: "Home Extensions",
      ky: "Үйдү кеңейтүү",
      ru: "Пристройки к дому"
    },
    desc: {
      en: "Enhance your real estate footprint seamlessly with premium annexes, sunrooms, and multi-story home expansions.",
      ky: "Премиум-класстагы тиркемелер, күн бөлмөлөрү жана көп кабаттуу үйлөрдү кеңейтүү аркылуу кыймылсыз мүлкүңүздү чоңойтуңуз.",
      ru: "Увеличьте площадь вашей недвижимости с помощью премиальных пристроек, веранд и многоэтажных расширений дома."
    }
  },
  {
    id: "loft-conversions",
    icon: Building2,
    category: "construction",
    title: {
      en: "Loft Conversions",
      ky: "Мансард куруу",
      ru: "Переоборудование чердаков"
    },
    desc: {
      en: "Transform underutilized attic areas into luxurious bedrooms, sophisticated home offices, or modern entertainment spaces.",
      ky: "Пайдаланылбаган чатыр бөлмөлөрүн кооз уктоочу бөлмөлөргө, заманбап кеңсе бөлмөлөрүнө же оюн аянтчаларына айландырыңыз.",
      ru: "Превратите неиспользуемые чердачные помещения в роскошные спальни, изысканные домашние кабинеты или современные зоны отдыха."
    }
  },
  {
    id: "kitchen-renovations",
    icon: Utensils,
    category: "renovation",
    title: {
      en: "Kitchen Renovations",
      ky: "Ашкана оңдоо",
      ru: "Ремонт кухни"
    },
    desc: {
      en: "High-end culinary sanctuaries featuring bespoke premium cabinetry, stone countertops, and state-of-the-art smart appliances.",
      ky: "Эксклюзивдүү шкафтар, таш устундар жана эң акыркы үлгүдөгү акылдуу шаймандар менен жабдылган премиум ашканалар.",
      ru: "Высококлассные кухни с индивидуальной премиальной мебелью, каменными столешницами и современной встроенной техникой."
    }
  },
  {
    id: "bathroom-renovations",
    icon: Bath,
    category: "renovation",
    title: {
      en: "Bathroom Renovations",
      ky: "Ванна бөлмөсүн оңдоо",
      ru: "Ремонт ванной"
    },
    desc: {
      en: "Spa-like bathroom conversions incorporating heated flooring, glass enclosures, marble tilings, and deluxe floating fixtures.",
      ky: "Жылытылган полдору, айнек тосмолору, мрамор плиткалары жана люкс жабдуулары бар спа-стилиндеги ванна бөлмөлөрү.",
      ru: "Ванные комнаты в стиле спа с подогревом полов, стеклянными душевыми кабинами, мраморной плиткой и подвесной сантехникой."
    }
  },
  {
    id: "carpentry-joinery",
    icon: Ruler,
    category: "specialized",
    title: {
      en: "Carpentry & Joinery",
      ky: "Жыгач устачылык",
      ru: "Плотницкие работы"
    },
    desc: {
      en: "Custom woodcraft including structural timber framing, bespoke hardwood staircases, premium moldings, and unique cabinetry.",
      ky: "Жыгачтан жасалган структуралык каркастар, жекече тепкичтер, премиум молдингдер жана уникалдуу эмеректер.",
      ru: "Индивидуальные деревянные работы, включая деревянные каркасы, лестницы из ценных пород дерева, премиальные молдинги."
    }
  },
  {
    id: "roofing",
    icon: ChevronUp,
    category: "construction",
    title: {
      en: "Roofing Services",
      ky: "Чатыр жумуштары",
      ru: "Кровельные работы"
    },
    desc: {
      en: "Superior slate, clay tiling, and flat roof installations engineered for perfect leak protection and energy efficiency.",
      ky: "Слайд, чопо плиткалары жана жалпак чатырларды орнотуу, суу өтпөө жана энергияны үнөмдөө үчүн мыкты иштелип чыккан.",
      ru: "Первоклассный монтаж сланцевой, черепичной и плоской кровли с надежной защитой от протечек и высокой энергоэффективностью."
    }
  },
  {
    id: "flooring",
    icon: Layers,
    category: "renovation",
    title: {
      en: "Premium Flooring",
      ky: "Пол төшөө",
      ru: "Укладка полов"
    },
    desc: {
      en: "Master installation of luxury hardwood, high-durability engineered timber, luxury vinyl tiles, and polished stone floors.",
      ky: "Люкс жыгачтарды, жогорку сапаттагы инженердик тактайларды жана жылмаланган таш полдорду кесипкөйлүк менен орнотуу.",
      ru: "Профессиональная укладка элитного паркета, высокопрочной инженерной доски, кварцвинила и полов из полированного камня."
    }
  },
  {
    id: "painting-decorating",
    icon: Paintbrush,
    category: "renovation",
    title: {
      en: "Painting & Decorating",
      ky: "Сырдоо жана жасалгалоо",
      ru: "Малярные работы"
    },
    desc: {
      en: "Flawless painting and luxury wall coverings executed with designer paints, Venetian plastering, and bespoke finishes.",
      ky: "Дизайнердик боёктор, венециялык шыбактар жана өзгөчө жасалгалоо менен кемчиликсиз сырдоо жана дубалды каптап кооздоо.",
      ru: "Безупречная покраска и премиальные настенные покрытия дизайнерскими красками, венецианской штукатуркой и эксклюзивной отделкой."
    }
  },
  {
    id: "plastering",
    icon: PenTool,
    category: "specialized",
    title: {
      en: "Expert Plastering",
      ky: "Шыбак жумуштары",
      ru: "Штукатурные работы"
    },
    desc: {
      en: "Ultra-smooth rendering, dry lining, and classic fibrous plaster molding to prepare pristine walls for painting.",
      ky: "Дубалдарды сырдоого даярдоо үчүн өтө жылмакай шыбоо, кургак каптоо жана классикалык гипс молдингдерин орнотуу.",
      ru: "Высококачественное выравнивание стен, монтаж гипсокартона и классическая лепка для подготовки поверхностей под покраску."
    }
  },
  {
    id: "tiling",
    icon: Grid3X3,
    category: "specialized",
    title: {
      en: "Deluxe Tiling",
      ky: "Плитка төшөө",
      ru: "Укладка плитки"
    },
    desc: {
      en: "Precision tiling using marble, granite, luxury ceramics, mosaics, and large-format porcelain slabs for floors and walls.",
      ky: "Мрамор, гранит, люкс керамика, мозаика жана чоң форматтагы керамогранит плиткаларын полго жана дубалга так жайгаштыруу.",
      ru: "Высокоточная укладка мрамора, гранита, мозаики и крупноформатного керамогранита на полы и стены."
    }
  },
  {
    id: "plumbing",
    icon: Droplets,
    category: "specialized",
    title: {
      en: "Advanced Plumbing",
      ky: "Сантехника жумуштары",
      ru: "Сантехнические работы"
    },
    desc: {
      en: "High-grade water supply layouts, advanced drainage networks, luxury fixture integrations, and underfloor heating engineering.",
      ky: "Сапаттуу суу өткөрүүчү схемалар, заманбап дренаждык тармактар, люкс сантехникаларды жана жылуу полдорду монтаждоо.",
      ru: "Монтаж водоснабжения и канализации, установка сантехники премиум-класса и проектирование систем водяного теплого пола."
    }
  },
  {
    id: "electrical",
    icon: Zap,
    category: "specialized",
    title: {
      en: "Electrical Engineering",
      ky: "Электр жумуштары",
      ru: "Электромонтаж"
    },
    desc: {
      en: "State-of-the-art electrical rewiring, smart home automation wiring, bespoke lighting layouts, and safety compliance audits.",
      ky: "Заманбап электр зымдарын тартуу, 'акылдуу үй' автоматташтыруу зымдары, кооз жарыктандыруу жана коопсуздук аудиттери.",
      ru: "Современная электропроводка, разводка систем «умного дома», дизайнерские сценарии освещения и аудит электробезопасности."
    }
  },
  {
    id: "landscaping",
    icon: Leaf,
    category: "specialized",
    title: {
      en: "Premium Landscaping",
      ky: "Ландшафт дизайны",
      ru: "Ландшафтный дизайн"
    },
    desc: {
      en: "Transform outdoor plots into architectural gardens, combining custom stone paving, luxury pools, and designer botanical gardens.",
      ky: "Сырткы аянттарды таш төшөө, люкс бассейндер жана дизайнердик ботаникалык бактар менен кооз бакчага айландыруу.",
      ru: "Превращение придомовой территории в роскошный сад с каменными дорожками, зонами отдыха и дизайнерским озеленением."
    }
  }
];

export interface ProjectItem {
  id: string;
  category: 'residential' | 'commercial' | 'renovation';
  title: Record<Language, string>;
  location: Record<Language, string>;
  year: string;
  description: Record<Language, string>;
  beforeImage: string;
  afterImage: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "royal-crest-villa",
    category: "residential",
    year: "2025",
    title: {
      en: "Royal Crest Villa",
      ky: "«Роял Крест» вилласы",
      ru: "Вилла Royal Crest"
    },
    location: {
      en: "Bishkek, Alamudun Valley",
      ky: "Бишкек, Аламүдүн капчыгайы",
      ru: "Бишкек, Аламудунское ущелье"
    },
    description: {
      en: "A state-of-the-art modern villa featuring black basalt brick, white monolithic slabs, and floor-to-ceiling panoramic glass facing the mountains.",
      ky: "Кара базальт кыштан, ак монолиттүү плиталардан курулган жана тоолорду караган панорамалык айнектери бар заманбап залкар вилла.",
      ru: "Современная вилла из черного базальтового кирпича, белых монолитных плит и панорамным остеклением от пола до потолка с видом на горы."
    },
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop", // Construction / empty plot
    afterImage: "/src/assets/images/project_modern_house_1782770532762.jpg" // Our beautiful generated image
  },
  {
    id: "premium-penthouse-renovation",
    category: "renovation",
    year: "2026",
    title: {
      en: "Luxury Penthouse Renovation",
      ky: "Люкс пентхаус оңдоп-түзөөсү",
      ru: "Ремонт люкс-пентхауса"
    },
    location: {
      en: "Bishkek, Erkindik Boulevard",
      ky: "Бишкек, Эркиндик бульвары",
      ru: "Бишкек, Бульвар Эркинтик"
    },
    description: {
      en: "Bespoke renovation of a 250m² penthouse. Added automated Venetian plaster, custom underfloor water heating, and deluxe bookmatched marble tiling.",
      ky: "250м² аянттагы пентхаусту толук жаңылоо. Венециялык шыбактар, автоматташтырылган суу жылуулугу жана мрамор плиткалары орнотулган.",
      ru: "Эксклюзивный ремонт пентхауса площадью 250м². Нанесена автоматизированная венецианская штукатурка, устроен водяной теплый пол."
    },
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop", // Concrete interior
    afterImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" // Stunning clean interior
  },
  {
    id: "golden-gate-office",
    category: "commercial",
    year: "2024",
    title: {
      en: "Golden Gate Business Center",
      ky: "«Голден Гейт» бизнес борбору",
      ru: "Бизнес-центр Golden Gate"
    },
    location: {
      en: "Bishkek, Chuy Avenue",
      ky: "Бишкек, Чүй проспектиси",
      ru: "Бишкек, Проспект Чуй"
    },
    description: {
      en: "Structural contracting and curtain walling for an elegant commercial plaza with architectural gold and black aluminum profile systems.",
      ky: "Алтын жана кара түстөгү алюминий профилдери бар сонун коммерциялык борбордун каркасын жана фасадын куруу.",
      ru: "Возведение каркаса и фасадное остекление для элегантного коммерческого центра с золотыми и черными алюминиевыми профилями."
    },
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop", // Scaffold structure
    afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" // Stunning corporate glass tower
  }
];

export interface GalleryItem {
  id: string;
  src: string;
  alt: Record<Language, string>;
  category: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: { en: "Luxury Residential Front View", ky: "Люкс турак жайдын алдыңкы көрүнүшү", ru: "Вид на фасад роскошного дома" },
    category: "Residential"
  },
  {
    id: "gal-2",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    alt: { en: "Bespoke Modern Living Room Design", ky: "Атайын жасалган заманбап конок бөлмөсү", ru: "Интерьер дизайнерской гостиной" },
    category: "Renovation"
  },
  {
    id: "gal-3",
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    alt: { en: "Heavy Concrete Foundations", ky: "Катуу бетон пайдубалы жумушу", ru: "Заливка прочного фундамента" },
    category: "Construction"
  },
  {
    id: "gal-4",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    alt: { en: "Elegant High-Ceiling Loft", ky: "Бийик шыптуу чатырча бөлмө", ru: "Мансардный этаж с высокими потолками" },
    category: "Renovation"
  },
  {
    id: "gal-5",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    alt: { en: "Architectural Curtain Wall Glass", ky: "Архитектуралык панорамалык айнек барактар", ru: "Витражное остекление коммерческого здания" },
    category: "Commercial"
  },
  {
    id: "gal-6",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    alt: { en: "Luxury Bathroom Marble Fitment", ky: "Мрамордуу люкс ванна бөлмөсү", ru: "Ремонт ванной комнаты премиум-класса" },
    category: "Renovation"
  }
];

export interface TestimonialItem {
  id: string;
  name: Record<Language, string>;
  role: Record<Language, string>;
  company: Record<Language, string>;
  stars: number;
  text: Record<Language, string>;
  avatarUrl: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: { en: "Askar Saparov", ky: "Аскар Сапаров", ru: "Аскар Сапаров" },
    role: { en: "Managing Director", ky: "Башкы директор", ru: "Управляющий директор" },
    company: { en: "Saparov Holdings", ky: "Сапаров Холдингс", ru: "Сапаров Холдингс" },
    stars: 5,
    text: {
      en: "Ramzan Construction built our Chuy Avenue headquarters. Their attention to steel framing tolerances and golden anodized aluminum walling was outstanding. Handed over three weeks early!",
      ky: "Рамзан Констракшн биздин Чүй проспектисиндеги кеңсесибизди курду. Алардын болот каркастарына жана алтын капталган фасаддык алюминийлерге жасаган мамилеси абдан таң калтырды. Мөөнөтүнөн 3 жума эрте тапшырышты!",
      ru: "Компания Ramzan Construction построила наш головной офис на проспекте Чуй. Внимание к деталям при сборке металлокаркаса и золотых алюминиевых панелей было на высшем уровне. Сдали объект на 3 недели раньше!"
    },
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test-2",
    name: { en: "Elena Volkova", ky: "Елена Волкова", ru: "Елена Волкова" },
    role: { en: "Luxury Homeowner", ky: "Люкс үй ээси", ru: "Владелец загородного дома" },
    company: { en: "Private Client", ky: "Жеке кардар", ru: "Частный клиент" },
    stars: 5,
    text: {
      en: "We commissioned them for our Royal Crest Villa in the mountains. From the initial soil testing and massive concrete piles to the precise marble work in the kitchen, their team acted with absolute professional class.",
      ky: "Биз тоодогу «Роял Крест» виллабыздын курулушун ушул компанияга тапшырдык. Пайдубалын куруудан баштап ашканадагы мрамор жумуштарына чейин баарын жогорку деңгээлде, кесипкөйлүк менен бүтүрүштү.",
      ru: "Мы поручили им строительство нашей виллы Royal Crest в горах. Начиная от анализа грунта и заливки свай до точнейшей укладки мрамора на кухне — вся команда проявила высочайший профессионализм."
    },
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test-3",
    name: { en: "Kuban Alybaev", ky: "Кубан Алыбаев", ru: "Кубан Алыбаев" },
    role: { en: "Real Estate Developer", ky: "Мүлк куруучу адис", ru: "Девелопер недвижимости" },
    company: { en: "Ordo Development", ky: "Ордо Девелопмент", ru: "Ордо Девелопмент" },
    stars: 5,
    text: {
      en: "Finding a contractor that respects tight structural tolerance and delivers transparent billing is rare. Ramzan Construction excels at both. Their project managers provide weekly video reports and clear ledgers.",
      ky: "Катуу талаптарды сактап, курулуш сметасын ачык көрсөткөн подрядчыны табуу кыйын. Рамзан Констракшн бул жагынан алдыда. Долбоор жетекчилери жума сайын видео отчет жана так отчётторду берип турушту.",
      ru: "Найти подрядчика, который соблюдает жесткие строительные стандарты и ведет честную смету, непросто. Ramzan Construction превосходит всех в этом. Руководители присылали еженедельные видеоотчеты."
    },
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export interface FaqItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: {
      en: "Is Ramzan Construction fully licensed and insured?",
      ky: "«Рамзан Констракшн» лицензияланганбы жана камсыздандырылганбы?",
      ru: "Лицензирована ли компания Ramzan Construction и застрахована ли ответственность?"
    },
    answer: {
      en: "Yes, we hold full Grade-I state construction licenses for residential and commercial works in Kyrgyzstan. Our services, sites, and workmen are covered under premium structural liability insurance.",
      ky: "Ооба, бизде Кыргызстандын аймагында турак жай жана коммерциялык имараттарды курууга толук 1-категориядагы мамлекеттик лицензия бар. Биздин бардык объекттерибиз жана жумушчуларыбыз толугу менен камсыздандырылган.",
      ru: "Да, мы обладаем государственной строительной лицензией I-й категории для жилых и коммерческих объектов в Кыргызстане. Все наши стройплощадки, материалы и сотрудники застрахованы."
    }
  },
  {
    id: "faq-2",
    question: {
      en: "Do you offer free quotes and on-site estimation?",
      ky: "Акысыз баалоо жана курулуш объектине баруу кызматтары барбы?",
      ru: "Предоставляете ли вы бесплатный расчет сметы и выезд на объект?"
    },
    answer: {
      en: "Absolutely. We provide comprehensive, transparent cost evaluations, architectural consultations, and physical site assessments entirely free of charge with no prior obligations.",
      ky: "Албетте. Биз курулуштун сметасын эсептөө, курулуш ордун изилдөө жана биринчи консультацияларды эч кандай милдеттенмелерсиз толугу менен акысыз жүргүзөбүз.",
      ru: "Конечно. Мы осуществляем детальный расчет сметы, первичную архитектурную консультацию и выезд инженера для осмотра площадки абсолютно бесплатно."
    }
  },
  {
    id: "faq-3",
    question: {
      en: "What materials do you use for foundations and walls?",
      ky: "Пайдубалдар жана дубалдар үчүн кандай материалдарды колдоносуз?",
      ru: "Какие материалы вы используете для фундаментов и возведения стен?"
    },
    answer: {
      en: "We source certified high-grade M350/M400 concrete, premium rebar, locally quarried granite/basalt stones, and insulated high-density bricks to ensure maximum seismic durability.",
      ky: "Сейсмикалык туруктуулукту камсыз кылуу үчүн биз сертификатталган жогорку сапаттагы М350/М400 үлгүсүндөгү бетондорду, премиум арматураларды, жергиликтүү гранит/базальт таштарын жана бышкан бышык кыштарды колдонобуз.",
      ru: "Для максимальной сейсмостойкости мы используем сертифицированный высокопрочный бетон марок М350/М400, прочную арматуру, базальтовый камень и плотный теплоэффективный кирпич."
    }
  },
  {
    id: "faq-4",
    question: {
      en: "Can we supply our own custom materials for internal finishings?",
      ky: "Ички жасалгалоо үчүн өзүбүздүн материалдарыбызды берсек болобу?",
      ru: "Можем ли мы предоставить свои собственные отделочные материалы?"
    },
    answer: {
      en: "Yes. While we have exclusive supply chains for luxury goods, we gladly work with client-nominated brands, custom fixtures, bespoke tiles, or family-imported timber to tailor the luxury.",
      ky: "Ооба, болот. Биздин премиум материалдардын жеткирүү тармагы бар болсо да, сиз өзүңүздүн тандаган бренддер, плиткалар же импорттук жыгачтар менен иштөөнү кааласаңыз, биз аларды кубаныч менен колдонобуз.",
      ru: "Да. Несмотря на наши собственные каналы поставок люкс-материалов, мы с радостью работаем со спецификациями заказчика, эксклюзивной сантехникой, привезенной вами плиткой или деревом."
    }
  }
];

export interface BlogItem {
  id: string;
  date: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  content: Record<Language, string>;
  imageUrl: string;
}

export const blogsData: BlogItem[] = [
  {
    id: "blog-1",
    date: "June 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    title: {
      en: "Seismic Design Principles in Modern Mountain Residential Builds",
      ky: "Тоолуу аймактардагы турак жайларды курууда сейсмикалык коопсуздуктун принциптери",
      ru: "Принципы сейсмостойкого проектирования современных горных вилл"
    },
    summary: {
      en: "An in-depth look into structural pile driving, advanced reinforced concrete cores, and flexible frame connectors crucial for alpine real estate.",
      ky: "Тоо этектериндеги курулуштар үчүн өтө маанилүү болгон тереңдетилген пайдубал свайлары, күчөтүлгөн бетон өзөктөр жана ийкемдүү каркас туташтыргычтары жөнүндө толук маалымат.",
      ru: "Подробный разбор забивки свай, передовых железобетонных сердечников и гибких рамных узлов, критически важных для строительства в предгорьях."
    },
    content: {
      en: "When building high-end villas near beautiful mountain slopes, seismic resistance isn't just a requirement; it is an art. At Ramzan Construction, we utilize specialized M400 concrete cores reinforced with premium high-tensile steel rebars. This allows the villa to absorb seismic shifts gracefully. Furthermore, heavy monolithic foundation plates distributed evenly across deep basalt piles prevent shift fatigue. Integrating these practices during initial framing ensures your mountain escape remains safe and structurally pristine for multiple generations.",
      ky: "Тоо этектеринде кооз люкс виллаларды курууда сейсмикалык туруктуулук жөн гана талап эмес, бул чоң искусство. «Рамзан Констракшн» компаниясында биз жогорку чыңалуудагы болот арматуралары менен бекемделген М400 үлгүсүндөгү атайын бетондорду колдонобуз. Бул вилланын сейсмикалык термелүүлөрдү коопсуз кабыл алуусуна шарт түзөт. Андан сырткары, базальт катмарларына терең орнотулган монолиттүү пайдубалдар убакыттын өтүшү менен жылып кетүүнүн алдын алат.",
      ru: "При строительстве высококлассных вилл в предгорных районах сейсмостойкость — это не просто стандарт, а высокое искусство. В Ramzan Construction мы применяем бетон класса М400, усиленный высокопрочной стальной арматурой. Это позволяет зданию безопасно амортизировать сейсмические колебания. Монолитные фундаментные плиты, распределенные на сваях в скальных грунтах, исключают просадку конструкции, гарантируя целостность дома на века."
    }
  },
  {
    id: "blog-2",
    date: "May 28, 2026",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
    title: {
      en: "Choosing the Right Countertops and Cabinetry for Premium Kitchens",
      ky: "Премиум ашканалар үчүн туура шкафтарды жана устундарды тандоо",
      ru: "Выбор идеальной столешницы и мебели для кухонь премиум-класса"
    },
    summary: {
      en: "From quartzite slabs and smart solid woods to automated Blum runner systems, explore the materials of high-end culinary interior spaces.",
      ky: "Кварцит такталарынан, табигый жыгачтан тартып автоматтык Blum системаларына чейин — люкс ашканалардын курулуш материалдарын изилдөө.",
      ru: "От цельных плит кварцита и массива дерева до автоматических выдвижных систем Blum: исследуем материалы для кулинарных зон высокого класса."
    },
    content: {
      en: "A premium kitchen is the heart of a luxurious residence. For countertops, while granite was historically popular, natural quartzite and heavy sintered stones are currently preferred for their exceptional hardness, non-porous structure, and magnificent vein patterns. For cabinetry, we recommend marine-grade plywood or solid ash wood paired with soft-closing Blum runner tracks and electronic touch sensors. Combining these robust materials with expert craftsmanship creates an environment that balances raw longevity with supreme high-tech elegance.",
      ky: "Заманбап люкс үйдүн жүрөгү — бул анын премиум ашканасы. Сырты кооз, бышык болушу үчүн биз граниттин ордуна табигый кварцитти же куйма керамограниттерди сунуштайбыз. Алар так калтырбайт жана урунууларга абдан туруктуу келет. Ал эми шкафтар үчүн биз жогорку сапаттагы жыгачтарды жана Blum фирмасынын жумшак жабылуучу, электрондук сенсордук системаларын колдонобуз.",
      ru: "Премиальная кухня — сердце роскошного дома. Сегодня на смену граниту приходят натуральный кварцит и сверхпрочные спеченные каменные плиты из-за их стойкости к загрязнениям и царапинам, а также невероятной текстуры. Для кухонных модулей мы рекомендуем влагостойкую фанеру или массив ясеня в паре с фурнитурой Blum. Интеграция доводчиков обеспечивает идеальный баланс комфорта и долговечности."
    }
  }
];
