import { Flex, Center, Grid, GridItem } from '@chakra-ui/react';
import { Image } from './Image';
import { useToggle } from 'react-use';
import Lightbox from 'react-image-lightbox';
import React from 'react';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  {
    src: '/wedding/1-min.jpg',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    src: '/wedding/2-min.jpg',
    rowSpan: 1,
    colSpan: 2,
  },
  {
    src: '/wedding/9-min.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding/4-min.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding/16-min.jpg',
    rowSpan: 1,
    colSpan: 2,
  },
  {
    src: '/wedding/26-min.jpg',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    src: '/wedding/18-min.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding/23-min.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding/45-min.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding/44-min.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding/37-min.jpg',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    src: '/wedding/36-min.jpg',
    rowSpan: 1,
    colSpan: 2,
  },
];

const getNextImageWithIndex = (index) => {
  const imgName = images[index].src;
  return `/_next/image?url=${imgName}&w=828&q=75`;
};

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
            mainSrc={getNextImageWithIndex(photoIndex)}
            nextSrc={getNextImageWithIndex((photoIndex + 1) % images.length)}
            prevSrc={getNextImageWithIndex(
              (photoIndex + images.length - 1) % images.length
            )}
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
