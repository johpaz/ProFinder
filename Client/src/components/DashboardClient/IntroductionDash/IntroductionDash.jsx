import React from 'react';
import { Box, Text, Stack, Heading, Icon, Center, Spacer, useColorModeValue } from '@chakra-ui/react';
import { MdHelp, MdStar } from 'react-icons/md';

const IntroductionDash = () => {
  const iconColor = useColorModeValue('teal.500', 'teal.300');
  const headingColor = useColorModeValue('teal.600', 'teal.300');

  return (
    <Box
      width="100%"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="base"
      borderRadius="md"
      p={4}
    >
      <Center>
        <Stack spacing={4} align="center">
          <Icon as={MdStar} boxSize={8} color={iconColor} />
          <Heading as="h2" size="lg" textAlign="center" color={headingColor}>
            ¡Bienvenido al Panel de Administración de Cliente!
          </Heading>
          <Spacer />
          <Text fontSize="lg" textAlign="center" color="gray.600">
            Aquí podrás realizar las siguientes acciones:
          </Text>
          <Box>
            <Text fontSize="md" color="gray.600">
              <Icon as={MdStar} boxSize={5} color={iconColor} /> Editar todas tus preferencias.
            </Text>
           
            <Text fontSize="md" color="gray.600">
              <Icon as={MdStar} boxSize={5} color={iconColor} /> Consultar las categorías disponibles.
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={MdStar} boxSize={5} color={iconColor} /> Ver los profesionales mejor valorados.
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={MdStar} boxSize={5} color={iconColor} /> Hacer el feedback de los servicios prestados para valorar a los profesionales por su desempeño.
            </Text>
            <Text fontSize="md" color="gray.600">
              <Icon as={MdHelp} boxSize={5} color={iconColor} /> Acceder a la sección de ayuda y preguntas frecuentes.
            </Text>
          </Box>
        </Stack>
      </Center>
    </Box>
  );
};

export default IntroductionDash;