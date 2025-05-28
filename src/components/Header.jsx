/**
 * Header Component
 * Navigation header with app title and theme toggle
 */
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import './Header.css';

function Header() {
  const { theme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1 className="header-title">
            Theme Switcher Demo
          </h1>
          <span className="header-subtitle">
            React Context API & Custom Hooks
          </span>
        </div>

        <nav className="header-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#docs" className="nav-link">Docs</a>
        </nav>

        <div className="header-actions">
          <span className="current-theme">
            Current: <strong>{theme}</strong>
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
