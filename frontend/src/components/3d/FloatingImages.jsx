import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

function FloatingImage({ position, imageUrl, rotation = [0, 0, 0] }) {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.5, 0.5]}
    >
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingImages() {
  // Tech stack images
  const images = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      position: [-4, 2, -3],
      rotation: [0, 0.3, 0],
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      position: [4, -1, -4],
      rotation: [0, -0.3, 0],
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      position: [-3, -2, -2],
      rotation: [0, 0.5, 0],
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      position: [3, 2, -5],
      rotation: [0, -0.5, 0],
    },
  ];

  return (
    <group>
      {images.map((img, index) => (
        <FloatingImage
          key={index}
          imageUrl={img.url}
          position={img.position}
          rotation={img.rotation}
        />
      ))}
    </group>
  );
}
