import React from 'react';
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import Image1 from '../../../assets/images/image-1.jpg';
import { Card } from '../../moleculs';

const WhyUs = () => {
  return (
    <Box as="section" h={{ base: 'max-content', md: '560px' }}>
      <Container maxW="container.lg" h="100%" px={{ base: '40px', md: '1rem' }}>
        <Flex
          h="100%"
          direction={{ base: 'column-reverse', md: 'row' }}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w={{ base: '100%' }}
            maxW={{ md: '391px' }}
            h="100%"
            position="relative"
          >
            <Image
              src={Image1}
              w="100%"
              h="100%"
              objectFit="cover"
              objectPosition="center"
            />
            <Flex
              position="absolute"
              inset="0"
              w="100%"
              h="100%"
              bg="rgba(0,0,0, 0.3)"
              justify="center"
              alignItems="center"
              flexDirection="column"
              p={{ base: '1rem', sm: '4rem' }}
              textAlign="center"
            >
              <Text
                as="h2"
                color="white"
                fontSize="2xl"
                fontWeight="semibold"
                mb="30px"
              >
                Mengapa Kami ?
              </Text>
              <Text color="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Flex>
          </Box>

          <Flex
            position="relative"
            w="100%"
            h="100%"
            flexDirection="column"
            alignItems="center"
            p="1rem"
          >
            <Box
              position="absolute"
              d={{ base: 'none', md: 'block' }}
              top="0"
              left="0"
              w="222px"
              h="100%"
              bg="gray.50"
              zIndex="0"
            />
            <Card />
            <Card />
            <Card />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhyUs;
