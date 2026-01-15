# 🌟 Immersive 3D Portfolio - Shashwat Shukla

A world-class, cinematic portfolio website featuring immersive 3D graphics, smooth animations, and modern UI/UX design. Built with Next.js 14+, React Three Fiber, and cutting-edge web technologies.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18+-61dafb?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-Latest-000000?style=for-the-badge&logo=three.js)

## ✨ Features

### 🎨 Design & UX
- **Immersive 3D Background**: Dynamic floating geometries with React Three Fiber
- **Cinematic Scrolling**: Smooth scroll-driven camera movements and parallax effects
- **Micro-interactions**: Hover, scroll, and navigation animations
- **Dark Premium Theme**: Professional, modern aesthetic with intelligent contrast
- **Responsive Design**: Fully optimized for all devices and screen sizes

### ⚡ Performance
- **Next.js App Router**: Latest features with server and client components
- **Dynamic Imports**: Lazy loading for 3D components to optimize initial load
- **Optimized Assets**: Image optimization with Next.js Image component
- **Client-Side Rendering**: 3D canvas rendered only on client for better performance

### 🧩 Technical Stack
- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe development
- **React Three Fiber**: 3D graphics with Three.js in React
- **@react-three/drei**: Useful helpers for R3F
- **Framer Motion**: Smooth UI animations
- **GSAP**: Advanced scroll-driven animations
- **Tailwind CSS**: Utility-first styling with custom configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd theportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
theportfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and utilities
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── CanvasContainer.tsx   # 3D Canvas wrapper
│   │   │   └── Scene.tsx             # 3D scene with geometries
│   │   └── ui/
│   │       ├── Navbar.tsx            # Navigation component
│   │       ├── Hero.tsx              # Hero section
│   │       ├── About.tsx             # About section
│   │       ├── Skills.tsx            # Skills showcase
│   │       ├── Projects.tsx          # Project cards
│   │       ├── Services.tsx          # Services offered
│   │       ├── Contact.tsx           # Contact form
│   │       └── Footer.tsx            # Footer component
│   ├── hooks/
│   │   ├── useScroll.ts              # Scroll tracking hook
│   │   ├── useMouse.ts               # Mouse position hook
│   │   └── useInView.ts              # Intersection observer hook
│   ├── lib/
│   │   └── utils.ts                  # Utility functions
│   └── types/
│       └── index.ts                  # TypeScript type definitions
├── public/
│   └── photo.jpeg                    # Profile photo
├── tailwind.config.ts                # Tailwind configuration
└── tsconfig.json                     # TypeScript configuration
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.ts`:
```typescript
colors: {
  primary: { /* ... */ },
  accent: {
    cyan: '#7dd3fc',
    purple: '#c084fc',
    orange: '#fb923c',
    emerald: '#34d399',
  },
  // ...
}
```

### 3D Scene
Modify the 3D scene in `src/components/canvas/Scene.tsx`:
- Adjust geometry properties
- Change materials and colors
- Add new 3D objects
- Modify camera behavior

### Content
Update your portfolio content in the respective UI components:
- **Hero**: `src/components/ui/Hero.tsx`
- **About**: `src/components/ui/About.tsx`
- **Skills**: `src/components/ui/Skills.tsx`
- **Projects**: `src/components/ui/Projects.tsx`
- **Services**: `src/components/ui/Services.tsx`
- **Contact**: `src/components/ui/Contact.tsx`

## 🎯 Key Features Breakdown

### 1. **3D Background Canvas**
- Floating distorted spheres with smooth animations
- Mouse-reactive camera movements
- Scroll-driven camera transitions
- Performance-optimized with dynamic imports

### 2. **Smooth Animations**
- Framer Motion for UI element animations
- Staggered fade-in effects
- Hover interactions on all interactive elements
- Scroll-triggered animations with IntersectionObserver

### 3. **Responsive Navigation**
- Fixed navbar with scroll-based styling
- Smooth anchor link scrolling
- Mobile-friendly menu (ready for implementation)

### 4. **Project Showcase**
- Animated project cards with gradient overlays
- Tech stack pills
- Detailed contribution lists
- Hover effects and micro-interactions

### 5. **Contact Form**
- Interactive form with validation
- Multiple contact methods
- Email integration ready
- Availability status indicator

## 🔧 Performance Optimizations

- **Code Splitting**: Dynamic imports for 3D components
- **Image Optimization**: Next.js Image component with proper sizing
- **Lazy Loading**: Components load as needed
- **Efficient Rendering**: Proper use of React hooks and memoization
- **SSR Disabled for 3D**: Canvas rendered only on client side
- **Suspense Boundaries**: Loading states for async components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shashwat Shukla**
- Email: shaswatshukla75@gmail.com
- LinkedIn: [Shashwat Shukla](https://www.linkedin.com/in/shaswat-shukla-7b2229191/)
- GitHub: [@Shashwat-ui](https://github.com/Shashwat-ui)

## 🙏 Acknowledgments

- Inspired by immersive web experiences like Penderecki's Garden
- Built with modern web technologies and best practices
- Designed for recruiters, clients, and professional showcasing

---

**Made with ❤️ using Next.js, React Three Fiber, and Framer Motion**

