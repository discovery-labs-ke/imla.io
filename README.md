# Imla.io

Imla is an AI-powered transcription service specialized in handling African accents and languages. Built with Astro, React, and TailwindCSS.

## Features

- 🎯 Accurate transcription for Kenyan English, Swahili, and Sheng
- 🎨 Modern UI with dark/light theme support
- 📱 Responsive design
- 🚀 Fast page loads with view transitions
- 📊 Built-in analytics with PostHog
- 🔍 SEO optimized
- 🗺️ Automatic sitemap generation
- 🐛 Error tracking with Sentry

## Tech Stack

- **Framework:** [Astro](https://astro.build)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Styling:** [TailwindCSS](https://tailwindcss.com)
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon)
- **Forms:** React Hook Form
- **Analytics:** PostHog
- **Error Tracking:** Sentry
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/imla.git
cd imla
```

2. Install dependencies

```bash
pnpm install
```

3. Start the development server

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Project Structure

```
├── src/
│   ├── components/     # UI components
│   ├── content/        # Content collections (blog, FAQs, etc.)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── styles/         # Global styles
│   └── lib/           # Utility functions
├── public/            # Static assets
└── astro.config.mjs   # Astro configuration
```

## Content Management

Content is managed through Astro's content collections:

- `posts/` - Blog posts
- `faqs/` - Frequently asked questions
- `testimonials/` - User testimonials
- `features/` - Product features
- `steps/` - How-it-works steps

## Development

### Linting

```bash
pnpm lint
pnpm lint:fix
```

## Deployment

The site is deployed on Netlify with automatic deployments on main branch updates.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
