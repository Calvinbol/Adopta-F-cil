import React, { useContext, useState } from 'react';
import { login } from '../Services/auth.service';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { HostelContext } from '../context/hostelContext';
import '../pages/Login/Login.css'; // Asegúrate de importar el CSS

function LoginForm() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errs, setErrs] = useState('');
  const navigate = useNavigate();
  const { hostel, setHostel } = useContext(HostelContext);

  async function handleClick(event) {
    event.preventDefault();
    try {
      let response = await login(email, password);
      setErrs('');
      localStorage.setItem('token', response.token);
      setHostel(response.hostel);

      toast.success('Hello World ' + response.name);
      navigate('/usuario');
    } catch (error) {
      setErrs(error.message);
    }
  }

  return (
    <div className="login-container">
      <div className="login-image"></div> {/* Imagen a la izquierda */}
      <div className="form-container"> {/* Contenedor del formulario a la derecha */}
        <form className="form">
          <h2 className="form-title">Iniciar Sesión</h2>
          <label className="form-label">Correo Electrónico:</label>
          <input
            className="form-input"
            placeholder="Introduce tu email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label className="form-label">Contraseña:</label>
          <input
            className="form-input"
            placeholder="Introduce tu contraseña"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Recuérdame
          </label>

          {errs && <p className="form-error">{errs}</p>}

          <button className="form-button" onClick={handleClick}>Ingresa</button>
          <Link to="/signup" className="form-link">¿No tienes cuenta? Regístrate</Link>
        </form>
      </div>
      {hostel && (
        <div className="hostel-info">
          <h3>Bienvenido, {hostel.name}</h3>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
