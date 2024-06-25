import { useState } from "react";
import PropTypes from "prop-types";
import "./AddModal.css";

const AddModal = ({ isOpen, onClose, onAddPet }) => {
  const [petData, setPetData] = useState({
    nombre: "",
    tipo: "",
    raza: "",
    edad: "",
    genero: "",
    talla: "",
    historia: "",
    fecha: "",
    id: "",
    fechaApopcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPet(petData);
    setPetData({
      nombre: "",
      tipo: "",
      raza: "",
      edad: "",
      genero: "",
      talla: "",
      historia: "",
      fecha: "",
      id: "",
      fechaApopcion: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label className="TitleModal">Añadir mascota</label>
          <label className="TextModal">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={petData.nombre}
            onChange={handleChange}
            required
          />

          <label className="TextModal">Tipo:</label>
          <select
            name="tipo"
            value={petData.tipo}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione...</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>

          <label className="TextModal">Raza:</label>
          <input
            type="text"
            name="raza"
            value={petData.raza}
            onChange={handleChange}
          />

          <label className="TextModal">Edad:</label>
          <input
            type="text"
            name="edad"
            value={petData.edad}
            onChange={handleChange}
          />

          <label className="TextModal">Género:</label>
          <select name="genero" value={petData.genero} onChange={handleChange}>
            <option value="">Seleccione...</option>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>

          <label className="TextModal">Talla:</label>
          <input
            type="text"
            name="talla"
            value={petData.talla}
            onChange={handleChange}
          />

          <label className="TextModal">Historia:</label>
          <textarea
            name="historia"
            value={petData.historia}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Añadir</button>
        </form>
      </div>
    </div>
  );
};

AddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddPet: PropTypes.func.isRequired,
};

export default AddModal;
