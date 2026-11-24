
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
  ContactShadows,
} from '@react-three/drei';

function AvatarModel() {
  const { scene } = useGLTF('/models/developer.glb');

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.12}
      floatIntensity={0.25}
    >
      <primitive
        object={scene}
        scale={2}
        position={[0, -2, 0]}
      />
    </Float>
  );
}

export default function Avatar3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={2}
      />

      <Suspense fallback={null}>
        <AvatarModel />

        <Environment preset="studio" />

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.35}
          blur={2}
        />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.8}
      />
    </Canvas>
  );
}

useGLTF.preload('/models/developer.glb');
