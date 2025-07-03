# Abhay Singh's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Material-UI.

## 🚀 Live Demo

[View the live site here!](https://abhay-singh1100.github.io/MyPortfolio)

## Features & Sections

- 🎨 Modern and clean design
- 📱 Fully responsive
- ✨ Smooth animations and transitions
- 🌙 Dark theme
- 🚀 Fast and optimized performance
- 🎯 Easy navigation via Navbar
- 🏠 Home: Introduction and welcome
- 👨‍💼 About: Education and skills
- 💼 Experience: Work and internship history
- 🛠️ Projects: Project portfolio with tech stack
- 📬 Contact: Contact information
- 🌌 Particle background effect

## Technologies Used

- React
- TypeScript
- Material-UI (MUI)
- Framer Motion
- React Router DOM
- @react-spring/web
- @tsparticles/react & @tsparticles/slim
- Emotion (CSS-in-JS)
- Testing Library (Jest, React Testing Library)

## 🛠️ Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd MyPortfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

- `/src/components` - React components
  - `Home.tsx` - Landing page
  - `About.tsx` - About section (education, skills)
  - `Experience.tsx` - Work experience
  - `Projects.tsx` - Projects showcase
  - `Contact.tsx` - Contact info
  - `Navbar.tsx` - Navigation bar
  - `ParticleBackground.tsx` - Animated background

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## 🚀 Deployment (GitHub Pages)

1. Ensure your `package.json` includes:
   - The `homepage` field:
     ```json
     "homepage": "https://abhay-singh1100.github.io/MyPortfolio"
     ```
   - The following scripts:
     ```json
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
     ```
2. Install the deployment package:
   ```bash
   npm install --save gh-pages
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
4. In your GitHub repository, go to **Settings > Pages** and set the source to the `gh-pages` branch and `/ (root)` folder.
5. Your site will be live at: [https://abhay-singh1100.github.io/MyPortfolio](https://abhay-singh1100.github.io/MyPortfolio)

## 📄 License

MIT License
