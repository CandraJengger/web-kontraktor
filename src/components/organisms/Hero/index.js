import React from 'react';
import { Gap } from '../../atoms';
import { Box, Text, Flex, Button } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      w="100%"
      h="90vh"
      bgGradient="linear(to-r, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.55))"
      px="6em"
    >
      <Flex w="100%" h="100%" justifyContent="center" flexFlow="column">
        <Text fontSize="5xl" as="h1" color="white">
          Berkomitmen, terpercaya, <br />
          dan berkualitas
        </Text>
        <Gap width="1rem" height="2.6rem" />
        <Text as="p" color="whiteAlpha.800">
          Buka jam 08.00 s/d jam 21.00 , Sabtu, Minggu & Hari Besar Tutup
        </Text>
        <Gap width="1rem" height="2.6rem" />
        <Button w="12rem" colorScheme="red">
          Hubungi Kami
        </Button>
      </Flex>
    </Box>
  );
};

export default Hero;
