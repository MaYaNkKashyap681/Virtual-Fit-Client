import React from 'react';
import { useGLTF } from '@react-three/drei';

const Shirt = () => {
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  );
};

export default Shirt;