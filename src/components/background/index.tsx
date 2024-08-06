import {
    Box,
    OrbitControls,
    MeshTransmissionMaterial,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import Menubar from "../menubar";

export default function Background() {
    return (
        <div className="h-screen w-screen flex-grow-1 absolute z-0 container">
            <Canvas linear>
                <pointLight castShadow position={[1, 0, 3]} intensity={2} />
                <OrbitControls />
            </Canvas>
        </div>
    );
}
