import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './screen/Home'
import NotFound from './screen/NotFound'
import Login from './screen/login'
import Loading from './screen/Loading'
// import Login from './screen/login'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loading />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return (

    <RouterProvider router={router} />
  )
}

export default App

