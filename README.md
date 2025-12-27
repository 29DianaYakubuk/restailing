yf# Premium Remodeling Website

A modern, fully responsive multi-page website for a home remodeling and renovation company. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

### User-Facing Features
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Lead Generation Forms** - Multiple contact forms with real-time validation
- **Interactive Reviews Slider** - Showcase customer testimonials with navigation
- **Service Area Map** - Google Maps integration showing coverage areas
- **Portfolio Gallery** - Display completed projects with category filtering
- **Blog Section** - Share tips, trends, and company updates
- **Financing Information** - Detailed financing options and benefits
- **WhatsApp Integration** - Floating contact button for instant communication

### Admin Features
- **Lead Management Dashboard** - View all submitted leads at `/admin/leads`
- **Export to CSV** - Download leads data for external processing
- **localStorage Persistence** - Leads saved in browser storage
- **Individual Lead Actions** - Delete specific leads or clear all

### Technical Features
- **Form Validation** - Using `react-hook-form` + `zod` for robust validation
- **API Routes** - RESTful endpoints for lead submission
- **SEO Optimized** - Meta tags and Open Graph for all pages
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Type Safety** - Full TypeScript implementation
- **Modern CSS** - Tailwind CSS with custom configuration

##  Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Maps:** Google Maps iframe
- **Package Manager:** npm

## Project Structure

```
restailing/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── admin/leads/         # Admin dashboard
│   ├── api/lead/            # API route for lead submission
│   ├── blog/                # Blog page
│   ├── contact/             # Contact page
│   ├── financing/           # Financing information page
│   ├── portfolio/           # Portfolio gallery
│   ├── services/            # Services listing
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with header/footer
│   └── page.tsx             # Home page
├── components/
│   ├── home/                # Home page sections
│   │   ├── AboutSection.tsx
│   │   ├── GetEstimateSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ReviewsSlider.tsx
│   │   ├── ServiceAreaMap.tsx
│   │   └── StatsGrid.tsx
│   ├── layout/              # Layout components
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── shared/              # Reusable components
│       ├── FloatingWhatsAppButton.tsx
│       └── LeadForm.tsx
├── data/                    # Mock data
│   ├── locations.ts         # Service area cities
│   ├── reviews.ts           # Customer testimonials
│   └── services.ts          # Service offerings
├── lib/
│   ├── utils.ts             # Utility functions
│   └── validations/
│       └── leadForm.ts      # Form validation schema
├── types/
│   └── index.ts             # TypeScript type definitions
└── public/                  # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/restailing.git
cd restailing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Usage

### Lead Form

The lead form is a reusable component that can be placed anywhere:

```tsx
import LeadForm from '@/components/shared/LeadForm';

<LeadForm
  variant="default"
  title="Get a Free Estimate"
  subtitle="We'll contact you within 24 hours"
/>
```

### Form Fields & Validation

All fields are validated using Zod:

- **First Name** - Minimum 2 characters
- **Last Name** - Minimum 2 characters
- **Email** - Valid email format
- **Phone** - Minimum 10 digits, phone format
- **Address** - Minimum 5 characters
- **ZIP Code** - 5-digit US ZIP code format
- **Budget** - Select from predefined ranges
- **Start Date** - Date picker
- **Service** - Select from available services
- **Description** - Optional, max 180 characters

## 🔌 API Routes

### POST /api/lead

Submit a new lead.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "555-123-4567",
  "address": "123 Main St",
  "postalCode": "33301",
  "budget": "25k-50k",
  "startDate": "2025-01-15",
  "service": "kitchen-remodeling",
  "description": "Looking to remodel my kitchen"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "1234567890",
    "createdAt": "2025-12-26T22:26:53.333Z",
    // ... form data
  },
  "message": "Lead submitted successfully"
}
```

### GET /api/lead

Retrieve all leads (server-side only).

**Response (200):**
```json
{
  "success": true,
  "leads": [...],
  "count": 5
}
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```ts
colors: {
  primary: {
    // Your primary brand color
  },
  secondary: {
    // Your secondary brand color
  }
}
```

### Content

- **Services:** Edit `data/services.ts`
- **Reviews:** Edit `data/reviews.ts`
- **Locations:** Edit `data/locations.ts`
- **Contact Info:** Update in `components/layout/Footer.tsx` and `components/layout/Header.tsx`

### Google Maps

Update the map center coordinates in `data/locations.ts`:

```ts
export const mapCenter = {
  lat: 26.1224,  // Your latitude
  lng: -80.1373, // Your longitude
  zoom: 10,
};
```

##  Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, about, reviews, map, and estimate sections |
| `/about` | Company history, values, and team information |
| `/services` | Complete list of services offered |
| `/portfolio` | Gallery of completed projects |
| `/blog` | Blog posts and articles |
| `/financing` | Financing options and benefits |
| `/contact` | Contact form and business information |
| `/admin/leads` | Admin dashboard to manage submitted leads |

##  Admin Panel

Access the admin panel at `/admin/leads` to:

- View all submitted leads
- Export leads to CSV
- Delete individual leads
- Clear all leads

**Note:** In production, you should add authentication to protect this route.

##  Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/restailing)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

### Other Platforms

This is a standard Next.js app and can be deployed to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)
- Any Node.js hosting provider

##  Future Enhancements

Potential features to add:

- [ ] Database integration (PostgreSQL/MongoDB) for lead storage
- [ ] Email notifications on form submission
- [ ] Authentication for admin panel
- [ ] Image upload for portfolio projects
- [ ] CMS integration (Sanity/Contentful)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support (i18n)
- [ ] Real-time chat integration
- [ ] Automated email responses
- [ ] Payment processing integration

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Contributing

Contributions, issues, and feature requests are welcome!

