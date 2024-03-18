import React, { useMemo } from "react";
import * as THREE from "three";

import TreeOne from "@/components/3D/Trees/TreeOne";

const SceneTrees = () => {
  const treePositions = useMemo(() => {
    const positions: THREE.Vector3[][] = [];
    for (let i = 0; i <= 50; i++) {
      const scale = Math.random() * 3;
      positions.push([
        new THREE.Vector3(
          (Math.random() - 0.5) * 100,
          0,
          (Math.random() - 0.5) * 100
        ),
        new THREE.Vector3(scale, scale, scale),
      ]);
    }

    return positions;
  }, []);
  return (
    <>
      {treePositions.map(([position, scale]) => (
        <TreeOne position={position} scale={scale} />
      ))}
    </>
  );
};

export default SceneTrees;
