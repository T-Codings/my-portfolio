# Portfolio Codebase Guide for AI Agents

## Architecture Overview

This is a **React 18 + Vite SPA portfolio** with client-side routing, security-focused design, and Firebase-powered analytics. Key architectural decisions:

- **Multi-page routing via React Router**: Each section (Home, About, Skills, Projects, Contact) is a separate page under `src/pages/`, not hash-anchored sections
- **Component + Page separation**: `src/components/` contains reusable UI (Hero, Navbar, Contact), while `src/pages/` wraps them into full page views (e.g., `Home.jsx` imports `Hero.jsx`)
- **Context-based theming**: Dark/light mode managed via `src/context/ThemeContext.jsx` with localStorage persistence. ThemeProvider wraps entire app in `main.jsx`
- **AOS animations**: Initialized globally in `App.jsx` with `AOS.init()` - affects all components with `data-aos` attributes. CSS imported in `main.jsx` via `import 'aos/dist/aos.css'`
- **Firebase Analytics**: Visitor tracking via Firestore with admin dashboard at `/admin` route

## Critical Workflows

### Development Commands
```bash
npm run dev     # Starts Vite dev server on port 5173
npm run build   # Production build
npm run preview # Preview production build
```

### EmailJS Integration
Contact form uses **EmailJS** (not a backend server). Environment variables required in `.env`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
Form submission in [src/components/Contact.jsx](src/components/Contact.jsx) calls `emailjs.send()` directly.

### Firebase Analytics & Admin Dashboard
**Location**: `src/firebaseConfig.js`, `src/utils/visitorTracking.js`, `src/pages/AdminDashboard.jsx`

Firestore-based visitor tracking system:
- `trackVisitor()` - Called on app mount in `App.jsx`, tracks user agent, platform, screen resolution, referrer
- `trackPageView(pageName)` - Track individual page views
- Session IDs stored in `sessionStorage` to identify unique visitors
- Admin dashboard at `/admin` route displays real-time analytics (total/today visitors, page views, unique sessions)
- **SECURITY NOTE**: Firebase credentials are currently hardcoded in `firebaseConfig.js` - should use `.env` variables in production:
  ```env
  VITE_FIREBASE_API_KEY=your_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_domain
  VITE_FIREBASE_PROJECT_ID=your_project_id
  # ... (see ADMIN_SETUP.md)
  ```
