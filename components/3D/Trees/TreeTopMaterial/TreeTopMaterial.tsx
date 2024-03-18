import React, { useMemo } from "react";
import { useFrame } from "@react-three/fiber";

import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";

interface TreeTopMaterialProps {
  meshRef: React.RefObject<
    THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
  >;
}

const TreeTopMaterial = (props: TreeTopMaterialProps) => {
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    []
  );
  useFrame((state) => {
    const { clock } = state;
    if (props.meshRef.current) {
      (
        props.meshRef.current.material as THREE.ShaderMaterial
      ).uniforms.u_time.value = clock.getElapsedTime();
    }
  });
  return (
    <shaderMaterial
      fragmentShader={fragmentShader}
      vertexShader={vertexShader}
      uniforms={uniforms}
    />
  );
};

export default TreeTopMaterial;
