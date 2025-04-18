import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function MovingCube({ speed, isPlaying }) {
  const ref = useRef();

  useFrame(() => {
    if (isPlaying && ref.current) {
      ref.current.position.x += speed;
      if (ref.current.position.x > 5) {
        ref.current.position.x = -5;
      }
    }
  });

  return (
    <mesh ref={ref} position={[-5, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default MovingCube;
