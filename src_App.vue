<template>
  <div class="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white shadow-md">
      <nav class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-3xl font-bold text-yellow-600">☀️ Sunrise</div>
        <div class="flex gap-4">
          <button @click="language = 'en'" :class="['px-4 py-2', language === 'en' ? 'bg-yellow-500 text-white rounded' : '']">English</button>
          <button @click="language = 'zh'" :class="['px-4 py-2', language === 'zh' ? 'bg-yellow-500 text-white rounded' : '']">中文</button>
          <button @click="language = 'ms'" :class="['px-4 py-2', language === 'ms' ? 'bg-yellow-500 text-white rounded' : '']">Melayu</button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4">{{ content[language].hero.title }}</h1>
        <p class="text-xl mb-8">{{ content[language].hero.subtitle }}</p>
        <button class="bg-white text-yellow-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100">
          {{ content[language].cta }}
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold mb-8 text-center">{{ content[language].about.title }}</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <p class="text-lg mb-4">{{ content[language].about.description }}</p>
          <ul class="space-y-2">
            <li v-for="point in content[language].about.points" :key="point" class="flex items-start">
              <span class="text-2xl mr-3">✅</span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
        <div class="bg-yellow-100 rounded-lg p-8 flex items-center justify-center">
          <div class="text-center">
            <div class="text-6xl mb-4">🎓</div>
            <p class="text-2xl font-bold mb-2">{{ content[language].founded }}</p>
            <p class="text-lg text-gray-600">{{ content[language].since }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center">{{ content[language].services.title }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(service, idx) in content[language].services.list" :key="idx" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div class="text-4xl mb-3">{{ service.icon }}</div>
            <h3 class="text-xl font-bold mb-2">{{ service.name }}</h3>
            <p class="text-gray-600">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold mb-8 text-center">{{ content[language].contact.title }}</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <div class="mb-6">
            <h3 class="text-xl font-bold mb-2">📞 {{ content[language].contact.phone }}</h3>
            <p class="text-gray-600">+6 012-425 1556</p>
          </div>
          <div class="mb-6">
            <h3 class="text-xl font-bold mb-2">📧 {{ content[language].contact.email }}</h3>
            <p class="text-gray-600">LOVE@sun.edu.my</p>
          </div>
          <div class="mb-6">
            <h3 class="text-xl font-bold mb-2">📍 {{ content[language].contact.address }}</h3>
            <p class="text-gray-600">No. 25-2nd Floor, Jalan Mahogani 5/Ks7, 41200 Klang, Selangor, Malaysia</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2">🔗 {{ content[language].contact.social }}</h3>
            <a href="https://www.facebook.com/SunriseResourceCentre" target="_blank" class="text-blue-600 hover:underline">Facebook</a>
          </div>
        </div>
        <form class="space-y-4">
          <input type="text" :placeholder="content[language].contact.form.name" class="w-full p-3 border rounded-lg">
          <input type="email" :placeholder="content[language].contact.form.email" class="w-full p-3 border rounded-lg">
          <textarea :placeholder="content[language].contact.form.message" class="w-full p-3 border rounded-lg h-32"></textarea>
          <button class="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600">{{ content[language].contact.form.send }}</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p>© 2026 Sunrise Education Center. {{ content[language].rights }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: 'en',
      content: {
        en: {
          hero: {
            title: 'Welcome to Sunrise Education Center ☀️',
            subtitle: 'Cambridge IGCSE Curriculum | Ages 7-18 | Homeschooling Excellence in Malaysia'
          },
          cta: 'Get Started Today',
          about: {
            title: 'About Sunrise Education',
            description: 'Founded in 2014, Sunrise Education Center is dedicated to providing high-quality education that develops each student\'s unique abilities and passion. We follow internationally recognized IGCSE curriculum and offer flexible, student-centered learning.',
            points: [
              'International IGCSE Curriculum',
              'Recognized in 140+ Countries',
              'Flexible English Learning Modules',
              'Ages 7-18 Students',
              'Class Leveling by Ability',
              'Focus on Physical & Mental Growth',
              'Bi-annual Parent-Teacher Meetings'
            ]
          },
          founded: 'Since 2014',
          since: '12 Years of Excellence',
          services: {
            title: 'Our Services',
            list: [
              { icon: '📚', name: 'IGCSE Curriculum', desc: 'Cambridge-recognized international curriculum' },
              { icon: '👨‍🎓', name: 'Personalized Learning', desc: 'Tailored education journeys for each student' },
              { icon: '🌍', name: 'Global Recognition', desc: 'Qualifications accepted by top universities worldwide' },
              { icon: '💼', name: 'A-Level Pathways', desc: 'Progression to A-Level and Diploma programs' },
              { icon: '🗣️', name: 'English Modules', desc: 'Flexible and effective English learning' },
              { icon: '❤️', name: 'Holistic Growth', desc: 'Mental and physical development focus' },
              { icon: '👥', name: 'Class Leveling', desc: 'Students grouped by level and ability' },
              { icon: '📞', name: '24/7 Support', desc: 'Dedicated parent and student support' },
              { icon: '🎯', name: 'Goal-Oriented', desc: 'Success metrics and progress tracking' },
              { icon: '🏆', name: 'Excellence', desc: 'Committed to academic excellence' },
              { icon: '🤝', name: 'Parent Engagement', desc: 'Bi-annual parent-teacher conferences' }
            ]
          },
          contact: {
            title: 'Contact Us',
            phone: 'Phone',
            email: 'Email',
            address: 'Address',
            social: 'Social Media',
            form: {
              name: 'Your Name',
              email: 'Your Email',
              message: 'Your Message',
              send: 'Send Message'
            }
          },
          rights: 'All rights reserved.'
        },
        zh: {
          hero: {
            title: '欢迎来到阳光学府教育中心 ☀️',
            subtitle: '剑桥IGCSE课程 | 7-18岁 | 马来西亚在线教育卓越之选'
          },
          cta: '立即开始',
          about: {
            title: '关于阳光学府',
            description: '成立于2014年，阳光学府致力于提供高质量的教育，培养学生的独特能力和热情。我们采用国际认可的IGCSE课程大纲，并提供灵活有效的学生中心学习。',
            points: [
              '国际IGCSE课程',
              '全球140多个国家认可',
              '灵活有效的英语学习模块',
              '适合7-18岁学生',
              '根据能力分班',
              '关注身心成长',
              '每年两次家长教师会议'
            ]
          },
          founded: '自2014年起',
          since: '12年卓越教育',
          services: {
            title: '我们的服务',
            list: [
              { icon: '📚', name: 'IGCSE课程', desc: '剑桥认可的国际课程' },
              { icon: '👨‍🎓', name: '个性化学习', desc: '为每个学生定制的教育旅程' },
              { icon: '🌍', name: '全球认可', desc: '资格证书被世界顶尖大学接受' },
              { icon: '💼', name: 'A-Level途径', desc: '升读A-Level和文凭课程' },
              { icon: '🗣️', name: '英语模块', desc: '灵活有效的英语学习' },
              { icon: '❤️', name: '全面发展', desc: '身心发展并重' },
              { icon: '👥', name: '分班学习', desc: '按能力分班' },
              { icon: '📞', name: '全天支持', desc: '专业的学生和家长支持' },
              { icon: '🎯', name: '目标导向', desc: '成功指标和进度追踪' },
              { icon: '🏆', name: '卓越品质', desc: '致力于学术卓越' },
              { icon: '🤝', name: '家长参与', desc: '每年两次家长教师会议' }
            ]
          },
          contact: {
            title: '联系我们',
            phone: '电话',
            email: '邮箱',
            address: '地址',
            social: '社交媒体',
            form: {
              name: '您的姓名',
              email: '您的邮箱',
              message: '您的信息',
              send: '发送信息'
            }
          },
          rights: '版权所有。'
        },
        ms: {
          hero: {
            title: 'Selamat Datang ke Sunrise Education Center ☀️',
            subtitle: 'Kurikulum Cambridge IGCSE | Usia 7-18 Tahun | Homeschooling Cemerlang di Malaysia'
          },
          cta: 'Mulai Sekarang',
          about: {
            title: 'Tentang Sunrise Education',
            description: 'Ditubuhkan pada tahun 2014, Sunrise Education Center berdedikasi untuk memberikan pendidikan berkualitas tinggi yang membangunkan kebolehan unik dan semangat setiap pelajar. Kami mengikuti kurikulum IGCSE yang diiktiraf secara antarabangsa dengan pembelajaran berpusat pada pelajar.',
            points: [
              'Kurikulum IGCSE Antarabangsa',
              'Diiktiraf di 140+ Negara',
              'Modul Pembelajaran Bahasa Inggeris Fleksibel',
              'Pelajar Berusia 7-18 Tahun',
              'Kelas Bertaraf Mengikut Kebolehan',
              'Fokus pada Pertumbuhan Fizikal dan Mental',
              'Mesyuarat Ibu Bapa-Guru Dua Kali Setahun'
            ]
          },
          founded: 'Sejak 2014',
          since: '12 Tahun Kecemerlangan',
          services: {
            title: 'Perkhidmatan Kami',
            list: [
              { icon: '📚', name: 'Kurikulum IGCSE', desc: 'Kurikulum antarabangsa yang diiktiraf Cambridge' },
              { icon: '👨‍🎓', name: 'Pembelajaran Peribadi', desc: 'Perjalanan pendidikan yang disesuaikan untuk setiap pelajar' },
              { icon: '🌍', name: 'Pengiktirafan Global', desc: 'Kelayakan diterima oleh universiti terkemuka dunia' },
              { icon: '💼', name: 'Laluan A-Level', desc: 'Kemajuan ke program A-Level dan Diploma' },
              { icon: '🗣️', name: 'Modul Bahasa Inggeris', desc: 'Pembelajaran Bahasa Inggeris yang fleksibel dan berkesan' },
              { icon: '❤️', name: 'Perkembangan Holistik', desc: 'Fokus pada pertumbuhan mental dan fizikal' },
              { icon: '👥', name: 'Taraf Kelas', desc: 'Pelajar dikumpulkan mengikut tahap dan kebolehan' },
              { icon: '📞', name: 'Sokongan 24/7', desc: 'Sokongan khusus untuk pelajar dan ibu bapa' },
              { icon: '🎯', name: 'Berorientasikan Matlamat', desc: 'Metrik kejayaan dan penjejakan kemajuan' },
              { icon: '🏆', name: 'Kecemerlangan', desc: 'Komitmen terhadap kecemerlangan akademik' },
              { icon: '🤝', name: 'Penglibatan Ibu Bapa', desc: 'Persidangan ibu bapa-guru dua kali setahun' }
            ]
          },
          contact: {
            title: 'Hubungi Kami',
            phone: 'Telefon',
            email: 'Emel',
            address: 'Alamat',
            social: 'Media Sosial',
            form: {
              name: 'Nama Anda',
              email: 'Emel Anda',
              message: 'Mesej Anda',
              send: 'Hantar Mesej'
            }
          },
          rights: 'Semua hak terpelihara.'
        }
      }
    }
  }
}
</script>

<style scoped>
* {
  transition: all 0.3s ease;
}
</style>