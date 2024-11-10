import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Particles = () => {
  return (
    <div className="particles-container" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Stars
          radius={100} // Manage the radius
          depth={50} // Depth of the field
          count={2000} // Number of stars
          factor={3} // Variance of star size
          saturation={0} // Color saturation
          fade={true} // Fading stars on rotation
        />
      </Canvas>
    </div>
  );
};

export default Particles;
