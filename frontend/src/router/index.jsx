import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Layout from '../Layouts/Layout'
import Signup from '../pages/Signup/Signup'
import Mascotas from '../components/Mascotas'
import Contacto from '../components/Contacto'
import Adoptar from '../components/Adoptar'
import Login from '../pages/Login/Login'


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
        element: <Login />,
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
 
    ],
  },
]);