/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, lazy, Suspense } from 'react'
import { Flex, Stack } from '@chakra-ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSuppliers } from '../../services/redux/actions/actions'
import { Skeleton } from '@chakra-ui/skeleton'
// import Paginator from '../Paginator/Paginator'
const SupplierCard = lazy(() => import('../SupplierCard/SupplierCard'))

export default function SupplierCardsContainer ({visibleSuppliers}) {


  return (
    <Stack mt={12} align='center' justify='center'>

      <Flex
        position='relative'
        align='center'
        justify='center'
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
