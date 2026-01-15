# 🎨 Design & Implementation Guide

## Color Palette

### Primary Colors
- **Dark Background**: `#0a0a0f` (Rich black)
- **Dark Surface**: `#13131a` (Elevated black)
- **Dark Elevated**: `#1a1a24` (Card backgrounds)
- **Dark Border**: `#2a2a38` (Subtle borders)

### Accent Colors
- **Cyan**: `#7dd3fc` (Primary accent, energy, tech)
- **Purple**: `#c084fc` (Secondary accent, creativity)
- **Orange**: `#fb923c` (Warmth, call-to-action)
- **Emerald**: `#34d399` (Success, growth)

### Typography
- **Font Family**: Geist Sans (Variable font)
- **Mono Font**: Geist Mono (Code blocks)
- **Weights**: 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## Animation Strategy

### Entry Animations
1. **Fade + Slide Up**: Initial page load elements
2. **Stagger Effect**: Sequential animations for lists
3. **Scale + Fade**: Cards and interactive elements

### Interaction Animations
- **Hover Scale**: 1.02-1.1 range for subtle lift
- **Smooth Transitions**: 0.3-0.6s duration
- **Easing**: `ease-out` for entrances, `ease-in-out` for interactions

### Scroll Animations
- **3D Camera Movement**: Z-axis movement based on scroll progress
- **Parallax Elements**: Different scroll speeds for depth
- **Fade Triggers**: IntersectionObserver at 0.1-0.2 threshold

## Component Architecture

### Layout Hierarchy
```
RootLayout (layout.tsx)
  └── HomePage (page.tsx)
      ├── CanvasContainer (3D Background)
      ├── Navbar (Fixed)
      └── Main Content
          ├── Hero
          ├── About
          ├── Skills
          ├── Projects
          ├── Services
          ├── Contact
          └── Footer
```

### State Management
- **Local State**: useState for component-specific state
- **Custom Hooks**: Shared logic (scroll, mouse, inView)
- **No Global State**: Portfolio doesn't need Redux/Context

## 3D Scene Details

### Geometries
1. **Main Sphere**
   - Size: 1 unit
   - Color: Cyan (#7dd3fc)
   - Distortion: 0.4
   - Position: Center (0, 0, 0)

2. **Secondary Sphere**
   - Size: 0.6 units
   - Color: Purple (#c084fc)
   - Distortion: 0.3
   - Position: Left-top (-3, 2, -2)

3. **Tertiary Sphere**
   - Size: 0.5 units
   - Color: Emerald (#34d399)
   - Distortion: 0.35
   - Position: Right-bottom (3, -1.5, -1)

### Camera Settings
- **FOV**: 45 degrees
- **Initial Position**: (0, 0, 8)
- **Scroll Movement**: Z: 8 → 5, Y: 0 → 2
- **Mouse Influence**: 0.05 dampening factor

### Lighting
- **Ambient**: 0.5 intensity, white
- **Directional 1**: (10, 10, 5), 1.0 intensity
- **Directional 2**: (-10, -10, -5), 0.5 intensity, purple tint
- **Point Light**: (0, 0, 5), cyan color

## Responsive Breakpoints

```css
/* Mobile First Approach */
sm:  640px   /* Small devices */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */
```

### Component Adaptations

#### Navbar
- **Mobile**: Hamburger menu, single column
- **Desktop**: Horizontal navigation, inline links

#### Hero
- **Mobile**: 
  - Font: 3xl-5xl
  - Padding: Reduced vertical spacing
  - Stack CTA buttons vertically
- **Desktop**:
  - Font: 7xl-8xl
  - Full horizontal layout
  - Inline CTA buttons

#### Skills Grid
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns
- **Large**: 4 columns

## Performance Best Practices

### Code Splitting
```tsx
// Dynamic import for 3D components
const CanvasContainer = dynamic(
  () => import('@/components/canvas/CanvasContainer'),
  { ssr: false }
);
```

### Image Optimization
```tsx
<Image
  src="/photo.jpeg"
  alt="Shashwat Shukla"
  width={500}
  height={500}
  priority // For above-fold images
/>
```

### Lazy Loading
- Components: Use React.lazy() for route-based splitting
- Images: Next/Image handles automatically
- 3D: Suspense boundaries for graceful loading

## SEO Optimization

### Metadata
```tsx
export const metadata: Metadata = {
  title: "Shashwat Shukla | Frontend Developer",
  description: "Professional Frontend Developer...",
  keywords: "Frontend Developer, React, Next.js...",
  openGraph: { /* ... */ }
};
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Section elements for content blocks
- Nav, Header, Footer, Main tags
- Alt text for all images

### Accessibility
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states on all focusable elements
- Sufficient color contrast (WCAG AA)

## Deployment Checklist

### Pre-deployment
- [ ] Run `npm run build` successfully
- [ ] Test production build locally
- [ ] Verify all images load correctly
- [ ] Check all links work
- [ ] Test on multiple devices
- [ ] Validate accessibility
- [ ] Check console for errors

### Environment Variables
Create `.env.local` for sensitive data:
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### Vercel Deployment
1. Push to GitHub
2. Connect Vercel to repository
3. Configure build settings
4. Deploy

### Performance Targets
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Largest Contentful Paint: < 2.5s

## Customization Guide

### Changing Colors
1. Update `tailwind.config.ts`
2. Modify accent colors in Scene.tsx
3. Update CSS variables in globals.css

### Adding Projects
Edit `src/components/ui/Projects.tsx`:
```tsx
const projects = [
  {
    title: "Your Project",
    role: "Your Role",
    tech: ["Tech", "Stack"],
    description: "Description",
    contributions: ["Point 1", "Point 2"],
    status: "Status",
    gradient: "from-cyan-500 to-blue-500",
  },
  // Add more...
];
```

### Modifying 3D Scene
Edit `src/components/canvas/Scene.tsx`:
- Add new geometries in FloatingGeometry component
- Adjust camera behavior in CameraController
- Change lighting setup

## Troubleshooting

### Common Issues

**Issue**: 3D canvas not showing
**Solution**: Check that dynamic import has `ssr: false`

**Issue**: Images not loading
**Solution**: Ensure images are in `/public` folder

**Issue**: Slow performance
**Solution**: 
- Reduce geometry complexity
- Lower distortion values
- Disable heavy effects on mobile

**Issue**: TypeScript errors
**Solution**: Check path aliases in tsconfig.json

## Future Enhancements

### Suggested Features
1. **Blog Section**: Add MDX support for blog posts
2. **Dark/Light Toggle**: Theme switcher
3. **Internationalization**: Multi-language support
4. **Analytics**: Google Analytics or Plausible
5. **CMS Integration**: Sanity or Contentful
6. **Mobile Menu**: Full hamburger menu implementation
7. **Loading Screen**: Custom loading animation
8. **Cursor Effects**: Custom cursor follower
9. **Sound Design**: Subtle UI sounds
10. **WebGL Shaders**: Custom GLSL shaders for effects

---

**Document Version**: 1.0  
**Last Updated**: December 26, 2025  
**Author**: Shashwat Shukla
