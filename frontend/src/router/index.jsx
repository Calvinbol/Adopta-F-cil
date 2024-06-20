import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Layout from '../Layouts/Layout'
import Signup from '../pages/Signup/Signup'
import LoginForm from '../components/LoginForm'


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
]);