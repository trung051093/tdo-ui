import { Flex, Center, Grid, GridItem } from '@chakra-ui/react';
import { Image } from './Image';

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
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/1.jpg"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/2.jpg"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/9.jpg"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/4.jpg"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/16.jpg"
              />
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/26.jpg"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/18.jpg"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/23.jpg"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/45.jpg"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/44.jpg"
              />
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/37.jpg"
              />
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <Image
                container={{ w: '100%', h: '100%' }}
                src="/wedding-images/36.jpg"
              />
            </GridItem>
          </Grid>
        </Center>
      </Flex>
    </>
  );
};
