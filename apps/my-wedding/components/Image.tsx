import { Box } from '@chakra-ui/react';
import * as React from 'react';
import NextImage from 'next/image';

export const Image = (props) => {
  const { src, alt, layout = 'fill', objectFit = 'cover', ...rest } = props;
  return (
    <Box position="relative" {...rest}>
      <NextImage
        objectFit={objectFit}
        layout={layout}
        src={src}
        alt={alt}
        placeholder="blur"
      />
    </Box>
  );
};
