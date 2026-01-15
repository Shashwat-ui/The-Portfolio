import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';
import { useRef } from 'react';
import * as THREE from 'three';

export function TimeStream() {
  const ref = useRef<THREE.Points>(null);
  const positions = new Float32Array(8000 * 3);
  inSphere(positions, { radius: 30 });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial color="#7dd3fc" size={0.02} transparent />
    </Points>
  );
}
