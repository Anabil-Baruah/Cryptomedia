import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { AuthProvider } from './context/AuthProvider'
import { ThemeProvider } from './context/ThemeProvider'

// import 'antd/dist/antd.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <Provider store={store}>
          {/* <Route path="/*" element={<App />} /> */}
          <App />
        </Provider>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
)
