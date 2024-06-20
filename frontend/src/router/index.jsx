import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../components/Home'
import Layout from '../Layouts/Layout'
import Signup from '../pages/Signup/Signup'
import LoginForm from '../components/LoginFrom'
import Mascotas from '../components/Mascotas'
import Contacto from '../components/Contacto'
import Adoptar from '../components/Adoptar'


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/mascotas",
        element: <Mascotas />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
      {
        path: "/adoptar",
        element: <Adoptar/>
      },
      {
        path: "/login",
        element: ''
      }
    ],
  },
]);