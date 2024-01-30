import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from '/src/parts/3d/sky.glb'

const Sky = () => {
  
    const sky = useGLTF(skyScene);

    return (
    <mesh> 
    <primitive object = {sky.scene} position = {[0,0,-50]} scale = {[0.5,0.5,0.5]} rotation = {[0,0,0]}/>
    </mesh>  )
}

export default Sky