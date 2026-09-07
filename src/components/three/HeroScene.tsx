import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Icosahedron, Points, PointMaterial, TorusKnot } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function useMouse() {
  const { pointer } = useThree();
  return pointer;
}

function Brain() {
  const group = useRef<THREE.Group>(null);
  const pointer = useMouse();

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.15;
    g.rotation.x += (pointer.y * 0.35 - g.rotation.x) * 0.05;
    g.position.x += (pointer.x * 0.4 - g.position.x) * 0.05;
  });

  const nodes = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.5, 1);
    const pos = geo.attributes["position"] as THREE.BufferAttribute;
    const set = new Map<string, THREE.Vector3>();
    for (let i = 0; i < pos.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(pos, i);
      set.set(v.toArray().map((n) => n.toFixed(2)).join(","), v);
    }
    geo.dispose();
    return [...set.values()];
  }, []);

  return (
    <group ref={group}>
      <Icosahedron args={[1.5, 1]}>
        <meshBasicMaterial wireframe color="#39d8ff" transparent opacity={0.35} />
      </Icosahedron>
      <Icosahedron args={[1.05, 2]}>
        <meshStandardMaterial
          color="#4a5bff"
          emissive="#7c3aed"
          emissiveIntensity={0.7}
          roughness={0.25}
          metalness={0.8}
          transparent
          opacity={0.55}
        />
      </Icosahedron>
      {nodes.map((v, i) => (
        <mesh key={i} position={v}>
          <sphereGeometry args={[0.035, 10, 10]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#b388ff" : "#7df9ff"} />
        </mesh>
      ))}
    </group>
  );
}

function Particles({ count = 700 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} frustumCulled>
      <PointMaterial size={0.035} sizeAttenuation transparent depthWrite={false} color="#68e8ff" opacity={0.7} />
    </Points>
  );
}

function Satellites() {
  return (
    <>
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.4}>
        <TorusKnot args={[0.32, 0.09, 90, 14]} position={[2.6, 1.1, -1]}>
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.6} metalness={0.9} roughness={0.2} />
        </TorusKnot>
      </Float>
      <Float speed={1.1} rotationIntensity={1} floatIntensity={1.2}>
        <mesh position={[-2.7, -1.2, -0.5]} rotation={[0.5, 0.4, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#22d3ee" emissive="#0ea5e9" emissiveIntensity={0.5} metalness={0.8} roughness={0.25} wireframe />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.6}>
        <mesh position={[2.2, -1.5, 0.6]}>
          <octahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.55} metalness={0.85} roughness={0.2} />
        </mesh>
      </Float>
    </>
  );
}

function Rig() {
  const pointer = useMouse();
  useFrame((state, delta) => {
    state.camera.position.x += (pointer.x * 0.7 - state.camera.position.x) * Math.min(1, delta * 2);
    state.camera.position.y += (pointer.y * 0.4 - state.camera.position.y) * Math.min(1, delta * 2);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 5]} intensity={40} color="#4a5bff" />
      <pointLight position={[-4, -2, 3]} intensity={30} color="#22d3ee" />
      <Brain />
      <Satellites />
      <Particles />
      <Rig />
    </Canvas>
  );
}
