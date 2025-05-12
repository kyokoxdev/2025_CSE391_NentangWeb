import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <div className="app-container">
      <div className="contact-form-container">
        <h2>Get in touch with us by filling contact form below</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input 
              type="text" 
              placeholder="* Enter your full name" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange}
              required
            />
            
            <input 
              type="email" 
              placeholder="* Enter your email address" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              required
            />
          </div>
          
          <input 
            type="text" 
            placeholder="Enter your subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange}
            className="full-width"
          />
          
          <textarea 
            placeholder="* Your message here..." 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            rows="8"
            required
            className="full-width"
          ></textarea>
          
          <div className="form-footer">
            <button type="submit" className="send-button">
              Send message
            </button>
            <p className="required-fields-notice">
              * Please fill all required form field, thanks!
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
