import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const Logo = ({ path, alt }, props) => {
  return (
    <Box {...props}>
      <Image src={path} alt={alt} />
    </Box>
  );
};

export default Logo;
