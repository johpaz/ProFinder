import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Wrap,
  useColorModeValue,
  Container,
  Stack,
  Icon,
  Button,
  Flex,
  ScaleFade,
  Center,
} from "@chakra-ui/react";
import {
  FaUserAlt,
  FaRegPaperPlane,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/customHooks/useFetch";

import NoAvatar from "../../assets/defaultImages/sinfoto.webp";
import InfoLabel from "../../singleComponents/InfoLabel";
import SupplierPost from "../../components/SupplierPost/SupplierPost";
import ClieProfChatBot from "./ChatClieProf";

const ArticleList = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(
    `https://backprofinder-production.up.railway.app/profesional/${id}`
  );

  const [isChatOpen, setIsChatOpen] = useState(false);
  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const hoverStyles = {
    transform: "scale(1.01)",
    cursor: "pointer",
  };

  if (isLoading) {
    return <h2>Cargando</h2>;
  }

  const { name, email, image, ubication, years_exp, phone } = data || {};

  return (
    <Container
      color="gray.300"
      bg={useColorModeValue("gray.800", "gray.800")}
      maxW="100%"
      py="5"
      px={{ base: "8", md: "8", lg: "10rem" }}
      align={"center"}
      justify={"center"}
    >
      <ScaleFade initialScale={0.9} in>
        <Flex
          justify="center"
          align="center"
          mt={8}
          width="500px"
          gap={{ md: "3rem", lg: "3rem" }}
          direction={{ base: "column", md: "row", lg: "row" }}
        >
          <Flex
            rounded={"md"}
            boxShadow={"2xl"}
            align={"center"}
            bg="gray.900"
            _hover={hoverStyles}
          >
            <Box>
              <Flex
                direction={{ base: "column", md: "row" }}
                justify="center"
                mt={8}
                marginTop="5"
                width="1000px"
              >
                <Box marginTop="5">
                  <Image
                    src={image}
                    borderRadius="50%"
                    boxSize="350px"
                    fallback={NoAvatar}
                    loading="lazy"
                    alt="avatar supplier"
                    objectFit="contain"
                  />
                </Box>
                <Stack
                  direction="column"
                  spacing={4}
                  ml={{ base: "0", md: "5%" }}
                  mt={{ base: "5%", md: "0" }}
                  align="flex-start"
                  textTransform={"uppercase"}
                  fontWeight={700}
                  fontSize={"2xl"}
                  letterSpacing={1.1}
                >
                  <Heading
                    marginBottom="2rem"
                    marginTop="5"
                    as="h1"
                    textTransform="uppercase"
                  >
                    {name || "Sin nombre"}
                  </Heading>
                  <InfoLabel textLabel={data?.genre} iconLabel={FaUserAlt} />
                  <InfoLabel
                    textLabel={years_exp}
                    iconLabel={FaRegPaperPlane}
                  />
                  <InfoLabel textLabel={email} iconLabel={FaMailBulk} />
                  <InfoLabel textLabel={phone} iconLabel={FaPhone} />
                  <Button
                    marginTop="5"
                    marginBottom="2rem"
                    onClick={handleChatToggle}
                    bg={useColorModeValue("teal.500", "teal.400")}
                    color="white"
                    _hover={{ bg: "teal.600" }}
                    leftIcon={<Icon as={FaRegPaperPlane} />}
                  >
                    Contactar
                  </Button>
                </Stack>
              </Flex>
            </Box>
          </Flex>
          <Box
            w={{ base: "100%", md: "300px" }}
            ml={{ base: 0, md: "20px" }}
            mt={{ base: "20px", md: 0 }}
            textAlign={{ base: "center", md: "left" }}
          >
            {isChatOpen && <ClieProfChatBot data={data} />}
          </Box>
        </Flex>
        <Divider my={50} />
        <Flex
          align="center"
          gap={{ md: "3rem", lg: "3rem" }}
          direction={{ base: "column", md: "row", lg: "row" }}
          justifyContent="center"
        >
          <Heading as="h2" marginTop="50" textTransform="uppercase">
            Trabajos Recientes
          </Heading>
        </Flex>
        <Divider my={20} />
        <Wrap spacing="50px" marginTop="5" justify="center">
          {data?.posts ? (
            data.posts.map(({ image, content, title, id }) => {
              return (
                <SupplierPost
                  key={id}
                  identificador={id}
                  imagePost={image[0]}
                  titularPost={title}
                  descriptionPost={content}
                />
              );
            })
          ) : (
            <Heading>No hay ninguna publicacion</Heading>
          )}
        </Wrap>
      </ScaleFade>
      <Divider my={20} />
    </Container>
  );
};

export default ArticleList;
