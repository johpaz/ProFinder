import { useDispatch } from 'react-redux'
import { orderByRating } from '../../services/redux/actions/actions'
import DropdownMenu from '../../singleComponents/DropdownMenu'

const FilterByRating = () => {
  const dispatch = useDispatch()
  const ratingOptions = [
    { name: 'Aleatorio' },
    { name: 'Mejor valorado' },
    { name: 'Menor valorado' }
  ]

  const handleSelectRating = (event) => {
    const { name } = event.target
    dispatch(orderByRating(name))
  }

  return (
    <DropdownMenu
      titleMenu='Rating'
      menuItems={ratingOptions}
      onClick={handleSelectRating}
    />
  )
}

export default FilterByRating
