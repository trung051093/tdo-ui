import { Flex, VStack, HStack, Center, Heading, Text } from '@chakra-ui/react';
import bgImg from '@my-wedding/assets/images/bg3.png';
import { Image } from './Image';

export const ThankYou = () => {
  return (
    <Flex pos="relative">
      <Image
        container={{ w: '100vw', h: '100vh' }}
        layout="responsive"
        src={bgImg}
      />
      <Center
        w="100%"
        h="100%"
        pos="absolute"
        top="100px"
        px={{ base: '10', md: '16' }}
      >
        <Flex w="100%" h="100%" direction="column" alignItems="center">
          <Heading fontWeight="normal" marginBottom="4">
            Thank you
          </Heading>
          <VStack spacing="2">
            <Text textAlign="center">FOR SHARING OUR SPECIAL DAY</Text>
            <Text textAlign="center">10 . 07 . 2022</Text>
            <Text fontWeight="semibold">TRUNG & TRÂM</Text>
          </VStack>
        </Flex>
      </Center>
    </Flex>
  );
};
