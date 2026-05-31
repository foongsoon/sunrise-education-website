/* ==========================================
   Sunrise Education - Interactive Script
   ========================================== */

// ========== Language Configuration ==========
const translations = {
  en: {
    // Hero
    hero_title: "Sunrise Education",
    hero_subtitle: "Where Learning Meets Happiness",
    hero_description: "Empowering young minds through Cambridge IGCSE & Malaysian Homeschooling",
    learn_more: "Learn More",
    contact_us: "Contact Us",
    
    // About
    about_title: "About Sunrise Education",
    about_subtitle: "Caring for Child Growth & Happiness",
    about_care: "Child-Centric Care",
    about_care_desc: "We truly care about each child's emotional, social, and academic growth.",
    about_international: "International Standards",
    about_international_desc: "Cambridge IGCSE curriculum recognized globally.",
    about_flexible: "Flexible Learning",
    about_flexible_desc: "Homeschooling solutions tailored to your child's needs.",
    
    // Programs
    programs_title: "Our Programs",
    programs_subtitle: "Ages 7-18 Years",
    primary_title: "Primary Program",
    primary_age: "Ages 7-11",
    primary_curriculum: "Comprehensive Curriculum",
    secondary_title: "Secondary Program",
    secondary_age: "Ages 12-18",
    secondary_curriculum: "Pathway to Cambridge IGCSE",
    homeschool_title: "Sunrise Homeschool",
    homeschool_flexible: "Flexible Learning",
    homeschool_features: "Personalized Learning Path",
    
    // Cambridge
    cambridge_title: "Cambridge IGCSE Excellence",
    cambridge_subtitle: "International General Certificate of Secondary Education",
    cambridge_intro: "Cambridge IGCSE is the world's most popular international qualification for 14-16 year olds, recognized by universities and employers globally.",
    cambridge_why_title: "Why Cambridge IGCSE?",
    cambridge_recognized: "Globally recognized qualification",
    cambridge_universities: "Accepted by top universities worldwide",
    cambridge_flexible_subjects: "150+ subject combinations",
    cambridge_rigorous: "Rigorous & comprehensive assessment",
    cambridge_skills: "Develops critical thinking & independence",
    cambridge_subjects_title: "Core Subjects Offered",
    cambridge_assessment_title: "Assessment Structure",
    cambridge_written_exams: "Written Exams",
    cambridge_written_exams_desc: "60-80% of final grade",
    cambridge_coursework: "Coursework",
    cambridge_coursework_desc: "20-40% of final grade",
    cambridge_practical: "Practical",
    cambridge_practical_desc: "Integrated in sciences",
    cambridge_our_support_title: "Our IGCSE Support",
    cambridge_experienced_teachers: "Experienced Cambridge-certified teachers",
    cambridge_past_papers: "Regular past papers & mock exams",
    cambridge_personalized_guidance: "Personalized exam guidance",
    cambridge_support_sessions: "Intensive revision sessions",
    cambridge_progress_monitoring: "Continuous progress monitoring",
    cambridge_after_igcse_title: "Post-IGCSE Pathways",
    cambridge_cambridge_alevel: "Cambridge A-Levels",
    cambridge_international_unis: "International Universities",
    cambridge_scholarship: "Scholarship Opportunities",
    cambridge_career_pathways: "Professional Certifications",
    
    // Contact
    contact_title: "Get In Touch",
    contact_subtitle: "We'd love to hear from you!",
    contact_send_message: "Send us a Message",
    contact_name: "Your Name",
    contact_email: "Email Address",
    contact_phone: "Phone Number",
    contact_message: "Your Message",
    contact_send: "Send Message",
    contact_information: "Contact Information",
    contact_call_whatsapp: "Call / WhatsApp",
    contact_email_label: "Email",
    contact_ai_assistant: "AI Assistant",
    contact_address: "Address",
    contact_directions: "Get Directions",
    contact_follow_us: "Follow Us",
    contact_location: "Our Location",
    
    // Footer
    footer_about: "About",
    footer_about_desc: "Sunrise Education is committed to nurturing young minds through world-class education and genuine care.",
    footer_programs: "Programs",
    footer_primary: "Primary Program",
    footer_secondary: "Secondary Program",
    footer_homeschool: "Homeschool",
    footer_cambridge: "Cambridge IGCSE",
    footer_quick_links: "Quick Links",
    footer_home: "Home",
    footer_about_link: "About Us",
    footer_contact: "Contact",
    footer_admissions: "Admissions",
    footer_contact_us: "Contact Us",
    footer_copyright: "© 2024 Sunrise Education. All rights reserved. | Nurturing Minds, Brightening Futures ☀️"
  },
  zh: {
    // Hero
    hero_title: "阳光学府",
    hero_subtitle: "学习与快乐交汇之处",
    hero_description: "通过剑桥IGCSE和马来西亚家式教育为年轻心灵赋能",
    learn_more: "了解更多",
    contact_us: "联系我们",
    
    // About
    about_title: "关于阳光学府",
    about_subtitle: "关心孩子成长与快乐",
    about_care: "以儿童为中心的关怀",
    about_care_desc: "我们真诚关心每个孩子的情感、社交和学术发展。",
    about_international: "国际标准",
    about_international_desc: "全球公认的剑桥IGCSE课程。",
    about_flexible: "灵活学习",
    about_flexible_desc: "根据孩子需求量身定制的家式教育解决方案。",
    
    // Programs
    programs_title: "我们的课程",
    programs_subtitle: "7-18岁学生",
    primary_title: "小学课程",
    primary_age: "7-11岁",
    primary_curriculum: "综合课程",
    secondary_title: "中学课程",
    secondary_age: "12-18岁",
    secondary_curriculum: "剑桥IGCSE升学路径",
    homeschool_title: "阳光家式教育",
    homeschool_flexible: "灵活学习",
    homeschool_features: "个性化学习路径",
    
    // Cambridge
    cambridge_title: "剑桥IGCSE卓越教育",
    cambridge_subtitle: "国际普通中等教育证书",
    cambridge_intro: "剑桥IGCSE是全球最受欢迎的14-16岁学生国际资格证书，被全球大学和雇主认可。",
    cambridge_why_title: "为什么选择剑桥IGCSE？",
    cambridge_recognized: "全球公认的资格证书",
    cambridge_universities: "被全球顶级大学接受",
    cambridge_flexible_subjects: "150多种课程组合",
    cambridge_rigorous: "严谨全面的评估",
    cambridge_skills: "培养批判性思维和独立性",
    cambridge_subjects_title: "开设的核心课程",
    cambridge_assessment_title: "评估结构",
    cambridge_written_exams: "笔试",
    cambridge_written_exams_desc: "占最终成绩的60-80%",
    cambridge_coursework: "课程作业",
    cambridge_coursework_desc: "占最终成绩的20-40%",
    cambridge_practical: "实验",
    cambridge_practical_desc: "融入理科课程",
    cambridge_our_support_title: "我们的IGCSE支持",
    cambridge_experienced_teachers: "有剑桥认证的经验丰富教师",
    cambridge_past_papers: "定期进行过往试卷和模拟考试",
    cambridge_personalized_guidance: "个性化考试指导",
    cambridge_support_sessions: "密集复习课程",
    cambridge_progress_monitoring: "持续进度监测",
    cambridge_after_igcse_title: "IGCSE后的升学途径",
    cambridge_cambridge_alevel: "剑桥A-Level",
    cambridge_international_unis: "国际大学",
    cambridge_scholarship: "奖学金机会",
    cambridge_career_pathways: "专业认证",
    
    // Contact
    contact_title: "联系我们",
    contact_subtitle: "我们期待您的消息！",
    contact_send_message: "发送消息",
    contact_name: "您的名字",
    contact_email: "电子邮箱",
    contact_phone: "电话号码",
    contact_message: "您的消息",
    contact_send: "发送",
    contact_information: "联系信息",
    contact_call_whatsapp: "拨打/WhatsApp",
    contact_email_label: "邮箱",
    contact_ai_assistant: "AI助手",
    contact_address: "地址",
    contact_directions: "获取路线",
    contact_follow_us: "关注我们",
    contact_location: "我们的位置",
    
    // Footer
    footer_about: "关于我们",
    footer_about_desc: "阳光学府致力于通过世界级教育和真诚关怀培育年轻心灵。",
    footer_programs: "课程",
    footer_primary: "小学课程",
    footer_secondary: "中学课程",
    footer_homeschool: "家式教育",
    footer_cambridge: "剑桥IGCSE",
    footer_quick_links: "快速链接",
    footer_home: "首页",
    footer_about_link: "关于我们",
    footer_contact: "联系",
    footer_admissions: "入学申请",
    footer_contact_us: "联系我们",
    footer_copyright: "© 2024 阳光学府。版权所有。 | 培育年轻心灵，璀璨美好未来 ☀️"
  },
  ms: {
    // Hero
    hero_title: "Pendidikan Sunrise",
    hero_subtitle: "Tempat Pembelajaran Bertemu Kebahagiaan",
    hero_description: "Memberdayakan mente muda melalui Cambridge IGCSE & Homeschooling Malaysia",
    learn_more: "Pelajari Lebih Lanjut",
    contact_us: "Hubungi Kami",
    
    // About
    about_title: "Tentang Pendidikan Sunrise",
    about_subtitle: "Peduli pada Pertumbuhan dan Kebahagiaan Anak",
    about_care: "Perawatan Berpusat pada Anak",
    about_care_desc: "Kami benar-benar peduli dengan perkembangan emosional, sosial, dan akademik setiap anak.",
    about_international: "Standar Internasional",
    about_international_desc: "Kurikulum Cambridge IGCSE yang diakui secara global.",
    about_flexible: "Pembelajaran Fleksibel",
    about_flexible_desc: "Solusi homeschooling yang disesuaikan dengan kebutuhan anak Anda.",
    
    // Programs
    programs_title: "Program Kami",
    programs_subtitle: "Usia 7-18 Tahun",
    primary_title: "Program Pendidikan Dasar",
    primary_age: "Usia 7-11",
    primary_curriculum: "Kurikulum Komprehensif",
    secondary_title: "Program Pendidikan Menengah",
    secondary_age: "Usia 12-18",
    secondary_curriculum: "Jalur menuju Cambridge IGCSE",
    homeschool_title: "Homeschool Sunrise",
    homeschool_flexible: "Pembelajaran Fleksibel",
    homeschool_features: "Jalur Pembelajaran yang Dipersonalisasi",
    
    // Cambridge
    cambridge_title: "Keunggulan Cambridge IGCSE",
    cambridge_subtitle: "Sertifikat Umum Pendidikan Menengah Internasional",
    cambridge_intro: "Cambridge IGCSE adalah kualifikasi internasional paling populer di dunia untuk siswa berusia 14-16 tahun, diakui oleh universitas dan pemberi kerja secara global.",
    cambridge_why_title: "Mengapa Cambridge IGCSE?",
    cambridge_recognized: "Kualifikasi yang diakui secara global",
    cambridge_universities: "Diterima oleh universitas terkemuka di seluruh dunia",
    cambridge_flexible_subjects: "150+ kombinasi mata pelajaran",
    cambridge_rigorous: "Penilaian yang ketat dan komprehensif",
    cambridge_skills: "Mengembangkan pemikiran kritis dan kemandirian",
    cambridge_subjects_title: "Mata Pelajaran Inti yang Ditawarkan",
    cambridge_assessment_title: "Struktur Penilaian",
    cambridge_written_exams: "Ujian Tertulis",
    cambridge_written_exams_desc: "60-80% dari nilai akhir",
    cambridge_coursework: "Pekerjaan Kursus",
    cambridge_coursework_desc: "20-40% dari nilai akhir",
    cambridge_practical: "Praktikum",
    cambridge_practical_desc: "Terintegrasi dalam sains",
    cambridge_our_support_title: "Dukungan IGCSE Kami",
    cambridge_experienced_teachers: "Guru bersertifikat Cambridge yang berpengalaman",
    cambridge_past_papers: "Soal-soal tahun lalu dan ujian percobaan reguler",
    cambridge_personalized_guidance: "Bimbingan ujian yang dipersonalisasi",
    cambridge_support_sessions: "Sesi revisi intensif",
    cambridge_progress_monitoring: "Pemantauan kemajuan berkelanjutan",
    cambridge_after_igcse_title: "Jalur Pascalanjut IGCSE",
    cambridge_cambridge_alevel: "Cambridge A-Levels",
    cambridge_international_unis: "Universitas Internasional",
    cambridge_scholarship: "Peluang Beasiswa",
    cambridge_career_pathways: "Sertifikasi Profesional",
    
    // Contact
    contact_title: "Hubungi Kami",
    contact_subtitle: "Kami ingin mendengar dari Anda!",
    contact_send_message: "Kirim Pesan",
    contact_name: "Nama Anda",
    contact_email: "Alamat Email",
    contact_phone: "Nomor Telepon",
    contact_message: "Pesan Anda",
    contact_send: "Kirim Pesan",
    contact_information: "Informasi Kontak",
    contact_call_whatsapp: "Hubungi / WhatsApp",
    contact_email_label: "Email",
    contact_ai_assistant: "Asisten AI",
    contact_address: "Alamat",
    contact_directions: "Dapatkan Petunjuk",
    contact_follow_us: "Ikuti Kami",
    contact_location: "Lokasi Kami",
    
    // Footer
    footer_about: "Tentang",
    footer_about_desc: "Pendidikan Sunrise berkomitmen untuk memupuk mente muda melalui pendidikan kelas dunia dan perhatian yang tulus.",
    footer_programs: "Program",
    footer_primary: "Program Pendidikan Dasar",
    footer_secondary: "Program Pendidikan Menengah",
    footer_homeschool: "Homeschool",
    footer_cambridge: "Cambridge IGCSE",
    footer_quick_links: "Tautan Cepat",
    footer_home: "Beranda",
    footer_about_link: "Tentang Kami",
    footer_contact: "Hubungi",
    footer_admissions: "Penerimaan",
    footer_contact_us: "Hubungi Kami",
    footer_copyright: "© 2024 Pendidikan Sunrise. Semua hak dilindungi. | Memelihara Mente Muda, Mencerahkan Masa Depan ☀️"
  }
};

