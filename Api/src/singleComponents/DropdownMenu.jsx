/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'

export default function DropdownMenu ({ titleMenu, menuItems, onClick }) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg={useColorModeValue('gray.100', 'gray.100')}
      >
        {titleMenu || 'Sin titulo'}
      </MenuButton>
      <MenuList>
        {
          (menuItems)
            ? (
                menuItems.map(({ name }) => {
                  return (
                    <MenuItem
                      key={name}
                      name={name}
                      color='gray.800'
                      onClick={onClick}
                    >{name}
                    </MenuItem>
                  )
                })
              )
            : (
              <MenuItem color='gray.800'>Sin items</MenuItem>
              )
        }
      </MenuList>
    </Menu>
  )
}
