"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Line, Text } from "@react-three/drei";
import * as THREE from "three";

export default function MaintenanceOnly() {
  return (
    <div className="w-full h-60 md:h-96">
      <Canvas camera={{ position: [2.4, 1.8, 2.6], fov: 50 }}>
        <ambientLight intensity={0.45} />
        <directionalLight intensity={0.9} position={[5, 5, 5]} />

        <MaintenanceScene />

        <Environment preset="forest" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

function MaintenanceScene() {
  const coreRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef<THREE.Group>(null!);
  const toolRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  const radius = 1.55;

  const ringPoints = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 100;
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Core: stable, slow rotation (reads as “reliability”)
    coreRef.current.rotation.y = t * 0.35;
    coreRef.current.rotation.x = t * 0.15;

    // Orbit: tool rotates around core (maintenance cycle)
    orbitRef.current.rotation.y = t * 0.9;

    // Tool: self-rotate + slight wobble
    toolRef.current.rotation.x = t * 1.1;
    toolRef.current.rotation.z = -t * 0.8;

    // Pulse ring: subtle breathe (monitoring / checks)
    const s = 1 + Math.sin(t * 1.6) * 0.06;
    ringRef.current.scale.set(s, s, s);
    (ringRef.current.material as THREE.MeshStandardMaterial).opacity =
      0.18 + (Math.sin(t * 1.6) + 1) * 0.06;
  });

  return (
    <group>
      {/* Core object */}
      <mesh ref={coreRef}>
        <dodecahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#f9f8fb"
          metalness={0.55}
          roughness={0.22}
        />
      </mesh>

      {/* Pulse ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.35, 0.03, 16, 140]} />
        <meshStandardMaterial
          color="#60A5FA"
          metalness={0.25}
          roughness={0.25}
          transparent
          opacity={0.22}
          emissive={new THREE.Color("#3B82F6")}
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Orbit path */}
      <Line
        points={ringPoints}
        lineWidth={1}
        color="white"
        transparent
        opacity={0.22}
      />

      {/* Orbiting tool */}
      <group ref={orbitRef}>
        <group position={[radius, 0.12, 0]}>
          <mesh ref={toolRef}>
            {/* “Tool-like” complexity */}
            <torusKnotGeometry args={[0.18, 0.06, 110, 14]} />
            <meshStandardMaterial
              color="#BFDBFE"
              metalness={0.5}
              roughness={0.2}
              emissive={new THREE.Color("#3B82F6")}
              emissiveIntensity={0.28}
            />
          </mesh>

          <Text
            position={[0, 0.45, 0]}
            fontSize={0.18}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Maintenance
          </Text>
        </group>
      </group>
    </group>
  );
}
