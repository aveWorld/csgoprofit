import React, { useState, useEffect } from 'react';

const useAudio = (url) => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio(url));
  }, [url]);

  const toggle = () => audio.play();

  return [toggle];
};

export { useAudio };
