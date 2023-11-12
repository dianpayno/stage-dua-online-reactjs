import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import Homepage from './page/homepage.tsx'
import Register from './page/registerpage.tsx'
import LoginPage from './page/loginpage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/login',
    element: <LoginPage/>,
  }

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
