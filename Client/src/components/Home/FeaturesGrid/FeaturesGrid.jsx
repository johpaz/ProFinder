import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = [
  {
    id: 1,
    title: 'No salgas de tu casa',
    text: 'Nuestro sitio permite ubicar los servicios que esten dentro de tu zona',
  },
  {
    id: 2,
    title: 'Transaccion segura',
    text: 'Somos garantía del servicio que ofrecen las personas del sitio',
  },
  {
    id: 3,
    title: 'Busqueda focalizada',
    text: 'Navega entre nuestras categorias para dar exactamente con lo que estas buscando',
  },
  {
    id: 4,
    title: 'Tu opinion importa',
    text: 'Nuestro sitio es una experiencia basada en el usuario. Por lo que tu interaccion es muy valiosa para nosotros',
  },
];

export default function GFeaturesGrid() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Una solucion para cada necesidad. </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Esta página ofrece muchas ventajas. Nuestro servicio se encarga de hacer el match perfecto para la solucion a tus problemas.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}