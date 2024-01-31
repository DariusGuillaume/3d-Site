import React from 'react'
import { useState,Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader  from '../components/Loader'
import Building from '../models/Building'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Car from '../models/Car'



{/* <div className= "absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
</div> */}


const Home = () => {
  const[isRotating, setIsRotating] = React.useState(false);

  const adjustBuildingForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
      
    }
    else{
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  }


  const adjustCarForScreenSize = () => {
    let screenScale, screenPosition;
     if(window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5];
      screenPosition  = [0, -1.5, 0]; }
    else{
      screenScale = [3, 3, 3];
      screenPosition  = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  }

  const [buildingScale , buildingPosition,buildingRotation] = adjustBuildingForScreenSize();
  const [carScale , carPosition] = adjustCarForScreenSize();



  return (
    <section className= "w-full h-screen relative">
    <Canvas 
    className= {`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}

     camera= {{near: 0.1, far: 1000}}>

<Suspense fallback = {<Loader/>}>
<directionalLight position = {[1,1,5]} intensity = {2} />
<ambientLight intensity = {0.5}/>
<hemisphereLight skyColor = "b1e1ff" groundColor={"#000000"} intensity={1}/>

<Bird/>
<Sky/>

<Building
position={buildingPosition}
scale = {buildingScale}
rotation = {buildingRotation}
isRotating = {isRotating}
setIsRotating = {setIsRotating}
/>

<Car 
rotation = {[0,20,0]}
isRotating= {isRotating}
carScale = {carScale}
carPosition = {carPosition}
/>

</Suspense>
     </Canvas>
    </section>
  )
}

export default Home
