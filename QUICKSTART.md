# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 2. Configure Backend (Optional for Development)

If you want email notifications to work:

```bash
cd server
cp .env.example .env
# Edit .env with your Gmail credentials
```

Otherwise, the backend will work without email (messages are logged to console).

### 3. Run the Application

```bash
# Run both frontend and backend together
npm run dev
```

This will start:
- Frontend at `http://localhost:5173`
- Backend at `http://localhost:3001`

## What's New?

Your portfolio now has a full backend API:

- All content (hero, about, skills, projects, contact) is served from the backend
- Contact form sends real emails via Gmail SMTP
- Easy to update content in one place (`server/server.js`)
- API-first architecture for future expansion

## Update Your Content

Edit the `portfolioData` object in `server/server.js` to update:
- Personal information
- Hero section
- About section
- Skills and tools
- Projects
- Contact information

Changes will be reflected immediately on the frontend!

## Troubleshooting

If the frontend can't connect to the backend:
1. Make sure the backend is running (`npm run dev` or `npm run server`)
2. Check that port 3001 is not in use
3. Verify `.env` has `VITE_API_URL=http://localhost:3001`

## Next Steps

- Customize the portfolio data in `server/server.js`
- Set up Gmail SMTP for contact form emails
- Deploy to production (see SETUP.md for details)
