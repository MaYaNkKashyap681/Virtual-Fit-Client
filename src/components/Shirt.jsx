import React from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import {Color} from 'three'

const Shirt = ({texture}) => {
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const fullTexture = useTexture(texture);


  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      >
        {fullTexture &&
         <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        }
        </mesh>
    </group>
  );
};

export default Shirt;