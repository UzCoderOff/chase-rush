import { CameraControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Robber from './Robber'

const Scene = () => {
  return (
    <Canvas>
      <color attach="background" args={["#111"]} />
      <CameraControls zoom={true}/>
      <ambientLight intensity={1}/>
      <pointLight intensity={10} position={[10, 10, 10]} />
      <Robber/>
    </Canvas>
  );
};

export default Scene;
