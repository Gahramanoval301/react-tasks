import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ModeContextProvider, { ModeContext } from './context-api/ModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModeContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ModeContextProvider>
)
