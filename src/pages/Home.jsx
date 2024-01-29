import React from 'react'
import { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader  from '../components/Loader'
import Building from '../models/Building'



{/* <div className= "absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
</div> */}


const Home = () => {

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

  const [buildingScale , buildingPosition,buildingRotation] = adjustBuildingForScreenSize();
  return (
    <section className= "w-full h-screen relative">
     <Canvas className="w-full h-screen bg-transparent"
      camera= {{near: 0.1, far: 1000, fov: 75}}>
<Suspense fallback = {<Loader/>}>
<directionalLight />
<ambientLight/>
<pointLight/>
<spotLight/>
<hemisphereLight/>
<Building
position={buildingPosition}
scale = {buildingScale}
rotation = {buildingRotation}
/>
</Suspense>
     </Canvas>
    </section>
  )
}

export default Home
