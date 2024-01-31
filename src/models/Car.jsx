import React, { useRef } from 'react'
import carScene from '/src/parts/3d/porsche.glb'
import { useGLTF } from '@react-three/drei'
import { useAnimations } from '@react-three/drei'


const Car = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(carScene);
    const { actions } = useAnimations(animations, scene);
  return (
    <mesh   scale ={[.13, .13,.13]} {...props} ref = {ref}>
    <primitive object = {scene}/>
    </mesh>
  )
}

export default Car