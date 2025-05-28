/**
 * Theme Toggle Component
 * Button component for switching between light and dark themes
 */
import { useTheme } from '../hooks/useTheme';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Current theme: ${theme}. Click to switch to ${isDark ? 'light' : 'dark'} theme.`}
    >
      <span className="theme-toggle-icon">
        {isDark ? '🌞' : '🌙'}
      </span>
      <span className="theme-toggle-text">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
}

export default ThemeToggle;
