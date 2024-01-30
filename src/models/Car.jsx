import React from 'react'
import carScene from '/src/parts/3d/porsche.glb'
import { useGLTF } from '@react-three/drei'

const Car = ({isRotating, ...props}) => {
    const {scene, animations} = useGLTF(carScene);
  return (
    <mesh   scale ={[.13, .13,.13]} {...props}>
    <primitive object = {scene}/>
    </mesh>
  )
}

export default Car