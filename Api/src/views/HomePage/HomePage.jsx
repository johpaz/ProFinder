import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCategories } from '../../services/redux/actions/actions'

import TopPro from '../../components/Home/TopPro/TopPro'
import FeaturesGrid from '../../components/Home/FeaturesGrid/FeaturesGrid'
import TestimonialCarrousel from '../../components/Home/TestimonialCarrousel/TestimonialCarrousel'
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks'
import CategoriesSection from '../../components/Home/CategoriesSection/CategoriesSection'

import styles from './HomePage.module.css'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  return (
    <div>
      <section className={`${styles.howItWorks} ${styles.fullHeight}`}>
        <HowItWorks />
      </section>

      <div className={styles.divider} />
      <section className={`${styles.publicOpinion} ${styles.fullHeight}`}>
        <FeaturesGrid />
        <div className={styles.divider} />

        <TestimonialCarrousel />
      </section>

      <section className={`${styles.Categories} ${styles.fullHeight}`}>
        <div className={styles.divider} />
        <CategoriesSection />

      </section>

      <section className={`${styles.serviceOffers} ${styles.fullHeight}`}>
        <div className={styles.divider} />
        <TopPro />
      </section>
      <div className={styles.divider} />
    </div>
  )
}

export default HomePage
