/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllCategories } from '../services/redux/actions/actions'
import { Stack } from '@chakra-ui/layout'
import DropdownMenu from './DropdownMenu'

export default function SelectCategories ({ fnSelectCategory, fnSelectOcupation }) {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)
  const [categoryName, setCategoryName] = useState('Categorias')
  const [ocupationName, setOcupationName] = useState('Ocupacion')
  const [ocupationsArray, setOcupationsArray] = useState([])

  function handleClickCategory (event) {
    const { name } = event.target
    setCategoryName(name)
    setOcupationName('Ocupacion')
    const array = categories.find(item => item.name === name)
    setOcupationsArray(array.Ocupations)
    fnSelectCategory && fnSelectCategory(name)
  }

  function handleClickOcupation (event) {
    const { name } = event.target
    setOcupationName(name)
    fnSelectOcupation && fnSelectOcupation(name)
  }

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  return (
    <Stack direction='row' spacing={6}>
      <DropdownMenu
        titleMenu={categoryName}
        menuItems={categories}
        onClick={handleClickCategory}
      />
      <DropdownMenu
        titleMenu={ocupationName}
        menuItems={ocupationsArray}
        onClick={handleClickOcupation}
      />
    </Stack>
  )
}
