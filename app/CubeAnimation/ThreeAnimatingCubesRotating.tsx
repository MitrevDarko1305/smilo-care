"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Text, Line } from "@react-three/drei";
import * as THREE from "three";

export default function RotatingCubeExpanded() {
  return (
    <div className="w-full h-60 md:h-96">
      <Canvas camera={{ position: [2.4, 2.0, 2.6], fov: 50 }}>
        <ambientLight intensity={0.45} />
        <directionalLight intensity={0.9} position={[5, 5, 5]} />
        <Scene />
        <Environment preset="forest" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

function Scene() {
  const cubeRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef<THREE.Group>(null!);
  const satARef = useRef<THREE.Mesh>(null!);
  const satBRef = useRef<THREE.Mesh>(null!);

  // Orbit params
  const radius = 1.7;

  // Precompute orbit ring points
  const ringPoints = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 96;
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Center cube rotation
    cubeRef.current.rotation.x = t / 2;
    cubeRef.current.rotation.y = t / 3;

    // Whole orbit rotates (satellites move together)
    orbitRef.current.rotation.y = t * 0.6;

    // Give satellites their own spin so they feel "alive"
    satARef.current.rotation.y = -t * 1.2;
    satARef.current.rotation.x = t * 0.7;

    satBRef.current.rotation.y = t * 1.1;
    satBRef.current.rotation.z = -t * 0.6;
  });

  const satA = new THREE.Vector3(radius, 0.25, 0);
  const satB = new THREE.Vector3(-radius, -0.25, 0);

  return (
    <group>
      {/* Center cube */}
      <mesh ref={cubeRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#573993ff" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Orbit system */}
      <group ref={orbitRef}>
        {/* Orbit ring */}
        <Line
          points={ringPoints}
          lineWidth={1}
          color="white"
          transparent
          opacity={0.25}
        />

        {/* Connector lines (optional but nice for “relationship” storytelling) */}
        <Line
          points={[new THREE.Vector3(0, 0, 0), satA]}
          lineWidth={1}
          color="white"
          transparent
          opacity={0.18}
        />
        <Line
          points={[new THREE.Vector3(0, 0, 0), satB]}
          lineWidth={1}
          color="white"
          transparent
          opacity={0.18}
        />

        {/* Satellite A: Setup */}
        <group position={satA.toArray()}>
          <mesh ref={satARef}>
            {/* pick a shape that reads as “setup” techy */}
            <icosahedronGeometry args={[0.28, 0]} />
            <meshStandardMaterial
              color="#f8f9fb"
              metalness={0.35}
              roughness={0.25}
              emissive={new THREE.Color("#ff2800")}
              emissiveIntensity={0.25}
            />
          </mesh>

          <Text
            position={[0, 0.45, 0]}
            fontSize={0.18}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Setup
          </Text>
        </group>

        {/* Satellite B: Maintenance */}
        <group position={satB.toArray()}>
          <mesh ref={satBRef}>
            {/* torusKnot feels “maintenance / complexity / tooling” */}
            <torusKnotGeometry args={[0.18, 0.06, 90, 12]} />
            <meshStandardMaterial
              color="#f7f64f"
              metalness={0.45}
              roughness={0.22}
              emissive={new THREE.Color("#f9f8fb")}
              emissiveIntensity={0.22}
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
