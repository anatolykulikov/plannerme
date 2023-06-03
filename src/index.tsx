import React from 'react'
import { createRoot } from 'react-dom/client'
import './core.scss'

const App: React.FunctionComponent = () => {
  return <h1>App is here</h1>
}

createRoot(document.getElementById('app')).render(<App />)
