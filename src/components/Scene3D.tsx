import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';

interface FloatingLogoProps {
  position: Vector3;
  text: string;
  color: string;
  speed: number;
  scale: number;
}

const FloatingLogo: React.FC<FloatingLogoProps> = ({ position, text, color, speed, scale }) => {
  const meshRef = useRef<Mesh>(null!);
  const textRef = useRef<any>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed * 0.7;
      meshRef.current.rotation.z += delta * speed * 0.3;
      
      // Floating motion
      meshRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x = position.x + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
    
    if (textRef.current) {
      textRef.current.rotation.y += delta * speed * 0.5;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {/* 3D Box representing the technology */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.7} 
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Floating text */}
      <Text
        ref={textRef}
        position={[0, -1.5, 0]}
        fontSize={0.3}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {text}
      </Text>
      
      {/* Glowing ring effect */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.4, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const ParticleField: React.FC = () => {
  const particlesRef = useRef<Mesh>(null!);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ]
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position as [number, number, number]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#00ff88" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

export const Scene3D: React.FC = () => {
  const logos = [
    { position: new Vector3(-4, 2, 0), text: 'HTML', color: '#e34c26', speed: 1, scale: 1 },
    { position: new Vector3(4, -1, -2), text: 'CSS', color: '#1572b6', speed: 0.8, scale: 1.2 },
    { position: new Vector3(0, 3, -1), text: 'JS', color: '#f7df1e', speed: 1.2, scale: 0.9 },
    { position: new Vector3(-3, -2, 1), text: 'React', color: '#61dafb', speed: 0.9, scale: 0.8 },
    { position: new Vector3(3, 1, -3), text: 'Node', color: '#339933', speed: 1.1, scale: 1.1 },
    { position: new Vector3(-1, -3, 2), text: 'Vue', color: '#4fc08d', speed: 0.7, scale: 0.9 },
  ];

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff0080" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#0080ff" />
        
        {/* Floating logos */}
        {logos.map((logo, index) => (
          <FloatingLogo
            key={index}
            position={logo.position}
            text={logo.text}
            color={logo.color}
            speed={logo.speed}
            scale={logo.scale}
          />
        ))}
        
        {/* Particle field */}
        <ParticleField />
        
        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};