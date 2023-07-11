import profesion from '../../assets/categoriesIcons/fontanero.png'
import leer from '../../assets/categoriesIcons/mecanico.png'
import styles from './HowDoesItWork.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Box, Flex, Heading, Text, Center, VStack } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'

const HowDoesItWork = () => {
  // aqui empiezo el estado local y la logica para el renderizado condicional
  const [showClientSection, setShowClientSection] = useState(false) // section para clientes
  const [showProfesionalSection, setShowProfesionalSection] = useState(false) // section para profesionales
  const [changeViewBtn, setChangeViewBtn] = useState(false) // cambiar el btn segun ..... ver mas o ver menos

  //   const handleChangeClick = () => {
  //     setChangeViewBtn(!changeViewBtn);
  //   };
  //   console.log(changeViewBtn);

  const handleProfesionalClick = () => {
    setShowProfesionalSection(!showProfesionalSection)
    setChangeViewBtn(!changeViewBtn)
  }

  const handleClientClick = () => {
    setShowClientSection(!showClientSection)
    setChangeViewBtn(!changeViewBtn)
  }

  return (
    <Flex // Section completa
      direction='column'
      bg={useColorModeValue('gray.800', 'gray.800')}
      px={8}
      py={6}
    >
      <Flex // container de las tarjetas
        direction='row'
        justify='center'
        gap='5rem'
      >
        <Flex // card  Eres Profesional
          bg={useColorModeValue('blackAlpha.800', 'gray.800')}
          boxShadow='lg'
          p={8}
          rounded='lg'
          direction='column'
          align='center'
          width='390px'
          height='390px'
        >
          <Heading
            fontSize='3xl'
            bgGradient='linear(to-l, teal.300, green.400)'
            bgClip='text'
            textAlign='center'
          >
            ¿Eres Profesional?
          </Heading>
          <Link>
            <Box overflow='hidden'>
              <Image
                src={profesion}
                boxSize='250px'
                transform='scale(1.0)'
                alt='Icono profesional'
                objectFit='cover'
                transition='0.3s ease-in-out'
                _hover={{
                  transform: 'scale(1.05)'
                }}
              />
            </Box>
          </Link>
          <Button
            width='80%'
            bg='blue.600'
            color='white'
            _hover={{ bg: 'blue.700' }}
            onClick={() => {
              handleProfesionalClick()
            }}
          >
            {changeViewBtn ? 'Ver Menos' : 'Ver Más'}
          </Button>
        </Flex>
        {showProfesionalSection && (
          <Box
            className={styles.sectionClient}
            p={8}
            bg='blackAlpha.800'
            boxShadow='lg'
            rounded='lg'
          >
            <Heading as='h2' size='xl' color='gray.800' marginBottom='4'>
              ¿Eres un profesional y quieres ofrecer tus servicios?
            </Heading>
            <VStack spacing='4' alignItems='flex-start'>
              <Heading as='h3' size='md' color='blue.600'>
                Regístrate
              </Heading>
              <Heading as='h3' size='md' color='blue.600'>
                Inicia sesión
              </Heading>
              <Heading as='h3' size='md' color='blue.600'>
                Adquiere tu suscripción premium ( Opcional )
              </Heading>
              <Heading as='h3' size='md'>
                Haz tu publicación, ofrece tus servicios y contacta con miles de
                usuarios.
              </Heading>
            </VStack>
          </Box>
        )}
        <Flex // card  buscas un profesional
          bg={useColorModeValue('blackAlpha.800', 'gray.800')}
          boxShadow='lg'
          p={8}
          rounded='lg'
          direction='column'
          align='center'
          width='400px'
          height='390px'
        >
          <Heading
            fontSize='3xl'
            bgGradient='linear(to-l, teal.300, green.400)'
            bgClip='text'
            textAlign='center'
          >
            ¿Buscas un Profesional?
          </Heading>
          <Link>
            <Box overflow='hidden'>
              <Image
                src={leer}
                boxSize='250px'
                transform='scale(1.0)'
                alt='Icono busqueda profesional'
                objectFit='cover'
                transition='0.3s ease-in-out'
                _hover={{
                  transform: 'scale(1.05)'
                }}
              />
            </Box>
          </Link>
          <Button
            bg='blue.600'
            width='80%'
            color='white'
            _hover={{ bg: 'blue.700' }}
            onClick={() => {
              handleClientClick()
            }}
          >
            {changeViewBtn ? 'Ver Menos' : 'Ver Más'}
          </Button>
        </Flex>
        {showClientSection && (
          <Box
            className={styles.sectionClient}
            p={8}
            bg='blackAlpha.800'
            boxShadow='lg'
            rounded='lg'
          >
            <Text color='gray.300' fontSize='lg'>
              aca va toda la informacion de como funciona la plataforma para
              personas que buscan un servicio <br /> <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              iusto quae minus cumque voluptate ipsum, ex pariatur corporis
              repellendus consectetur dolorem ducimus, aut provident culpa
              dignissimos itaque quod ut optio. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, sequi dolores harum
              laborum unde voluptatum odit perferendis quis nostrum a dolorum
              commodi, nam optio voluptate ducimus reprehenderit eos molestias
              in!
            </Text>
          </Box>
        )}
      </Flex>

      <Center marginTop='20px'>
        <Button
          bg='blue.600'
          width='20%'
          color='white'
          _hover={{ bg: 'blue.700' }}
        >
          Obtén más información sobre el plan premium
        </Button>
      </Center>
    </Flex>
  )
}
export default HowDoesItWork
