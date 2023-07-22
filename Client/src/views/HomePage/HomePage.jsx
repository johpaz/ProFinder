import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCategories } from '../../services/redux/actions/actions'
import { Box, Divider } from '@chakra-ui/react'
import Footer from '../../components/Footer/Footer'

import TopPro from '../../components/Home/TopPro/TopPro'
import FeaturesGrid from '../../components/Home/FeaturesGrid/FeaturesGrid'
import TestimonialCarrousel from '../../components/Home/TestimonialCarrousel/TestimonialCarrousel'
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks'
import PricingHome from '../../components/Home/PricingHome/PricingHome'
import CategoriesSection from '../../components/Home/CategoriesSection/CategoriesSection'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  return (
    <Box height="100vh">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%" // Ajuste de altura a 50vh
     
      >
        <HowItWorks />
      </Box>

      <Box >
        {/* <Divider height="3px" borderColor="gray.900" width="80%" mx="auto" /> */}
        <Divider height="3px" borderColor="gray.100" width="80%" mx="auto" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={{ 
          sm: "180vh",
          md: "200vh !important",
          lg: "100%" }} // Altura 180vh en md y 100vh en lg
      >
        <FeaturesGrid />
       {/* <Divider height="3px" borderColor="gray.900" width="80%" mx="auto" /> */}
       <Divider height="3px" borderColor="gray.100" width="80%" mx="auto" />
        <TestimonialCarrousel />
          {/* <Divider height="3px" borderColor="gray.900" width="80%" mx="auto" /> */}
        <Divider height="3px" borderColor="gray.100" width="80%" mx="auto" />
        <PricingHome />

      </Box>

      <Box >
        {/* <Divider height="3px" borderColor="gray.900" width="80%" mx="auto" /> */}
        <Divider height="3px" borderColor="gray.100" width="80%" mx="auto" />      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={{ 
          sm: "180vh",
          md: "160vh", 
          lg: "120%" }}
      >
        <CategoriesSection />
        {/* <Divider height="3px" borderColor="gray.900" width="80%" mx="auto" /> */}
        <Divider height="3px" borderColor="gray.100" width="80%" mx="auto" />

        <TopPro />
      </Box>

      <Footer />
    </Box>
  )
}

export default HomePage