# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fully Responsive** - Works seamlessly on all devices
- **Fast Performance** - Built with Vite for optimal loading speed
- **Easy to Customize** - Well-organized component structure

## 🛠️ Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name
   - Add your social media links (GitHub, LinkedIn, Email)

2. **About Section** (`src/components/About.jsx`):
   - Customize your bio and description

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add or modify your skills and proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your projects with:
     - Project title and description
     - Technologies used
     - Live demo link
     - GitHub repository link
     - Project images (replace placeholder URLs)

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address
   - Update social media links

6. **Footer** (`src/components/Footer.jsx`):
   - Update copyright information
   - Update social media links

## 🎨 Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',  // Change this to your preferred color
      secondary: '#1E293B',
    },
  },
}
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

---

Made with ❤️ by Theodore
