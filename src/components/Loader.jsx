import React from 'react';
import { useProgress, Html } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
    <div style={{ color: 'white', fontSize: '20px' }}>
      Loading: {Math.round(progress)}%
    </div>
  </Html>
  )
}

export default Loader