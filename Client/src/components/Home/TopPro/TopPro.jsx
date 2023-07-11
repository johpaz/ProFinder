/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { FcAbout, FcAssistant, FcCollaboration, FcDonate, FcManager } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Card = ({ heading, description, icon, to }) => {
  const cardColor = useColorModeValue('gray.300', 'blackAlpha.500')
  const linkColor = useColorModeValue('teal.400', 'teal.400')

  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w='full'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      p={5}
      bg={cardColor}

    >
      <Stack align='start' spacing={2}>
        <Flex
          w={16}
          h={16}
          align='center'
          justify='center'
          color='white'
          rounded='full'
          bg={useColorModeValue('gray.900', 'blackAlpha.500')}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size='md'>{heading}</Heading>
          <Text mt={1} fontSize='sm'>
            {description}
          </Text>
        </Box>
        <Link to={to} variant='link' color={linkColor} size='sm'>
          Learn more
        </Link>
      </Stack>
    </Box>
  )
}

export default function TopPro () {
  const backgroundColor = useColorModeValue('gray.900', 'gray.900')

  return (
    <Box p={4} bg={backgroundColor} h='100vh' width='100%'>
      <Stack spacing={4} as={Container} maxW='3xl' textAlign='center'>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight='bold' color='gray.300'>
          PROFESIONALES RECOMENDADOS
        </Heading>
        <Text color='gray.300' fontSize={{ base: 'sm', sm: 'lg' }}>
          Aquí verás los servicios más utilizados y mejor puntuados por nuestros usuarios.
        </Text>
      </Stack>

      <Container maxW='5xl' mt={12}>
        <Flex flexWrap='wrap' gridGap={6} justify='center'>
          <Card
            heading='George Plumber'
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description='Plomería en el acto! Sus servicios son eficientes y eficaces. Tiene una gran dinámica de trabajo'
            to='/detail/1'
          />
          <Card
            heading='Marcus Truction'
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description='Gran albañil destacado en la construcción de asadores y galerías. Ideal para refactorización de zonas'
            to='/detail/2'
          />
          <Card
            heading='Meque Trefe'
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description='Electricista matriculado de la ciudad de Zimbague. Súper ordenado y atenido a la norma'
            to='/detail/3'
          />
          <Card
            heading='Susana Oria'
            icon={<Icon as={FcManager} w={10} h={10} />}
            description='Electricista matriculada de la ciudad de Mozambique. Ideal para renormalizar una instalación'
            to='/detail/4'
          />
          <Card
            heading='Marciana Pazos'
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description='Gasista matriculada. Conexión de estufas y hornos'
            to='/detail/5'
          />
        </Flex>
      </Container>
    </Box>
  )
}
