import { useState } from 'react';

function useAnimationConfig() {
  const [speed, setSpeed] = useState(0.01);
  const [isPlaying, setIsPlaying] = useState(false);

  return {
    speed,
    setSpeed,
    isPlaying,
    setIsPlaying
  };
}

export default useAnimationConfig;
