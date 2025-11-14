// ============================================
// FILE: README.md
# HydraLink - Drainage Monitoring System

A Next.js application for monitoring drainage health, scanning waste for recycling, and earning rewards.

## Features

- 🗺️ **Interactive Map**: View drainage points with real-time health indicators
- 📊 **Health Monitoring**: Track water levels, flow rates, and health indexes
- 📱 **Waste Scanner**: Scan plastic waste to calculate earnings
- 🔔 **Alert System**: Get notified about drainage issues near you
- 💰 **Earn Rewards**: Make money by clearing blockages and selling waste

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

## Project Structure

```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Home redirect
├── globals.css             # Global styles
├── login/
│   └── page.tsx           # Login page
└── dashboard/
    ├── layout.tsx         # Dashboard layout with bottom nav
    ├── page.tsx           # Map view (home)
    ├── scan/
    │   └── page.tsx       # Waste scanner
    ├── alerts/
    │   └── page.tsx       # Notifications
    └── profile/
        └── page.tsx       # User profile

components/
├── MapView.tsx            # Interactive map component
└── DrainageDetail.tsx     # Drainage detail modal

lib/
└── data.ts                # Mock data

types/
└── index.ts               # TypeScript types
```

## Authentication

Currently uses localStorage for simple auth. Replace with your preferred auth solution:
- NextAuth.js
- Supabase Auth
- Firebase Auth
- Custom API

## API Integration

Replace mock data in `lib/data.ts` with real API calls:

```typescript
// Example API call
export async function getDrainagePoints() {
  const response = await fetch('/api/drainage-points')
  return response.json()
}
```

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**

## Color Scheme

- Primary: Blue (#3B82F6) to Cyan (#06B6D4)
- Background: Slate 900 (#0F172A)
- Secondary: Slate 800 (#1E293B)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)