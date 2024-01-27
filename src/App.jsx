import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About, Contact, Home, Projects } from './pages';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from './lib/SceneInit';

function App() {
    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
        
        const glftLoader = new GLTFLoader();
        glftLoader.load('./src/pages/assets/building/scene.gltf', (gltfScene) => {
            test.scene.add(gltfScene.scene);
        });
    }, []);

    return (
        <div className="container">
            <Router>
                <Navbar />
                <main className="bg-slate-300/20">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </Router>
            {window.location.pathname === '/' && <canvas id="myThreeJsCanvas" />} {/* Render canvas only on the main page */}
        </div>
    );
}

export default App;
