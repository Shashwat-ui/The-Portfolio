'use client';
import { ChromaticAberration } from '@react-three/postprocessing';
import { Vector2 } from 'three';
import { useState, useEffect } from 'react';

export default function RealityGlitch() {
  const [o, setO] = useState(0.001);
  useEffect(() => {
    let lx = 0, ly = 0;
    window.onmousemove = e => {
      const s = Math.abs(e.clientX - lx) + Math.abs(e.clientY - ly);
      lx = e.clientX; ly = e.clientY;
      setO(Math.min(0.006, 0.001 + s * 0.00005));
    };
  }, []);
  return <ChromaticAberration offset={new Vector2(o, o)} />;
}
