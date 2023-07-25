import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useSessionState } from "../../services/zustand/useSession";
// import { useHistory } from 'react-router-dom';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import SelectCategories from "../../singleComponents/SelectCategories";
import { uploadFiles2 } from "../../utils/Firebase/config";
import {
  getAllCategories,
  postServicio,
} from "../../services/redux/actions/actions";
import { Link } from "react-router-dom";

function FormServicio() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      ocupation: "",
      category: "",
      images: [],
      content: "",
    },
  });
  const [userInfo, setUserInfo] = useState(null);

  // const history = useHistory()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOccupations, setSelectedOccupations] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dataSuppliers = useSelector((state) => state.profesionales);
  // const userSession = JSON.parse(localStorage.getItem("userSession"));
  const session = useSessionState((state) => state.session);

  const profile = dataSuppliers.find((user) => user.id === session.id);
  // console.log(profile.active);
  const [value, setValue] = useState("");

  const envioCategoria = (value) => {
    setSelectedCategory(value);
  };

  const envioOcupaciones = (value) => {
    setSelectedOccupations(value);
  };

  const onSubmit = async (data) => {
    const imageUrls = await uploadFiles2(data.images);

    const newData = {
      title: data.title,
      image: imageUrls,
      content: data.content,
      ProfesionalId: session.id,
      category: selectedCategory,
      ocupation: selectedOccupations,
    };

    console.log(newData);
    dispatch(postServicio(newData));
    reset();
    setIsSubmitted(true);
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.800", "gray.800")}
    >
      <Box
        rounded="lg"
        bg={useColorModeValue("blackAlpha.800", "gray800")}
        boxShadow="lg"
        p={8}
        color="gray.300"
        width={{ base: "90%", sm: "80%", md: "60%", lg: "500px" }}
      >
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Titulo</FormLabel>
              <Input
                type="text"
                {...register("title", {
                  required: "El campo nombre es requerido",
                })}
              />
              {errors.title && (
                <span style={{ color: "red" }}>{errors.title.message}</span>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Fotos de trabajos</FormLabel>
              <Input
                type="file"
                multiple // Allow multiple file selection
                {...register("images", {
                  required: "Solo se permiten archivos de imagen JPEG o PNG",
                  validate: {
                    isImage: (value) => {
                      if (value) {
                        const acceptedFormats = [".jpg", ".jpeg", ".png"];
                        for (const file of value) {
                          const fileExtension = file.name.substring(
                            file.name.lastIndexOf(".")
                          );
                          if (!acceptedFormats.includes(fileExtension)) {
                            return false;
                          }
                        }
                      }
                      return true;
                    },
                  },
                })}
              />
              {errors.images && (
                <span style={{ color: "red" }}>{errors.images.message}</span>
              )}
            </FormControl>

            <FormControl w="100%">
              <FormLabel>Categorías</FormLabel>
              <SelectCategories
                fnSelectCategory={envioCategoria}
                fnSelectOcupation={envioOcupaciones}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Descripcion Trabajo</FormLabel>
              <Textarea
                type="text"
                {...register("content", {
                  required: "El campo es requerido",
                  maxLength: {
                    value: 250,
                    message:
                      "La descripción no puede tener más de 250 caracteres",
                  },
                })}
              />
              {errors.content && (
                <span style={{ color: "red" }}>{errors.content.message}</span>
              )}
              {profile.posts.length === 0 || profile.active === true ? (
                <Flex justify="space-between" align="center">
                  <Button
                    loadingText="Submitting"
                    bg="teal.400"
                    color="white"
                    _hover={{ bg: "teal.500" }}
                    type="submit"
                    size="lg"
                    marginTop="5"
                    w="100%"
                  >
                    Enviar
                  </Button>
                </Flex>
              ) : null}

              {profile.posts.length === 1 && profile.active === false ? (
                <>
                  <Button bg="grey.200" color="white" size="lg" marginTop="5">
                    Enviar
                  </Button>
                  <Box display="inline" fontSize="lg" color="red.500" ml={2}>
                    {/* Mostrar el mensaje */}
                    {profile.active === false &&
                      "Se terminaron tus publicaciones"}{" "}
                    {/* Mostrar mensaje alternativo */}
                  </Box>
                </>
              ) : null}
            </FormControl>

            {profile.active === false ? (
              <Link to="/dashboardSuppliers/pasarela">
                <Button
                  loadingText="Submitting"
                  bg="teal.400"
                  color="white"
                  _hover={{ bg: "teal.500" }}
                  type="submit"
                  size="lg"
                  marginTop="5"
                  w="100%"
                >
                  Suscribite a premium
                </Button>
              </Link>
            ) : null}
          {isSubmitted && (
            <Alert status="success"  size="sm" maxW="xs" borderRadius="md"color="gray.800" mt={4} bg= "gray.200" >
              <AlertIcon  />
              ¡Publicado!
            </Alert>
          )}
          </form>
        </Stack>
      </Box>
    </Flex>
  );
}

export default FormServicio;
