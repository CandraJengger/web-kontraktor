import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import MenuItem from '../../atoms/MenuItem';

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
        direction={['columt', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/tentang">Tentang</MenuItem>
        <MenuItem to="/mengapa">Mengapa</MenuItem>
        <MenuItem to="/solusi">Solusi</MenuItem>
        <MenuItem to="/produk">Produk</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
