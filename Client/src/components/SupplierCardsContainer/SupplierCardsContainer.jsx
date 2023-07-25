/* eslint-disable react/prop-types */
import { lazy, Suspense } from 'react'
import { Flex, Stack } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'
const SupplierCard = lazy(() => import('../SupplierCard/SupplierCard'))

export default function SupplierCardsContainer ({ visibleSuppliers }) {
  return (
    <Stack mt={12} align='center' justify='center'>

      <Flex
        position='relative'
        align='center'
        justify='center'
        mt='-40px'
        mb='3rem'
        wrap='wrap'
        gap={8}
        px={4}
        py={12}
      >
        {visibleSuppliers
          ? (
              visibleSuppliers.map(
                ({
                  id,
                  name,
                  email,
                  image,
                  rating,
                  ubication,
                  description,
                  professions
                }) => (
                  <Suspense key={id} fallback={<Skeleton height='500px' />}>
                    <SupplierCard
                      key={id}
                      id={id}
                      name={name}
                      email={email}
                      image={image}
                      rating={rating}
                      ubication={ubication}
                      description={description}
                      professions={professions}
                    />
                  </Suspense>
                )
              )
            )
          : (
            <h2 />
            )}
      </Flex>
    </Stack>
  )
}
