import React from "react";
import "./Home.css"; 

const Home = () => {
  const handleClick = () => {
    
    console.log("Botón clickeado");
    
  };

  return (
    <div className="home-background">
      <div className="text">
        <a className="greyFont">¡Dale una </a>
        <a className="blueBold">nueva </a>
        <p className="greyFont">oportunidad a un </p>
        <a className="blueBold">Perro o Gato y</a>
        <p className="greyFont">transforma tu vida!</p>
        <p className="blueBold"></p>

        {}
        <button className="button" onClick={handleClick}>
          Conoce a tu mejor amigo
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
