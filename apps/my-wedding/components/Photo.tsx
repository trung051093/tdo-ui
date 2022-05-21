import { Flex, Center, Grid, GridItem } from '@chakra-ui/react';
import { Image } from './Image';
import wedImg1 from '@my-wedding/assets/wedding-images/1.jpg';
import wedImg2 from '@my-wedding/assets/wedding-images/2.jpg';
import wedImg4 from '@my-wedding/assets/wedding-images/4.jpg';
import wedImg9 from '@my-wedding/assets/wedding-images/9.jpg';
import wedImg16 from '@my-wedding/assets/wedding-images/16.jpg';
import wedImg18 from '@my-wedding/assets/wedding-images/18.jpg';
import wedImg23 from '@my-wedding/assets/wedding-images/23.jpg';
import wedImg26 from '@my-wedding/assets/wedding-images/26.jpg';
import wedImg36 from '@my-wedding/assets/wedding-images/36.jpg';
import wedImg37 from '@my-wedding/assets/wedding-images/37.jpg';
import wedImg44 from '@my-wedding/assets/wedding-images/44.jpg';
import wedImg45 from '@my-wedding/assets/wedding-images/45.jpg';

export const Photo = () => {
  return (
      <>
    <Flex minH="100vh" pos="relative">
      <Center
        width="100vw"
        pos="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
      >
        <Grid
          w="100%"
          h="100%"
          templateRows={{
            base: 'repeat(6, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          templateColumns={{
            base: 'repeat(3, 1fr)',
          }}
        >
          <GridItem rowSpan={2}>
            <Image w="100%" h="100%" src={wedImg1} />
          </GridItem>
          <GridItem colSpan={2}>
            <Image w="100%" h="100%" src={wedImg2} />
          </GridItem>
          <GridItem colSpan={1}>
            <Image w="100%" h="100%" src={wedImg9} />
          </GridItem>
          <GridItem colSpan={1}>
            <Image w="100%" h="100%" src={wedImg4} />
          </GridItem>
          <GridItem colSpan={2}>
            <Image w="100%" h="100%" src={wedImg16} />
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <Image w="100%" h="100%" src={wedImg26} />
          </GridItem>
          <GridItem colSpan={1}>
            <Image w="100%" h="100%" src={wedImg18} />
          </GridItem>
          <GridItem colSpan={1}>
            <Image w="100%" h="100%" src={wedImg23} />
          </GridItem>
          <GridItem colSpan={1}>
            <Image w="100%" h="100%" src={wedImg45} />
          </GridItem>
          <GridItem colSpan={1}>
            <Image w="100%" h="100%" src={wedImg44} />
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <Image w="100%" h="100%" src={wedImg37} />
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <Image w="100%" h="100%" src={wedImg36} />
          </GridItem>
        </Grid>
      </Center>
    </Flex>
    </>
  );
};
