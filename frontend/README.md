# Portfolio Frontend

React + Vite frontend for the portfolio website.

## Structure

```
src/
├── assets/           # Static assets
│   ├── images/      # Images organized by category
│   └── icons/       # Icon files
├── components/      # React components
│   ├── layout/      # Navbar, Footer
│   ├── ui/          # Reusable UI components
│   └── features/    # Feature-specific components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── services/        # API integration
├── constants/       # App constants
└── styles/          # Global styles
```

## Development

```bash
npm run dev
```

Runs on http://localhost:5173

## Build

```bash
npm run build
```

Output: `dist/`

## Environment Variables

Create `.env` file:
```env
VITE_API_URL=http://localhost:3001/api
```

## Key Features

- Custom `useApi` hook for API calls
- Centralized API service layer
- Component-based architecture
- Tailwind CSS styling
- Framer Motion animations
