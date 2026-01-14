# Form Setup for Vercel

## Current Setup

The form is set up with an API route at `/app/api/contact/route.ts` that currently logs submissions. The form will fallback to opening an email client if the API fails.

## Vercel Form Options

Vercel doesn't have built-in form handling like Netlify Forms, but here are your options:

### Option 1: Resend (Recommended for Vercel)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install: `npm install resend`
4. Add to `.env.local`: `RESEND_API_KEY=your_key`
5. Uncomment the Resend code in `/app/api/contact/route.ts`

### Option 2: Formspree
- Free tier available
- Just change form action to: `action="https://formspree.io/f/YOUR_FORM_ID"`

### Option 3: FormSubmit
- No backend needed
- Change form action to: `action="https://formsubmit.co/juatekltd@gmail.com"`

### Option 4: SendGrid / Nodemailer
- More setup required
- Good for custom email templates

## Current Contact Info

- Email: juatekltd@gmail.com
- Phone: 0708847933, 0741504911

All "Book Demo" buttons now use mailto links that open the user's email client.
