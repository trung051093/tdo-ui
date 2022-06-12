import { Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';
import NextImage, { ImageProps } from 'next/image';
import { useIntersection } from 'react-use';

export interface CustomImageProps extends ImageProps {
  container?: BoxProps;
  lazy?: boolean;
}

// You can add as many loader as you want, and use them conditionally.
// See https://nextjs.org/docs/basic-features/image-optimization#loader
export const ImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) => {
  return `/${src}?w=${width}&q=${quality || 50}`;
};

export const Image = (props: CustomImageProps) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  const {
    src,
    alt,
    layout = 'fill',
    objectFit = 'cover',
    container,
    lazy = false,
    ...rest
  } = props;
  return (
    <Box position="relative" {...container} ref={intersectionRef}>
      {lazy ? (
        <>
          {intersection && intersection.intersectionRatio >= 0.5 && (
            <NextImage
              objectFit={objectFit}
              layout={layout}
              src={src}
              alt={alt}
              {...rest}
            />
          )}
        </>
      ) : (
        <NextImage
          objectFit={objectFit}
          layout={layout}
          src={src}
          alt={alt}
          {...rest}
        />
      )}
    </Box>
  );
};
