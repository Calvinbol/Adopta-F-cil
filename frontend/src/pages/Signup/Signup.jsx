import { useState } from "react";
import { signup } from "../../Services/auth.service";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [doublePass, setDoublePass] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] =useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [community, setCommunity] = useState("");
  const [description, setDescription] = useState(""); // Nuevo estado para descripción
  const [errs, setErrs] = useState(""); // Para mostrar si hay algún error

  const navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();
    if (password === doublePass) {
      try {
        // Validación de contraseña
          // Validación de descripción no vacía
          if (description.trim() === "") {
            setErrs("Debes proporcionar una descripción del hostal");
          } else {
            await signup(email, fullname, password, address, phone, website, community, description); // Envía también la descripción
            setErrs("");
            alert("Registro exitoso");
            navigate("/login");
          }
        
      } catch (error) {
        setErrs(error.message);
      }
    } else {
      setErrs("Las contraseñas no coinciden");
    }
  }

  return (
    <div className="signup-container">
      <form className=" signup">
        <h2 className="form-title">Registro</h2>
        <label className="form-label">Correo Electrónico:</label>
        <input
          className="form-input2"
          placeholder="Introduce tu email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="form-label">Nombre Completo:</label>
        <input
          className="form-input2"
          placeholder="Introduce tu nombre completo"
          onChange={(event) => setFullname(event.target.value)}
        />
        <div className="pass">
          <div className="divPass">
            <label className="form-label">Contraseña:</label>
            <input
              className="form-input3"
              placeholder="Introduce tu contraseña"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="divPass">
            <label className="form-label">Repite tu Contraseña:</label>
            <input
              className="form-input3"
              placeholder="Repite tu contraseña"
              type="password"
              required
              onChange={(event) => setDoublePass(event.target.value)}
            />
          </div>
        </div>
        <label className="form-label">Dirección:</label>
        <input
          className="form-input2"
          placeholder="Introduce tu dirección"
          onChange={(event) => setAddress(event.target.value)}
        />
        <div className="pass">
          <div className="divPass">
            <label className="form-label">Isla:</label>
            <select
              className="form-input2"
              placeholder="Selecciona tu isla"
              name="select"
              value={community}
              onChange={function (event) {
                setCommunity(event.target.value);
              }}
            >
              <option value="select">Selecciona</option>
              <option value="Gran Canaria">Gran Canaria</option>
              <option value="Tenerife">Tenerife</option>
              <option value="Fuerteventura">Fuerteventura</option>
              <option value="Lanzarote">Lanzarote</option>
              <option value="La Palma">La Palma</option>
              <option value="La Gomera">La Gomera</option>
              <option value="La Graciosa">La Graciosa</option>
              <option value="El Hierro">El Hierro</option>
            </select>
          </div>
          <div className="divPass">
            <label className="form-label">Teléfono:</label>
            <input
              className="form-input3"
              placeholder="Introduce el teléfono"
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </div>
        <label className="form-label">Sitio web:</label>
        <input
          className="form-input2"
          placeholder="Introduce tu sitio web"
          onChange={(event) => setWebsite(event.target.value)}
        />
        <label className="form-label">Descripción del Albergue:</label>{" "}
        {/* Nuevo campo */}
        <textarea
          className="form-input2"
          placeholder="Introduce la descripción del hostal"
          required
          onChange={(event) => setDescription(event.target.value)}
        />
        {errs && <p className="form-error">{errs}</p>}

        <button className="form-button" onClick={handleClick}>Enviar</button>

        <p className="form-text-final">¿Ya tienes cuenta? <span className="form-link" onClick={() => navigate("/login")}>Inicia sesión</span></p>
      </form>
    </div>
  );
}

export default Signup;