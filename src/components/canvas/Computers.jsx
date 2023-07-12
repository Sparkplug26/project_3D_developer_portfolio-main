import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { ComputersCanvas } from ".";


  const computer = useGLTF("./desktop_pc/scene.gltf");

const Computers = () => {
  return (

    <Mesh>
          <hemisphereLight intensity={0.15} groundColor='black' />
    </Mesh>
  
  )
}

export default Computers;