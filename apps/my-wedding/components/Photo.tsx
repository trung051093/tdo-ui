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
    src: '/wedding/-images16.jpg',
    rowSpan: 1,
    colSpan: 2,
  },
  {
    src: '/wedding/-images26.jpg',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    src: '/wedding/-images18.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding/-images23.jpg',
    rowSpan: 1,
    colSpan: 1,
  },

  {
    src: '/wedding/-images45.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding/-images44.jpg',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    src: '/wedding/-images37.jpg',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    src: '/wedding/-images36.jpg',
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
    src: '/wedding/-images10.jpg',
  },
  {
    src: '/wedding/-images11.jpg',
  },
  {
    src: '/wedding/-images12.jpg',
  },
  {
    src: '/wedding/-images13.jpg',
  },
  {
    src: '/wedding/-images14.jpg',
  },
  {
    src: '/wedding/-images15.jpg',
  },
  {
    src: '/wedding/-images17.jpg',
  },
  {
    src: '/wedding/-images19.jpg',
  },
  {
    src: '/wedding/-images20.jpg',
  },
  {
    src: '/wedding/-images21.jpg',
  },
  {
    src: '/wedding/-images22.jpg',
  },
  {
    src: '/wedding/-images24.jpg',
  },
  {
    src: '/wedding/-images25.jpg',
  },
  {
    src: '/wedding/-images27.jpg',
  },
  {
    src: '/wedding/-images28.jpg',
  },
  {
    src: '/wedding/-images29.jpg',
  },
  {
    src: '/wedding/-images30.jpg',
  },
  {
    src: '/wedding/-images31.jpg',
  },
  {
    src: '/wedding/-images32.jpg',
  },
  {
    src: '/wedding/-images33.jpg',
  },
  {
    src: '/wedding/-images34.jpg',
  },
  {
    src: '/wedding/-images35.jpg',
  },
  {
    src: '/wedding/-images38.jpg',
  },
  {
    src: '/wedding/-images39.jpg',
  },
  {
    src: '/wedding/-images40.jpg',
  },
  {
    src: '/wedding/-images41.jpg',
  },
  {
    src: '/wedding/-images42.jpg',
  },
  {
    src: '/wedding/-images43.jpg',
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
