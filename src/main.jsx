import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TooltipProvider } from './components/ui/tooltip'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <TooltipProvider>
    <App />
    </TooltipProvider>
  </StrictMode>,
  </BrowserRouter>
)
