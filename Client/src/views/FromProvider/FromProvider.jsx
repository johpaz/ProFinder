import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import {
  getAllCategories,
  postProveedor
} from '../../services/redux/actions/actions'
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
  Textarea,
  Stack,
  Button,
  useColorModeValue,
  Radio,
  RadioGroup,
  Select
} from '@chakra-ui/react'

function FormProvider (props) {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      image: '',
      genre: '',
      years_exp: '',
      description: '',
      ubicacion: '',
      phone: '',
      ocupations: [],
      categories: []
    }
  })

  const categorias = useSelector((state) => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedOccupations, setSelectedOccupations] = useState([])
  const [value, setValue] = useState('')

  const envioCategoria = (event) => {
    const value = event.target.value
    setSelectedCategory([value])
  }

  // const envioOcupaciones = (event) => {
  //   const value = event.target.value;
  //   setSelectedOccupations([value]);

  // };
  const envioOcupaciones = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    )
    setSelectedOccupations(selectedOptions)
  }

  const onSubmit = (data) => {
    const newData = {
      name: data.name,
      email: data.email,
      image: data.image,
      genre: data.genre,
      years_exp: data.years_exp,
      phone: data.phone,
      ubication: data.ubicacion,
      description: data.description,
      ocupations: selectedOccupations,

      categories: selectedCategory
    }

    dispatch(postProveedor(newData))
  }

  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.800', 'gray.800')}
      width='100%'
    >
      <Box
        rounded='lg'
        bg={useColorModeValue('blackAlpha.800', 'gray800')}
        boxShadow='lg'
        p={8}
        color='gray.300'
      >
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Nombre y apellido</FormLabel>
              <Input
                type='text'
                {...register('name', {
                  required: 'El campo nombre es requerido'
                })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                {...register('email', {
                  required: 'El campo email es requerido',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: 'El formato del email es incorrecto'
                  }
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Telefono</FormLabel>
              <Input
                type='number'
                {...register('phone', {
                  required: 'El campo telefono es requerido'
                })}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Ubicacion</FormLabel>
              <Input
                type='text'
                {...register('ubicacion', {
                  required: 'El campo ubicacion es requerido'
                })}
              />
              {errors.ubicacion && <p>{errors.ubicacion.message}</p>}
            </FormControl>

            {/* <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" />
            </FormControl> */}

            <FormControl>
              <FormLabel>Foto de perfil</FormLabel>
              <Input
                type='url'
                {...register('image', {
                  required: 'El campo imagen es requerido'
                })}
              />
              {errors.image && <p>{errors.image.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel>Género</FormLabel>
              <RadioGroup onChange={(value) => setValue(value)} value={value}>
                <Stack direction='row'>
                  <Radio
                    {...register('genre', {
                      required: 'Seleccione una opción de género'
                    })}
                    value='female'
                  >
                    Femenino
                  </Radio>
                  <Radio
                    {...register('genre', {
                      required: 'Seleccione una opción de género'
                    })}
                    value='male'
                  >
                    Masculino
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Años de experiencia</FormLabel>
              <NumberInput defaultValue={0} min={0} max={100}>
                <NumberInputField
                  {...register('years_exp', {
                    required: true
                  })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Categorías</FormLabel>
              <Select
                placeholder='Seleccione una categoría'
                value={
                  selectedCategory && selectedCategory.nombre
                    ? selectedCategory.nombre
                    : ''
                }
                {...register('categories')}
                onChange={envioCategoria}
              >
                {categorias?.map((categoria, index) => (
                  <option value={categoria.nombre} key={index}>
                    {categoria.nombre}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Ocupación</FormLabel>
              <Select
                placeholder='Seleccione una ocupación'
                {...register('occupations', {
                  validate: (value) => value.length > 0
                })}
                onChange={envioOcupaciones}
              >
                {categorias &&
                  selectedCategory.length > 0 &&
                  categorias
                    .find(
                      (categoria) => categoria.nombre === selectedCategory[0]
                    )
                    ?.profesiones?.map((profesion, index) => (
                      <option value={profesion.name} key={index}>
                        {profesion.name}
                      </option>
                    ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Descripción</FormLabel>

              <Textarea
                type='description'
                isRequired
                {...register('description', {
                  required: 'El campo descripción es requerido'
                })}
              />
              {errors.description && <p>{errors.description.message}</p>}
            </FormControl>

            <FormControl>
              <FormLabel />
              <Button
                type='submit'
                loadingText='Submitting'
                size='lg'
                bg='blue.400'
                color='white'
                _hover={{
                  bg: 'blue.500'
                }}
              >
                Registrarme
              </Button>
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Flex>
  )
}

export default FormProvider
