import { Html } from "@react-three/drei";
// import { Vector3 } from "three";
import { Vector3 } from "@react-three/fiber";

interface IDodecahedron {
  position: Vector3 | undefined;
  camPoint: Vector3 | undefined;
}
const Dodecahedron = ({ position, camPoint, ...props }: IDodecahedron) => {
  return (
    <group>
      <mesh
        {...props}
        position={position}
        onClick={() => console.log("hello!!!!")}
      >
        <dodecahedronGeometry />
        <meshStandardMaterial roughness={0.75} emissive="#404057" />
        <Html distanceFactor={10}>
          <div className="content">
            hello <br />
            world
          </div>
        </Html>
      </mesh>
    </group>
  );
};

export default Dodecahedron;
