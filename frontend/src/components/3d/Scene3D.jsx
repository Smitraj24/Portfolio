import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import FloatingParticles from "./FloatingParticles";
import CodeParticles from "./CodeParticles";
import RotatingCube from "./RotatingCube";
import FloatingImages from "./FloatingImages";
import HolographicRing from "./HolographicRing";
import AnimatedSphere from "./AnimatedSphere";

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
        
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.8} />
          <pointLight position={[0, 5, 5]} color="#ec4899" intensity={0.6} />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            color="#8b5cf6"
          />
          
          {/* Background Stars */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          
          {/* Particle Systems */}
          <FloatingParticles />
          <CodeParticles />
          
          {/* 3D Objects */}
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <RotatingCube />
          </Float>
          
          {/* Floating Tech Images */}
          <FloatingImages />
          
          {/* Holographic Rings */}
          <HolographicRing position={[0, 0, -8]} radius={3} />
          
          {/* Animated Sphere */}
          <Float
            speed={1.5}
            rotationIntensity={0.3}
            floatIntensity={0.8}
          >
            <AnimatedSphere position={[-5, 0, -6]} />
          </Float>
          
          {/* Interactive Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.3}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

