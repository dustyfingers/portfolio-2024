import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, Mesh, TextureLoader, RepeatWrapping, DoubleSide } from "three";

const TestTorus: React.FC = () => {
  const torus = useRef<Mesh>(new Mesh());
  const armMap = new TextureLoader().load(
    // "textures/concrete_floor_worn_001_arm_1k.jpg"
    "textures/aerial_rocks_04_arm_1k.jpg"
  );
  armMap.wrapS = RepeatWrapping;
  armMap.wrapT = RepeatWrapping;
  armMap.repeat.set(4, 4);
  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.y += 0.001;
    }
  });
  return (
    <mesh ref={torus} receiveShadow castShadow>
      {/* a bronze ring */}
      <torusGeometry />
      <meshPhysicalMaterial
        roughness={0.1}
        roughnessMap={armMap}
        metalness={0.99}
        specularColor={new Color(0.988, 0.976, 0.843)}
        specularColorMap={armMap}
        color={new Color(0.877, 0.789, 0.434)}
        reflectivity={1}
      />

      {/* a pane of glass */}
      {/* <planeGeometry />
      <meshPhysicalMaterial
        side={DoubleSide}
        roughness={0.1}
        roughnessMap={armMap}
        metalness={0}
        ior={1.52}
        transmission={0.95}
        reflectivity={0.9}
      /> */}

      {/* a ball of honey */}
      {/* <sphereGeometry />
      <meshPhysicalMaterial
        roughness={0.01}
        ior={1.504}
        color={new Color(0.831, 0.397, 0.038)}
        transmission={0.95}
        reflectivity={0.9}
      /> */}
    </mesh>
  );
};

export default TestTorus;
