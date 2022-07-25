import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Visualization = () => {
  return (
    <Canvas>
      <ambientLight />
      <mesh position={[0, 0, 0]} rotation={[45, 135, 0]}>
        <OrbitControls />
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </Canvas>
  );
}

export default Visualization;
