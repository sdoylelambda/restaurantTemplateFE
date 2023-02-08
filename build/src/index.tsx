import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
const ghpages = require('gh-pages')

ghpages.publish('dist', function (err) {})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

/**
 * The usage below will only add files to the `gh-pages` branch, never removing
 * any existing files (even if they don't exist in the `src` config).
 */
ghpages.publish('dist', { add: true }, callback)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
