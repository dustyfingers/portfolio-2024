"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";

import LandingScene from "@/components/3D/LandingScene";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Canvas shadows>
        <LandingScene />
      </Canvas>
    </main>
  );
}
