import { useState } from "react";
import { useThree, Vector3 } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CameraRig from "@/components/3D/CameraRig";
import LightRig from "@/components/3D/LightRig";
import SceneTrees from "@/components/3D/Trees/SceneTrees";

const Controls = () => {
  const { gl, camera } = useThree();
  return (
    <OrbitControls
      // autoRotate
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
};

// this is stupid
const positions: Vector3[][] = [
  [
    [-2, 0, 0],
    [-3, 0, 0],
  ],
  [
    [0, 0, -3],
    [0, 0, -4],
  ],
  [
    [2, 0, 0],
    [3, 0, 0],
  ],
];

interface ILandingScene {}
const LandingScene = ({ ...props }: ILandingScene) => {
  // imperitavely animate camera here?
  const camera = useThree((state) => state.camera);
  const [camTo, setCamTo] = useState(positions[0][1]);
  const [camFrom, setCamFrom] = useState(positions[2][1]);

  // const { position } = useSpring({
  //   position: camTo as Vector3,
  //   from: { position: camFrom as Vector3 },
  //   config: config.wobbly,
  // });

  const handleMeshClick = () => {
    setCamFrom(camTo);
    // setCamTo();
  };

  return (
    <>
      <CameraRig />
      <Controls />
      <LightRig />
      <SceneTrees />
      {/* <fog attach="fog" args={["white", 30, 400]} /> */}
    </>
  );
};

export default LandingScene;
