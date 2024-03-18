import React from "react";
import { animated } from "@react-spring/three";
import { Globals } from "@react-spring/shared";

// fix rafz frameloop issue
Globals.assign({
  frameLoop: "always",
});

const CameraRig = () => {
  return <animated.perspectiveCamera />;
};

export default CameraRig;
