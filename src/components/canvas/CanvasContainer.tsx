'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './Scene';

export default function CanvasContainer() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
