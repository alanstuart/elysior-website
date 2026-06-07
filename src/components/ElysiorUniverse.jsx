import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Stars } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import './ElysiorUniverse.css'

const GLASS = {
  transmission: 1,
  transparent: true,
  opacity: 1,
  roughness: 0.1,
  ior: 1.5,
  thickness: 2,
  envMapIntensity: 2,
  color: '#0a1628',
  emissive: '#001a33',
  emissiveIntensity: 0.25,
  metalness: 0.1,
}

function GlassStructure() {
  const rigRef = useRef(null)

  useFrame((_, delta) => {
    if (!rigRef.current) return
    rigRef.current.rotation.y += delta * 0.18
  })

  return (
    <Float floatIntensity={3} speed={2} rotationIntensity={2}>
      <group ref={rigRef} position={[1.8, 0, -1.2]} scale={0.95}>
        <mesh>
          <torusKnotGeometry args={[1.05, 0.28, 256, 64, 2, 5]} />
          <meshPhysicalMaterial {...GLASS} />
        </mesh>
        <mesh rotation={[Math.PI / 2.4, 0.6, 0.35]}>
          <torusGeometry args={[1.55, 0.045, 64, 128]} />
          <meshPhysicalMaterial {...GLASS} />
        </mesh>
        <mesh rotation={[Math.PI / 3.2, 1.1, -0.5]}>
          <torusGeometry args={[1.85, 0.035, 64, 128]} />
          <meshPhysicalMaterial {...GLASS} />
        </mesh>
        <mesh rotation={[-0.45, 0.9, Math.PI / 4]}>
          <torusGeometry args={[2.15, 0.028, 48, 128]} />
          <meshPhysicalMaterial {...GLASS} />
        </mesh>
      </group>
    </Float>
  )
}

function UniverseScene() {
  return (
    <>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#0a0a1a', 12, 36]} />

      <Environment preset="city" />

      <ambientLight intensity={0.2} />
      <pointLight position={[6, 5, 4]} intensity={60} color="#00f3ff" distance={40} decay={2} />
      <pointLight position={[-6, -4, 5]} intensity={55} color="#7000ff" distance={40} decay={2} />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <GlassStructure />

      <EffectComposer multisampling={0}>
        <Bloom mipmapBlur intensity={1.5} luminanceThreshold={0.1} />
      </EffectComposer>
    </>
  )
}

export function ElysiorUniverse({ reducedMotion = false }) {
  if (reducedMotion) {
    return <div className="elysior-universe elysior-universe--static" aria-hidden />
  }

  return (
    <div className="elysior-universe" aria-hidden>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <UniverseScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
