"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Canvas, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Vector3 } from "three";

import TestTorus from "@/components/TestTorus";
import TropicalTree from "@/components/TropicalTree";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // imperitavely animate camera here?
  const camera = useThree((state) => state.camera);
  return (
    <main className={styles.main}>
      <Canvas shadows>
        <PerspectiveCamera />
        <TropicalTree position={new Vector3(-6, 0, 0)} />
        <TestTorus />
        <Environment files="hdri/lakeside_1k.hdr" background />
        <Preload all />
      </Canvas>
    </main>
  );
}
