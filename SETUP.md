# Setup Guide - Rice Mill Machinery Website

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### WhatsApp Number
Update the WhatsApp number in `components/WhatsAppButton.tsx`:
```typescript
const whatsappNumber = "9118002741355"; // Replace with your number
```

### Contact Information
Update contact details in:
- `components/Footer.tsx`
- `components/Contact/ContactPage.tsx`
- `app/layout.tsx` (schema markup)

### Domain/URL
Update domain references in:
- `app/sitemap.ts`
- `app/layout.tsx` (schema markup)
- `app/robots.txt`

### Images
Replace placeholder images with your actual:
- Company logo
- Product photos
- Project gallery images
- Team photos
- Blog featured images

## Features Implemented

✅ **Home Page**
- Hero section with video/image background
- Video section with lightbox
- Process overview timeline
- Solutions grid
- Testimonials slider
- Contact form with validation

✅ **Products**
- Product listing with filters
- Product detail pages
- Category filtering
- Search functionality

✅ **Services**
- Service listing
- Detailed service pages
- Service features and timelines

✅ **About Us**
- Company overview
- Mission & Vision
- Key differentiators
- Leadership team
- Certifications
- Stats counter

✅ **Gallery**
- Filterable image gallery
- Lightbox view
- Category filters

✅ **Contact**
- Contact form
- Office address
- Google Maps integration
- Quick contact buttons

✅ **Blog**
- Blog listing with categories
- Blog post pages
- Author, date, read time

✅ **Additional Features**
- WhatsApp floating button
- Responsive design (mobile-first)
- SEO optimized
- Schema markup
- Sitemap & robots.txt
- 404 page
- Smooth animations (Framer Motion)

## Customization

### Colors
Edit `tailwind.config.ts` to change primary/secondary colors:
```typescript
primary: {
  600: "#389155", // Main brand color
  // ... other shades
}
```

### Fonts
Fonts are configured in `app/layout.tsx`. Currently using:
- Inter (body text)
- Poppins (headings)

### Content
- Products: `components/Products/ProductsListing.tsx`
- Services: `components/Services/ServicesListing.tsx`
- Testimonials: `components/Home/Testimonials.tsx`
- Blog posts: `components/Blog/BlogListing.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Next Steps

1. Replace placeholder images with real photos
2. Add real product data and specifications
3. Connect contact forms to email/CRM
4. Add Google Analytics
5. Set up domain and SSL
6. Add real blog content
7. Test on multiple devices
8. Optimize images (use WebP format)
9. Add more product/service pages
10. Implement CMS for content management (optional)

## Support

For issues or questions, refer to:
- Next.js documentation
- Tailwind CSS documentation
- Framer Motion documentation

