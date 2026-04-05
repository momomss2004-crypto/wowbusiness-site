const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const langSwitch = document.getElementById('langSwitch');
const html = document.documentElement;
const body = document.body;

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });
}

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const translations = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.contact': 'تواصل معنا',
    'hero.eyebrow': 'حلول عقارية واستثمارية متكاملة',
    'hero.title': 'نصنع قيمة عقارية برؤية حديثة',
    'hero.text': 'نقدم في World of Wealth Business تجربة احترافية تجمع بين الجودة والوضوح والطموح، لنقدّم حلولًا عقارية واستثمارية مصممة لتواكب تطلعات الأفراد ورواد الأعمال والمستثمرين.',
    'hero.primary': 'ابدأ معنا',
    'hero.secondary': 'استعرض الخدمات',
    'hero.cardLabel': 'هوية أعمال أكثر أناقة ووضوحًا',
    'hero.point1': 'تصميم مريح للعين وحركة سلسة',
    'hero.point2': 'عرض احترافي للخدمات والتواصل',
    'hero.point3': 'تجربة ثنائية اللغة عربي / English',
    'stats.one': 'رؤية واضحة',
    'stats.two': 'جودة في التفاصيل',
    'stats.three': 'حلول عملية',
    'about.tag': 'من نحن',
    'about.title': 'هوية أعمال تنطلق من الثقة والرؤية',
    'about.text': 'في World of Wealth Business نؤمن بأن التطوير العقاري الناجح يبدأ من رؤية واضحة، وفهم عميق للسوق، وتنفيذ يوازن بين الجودة والقيمة والاستدامة. نقدم حلولًا عقارية واستثمارية متكاملة تهدف إلى دعم الأفراد ورواد الأعمال والمستثمرين عبر خدمات مدروسة تركّز على المواقع الواعدة، والتطوير المنظم، والتسويق الفعال، وبناء فرص ذات أثر طويل المدى.',
    'about.text2': 'نحرص على تقديم تجربة احترافية تعكس الثقة والوضوح والالتزام بالتفاصيل في كل مشروع وخدمة نقدمها.',
    'services.tag': 'الخدمات',
    'services.title': 'خدمات مصممة لدعم النمو العقاري والاستثماري',
    'services.s1.title': 'التسويق العقاري',
    'services.s1.text': 'حلول تسويق عقاري احترافية لإبراز الفرص والمشاريع بطريقة جاذبة ومدروسة للوصول إلى العملاء والمستثمرين المناسبين.',
    'services.s2.title': 'الاستشارات العقارية',
    'services.s2.text': 'استشارات مبنية على فهم السوق والاحتياج الفعلي لدعم اتخاذ قرارات عقارية واستثمارية أكثر دقة ووضوحًا.',
    'services.s3.title': 'إدارة وتطوير المشاريع',
    'services.s3.text': 'دعم مراحل المشروع من الفكرة إلى التنفيذ عبر تنظيم المتطلبات وتنسيق الأولويات ورفع كفاءة المخرجات.',
    'services.s4.title': 'الحلول الاستثمارية العقارية',
    'services.s4.text': 'المساعدة في استكشاف الفرص العقارية ذات الجدوى مع التركيز على القيمة المستقبلية والمواقع الواعدة والنمو الاستراتيجي.',
    'services.s5.title': 'إدارة الأصول والعقارات',
    'services.s5.text': 'خدمات تنظيمية وتشغيلية تعزز الاستفادة من الأصول العقارية وتحافظ على استقرار الأداء وجودة التجربة.',
    'services.s6.title': 'تجربة أعمال راقية',
    'services.s6.text': 'أسلوب عرض مؤسسي يركز على الوضوح، والاحتراف، وسهولة الوصول إلى المعلومات والتواصل.',
    'contact.tag': 'تواصل معنا',
    'contact.title': 'ابدأ حديثك معنا اليوم',
    'contact.text': 'يسعدنا استقبال استفساراتكم ومناقشة الفرص والخدمات المناسبة لاحتياجكم.',
    'contact.phoneLabel': 'رقم التواصل',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.email2Label': 'بريد إضافي',
    'contact.locationLabel': 'النطاق',
    'contact.location': 'Kingdom of Saudi Arabia',
    'contact.whatsapp': 'واتساب',
    'contact.emailBtn': 'راسلنا',
    'footer.text': 'واجهة رقمية بهوية أنيقة وتجربة سلسة.',
    'footer.top': 'العودة للأعلى'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Integrated Real Estate & Investment Solutions',
    'hero.title': 'Creating Real Estate Value with a Modern Vision',
    'hero.text': 'World of Wealth Business delivers a refined professional experience built on quality, clarity, and ambition through real estate and investment solutions tailored for individuals, entrepreneurs, and investors.',
    'hero.primary': 'Start With Us',
    'hero.secondary': 'Explore Services',
    'hero.cardLabel': 'A more elegant and clearer business identity',
    'hero.point1': 'Eye-comfort design with smooth motion',
    'hero.point2': 'Professional presentation of services and contact',
    'hero.point3': 'Bilingual experience in Arabic / English',
    'stats.one': 'Clear Vision',
    'stats.two': 'Attention to Detail',
    'stats.three': 'Practical Solutions',
    'about.tag': 'About Us',
    'about.title': 'A business identity shaped by trust and vision',
    'about.text': 'At World of Wealth Business, we believe successful real estate development begins with clear vision, deep market understanding, and execution that balances quality, value, and sustainability. We provide integrated real estate and investment solutions designed to support individuals, entrepreneurs, and investors through well-structured services focused on promising locations, organized development, effective marketing, and long-term value creation.',
    'about.text2': 'We are committed to delivering a professional experience built on trust, clarity, and attention to detail in every service we offer.',
    'services.tag': 'Services',
    'services.title': 'Services designed to support real estate and investment growth',
    'services.s1.title': 'Real Estate Marketing',
    'services.s1.text': 'Professional marketing solutions that present opportunities and projects in a compelling and strategic way to reach the right clients and investors.',
    'services.s2.title': 'Real Estate Consultancy',
    'services.s2.text': 'Market-aware advisory services that support smarter and more confident real estate and investment decisions.',
    'services.s3.title': 'Project Management & Development',
    'services.s3.text': 'Support from concept to execution through structured coordination, organized planning, and improved delivery efficiency.',
    'services.s4.title': 'Real Estate Investment Solutions',
    'services.s4.text': 'Helping identify promising real estate opportunities with a focus on long-term value, strategic locations, and sustainable growth.',
    'services.s5.title': 'Asset & Property Management',
    'services.s5.text': 'Operational and organizational services that enhance asset performance and support a more consistent property experience.',
    'services.s6.title': 'Premium Business Experience',
    'services.s6.text': 'A corporate presentation style focused on clarity, professionalism, and easy access to information and communication.',
    'contact.tag': 'Contact Us',
    'contact.title': 'Start the conversation today',
    'contact.text': 'We would be pleased to receive your inquiries and discuss the right opportunities and services for your needs.',
    'contact.phoneLabel': 'Phone',
    'contact.emailLabel': 'Email',
    'contact.email2Label': 'Additional Email',
    'contact.locationLabel': 'Coverage',
    'contact.location': 'Kingdom of Saudi Arabia',
    'contact.whatsapp': 'WhatsApp',
    'contact.emailBtn': 'Email Us',
    'footer.text': 'A digital presence with elegant identity and smooth experience.',
    'footer.top': 'Back to top'
  }
};

function setLanguage(lang) {
  const dictionary = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  body.classList.toggle('en', lang === 'en');
  langSwitch.textContent = lang === 'ar' ? 'EN' : 'AR';
  localStorage.setItem('wowbusiness-lang', lang);
}

langSwitch?.addEventListener('click', () => {
  const next = html.lang === 'ar' ? 'en' : 'ar';
  setLanguage(next);
});

const savedLang = localStorage.getItem('wowbusiness-lang') || 'ar';
setLanguage(savedLang);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.fade-up').forEach((element) => observer.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a')];

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 140;
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      navLinks.forEach((link) => link.classList.remove('active'));
      const active = document.querySelector(`.site-nav a[href="#${section.id}"]`);
      active?.classList.add('active');
    }
  });
});
