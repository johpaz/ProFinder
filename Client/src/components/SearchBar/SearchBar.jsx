/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { searchProfessionals } from '../../services/redux/actions/actions'
import { Input, Button, Flex } from '@chakra-ui/react'

const SearchBar = ({ searchTerm, setSearchTerm, cards }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchProfessionals())
  }, [dispatch])

  const handleSearch = async () => {
    try {
      const response = await dispatch(searchProfessionals(searchTerm))
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Flex alignItems='center' justifyContent='center' mb={4} color='gray.500'>
      <Input
        type='text'
        placeholder='Search professionals'
        value={searchTerm}
        onChange={handleInputChange}
        mr={2}
      />
      <Button colorScheme='teal' onClick={handleSearch}>
        Search
      </Button>
    </Flex>
  )
}

export default SearchBar
