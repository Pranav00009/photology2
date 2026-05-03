# 🚀 PHOTLOGY Website Setup Guide

Quick setup instructions to get your website running.

## ⚡ Quick Start (5 Minutes)

### Step 1: Add Your Images
You need to add these images to `assets/images/` folder:

1. **hero-silhouette.jpg** - Main hero section image
2. **about-image.jpg** - About section image  
3. **portfolio-1.jpg** through **portfolio-6.jpg** - Portfolio thumbnails

**Don't have images yet?** Use placeholder images from:
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos and videos
- Search for: "cinematic photography", "silhouette sunset", "videographer"

### Step 2: Update Instagram Reel Links
Open `index.html` and find the portfolio section (around line 150).

Replace the example URLs with your actual Instagram reel URLs:
```html
<div class="portfolio-item fade-in" data-reel="YOUR_INSTAGRAM_REEL_URL">
```

**Example:**
```html
<div class="portfolio-item fade-in" data-reel="https://www.instagram.com/reel/CxYz123ABC/">
```

### Step 3: Update Contact Information

#### WhatsApp Number
Find this line in `index.html` (around line 280):
```html
<a href="https://wa.me/1234567890" class="contact-btn whatsapp-btn">
```
Replace `1234567890` with your WhatsApp number (include country code, no + or spaces):
```html
<a href="https://wa.me/919876543210" class="contact-btn whatsapp-btn">
```

#### Instagram Handle
Find this line in `index.html` (around line 285):
```html
<a href="https://instagram.com/photlogy" class="contact-btn instagram-btn">
```
Replace `photlogy` with your actual Instagram handle.

### Step 4: Open the Website
Simply open `index.html` in your web browser. That's it!

---

## 🎨 Customization Options

### Change Brand Colors
Edit `style.css` at the top (around line 10):
```css
:root {
    --gold: #D4AF37;        /* Change to your brand color */
    --dark-bg: #0a0a0a;     /* Background color */
}
```

### Update Company Information
Edit these sections in `index.html`:
- Hero section: Main headline and tagline
- Stats section: Update numbers (projects, views, clients, years)
- Services section: Modify service descriptions
- About section: Update company description
- Pricing section: Adjust pricing plans and features

### Add More Portfolio Items
Copy this block in the portfolio section and update:
```html
<div class="portfolio-item fade-in" data-reel="YOUR_REEL_URL">
    <div class="portfolio-overlay">
        <i class="fas fa-play"></i>
        <p>View Reel</p>
    </div>
    <img src="assets/images/portfolio-7.jpg" alt="Portfolio Item 7">
</div>
```

---

## 🌐 Publishing Your Website

### Option 1: Netlify (Recommended - Free & Easy)
1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your `photology` folder
4. Your site is live! Get a free URL like `yoursite.netlify.app`
5. Optional: Connect your custom domain

### Option 2: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages
5. Enable GitHub Pages
6. Your site is live at `username.github.io/repository-name`

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Sign up for free
3. Import your project
4. Deploy with one click

### Option 4: Traditional Web Hosting
1. Get hosting from providers like:
   - Hostinger
   - Bluehost
   - SiteGround
   - GoDaddy
2. Upload files via FTP or cPanel File Manager
3. Point your domain to the hosting

---

## 📱 Testing Checklist

Before going live, test these:

- [ ] All images load correctly
- [ ] Instagram reel links work
- [ ] WhatsApp button opens correctly
- [ ] Instagram button opens correctly
- [ ] Contact form shows alert (or sends email if configured)
- [ ] Navigation menu works on mobile
- [ ] All sections scroll smoothly
- [ ] Website looks good on phone, tablet, and desktop
- [ ] All hover effects work
- [ ] Portfolio items open reels correctly

---

## 🔧 Common Issues & Solutions

### Images Not Showing
**Problem:** Broken image icons appear  
**Solution:** 
- Check file names match exactly (case-sensitive)
- Ensure images are in `assets/images/` folder
- Verify image file extensions (.jpg, .png, etc.)

### Instagram Reels Not Embedding
**Problem:** Reels don't open in modal  
**Solution:**
- Ensure reel URLs are public (not private account)
- Check URL format is correct
- Try opening reel in new tab as fallback

### Mobile Menu Not Working
**Problem:** Hamburger menu doesn't open  
**Solution:**
- Ensure `script.js` is loaded
- Check browser console for errors
- Clear browser cache and reload

### Contact Form Not Sending
**Problem:** Form doesn't send emails  
**Solution:**
- Current setup shows alert only (demo mode)
- To send real emails, you need:
  - Backend service (PHP, Node.js, etc.)
  - Or use services like Formspree, EmailJS, or Netlify Forms

---

## 🎯 Next Steps

### Enhance Your Website
1. **Add Backend for Contact Form**
   - Use Formspree (easiest)
   - Or EmailJS for free email sending
   - Or build custom backend

2. **Add Google Analytics**
   - Track visitor behavior
   - Understand your audience
   - Measure conversions

3. **Improve SEO**
   - Add meta descriptions
   - Create sitemap.xml
   - Submit to Google Search Console
   - Add Open Graph tags for social sharing

4. **Add More Features**
   - Blog section for content marketing
   - Client testimonials slider
   - Video background in hero section
   - Live chat integration
   - Newsletter signup

### Marketing Your Website
1. Share on social media
2. Add link to Instagram bio
3. Include in email signature
4. Create business cards with QR code
5. Run Instagram/Facebook ads
6. Collaborate with influencers
7. Submit to directories

---

## 📞 Need Help?

### Resources
- **HTML/CSS Help:** [MDN Web Docs](https://developer.mozilla.org)
- **JavaScript Help:** [JavaScript.info](https://javascript.info)
- **Design Inspiration:** [Awwwards](https://awwwards.com)
- **Free Images:** [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)
- **Icons:** [Font Awesome](https://fontawesome.com)

### Troubleshooting
1. Check browser console (F12) for errors
2. Validate HTML at [validator.w3.org](https://validator.w3.org)
3. Test on multiple browsers
4. Use mobile device for real mobile testing

---

## ✅ Launch Checklist

Before announcing your website:

- [ ] All content is proofread (no typos)
- [ ] All links work correctly
- [ ] Images are optimized (compressed)
- [ ] Contact information is correct
- [ ] Website works on mobile devices
- [ ] Website works on all major browsers
- [ ] SSL certificate is installed (HTTPS)
- [ ] Google Analytics is set up
- [ ] Favicon is added
- [ ] Social media meta tags are added
- [ ] Website loads fast (under 3 seconds)
- [ ] 404 page is created
- [ ] Privacy policy is added (if collecting data)

---

**🎉 Congratulations! Your premium cinematic website is ready to launch!**

For any questions or custom development needs, contact the PHOTLOGY team.
