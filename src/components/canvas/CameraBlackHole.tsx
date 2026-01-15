'use client';
import { useFrame } from '@react-three/fiber';

export default function CameraBlackHole() {
  useFrame(({ camera }) => {
    const t = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    camera.position.z = 10 - t * 8;
    camera.rotation.x = t * 0.3;
  });
  return null;
}
