# Portfolio Backend

Node.js + Express backend API for the portfolio website.

## Structure

```
src/
├── config/          # Configuration files
├── controllers/     # Request handlers
├── routes/          # API routes
├── services/        # Business logic
├── middleware/      # Express middleware
├── data/            # Static data
└── utils/           # Helper functions
```

## Development

```bash
npm run dev
```

Runs on http://localhost:3001

## Production

```bash
npm start
```

## Environment Variables

Create `.env` file:
```env
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# Email Configuration
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=your-email@gmail.com
```

## API Endpoints

- `GET /api/portfolio` - All portfolio data
- `GET /api/portfolio/*` - Specific sections
- `POST /api/contact` - Contact form
- `GET /api/health` - Health check

## Key Features

- MVC architecture
- Email integration (Nodemailer)
- Error handling middleware
- Request logging
- CORS support
