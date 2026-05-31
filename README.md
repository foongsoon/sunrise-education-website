# 🌅 Sunrise Education - Professional Homeschool Website

> **"Where Learning Meets Joy"** - A modern, international homeschooling platform with Cambridge IGCSE curriculum for ages 7-18

## 📋 Overview

Sunrise Education is a professional, modern website designed for an international homeschooling provider in Malaysia. The site showcases Cambridge IGCSE educational curriculum with a focus on child-centered learning and genuine care for student well-being.

### ✨ Key Features

- **🌐 Multi-Language Support**: English, 中文 (Chinese), Bahasa Melayu
- **📱 Mobile-First Responsive Design**: Optimized for all devices
- **🎨 Modern Professional Design**: Warm, welcoming aesthetic with brand identity
- **♿ Accessibility**: WCAG compliant with semantic HTML
- **⚡ Performance Optimized**: Fast loading, smooth animations
- **🎯 SEO Ready**: Proper meta tags and structure
- **📞 Direct Contact Integration**: WhatsApp, Email, Phone, AI Assistant

---

## 📂 Project Structure

```
sunrise-education-website/
├── index.html              # Main HTML file with all sections
├── styles.css              # Comprehensive responsive stylesheet
├── translations.js         # Multi-language translation system
├── script.js               # JavaScript interactivity & functionality
├── README.md               # This file
└── public/                 # Static assets (if needed)
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies required - pure HTML/CSS/JavaScript

### Installation & Deployment

#### Option 1: GitHub Pages (Recommended)
1. Repository is already set up at: `https://github.com/Amtb-Organization/sunrise-education-website`
2. Enable GitHub Pages in repository settings
3. Site will be available at: `https://Amtb-Organization.github.io/sunrise-education-website/`

#### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/Amtb-Organization/sunrise-education-website.git

# Navigate to directory
cd sunrise-education-website

# Open in browser
open index.html
# or
start index.html
```

#### Option 3: Web Hosting
1. Upload all files to your web hosting provider
2. Set `index.html` as the default file
3. Access via your domain

---

## 🌍 Multi-Language System

### Supported Languages
- **English** (Default) 🇬🇧
- **中文 / Chinese** 🇨🇳
- **Bahasa Melayu** 🇲🇾

### How It Works
1. **Auto-Detection**: Automatically detects user's browser language
2. **Manual Toggle**: Users can switch languages via dropdown menu
3. **Persistence**: Saves language preference in localStorage
4. **Complete Translation**: All content translates dynamically

### Adding New Language
Edit `translations.js`:
```javascript
zh_tw: {
    nav_home: 'Your translation here',
    // ... more translations
}
```

---

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (optimized grid)
- **Mobile**: Below 768px (single column, touch-friendly)
- **Small Mobile**: Below 480px (minimal layout)

### Mobile-First Features
- Touch-friendly buttons and navigation
- Readable font sizes
- Optimized images
- Hamburger menu for navigation
- Simplified forms

---

## 🎨 Design System

### Color Palette
- **Primary**: `#FF6B6B` (Coral Red - Warmth & Care)
- **Primary Dark**: `#E63946` (Hover state)
- **Primary Light**: `#FFE5E5` (Background tint)
- **Secondary**: `#4ECDC4` (Teal - Growth)
- **Accent**: `#FFD93D` (Yellow - Joy)
- **Text Dark**: `#2C3E50` (Professional)
- **Text Light**: `#7F8C8D` (Secondary)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, 1.6 line-height

---

## 📋 Page Sections

### 1. **Navigation Bar** (`navbar`)
- Sticky header with logo and menu
- Language toggle dropdown
- Mobile hamburger menu
- Smooth scrolling links

### 2. **Hero Section** (`#home`)
- Compelling headline: "Where Learning Meets Joy"
- Call-to-action buttons
- Statistics (Age Range, Curriculum, Location)
- Animated sun icon

### 3. **About Us** (`#about`)
- Company introduction
- Mission and Vision statements
- Key highlights (Care, Global Standards, Happiness)
- Placeholder for school image

### 4. **Curriculum** (`#curriculum`)
- What is IGCSE explanation
- Key benefits and global recognition
- Subject offerings by category
- Age-based structure (Primary, Secondary Lower/Upper)

### 5. **Why Choose Us** (`#why-us`)
- 6 compelling reasons:
  1. Genuine Care & Support
  2. Expert Educators
  3. Flexible Homeschooling
  4. International Curriculum
  5. Holistic Development
  6. Proven Results

### 6. **Contact** (`#contact`)
- Contact information (all methods)
- Contact form with validation
- Embedded Google Map
- Social media links

### 7. **Footer**
- Quick navigation links
- Contact information
- Social media icons
- Copyright notice

---

## 📞 Contact Information

### Direct Contact
- **Phone/WhatsApp**: +60 12-425 1556
- **Email**: LOVE@sun.edu.my
- **Location**: No. 25-2nd Floor, Jalan Mahogani 5/Ks7, 41200 Klang, Selangor, Malaysia
- **AI Assistant**: ai.sun.edu.my
- **Instagram**: instagram.com/sunrisecenters/
- **Facebook**: facebook.com/SunriseResourceCentre

### Google Maps
- **Coordinates**: 2.996279, 101.445392
- **Embedded Map**: Included in contact section

---

