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

## Common Integration Points

### Adding New Sections
1. Create component in `src/components/`
2. Create page wrapper in `src/pages/` that imports the component
3. Add route in [src/App.jsx](src/App.jsx#L28-L34)
4. Add menu item in [src/components/Navbar.jsx](src/components/Navbar.jsx#L13-L18) `menuItems` array

### Theme-Aware Components
Use `useTheme()` hook for dark mode state:
```jsx
import { useTheme } from '../context/ThemeContext'
const { isDark, toggleTheme } = useTheme()
```
CSS classes: `dark:text-gray-300` for dark mode variants (Tailwind's `darkMode: 'class'` config).

### Custom Colors
Primary brand colors defined in [tailwind.config.js](tailwind.config.js):
- **Primary**: Green palette (`#0A693A`, `#0D8347`, `#074D29`) - Main brand color
- **Secondary**: Olive/yellow-green (`#6B7D29`, `#8A9F3D`, `#505E1F`) - Complementary accent
- **Accent Red**: `#CD291F` (with dark variant `#B70E0C`) - Call-to-action elements
- **Accent Gold**: `#D4AF37` - Premium highlights
- **Neutral**: Dark grays (`#0A0F0D`, `#1A1F1D`, `#2A2F2D`) - Backgrounds

Main app background gradient: `from-gray-900 via-gray-800 to-green-900` (defined in `App.jsx`).

## Key Files Reference

- [src/App.jsx](src/App.jsx) - Router setup, AOS initialization, layout structure
- [src/utils/security.js](src/utils/security.js) - **Required** for all form inputs
- [SECURITY.md](SECURITY.md) - Comprehensive security implementation docs
- [ADMIN_SETUP.md](ADMIN_SETUP.md) - Firebase analytics setup instructions
- [tailwind.config.js](tailwind.config.js) - Custom animations, colors, keyframes
- [src/context/ThemeContext.jsx](src/context/ThemeContext.jsx) - Theme state management

## Dependencies Notes
- **React Router DOM 7.13** - Uses newer `<Routes>` API (not `<Switch>`)
- **AOS 2.3** - Import CSS globally in [main.jsx](src/main.jsx#L6): `import 'aos/dist/aos.css'`
- **React Icons 5.0** - Import from category submodules: `react-icons/fa`, `react-icons/md`
- **EmailJS Browser 4.4** - No backend required; client-side email sending
- **Firebase 12.9** - Firestore for analytics, gracefully degrades if not configured
