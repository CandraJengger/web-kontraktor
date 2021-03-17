import React from 'react';
import { Link, Text } from '@chakra-ui/react';

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link
      className="link"
      textAlign="center"
      w="100%"
      href={to}
      _focus={{ outline: 'none' }}
    >
      <Text display="block" _hover={{ color: 'red.600' }} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
