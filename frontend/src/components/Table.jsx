import PropTypes from "prop-types";
import "./Table.css";
import { useEffect } from "react";
import { getPetAdoption } from "../Services/adoption.service";

const Table = ({ pets, selectedPets, toggleSelectPet }) => {


console.log(pets)
   

  return (
    <table>
      <thead>
        <tr>
          <th className="encabezado-th">Seleccionar</th>
          <th className="encabezado-th">ID</th>
          <th className="encabezado-th">Nombre</th>
          <th className="encabezado-th">Tipo</th>
          <th className="encabezado-th">Raza</th>
{/*           <th className="encabezado-th">Fecha de llegada</th>
 */}          <th className="encabezado-th">Fecha de adopción</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedPets.includes(pet.id)}
                onChange={() => toggleSelectPet(pet.id)}
              />
            </td>
            <td>{pet.id}</td>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td>{pet.race}</td>
            <td>{pet.adoption && pet.adoption.date_adoption}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      fecha: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedPets: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleSelectPet: PropTypes.func.isRequired,
};

export default Table;
