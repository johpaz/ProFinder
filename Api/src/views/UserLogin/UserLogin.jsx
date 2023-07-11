import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  FormErrorMessage
} from '@chakra-ui/react'
import { useState } from 'react'
import { validateEmail } from '../../services/validators/validationsLogin'

export default function SimpleCard () {
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  function handleChange (event) {
    const key = event.target.id
    const value = event.target.value
    setForm({
      ...form,
      [key]: value
    })
  }

  function handleClick () {

  }

  function handleSubmit (event) {
    event.preventDefault()
    validateEmail(form.email, errors, setErrors)
    if (errors.email === '' && errors.password === '') {
      setLoading(true)
      // hacemos dispatch para loggear en el backend
      // segun la respuesta mostramos alert
      toast({
        title: 'Sesion iniciada',
        description: 'Es un placer verte de nuevo',
        status: 'success',
        duration: 4000,
        isClosable: true,
        onCloseComplete: () => setLoading(false)
      })
    } else {
      toast({
        title: 'El usuario no existe',
        description: 'Le invitamos a crearse una cuenta con nosotros.',
        status: 'errors',
        duration: 4000,
        isClosable: true,
        onCloseComplete: () => setLoading(false)
      })
    }
  }

  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.800', 'gray.800')}
    >
      <Stack
        spacing={8}
        mx='auto'
        maxW='lg'
        py={12}
        px={6}
      >
        <Stack align='center'>
          <Heading
            fontSize='4xl'
            bgGradient='linear(to-l, teal.300, green.400)'
            bgClip='text'
          >
            Hola de nuevo!
          </Heading>
          <Text fontSize='lg' color='gray.300'>
            Ingresa para disfrutar de todos nuestros <Link color='teal.300'>servicios</Link>
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Box // Formulario de Login
            rounded='lg'
            bg={useColorModeValue('blackAlpha.800', 'gray.800')}
            boxShadow='lg' p={8}
          >
            <Stack spacing={4}>
              <FormControl id='email' color='gray.300' isRequired isInvalid={errors.email}>
                <FormLabel color='gray.300'>Correo electronico</FormLabel>
                <Input
                  type='email'
                  focusBorderColor='teal.400'
                  placeholder='ejemplo@gmail.com'
                  id='email'
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl id='password' color='gray.300' isRequired>
                <FormLabel color='gray.300'>Contraseña</FormLabel>
                <Input type='password' focusBorderColor='teal.400' />
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align='start' justify='space-between'>
                  <Checkbox color='gray.300'>Recordarme</Checkbox>
                </Stack>
                <Stack spacing={5}>
                  <Button bg='teal.50' color='black' _hover={{ bg: 'teal.100' }}>
                    Google
                  </Button>
                  {/* <Button bg='blue.600' color='white' _hover={{ bg: 'blue.700' }}>
                  Facebook
                </Button> */}
                  {
                    (loading)
                      ? (
                        <Button
                          bg='teal.400'
                          color='white'
                          _hover={{ bg: 'teal.500' }}
                          isLoading
                        />
                        )
                      : (
                        <Button
                          bg='teal.400'
                          color='white'
                          _hover={{ bg: 'teal.500' }}
                          type='submit'
                          onClick={handleClick}
                        >
                          Ingresar
                        </Button>
                        )
                  }
                  <Text color='gray.300' letterSpacing='0.5px'>
                    Aun no tienes una cuenta? Registrate gratis
                    <Link color='teal.300' ml='0.3rem'>
                      aqui
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  )
}
