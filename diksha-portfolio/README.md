# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **Interactive Elements**: 
  - Animated typed text in hero section
  - Skill bars with animation on scroll
  - Hover effects on cards and buttons
  - Form validation and toast notifications
- **Accessibility**: Semantic HTML, proper heading hierarchy, ARIA labels
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Meta tags and structured data

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── SkillCard.tsx
│   ├── resume/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── loading.tsx
├── public/
│   ├── assets/
│   │   └── resume.pdf
│   ├── images/
│   │   └── profile.png
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
└── styles/
    └── globals.css
```

## Pages

1. **Home** (`/`) - Main portfolio page with all sections
2. **Resume** (`/resume`) - Resume download page
3. **404** - Custom 404 page

## Technologies Used

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for icons
- **EmailJS** for contact form
- **React Toastify** for notifications

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel (Recommended)
1. Push your code to a GitHub repository
2. Sign up/login to [Vercel](https://vercel.com)
3. Create a new project and import your repository
4. Vercel will automatically deploy your site

### Other Hosting Platforms
```bash
npm run build
```
Then deploy the `out` folder to your preferred hosting platform.

## Customization

### Updating Content
1. Modify the content in `src/app/page.tsx` for the main page
2. Update contact information in `src/app/page.tsx` (contact section)
3. Add your own projects in `src/app/page.tsx` (projects section)

### Styling
1. Customize colors in `src/app/globals.css`
2. Modify Tailwind theme in `tailwind.config.js`
3. Update animations in component files

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Dependencies

- `next`: React framework
- `react` and `react-dom`: Core React libraries
- `typescript`: Type safety
- `tailwindcss`: Utility-first CSS framework
- `framer-motion`: Animation library
- `react-icons`: Icon library
- `@emailjs/browser`: Email service for contact form
- `react-toastify`: Notification library

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Support

For any issues or questions about customizing this portfolio, please open an issue on the repository.