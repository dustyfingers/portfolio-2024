import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Icosphere: THREE.Mesh;
  };
  materials: {};
};

interface TreeProps {}

const TreeThree = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { nodes } = useGLTF("/objects/TreeThree.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Icosphere"
        geometry={nodes.Icosphere.geometry}
        position={[0, 13.676, -31.088]}
        scale={[6.828, 4.968, 4.968]}
      >
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};

useGLTF.preload("/objects/TreeThree.glb");

export default TreeThree;
