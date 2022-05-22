import { Flex, Center, Grid, GridItem, Button } from '@chakra-ui/react';
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
  {
    src: '/wedding-images/3.jpg',
  },
  {
    src: '/wedding-images/5.jpg',
  },
  {
    src: '/wedding-images/6.jpg',
  },
  {
    src: '/wedding-images/7.jpg',
  },
  {
    src: '/wedding-images/8.jpg',
  },
  {
    src: '/wedding-images/10.jpg',
  },
  {
    src: '/wedding-images/11.jpg',
  },
  {
    src: '/wedding-images/12.jpg',
  },
  {
    src: '/wedding-images/13.jpg',
  },
  {
    src: '/wedding-images/14.jpg',
  },
  {
    src: '/wedding-images/15.jpg',
  },
  {
    src: '/wedding-images/17.jpg',
  },
  {
    src: '/wedding-images/19.jpg',
  },
  {
    src: '/wedding-images/20.jpg',
  },
  {
    src: '/wedding-images/21.jpg',
  },
  {
    src: '/wedding-images/22.jpg',
  },
  {
    src: '/wedding-images/24.jpg',
  },
  {
    src: '/wedding-images/25.jpg',
  },
  {
    src: '/wedding-images/27.jpg',
  },
  {
    src: '/wedding-images/28.jpg',
  },
  {
    src: '/wedding-images/29.jpg',
  },
  {
    src: '/wedding-images/30.jpg',
  },
  {
    src: '/wedding-images/31.jpg',
  },
  {
    src: '/wedding-images/32.jpg',
  },
  {
    src: '/wedding-images/33.jpg',
  },
  {
    src: '/wedding-images/34.jpg',
  },
  {
    src: '/wedding-images/35.jpg',
  },
  {
    src: '/wedding-images/38.jpg',
  },
  {
    src: '/wedding-images/39.jpg',
  },
  {
    src: '/wedding-images/40.jpg',
  },
  {
    src: '/wedding-images/41.jpg',
  },
  {
    src: '/wedding-images/42.jpg',
  },
  {
    src: '/wedding-images/43.jpg',
  },
];

const getNextImageWithIndex = (index) => {
  const imgName = images[index].src;
  return `/_next/image?url=${imgName}&w=828&q=75`;
};

export const Photo = () => {
  const [openLightbox, toggleLightbox] = useToggle(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const viewAll = () => {
    setPhotoIndex(0);
    toggleLightbox(true);
  };

  return (
    <>
      <Flex minH="100vh" pos="relative">
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
            {images
              .filter((img) => Boolean(img.colSpan) || Boolean(img.rowSpan))
              .map((img, index) => (
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
        <Center width="100%" pos="absolute" bottom="9%">
          <Button boxShadow="md" onClick={viewAll}>
            View all photo
          </Button>
        </Center>
      </Flex>
    </>
  );
};
