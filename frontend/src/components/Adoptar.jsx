import React from "react";
import "./Adoptar.css";

const Adoptar = () => {
  return (
    <>
      <div className="textadoptar">
        <a className="greyFont">¿</a>
        <a className="blueBold">Adopta Fácil</a>
        <a className="greyFont"> es</a>
        <a className="greyFont">?</a>
        <p>Un puente entre los albergues de animales y las personas que buscan brindarles un lugar lleno de amor. Nuestra plataforma nace de la necesidad de facilitar y optimizar el proceso de adopción, asegurando que el animal encuentre la familia adecuada y que cada persona encuentre un compañero ideal.</p>
      </div>
      <div className="adoptar-background">
        <div className="container">
          <img className="iconperro" src="../../public/iconperro.png" />
          <h1 className="textcontainer">Salvando vidas</h1>
          <h4 className="parrafo-adoptar">
            Cada año millones de animales terminan en albergues esperando una segunda oportunidad. Nosotros ayudamos a conectar con los albergues a esas personas dispuestas a adoptar, asi constribuimos a reducir la cantidad de animales que permanecen en estas instalaciones, dando paso a nuevas vidas llenas de esperanza.
          </h4>
        </div>
        <div className="container1">
          <img className="iconperro" src="../../public/iconcasa.png" />
          <h1 className="textcontainer">Alivios para los albergues:</h1>
          <h4 className="parrafo-adoptar">
            Los albergues suelen estar sobre cargados y con recursos limitados. Facilitando la adoptción, ayudamos a aliviar estas cargas , permitiendo que los albergues concentren sus esfuerzos en rescatar y cuidar a más animales necesitados.
          </h4>
        </div>

        <div className="container">

          <img className="iconperro" src="../../public/iconcorazon.png" />
          <h1 className="textcontainer"> Comunidad Unida:</h1>
          <h4 className="parrafo-adoptar">
            Nuestra plataforma no solo conecta albergues y personas, sino tambien crea una comunidad de amantes de los animales, fomentando la colaboración y el apoyo mutuo, creando redes de voluntarios, donantes y adoptantes que trabajan junto por el bienestar animal.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Adoptar;

