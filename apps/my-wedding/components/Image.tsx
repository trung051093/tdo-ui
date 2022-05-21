import { Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';
import NextImage, { ImageProps } from 'next/image';
import VisibilitySensor from 'react-visibility-sensor';

interface CustomImageProps extends ImageProps {
  container?: BoxProps;
}

// You can add as many loader as you want, and use them conditionally.
// See https://nextjs.org/docs/basic-features/image-optimization#loader
const imageLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 50}`;
};

export const Image = (props: CustomImageProps) => {
  const {
    src,
    alt,
    layout = 'fill',
    objectFit = 'cover',
    container,
    ...rest
  } = props;
  return (
    <VisibilitySensor>
      <Box position="relative" {...container}>
        <NextImage
          // loader={imageLoader}
          objectFit={objectFit}
          layout={layout}
          src={src}
          alt={alt}
          {...rest}
          // placeholder="blur"
        />
      </Box>
    </VisibilitySensor>
  );
};
