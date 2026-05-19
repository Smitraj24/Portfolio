# Portfolio Website - Monorepo

Full-stack portfolio website with separate frontend and backend.

## Project Structure

```
portfolio/
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── assets/       # Images and static files
│   │   ├── components/   # React components
│   │   │   ├── layout/   # Navbar, Footer
│   │   │   ├── ui/       # Reusable UI components
│   │   │   └── features/ # Feature-specific components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── services/     # API service layer
│   │   ├── constants/    # App constants
│   │   └── styles/       # Global styles
│   ├── public/           # Public assets
│   └── package.json
│
├── backend/              # Node.js + Express backend
│   ├── src/
│   │   ├── config/       # Configuration files
│   │   ├── controllers/  # Request handlers
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   ├── middleware/   # Express middleware
│   │   ├── data/         # Static data
│   │   └── utils/        # Helper functions
│   ├── server.js         # Entry point
│   └── package.json
│
└── package.json          # Root package.json for scripts
```

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin support

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install all dependencies**
```bash
npm run install:all
```

Or install manually:
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. **Configure environment variables**

**Frontend** (`frontend/.env`):
```env
VITE_API_URL=http://localhost:3001/api
```

**Backend** (`backend/.env`):
```env
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# Email Configuration (Gmail SMTP)
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=your-email@gmail.com
```

### Development

**Run both frontend and backend:**
```bash
npm run dev
```

**Run separately:**
```bash
# Frontend only (from root)
npm run dev:frontend

# Backend only (from root)
npm run dev:backend
```

**Or run from individual folders:**
```bash
# Frontend
cd frontend
npm run dev

# Backend
cd backend
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3001

### Build

```bash
npm run build
```

This builds the frontend for production in `frontend/dist/`

### Production

```bash
# Start backend
npm run start:backend

# Serve frontend build with a static server
cd frontend/dist
npx serve
```

## API Endpoints

### Portfolio Data
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/personal` - Personal information
- `GET /api/portfolio/hero` - Hero section data
- `GET /api/portfolio/about` - About section
- `GET /api/portfolio/experience` - Work experience
- `GET /api/portfolio/skills` - Skills and technologies
- `GET /api/portfolio/projects` - Project showcase
- `GET /api/portfolio/contact` - Contact information

### Contact
- `POST /api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
  }
  ```

### Health Check
- `GET /api/health` - Server health status

## Project Features

### Frontend
- ✅ Responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ Custom React hooks for API calls
- ✅ Centralized API service layer
- ✅ Component-based architecture
- ✅ Clean folder structure

### Backend
- ✅ RESTful API design
- ✅ MVC architecture
- ✅ Email integration with Nodemailer
- ✅ Error handling middleware
- ✅ Request logging
- ✅ CORS configuration
- ✅ Environment-based configuration

## Folder Structure Benefits

### Frontend
- **Scalable** - Easy to add new features
- **Maintainable** - Clear organization
- **Reusable** - Shared components and hooks
- **Testable** - Isolated components

### Backend
- **Modular** - Separated concerns
- **Clean** - MVC pattern
- **Extensible** - Easy to add routes/controllers
- **Professional** - Industry standards

## Development Tips

1. **Frontend Development**
   - Components are in `frontend/src/components/`
   - Use the `useApi` hook for API calls
   - Add new pages in `frontend/src/pages/`
   - Update routes in your router configuration

2. **Backend Development**
   - Add new routes in `backend/src/routes/`
   - Create controllers in `backend/src/controllers/`
   - Business logic goes in `backend/src/services/`
   - Update portfolio data in `backend/src/data/portfolio.data.js`

3. **Styling**
   - Use Tailwind utility classes
   - Global styles in `frontend/src/styles/`
   - Component-specific styles inline or in CSS modules

## Scripts Reference

### Root Level
- `npm run dev` - Run both frontend and backend
- `npm run dev:frontend` - Run frontend only
- `npm run dev:backend` - Run backend only
- `npm run install:all` - Install all dependencies
- `npm run build` - Build frontend for production
- `npm run start:backend` - Start backend in production

### Frontend (`cd frontend`)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend (`cd backend`)
- `npm run dev` - Start with auto-reload
- `npm start` - Start production server

## Environment Variables

### Frontend
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3001/api` |

### Backend
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3001` |
| `NODE_ENV` | Environment | `development` |
| `CORS_ORIGIN` | Allowed origin | `*` |
| `SMTP_USER` | Gmail address | - |
| `SMTP_PASS` | Gmail app password | - |
| `CONTACT_TO_EMAIL` | Recipient email | Same as SMTP_USER |

## Deployment

### Frontend (Vercel/Netlify)
1. Build command: `npm run build`
2. Output directory: `dist`
3. Set environment variable: `VITE_API_URL`

### Backend (Heroku/Railway/Render)
1. Root directory: `backend`
2. Start command: `npm start`
3. Set all backend environment variables

## Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3001 (backend)
npx kill-port 3001

# Kill process on port 5173 (frontend)
npx kill-port 5173
```

**Module not found:**
```bash
# Reinstall dependencies
npm run install:all
```

**CORS errors:**
- Check `CORS_ORIGIN` in backend `.env`
- Ensure frontend URL matches

## License

MIT

## Author

Smitraj Makvana
- GitHub: [@Smitraj24](https://github.com/Smitraj24)
- LinkedIn: [smitrajmakvana](https://www.linkedin.com/in/smitrajmakvana)
