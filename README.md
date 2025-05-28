# 🎨 React Theme Switcher Demo - NV5 Nhóm 16

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Variables-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> 🚀 **CSE391 - Phát triển ứng dụng Web** | Semester 2024-2025  
> 👥 **Nhóm 16**: Demonstrating React Context API & Custom Hooks

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Technical Implementation](#-technical-implementation)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Usage Examples](#-usage-examples)
- [Learning Objectives](#-learning-objectives)
- [Architecture Deep Dive](#-architecture-deep-dive)
- [Contributing](#-contributing)
- [Team](#-team)

## 🎯 Overview

This project is a **comprehensive React application** that demonstrates modern React development patterns through a practical theme switcher implementation. Built for the CSE391 Web Development course, it showcases advanced React concepts including **Context API**, **Custom Hooks**, and **CSS Variables** for dynamic theming.

### What Makes This Special?

- 🎨 **Instant Theme Switching** - Smooth transitions between light and dark themes
- 🏗️ **Clean Architecture** - Demonstrates React best practices and design patterns
- 🎯 **Educational Focus** - Perfect for learning Context API and Custom Hooks
- 📱 **Responsive Design** - Works beautifully on all device sizes
- ⚡ **Performance Optimized** - Efficient re-rendering and CSS transitions
- 🔧 **Modern Tooling** - Built with Vite for fast development experience

## 🌐 Live Demo

**[View Live Demo](https://kyokoxdev.github.io/2025_CSE391_NentangWeb/)** 

*Try switching between light and dark themes to see the magic! 🪄*

## ✨ Features

### 🎨 Theme Management
- **Light & Dark Themes** with instant switching
- **System Preference Detection** for automatic theme selection
- **Smooth CSS Transitions** for professional user experience
- **CSS Variables** for maintainable styling system

### 🏗️ React Architecture
- **Context API** for global state management without prop drilling
- **Custom Hooks** for reusable logic extraction
- **Component Composition** with clean separation of concerns
- **Error Boundaries** with helpful developer messages

### 🎯 User Experience
- **Accessible Design** with proper ARIA labels and keyboard navigation
- **Responsive Layout** that adapts to all screen sizes
- **Visual Indicators** showing current theme state
- **Interactive Demo** with real-time state visualization

### 🔧 Developer Experience
- **Hot Module Replacement** for instant development feedback
- **ESLint Configuration** for code quality
- **Clear Documentation** with JSDoc comments
- **Modular Structure** for easy maintenance and extension

## 🛠️ Technical Implementation

### Core Technologies
```json
{
  "framework": "React 19+",
  "bundler": "Vite 6+",
  "styling": "CSS3 Variables + Modern CSS",
  "state": "Context API + Custom Hooks",
  "deployment": "GitHub Pages"
}
```

### Key React Patterns

#### 1. Context API Implementation
```jsx
// Global theme state without prop drilling
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

#### 2. Custom Hook Pattern
```jsx
// Reusable logic with error handling
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
}
```

#### 3. CSS Variables Strategy
```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
}

[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
}
```

## 📁 Project Structure

```
src/
├── 📄 main.jsx              # App entry point with ThemeProvider
├── 📄 App.jsx               # Main application component
├── 📄 App.css               # Application-specific styles
├── 📄 index.css             # Global styles and CSS reset
├── 📁 components/           # Reusable UI components
│   ├── 🎯 Header.jsx        # Navigation with theme toggle
│   ├── 🔘 ThemeToggle.jsx   # Theme switching button
│   └── 📇 Card.jsx          # Themed card component
├── 📁 context/              # React Context providers
│   └── 🎨 ThemeContext.jsx  # Theme state management
├── 📁 hooks/                # Custom React hooks
│   └── 🪝 useTheme.js       # Theme access hook
└── 📁 styles/               # Styling system
    └── 🎨 themes.css        # CSS variables for theming
```

### Component Hierarchy
```
App (ThemeProvider wrapper)
├── Header
│   ├── Navigation
│   └── ThemeToggle (useTheme)
├── Main Content
│   ├── Hero Section (useTheme)
│   └── Feature Cards
│       └── Card (useTheme)
└── Footer
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn 1.22+
- Modern web browser

### Quick Start
```bash
# Clone the repository
git clone https://github.com/kyokoxdev/2025_CSE391_NentangWeb.git
cd 2025_CSE391_NentangWeb

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Available Scripts
```bash
npm run dev      # Start development server with HMR
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## 💡 Usage Examples

### Basic Theme Access
```jsx
import { useTheme } from './hooks/useTheme';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}
```

### Conditional Styling
```jsx
function ThemedCard() {
  const { isDark } = useTheme();
  
  return (
    <div className={`card ${isDark ? 'dark-mode' : 'light-mode'}`}>
      <h3>Themed Content</h3>
    </div>
  );
}
```

### Dynamic CSS Properties
```jsx
function CustomStyledComponent() {
  const { theme } = useTheme();
  
  const styles = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333'
  };
  
  return <div style={styles}>Dynamic styling</div>;
}
```

## 🎓 Learning Objectives

This project demonstrates key React concepts essential for modern web development:

### 1. Context API Mastery
- **Problem Solved**: Eliminate prop drilling for global state
- **Pattern**: Provider pattern for state distribution
- **Best Practice**: Single responsibility contexts

### 2. Custom Hooks Expertise
- **Problem Solved**: Extract and reuse component logic
- **Pattern**: "use" prefix convention with error handling
- **Best Practice**: Consistent API design

### 3. State Management
- **Pattern**: Centralized theme state with Context
- **Side Effects**: Theme application to document element
- **Error Handling**: Graceful fallbacks and validation

### 4. Modern CSS Techniques
- **CSS Variables**: Dynamic theming without JavaScript
- **Transitions**: Smooth theme switching experience
- **Responsive Design**: Mobile-first approach

## 🏗️ Architecture Deep Dive

### Data Flow Diagram
```
User Click → ThemeToggle → useTheme() → ThemeContext 
    ↓
Theme State Update → CSS Variables Update
    ↓
All Components Re-render → UI Updates Globally
```

### State Management Strategy
1. **Single Source of Truth** - Theme state lives in Context
2. **Immutable Updates** - State changes trigger re-renders
3. **Derived State** - Boolean helpers computed from theme string
4. **Side Effects** - CSS variables updated via useEffect

### Performance Considerations
- ✅ **Minimal Re-renders** - Only theme-consuming components update
- ✅ **CSS Transitions** - Hardware-accelerated theme switching
- ✅ **Bundle Optimization** - Tree-shaking friendly structure
- ✅ **Memory Efficiency** - Proper cleanup and disposal

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] Theme toggle switches between light/dark
- [ ] All components update simultaneously
- [ ] CSS transitions are smooth
- [ ] Responsive design works on all screen sizes
- [ ] Keyboard navigation is functional
- [ ] Error handling works (try using useTheme outside provider)

### Automated Testing (Future Enhancement)
```bash
# Potential test setup
npm install --save-dev @testing-library/react jest
npm run test
```

## 🚀 Deployment

### GitHub Pages Deployment
```bash
# Build for production
npm run build

# Deploy to GitHub Pages (automated via GitHub Actions)
git push origin main
```

### Local Production Testing
```bash
# Test production build locally
npm run build
npm run preview
```

## 🔧 Customization Guide

### Adding New Themes
```css
/* In themes.css */
[data-theme="blue"] {
  --bg-primary: #1e40af;
  --text-primary: #f0f9ff;
  /* ... other variables */
}
```

### Extending the Hook
```jsx
// Enhanced useTheme with additional features
export function useTheme() {
  const context = useContext(ThemeContext);
  
  return {
    ...context,
    // Add new utilities
    getOppositeTheme: () => context.theme === 'light' ? 'dark' : 'light',
    isSystemDark: window.matchMedia('(prefers-color-scheme: dark)').matches
  };
}
```

## 📚 Educational Resources

### Related Concepts
- [React Context Documentation](https://react.dev/reference/react/createContext)
- [Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [CSS Variables Tutorial](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Modern CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)

### Recommended Next Steps
1. Add TypeScript for better type safety
2. Implement multiple theme variants
3. Add unit tests with React Testing Library
4. Create Storybook for component documentation
5. Add accessibility testing with axe-core

## 🤝 Contributing

We welcome contributions from fellow students and developers!

### How to Contribute
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 👥 Team

**NV5 - Nhóm 16** | CSE391 - Phát triển ứng dụng Web

| Role | Responsibility | GitHub |
|------|---------------|--------|
| **Team Lead** | Project architecture & coordination | [@kyokoxdev](https://github.com/kyokoxdev) |
| **Frontend Dev** | Component development & styling | [@teammember2](https://github.com/teammember2) |
| **QA Engineer** | Testing & documentation | [@teammember3](https://github.com/teammember3) |

### Course Information
- **Course**: CSE391 - Phát triển ứng dụng Web
- **Semester**: 2024-2025
- **Institution**: [Your University Name]
- **Instructor**: [Professor Name]

## 📄 License

This project is created for educational purposes as part of the CSE391 course curriculum.

```
Copyright (c) 2025 NV5 - Nhóm 16
Educational use only - CSE391 Web Development Course
```

## 🙏 Acknowledgments

- **React Team** for the amazing framework and documentation
- **Vite Team** for the lightning-fast build tool
- **Course Instructors** for guidance and project requirements
- **Open Source Community** for inspiration and best practices

---

<div align="center">

**Built with ❤️ by NV5 - Nhóm 16**

[⭐ Star this repo](https://github.com/kyokoxdev/2025_CSE391_NentangWeb) | [🐛 Report Bug](https://github.com/kyokoxdev/2025_CSE391_NentangWeb/issues) | [💡 Request Feature](https://github.com/kyokoxdev/2025_CSE391_NentangWeb/issues)

Made for **CSE391 - Phát triển ứng dụng Web** | Semester 2024-2025

</div>
