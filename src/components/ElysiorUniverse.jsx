import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Stars } from '@react-three/drei'
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing'
import { useMotionValueEvent, useScroll, useVelocity } from 'framer-motion'
import { MathUtils, Object3D, Quaternion, Vector3 } from 'three'
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

const SHOOT_DIR = new Vector3(-1, -0.55, -0.25).normalize()
const SHOOT_QUAT = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), SHOOT_DIR)
const _dummy = new Object3D()

function useScrollVelocityRef() {
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const velocityRef = useRef(0)

  useMotionValueEvent(velocity, 'change', (v) => {
    velocityRef.current = v
  })

  return velocityRef
}

function useIsMobileViewport() {
  const [mobile, setMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const sync = () => setMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return mobile
}

function createShootingStarState() {
  return {
    active: false,
    cooldown: Math.random() * 3.5,
    x: 0,
    y: 0,
    z: 0,
    speed: 16 + Math.random() * 20,
  }
}

function respawnShootingStar(star) {
  star.x = 10 + Math.random() * 14
  star.y = 8 + Math.random() * 10
  star.z = -18 + Math.random() * 36
  star.speed = 16 + Math.random() * 22
  star.active = true
  star.cooldown = 0
}

function ShootingStars({ count }) {
  const meshRef = useRef(null)
  const starsRef = useRef(Array.from({ length: count }, () => createShootingStarState()))

  useEffect(() => {
    starsRef.current = Array.from({ length: count }, () => createShootingStarState())
  }, [count])

  useFrame((_, delta) => {
    const mesh = meshRef.current
    const stars = starsRef.current
    if (!mesh) return

    const dt = Math.min(delta, 0.05)

    for (let i = 0; i < stars.length; i += 1) {
      const star = stars[i]

      if (!star.active) {
        star.cooldown -= dt
        if (star.cooldown <= 0 && Math.random() < 0.035) {
          respawnShootingStar(star)
        }
        _dummy.position.set(star.x, star.y, star.z)
        _dummy.quaternion.copy(SHOOT_QUAT)
        _dummy.scale.set(0.001, 0.001, 0.001)
        _dummy.updateMatrix()
        mesh.setMatrixAt(i, _dummy.matrix)
        continue
      }

      star.x += SHOOT_DIR.x * star.speed * dt
      star.y += SHOOT_DIR.y * star.speed * dt
      star.z += SHOOT_DIR.z * star.speed * dt

      if (star.y < -14 || star.x < -16) {
        star.active = false
        star.cooldown = 1.2 + Math.random() * 4.5
      }

      _dummy.position.set(star.x, star.y, star.z)
      _dummy.quaternion.copy(SHOOT_QUAT)
      _dummy.scale.set(1, 1.6 + star.speed * 0.025, 1)
      _dummy.updateMatrix()
      mesh.setMatrixAt(i, _dummy.matrix)
    }

    mesh.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]} frustumCulled={false}>
      <cylinderGeometry args={[0.006, 0.014, 2.8, 5]} />
      <meshStandardMaterial
        color="#00f3ff"
        emissive="#00f3ff"
        emissiveIntensity={4}
        transparent
        opacity={0.92}
        toneMapped={false}
      />
    </instancedMesh>
  )
}

function ScrollLinkedStars({ scrollVelocityRef }) {
  const groupRef = useRef(null)
  const warpRef = useRef(1)

  useFrame((_, delta) => {
    const group = groupRef.current
    if (!group) return

    const scrollAbs = Math.abs(scrollVelocityRef.current)
    const warpTarget = 1 + Math.min(scrollAbs * 0.00012, 14)
    warpRef.current = MathUtils.damp(warpRef.current, warpTarget, 3.2, delta)

    group.rotation.z += delta * warpRef.current * 0.045
    group.position.z = MathUtils.damp(group.position.z, (warpRef.current - 1) * 0.35, 4, delta)
  })

  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  )
}

function GlassStructure({ scrollVelocityRef }) {
  const rigRef = useRef(null)
  const spinRef = useRef(0.18)
  const parallaxRef = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    const rig = rigRef.current
    if (!rig) return

    const scrollAbs = Math.abs(scrollVelocityRef.current)
    const warpTarget = 0.18 + Math.min(scrollAbs * 0.00009, 7.5)
    spinRef.current = MathUtils.damp(spinRef.current, warpTarget, 3.8, delta)
    rig.rotation.y += spinRef.current * delta

    const targetX = state.pointer.x * 0.42
    const targetY = state.pointer.y * 0.28
    parallaxRef.current.x = MathUtils.damp(parallaxRef.current.x, targetX, 5.5, delta)
    parallaxRef.current.y = MathUtils.damp(parallaxRef.current.y, targetY, 5.5, delta)

    rig.position.x = 1.8 - parallaxRef.current.x * 0.55
    rig.position.y = -parallaxRef.current.y * 0.38
    rig.rotation.x = parallaxRef.current.y * 0.14
    rig.rotation.z = parallaxRef.current.x * 0.1
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

function PostProcessingEffects() {
  const aberrationRef = useRef(null)
  const glitchIntensity = useRef(0)

  useEffect(() => {
    const onMouseDown = () => {
      glitchIntensity.current = 0.04
    }
    window.addEventListener('mousedown', onMouseDown)
    return () => window.removeEventListener('mousedown', onMouseDown)
  }, [])

  useFrame((_, delta) => {
    glitchIntensity.current = MathUtils.damp(glitchIntensity.current, 0, 9, delta)
    const effect = aberrationRef.current
    if (effect?.offset) {
      effect.offset.set(glitchIntensity.current, glitchIntensity.current)
    }
  })

  return (
    <EffectComposer multisampling={0}>
      <Bloom mipmapBlur intensity={1.5} luminanceThreshold={0.1} />
      <ChromaticAberration
        ref={aberrationRef}
        offset={[0, 0]}
        radialModulation={false}
        modulationOffset={0}
      />
    </EffectComposer>
  )
}

function UniverseScene({ scrollVelocityRef, isMobile }) {
  const shootingCount = isMobile ? 4 : 12

  return (
    <>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#0a0a1a', 12, 36]} />

      <Environment preset="city" />

      <ambientLight intensity={0.2} />
      <pointLight position={[6, 5, 4]} intensity={60} color="#00f3ff" distance={40} decay={2} />
      <pointLight position={[-6, -4, 5]} intensity={55} color="#7000ff" distance={40} decay={2} />

      <ScrollLinkedStars scrollVelocityRef={scrollVelocityRef} />
      <ShootingStars count={shootingCount} />
      <GlassStructure scrollVelocityRef={scrollVelocityRef} />

      <PostProcessingEffects />
    </>
  )
}

function UniverseCanvas({ scrollVelocityRef, isMobile }) {
  const dpr = useMemo(() => (isMobile ? [1, 1.5] : [1, 2]), [isMobile])

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <UniverseScene scrollVelocityRef={scrollVelocityRef} isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}

export function ElysiorUniverse({ reducedMotion = false }) {
  const scrollVelocityRef = useScrollVelocityRef()
  const isMobile = useIsMobileViewport()

  if (reducedMotion) {
    return <div className="elysior-universe elysior-universe--static" aria-hidden />
  }

  return (
    <div className="elysior-universe" aria-hidden>
      <UniverseCanvas scrollVelocityRef={scrollVelocityRef} isMobile={isMobile} />
    </div>
  )
}
