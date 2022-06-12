import heartImg from '@my-wedding/assets/images/heart.svg';
import { Image } from './Image';
import React from 'react';
import { animate } from 'motion';
import { Box } from '@chakra-ui/react';

type Heart = {
  id: string;
  position: [number, number];
};

const heartSize = 30;
const heartSizePx = `${heartSize}px`;
const defaultNumberOfHeart = 30;

const random = (min = 10, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateArrayWithNumber = (num = 0) => Array.from(Array(num).keys());

export const FloatingHeart = () => {
  const [hearts, setHearts] = React.useState<Heart[]>([]);
  const positions = React.useRef<number[]>([]);

  const generatePositionX = () => {
    const index = random(0, positions.current?.length - 2);
    const num = positions.current[index];
    positions.current = positions.current.filter((value) => value !== num);
    return num;
  };

  const getHearts = (numberHearts = defaultNumberOfHeart): Heart[] =>
    generateArrayWithNumber(numberHearts).map((n) => ({
      id: 'heart-' + n,
      position: [generatePositionX(), 0],
    }));

  const handleAnimate = async () => {
    const min = 10;
    const max = screen?.width;
    const x = random(min, max);
    const y = 0;
    for (const heart of hearts) {
      animate(
        `#${heart.id}`,
        {
          opacity: [0.8, 0],
          x: [x, x - 50, x + 50, x, x - 50, x + 50, x],
          y: [y, screen.availHeight * 2],
        },
        {
          delay: random(1, defaultNumberOfHeart) / 10,
          duration: random(12, 20),
          easing: 'ease-in-out',
          repeat: Infinity,
        }
      );
    }
  };

  React.useEffect(() => {
    positions.current = generateArrayWithNumber(
      document.body.clientWidth
    ).filter((n) => n % 5 === 0);
  }, []);

  React.useEffect(() => {
    if (!positions.current) return;
    setHearts(getHearts(defaultNumberOfHeart));
  }, [getHearts, positions]);

  React.useEffect(() => {
    if (!hearts.length) return;
    handleAnimate();
  }, [hearts, handleAnimate]);

  return (
    <>
      <Box pos="absolute" top="0" left="0" right="0" bottom="0">
        {hearts?.map((heart, index) => (
          <Image
            key={index}
            container={{
              pos: 'absolute',
              top: `-${heartSizePx}`,
              left: `${heart.position[0]}px`,
              w: `${heartSizePx}`,
              h: `${heartSizePx}`,
              id: heart.id,
              className: 'heart',
              zIndex: 1,
            }}
            src={heartImg}
            alt="heart-flying"
          />
        ))}
      </Box>
    </>
  );
};
