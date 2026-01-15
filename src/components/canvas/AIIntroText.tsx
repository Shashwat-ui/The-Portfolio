'use client';
import { Text } from '@react-three/drei';
import { useEffect, useState } from 'react';

const FULL = 'SHASHWAT SHUKLA // FRONTEND ARCHITECT // REALITY ENGINEER';

export default function AIIntroText() {
  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setText(FULL.slice(0, i++));
      if (i > FULL.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, []);

  return <Text position={[0, -2.5, 0]} fontSize={0.35} color="#00ffff">{text}</Text>;
}
