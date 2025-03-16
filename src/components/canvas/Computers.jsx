import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLorder from "../Loader";

const Computers = ({isMobile}) => {
  const object = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={'black'} />
      <pointLight
        intensity={1}
      />
      <ambientLight intensity={1}/>
      <spotLight
        intensity={1}
        position={[-20, 50, 10]}
        penumbra={1}
        angle={0.12}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        scale={isMobile?0.7: 0.75}
        position={isMobile?[0,-3,-2,2]:[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        object={object.scene} />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setMobile]=useState(false);

  useEffect(()=>{
   const mediaQuery = window.matchMedia('(max-width: 600px)');
   setMobile(mediaQuery.matches)
   
   const handleMediaQueryChange = (event)=>{
    setMobile(event.matches)
   };

   mediaQuery.addEventListener('change',handleMediaQueryChange)

   return () =>{
    mediaQuery.removeEventListener('change',handleMediaQueryChange)
   }
  },[])

  return (
    <Canvas
      frameloop={'demand'}
      shadows={'percentage'}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLorder />} >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas