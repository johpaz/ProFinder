/* eslint-disable react/prop-types */
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react'
import { useLocation } from 'react-router'
import SidebarContent from './SidebarContent'
import MobileNav from './MobileNav'
import ProfesionalManagement from '../UsersManagement/ProfesionalManagement'
import ClientManagement from '../UsersManagement/ClientManagement'

export default function Sidebar () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { pathname } = useLocation()

  return (
    <Box // contenedor principal
      minH='100vh'
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='xs'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box
        ml={{ base: 0, md: 60 }}
        p='4'
      >
        {
        (pathname === '/dashboardAdmin/manageProfesional')
          ? <ProfesionalManagement />
          : (pathname === '/dashboardAdmin/manageClient')
              ? <ClientManagement />
              : null
      }
      </Box>
    </Box>
  )
}
