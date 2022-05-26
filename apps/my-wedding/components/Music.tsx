import React from 'react';

export const Music = () => {
  const audioRef = React.useRef<HTMLAudioElement | null>();

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <>
      <iframe
        src="/audio/silence.mp3"
        allow="autoplay"
        id="audio"
        style={{ display: 'none' }}
      ></iframe>
      <audio ref={audioRef} id="player" autoPlay loop>
        <source src="/audio/little-love.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};
