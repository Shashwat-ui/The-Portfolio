export const AICoreShader = {
  uniforms: { uTime: { value: 0 } },
  vertexShader: `
    varying float vNoise;
    uniform float uTime;
    void main() {
      vec3 pos = position + normal * sin(uTime + position.y * 6.0) * 0.15;
      vNoise = sin(uTime);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying float vNoise;
    void main() {
      vec3 color = mix(vec3(0.0,1.0,1.0), vec3(0.7,0.2,1.0), vNoise);
      gl_FragColor = vec4(color * 1.5, 1.0);
    }
  `,
};
