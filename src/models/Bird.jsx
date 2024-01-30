import React from 'react'

import birdScene from '/src/parts/3d/bird.glb'
import { useGLTF } from '@react-three/drei'

const Bird = () => {

    const {scene, animations} = useGLTF(birdScene);
  return (
    <mesh position = {[-5,2,1]}  scale ={[0.003, 0.003,0.003]}> 
    <primitive object = {scene} position = {[0,0,-50]} scale = {[0.5,0.5,0.5]} rotation = {[0,0,0]}/>
    </mesh>
  )
}

export default Bird