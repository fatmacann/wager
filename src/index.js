import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BasketProvider } from './context'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
)
