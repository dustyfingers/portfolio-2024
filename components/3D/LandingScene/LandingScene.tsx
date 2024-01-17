import { useState } from "react";
import { useThree, useFrame, Vector3 } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import { Globals } from "@react-spring/shared";
import {
  PerspectiveCamera,
  Environment,
  Preload,
  OrbitControls,
} from "@react-three/drei";

import Dodecahedron from "@/components/3D/Dodecahedron";

const Controls = () => {
  const { gl, camera } = useThree();
  return (
    <OrbitControls
      autoRotate
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
};

const positions: Vector3[][] = [
  [
    [-2, 0, 0],
    [-3, 0, 0],
  ],
  [
    [0, -2, -3],
    [0, -3, -4],
  ],
  [
    [2, 0, 0],
    [3, 0, 0],
  ],
];

// fix rafz frameloop issue
Globals.assign({
  frameLoop: "always",
});

interface ILandingScene {}
const LandingScene = ({ ...props }: ILandingScene) => {
  // imperitavely animate camera here?
  const camera = useThree((state) => state.camera);
  const [camTo, setCamTo] = useState(positions[0][1]);
  const [camFrom, setCamFrom] = useState(positions[2][1]);

  const { position } = useSpring({
    position: camTo as Vector3,
    from: { position: camFrom as Vector3 },
  });

  const handleMeshClick = () => {};

  useFrame(({ camera }) => {
    camera.position.x = position.x;
    camera.position.y = position.y;
    camera.position.z = position.z;
  });

  return (
    <>
      <PerspectiveCamera />
      <Controls />
      {/* animate camera to point at each of these meshes on click? */}

      {positions.map((group) => (
        <Dodecahedron
          position={group[0]}
          camPoint={group[1]}
          //   onClick={() => handleMeshClick()}
        />
      ))}
      <Environment files="hdri/lakeside_1k.hdr" background />
      <Preload all />
    </>
  );
};

export default LandingScene;