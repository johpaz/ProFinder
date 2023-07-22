import { Box, Stack, Text, Button, useColorModeValue, IconButton, Collapse } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const SidebarClient = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = {
    display: 'block',
    padding: '10px',
    textDecoration: 'none',
    color: useColorModeValue('gray.700', 'gray.200'),
    _hover: {
      bg: useColorModeValue('gray.200', 'gray.700'),
    },
  };

  return (
    <Box as="aside" w="200px" h="100vh" bg={useColorModeValue('gray.100', 'gray.900')} py={4} px={2}>
      <Stack spacing={4}>
        <NavLink
          to="/dashboardClient/editForm"
          style={linkStyle}
          activeClassName="active"
        >
          <Text>Editar perfil</Text>
        </NavLink>
        {/* <NavLink
          to="/dashboardClient/favorites"
          style={linkStyle}
          activeClassName="active"
        >
          <Text>Favoritos</Text>
        </NavLink> */}
        <NavLink
          to="/dashboardClient/recomended"
          style={linkStyle}
          activeClassName="active"
        >
          <Text>Recomendados</Text>
        </NavLink>
        <NavLink
          to="/dashboardClient/categories"
          style={linkStyle}
          activeClassName="active"
        >
          <Text>Categorías</Text>
        </NavLink>
        <NavLink
          to="/dashboardClient/feedbackform"
          style={linkStyle}
          activeClassName="active"
        >
          <Text>Formulario de feedback</Text>
        </NavLink>
        <NavLink
          to="/dashboardClient/help"
          style={linkStyle}
          activeClassName="active"
        >
          <Text>Ayuda</Text>
        </NavLink>
      </Stack>

      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="ghost"
        size="md"
        onClick={toggleCollapse}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        display={{ base: 'block', md: 'none' }}
        alignSelf="flex-end"
      />

      <Collapse in={isOpen}>
        <Stack spacing={4}>
          <NavLink
            to="/dashboardClient/editForm"
            style={linkStyle}
            activeClassName="active"
          >
            <Text>Editar perfil</Text>
          </NavLink>
          {/* <NavLink
            to="/dashboardClient/favorites"
            style={linkStyle}
            activeClassName="active"
          >
            <Text>Favoritos</Text>
          </NavLink> */}
          <NavLink
            to="/dashboardClient/recomended"
            style={linkStyle}
            activeClassName="active"
          >
            <Text>Recomendados</Text>
          </NavLink>
          <NavLink
            to="/dashboardClient/help"
            style={linkStyle}
            activeClassName="active"
          >
            <Text>Ayuda</Text>
          </NavLink>
          <NavLink
            to="/dashboardClient/feedbackform"
            style={linkStyle}
            activeClassName="active"
          >
            <Text>Formulario de feedback</Text>
          </NavLink>
          <NavLink
            to="/dashboardClient/categories"
            style={linkStyle}
            activeClassName="active"
          >
            <Text>Categorías</Text>
          </NavLink>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default SidebarClient;