/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, SimpleGrid, Stack } from '@chakra-ui/layout'
import { useProfesionalDash } from '../../../../services/zustand/useProfesionalDash'
import { useEffect } from 'react'
import { URL } from '../../constants'
import FiltersDashboard from '../FiltersDashboard/FiltersDashboard'
import UserRegister from '../../singleComponents/UserRegister'

export default function UsersTable () {
  const bgColor = useColorModeValue('white', 'gray.800')
  const bgAccent = useColorModeValue('gray.100', 'gray.700')
  const txtColor = useColorModeValue('gray.600', 'gray.100')

  const {
    profesional,
    getProfesional,
    countResults,
    getCountsGraphic
  } = useProfesionalDash(state => state)

  useEffect(() => {
    getProfesional(URL.GET_PROFESIONAL)
  }, [])

  useEffect(() => {
    countResults(profesional.length)
    getCountsGraphic()
  }, [profesional])

  return (
    <Flex // Container tabla
      w='full'
      alignItems='center'
      justifyContent='center'
    >
      {
        (profesional)
          ? (
            <Stack // Tabla
              direction={{
                base: 'column'
              }}
              w='full'
              bg={bgColor}
              shadow='lg'
            >
              <FiltersDashboard />
              <SimpleGrid // Encabezado tabla
                spacingY={3}
                columns={{
                  base: 1,
                  md: 4
                }}
                w={{
                  base: 120,
                  md: 'full'
                }}
                textTransform='uppercase'
                bg={bgAccent}
                color={txtColor}
                py={{
                  base: 1,
                  md: 4
                }}
                px={{
                  base: 2,
                  md: 10
                }}
                visibility={{
                  base: 'hidden',
                  md: 'visible'
                }}
                fontSize='md'
              >
                <span>Foto</span>
                <span>Nombre</span>
                <span>correo electronico</span>
              </SimpleGrid>
              {profesional.map(({ id, name, email, image, active, softDelete }) => {
                return (
                  <UserRegister
                    key={id}
                    id={id}
                    name={name}
                    email={email}
                    image={image}
                    active={active}
                    softDelete={softDelete}
                  />
                )
              })}
            </Stack>)
          : (<h2>Cargando...</h2>)
      }
    </Flex>
  )
}
