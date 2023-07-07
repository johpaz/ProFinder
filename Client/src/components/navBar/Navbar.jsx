//import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // Estado para controlar la visibilidad del desplegable
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad del desplegable
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar el clic en una opción
  const handleOptionClick = (option) => {
    console.log("Selected option:", option);
    setIsOpen(false); // Cerrar el desplegable al seleccionar una opción
  };
  return (
    <div>
      <nav>
        <div>
          <Link to="/home">logo</Link>
          <Link to="/comofunciona">Cómo funciona</Link>
          {/* <Link to="/login">Crear usuario Profesional</Link> */}
        </div>
        <div>
          <ul>
            <li>
              <a href="#" onClick={toggleDropdown}>
                Registrate ▼
              </a>  
              {isOpen && (
                <ul>
                  <li>
                    <a href="#" onClick={() => handleOptionClick("cliente")}>
                      Soy Cliente
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleOptionClick("profesional")}
                    >
                      Soy Profesional
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
