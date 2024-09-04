import { Canvas } from '@react-three/fiber'
import React from 'react'

const Scene = () => {
  return (
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        
    </Canvas>
  )
}

export default Scene