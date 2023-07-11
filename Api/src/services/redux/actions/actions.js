/* eslint-disable camelcase */
import { API, LOCAL } from '../../../utils/API/constants'
import axios from 'axios'
import {
  FILTER_BY_CATEGORY,
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  SEARCH_PROFESSIONALS,
  ORDER_BY_RATING,
  FILTER_BY_GENRES
} from '../actionsTypes/actionsType'

//! Action para obtener a todos lo Proveedores/Profesionales
const getAllSuppliers = () => {
  // const URL = `${API.DOMAIN}/profesional`
  const URL = LOCAL.pofesional

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        console.info('fetching-all-suppliers')
        dispatch({ type: GET_ALL_SUPPLIERS, payload: results })
      })
      .catch((error) => console.error(error.message))
  }
}

//! Todas las categorias con su ID
const getAllCategories = () => {
  // const URL = API.DOMAIN
  const URL = LOCAL.category
  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: results
        })
      })
      .catch((error) => console.error(error.message))
  }
}

//! Filtrar por categoria
const filterByCategory = (category) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category
  }
}

const resetCategoryFilter = () => {
  return {
    type: 'RESET_CATEGORY_FILTER'
  }
}

//! action para buscar por nombre de profesion
export const searchProfessionals = (name) => {
  const URL = API.DOMAIN
  // const URL = LOCAL.profesionalOcupation
  return function (dispatch) {
    fetch(`${URL}/ocupations?name=${name}`)
      .then((response) => response.json())
      .then((results) => {
        console.info(results)
        dispatch({
          type: SEARCH_PROFESSIONALS,
          payload: results
        })
      })
      .catch((error) => console.error(error.message))
  }
}

//!
const orderByRating = (payload) => {
  return {
    type: ORDER_BY_RATING,
    payload
  }
}

//! Filter by Genres
const filterByGenres = (payload) => {
  return {
    type: FILTER_BY_GENRES,
    payload
  }
}

//! Postear porveerdore
//! Postear proveedor
const postProveedor = (info) => {
  return async function (dispatch) {
    try {
      // Verificación
      if (
        info.name === '' ||
          info.email === '' ||
          info.image === '' ||
          info.genre === '' ||
          info.years_exp === '' ||
          info.description === '' ||
          info.ubicacion === '' ||
          info.phone === '' ||
          info.ocupations === '' ||
          info.categories === 0
      ) {
        throw new Error('Faltan datos')
      }

      await axios.post('https://backprofinder-production.up.railway.app/profesional/', info)
      alert('Perfil creado')
    } catch (error) {
      alert(`${error.response.data.error}`)
    }
  }
}

export {
  getAllSuppliers,
  getAllCategories,
  filterByCategory,
  resetCategoryFilter,
  orderByRating,
  filterByGenres,
  postProveedor
}
