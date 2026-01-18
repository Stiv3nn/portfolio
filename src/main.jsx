import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* IMPORTA IL BROWSER ROUTER */
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* AVVOLGI L'APP NEL ROUTER */}
    <Router>
      <App />
    </Router>
  </StrictMode>,
)