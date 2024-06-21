import React from "react";
import "./Adoptar.css";

const Adoptar = () => {
  return (
    <>
      <div className="textadoptar">
        <a className="greyFont">¿</a>
        <a className="blueBold">Adoptar</a>
        <a className="greyFont"> es</a>
        <a className="greyFont">?</a>
      </div>
    <div className="adoptar-background">
      <div className="container">
        <img className="iconperro" src="../../public/iconperro.png"/>
        <h1 className="textcontainer">Compañía y Lealtad</h1>
        <h4 className="parrafo">
          Las mascotas proporcionan amor incondicional y compañía, ayudando a
          reducir la soledad y mejorar el bienestar emocional.
        </h4>
      </div>

      <div className="container1">
      <img className="iconperro" src="../../public/iconcasa.png"/>
        <h1 className="textcontainer">Contribur a una causa noble:</h1>
        <h4 className="parrafo">
          Adoptar una mascota rescata a un animal necesitado y ayuda a reducir
          la sobrepoblación en refugios.
        </h4>
      </div>

      <div className="container">
        
      <img className="iconperro" src="../../public/iconcorazon.png"/>
        <h1 className="textcontainer"> Estilo de vida activo:</h1>
        <h4 className="parrafo">
          Tener una mascota, especialmente un perro,fomenta un estilo de vida
          más activo con paseos diarios y actividades al aire libre.
        </h4>
      </div>
    </div>
    </>
  );
};

export default Adoptar;
