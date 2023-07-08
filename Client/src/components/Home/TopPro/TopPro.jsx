import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  

  
  const Card = ({ heading, description, icon}) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function TopPro() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            PROFESIONALES RECOMENDADOS
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Aqui veras los servicios mas utilizados y mejor puntuados por nuestros usuarios.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'George Plumber'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                'Plomeria en el acto! Sus servicios son eficientes y eficaces. Tiene una gran dinamica de trabajo'
              }
              href={'#'}
            />
            <Card
              heading={'Marcus Truction'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                'Gran albañil destacado en la construccion de asadores y galerias. Ideal para refactorizacion de zonas'
              }
              href={'#'}
            />
            <Card
              heading={'Meque Trefe'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'Electricista matriculado de la ciudad de Zimbague. Super ordenado y atenido a la norma'
              }
              href={'#'}
            />
            <Card
              heading={'Susana Oria'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Electricista matriculada de la ciudad de Mozambique. Ideal para renormalizar una instalacion'
              }
              href={'#'}
            />
            <Card
              heading={'Marciana Pazos'}
              icon={<Icon as={FcAbout} w={10} h={10} />}
              description={
                'Gasista matriculada. Conexion de estufas y hornos '
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }