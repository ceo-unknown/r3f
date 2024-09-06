import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const MyCanvas = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color={"tomato"} />
      </mesh>
    </Canvas>
  );
};

export default MyCanvas;
