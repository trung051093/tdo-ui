import { Flex, Center, Grid, GridItem } from '@chakra-ui/react';
import { Image } from './Image';
import { useToggle } from 'react-use';
import Lightbox from 'react-image-lightbox';
import React from 'react';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  {
    src: '/wedding-images/1.jpg',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    src: '/wedding-images/2.jpg',
    rowSpan: 1,
    colSpan: 2,
  },
  {
    src: '/wedding-images/9.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding-images/4.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding-images/16.jpg',
    rowSpan: 1,
    colSpan: 2,
  },
  {
    src: '/wedding-images/26.jpg',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    src: '/wedding-images/18.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding-images/23.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding-images/45.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding-images/44.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding-images/37.jpg',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    src: '/wedding-images/36.jpg',
    rowSpan: 1,
    colSpan: 2,
  },
];

export const Photo = () => {
  const [openLightbox, toggleLightbox] = useToggle(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  return (
    <>
      <Flex minH="100vh">
        <Center width="100%">
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
            {images.map((img, index) => (
              <GridItem
                key={index}
                rowSpan={img.rowSpan}
                colSpan={img.colSpan}
                onClick={() => {
                    setPhotoIndex(index);
                    toggleLightbox(true);
                }}
              >
                <Image container={{ w: '100%', h: '100%' }} src={img.src} />
              </GridItem>
            ))}
          </Grid>
        </Center>

        {openLightbox && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => toggleLightbox(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (preState) => (preState + images.length - 1) % images.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((preState) => (preState + 1) % images.length)
            }
          />
        )}
      </Flex>
    </>
  );
};
