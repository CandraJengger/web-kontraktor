import React from 'react';
import { Gap } from '../../atoms';
import { Swiper } from '../../moleculs';
import { Box, Text, Flex, Button } from '@chakra-ui/react';

const Hero = ({ data = [] }) => {
  return (
    <section
      id="hero"
      style={{ position: 'relative', height: '90vh', width: '100%' }}
    >
      <Box
        position="absolute"
        w="100%"
        h="100%"
        inset="0"
        bgGradient="linear(to-r, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.2))"
        px={{ base: '1rem', md: '6.5em' }}
        pt={{ base: 0, md: '5rem' }}
        zIndex="30"
      >
        <Flex
          w="100%"
          h="100%"
          justifyContent={{ base: 'end', sm: 'center' }}
          pb={{ base: '6rem', sm: '0' }}
          flexFlow="column"
        >
          <Text
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            fontWeight="bold"
            as="h1"
            color="white"
          >
            Berkomitmen, terpercaya, <br />
            dan berkualitas
          </Text>
          <Gap width="1rem" height="2.6rem" />
          <Text as="p" color="whiteAlpha.800">
            Buka jam 08.00 s/d jam 21.00 , Sabtu, Minggu & Hari Besar Tutup
          </Text>
          <Gap width="1rem" height="2.6rem" />
          <Button w={{ base: '100%', sm: '12rem' }} colorScheme="red">
            Hubungi Kami
          </Button>
        </Flex>
      </Box>
      <Swiper
        style={{
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
        }}
        data={data}
      />
    </section>
  );
};

export default Hero;
