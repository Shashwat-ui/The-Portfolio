'use client';

import { useEffect, useState } from 'react';

export const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [normalizedPosition, setNormalizedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Normalized to -1 to 1 range
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setNormalizedPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { mousePosition, normalizedPosition };
};
