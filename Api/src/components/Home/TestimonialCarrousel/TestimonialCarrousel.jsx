/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react'

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>
}

const TestimonialContent = ({ children }) => {
  const gradientStart = useColorModeValue('gray.200', 'gray.600')
  const gradientEnd = useColorModeValue('gray.300', 'gray.700')
  const gradient = `linear(to-r, ${gradientStart}, ${gradientEnd})`

  return (
    <Stack
      bgGradient={gradient}
      boxShadow='2xl'
      p={8}
      rounded='xl'
      align='center'
      pos='relative'
      _after={{
        content: '""',
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: gradientStart,
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      {children}
    </Stack>
  )
}

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as='h3' fontSize='xl'>
      {children}
    </Heading>
  )
}

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign='center'
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize='sm'
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align='center' mt={8} direction='column'>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align='center'>
        <Text fontWeight={600}>
          <Text as='span' color='gray.300'>
            {name}
          </Text>
        </Text>
        <Text fontSize='sm' color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function TestimonialCarrousel () {
  return (
    <Box bg='gray.900' h='100vh'>
      <Container py={16} as={Stack} spacing={12} w='100%' maxW='100%'>
        <Stack spacing={0} align='center'>
          <Heading color={useColorModeValue('gray.300', 'white')}>
            Nuestros usuarios opinan!
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            Tenemos usuarios alrededor de todo el mundo
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Un cambio significativo en mi vida!
              </TestimonialHeading>
              <TestimonialText color='gray.300'>
                Esta aplicación ha podido contactarme con muchas soluciones a los conflictos de la vida cotidiana.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src='https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              name='Jane Cooper'
              title='CEO at ABC Corporation'
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading color='gray.300'>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src='https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              name='Jane Cooper'
              title='CEO at ABC Corporation'
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading color='gray.300'>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src='https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              name='Jane Cooper'
              title='CEO at ABC Corporation'
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
