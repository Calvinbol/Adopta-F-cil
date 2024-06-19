import { useState } from 'react'
import { login } from '../Services/auth.service'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errs, setErrs] = useState('') //Para mostrar si hay algún error
  const navigate = useNavigate()

    async function handleClick(event) {
        event.preventDefault()
        try {
            let response = await login(email, password)
            setErrs('')
            console.log(response.name)
            localStorage.setItem('token', response.token)
            toast.success('Hello World ' + response.name)
        /*     navigate('/') */
        } catch (error) {
            setErrs(error.message)
        }

    }

    return (
      <>
        <form className="form">
          <input
            className="email"
            placeholder="Introduce tu email"
            type="email"
            onChange={function (event) {
              setEmail(event.target.value);
            }}
          />

          <input
            placeholder="Introduce tu contraseña"
            type="password"
            onChange={function (event) {
              setPassword(event.target.value);
            }}
          />

          {errs && <p className="error">{errs}</p>}

          <button onClick={handleClick}>Enviar</button>
        </form>
        <button
          onClick={function () {
            navigate("/");
          }}
        >
          VOLVER A HOME
        </button>
      </>
    );
}

export default LoginForm