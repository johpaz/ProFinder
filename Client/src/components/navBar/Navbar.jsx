import { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Estado para controlar la visibilidad
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
    <nav>
      <Flex
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
      >
        <Box className={Styles.logoContainer}>
          <Link to="/" className={Styles.logo} textDecor="none">
            Logo
          </Link>
        </Box>

        <Box display={{ base: 'none', md: 'block' }}>
          <Link to='/pasarela' style={{ fontSize: '20px' }} textDecoration='none' ml={4} fontSize='lg'>
            Haste Premium
          </Link>
        </Box>


        <Box display={{ base: 'none', md: 'block' }}>
          <Link to='/comofunciona' style={{ fontSize: '20px' }} textDecoration='none' ml={4} fontSize='lg'>
            ¿Cómo funciona?
          </Link>
        </Box>

        <Box display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="ghost"
            />
            <MenuList>
              <MenuItem>
                <Link to="/comofunciona" textDecoration="none">
                  ¿Cómo funciona?
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleOptionClick("cliente")}>
                Soy Cliente
              </MenuItem>
              <MenuItem
                as="a"
                href="/login"
                onClick={() => handleOptionClick("profesional")}
              >
                Soy Profesional
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      <Box
        display={{ base: "none", md: "block" }}
        className={Styles.comoFuncionaContainer}
      >
        <Link className={Styles.comoFunciona} to="/comofunciona">
          ¿Cómo funciona?
        </Link>
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        className={Styles.menuContainer}
      >
        <ul className={Styles.menu}>
          <li>
            <a
              href="#"
              onClick={toggleDropdown}
              className={Styles.dropdownToggle}
              textDecoration="none"
            >
              Registrate ▼
            </a>
            {isOpen && (
              <ul>
                <li className={Styles.liDropdown}>
                  <a href="#" onClick={() => handleOptionClick("cliente")}>
                    Soy Cliente
                  </a>
                </li>
                <li className={Styles.liDropdown}>
                  <a
                    href="/login"
                    onClick={() => handleOptionClick("profesional")}
                  >
                    Soy Profesional
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        className={Styles.loginContainer}
      >
        <Link
          to="/selectlogin"
          className={Styles.loginLink}
          textDecoration="none"
        >
          Login
        </Link>
      </Box>
    </nav>
  );
};

export default Navbar;
