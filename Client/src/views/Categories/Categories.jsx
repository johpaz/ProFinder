/* eslint-disable react-hooks/exhaustive-deps */
import { Heading } from '@chakra-ui/layout'
import styles from './Categories.module.css'
import SupplierCardsContainer from '../../components/SupplierCardsContainer/SupplierCardsContainer'
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSuppliers } from '../../services/redux/actions/actions'
import Paginator from './../../components/Paginator/Paginator'

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const suppliers = useSelector((state) => state.suppliers)
  const dispatch = useDispatch()
  console.info(suppliers)

  useEffect(() => {
    dispatch(getAllSuppliers())
  }, [])

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const visibleSuppliers = suppliers.slice(startIndex, endIndex)

  return (
    <div className={styles.categoryContainer}>
      <Heading
        className={styles.categoryh2}
        fontSize='4xl'
        bgGradient='linear(to-l, teal.300, green.400)'
        bgClip='text'
      >
        PROFESIONALES
      </Heading>
      <FiltersPanel setCurrentPage={setCurrentPage} />
      <Paginator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(suppliers.length / itemsPerPage)}
      />
      <SupplierCardsContainer
        cards={visibleSuppliers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        visibleSuppliers={visibleSuppliers}
      />
    </div>
  )
}

export default Categories
