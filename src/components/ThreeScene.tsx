import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { FC, useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import React from 'react';

const ParticleField = React.memo(({
  baseColor, accentColor, size, count, speed, spread
}: {
  baseColor: string;
  accentColor: string;
  size: number;
  count: number;
  speed: number;
  spread: number;
}) => {
  const ref = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const colorRef = useRef(baseColor);
  const scaleRef = useRef(1);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * spread;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count, spread]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scaleRef.current = Math.min(1 + (scrollY * 0.0005), 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    // Color transition
    const noise = Math.sin(time * 0.1) * 0.5 + 0.5;
    const colorValue = (Math.sin(time * 0.5) * 0.5 + 0.5) * noise;
    const newColor = new THREE.Color(baseColor).lerp(new THREE.Color(accentColor), colorValue);
    colorRef.current = '#' + newColor.getHexString();

    // Rotation
    const rotationSpeed = speed * (1 + Math.sin(time * 0.2) * 0.1);
    ref.current.rotation.x = time * rotationSpeed * (1 + Math.sin(time * 0.2) * 0.2);
    ref.current.rotation.y = time * rotationSpeed * (1 + Math.cos(time * 0.3) * 0.2);
    ref.current.rotation.z = time * rotationSpeed * 0.5 * (1 + Math.sin(time * 0.4) * 0.1);

    // Mouse influence
    const mouseInfluence = 0.1;
    const targetX = mousePosition.x * 3;
    const targetY = mousePosition.y * 3;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, mouseInfluence);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, mouseInfluence);

    // Scale
    const distance = Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2);
    const hoverScale = hovered ? 2 : 1;
    const mouseScale = 1 + distance * 0.5;
    const finalScale = scaleRef.current * hoverScale * mouseScale;
    ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, finalScale, 0.1);
    ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, finalScale, 0.1);
    ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, finalScale, 0.1);
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <PointMaterial
        transparent
        color={colorRef.current}
        size={size}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
});

const ThreeScene: FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const lights = useMemo(() => (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#004777" />
    </>
  ), []);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!mounted) return null;

  const particleCount1 = isMobile ? 100 : 300;
  const particleCount2 = isMobile ? 100 : 300;
  const particleCount3 = isMobile ? 150 : 400;

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        {lights}

        {/* Particle Fields */}
        <ParticleField 
          baseColor="#6559FF" 
          accentColor="#F45D01"
          size={0.1} 
          count={particleCount1} 
          speed={0.03}
          spread={20}
        />
        <ParticleField 
          baseColor="#F45D01" 
          accentColor="#004777"
          size={0.1} 
          count={particleCount2} 
          speed={0.04}
          spread={18}
        />
        <ParticleField 
          baseColor="#004777" 
          accentColor="#6559FF"
          size={0.1} 
          count={particleCount3} 
          speed={0.035}
          spread={22}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene; 