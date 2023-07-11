/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import SelectCategories from '../../singleComponents/SelectCategories'
import FilterByRating from '../Filteres/FilterByRating'
import FilterByGenres from '../Filteres/FilterByGenres'
// import { useState } from 'react'

export default function FiltersPanel () {
  // const [category, setCategory] = useState('')
  // const [ocupations, setOcupations] = useState([])

  // function addOcupation (value) {
  //   setOcupations((prevState) => [...prevState, value])
  // }

  return (
    <Box
      bg={useColorModeValue('gray.800', 'gray.800')}
      color={useColorModeValue('gray.50', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW='6xl'
        py={4}
        spacing={4}
        justify='center'
        align='center'
        direction='row'
        wrap='wrap'
      >
        <SelectCategories />
        <FilterByRating />
        <FilterByGenres />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW='6xl'
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'start', md: 'start', lg: 'start' }}
        >
          <Text>Resultados para</Text>
        </Container>
      </Box>
    </Box>
  )
}
