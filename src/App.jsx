import { useTheme } from './hooks/useTheme'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'

function App() {
  const { theme, isDark } = useTheme()

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <h1 className="hero-title">
              Theme Switcher Demo
            </h1>
            <p className="hero-description">
              This demo showcases React Context API and custom hooks for managing 
              application-wide theme state. Try switching between light and dark themes!
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-label">Current Theme:</span>
                <span className="stat-value">{theme}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Dark Mode:</span>
                <span className="stat-value">{isDark ? 'Active' : 'Inactive'}</span>
              </div>
            </div>
          </section>

          {/* Demo Cards Grid */}
          <section className="demo-section">
            <h2 className="section-title">Feature Demonstration</h2>
            
            <div className="cards-grid">
              <Card 
                title="🎯 Context API"
                content={
                  <div>
                    <p>
                      This app uses React's <strong>Context API</strong> to manage theme state 
                      globally across all components without prop drilling.
                    </p>
                    <ul>
                      <li>Global state management</li>
                      <li>No prop drilling required</li>
                      <li>Clean component architecture</li>
                      <li>Easy to test and maintain</li>
                    </ul>
                  </div>
                }
              />

              <Card 
                title="🪝 Custom Hooks"
                content={
                  <div>
                    <p>
                      The <code>useTheme</code> custom hook encapsulates theme logic 
                      and provides a clean API for components.
                    </p>
                    <ul>
                      <li>Reusable logic</li>
                      <li>Error handling</li>
                      <li>Type safety</li>
                      <li>Developer experience</li>
                    </ul>
                  </div>
                }
              />

              <Card 
                title="🎨 CSS Variables"
                content={
                  <div>
                    <p>
                      Theming is implemented using <strong>CSS custom properties</strong> 
                       for efficient and smooth theme transitions.
                    </p>
                    <ul>
                      <li>Instant theme switching</li>
                      <li>Smooth transitions</li>
                      <li>Maintainable CSS</li>
                      <li>Performance optimized</li>
                    </ul>
                  </div>
                }
              />

              <Card 
                title="📱 Responsive Design"
                content={
                  <div>
                    <p>
                      The interface adapts beautifully to different screen sizes 
                      while maintaining theme consistency.
                    </p>
                    <ul>
                      <li>Flexible layouts</li>
                      <li>Touch-friendly controls</li>
                      <li>Consistent theming</li>
                    </ul>
                  </div>
                }
              />

              <Card 
                title="🔧 Implementation Details"
                content={
                  <div>
                    <p>Key technical concepts demonstrated:</p>
                    <ul>
                      <li><code>createContext()</code> for state sharing</li>
                      <li><code>useContext()</code> for consuming context</li>
                      <li><code>useState()</code> and <code>useEffect()</code> hooks</li>                     
                      <li>Error boundaries and fallbacks</li>
                      <li>CSS-in-JS alternatives</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </section>

          {/* Interactive Demo */}
          <section className="interactive-section">
            <h2 className="section-title">Try It Yourself</h2>
            <Card className="interactive compact">
              <div className="interactive-demo">
                <p>
                  Click the theme toggle button in the header to see instant theme switching. 
                  Notice how all components update simultaneously!
                </p>
                <div className="demo-indicators">
                  <div className="indicator">
                    <span className="indicator-dot"></span>
                    <span>Background: {isDark ? 'Dark' : 'Light'}</span>
                  </div>
                  <div className="indicator">
                    <span className="indicator-dot"></span>
                    <span>Text: {isDark ? 'Light' : 'Dark'}</span>
                  </div>
                  <div className="indicator">
                    <span className="indicator-dot"></span>
                    <span>Borders: {isDark ? 'Subtle' : 'Clean'}</span>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            Made with React, Vite, and ❤️ | Nhóm 16
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
