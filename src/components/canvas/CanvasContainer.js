import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { Preload, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export const CanvasContainer = ({ children, autoRotate = true }) => {
    return (_jsx("div", { className: "absolute inset-0 z-[-1] h-full w-full", children: _jsxs(Canvas, { shadows: true, frameloop: "demand", dpr: [1, 2], gl: { preserveDrawingBuffer: true }, camera: { position: [0, 0, 5], fov: 45 }, children: [_jsxs(Suspense, { fallback: null, children: [_jsx(OrbitControls, { enableZoom: false, autoRotate: autoRotate, autoRotateSpeed: 0.5, enablePan: false }), children] }), _jsx(Preload, { all: true })] }) }));
};
