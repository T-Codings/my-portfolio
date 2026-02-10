
# Portfolio Codebase Guide for AI Agents

This guide provides actionable, project-specific instructions for AI coding agents working in this React 18 + Vite SPA portfolio. It summarizes the architecture, workflows, and conventions that are unique to this codebase.

## Architecture Overview

- **SPA with React Router:** Each main section (Home, About, Skills, Projects, Contact) is a separate page in `src/pages/`, not a hash-anchored section. Routing is managed in `App.jsx`.
- **Component/Page split:** Reusable UI lives in `src/components/` (e.g., `Hero`, `Navbar`, `Contact`). Pages in `src/pages/` compose these components.
- **ThemeContext:** Dark/light mode is managed via `src/context/ThemeContext.jsx` and persisted in localStorage. Use `useTheme()` for theme-aware logic.
- **AOS Animations:** Initialized globally in `App.jsx` (`AOS.init()`), with CSS imported in `main.jsx`. Use `data-aos` attributes for animation triggers.
- **Firebase Analytics:** Visitor tracking is implemented in `src/utils/visitorTracking.js` and configured in `src/firebaseConfig.js`. Admin dashboard is at `/admin` (`src/pages/AdminDashboard.jsx`).

## Critical Workflows

- **Development:**
  - `npm run dev` — Start Vite dev server (port 5173)
  - `npm run build` — Production build
  - `npm run preview` — Preview production build

- **Contact Form & EmailJS:**
  - EmailJS is used client-side in `src/components/Contact.jsx` (no backend server).
  - Required env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` (see `.env`).
  - All form inputs must be sanitized/validated using helpers from `src/utils/security.js`.
  - Example: `sanitizeInput()` is always called before updating state with user input.

- **Visitor Analytics:**
  - `trackVisitor()` is called on app mount in `App.jsx`.
  - `trackPageView(pageName)` tracks page views.
  - Session IDs are stored in `sessionStorage`.
  - Use `isFirebaseConfigured` before calling tracking functions (see `src/firebaseConfig.js`).
  - Admin dashboard at `/admin` shows analytics in real time.

## Project-Specific Conventions

- **Security-First Input Handling:**
  - Never use raw `e.target.value` in forms. Always sanitize with `sanitizeInput()` from `src/utils/security.js`.
  - Use `validateEmail()`, `validateName()`, `validateMessage()` for field validation.
  - Apply `rateLimit()` (3 submissions/min) for forms.
  - See [src/components/Contact.jsx](src/components/Contact.jsx) for the canonical pattern.

- **Styling & Tailwind:**
  - Custom classes in [src/index.css](src/index.css): `.btn-primary`, `.btn-secondary`, `.section-title`, `.gradient-text`, `.card-hover`.
  - Custom animations in [tailwind.config.js](tailwind.config.js): `animate-fade-in`, `animate-slide-up`, `animate-scale-in`, etc.
  - Use [src/components/AnimatedBackground.jsx](src/components/AnimatedBackground.jsx) for floating code symbol backgrounds.

- **Adding Pages/Components:**
  1. Create UI in `src/components/`
  2. Add a page wrapper in `src/pages/`
  3. Register the route in [src/App.jsx](src/App.jsx)
  4. Add the menu entry in [src/components/Navbar.jsx](src/components/Navbar.jsx)

- **Routing:**
  - Use `<Link to="/path">` (not hash fragments) for navigation.
  - Navbar highlights active page using `useLocation()`.
  - Mobile menu uses a hamburger icon and slide-in drawer.

- **Firebase Security:**
  - Credentials are currently in `src/firebaseConfig.js` (should use `.env` in production; see `ADMIN_SETUP.md`).
  - Always check `isFirebaseConfigured` before tracking.

## Key Files to Inspect

- [src/App.jsx](src/App.jsx) — Routing, analytics wiring, AOS init
- [src/main.jsx](src/main.jsx) — App entry, ThemeProvider, AOS CSS
- [src/utils/security.js](src/utils/security.js) — Input sanitization/validation
- [src/utils/visitorTracking.js](src/utils/visitorTracking.js) — Analytics logic
- [src/components/Contact.jsx](src/components/Contact.jsx) — Canonical form handling
- [src/context/ThemeContext.jsx](src/context/ThemeContext.jsx) — Theming logic
- [src/firebaseConfig.js](src/firebaseConfig.js) — Firebase setup
- [tailwind.config.js](tailwind.config.js), [src/index.css](src/index.css) — Styling utilities

---

If any section is unclear or incomplete, please request clarification or examples. This guide is maintained for AI agent productivity—suggest improvements as needed.
### AnimatedBackground Component

