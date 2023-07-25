import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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
  Avatar,
} from "@chakra-ui/react";
import {
  FaUserAlt,
  FaRegPaperPlane,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

import NoAvatar from "../../assets/defaultImages/sinfoto.webp";
import InfoLabel from "../../singleComponents/InfoLabel";
import SupplierPost from "../../components/SupplierPost/SupplierPost";
import ClieProfChatBot from "./ChatClieProf";

import { getProfesionalIdOnline } from "../../services/redux/actions/actions";

const ArticleList = () => {
  const { id } = useParams();
  const profesionalId = useSelector((state) => state.profesionalId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfesionalIdOnline(id));
  }, [dispatch, id]);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const hoverStyles = {
    transform: "scale(1.01)",
    cursor: "pointer",
  };

  if (!profesionalId) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      key={profesionalId.id}
      color="gray.300"
      bg={useColorModeValue("gray.800", "gray.500")}
      maxW="100%"
      py="5"
      px={{ base: "8", md: "8", lg: "10rem" }}
      align={"center"}
      justify={"center"}
    >
      <ScaleFade initialScale={0.9} in>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          mt={8}
          gap={{ base: "1rem", md: "3rem", lg: "3rem" }}
          maxW={{ base: "full", md: "900px" }}
          w={{ base: "full", md: "900px" }}
        >
          {profesionalId.map(
            ({
              id,
              name,
              email,
              image,
              ubication,
              description,
              professions,
              years_exp,
              genre,
              phone,
              posts,
            }) => (
              <Box
                key={id}
                rounded={"md"}
                boxShadow={"2xl"}
                align={"center"}
                _hover={hoverStyles}
                mb={{ base: "3rem", md: "0" }}
                flex={{ base: "1", md: "2" }}
                bg={useColorModeValue("blackAlpha.800", "gray.800")}
              >
                <Image
                  src={image || NoAvatar}
                  loading="lazy"
                  alt="Image"
                  boxSize={{ base: "300px", md: "auto" }}
                  maxW={{ base: "300px", md: "100%" }}
                  maxH="300px"
                  objectFit="contain"
                  marginTop="5"
                  borderRadius="10px"
                />
                <Stack
                  direction="column"
                  spacing={4}
                  p={8}
                  align="center"
                  textTransform={"uppercase"}
                  fontWeight={700}
                  fontSize={{ base: "lg", md: "2xl" }}
                  letterSpacing={1.1}
                  textAlign="center"
                >
                  <Heading as="h1" textTransform="uppercase">
                    {name || "Sin nombre"}
                  </Heading>
                  <InfoLabel textLabel={genre} iconLabel={FaUserAlt} />
                  <Box>
                    <Text fontSize="16px">Años de experiencia:</Text>
                    <InfoLabel
                      fontSize="20px"
                      textLabel={years_exp}
                      iconLabel={FaMailBulk}
                    />
                  </Box>

                  <InfoLabel textLabel={email} iconLabel={FaMailBulk} />
                  <InfoLabel textLabel={phone} iconLabel={FaPhone} />
                  <Button
                    onClick={handleChatToggle}
                    bg={useColorModeValue("teal.500", "teal.400")}
                    color="white"
                    _hover={{ bg: "teal.600" }}
                    leftIcon={<Icon as={FaRegPaperPlane} />}
                  >
                    Contactar
                  </Button>
                </Stack>
              </Box>
            )
          )}
          <Box flex={{ base: "1", md: "1" }}>
            {isChatOpen && <ClieProfChatBot profesionalId={profesionalId} />}
          </Box>
        </Flex>
        <Divider my={{ base: 8, md: 16 }} />
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap={{ base: "1rem", md: "3rem", lg: "3rem" }}
        >
          <Heading as="h2" textTransform="uppercase">
            Trabajos Recientes
          </Heading>
          <Divider my={2} />
          <Wrap spacing="50px" justify="center">
            <SupplierPost id={profesionalId.id} key={profesionalId.id} />
          </Wrap>
        </Flex>
      </ScaleFade>
      <Divider my={{ base: 8, md: 16 }} />
    </Container>
  );
};

export default ArticleList;
