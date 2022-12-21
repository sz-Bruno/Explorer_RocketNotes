import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import {ThemeProvider} from "styled-components"
import GlobalStyles from './pages/styles/global'
import theme from "./pages/styles/theme"
import {AuthProvider} from "./hooks/Auth"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      
      <AuthProvider>
      <Routes/>
      </AuthProvider>
    
    </ThemeProvider>
    
  </React.StrictMode>
)
