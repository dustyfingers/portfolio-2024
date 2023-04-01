"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  OrbitControls,
} from "@react-three/drei";

import TestTorus from "@/components/TestTorus";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Canvas>
        <PerspectiveCamera />
        <ambientLight intensity={1} />
        <TestTorus />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={0}
          // maxPolarAngle={Math.PI / 2.5}
          makeDefault
        />
        <Environment files="hdri/lakeside_1k.hdr" background />
      </Canvas>
    </main>
  );
}
