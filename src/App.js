import React from 'react';
import AnimationCanvas from './canvas/AnimationCanvas';
import useAnimationConfig from './config/useAnimationConfig';

function App() {
  const { speed, setSpeed, isPlaying, setIsPlaying } = useAnimationConfig();

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Menu Bar */}
      <div
        style={{
          background: '#282c34',
          color: 'white',
          padding: '10px 20px',
          fontSize: '18px',
        }}
      >
        Menu Bar
      </div>

      {/* Configuration Panel */}
      <div
        style={{
          background: '#f4f4f4',
          padding: '20px',
          borderBottom: '1px solid #ccc',
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

      {/* Animation Canvas */}
      <div style={{ flex: 1, position: 'relative' }}>
        <AnimationCanvas speed={speed} isPlaying={isPlaying} />
      </div>
    </div>
  );
}

export default App;
