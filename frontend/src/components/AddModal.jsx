// AddModal.js
import { useState } from "react";
import PropTypes from "prop-types";
import "./AddModal.css";
import { addPet } from "../Services/pets.service";

const AddModal = ({ isOpen, onClose, onAddPet }) => {
  const [petData, setPetData] = useState({
    name: "",
    type: "",
    race: "",
    age: "",
    gender: "",
    size: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    onAddPet(petData)
    try {

      const newPet = await addPet(petData); // Llama a la función para añadir mascota con los datos del formulario
      onAddPet(newPet); // Actualiza la lista de mascotas con la nueva mascota añadida
      
      onClose(); // Cierra el modal después de añadir la mascota
    } catch (error) {
      console.error("Error adding pet:", error);
    }
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
            name="name"
            value={petData.name}
            onChange={handleChange}
            required
          />

          <label className="TextModal">Tipo:</label>
          <select
            name="type"
            value={petData.type}
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
            name="race"
            value={petData.race}
            onChange={handleChange}
          />

          <label className="TextModal">Edad:</label>
          <input
            type="text"
            name="age"
            value={petData.age}
            onChange={handleChange}
          />

          <label className="TextModal">Género:</label>
          <select name="gender" value={petData.gender} onChange={handleChange}>
            <option value="">Seleccione...</option>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>

          <label className="TextModal">Talla:</label>
          <input
            type="text"
            name="size"
            value={petData.size}
            onChange={handleChange}
          />

          <label className="TextModal">Historia:</label>
          <textarea
            name="description"
            value={petData.description}
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