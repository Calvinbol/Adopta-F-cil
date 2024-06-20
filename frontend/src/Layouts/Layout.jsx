import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="logo">
          <img src="../../public/Logo.png" alt="Adopta Fácil" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Adoptar es</Link></li>
            <li><Link to="/mascotas">Mascotas</Link></li>
            <li><Link to="/contacto">Contáctanos</Link></li>
          </ul>
        </nav>
        <div className="albergue-link">
          <Link to="/albergue">Soy un albergue</Link>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="footer">
          <img src="../../public/footerBackground.png" alt="Adopta Fácil Footer" />
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;