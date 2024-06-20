import React from 'react';

const Contacto = () => {
    return (
      <>
        <form className="formulario">
        <h2>Contáctanos</h2>
          <label>
            Nombre:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Mensaje:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </>
    );
};

export default Contacto;