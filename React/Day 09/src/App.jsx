import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/services",
          element: <h1>Services Page</h1>,
        }
      ]
    }

  ])



  return (
    <RouterProvider router={routers} />
  )
}
