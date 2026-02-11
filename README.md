# Smitraj Makvana – Portfolio

Animated full-stack portfolio built with React, Vite, Tailwind CSS, Framer Motion, and a Node/Express API for the contact form.

## Run locally

1. Install dependencies (first time):
   ```bash
   npm install
   cd server && npm install
   ```
2. Configure email for the contact form (optional but recommended):
   ```bash
   cd server
   cp .env.example .env
   # fill SMTP_USER, SMTP_PASS (Gmail app password) and CONTACT_TO_EMAIL
   ```
3. Start both frontend (Vite) and backend (Express) together:
   ```bash
   npm run dev
   ```
   The script runs the frontend at http://localhost:5173 and the API on http://localhost:3001 via the Vite proxy. You no longer need separate terminals.

If the .env is not provided, the contact form still responds but only logs submissions to the server console.

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
