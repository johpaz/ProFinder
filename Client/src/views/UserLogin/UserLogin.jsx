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
  } from '@chakra-ui/react';
  
  export default function SimpleCard() {
    return (
      <Flex minH='100vh' align='center' justify='center' bg={useColorModeValue('gray.900', 'gray.800')}>
        <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
          <Stack align='center'>
            <Heading fontSize='4xl' bgGradient='linear(to-l, teal.300, green.400)'bgClip='text'>
              Hola de nuevo!
            </Heading>
            <Text fontSize='lg' color='gray.300'>
              Ingresa para disfrutar de todos nuestros <Link color='teal.300'>servicios</Link>
            </Text>
          </Stack>
          <Box rounded='lg' bg={useColorModeValue('blackAlpha.500', 'gray.700')} boxShadow='lg' p={8}>
            <Stack spacing={4}>
              <FormControl id="email" color='gray.300'>
                <FormLabel color='gray.300'>Correo electronico</FormLabel>
                <Input type="email" focusBorderColor='teal.400' />
              </FormControl>
              <FormControl id="password" color='gray.300'>
                <FormLabel color='gray.300'>Contraseña</FormLabel>
                <Input type="password" focusBorderColor='teal.400'/>
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align='start' justify='space-between'>
                  <Checkbox color='gray.300'>Recordarme</Checkbox>
                </Stack>
                <Stack spacing={5}>
                  <Button bg='teal.50' color='black' _hover={{ bg: 'teal.100' }}>
                    Google
                  </Button>
                  <Button bg='blue.600' color='white' _hover={{ bg: 'blue.700' }}>
                    Facebook
                  </Button>
                  <Button bg='teal.400' color='white' _hover={{ bg: 'teal.500' }}>
                    Ingresar
                  </Button>
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
        </Stack>
      </Flex>
    );
  }