import React from 'react';
import { Box } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      cursor="pointer"
      onClick={toggle}
    >
      {isOpen ? (
        <CloseIcon color="black" />
      ) : (
        <HamburgerIcon fontSize="2rem" color={{ base: 'white', sm: 'black' }} />
      )}
    </Box>
  );
};

export default MenuToggle;
