import React from 'react';
import { Link } from 'react-router-dom';
import './Mascotas.css'

const Mascotas = () => {
    return(
        <div className="mascotas-container">
            <h1>Mascotas en adopción</h1>
            <div className="mascotas-links">
                <div className="mascota-card">
                <Link to="/DogsCard" className="mascota-link">
                    <img src="../../public/perros.png" alt="Perros" />
                    Perros
                    </Link>
                </div>
                <div className="mascota-card">
                    <Link to="/CatsCard" className="mascota-link">
                    <img src="../../public/gatos.png" alt="Gatos" />
                    Gatos</Link> 
                </div>
            </div>
            <Link to="/TodasMascotas"  button className="adopt-button">Ver todos</Link>
        </div>
    );
};

export default Mascotas;