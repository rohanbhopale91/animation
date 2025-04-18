import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MovingCube from '../components/MovingCube';
import BoundaryBox from '../components/BoundaryBox';

function AnimationCanvas({ speed, isPlaying }) {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <OrbitControls />
      <MovingCube speed={speed} isPlaying={isPlaying} />
      <BoundaryBox />
    </Canvas>
  );
}

export default AnimationCanvas;
