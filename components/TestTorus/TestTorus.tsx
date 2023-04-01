import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, Mesh } from "three";

const PageContainer: React.FC = () => {
  const torus = useRef<Mesh>(new Mesh());
  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={torus} receiveShadow castShadow>
      <torusGeometry />
      <meshPhysicalMaterial
        roughness={0.1}
        // attenuationDistance={0.001}
        metalness={0.99}
        specularColor={new Color(0.988, 0.976, 0.843)}
        color={new Color(0.877, 0.789, 0.434)}
        reflectivity={1}
      />
    </mesh>
  );
};

export default PageContainer;
