import {useRef,useEffect} from 'react'
import birdScene from '/src/parts/3d/bird.glb';
import {useAnimations, useGLTF } from '@react-three/drei';

const Bird = () => {
  const birdRef = useRef();
    const {scene, animations} = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
          actions['Take 001'].play();
      
  }, []);
  
  return (
    <mesh position = {[-5,2,1]}  scale ={[0.003, 0.003,0.003]}
    ref = {birdRef}
    > 
    <primitive object = {scene} position = {[0,0,-50]} scale = {[0.5,0.5,0.5]} rotation = {[0,0,0]}/>

    </mesh>
  )
}

export default Bird