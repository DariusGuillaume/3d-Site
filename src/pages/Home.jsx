import React, {useState,useEffect} from 'react'
import {Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader  from '../components/Loader'
import Building from '../models/Building'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'
import Plane from '../models/Plane'






const Home = () => {
  const[isRotating, setIsRotating] = React.useState(false);
  const[currentStage, setCurrentStage] = useState(1); 
    const [isLoading, setIsLoading] = useState(true); 




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


  const adjustPlaneForScreenSize = () => {
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
  const [planeScale , planePosition] = adjustPlaneForScreenSize();

const handleOrientationChange = () => {
    // Update currentStage based on orientation change logic
    setCurrentStage(/* Update currentStage based on orientation */);
  };

  // Effect to add orientation change event listener
  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <section className= "w-full h-screen relative">
    <div className= "absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage = {currentStage}/>}
</div> 


{isLoading ? null : (
  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-blue-500 p-2 rounded z-10">
    Click and Drag
  </div>
)}
 
    <Canvas 
    className= {`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}

     camera= {{near: .4, far: 1000}}>

<Suspense fallback = {<Loader/>}>
<directionalLight position = {[1,1,5]} intensity = {2} />
<ambientLight intensity = {0.5}/>
<hemisphereLight skyColor = "b1e1ff" groundColor={"#000000"} intensity={1}/>

<Bird/>
<Sky isRotating = {isRotating}/>

<Building
position={buildingPosition}
scale = {buildingScale}
rotation = {buildingRotation}
setCurrentStage={setCurrentStage}
isRotating = {isRotating}
setIsRotating = {setIsRotating}
/>

<Plane 
isRotating= {isRotating}
planeScale = {planeScale}
planePosition = {planePosition}
rotation = {[0,20,0]}
/>

</Suspense>
     </Canvas>
    </section>
  );
};

export default Home
