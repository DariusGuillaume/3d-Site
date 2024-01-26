import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About, Contact, Home, Projects } from './pages';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Scene } from 'three';


const App = () => {
return (
    <main className="bg-slate-300/20">
        <Router>
            <Navbar/>
            <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/contact" element={<Contact/>} />
                    
                </Routes>
            </Router>
           
    
    </main>
)

const gltfLoader = new GLTFLoader();
gltfLoader.load('./assets/building/scene.gltf', (gltfScene) => {
    const root = gltf.scene;
    scene.add(root);
    animate();
});
}

export default App