## ⚙️ JavaScript Features

### Core Functionality
1. **Mobile Menu Toggle**: Hamburger menu on mobile devices
2. **Language System**: Dynamic translation switching
3. **Smooth Scrolling**: Navigation links with smooth animation
4. **Contact Form**: Form validation and email submission
5. **Scroll Animations**: Fade-in effects on scroll
6. **Navbar Effects**: Dynamic shadow on scroll
7. **Scroll-to-Top Button**: Floating button at bottom-right
8. **Accessibility**: Skip links, ARIA labels

### Event Listeners
- Menu toggle
- Language selection
- Form submission
- Scroll events
- Link clicks
- Window resize

---

## 🔍 SEO Optimization

### Meta Tags
```html
<meta name="description" content="...">
<meta name="keywords" content="homeschool, IGCSE, Cambridge, ...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
```

### Best Practices Implemented
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ Structured data ready
- ✅ Clear call-to-actions

---

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of `<section>`, `<nav>`, `<article>`
- **ARIA Labels**: `aria-label` on interactive elements
- **Skip Links**: Jump to main content
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Color Contrast**: WCAG AA compliant
- **Form Labels**: Proper label-input associations
- **Language Declaration**: `lang` attribute on HTML

---

## 🎯 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| Opera | ✅ Latest version |
| IE 11 | ⚠️ Limited support |

---

## 📈 Performance

### Optimization Techniques
- **CSS**: Minified, efficient selectors
- **JavaScript**: Vanilla JS (no dependencies)
- **Images**: Optimized file sizes
- **Fonts**: System fonts (no external dependencies)
- **Caching**: Browser caching enabled
- **Lazy Loading**: Images load on demand

### Performance Metrics Target
- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

## 🔐 Security

- **HTTPS Ready**: Works with SSL certificates
- **No External CDN**: All resources self-hosted or via CDN
- **Form Validation**: Client-side validation
- **Safe Links**: All external links have `rel="noopener noreferrer"`
- **XSS Prevention**: No inline scripts

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Desktop view (1920px, 1440px, 1024px)
- [ ] Tablet view (768px, 812px)
- [ ] Mobile view (375px, 414px)
- [ ] Language switching (EN, ZH, MS)
- [ ] Contact form submission
- [ ] All navigation links
- [ ] Mobile menu toggle
- [ ] Responsive images
- [ ] Form validation
- [ ] Scroll animations

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 📝 Customization Guide

### Change School Information
Edit `index.html`:
```html
<!-- Update phone number -->
<a href="tel:+60124251556">+60 12-425 1556</a>

<!-- Update email -->
<a href="mailto:LOVE@sun.edu.my">LOVE@sun.edu.my</a>

<!-- Update address -->
<p>No. 25-2nd Floor, Jalan Mahogani 5/Ks7, 41200 Klang, Selangor, Malaysia</p>
```

### Change Colors
Edit `styles.css`:
```css
:root {
    --primary-color: #FF6B6B;
    --primary-dark: #E63946;
    /* ... other colors ... */
}
```

### Update Translations
Edit `translations.js`:
```javascript
const translations = {
    en: {
        nav_home: 'Home',
        // ... more translations
    }
}
```

### Add New Sections
1. Add HTML in `index.html`
2. Add CSS classes in `styles.css`
3. Add translations in `translations.js` if needed
4. Add JavaScript in `script.js` if interaction needed

---

## 🚀 Deployment Checklist

- [ ] All links tested and working
- [ ] All language translations verified
- [ ] Contact form tested
- [ ] Images optimized
- [ ] Meta tags updated
- [ ] Google Analytics added (optional)
- [ ] SSL certificate configured
- [ ] Domain connected
- [ ] Cache headers set
- [ ] Robots.txt created
- [ ] Sitemap.xml generated
- [ ] Mobile-friendliness verified

---

## 📊 Maintenance

### Regular Updates
- **Monthly**: Check for broken links
- **Quarterly**: Update content and testimonials
- **Yearly**: Security audits, performance review
- **As Needed**: Add new features, fix bugs

### Monitoring
- Set up Google Analytics
- Monitor page load times
- Track user engagement
- Monitor contact form submissions
- Check for JavaScript errors

---

## 🤝 Contributing

To suggest improvements or report issues:
1. Create an issue in the GitHub repository
2. Describe the problem or suggestion
3. Include screenshots if applicable
4. Submit for review

---

## 📄 License

© 2024 Sunrise Education. All rights reserved.

---

## 👥 Credits

**Website Created**: May 31, 2026
**Developer**: Chen Foong (foongsoon)
**Organization**: Amtb-Organization

---

## 📞 Support

For technical support or questions about the website:
- **Email**: LOVE@sun.edu.my
- **Phone**: +60 12-425 1556
- **GitHub Issues**: Report bugs and request features

---

## 🎯 Mission Statement

**"We truly care about your child's growth and happiness"**

Sunrise Education is committed to providing world-class Cambridge IGCSE education that develops confident, compassionate, and capable learners prepared for global success.

---

## 📚 Resources

- [Cambridge International](https://www.cambridgeinternational.org/)
- [IGCSE Information](https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/)
- [Web Accessibility](https://www.w3.org/WAI/)
- [SEO Best Practices](https://developers.google.com/search)

---

**Last Updated**: May 31, 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready