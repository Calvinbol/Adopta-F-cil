import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { HostelContext } from "../context/hostelContext"; // Asegúrate de la ruta correcta
import "./Layout.css";

const Layout = () => {
  const { hostel } = useContext(HostelContext);

  return (
    <>
      <header>
        <div className="logo">
          <Link to={"/"}>
            <img src="../../public/Logo.png" alt="Adopta Fácil" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/adoptar">Quienes Somos</Link>
            </li>
            <li>
              <Link to="/mascotas">Mascotas</Link>
            </li>
            <li>
              <Link to="/contacto">Contáctanos</Link>
            </li>
          </ul>
        </nav>
        <div className="albergue-link">
          {hostel ? (
            <Link to="/usuario" className="avatar-link">
              <Avatar
                sx={{
                  bgcolor: deepPurple[500],
                  '&:hover': {
                    bgcolor: deepPurple[500],
                    cursor: 'pointer'
                  },
                }}
              >
                {hostel.name.charAt(0).toUpperCase()}
              </Avatar>
            </Link>
          ) : (
            <Link to="/login">Soy un albergue</Link>
          )}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
};

export default Layout;
