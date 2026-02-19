import { Suspense, useRef, useState } from "react";

import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
// @ts-expect-error: maath does not provide TS definitions for random

const Stars = (props: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const data = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    return data as Float32Array;
  });

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const CanvasContainer = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[-1] h-full w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
