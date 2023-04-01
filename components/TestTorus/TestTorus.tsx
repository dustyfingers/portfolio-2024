import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const PageContainer: React.FC = () => {
  const torus = useRef<Mesh>(new Mesh());
  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={torus}>
      <torusGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default PageContainer;
