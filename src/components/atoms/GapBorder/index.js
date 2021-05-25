import { Box, Container } from '@chakra-ui/layout';
import React from 'react';

const GapBorder = ({ side = 'left' }) => {
  return (
    <Container maxW="container.lg" h="179px">
      {side === 'left' ? (
        <Box h="100%" borderLeft="4px" borderColor="red.200" />
      ) : (
        <Box h="100%" borderRight="4px" borderColor="red.200" />
      )}
    </Container>
  );
};

export default GapBorder;
