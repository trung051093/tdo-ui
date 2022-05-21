import { Center, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import bgImg from '@my-wedding/assets/images/bg.png';
import { Image } from './Image';

export const Home = () => {
  return (
    <Flex h="100vh" direction="row" position="relative">
      <Image container={{ w: '100vw', h: '100vh' }} src={bgImg} />
      <Center width="100vw" pos="absolute" top="40%">
        <VStack spacing="4">
          <Heading size="4xl" fontWeight="400">
            Welcome
          </Heading>
          <Text size="2xl">To our wedding</Text>
          <Heading size="3xl" fontWeight="400">
            Trung & Trâm
          </Heading>
          <Text>July 10, 2022</Text>
        </VStack>
      </Center>
    </Flex>
  );
};
