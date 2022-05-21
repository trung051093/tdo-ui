import { Flex, VStack, Box, Center, Heading, Text } from '@chakra-ui/react';
import bgImg from '@my-wedding/assets/images/bg2.png';
import { Image } from './Image';

export const WeddingCard = () => {
  return (
    <Flex h="100vh" pos="relative">
      <Image container={{ w: '100vw', h: '100vh' }} src={bgImg} />
      <Center
        w="100%"
        h="100%"
        pos="absolute"
        top="100px"
        px={{ base: '10', md: '16' }}
      >
        <Flex w="100%" h="100%" direction="column" alignItems="center">
          <Heading fontSize="4xl" fontWeight="normal" marginBottom="4">
            Reception
          </Heading>
          <VStack spacing="2">
            <Text textAlign="center">
              Please share in our celebration by joining us for dinner reception
            </Text>
            <Text textAlign="center">at five o'clock in the evening on</Text>
            <Text fontWeight="semibold">Sunday, July 10th, 2022</Text>
          </VStack>
          <VStack marginTop="6">
            <Text
              fontSize="xl"
              textAlign="center"
              fontWeight="semibold"
              fontStyle="italic"
            >
              Gala Center
            </Text>
            <Text fontSize="small" textAlign="center" fontStyle="italic">
              415 Hoang Van Thu Street
            </Text>
            <Text fontSize="small" textAlign="center" fontStyle="italic">
              Tan Binh District, Ho Chi Minh City
            </Text>
          </VStack>
          <Box marginTop="12">
            <Heading textAlign="center" fontSize="4xl" fontWeight="normal">
              Thank you
            </Heading>
            <VStack>
              <Text textAlign="center">FOR SHARING OUR SPECIAL DAY</Text>
              <Text textAlign="center">10 . 07 . 2022</Text>
              <Text fontWeight="semibold">TRUNG & TRÂM</Text>
            </VStack>
          </Box>
        </Flex>
      </Center>
    </Flex>
  );
};
