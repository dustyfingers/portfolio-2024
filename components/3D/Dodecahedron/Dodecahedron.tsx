import { useMemo, useRef } from "react";
import { Vector3, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";

interface IDodecahedron {
  position: Vector3 | undefined;
  camPoint: Vector3 | undefined;
  onClick: () => void;
}

const Dodecahedron = ({
  position,
  camPoint,
  onClick,
  ...props
}: IDodecahedron) => {
  const mesh = useRef<THREE.Mesh>(new THREE.Mesh());
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
    if (mesh.current) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.u_time.value =
        clock.getElapsedTime();
    }
  });
  return (
    <group>
      <mesh ref={mesh} {...props} position={position} onClick={() => onClick()}>
        <dodecahedronGeometry />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  );
};

export default Dodecahedron;
