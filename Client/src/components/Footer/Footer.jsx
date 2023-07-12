import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Link,
  useColorModeValue,
  Heading,
  Text,
} from "@chakra-ui/react";

const footerStyles = {
  minH: "100vh",
  left: 0,
  bottom: 0,
  width: "100%",
  dark: {
    900: "#151515",
    700: "#202020",
  },
  text: {
    800: "#908E9B",
  },
};

function Footer() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box bg={bgColor} color={textColor} style={footerStyles}>
      <Container maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={8}>
          <Stack align={"center"} justify="flex-end">
            <Heading as="h2" fontWeight="bold" fontSize="xl" color="blue.500">
              Información
            </Heading>
            <Link href={"#"}>Sobre nosotros</Link>
            <Link href={"#"}>Contáctanos</Link>
            <Link href={"#"}>Cómo funciona</Link>
            <Link href={"#"}>Home</Link>
          </Stack>

          <Stack align={"center"} justify="flex-end">
            <Heading as="h2" fontWeight="bold" fontSize="xl" color="blue.500">
              Ingresos
            </Heading>
            <Link href={"#"}>Registro usuario</Link>
            <Link href={"#"}>Registro Profesional</Link>
            <Link href={"#"}>Inicia sesión</Link>
            <Link href={"#"}>Categorías</Link>
          </Stack>
        </SimpleGrid>
        <Stack align={"center"} mt={8}>
          <Text fontSize={"sm"} textAlign="center">
            © 2023 Profinder create. All rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
