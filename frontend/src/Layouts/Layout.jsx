import React from "react";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import "./Layout.css";

const Layout = () => {
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
              <Link to="/adoptar">Adoptar es</Link>
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
          <Link to="/login">Soy un albergue</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>

      <footer className="cabildodegrancanariasinfondo">
        <a target="/home/reboot/code/Adopta-Facil/frontend/public/cabildodegranacanariasinfondo.png"></a>

        <img
          className="tamañoimagen"
          src="/cabildodegranacanaria.png"
          alt="Cabildo de Gran Canaria"
        />
        <div className="footer-social">
          <div className="footer-links"></div>

          <spam> Cookies </spam>
          <spam>Politica de privacidad </spam>
          <spam> Aviso legal </spam>
          <button
            href="https://www.facebook.com"
            target="/home/reboot/code/Adopta-Facil/frontend/public/facebook.png"
          ></button>
          <img src="/facebook.png" alt="Facebook" />
          <button
            href="https://www.instagram.com"
            target="/home/reboot/code/Adopta-Facil/frontend/public/instagram.png"
          ></button>
          <img src="/instagram.png" alt="Instagram" />
          <button
            href="https://www.tiktok.com"
            target="/home/reboot/code/Adopta-Facil/frontend/public/tiktok.png"
          ></button>
          <img src="/tiktok.png" alt="TikTok" />
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
