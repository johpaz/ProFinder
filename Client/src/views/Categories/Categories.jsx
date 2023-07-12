import { Heading } from '@chakra-ui/layout'
import styles from './Categories.module.css'
import SupplierCardsContainer from '../../components/SupplierCardsContainer/SupplierCardsContainer'
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel'

const Categories = () => {
  return (
    <div className={styles.categoryContainer}>
      <Heading
        className={styles.categoryh2}
        fontSize='4xl'
        bgGradient='linear(to-l, teal.300, green.400)' bgClip='text'
      >
        PROFESIONALES
      </Heading>
      <FiltersPanel />
      <SupplierCardsContainer />
    </div>
  )
}

export default Categories
