import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import TreeProps from "../TreeProps";
import TreeTopMaterial from "../TreeTopMaterial/TreeTopMaterial";
import TreeTrunkMaterial from "../TreeTrunkMaterial/TreeTrunkMaterial";

type GLTFResult = GLTF & {
  nodes: {
    Tree_1_1: THREE.Mesh;
    Tree_1_2: THREE.Mesh;
  };
  materials: {};
};

const TreeOne = (props: TreeProps) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/objects/TreeOne.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <group
      name="Tree_1"
      position={props.position}
      rotation={[Math.PI / 2, 0, 0]}
      ref={group}
      {...props}
      dispose={null}
    >
      <mesh
        name="Tree_1_1"
        geometry={nodes.Tree_1_1.geometry}
        material={nodes.Tree_1_1.material}
      >
        <TreeTrunkMaterial />
      </mesh>
      <mesh
        name="Tree_1_2"
        geometry={nodes.Tree_1_2.geometry}
        material={nodes.Tree_1_2.material}
      >
        <TreeTopMaterial />
      </mesh>
    </group>
  );
};

useGLTF.preload("/objects/TreeOne.glb");

export default TreeOne;
