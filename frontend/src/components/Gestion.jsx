import PropTypes from 'prop-types'
import "./Gestion.css";

const Gestion = ({ onAddClick, onDeleteClick }) => {
  return (
    <div className="header">
      <h1 className="gestion">Gestión de mascotas en adopción</h1>
      <div>
        <button onClick={onAddClick}>+</button>
        <button onClick={onDeleteClick}>🗑</button>
      </div>
    </div>
  );

  
};

Gestion.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default Gestion;
