import PropTypes from "prop-types";
import "./Table.css";

const Table = ({ pets, selectedPets, toggleSelectPet }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="encabezado-th">Seleccionar</th>
          <th className="encabezado-th">ID</th>
          <th className="encabezado-th">Fecha</th>
          <th className="encabezado-th">Fecha de Adopción</th>
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
            <td>{pet.fecha}</td>
            <td>{pet.fechaAdopcion}</td>
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
      fechaAdopcion: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedPets: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleSelectPet: PropTypes.func.isRequired,
};

export default Table;
