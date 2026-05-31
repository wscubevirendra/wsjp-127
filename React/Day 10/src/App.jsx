import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Store from './pages/Store'
import DynamicPage from './pages/DynamicPage'
import Cart from './pages/Cart'

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
          path: "/store/:slug?",
          element: <Store />
        },
        {
          path: "dynamic-page/:id",
          element: <DynamicPage />
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routers} />
  )
}
