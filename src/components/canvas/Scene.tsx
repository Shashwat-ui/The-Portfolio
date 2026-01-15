'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import ScrollRig from './ScrollRig';

/* =========================
   FLOATING GEOMETRY
========================= */

function FloatingGeometry() {
  const sphere1 = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);
  const sphere3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (sphere1.current) {
      sphere1.current.rotation.x = t * 0.08;
      sphere1.current.rotation.y = t * 0.1;
    }

    if (sphere2.current) {
      sphere2.current.rotation.x = t * 0.06;
      sphere2.current.rotation.z = t * 0.08;
    }

    if (sphere3.current) {
      sphere3.current.rotation.y = t * 0.07;
      sphere3.current.rotation.z = t * 0.09;
    }
  });

  return (
    <>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.6}>
        <Sphere ref={sphere1} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#1e1b4b"
            emissive="#6366f1"
            emissiveIntensity={0.08}
            distort={0.35}
            speed={1.5}
            roughness={0.45}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
        <Sphere ref={sphere2} args={[0.6, 64, 64]} position={[-3, 2, -2]}>
          <MeshDistortMaterial
            color="#020617"
            emissive="#22d3ee"
            emissiveIntensity={0.06}
            distort={0.3}
            speed={1.2}
            roughness={0.5}
            metalness={0.85}
          />
        </Sphere>
      </Float>

      <Float speed={1.3} rotationIntensity={0.35} floatIntensity={1.4}>
        <Sphere ref={sphere3} args={[0.5, 64, 64]} position={[3, -1.5, -1]}>
          <MeshDistortMaterial
            color="#020617"
            emissive="#8b5cf6"
            emissiveIntensity={0.06}
            distort={0.32}
            speed={1.4}
            roughness={0.5}
            metalness={0.88}
          />
        </Sphere>
      </Float>
    </>
  );
}

/* =========================
   MOUSE PARALLAX (LIGHT)
========================= */

function MouseInteraction() {
  useFrame((state) => {
    const x = state.mouse.x * 0.4;
    const y = state.mouse.y * 0.4;

    state.camera.position.x += (x - state.camera.position.x) * 0.03;
    state.camera.position.y += (y - state.camera.position.y) * 0.03;
  });

  return null;
}

/* =========================
   SCENE
========================= */

export default function Scene() {
  return (
    <>
      {/* LIGHTING (DARK + CONTROLLED) */}
      <ambientLight intensity={0.15} />

      <directionalLight
        position={[6, 6, 6]}
        intensity={0.6}
        color="#8b5cf6"
      />

      <directionalLight
        position={[-6, -6, -6]}
        intensity={0.35}
        color="#22d3ee"
      />

      <pointLight
        position={[0, 0, 4]}
        intensity={0.5}
        color="#6366f1"
      />

      {/* ENVIRONMENT (NO INTENSITY PROP — FIXED) */}
      <Environment preset="city" />

      {/* OBJECTS */}
      <FloatingGeometry />

      {/* CONTROLLERS */}
      <ScrollRig />
      <MouseInteraction />

      {/* FOG */}
      <fog attach="fog" args={['#020617', 6, 18]} />
    </>
  );
}
