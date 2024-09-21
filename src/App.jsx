import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './screen/Home'
import NotFound from './screen/NotFound'
import Loading from './screen/Loading'
import LoginPage from './screen/Login'
import SignupPage from './screen/signup'
import Chat from './screen/chat'

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
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/Login",
      element: <LoginPage />,
    },
    {
      path: "/Signup",
      element: <SignupPage />,
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

