import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';

const ModelViewer = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 3], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full"
    >
      <ambientLight intensity={0.5}/>
      <Environment preset="city" />
      <Center>
        <Shirt />
      </Center>
    </Canvas>
  );
};

export default ModelViewer;