import { useSelector } from "react-redux";
import { Flex, Box, Text } from "@chakra-ui/react";

const Data = () => {
  const dataSuppliers = useSelector((state) => state.profesionales);
  const userSession = JSON.parse(localStorage.getItem("userSession"));
  const profile = dataSuppliers.find((user) => user.id === userSession.id);
  //console.log(profile);
  const numPosts = profile && profile.posts ? profile.posts.length : 0;



  return (
    <Flex flexWrap="wrap" gap={3}>
    <Box
      flexBasis="200px"
      textAlign="center"
      bg="rgba(75, 192, 192, 0.6)"
      borderRadius="10px"
      p={3}
      mb={3}
    >
      <Text fontSize="30px">Mis Posts</Text>
      <Box fontSize="24px">{numPosts}</Box>
    </Box>

    <Box
      flexBasis="200px"
      textAlign="center"
      bg="rgba(3, 75, 75, 0.6)"
      borderRadius="10px"
      p={3}
      mb={3}
    >
      <Text fontSize="30px">Servicios Terminados</Text>
      <Box fontSize="24px">15</Box>
    </Box>

    <Box
      flexBasis="200px"
      textAlign="center"
      bg="rgba(192, 75, 75, 0.6)"
      borderRadius="10px"
      p={3}
      mb={3}
    >
      <Text fontSize="30px">Servicios Activos</Text>
      <Box fontSize="24px">15</Box>
    </Box>

    <Box
      flexBasis="200px"
      textAlign="center"
      bg="rgba(200, 200, 20, 0.6)"
      borderRadius="10px"
      p={3}
      mb={3}
    >
      <Text fontSize="30px">Servicios Cancelados</Text>
      <Box fontSize="24px">{numPosts}</Box>
    </Box>
  </Flex>
  );
};

export default Data;
