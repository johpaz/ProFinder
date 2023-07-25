import { useState, useEffect  } from "react";
import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  Stack,
  Button,
  Heading,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, ChatIcon, ViewIcon, EditIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
//import { Link as RouterLink } from "react-router-dom";
import DataSuppliers from "../DataSuppliers/DataSuppliers";
import CustomChatBot from "../../../components/CustomChatBot/CustomChatBot";
import FormServicio from "../../FormServicio/FormServicio";
import PostsSuppliers from "../PostSuppliers/PostsSuppliers";
import PasarelaPagos from "../../PasarelaPagos/PasarelaPagos";
import Data from "../Data/Data";
import FormUpdateProfile from "../formUpdateProfile/FormUpdateProfile";
import UpdatePost from "../UpdatePost/UpdatePost";

const linkStyle = {
  display: "block",
  padding: "10px",
  textDecoration: "none",
  color: "white",
};

const DashboardSuppliers = () => {
  const [currentPage, setCurrentPage] = useState("Inicio");
  const { isOpen, onOpen, onClose } = useDisclosure();
 // const [showFooter, setShowFooter] = useState(false);

    const currentPath = window.location.pathname;
//    setShowFooter(currentPath !== "/dashboardSuppliers"); 



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <Box
      height="100vh"
      display="flex"
      bg={useColorModeValue("gray.800", "gray.500")}
      
    >
      {/* Barra lateral */}
      {!isMobile && (
        <Box w="250px" p={2}
        bg={useColorModeValue("blackAlpha.800", "gray.800")}
        >
          <Stack spacing={4}>
            <ScrollLink
              to="/dashboardSuppliers/publicaciones"
              spy
              smooth
              duration={500}
              style={linkStyle}
            >
              <Button
                variant="outline"
                onClick={() => handlePageChange("Inicio")}
                bg={currentPage === "Inicio" ? "blue.500" : ""}
                color={currentPage === "Inicio" ? "White" : ""}
              >
                Inicio
              </Button>
            </ScrollLink>

            <ScrollLink
              to="/dashboardSuppliers/publicaciones"
              spy
              smooth
              duration={500}
              style={linkStyle}
            >
              <Button
                variant="outline"
                onClick={() => handlePageChange("FormServicio")}
                bg={currentPage === "FormServicio" ? "blue.500" : ""}
                color={currentPage === "FormServicio" ? "white" : ""}
                leftIcon={<ChatIcon />}
              >
                Publicar
              </Button>
            </ScrollLink>

            <ScrollLink
              to="/dashboardSuppliers/nuevas-publicaciones"
              spy
              smooth
              duration={500}
              style={linkStyle}
            >
              <Button
                variant="outline"
                onClick={() => handlePageChange("PostsSuppliers")}
                bg={currentPage === "PostsSuppliers" ? "blue.500" : ""}
                color={currentPage === "PostsSuppliers" ? "white" : ""}
                leftIcon={<ViewIcon />}
              >
                Ver mis Publicaciones
              </Button>
            </ScrollLink>

            <ScrollLink
              to="/dashboardSuppliers/updateprofile"
              style={linkStyle}
              onClick={() => handlePageChange("FormUpdateProfile")}
            >
              <Button
                variant="outline"
                bg={currentPage === "FormUpdate" ? "blue.500" : ""}
                color={currentPage === "FormUpdate" ? "white" : ""}
                leftIcon={<EditIcon />}
              >
                Editar mi Perfil
              </Button>
            </ScrollLink>

            <ScrollLink
              to="pasarela"
              spy
              smooth
              duration={500}
              style={linkStyle}
            >
              <Button
                variant="outline"
                onClick={() => handlePageChange("PasarelaPagos")}
                bg={currentPage === "PasarelaPagos" ? "blue.500" : ""}
                color={currentPage === "PasarelaPagos" ? "white" : ""}
                leftIcon={<ViewIcon />}
              >
                Obtén Premium
              </Button>
            </ScrollLink>
          </Stack>
        </Box>
      )}

      {/* Contenido principal */}
      <Box flex="1" display="flex" flexDirection="column" alignItems="center">
        {/* Botón Hamburguesa (visible en pantallas pequeñas) */}
        {isMobile && (
          <IconButton
            aria-label="Abrir menú"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            size="md"
            m={2}
          />
        )}

        <Drawer isOpen={isOpen && isMobile} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="gray.600">
            <DrawerCloseButton />
            <DrawerHeader>
              <Stack spacing={4}>
                <ScrollLink
                  to="/dashboardSuppliers/publicaciones"
                  spy
                  smooth
                  duration={500}
                  style={linkStyle}
                >
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange("Inicio")}
                    bg={currentPage === "Inicio" ? "blue.500" : ""}
                    color={currentPage === "Inicio" ? "white" : ""}
                  >
                    Inicio
                  </Button>
                </ScrollLink>

                <ScrollLink
                  to="/dashboardSuppliers/publicaciones"
                  spy
                  smooth
                  duration={500}
                  style={linkStyle}
                >
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange("FormServicio")}
                    bg={currentPage === "FormServicio" ? "blue.500" : ""}
                    color={currentPage === "FormServicio" ? "white" : ""}
                    leftIcon={<ChatIcon />}
                  >
                    Publicar
                  </Button>
                </ScrollLink>

                <ScrollLink
                  to="/dashboardSuppliers/nuevas-publicaciones"
                  spy
                  smooth
                  duration={500}
                  style={linkStyle}
                >
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange("PostsSuppliers")}
                    bg={currentPage === "PostsSuppliers" ? "blue.500" : ""}
                    color={currentPage === "PostsSuppliers" ? "white" : ""}
                    leftIcon={<ViewIcon />}
                  >
                    Ver mis Publicaciones
                  </Button>
                </ScrollLink>

                <ScrollLink
                  to="/dashboardSuppliers/updateprofile"
                  style={linkStyle}
                  onClick={() => handlePageChange("FormUpdateProfile")}
                >
                  <Button
                    variant="outline"
                    bg={currentPage === "FormUpdate" ? "blue.500" : ""}
                    color={currentPage === "FormUpdate" ? "white" : ""}
                    leftIcon={<EditIcon />}
                  >
                    Editar mi Perfil
                  </Button>
                </ScrollLink>
                <ScrollLink
                  to="/dashboardSuppliers/updatepost"
                  spy
                  smooth
                  duration={500}
                  style={linkStyle}
                >
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange("updatepost")}
                    bg={currentPage === "updatepost" ? "blue.500" : ""}
                    color={currentPage === "updatepost" ? "white" : ""}
                    leftIcon={<ViewIcon />}
                  >
                    Editar Post
                  </Button>
                </ScrollLink>

                <ScrollLink
                  to="/dashboardSuppliers/pasarela"
                  spy
                  smooth
                  duration={500}
                  style={linkStyle}
                >
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange("PasarelaPagos")}
                    bg={currentPage === "PasarelaPagos" ? "blue.500" : ""}
                    color={currentPage === "PasarelaPagos" ? "white" : ""}
                    leftIcon={<ViewIcon />}
                  >
                    Obtén Premium
                  </Button>
                </ScrollLink>
              </Stack>
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={4}></Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Contenido de la página */}
        {currentPage === "Inicio" && (
          <Flex direction="column" alignItems="center" >
            <Heading
              as="h1"
              size={isTabletOrMobile ? "lg" : "sm"}
              my={4}
              color="white"
            >
              MIS DATOS ONLINE
            </Heading>
            <Flex
              direction={isTabletOrMobile ? "column" : "column"}
              justifyContent="space-around"
            >
              <Data />
              <DataSuppliers />
            </Flex>
          </Flex>
        )}
        {currentPage === "FormServicio" && (
          <Flex justifyContent="center" alignItems="center" flex="1">
            <FormServicio />
          </Flex>
        )}
        {currentPage === "PostsSuppliers" && (
          <Box>
            <PostsSuppliers />
          </Box>
        )}

        {currentPage === "FormUpdateProfile" && (
          <Flex justifyContent="center" alignItems="center" flex="1">
            <FormUpdateProfile />
          </Flex>
        )}
        {currentPage === "Ayuda" && (
          <Flex justifyContent="flex-start" alignItems="flex-end">
            <CustomChatBot />
          </Flex>
        )}
        {currentPage === "PasarelaPagos" && (
          <Box>
            <PasarelaPagos />
          </Box>
        )}
        {currentPage === "updatepost" && (
          <Box>
            <UpdatePost />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DashboardSuppliers;
