import heartImg from '@my-wedding/assets/images/heart.svg';
import { Image } from './Image';
import React from 'react';
import { animate, spring } from 'motion';
import { Box } from '@chakra-ui/react';

type Heart = {
  id: number;
  position: [number, number]; // [x,y]
  element: any;
};

export const FloatingHeart = () => {
  const [hearts, setHearts] = React.useState<Heart[]>([]);

  const addHeart = () => {
    setHearts((preState) => {
      const id = preState.length + 1;
      const posX = randomX();
      return [
        ...preState,
        {
          id: preState.length + 1,
          position: [randomX(), 0],
          element: () => (
            <Image
              container={{
                pos: 'absolute',
                top: '0',
                left: `${posX}px`,
                w: '40px',
                h: '40px',
                id: `heart-${id}`,
                zIndex: id,
              }}
              src={heartImg}
            />
          ),
        },
      ];
    });
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      addHeart();
    }, 200);
    return () => {
      setHearts([]);
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    if (!hearts.length) return;
    const lastHeart = hearts[hearts.length - 1];
    const [x, y] = lastHeart.position;
    animate(
      `#heart-${lastHeart.id}`,
      {
        opacity: [0.8, 0],
        x: [x, x - 50, x + 50, x, x - 50, x + 50, x - 50, x + 50, x],
        y: [y, screen.height * 2],
      },
      {
        duration: 15,
      }
    );
  }, [hearts]);

  const randomX = () => {
    const ratio = window.devicePixelRatio || 1;
    const width = screen.width * ratio;
    return Math.floor(Math.random() * width) + 10;
  };

  return (
    <>
      <Box pos="absolute" top="0" left="0" right="0" bottom="0">
        {hearts.map((heart, index) => (
          <heart.element key={index} />
        ))}
      </Box>
    </>
  );
};