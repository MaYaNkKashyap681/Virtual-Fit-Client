import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';
import { OrbitControls } from '@react-three/drei'

const ModelViewer = ({texture}) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 3], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full"
    >
        <OrbitControls
      
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
      />
      <ambientLight intensity={0.5}/>
      <Environment preset="city" />
      <Center>
        <Shirt texture = {texture}/>
      </Center>
    </Canvas>
  );
};

export default ModelViewer;