import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh: THREE.Mesh;
    mesh_1: THREE.Mesh;
    mesh_2: THREE.Mesh;
  };
  materials: {
    island_tree_02: THREE.MeshStandardMaterial;
    island_tree_02_leaves: THREE.MeshStandardMaterial;
    island_tree_02_branches: THREE.MeshStandardMaterial;
  };
};

interface ITropicalTree {
  position: Vector3;
}

const TropicalTree: React.FC<ITropicalTree> = ({ position }: ITropicalTree) => {
  const tree = useRef<Group>(new Group());
  const { nodes, materials } = useGLTF(
    "objects/tropical_tree.glb"
  ) as unknown as GLTFResult;
  useFrame(() => {
    if (tree.current) {
      tree.current.rotation.y += 0.001;
    }
  });
  return (
    <group ref={tree} dispose={null} position={position}>
      <mesh
        geometry={nodes.mesh.geometry}
        material={materials.island_tree_02}
      />
      <mesh
        geometry={nodes.mesh_1.geometry}
        material={materials.island_tree_02_leaves}
      />
      <mesh
        geometry={nodes.mesh_2.geometry}
        material={materials.island_tree_02_branches}
      />
    </group>
  );
};

export default TropicalTree;
