import React from 'react';

const Contacto = () => {
    return (
        <div>
            <h2>Contáctanos</h2>
            <form>
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
        </div>
    );
};

export default Contacto;