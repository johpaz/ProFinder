import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { passwordBackRules, emailRules } from '../../views/UserLogin/loginValidations.js'
import { useForm } from 'react-hook-form'

export default function ResetPassword () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const customSubmit = (data) => {
    console.info(data)
  }

  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w='full'
        maxW='md'
        bg={useColorModeValue('white', 'gray.700')}
        rounded='xl'
        boxShadow='lg'
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Ingresa la nueva contraseña
        </Heading>
        <form onSubmit={handleSubmit(customSubmit)}>
          <FormControl color='gray.300' isInvalid={errors.email}>
            <FormLabel color='gray.300'>Correo electronico</FormLabel>
            <Input
              type='email'
              focusBorderColor={errors.email ? 'red.500' : 'teal.400'}
              placeholder='ejemplo@gmail.com'
              {...register('email', emailRules)}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl color='gray.300' isInvalid={errors.password}>
            <FormLabel color='gray.300'>Contraseña</FormLabel>
            <Input
              type='password'
              focusBorderColor={errors.password ? 'red.500' : 'teal.400'}
              {...register('password', passwordBackRules)}
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
          <Stack spacing={6}>
            <Button
              type='submit'
              bg='blue.400'
              color='white'
              mt={10}
              _hover={{
                bg: 'blue.500'
              }}
            >
              Reestablecer contraseña
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  )
}
