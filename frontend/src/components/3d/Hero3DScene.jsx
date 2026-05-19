import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function AnimatedTorus() {
  const torusRef = useRef();

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.95}
          roughness={0.1}
          thickness={1.5}
          ior={1.5}
          chromaticAberration={0.8}
          anisotropy={0.5}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.2}
          color="#06b6d4"
        />
      </mesh>
    </Float>
  );
}

function GlowingSphere({ position }) {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={sphereRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#06b6d4"
        emissiveIntensity={3}
        transparent
        opacity={0.9}
      />
      <pointLight color="#06b6d4" intensity={3} distance={6} />
    </mesh>
  );
}

export default function Hero3DScene() {
  return (
    <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} color="#22d3ee" intensity={2} />
          <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={1.5} />
          <spotLight position={[0, 10, 0]} color="#06b6d4" intensity={2} angle={0.3} penumbra={1} />
          
          <AnimatedTorus />
          <GlowingSphere position={[-2, 0, -2]} />
          <GlowingSphere position={[2, 0, -2]} />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
