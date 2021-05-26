import React from 'react';
import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import DummyImg from '../../../assets/images/dummy-img.svg';

const Card = ({ src = DummyImg, alt = 'Some text', text = 'Some Text' }) => {
  return (
    <Flex
      w="100%"
      maxW="507px"
      bg="white"
      p={{ base: '2rem 1.6rem', md: '0.5rem 1.6rem' }}
      borderRadius="8px"
      boxShadow="2px 3px 10px rgba(0, 0, 0, 0.15)"
      my="1rem"
      alignItems="center"
      zIndex="1"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Image
        w="100px"
        h="100px"
        pr={{ base: '0', sm: '20px', md: '50px' }}
        src={src}
        alt={alt}
        mb={{ base: '1rem', md: '0' }}
      />
      <Text as="h3" fontSize="xl">
        {text}
      </Text>
    </Flex>
  );
};

export default Card;
