import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Edges } from '@react-three/drei';


function MovingCube({ speed, isPlaying }) {
  const ref = useRef();

  useFrame(() => {
    if (isPlaying && ref.current) {
      // Move the cube on the X-axis
      ref.current.position.x += speed;
      if (ref.current.position.x > 5) {
        ref.current.position.x = -5; // Loop back to left
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

function BoundaryBox() {
  return (
    <mesh position={[0, 0, 0]} scale={[10, 1, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial transparent opacity={0} />
      <Edges scale={1.01} threshold={15}>
        <lineBasicMaterial color="gray" transparent opacity={0.2} />
      </Edges>

    </mesh>
  );
}

function App() {
  const [speed, setSpeed] = useState(0.01);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <OrbitControls />
        <MovingCube speed={speed} isPlaying={isPlaying} />
        <BoundaryBox /> {/* Boundary Box */}
      </Canvas>

      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          background: 'white',
          padding: 10,
          borderRadius: 8,
        }}
      >
        <label>
          Speed:
          <input
            type="range"
            min="0.001"
            max="0.05"
            step="0.001"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            style={{ marginLeft: 10 }}
          />
          <span style={{ marginLeft: 10 }}>{speed.toFixed(3)}</span>
        </label>
        <br />
        <button onClick={() => setIsPlaying(true)} style={{ marginTop: 10 }}>
          ▶ Play
        </button>
        <button
          onClick={() => setIsPlaying(false)}
          style={{ marginTop: 10, marginLeft: 10 }}
        >
          ⏸ Pause
        </button>
      </div>
    </div>
  );
}

export default App;
