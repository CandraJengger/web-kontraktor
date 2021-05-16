import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { MenuItem } from '../../atoms';

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem color="black" to="/">
          Home
        </MenuItem>
        <MenuItem color="black" to="/tentang">
          Tentang
        </MenuItem>
        <MenuItem color="black" to="/mengapa">
          Mengapa
        </MenuItem>
        <MenuItem color="black" to="/solusi">
          Solusi
        </MenuItem>
        <MenuItem color="black" to="/produk">
          Produk
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
