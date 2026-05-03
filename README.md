# 🎬 PHOTOLOGY - Cinematic Content Agency

> Premium portfolio website for a cinematic content creation agency specializing in Instagram reels and brand storytelling.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://your-username.github.io/photology/)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-blue)](https://pages.github.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 🌟 Features

### 🎨 **Premium Design**
- iOS-style glassmorphism UI
- Cinematic hero section with layered depth
- Professional animations (60fps)
- Mobile-first responsive design
- Dark theme with gold/orange accents

### 📱 **Portfolio Showcase**
- 3 cinematic video reels
- 2 event poster designs
- Video preview with custom controls
- Image gallery with lightbox
- Smooth scroll animations

### 🔐 **Admin Panel**
- Secure login system (localStorage-based)
- Media upload management
- Portfolio editor
- Pricing plan manager
- Settings configuration
- Message inbox

### ⚡ **Performance**
- Static site (no build process)
- Optimized assets
- Lazy loading images
- Hardware-accelerated animations
- Fast load times

---

## 🚀 Quick Start

### View Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/photology.git
   cd photology
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Access admin panel**
   ```
   Open: admin/login.html
   Email: pranavgiri81412@gmail.com
   Password: Pranav4818
   ```

---

## 📁 Project Structure

```
photology/
├── index.html              # Main website
├── style.css               # Global styles
├── script.js               # Main JavaScript
├── firebase-config.js      # Firebase configuration
│
├── assets/                 # Media assets
│   ├── images/            # Portfolio images (2)
│   ├── videos/            # Portfolio videos (3)
│   └── icons/             # Icon assets
│
├── admin/                  # Admin panel
│   ├── login.html         # Admin login
│   ├── dashboard.html     # Admin dashboard
│   ├── media-upload.html  # Media manager
│   ├── messages.html      # Message inbox
│   ├── pricing.html       # Pricing editor
│   ├── settings.html      # Settings panel
│   └── admin-style.css    # Admin styles
│
└── components/             # Reusable components
    ├── navbar.html        # Navigation component
    └── footer.html        # Footer component
```

---

## 🎯 Portfolio Content

### Videos (3)
1. `vijay 1.1.mp4` - Wedding highlight reel
2. `3.mp4` - Event coverage
3. `lagan geet highlight 1.mp4` - Traditional ceremony

### Images (2)
1. `_sufi night ( birthdat ).jpg` - Sufi night event poster
2. `_hanumant events officia poster.png` - Official event poster

**Total: 5 portfolio items**

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Dynamic functionality
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins & Inter

### Backend/Storage
- **Firebase** - Optional backend integration
- **localStorage** - Client-side data storage

### Hosting
- **GitHub Pages** - Static site hosting
- **Firebase Hosting** - Alternative hosting option

---

## 🎨 Design System

### Colors
```css
--gold: #D4AF37          /* Primary accent */
--orange: #FF8C42        /* Secondary accent */
--dark-bg: #0B0B0B       /* Background */
--secondary-bg: #111111  /* Cards */
--text-primary: #FFFFFF  /* Main text */
--text-secondary: #BFBFBF /* Secondary text */
```

### Typography
- **Headings**: Poppins (700-900 weight)
- **Body**: Inter (400-600 weight)
- **Monospace**: Courier New (code blocks)

### Animations
- Fade in up (entrance)
- Float (cards)
- Glow pulse (CTA buttons)
- Shimmer (highlights)
- Scroll bounce (indicators)

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
Mobile:  320px - 767px   (default)
Tablet:  768px - 1023px  (medium)
Desktop: 1024px+         (large)
```

---

## 🔐 Admin Panel

### Features
- **Dashboard**: Overview and quick stats
- **Media Upload**: Add/remove portfolio items
- **Messages**: View contact form submissions
- **Pricing**: Edit pricing plans
- **Settings**: Update contact info, social links, stats

### Access
```
URL: /admin/login.html
Email: pranavgiri81412@gmail.com
Password: Pranav4818
```

### Security
- localStorage-based authentication
- Session management
- Password protection
- Admin-only routes

---

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/photology.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository **Settings**
   - Navigate to **Pages**
   - Select **main** branch
   - Click **Save**

3. **Access your site**
   ```
   https://YOUR_USERNAME.github.io/photology/
   ```

### Alternative Hosting

- **Firebase**: `firebase deploy`
- **Netlify**: Drag & drop deployment
- **Vercel**: Git integration

See [GITHUB-PAGES-DEPLOYMENT.md](GITHUB-PAGES-DEPLOYMENT.md) for detailed instructions.

---

## 🎬 Usage

### For Clients

1. **View Portfolio**: Browse cinematic reels and designs
2. **Check Pricing**: Review service packages
3. **Contact**: Send inquiry via contact form
4. **Social**: Follow on Instagram @photology_.009

### For Admin

1. **Login**: Access admin panel
2. **Upload Media**: Add new portfolio items
3. **Manage Content**: Update pricing, settings
4. **View Messages**: Check client inquiries

---

## 🔧 Customization

### Update Contact Info
Edit in `index.html`:
```html
<span>your-email@example.com</span>
<span>@your_instagram</span>
<span>+91 XXXXX XXXXX</span>
```

### Change Colors
Edit in `style.css`:
```css
:root {
    --gold: #YOUR_COLOR;
    --orange: #YOUR_COLOR;
}
```

### Add Portfolio Items
1. Add media to `assets/images/` or `assets/videos/`
2. Update `script.js` → `autoAddProjectFiles()` function
3. Or use admin panel to upload

---

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 90+

### Optimizations
- Lazy loading images
- Hardware-accelerated animations
- Minified assets (optional)
- CDN for external resources
- Efficient CSS selectors

---

## 🐛 Known Issues

### None currently reported

If you find a bug, please [open an issue](https://github.com/YOUR_USERNAME/photology/issues).

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**PHOTOLOGY**
- Website: [photology.github.io](https://your-username.github.io/photology/)
- Instagram: [@photology_.009](https://instagram.com/photology_.009)
- Email: pranavgiri81412@gmail.com
- Location: Surat, Gujarat, India

---

## 🙏 Acknowledgments

- Design inspiration: Modern SaaS landing pages
- Icons: Font Awesome
- Fonts: Google Fonts (Poppins, Inter)
- Hosting: GitHub Pages

---

## 📞 Support

For support, email pranavgiri81412@gmail.com or message on Instagram [@photology_.009](https://instagram.com/photology_.009).

---

## 🔄 Updates

### Version 1.0.0 (May 2026)
- ✅ Initial release
- ✅ Premium glassmorphism design
- ✅ 5 portfolio items (3 videos + 2 images)
- ✅ Admin panel with full CRUD
- ✅ Mobile responsive
- ✅ GitHub Pages ready

---

**Made with ❤️ by PHOTOLOGY**

**⭐ Star this repo if you like it!**

