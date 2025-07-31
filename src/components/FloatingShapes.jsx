import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Box(props) {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
    mesh.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
}

function Sphere() {
  const mesh = useRef();
  
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    mesh.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 2;
  });

  return (
    <mesh position={[2, 0, 0]} ref={mesh}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}

function Torus() {
  const mesh = useRef();
  
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    mesh.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.5) * 0.5;
  });

  return (
    <mesh position={[-2, 0, 0]} ref={mesh}>
      <torusGeometry args={[0.6, 0.2, 16, 100]} />
      <meshStandardMaterial color="#ec4899" />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
      <Sphere />
      <Torus />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
}

export default function FloatingShapes({ style, className }) {
  return (
    <div style={{ width: '100%', height: '100%', ...style }} className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Scene />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
