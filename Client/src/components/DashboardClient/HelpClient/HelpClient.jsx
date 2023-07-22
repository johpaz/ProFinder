import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const HelpClient = () => {
  return (
    <Box width="100%" bg="gray.100" border="1px solid black" borderRadius="md" p={4}>
      <Text fontSize="xl" fontWeight="bold" textAlign="center" color="teal.500">
        Ayuda y Q & A
      </Text>
    </Box>
  );
};

export default HelpClient;