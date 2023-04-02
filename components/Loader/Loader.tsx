import React from "react";
import { motion, useSpring } from "framer-motion";
import { useProgress } from "@react-three/drei";
import Typewriter from "typewriter-effect";

import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  const { progress } = useProgress();
  const scaleX = useSpring(progress, {
    stiffness: 1000,
    damping: 30,
    mass: 0.25,
  });
  return (
    <div className={styles.LoaderContainer}>
      <motion.div className={styles.ProgressIndicator} style={{ scaleX }} />
      <div className={styles.TextContainer}>
        <Typewriter
          options={{
            strings: ["Loading..."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
