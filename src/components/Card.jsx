/**
 * Card Component
 * Reusable card component for displaying content with theme support
 */
import './Card.css';

/**
 * Card Component
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string|ReactNode} props.content - Card content
 * @param {string} [props.className] - Additional CSS classes
 * @param {ReactNode} [props.children] - Child components (alternative to content)
 */
function Card({ title, content, className = '', children }) {
  return (
    <div className={`card ${className}`}>
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
      )}
      
      <div className="card-content">
        {children || content}
      </div>
    </div>
  );
}

export default Card;
