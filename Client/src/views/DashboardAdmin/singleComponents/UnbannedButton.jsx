/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/button'
import { useToast } from '@chakra-ui/toast'

export default function UnbannedButton ({ id, bannedFunction, getFunction, URL }) {
  const toast = useToast()

  async function handleUnbannedAction () {
    await bannedFunction(id)
    await getFunction(URL)
    toast({
      title: 'Cuenta activada',
      description: 'La cuenta ha sido restaurada',
      status: 'success',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true
    })
  }

  return (
    <Button
      size='sm'
      variant='solid'
      colorScheme='messenger'
      onClick={handleUnbannedAction}
    >
      Activar Cuenta
    </Button>
  )
}
