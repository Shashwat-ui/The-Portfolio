'use client';

import { useEffect, useRef } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';

export default function ScrollRig() {
  const scroll = useRef(0);
//   const { camera } = useThree();

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = max > 0 ? window.scrollY / max : 0;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

//   useFrame(() => {
//     camera.position.z += (8 - scroll.current * 3 - camera.position.z) * 0.06;
//     camera.position.y += (scroll.current * 2 - camera.position.y) * 0.06;
//     camera.rotation.x +=
//       (scroll.current * 0.2 - camera.rotation.x) * 0.06;
//   });

  return null;
}
