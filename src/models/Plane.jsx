import React, { useEffect, useRef } from 'react'
import planeScene from '/src/parts/3d/plane.glb'
import { useGLTF } from '@react-three/drei'
import { useAnimations } from '@react-three/drei'


const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(planeScene);
    const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if(isRotating){
      actions['Take 001'].play();
    }
    else{
      actions['Take 001'].stop();
    }
  },[actions, isRotating])


  return (
    <mesh   scale ={[.13, .13,.13]} {...props} ref = {ref}>
    <primitive object = {scene}/>
    </mesh>
  )
}

export default Plane