// ========== DOM Elements ==========
const langButtons = document.querySelectorAll('.lang-btn');
const themeBtn = document.getElementById('theme-btn');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const contactForm = document.getElementById('contact-form');
const body = document.body;

// ========== Language Management ==========
let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('selectedLanguage', lang);
  
  // Update active button
  langButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
  
  // Update HTML content
  updateTranslations(lang);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

function updateTranslations(lang) {
  const elements = document.querySelectorAll('[data-text]');
  elements.forEach(el => {
    const key = el.dataset.text;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.dataset.placeholder;
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// Language button event listeners
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

// ========== Theme Management ==========
let currentTheme = localStorage.getItem('selectedTheme') || 'light';

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('selectedTheme', theme);
  
  if (theme === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.innerHTML = '<span class="theme-icon">☀️</span>';
  } else {
    body.classList.remove('dark-theme');
    themeBtn.innerHTML = '<span class="theme-icon">🌙</span>';
  }
}

function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

themeBtn.addEventListener('click', toggleTheme);

// ========== Mobile Menu ==========
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when link is clicked
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
mobileMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// ========== Contact Form ==========
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  
  // Prepare email data
  const emailData = {
    to: 'LOVE@sun.edu.my',
    subject: `New Contact Form Submission from ${name}`,
    name: name,
    email: email,
    phone: phone,
    message: message
  };
  
  // Create mailto link as fallback
  const mailtoLink = `mailto:LOVE@sun.edu.my?subject=Contact Form Submission from ${encodeURIComponent(name)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
  )}`;
  
  // Open email client
  window.location.href = mailtoLink;
  
  // Reset form
  contactForm.reset();
  
  // Show success message
  alert(translations[currentLanguage]['contact_send'] + ' - Opening email client...');
});

// ========== Smooth Scroll for Navigation ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== Initialization ==========
window.addEventListener('DOMContentLoaded', () => {
  // Initialize language
  setLanguage(currentLanguage);
  
  // Initialize theme
  setTheme(currentTheme);
  
  // Detect system theme preference if no preference saved
  if (!localStorage.getItem('selectedTheme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme('dark');
    }
  }
});

// ========== Intersection Observer for Animations ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.about-card, .program-card, .cambridge-box, .contact-form-box, .contact-info-box').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

console.log('Sunrise Education Website Loaded Successfully ☀️');