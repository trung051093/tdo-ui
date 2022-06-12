import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

export const Music = () => {
  const [playing, setPlaying] = React.useState<boolean>(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    const handlePlay = async () => {
      await audioRef.current?.play();
      if (audioRef.current?.played) {
        setPlaying(true);
      }
    };
    if (audioRef.current) {
      handlePlay();
    }
  }, []);

  const onPlay = () => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying((preState) => !preState);
  };

  return (
    <>
      <Box pos="fixed" top="10px" right="10px" zIndex={2}>
        <IconButton
          variant="outline"
          colorScheme="pink"
          aria-label="Play music"
          icon={playing ? <FiVolume2 /> : <FiVolumeX />}
          onClick={onPlay}
        />
      </Box>
      <iframe
        src="/audio/silence.mp3"
        allow="autoplay"
        id="audio"
        style={{ display: 'none' }}
      ></iframe>
      <audio
        ref={audioRef}
        id="player"
        autoPlay
        loop
        style={{ display: 'none' }}
      >
        <source src="/audio/little-love.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};
