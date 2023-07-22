import { useSessionState } from "../../../services/zustand/useSession";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostProfesional } from "../../../services/redux/actions/actions";
import { EditIcon } from "@chakra-ui/icons";

import {
  Box,
  Text,
  VStack,
  Image,
  Grid,
  Button,
  Flex,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

const PostsSuppliers = () => {
  const session = useSessionState((state) => state.session);
  const profesionales = useSelector((state) => state.profesionales);
  const filteredPosts = profesionales.filter((post) => post.id === session.id);

  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    dispatch(getPostProfesional());
  }, [dispatch]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const imageCount = filteredPosts[0].posts[0].image.length;
      const nextIndex = (prevIndex + 1) % imageCount;
      return nextIndex;
    });
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const imageCount = filteredPosts[0].posts[0].image.length;
      const prevIndexValue = (prevIndex - 1 + imageCount) % imageCount;
      return prevIndexValue;
    });
  };

  const handleToggleContent = () => {
    setShowFullContent((prevValue) => !prevValue);
  };

  return (
    <Stack mt={12} justify="center" spacing={10} align="center">
      {/* <Flex > */}
      <Grid
        templateColumns={["1fr", "1fr", "1fr", "repeat(3, 1fr)"]} // Esto mostrará una columna en dispositivos pequeños, 2 columnas en medianos y 3 columnas en grandes
        gap={5}
        justifyContent="center"
      >
        {filteredPosts.map((professional) =>
          professional.posts.map((post) => (
            <Box
              key={post.id}
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              p={6}
              marginLeft="10px"
            >
              <Box justifyContent="center">
                <EditIcon
                  position="absolute"
                  top="20px" // organiza de arriba abajo
                  right="20px" // horizontal
                  cursor="pointer"
                />
              </Box>
              <Box justifyContent="center" marginTop="5">
                {/* Título del post */}
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={700}
                  fontSize={"xl"}
                  letterSpacing={1.1}
                >
                  {post.title}
                </Text>
              </Box>

          

              {/* Botón Leer más / Ver menos */}
              {post.content.length > 100 && (
                <Button
                  colorScheme="blue"
                  size="sm"
                  mt={2}
                  onClick={handleToggleContent}
                >
                  {showFullContent ? "Ver menos" : "Leer más"}
                </Button>
              )}
              <Box justifyContent="center">
                {/* Imagen actual */}
                <Grid
                  justifyContent="center"
                  templateColumns="repeat(2, 1fr)"
                  gap={2}
                  alignItems="center"
                >
                  <Image
                    justifyContent="center"
                    src={post.image[currentImageIndex]}
                    alt={`Image ${currentImageIndex}`}
                    boxSize="300px"
                    maxW="300px"
                    maxH="300px"
                    objectFit="contain"
                    // gridColumn="1 / span 3"
                    // color="black"
                    // layout="fill"

                    borderRadius="lg"
                    marginTop="5"
                    marginLeft="10px"
                  />
                  <Box>
                    <Button
                      onClick={handlePrevImage}
                      size="sm"
                      fontSize="xl"
                      marginTop="5"
                    >
                      &lt;
                    </Button>
                    <Text fontSize="sm" color={"gray.500"} marginTop="5">
                      Imagen {currentImageIndex + 1} de {post.image.length}
                    </Text>
                    <Button
                      onClick={handleNextImage}
                      size="sm"
                      fontSize="xl"
                      marginTop="5"
                    >
                      &gt;
                    </Button>
                  </Box>
                </Grid>
              
                {/* Contenido del post */}
                <Text color={"gray.500"}>
                  {showFullContent
                    ? post.content
                    : post.content.substring(0, 100)}
                </Text>
            
              </Box>
            </Box>
          ))
        )}
      </Grid>
    </Stack>
  );
};

export default PostsSuppliers;
