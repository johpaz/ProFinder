import { useDispatch } from 'react-redux'
import { filterByGenres } from '../../services/redux/actions/actions'
import DropdownMenu from '../../singleComponents/DropdownMenu'

const FilterByGenres = () => {
  const dispatch = useDispatch()
  const genreOptions = [
    { name: 'Todos' },
    { name: 'Masculino' },
    { name: 'femenino' }
  ]

  const handlerByGenres = (event) => {
    const { name } = event.target
    dispatch(filterByGenres(name))
  }

  return (
    <DropdownMenu
      titleMenu='Genero'
      menuItems={genreOptions}
      onClick={handlerByGenres}
    />
  )
}

export default FilterByGenres
