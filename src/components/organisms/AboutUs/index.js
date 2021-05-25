import React from 'react';
import Architect from '../../../assets/images/arsitek.jpg';
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';

const index = () => {
  return (
    <Box as="section" h={{ base: '100vh', md: '525px' }}>
      <Container maxW="container.lg" h="100%" px={{ base: '40px', md: '1rem' }}>
        <Flex
          h="100%"
          direction={{ base: 'column', md: 'row' }}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            position="relative"
            d="flex"
            justifyContent="center"
            alignItems={{ base: 'center', md: 'start' }}
            flexDirection="column"
            h="100%"
            pr={{ base: '0', md: '81px' }}
            mb="14"
          >
            <Text fontSize="2xl" fontWeight="semibold" mb="30px" zIndex="1">
              Tentang Kami
            </Text>
            <Text fontSize="md" color="gray.600" zIndex="1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{' '}
            </Text>
            <Box
              position="absolute"
              d={{ base: 'none', md: 'block' }}
              top="28px"
              right="0"
              w="222px"
              h="100%"
              bg="gray.50"
              zIndex="0"
            />
          </Box>

          <Image
            boxSize="524px"
            h="100%"
            src={Architect}
            objectFit="cover"
            objectPosition="center"
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default index;
