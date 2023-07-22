import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FavoritesClient = () => {
  return (
    <Box width="100%" border="1px solid black" bg="gray.100">
      <Box p={4} bg="gray.100" borderRadius="md">
        <Text fontSize="xl" fontWeight="bold" textAlign="center" color="teal.500">
          Aquí se verán los profesionales guardados en favoritos
        </Text>
      </Box>
    </Box>
  );
};

export default FavoritesClient;