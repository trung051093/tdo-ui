import { Flex, Center, Grid, GridItem, Button } from '@chakra-ui/react';
import { Image } from './Image';
import { useToggle } from 'react-use';
import Lightbox from 'react-image-lightbox';
import React from 'react';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import useTranslation from 'next-translate/useTranslation';

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
  {
    src: '/wedding/3-min.jpg',
  },
  {
    src: '/wedding/5-min.jpg',
  },
  {
    src: '/wedding/6-min.jpg',
  },
  {
    src: '/wedding/7-min.jpg',
  },
  {
    src: '/wedding/8-min.jpg',
  },
  {
    src: '/wedding/10-min.jpg',
  },
  {
    src: '/wedding/11-min.jpg',
  },
  {
    src: '/wedding/12-min.jpg',
  },
  {
    src: '/wedding/13-min.jpg',
  },
  {
    src: '/wedding/14-min.jpg',
  },
  {
    src: '/wedding/15-min.jpg',
  },
  {
    src: '/wedding/17-min.jpg',
  },
  {
    src: '/wedding/19-min.jpg',
  },
  {
    src: '/wedding/20-min.jpg',
  },
  {
    src: '/wedding/21-min.jpg',
  },
  {
    src: '/wedding/22-min.jpg',
  },
  {
    src: '/wedding/24-min.jpg',
  },
  {
    src: '/wedding/25-min.jpg',
  },
  {
    src: '/wedding/27-min.jpg',
  },
  {
    src: '/wedding/28-min.jpg',
  },
  {
    src: '/wedding/29-min.jpg',
  },
  {
    src: '/wedding/30-min.jpg',
  },
  {
    src: '/wedding/31-min.jpg',
  },
  {
    src: '/wedding/32-min.jpg',
  },
  {
    src: '/wedding/33-min.jpg',
  },
  {
    src: '/wedding/34-min.jpg',
  },
  {
    src: '/wedding/35-min.jpg',
  },
  {
    src: '/wedding/38-min.jpg',
  },
  {
    src: '/wedding/39-min.jpg',
  },
  {
    src: '/wedding/40-min.jpg',
  },
  {
    src: '/wedding/41-min.jpg',
  },
  {
    src: '/wedding/42-min.jpg',
  },
  {
    src: '/wedding/43-min.jpg',
  },
];

const getNextImageWithIndex = (index: number) => {
  const imgName = images[index].src;
  return `/_next/image?url=${encodeURIComponent(imgName)}&w=1080&q=80`;
};

export const Photo = () => {
  const { t } = useTranslation('common');
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
                  <Image
                    container={{ w: '100%', h: '100%' }}
                    src={img.src}
                    alt="wedding-image"
                  />
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
            {t('View all photo')}
          </Button>
        </Center>
      </Flex>
    </>
  );
};
