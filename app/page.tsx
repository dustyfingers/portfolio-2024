"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";

import TestTorus from "@/components/TestTorus";
import TropicalTree from "@/components/TropicalTree";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Canvas shadows>
        <PerspectiveCamera />
        <TestTorus />
        <TropicalTree />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minPolarAngle={0}
          // constrains y rotation
          // maxPolarAngle={Math.PI / 2.5}
          makeDefault
        />
        <Environment files="hdri/lakeside_1k.hdr" background />
        <Preload all />
      </Canvas>
    </main>
  );
}
