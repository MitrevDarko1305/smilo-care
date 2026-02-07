"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";



export default function RotatingCube() {
  return (
    <div className="w-full h-60 md:h-96">
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight intensity={0.8} position={[5, 5, 5]} />
      

        <Scene />
        <Environment preset="forest" />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

function Scene() {
  const cubeRef = useRef<THREE.Mesh>(null!);
  const cubeGroupRef = useRef<THREE.Group>(null!);
 


  // Make the cube rotate
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    cubeGroupRef.current.rotation.x = t / 2;
    cubeGroupRef.current.rotation.y = t / 3;
   
  });

  return (

    <group ref={cubeGroupRef}>
  {/* Main cube */}
  <mesh>
    <boxGeometry args={[1.2, 1.2, 1.2]} />
    <meshStandardMaterial
      color="#f9f8fb"
      metalness={0.6}
      roughness={0.2}
    />
  </mesh>

  {/* CORE MARKER (attached to cube corner) */}
  <group position={[0.75, 0.75, 0.75]}>
    {/* small core sphere */}
    <mesh>
      <sphereGeometry args={[0.12, 24, 24]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive={new THREE.Color("#ffffff")}
        emissiveIntensity={0.6}
        metalness={0.2}
        roughness={0.25}
      />
    </mesh>

    {/* tiny halo ring around the core */}
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.16, 0.22, 48]} />
      <meshStandardMaterial
        color="#ffffff"
        transparent
        opacity={0.35}
        emissive={new THREE.Color("#ffffff")}
        emissiveIntensity={0.35}
      />
    </mesh>
  </group>
</group>
  );
}
