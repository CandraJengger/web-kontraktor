import React from 'react';
import { Flex } from '@chakra-ui/react';

const NavbarContainer = ({ children, isOpen, ...props }) => {
  return (
    <Flex
      position="fixed"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      py={5}
      px={10}
      bg={
        isOpen
          ? { base: 'white', md: 'white' }
          : { base: 'transparent', md: 'white' }
      }
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavbarContainer;
