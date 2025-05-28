/**
 * Custom hook for accessing theme context
 * Provides easy access to theme state and toggle function
 */
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/**
 * useTheme Hook
 * 
 * @returns {Object} Theme context value containing:
 *   - theme: Current theme ('light' | 'dark')
 *   - toggleTheme: Function to toggle between themes
 *   - isDark: Boolean indicating if current theme is dark
 *   - isLight: Boolean indicating if current theme is light
 * 
 * @throws {Error} If used outside of ThemeProvider
 * 
 * @example
 * function MyComponent() {
 *   const { theme, toggleTheme, isDark } = useTheme();
 *   
 *   return (
 *     <button onClick={toggleTheme}>
 *       Current theme: {theme}
 *     </button>
 *   );
 * }
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  
  // Throw error if hook is used outside ThemeProvider
  if (context === undefined) {
    throw new Error(
      'useTheme must be used within a ThemeProvider. ' +
      'Make sure to wrap your component tree with <ThemeProvider>.'
    );
  }
  
  return context; 
}

export default useTheme;
