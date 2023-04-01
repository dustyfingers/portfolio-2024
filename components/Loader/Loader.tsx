import React from "react";
import { motion } from "framer-motion";
import { useProgress } from "@react-three/drei";

import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <div className={styles.LoadingContainer}>
      <motion.div
        className={styles.ProgressIndicator}
        style={{ scaleX: progress }}
      />
      Loading your experience...
    </div>
  );
};

export default Loader;
