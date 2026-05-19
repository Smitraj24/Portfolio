import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Island Platform Component
function IslandPlatform({ position, color, label, onClick }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Base Platform */}
      <mesh ref={meshRef} onClick={onClick} castShadow receiveShadow>
        <boxGeometry args={[2, 0.3, 2]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
      </mesh>
      
      {/* Platform Shadow/Depth */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[2, 0.1, 2]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Floating Label */}
      <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="#00d9ff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {label}
        </Text>
      </Float>

      {/* Glow Effect */}
      <pointLight position={[0, 0.5, 0]} color={color} intensity={2} distance={3} />
    </group>
  );
}

// Decorative Elements
function FloatingParticle({ position }) {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.001;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={2} />
    </mesh>
  );
}

export default function IsometricWorld({ onSectionClick }) {
  const sections = [
    { position: [-4, 0, 2], color: "#ff6b6b", label: "About Me", section: "about" },
    { position: [0, 0, 3], color: "#4ecdc4", label: "Skills", section: "skills" },
    { position: [4, 0, 2], color: "#45b7d1", label: "Projects", section: "projects" },
    { position: [-2, 0, -2], color: "#f7b731", label: "Experience", section: "about" },
    { position: [2, 0, -2], color: "#5f27cd", label: "Contact", section: "contact" },
  ];

  const particles = Array.from({ length: 20 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 15,
      Math.random() * 5,
      (Math.random() - 0.5) * 15,
    ],
  }));

  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          {/* Camera Setup for Isometric View */}
          <PerspectiveCamera makeDefault position={[8, 8, 8]} fov={50} />
          
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, 5, -10]} color="#00d9ff" intensity={0.5} />
          <pointLight position={[10, 5, 10]} color="#4ecdc4" intensity={0.5} />

          {/* Island Platforms */}
          {sections.map((section, index) => (
            <IslandPlatform
              key={index}
              position={section.position}
              color={section.color}
              label={section.label}
              onClick={() => onSectionClick && onSectionClick(section.section)}
            />
          ))}

          {/* Floating Particles */}
          {particles.map((particle, i) => (
            <FloatingParticle key={i} position={particle.position} />
          ))}

          {/* Ground Plane with Gradient */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial
              color="#0a1628"
              roughness={0.8}
              metalness={0.2}
              opacity={0.8}
              transparent
            />
          </mesh>

          {/* Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            minDistance={5}
            maxDistance={20}
            maxPolarAngle={Math.PI / 2.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
