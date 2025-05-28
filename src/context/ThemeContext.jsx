/**
 * Theme Context for managing light/dark theme state across the application
 */
import { createContext, useState, useEffect } from 'react';

// Create the Theme Context
export const ThemeContext = createContext();

/**
 * Theme Provider Component
 * Provides theme state and toggle function to all child components
 */
export function ThemeProvider({ children }) {
  // Initialize theme state - default to 'light'
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  // Apply theme to document element for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Context value to be provided to children
  const contextValue = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
