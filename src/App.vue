<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <span class="text-2xl">☀️</span>
          <h1 class="text-xl font-bold text-orange-600">Sunrise Education</h1>
        </div>
        
        <div class="flex items-center space-x-4">
          <select v-model="language" class="px-3 py-2 border rounded-lg bg-white">
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ms">Melayu</option>
          </select>
          <a href="#contact" class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            {{ t('contact') }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-5xl font-bold mb-4">{{ t('title') }}</h2>
        <p class="text-xl mb-8">{{ t('subtitle') }}</p>
        <button class="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition">
          {{ t('getStarted') }}
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h3 class="text-4xl font-bold text-center mb-12">{{ t('about') }}</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition">
            <span class="text-4xl mb-4 block">🎓</span>
            <h4 class="font-bold text-lg mb-2">{{ t('igcse') }}</h4>
            <p>{{ t('igcseDesc') }}</p>
          </div>
          <div class="text-center p-6 bg-yellow-50 rounded-lg hover:shadow-lg transition">
            <span class="text-4xl mb-4 block">🌍</span>
            <h4 class="font-bold text-lg mb-2">{{ t('global') }}</h4>
            <p>{{ t('globalDesc') }}</p>
          </div>
          <div class="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition">
            <span class="text-4xl mb-4 block">👨‍👩‍👧‍👦</span>
            <h4 class="font-bold text-lg mb-2">{{ t('personalized') }}</h4>
            <p>{{ t('personalizedDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h3 class="text-4xl font-bold text-center mb-12">{{ t('services') }}</h3>
        <ul class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <li v-for="(service, index) in services" :key="index" class="flex items-start p-4 bg-white rounded-lg hover:shadow-md transition">
            <span class="text-2xl mr-4 flex-shrink-0">✓</span>
            <span class="text-gray-700">{{ service }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-orange-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h3 class="text-4xl font-bold mb-8">{{ t('contactUs') }}</h3>
        <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div>
            <p class="text-lg mb-4"><strong>📞 {{ t('phone') }}:</strong> +6 012-425 1556</p>
            <p class="text-lg mb-4"><strong>💬 {{ t('whatsapp') }}:</strong> +6 012-425 1556</p>
            <p class="text-lg"><strong>📧 {{ t('email') }}:</strong> LOVE@sun.edu.my</p>
          </div>
          <div>
            <p class="text-lg mb-2"><strong>📍 {{ t('address') }}:</strong></p>
            <p class="text-lg mb-2">No. 25-2nd Floor</p>
            <p class="text-lg mb-2">Jalan Mahogani 5/Ks7</p>
            <p class="text-lg">41200 Klang, Selangor, Malaysia</p>
          </div>
        </div>
        <div class="mt-8">
          <a href="https://www.facebook.com/SunriseResourceCentre" target="_blank" class="inline-block bg-white text-orange-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100">
            📘 Facebook
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2026 Sunrise Education | 阳光学府 | {{ t('allRights') }}</p>
        <p class="mt-2 text-sm text-gray-400">{{ t('since2014') }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: localStorage.getItem('language') || 'en',
      translations: {
        en: {
          title: 'Sunrise Education',
          subtitle: 'Premium Homeschooling with Cambridge IGCSE Curriculum',
          getStarted: 'Get Started',
          about: 'About Us',
          igcse: 'Cambridge IGCSE',
          igcseDesc: 'Internationally recognized curriculum accepted by over 140 countries',
          global: 'Global Recognition',
          globalDesc: 'Pathway to A-Levels, Foundation, or Diploma courses worldwide',
          personalized: 'Personalized Learning',
          personalizedDesc: 'Student-centered education tailored to individual abilities',
          services: 'Our Services',
          contact: 'Contact',
          contactUs: 'Contact Us',
          phone: 'Phone',
          whatsapp: 'WhatsApp',
          email: 'Email',
          address: 'Address',
          allRights: 'All Rights Reserved',
          since2014: 'Est. 2014 | Serving Excellence in Education'
        },
        zh: {
          title: '阳光学府',
          subtitle: '剑桥 IGCSE 课程的优质家庭教育',
          getStarted: '开始学习',
          about: '关于我们',
          igcse: '剑桥 IGCSE',
          igcseDesc: '获得国际认可的课程，在 140 多个国家被认可',
          global: '全球认可',
          globalDesc: '通往 A-Level、基础课程或文凭课程的途径',
          personalized: '个性化学习',
          personalizedDesc: '以学生为中心，根据个人能力量身定制的教育',
          services: '我们的服务',
          contact: '联系',
          contactUs: '联系我们',
          phone: '电话',
          whatsapp: 'WhatsApp',
          email: '邮箱',
          address: '地址',
          allRights: '版权所有',
          since2014: '成立于 2014 年 | 致力于教育卓越'
        },
        ms: {
          title: 'Sunrise Education',
          subtitle: 'Pendidikan Sekolah Rumah Berkualiti dengan Kurikulum Cambridge IGCSE',
          getStarted: 'Mulai Sekarang',
          about: 'Tentang Kami',
          igcse: 'Cambridge IGCSE',
          igcseDesc: 'Kurikulum yang diiktiraf secara antarabangsa, diterima oleh lebih 140 negara',
          global: 'Pengiktirafan Global',
          globalDesc: 'Laluan ke A-Levels, Kursus Asas, atau Kursus Diploma di seluruh dunia',
          personalized: 'Pembelajaran Dipersonalisasi',
          personalizedDesc: 'Pendidikan berpusat kepada pelajar yang disesuaikan dengan keupayaan individu',
          services: 'Layanan Kami',
          contact: 'Hubungi',
          contactUs: 'Hubungi Kami',
          phone: 'Telefon',
          whatsapp: 'WhatsApp',
          email: 'Emel',
          address: 'Alamat',
          allRights: 'Semua Hak Terpelihara',
          since2014: 'Ditubuhkan 2014 | Komitmen kepada Kecemerlangan Pendidikan'
        }
      }
    }
  },
  computed: {
    services() {
      const servicesData = {
        en: [
          'Personalized Educational Journey',
          'Cambridge IGCSE Curriculum (Primary & Secondary)',
          'Globally Recognized Qualifications',
          'Pathway to A-Levels, Foundation & Diploma',
          'Student-Centered Learning Approach',
          'Ages 7-18 Welcome',
          'Ability-Based Streaming',
          'Flexible English Learning Modules',
          'Focus on Physical & Mental Growth',
          'Support & Activities',
          'Bi-Annual Parent-Teacher Conferences'
        ],
        zh: [
          '个性化的教育旅程',
          '剑桥 IGCSE 课程（小学和中学）',
          '全球认可的资格',
          '通往 A-Level、基础课程和文凭课程的途径',
          '以学生为中心的学习方法',
          '7-18 岁学生欢迎',
          '基于能力的分班',
          '灵活有效的英语学习模块',
          '关注身体和心理健康',
          '支持与活动',
          '每年两次家长教师会议'
        ],
        ms: [
          'Perjalanan Pendidikan yang Dipersonalisasi',
          'Kurikulum Cambridge IGCSE (Rendah & Menengah)',
          'Kelayakan Diiktiraf Secara Global',
          'Laluan ke A-Levels, Kursus Asas & Diploma',
          'Pendekatan Pembelajaran Berpusat kepada Pelajar',
          'Usia 7-18 Tahun Dialu-alukan',
          'Pengaliran Berdasarkan Keupayaan',
          'Modul Pembelajaran Bahasa Inggeris yang Fleksibel',
          'Fokus pada Kesihatan Fizikal & Mental',
          'Sokongan & Aktiviti',
          'Konferensi Guru Ibubapa Dua Kali Setahun'
        ]
      };
      return servicesData[this.language];
    }
  },
  methods: {
    t(key) {
      return this.translations[this.language][key] || key;
    }
  },
  watch: {
    language(newLang) {
      localStorage.setItem('language', newLang);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>