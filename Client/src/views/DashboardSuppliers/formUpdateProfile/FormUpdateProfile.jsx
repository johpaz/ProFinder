import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  getAllCategories,
  updateProfesionals,
} from "../../../services/redux/actions/actions";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  Button,
  useColorModeValue,
  Radio,
  RadioGroup,
  Select,
  CircularProgress,
} from "@chakra-ui/react";
import SelectCategories from "../../../singleComponents/SelectCategories";
import { uploadFile } from "../../../utils/Firebase/config";
import { useSessionState } from "../../../services/zustand/useSession";


function FormUpdateProfile() {
  const session =  useSessionState((state) => state.session);
  //console.log(session);
  // const profile  = useSelector(state=> state.profesionales)
  // const userById = profile.filter((user)=> user.id === session.id);
  // console.log(userById);
 

  const [genre, setGenre] = useState("male");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: session.name,
      email: session.email,
      image: [],
      genre: "",
      years_exp: "",
      password: session.password,
      countryId: "",
      locationId: "",
      phone: "",
      categories: [],
      ocupations: [],
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedOccupations, setSelectedOccupations] = useState([]);
  const [countries, setCountries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://backprofinder-production.up.railway.app/country")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCountryChange = (countryId) => {
    setSelectedCountry(countryId);

    if (countryId) {
      fetch(
        `https://backprofinder-production.up.railway.app/country/${countryId}`
      )
        .then((response) => response.json())
        .then((data) => {
          const selectedCountry = data;
          if (selectedCountry) {
            fetch("https://backprofinder-production.up.railway.app/location")
              .then((response) => response.json())
              .then((locationsData) => {
                const filteredLocations = locationsData.filter(
                  (location) => location.CountryId === selectedCountry.id
                );
                setLocations(filteredLocations);
              })
              .catch((error) => console.log(error));
          } else {
            setLocations([]);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setLocations([]);
    }
  };

  const envioCategoria = (value) => {
    setSelectedCategory([value]);
  };

  const envioOcupaciones = (value) => {
    setSelectedOccupations(value);
  };

  const onSubmit = async (data) => {
    const imageData = await uploadFile(data.image);

    const selectedCountryObj = countries.find(
      (country) => country.id === parseInt(data.country)
    );
    const selectedLocationObj = locations.find(
      (location) => location.id === parseInt(data.location)
    );

    const newData = {
      name: data.name,
      email: data.email,
      image: imageData,
      genre: genre,
      years_exp: data.years_exp,
      password: data.password,
      CountryId: selectedCountryObj?.id,
      LocationId: selectedLocationObj?.id,
      phone: data.phone,
      ocupations: [selectedOccupations],
      categories: selectedCategory,
    };

    const sessionData = {
      name: data.name,
      email: data.email,
      password: data.password,
      usuario: "p",
    };

    //console.log(newData);

    await dispatch(updateProfesionals(newData, session.id));
    localStorage.removeItem("userSession");
    localStorage.setItem("userSession", JSON.stringify(sessionData));
    const userSesion = localStorage.getItem("userSession");
    console.log(userSesion);
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.800", "gray.800")}
      width="100%"
    >
      <Box rounded="lg" boxShadow="lg" p={8} color="gray.300">
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Nombre y apellido</FormLabel>
              <Input
                type="text"
                {...register("name", {
                  required: "El campo nombre es requerido",
                })}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                {...register("email", {
                  required: "El campo email es requerido",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: "El formato del email es incorrecto",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Telefono</FormLabel>
              <Input
                type="number"
                {...register("phone", {
                  required: "El campo telefono es requerido",
                })}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>País</FormLabel>
              <Select
                {...register("country", {
                  required: "El campo país es requerido",
                })}
                // bg={useColorModeValue("white", "gray.700")}
                borderWidth="1px"
                // color="gray.800"
                onChange={(e) => handleCountryChange(parseInt(e.target.value))}
              >
                <option value="">Seleccionar país</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </Select>
              {errors.country && <p>{errors.country.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Provincia/Estado</FormLabel>
              <Select
                {...register("location", {
                  required: "El campo provincia/estado es requerido",
                })}
                // bg={useColorModeValue("white", "gray.700")}
                borderWidth="1px"
                // color="gray.800"
              >
                <option value="">Seleccionar provincia/estado</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </Select>
              {errors.location && <p>{errors.location.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Foto de perfil</FormLabel>
              <Input
                type="file"
                {...register("image", {
                  required: "El campo imagen es requerido",
                  validate: {
                    isImage: (value) =>
                      ["image/jpeg", "image/png"].includes(value[0]?.type) ||
                      "Solo se permiten archivos de imagen JPEG o PNG",
                  },
                })}
              />
              {errors.image && <p>{errors.image.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Género</FormLabel>
              <RadioGroup onChange={setGenre} value={genre}>
                <Stack direction="row">
                  <Radio value="female">Femenino</Radio>
                  <Radio value="male">Masculino</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Años de experiencia</FormLabel>
              <NumberInput defaultValue={0} min={0} max={100}>
                <NumberInputField
                  {...register("years_exp", { required: true })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Categorías</FormLabel>
              <SelectCategories
                fnSelectCategory={envioCategoria}
                fnSelectOcupation={envioOcupaciones}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                {...register("password", {
                  required: "El campo contraseña es requerido",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener minimo 8 caracteres",
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel />
              {isLoading ? (
                <CircularProgress
                  isIndeterminate
                  size="24px"
                  color="blue.500"
                />
              ) : (
                <>
                  <Button
                    type="submit"
                    loadingText="Creando cuenta"
                    size="lg"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Actualizar
                  </Button>
                </>
              )}
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
}

export default FormUpdateProfile;
