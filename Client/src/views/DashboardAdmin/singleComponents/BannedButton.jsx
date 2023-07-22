/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/button'
import { useToast } from '@chakra-ui/toast'

export default function BannedButton ({ id, bannedFunction, getFunction, URL }) {
  const toast = useToast()

  async function handleBannedAction () {
    await bannedFunction(id)
    await getFunction(URL)
    toast({
      title: 'Cuenta baneada',
      description: 'La cuenta ha sido desactivada',
      status: 'success',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true
    })
  }

  return (
    <Button
      onClick={handleBannedAction}
      colorScheme='red'
    >
      Banear Cuenta
    </Button>
  )
}
