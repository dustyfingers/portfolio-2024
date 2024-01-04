import React from "react";
import { motion, useSpring } from "framer-motion";
import { useProgress } from "@react-three/drei";
import Typewriter from "typewriter-effect";

import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  const { progress } = useProgress();
  const progressSpring = useSpring(progress, {
    stiffness: 1000,
    damping: 30,
    mass: 0.25,
  });
  return (
    <div className={styles.LoaderContainer}>
      <motion.div
        className={styles.ProgressIndicator}
        style={{ opacity: progressSpring, scaleX: progressSpring }}
      />
      <div className={styles.TextContainer}>
        <Typewriter
          options={{
            wrapperClassName: styles.TypewriterWrapper,
            cursorClassName: styles.TypewriterCursor,
            strings: ["Loading your experience", "..."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
