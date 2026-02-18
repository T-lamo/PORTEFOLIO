import { Suspense } from "react";

import { Preload, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface CanvasContainerProps {
  children: React.ReactNode;
  autoRotate?: boolean;
}

export const CanvasContainer = ({ children, autoRotate = true }: CanvasContainerProps) => {
  return (
    <div className="absolute inset-0 z-[-1] h-full w-full">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
            enablePan={false}
          />
          {children}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
