/* eslint-disable react/prop-types */
import { Image } from '@chakra-ui/image'
import { Box, Heading, Text, WrapItem } from '@chakra-ui/layout'
import SinImagen from '../../assets/defaultImages/sinImagen.webp'

export default function SupplierPost ({ imagePost, titularPost, descriptionPost }) {
  const responsiveWidth = {
    base: '100%',
    sm: '45%',
    md: '45%',
    lg: '30%'
  }

  const hoverStyles = {
    transform: 'scale(1.05)',
    cursor: 'pointer'
  }

  return (
    <WrapItem width={responsiveWidth}>
      {/* //! Container post */}
      <Box width='100%'>
        <Box //! imagen post
          borderRadius='lg'
          overflow='hodden'
        >
          <Image
            transform='scale(1.0)'
            src={imagePost}
            fallbackSrc={SinImagen}
            loading='lazy'
            alt='image Post'
            objectFit='cover'
            width='100%'
            height='240px'
            borderRadius='lg'
            transition='0.3s ease-in-out'
            _hover={hoverStyles}
          />
        </Box>
        {/* //! titular post */}
        <Heading
          fontSize='xl'
          mt={2}
        >
          {titularPost || 'Sin titular'}
        </Heading>
        {/* //! Description post */}
        <Text
          as='p'
          fontSize='md'
          mt={2}
        >
          {descriptionPost || 'Sin descripcion'}
        </Text>
      </Box>
    </WrapItem>
  )
}
