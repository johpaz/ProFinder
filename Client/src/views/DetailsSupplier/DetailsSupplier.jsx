import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Wrap,
  useColorModeValue,
  Container,
  Stack,
  // useDisclosure,
  // Button,
  Flex,
  ScaleFade
} from '@chakra-ui/react'
import { FaUserAlt, FaRegPaperPlane, FaMailBulk, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/customHooks/useFetch'
import { API } from '../../utils/API/constants'
import NoAvatar from '../../assets/defaultImages/sinfoto.webp'
import Tag from '../../singleComponents/Tag'
import InfoLabel from '../../singleComponents/InfoLabel'
import SupplierPost from '../../components/SupplierPost/SupplierPost'
// import ModalNewPost from '../../components/NewPost/ModalNewPost'

const ArticleList = () => {
  const { supplierID } = useParams()
  const { data, isLoading } = useFetch(`${API.DOMAIN}/profesional/${supplierID}`)
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container
      color='gray.300'
      bg={useColorModeValue('gray.800', 'gray.800')}
      maxW='100%'
      py='5'
      px={{ base: '8', md: '8', lg: '10rem' }}
    >
      {data && <Heading as='h1'>{data.name || 'Sin nombre'}</Heading>}
      {
        (isLoading)
          ? (<h2>Cargando</h2>)
          : (
            <ScaleFade initialScale={0.9} in>
              <Box
                p={7}
                bg='blackAlpha.800'
                marginTop={{ base: '1', sm: '5' }}
                display='flex'
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent='space-between'
              >
                <Box
                  display='flex'
                  flex='1'
                  marginRight='3'
                  position='relative'
                  alignItems='center'
                >
                  <Box
                    width={{ base: '100%', sm: '85%' }}
                    zIndex='2'
                    marginLeft={{ base: '0', sm: '5%' }}
                    marginTop='5%'
                  >
                    <Image
                      borderRadius='50%'
                      boxSize='300px'
                      src={data.image}
                      fallback={NoAvatar}
                      loading='lazy'
                      alt='avatar supplier'
                      objectFit='contain'
                    />
                  </Box>
                  <Box
                    zIndex='1'
                    width='100%'
                    position='absolute'
                    height='100%'
                  >
                    <Box
                      bgGradient='radial(teal.300 1px, transparent 1px)'
                      backgroundSize='20px 20px'
                      opacity='0.4'
                      height='100%'
                    />
                  </Box>
                </Box>
                <Box
                  display='flex'
                  flex='1'
                  flexDirection='column'
                  justifyContent='center'
                  marginTop={{ base: '3', sm: '0' }}
                >
                  <Stack
                    align='center'
                    justify='center'
                    direction='row'
                    my={4}
                  >
                    {
            data.professions &&
            data.professions.map(({ ocupations }) => {
              return ocupations.map(({ id, name }) => {
                return (
                  <Tag key={id} textTag={name} />
                )
              })
            })
          }
                  </Stack>
                  <Text
                    as='p'
                    marginTop='2'
                    color='gray.500'
                    fontSize='lg'
                    mb={5}
                  >
                    {data.description}
                  </Text>
                  <InfoLabel textLabel={data.genre} iconLabel={FaUserAlt} />
                  <InfoLabel textLabel={data.years_exp} iconLabel={FaRegPaperPlane} />
                  <InfoLabel textLabel={data.email} iconLabel={FaMailBulk} />
                  <InfoLabel textLabel={data.phone} iconLabel={FaPhone} />
                  <InfoLabel textLabel={data.ubication} iconLabel={FaMapMarkerAlt} />
                </Box>
              </Box>
            </ScaleFade>

            )
      }
      <Flex
        align='center'
        gap={{ md: '3rem', lg: '3rem' }}
        direction={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <Heading as='h2' marginTop='5'>
          Trabajos Recientes
        </Heading>
        {/* <Button
          onClick={onOpen}
          mt={{ base: '5', lg: '5' }}
          bg={useColorModeValue('blue.500', 'blue.400')}
          color='gray.50'
          _hover={{ bg: 'blue.600' }}
        >Crear publicación
        </Button> */}
      </Flex>
      <Divider marginTop='5' />
      {/* <ModalNewPost isOpen={isOpen} onClose={onClose} /> */}
      <Wrap
        spacing='30px'
        marginTop='5'
        justify='center'
      >
        {
        (data.jobimages)
          ? (
              data.jobimages.map(({ image, description }) => {
                return (
                  <SupplierPost
                    key={description}
                    imagePost={image[0]}
                    titularPost={description}
                    descriptionPost={description}
                  />
                )
              })
            )
          : (
            <Heading>No hay ninguna publicacion</Heading>
            )
      }
      </Wrap>
    </Container>
  )
}

export default ArticleList
