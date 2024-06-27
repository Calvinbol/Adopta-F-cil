import PropTypes from 'prop-types';
import "./Gestion.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { HostelContext } from '../context/hostelContext';

const Gestion = ({ onAddClick, onDeleteClick }) => {
  const navigate = useNavigate();
  const { setHostel } = useContext(HostelContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setHostel(null);  
    toast.success('Sesión cerrada exitosamente');
    navigate('/login');
  };

  return (
    <div className="header">
      <h1 className="gestion">Gestión de mascotas en adopción</h1>
      <div className="gestion-buttons">
        <button onClick={onAddClick}>+</button>
        <button onClick={onDeleteClick}>🗑</button>
        <button onClick={handleLogout}>
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};

Gestion.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default Gestion;
