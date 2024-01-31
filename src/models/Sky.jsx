import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from '/src/parts/3d/sky.glb'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'

const Sky = ({isRotating}) => {
  
    const sky = useGLTF(skyScene);
    const skyref = useRef();

useFrame((_,delta) => { 
    if(isRotating){
        skyref.current.rotation.y += 0.35 * delta;
    }
})

    return (
    <mesh ref = {skyref}> 
    <primitive object = {sky.scene} position = {[0,0,-50]} scale = {[0.5,0.5,0.5]} rotation = {[0,0,0]}/>
    </mesh>  )
}

export default Sky