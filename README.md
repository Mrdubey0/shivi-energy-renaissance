# Shivi Energy Solutions — Official Website

> Engineering-Led Execution Systems for the Energy Sector

## Overview

Shivi Energy Solutions (SSES) is a technology-driven oilfield services company delivering engineering-led execution across integrity management, corrosion control, rigless intervention, and operational risk reduction for the global energy industry.

This repository contains the source code for the official Shivi Energy Solutions website at [www.shivienergy.com](https://www.shivienergy.com).

## Key Features

- **Product Catalog** — 55+ engineered products across thru-tubing tools, downhole completions, corrosion prevention, digital oversight, and 3D scanning equipment
- **Service Portfolio** — Comprehensive field services including corrosion management, well integrity, rigless intervention, rig support, and digital/AI solutions
- **Project Showcase** — Real execution outcomes with detailed case studies across ONGC, Oil India, IOCL, and international operators
- **Blog & Insights** — Technical thought leadership on energy operations, corrosion engineering, and digital transformation
- **LOCA–LOCUS Framework** — Proprietary ESG measurement and sustainability scoring system
- **Careers Portal** — Open positions for freshers and experienced professionals
- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **SEO Optimized** — Structured data (JSON-LD), Open Graph, sitemap, and AI/LLM-friendly metadata

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Routing | React Router v6 |
| SEO | react-helmet-async |
| State | React Context (Cart) |
| Data Fetching | TanStack React Query |
| Forms | React Hook Form + Zod |

## Project Structure

```
src/
├── assets/          # Product, service, project, and blog images
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui primitives
│   └── ...          # Feature components (Hero, About, Blog, etc.)
├── context/         # React Context providers
├── data/            # Static data (products, services, projects, blogs, careers)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── pages/           # Route-level page components
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm / pnpm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/shivi-energy/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder, ready for static hosting.

## Deployment

The site is deployed via GitHub Pages using the Jekyll workflow. The `CNAME` file points to `www.shivienergy.com`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Services, About, Footer |
| `/solutions` | Full solutions catalog with categories |
| `/projects` | Execution outcomes and case studies |
| `/projects/:slug` | Individual project detail |
| `/sustainability` | LOCA–LOCUS ESG framework |
| `/blog` | Technical blog articles |
| `/blog/:slug` | Individual blog article |
| `/careers` | Career opportunities (fresher & experienced) |

## Contact

- **Website**: [www.shivienergy.com](https://www.shivienergy.com)
- **Email**: info@shivienergy.com
- **Phone**: +91-99588-08368
- **Address**: 7th Floor, Platina Heights, C12, Sector 62, Noida, UP 201301, India

## License

© 2026 Shivi Energy Solutions Pvt. Ltd. All rights reserved.