- Check `isFirebaseConfigured` flag before calling tracking functions (graceful degradation if Firebase isn't set up)

## Project-Specific Conventions

### Security-First Form Handling
All user inputs **must** use utilities from [src/utils/security.js](src/utils/security.js):
- `sanitizeInput()` - Strips HTML tags, `javascript:` protocols, event handlers
- `validateEmail()`, `validateName()`, `validateMessage()` - Field-specific validation
- `rateLimit()` - localStorage-based rate limiting (3 submissions/min)

Example pattern from [Contact.jsx](src/components/Contact.jsx#L28-L36):
```jsx
const handleChange = (e) => {
  const sanitizedValue = sanitizeInput(e.target.value)
  setFormData({ ...formData, [name]: sanitizedValue })
}
```
**Never accept raw `e.target.value` without sanitization.**

### Tailwind Custom Utilities
Custom classes in [src/index.css](src/index.css):
- `.btn-primary` - Gradient button (green to olive) with hover lift effect (`hover:-translate-y-1`)
- `.btn-secondary` - Outline button with white background, green border, transforms on hover
- `.section-title` / `.section-subtitle` - Consistent heading styles (4xl/5xl and lg/xl respectively)
- `.gradient-text` - Multi-color gradient text effect using bg-clip-text
- `.card-hover` - Reusable hover effect with shadow and lift

Custom animations in [tailwind.config.js](tailwind.config.js):
- `animate-fade-in`, `animate-slide-up`, `animate-scale-in` - Used for page transitions
- `animate-pulse-slow`, `animate-bounce-slow` - Background decorative elements

### AnimatedBackground Component
[src/components/AnimatedBackground.jsx](src/components/AnimatedBackground.jsx) renders floating code symbols (`{ }`, `< />`, etc.). CSS animations defined in [src/index.css](src/index.css) via `.running-object-{1-6}` classes with `@keyframes moveAcross` and `moveAcrossReverse`. Use this component for visual consistency on Hero/Contact pages.

### Routing Structure
```
/ → Home.jsx → Hero + Testimonials components
/about → AboutPage.jsx → About component
/skills → SkillsPage.jsx → Skills component
/projects → ProjectsPage.jsx → Projects component
/contact → ContactPage.jsx → Contact component
```
Navbar uses `useLocation()` to highlight active page. Links use `<Link to="/path">` (not hash fragments). Mobile menu uses hamburger icon with slide-in drawer on smaller screens.
# Portfolio Codebase Guide for AI Agents

This project is a React 18 + Vite SPA with client-side routing and lightweight Firebase analytics. Below are the concise, actionable patterns an AI coding agent should follow to be productive.

- **Architecture (big picture):** routes are page wrappers in [src/pages](src/pages) (e.g., `Home.jsx`) that import reusable UI from [src/components](src/components). The app uses `ThemeContext` (`src/context/ThemeContext.jsx`) for dark/light mode and initializes AOS in [src/App.jsx](src/App.jsx).

- **Local dev & build:** `npm run dev`, `npm run build`, `npm run preview`.

- **Forms & security:** All user inputs must be sanitized/validated using [src/utils/security.js](src/utils/security.js). Key helpers: `sanitizeInput()`, `validateEmail()`, `validateName()`, `validateMessage()`, and `rateLimit()` (3 submissions/min). See input handling pattern in [src/components/Contact.jsx](src/components/Contact.jsx).

- **Email sending:** Contact form uses EmailJS client-side (`src/components/Contact.jsx`). Required env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.

- **Visitor tracking / analytics:** Tracking lives in [src/utils/visitorTracking.js](src/utils/visitorTracking.js) and is wired from `App.jsx` (calls `trackVisitor()` on mount). Admin UI: [src/pages/AdminDashboard.jsx](src/pages/AdminDashboard.jsx). Note: `src/firebaseConfig.js` currently exposes credentials—prefer `.env` via `VITE_FIREBASE_*` in production and use the `isFirebaseConfigured` guard before tracking.

- **Styling & utilities:** Tailwind + custom utilities are in [src/index.css](src/index.css) and [tailwind.config.js](tailwind.config.js). Reusable classes: `.btn-primary`, `.btn-secondary`, `.section-title`, `.gradient-text`, `.card-hover`. Animated background component: [src/components/AnimatedBackground.jsx](src/components/AnimatedBackground.jsx).

- **Adding pages/components:** Create UI in `src/components/`, add a page wrapper in `src/pages/`, register the route in [src/App.jsx](src/App.jsx), and add the menu entry in [src/components/Navbar.jsx](src/components/Navbar.jsx).

- **Key files to inspect first:** [src/App.jsx](src/App.jsx), [src/main.jsx](src/main.jsx), [src/utils/security.js](src/utils/security.js), [src/utils/visitorTracking.js](src/utils/visitorTracking.js), [src/components/Contact.jsx](src/components/Contact.jsx), [src/context/ThemeContext.jsx](src/context/ThemeContext.jsx), [src/firebaseConfig.js](src/firebaseConfig.js), [tailwind.config.js](tailwind.config.js).

- **Patterns to preserve:**
  - Never use raw `e.target.value` in forms; always run `sanitizeInput()`.
  - Use `useTheme()` from `ThemeContext` for theme-aware rendering.
  - Prefer client-side EmailJS usage as implemented; do not introduce a new backend without updating README/ADMIN_SETUP.md.

Please review this condensed guide and tell me if you want additional examples, expanded security notes, or automated checks (lint/test) added.

