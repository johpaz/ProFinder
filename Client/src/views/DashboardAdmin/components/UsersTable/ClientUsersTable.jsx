/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, SimpleGrid, Stack } from '@chakra-ui/layout'
import { useClientDash } from '../../../../services/zustand/useClientDash'
import { useEffect } from 'react'
import { CLIENT } from '../../constants'
import FiltersClient from '../FiltersDashboard/FiltersClient'
import UserRegisterClient from '../../singleComponents/UserRegisterClient'

export default function UsersTable () {
  const {
    client,
    getClients,
    countResults,
    getCountsGraphic
  } = useClientDash(state => state)

  const bgElement = useColorModeValue('white', 'gray.800')
  const txtColor = useColorModeValue('gray.600', 'gray.100')
  const bgAccent = useColorModeValue('gray.100', 'gray.700')

  useEffect(() => {
    getClients(CLIENT.GET_CLIENTS)
  }, [])

  useEffect(() => {
    countResults(client.length)
    getCountsGraphic()
  }, [client])

  return (
    <Flex // Container tabla
      w='full'
      p={50}
      alignItems='center'
      justifyContent='center'
    >
      {
        (client)
          ? (
            <Stack // Tabla
              direction={{
                base: 'column'
              }}
              w='full'
              bg={bgElement}
              shadow='lg'
            >
              <FiltersClient />
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
              {client.map(({ id, name, email, image, active, softDelete }) => {
                return (
                  <UserRegisterClient
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
