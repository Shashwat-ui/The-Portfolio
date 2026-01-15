import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RealityRing({ radius, speed }: { radius: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * speed;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.06, 64, 300]} />
      <meshStandardMaterial emissive="#8b5cf6" emissiveIntensity={2} />
    </mesh>
  );
}
