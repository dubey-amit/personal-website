# Personal Website

A modern, responsive personal website built to showcase projects and skills.

## Tech Stack

- **Framework**: Next.js 15.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime**: React 19
- **Icons**: React Icons
- **Deployment**: Netlify
- **Package Manager**: npm
- **Analytics**: Google Analytics

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Analytics Setup

This website includes Google Analytics tracking. To set it up:

1. Create a Google Analytics account and property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Replace `G-XXXXXXXXXX` with your actual Measurement ID
5. Restart your development server

The analytics will automatically track page views and user interactions.

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

Built with ❤️ using Next.js and Tailwind CSS 