# JUATEK Landing Page

A modern, high-conversion landing page for JUATEK - AI-powered predictive maintenance for industrial and medical equipment.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Your Logo

1. Place your JUATEK logo file (PNG, SVG, or JPG) in the `public` folder
2. Update `components/Logo.tsx` to use your logo file:

```tsx
<Image
  src="/logo.png"  // or your logo filename
  alt="JUATEK Logo"
  width={150}
  height={50}
  priority
/>
```

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - React components for each section
- `public/` - Static assets (logo, images)

## Features

- ✅ Responsive, mobile-first design
- ✅ All required sections (Hero, Problem, Solution, How It Works, Benefits, Use Cases, Pilot Program, CTA)
- ✅ Demo booking form
- ✅ SEO-friendly structure
- ✅ Modern, clean design with JUATEK brand colors
- ✅ Fast loading with Next.js optimization

## Customization

- Colors: Edit `tailwind.config.js` to adjust brand colors
- Content: Update component files in `components/` directory
- Styling: Modify Tailwind classes or add custom CSS in `app/globals.css`
