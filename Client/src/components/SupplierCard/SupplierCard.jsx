import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import Tag from '../../singleComponents/Tag/Tag'

export default function SocialProfileSimple() {
  return (
      <Box
        maxW='320px'
        w='full'
        colorMode
        bg={useColorModeValue('gray.900', 'gray.900')}
        boxShadow='2xl'
        rounded='lg'
        p={6}
        textAlign='center'>
        <Avatar size='xl'
          src='https://c8.alamy.com/compes/2bbefc4/el-instalador-muestra-pulgares-hacia-arriba-2bbefc4.jpg'
          alt='Avatar Alt'
          mb={4}
          pos='relative'
        />
        <Heading fontSize='2xl' fontFamily='body' color='gray.300'>
          Trevor Aquino
        </Heading>
        <Text fontWeight={600} color='gray.500' mb={4}>
          @aquinotrevor@gmail.com
        </Text>
        <Stack
          align='center'
          justify='center'
          direction='row'
          mb={2}>
          <StarIcon color='yellow'/>
          <StarIcon color='yellow'/>
          <StarIcon color='yellow'/>
          <StarIcon color='white'/>
          <StarIcon color='white'/>
        </Stack>
        <Text
          textAlign='center'
          color={useColorModeValue('gray.500', 'gray.400')}
          px={3}>
          Servicio de cerrajeria a domicilio 24hs. Aperturas, cambios de combinacion, copias de llaves, reparacion de cerraduras, venta y colocacion de cerraduras nuevas.
        </Text>

        <Stack
          align='center'
          justify='center'
          direction='row'
          mt={6}>
          <Tag textTag='Electricista' />
          <Tag textTag='Plomero' />
          <Tag textTag='Pintor' />
        </Stack>

        <Stack mt={8} direction='row' spacing={4}>
          <Button
            flex={1}
            fontSize='sm'
            rounded='lg'
            _hover={{ bg: 'gray.300' }}>
            Ver detalles
          </Button>
          <Button
            flex={1}
            fontSize='sm'
            rounded='lg'
            bg='teal.400'
            color='white'
            _hover={{
              bg: 'teal.500',
            }}>
            Enviar mensaje
          </Button>
        </Stack>
      </Box>
  );
}