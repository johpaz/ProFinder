import {
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  FILTER_BY_CATEGORY,
  SEARCH_PROFESSIONALS,
  FILTER_BY_GENRES,
  ORDER_BY_RATING
} from '../actionsTypes/actionsType'

const initialState = {
  suppliers: [],
  backup: [],
  categories: [],
  filteredCategories: [],
  filteredSuppliers: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUPPLIERS:
      return {
        ...state,
        backup: action.payload,
        suppliers: action.payload
      }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case FILTER_BY_CATEGORY: {
      const filteredCategories = state.categories.filter(
        (category) => category.nombre === action.payload
      )
      return {
        ...state,
        filteredCategories
      }
    }
    case SEARCH_PROFESSIONALS:
      return {
        ...state,
        professionals: action.payload
      }
      //! filtro por rating
    case ORDER_BY_RATING: {
      const sortedProfessionals = [...state.backup].sort((a, b) => {
        if (action.payload === 'lower') {
          return a.rating - b.rating
        } else if (action.payload === 'higher') {
          return b.rating - a.rating
        }
        return 0
      })

      return {
        ...state,
        suppliers: [...sortedProfessionals]
      }
    }
    //! filtro de busqueda por generos
    case FILTER_BY_GENRES: {
      const backup = state.backup
      const filteredSuppliers =
        action.payload === 'All'
          ? backup
          : backup.filter((supplier) => supplier.genre === action.payload)

      return {
        ...state,
        suppliers: filteredSuppliers
      }
    }
    //! caso por default
    default:
      return { ...state }
  }
}

export default reducer
