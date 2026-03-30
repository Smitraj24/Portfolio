# Portfolio Setup Guide

## Backend Setup

The backend now serves all portfolio data through REST API endpoints and handles contact form submissions.

### 1. Install Backend Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `server/.env` with your Gmail credentials:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_TO_EMAIL=your-email@gmail.com
PORT=3001
```

To get a Gmail App Password:
1. Go to https://myaccount.google.com/apppasswords
2. Create a new app password
3. Use that password in the `.env` file

### 3. Start the Backend Server

```bash
npm run dev
```

The API will run at `http://localhost:3001`

## Frontend Setup

### 1. Install Frontend Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

The `.env` file is already created with:

```env
VITE_API_URL=http://localhost:3001
```

### 3. Start the Frontend

```bash
npm run dev:client
```

Or run both frontend and backend together:

```bash
npm run dev
```

## API Endpoints

The backend provides the following endpoints:

### Portfolio Data
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/personal` - Get personal information
- `GET /api/portfolio/hero` - Get hero section data
- `GET /api/portfolio/about` - Get about section data
- `GET /api/portfolio/experience` - Get work experience data
- `GET /api/portfolio/skills` - Get skills data
- `GET /api/portfolio/projects` - Get projects data
- `GET /api/portfolio/contact` - Get contact section data

### Contact Form
- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, message }`
  - Returns: `{ success: true, id: number }`

### Health Check
- `GET /api/health` - Check API status

## Features

### Contact Form
- Real-time form submission to backend
- Email notifications via Gmail SMTP
- Form validation
- Loading states (idle, sending, success, error)
- Auto-reset after submission
- Dynamic content from backend

### Data Management
- All portfolio content served from backend
- Easy to update content in `server/server.js`
- Centralized data management
- API-first architecture

## Development

Run both frontend and backend in development mode:

```bash
npm run dev
```

This uses `concurrently` to run:
- Frontend: `npm run dev:client` (Vite dev server)
- Backend: `npm run dev:server` (Node with --watch flag)

## Production Build

Build the frontend for production:

```bash
npm run build
```

Start the backend in production:

```bash
cd server
npm start
```

## Troubleshooting

### Contact form not sending emails
- Verify Gmail credentials in `server/.env`
- Make sure you're using an App Password, not your regular password
- Check server console for error messages

### API connection errors
- Ensure backend is running on port 3001
- Check `VITE_API_URL` in `.env`
- Verify CORS is enabled in `server/server.js`

### Port already in use
- Change `PORT` in `server/.env`
- Update `VITE_API_URL` in `.env` to match
