'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { AICoreShader } from './AICoreShader';

export default function SentientCore() {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock, mouse }) => {
    if (!mesh.current || !material.current) return;
    material.current.uniforms.uTime.value = clock.getElapsedTime();
    mesh.current.rotation.x += 0.002 + mouse.y * 0.01;
    mesh.current.rotation.y += 0.003 + mouse.x * 0.01;
    mesh.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 2) * 0.08);
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.4, 64]} />
      <shaderMaterial ref={material} args={[AICoreShader]} transparent />
    </mesh>
  );
}
