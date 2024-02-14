import { Html } from "@react-three/drei";
// import { Vector3 } from "three";
import { Vector3 } from "@react-three/fiber";

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
  return (
    <group>
      <mesh {...props} position={position} onClick={() => onClick()}>
        <dodecahedronGeometry />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
        />
      </mesh>
    </group>
  );
};

export default Dodecahedron;
