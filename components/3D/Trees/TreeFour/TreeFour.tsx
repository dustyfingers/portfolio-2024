import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Tree_2: THREE.Mesh;
  };
  materials: {};
};

const TreeFour = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/objects/TreeFour.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Tree_2"
        geometry={nodes.Tree_2.geometry}
        position={[-1.929, 17.89, -60.665]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.8}
      >
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};

useGLTF.preload("/objects/TreeFour.glb");

export default TreeFour;
