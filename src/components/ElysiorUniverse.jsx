import { Component, Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, ScrollControls, Stars, useScroll } from '@react-three/drei'
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing'
import { useMotionValueEvent, useScroll as useFramerScroll, useVelocity } from 'framer-motion'
import { Color, MathUtils, Object3D, Quaternion, TorusKnotGeometry, Vector2, Vector3 } from 'three'
import './ElysiorUniverse.css'

class UniverseErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.warn('[ElysiorUniverse] Canvas failed; falling back to static background.', error)
  }

  render() {
    if (this.state.hasError) {
      return <div className="elysior-universe elysior-universe--static" aria-hidden />
    }
    return this.props.children
  }
}

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

const SCATTER = {
  explodeVelocity: 0.5,
  collectVelocity: 0.12,
  force: 3.4,
  dampReturn: 5.5,
  velocityDecay: 0.86,
  settleEpsilon: 0.018,
}

let coreGlassGeometry = null
let scatterPointsGeometry = null

function getGlassGeometries() {
  if (!coreGlassGeometry) {
    coreGlassGeometry = new TorusKnotGeometry(1.05, 0.28, 256, 64, 2, 5)
    scatterPointsGeometry = coreGlassGeometry.clone()
  }
  return { core: coreGlassGeometry, points: scatterPointsGeometry }
}

function useScrollVelocityRef() {
  const { scrollY, scrollYProgress } = useFramerScroll()
  const velocity = useVelocity(scrollY)
  const progressVelocity = useVelocity(scrollYProgress)
  const velocityRef = useRef(0)
  const progressVelocityRef = useRef(0)

  useMotionValueEvent(velocity, 'change', (v) => {
    velocityRef.current = v
  })

  useMotionValueEvent(progressVelocity, 'change', (v) => {
    progressVelocityRef.current = v
  })

  return { velocityRef, progressVelocityRef }
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

function DocumentScrollSync() {
  const scroll = useScroll()
  const scrollElementRef = useRef(null)

  useEffect(() => {
    scrollElementRef.current = scroll.el
  }, [scroll])

  useFrame(() => {
    const el = scrollElementRef.current
    if (!el) return

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
    const limit = el.scrollHeight - el.clientHeight
    if (limit > 0) {
      el.scrollTop = progress * limit
    }
  })

  return null
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

function EmergencyOverloadLight({ progressVelocityRef }) {
  const lightRef = useRef(null)
  const colorScratch = useMemo(() => new Color('#7000ff'), [])
  const violet = useMemo(() => new Color('#7000ff'), [])
  const red = useMemo(() => new Color('#ff0000'), [])

  useFrame((_, delta) => {
    const light = lightRef.current
    if (!light) return

    const speed = Math.abs(progressVelocityRef.current)
    const target = speed >= SCATTER.explodeVelocity ? red : violet
    colorScratch.lerp(target, 1 - Math.exp(-14 * delta))
    light.color.copy(colorScratch)
  })

  return (
    <pointLight
      ref={lightRef}
      position={[-6, -4, 5]}
      intensity={55}
      color="#7000ff"
      distance={40}
      decay={2}
    />
  )
}

function GlassStructure({ scrollVelocityRef, progressVelocityRef }) {
  const scroll = useScroll()
  const rigRef = useRef(null)
  const coreMeshRef = useRef(null)
  const pointsRef = useRef(null)
  const meshMaterialRef = useRef(null)
  const pointsMaterialRef = useRef(null)
  const originalPositionsRef = useRef(null)
  const spherePositionsRef = useRef(null)
  const scatterOffsetsRef = useRef(null)
  const scatterVelocitiesRef = useRef(null)
  const burstDirectionsRef = useRef(null)
  const lastMorphOffsetRef = useRef(-1)
  const meshOpacityRef = useRef(1)
  const pointsOpacityRef = useRef(0)
  const scatterActiveRef = useRef(false)
  const spinRef = useRef(0.18)
  const parallaxRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const { core: coreGeometry } = getGlassGeometries()
    const positions = coreGeometry.attributes.position
    const count = positions.count
    originalPositionsRef.current = new Float32Array(positions.array)
    scatterOffsetsRef.current = new Float32Array(positions.array.length)
    scatterVelocitiesRef.current = new Float32Array(positions.array.length)

    const directions = new Float32Array(positions.array.length)
    const center = new Vector3()
    coreGeometry.computeBoundingBox()
    coreGeometry.boundingBox.getCenter(center)

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3
      const ox = positions.array[i3] - center.x
      const oy = positions.array[i3 + 1] - center.y
      const oz = positions.array[i3 + 2] - center.z
      const len = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1
      const jitter = 0.35
      directions[i3] = ox / len + (Math.random() - 0.5) * jitter
      directions[i3 + 1] = oy / len + (Math.random() - 0.5) * jitter
      directions[i3 + 2] = oz / len + (Math.random() - 0.5) * jitter
      const dLen =
        Math.sqrt(
          directions[i3] * directions[i3] +
            directions[i3 + 1] * directions[i3 + 1] +
            directions[i3 + 2] * directions[i3 + 2],
        ) || 1
      directions[i3] /= dLen
      directions[i3 + 1] /= dLen
      directions[i3 + 2] /= dLen
    }

    burstDirectionsRef.current = directions

    const sphereTargets = new Float32Array(positions.array.length)
    const sphereRadius = 1.12

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3
      const ox = positions.array[i3] - center.x
      const oy = positions.array[i3 + 1] - center.y
      const oz = positions.array[i3 + 2] - center.z
      const len = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1
      sphereTargets[i3] = (ox / len) * sphereRadius + center.x
      sphereTargets[i3 + 1] = (oy / len) * sphereRadius + center.y
      sphereTargets[i3 + 2] = (oz / len) * sphereRadius + center.z
    }

    spherePositionsRef.current = sphereTargets
  }, [])

  const applyScrollMorph = (scrollOffset) => {
    const { core: coreGeometry } = getGlassGeometries()
    const original = originalPositionsRef.current
    const sphere = spherePositionsRef.current
    if (!original || !sphere) return

    const brutal = Math.sin(scrollOffset * Math.PI)
    const toSphere = MathUtils.smoothstep(0.42, 1, scrollOffset)
    const positions = coreGeometry.attributes.position.array

    for (let i = 0; i < original.length; i += 3) {
      const ox = original[i]
      const oy = original[i + 1]
      const oz = original[i + 2]

      const waveX = Math.sin(ox * 5.7 + oy * 3.2 + oz * 2.4)
      const waveY = Math.cos(oy * 6.1 + oz * 4.8 - ox * 1.9)
      const waveZ = Math.sin(oz * 4.3 + ox * 7.5 + oy * 2.1)
      const shardA = Math.sin(ox * 18 + oy * 14 + oz * 22)
      const shardB = Math.cos(ox * 11 - oz * 16 + oy * 9)

      const amp = brutal * (0.18 + scrollOffset * 0.1)
      const dx = ox + (waveX * 0.32 + shardA * 0.68) * amp * 1.45
      const dy = oy + (waveY * 0.32 + shardB * 0.68) * amp * 1.15
      const dz = oz + (waveZ * 0.32 + shardA * shardB * 0.52) * amp * 1.65

      positions[i] = dx + (sphere[i] - dx) * toSphere
      positions[i + 1] = dy + (sphere[i + 1] - dy) * toSphere
      positions[i + 2] = dz + (sphere[i + 2] - dz) * toSphere
    }

    coreGeometry.attributes.position.needsUpdate = true
    coreGeometry.computeVertexNormals()
  }

  const syncPointsFromMesh = () => {
    const { core: coreGeometry, points: pointsGeometry } = getGlassGeometries()
    const meshPositions = coreGeometry.attributes.position.array
    const pointPositions = pointsGeometry.attributes.position.array
    const offsets = scatterOffsetsRef.current
    if (!offsets) return

    for (let i = 0; i < meshPositions.length; i += 1) {
      pointPositions[i] = meshPositions[i] + offsets[i]
    }

    pointsGeometry.attributes.position.needsUpdate = true
  }

  useFrame((state, delta) => {
    const rig = rigRef.current
    if (!rig) return

    const scrollAbs = Math.abs(scrollVelocityRef.current)
    const progressSpeed = Math.abs(progressVelocityRef.current)
    const warpTarget = 0.18 + Math.min(scrollAbs * 0.00009, 7.5)
    spinRef.current = MathUtils.damp(spinRef.current, warpTarget, 3.8, delta)
    rig.rotation.y += spinRef.current * delta

    const targetX = state.pointer.x * 0.42
    const targetY = state.pointer.y * 0.28
    parallaxRef.current.x = MathUtils.damp(parallaxRef.current.x, targetX, 5.5, delta)
    parallaxRef.current.y = MathUtils.damp(parallaxRef.current.y, targetY, 5.5, delta)

    rig.position.x = 0.55 - parallaxRef.current.x * 0.55
    rig.position.y = -parallaxRef.current.y * 0.38
    rig.rotation.x = parallaxRef.current.y * 0.14
    rig.rotation.z = parallaxRef.current.x * 0.1

    const scrollOffset = scroll.offset
    const exploding = progressSpeed >= SCATTER.explodeVelocity
    const settling = progressSpeed <= SCATTER.collectVelocity

    if (!scatterActiveRef.current && Math.abs(scrollOffset - lastMorphOffsetRef.current) >= 0.00015) {
      applyScrollMorph(scrollOffset)
      lastMorphOffsetRef.current = scrollOffset
    }

    const offsets = scatterOffsetsRef.current
    const velocities = scatterVelocitiesRef.current
    const directions = burstDirectionsRef.current

    if (exploding && offsets && velocities && directions) {
      scatterActiveRef.current = true
      const impulse = progressSpeed * SCATTER.force * delta

      for (let i = 0; i < offsets.length; i += 3) {
        velocities[i] += directions[i] * impulse * (0.85 + Math.random() * 0.3)
        velocities[i + 1] += directions[i + 1] * impulse * (0.85 + Math.random() * 0.3)
        velocities[i + 2] += directions[i + 2] * impulse * (0.85 + Math.random() * 0.3)
        offsets[i] += velocities[i] * delta
        offsets[i + 1] += velocities[i + 1] * delta
        offsets[i + 2] += velocities[i + 2] * delta
      }
    } else if (scatterActiveRef.current && settling && offsets && velocities) {
      let maxOffset = 0

      for (let i = 0; i < offsets.length; i += 3) {
        offsets[i] = MathUtils.damp(offsets[i], 0, SCATTER.dampReturn, delta)
        offsets[i + 1] = MathUtils.damp(offsets[i + 1], 0, SCATTER.dampReturn, delta)
        offsets[i + 2] = MathUtils.damp(offsets[i + 2], 0, SCATTER.dampReturn, delta)
        velocities[i] *= SCATTER.velocityDecay
        velocities[i + 1] *= SCATTER.velocityDecay
        velocities[i + 2] *= SCATTER.velocityDecay
        maxOffset = Math.max(
          maxOffset,
          Math.abs(offsets[i]),
          Math.abs(offsets[i + 1]),
          Math.abs(offsets[i + 2]),
        )
      }

      if (maxOffset < SCATTER.settleEpsilon) {
        scatterActiveRef.current = false
        offsets.fill(0)
        velocities.fill(0)
        applyScrollMorph(scrollOffset)
        lastMorphOffsetRef.current = scrollOffset
      }
    }

    const meshTarget = scatterActiveRef.current ? 0 : 1
    const pointsTarget = scatterActiveRef.current ? 1 : 0
    meshOpacityRef.current = MathUtils.damp(meshOpacityRef.current, meshTarget, 10, delta)
    pointsOpacityRef.current = MathUtils.damp(pointsOpacityRef.current, pointsTarget, 10, delta)

    if (meshMaterialRef.current) {
      meshMaterialRef.current.opacity = meshOpacityRef.current
    }
    if (pointsMaterialRef.current) {
      pointsMaterialRef.current.opacity = pointsOpacityRef.current
    }

    if (scatterActiveRef.current || pointsOpacityRef.current > 0.01) {
      syncPointsFromMesh()
    }
  })

  return (
    <Float floatIntensity={3} speed={2} rotationIntensity={2}>
      <group ref={rigRef} position={[0.55, 0, -1.4]} scale={1.05}>
        <mesh ref={coreMeshRef} geometry={getGlassGeometries().core}>
          <meshPhysicalMaterial ref={meshMaterialRef} {...GLASS} />
        </mesh>
        <points ref={pointsRef} geometry={getGlassGeometries().points} frustumCulled={false}>
          <pointsMaterial
            ref={pointsMaterialRef}
            color="#00f3ff"
            size={0.05}
            transparent
            opacity={0}
            depthWrite={false}
            toneMapped={false}
            sizeAttenuation
          />
        </points>
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
  const aberrationOffset = useMemo(() => new Vector2(0, 0), [])
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
    aberrationOffset.set(glitchIntensity.current, glitchIntensity.current)
  })

  return (
    <EffectComposer multisampling={0}>
      <Bloom mipmapBlur intensity={1.5} luminanceThreshold={0.1} />
      <ChromaticAberration
        offset={aberrationOffset}
        radialModulation={false}
        modulationOffset={0}
      />
    </EffectComposer>
  )
}

function UniverseScene({ scrollVelocityRef, progressVelocityRef, isMobile }) {
  const shootingCount = isMobile ? 4 : 12

  return (
    <>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#0a0a1a', 12, 36]} />

      <Environment preset="city" />

      <ambientLight intensity={0.2} />
      <pointLight position={[6, 5, 4]} intensity={60} color="#00f3ff" distance={40} decay={2} />
      <EmergencyOverloadLight progressVelocityRef={progressVelocityRef} />

      <ScrollLinkedStars scrollVelocityRef={scrollVelocityRef} />
      <ShootingStars count={shootingCount} />
      <GlassStructure
        scrollVelocityRef={scrollVelocityRef}
        progressVelocityRef={progressVelocityRef}
      />

      <PostProcessingEffects />
    </>
  )
}

function UniverseCanvas({ scrollVelocityRef, progressVelocityRef, isMobile }) {
  const dpr = useMemo(() => (isMobile ? [1, 1.5] : [1, 2]), [isMobile])

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <ScrollControls
          pages={1}
          damping={0.12}
          style={{ pointerEvents: 'none', visibility: 'hidden', overflow: 'hidden' }}
        >
          <DocumentScrollSync />
          <UniverseScene
            scrollVelocityRef={scrollVelocityRef}
            progressVelocityRef={progressVelocityRef}
            isMobile={isMobile}
          />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

export function ElysiorUniverse({ reducedMotion = false }) {
  const { velocityRef, progressVelocityRef } = useScrollVelocityRef()
  const isMobile = useIsMobileViewport()

  if (reducedMotion) {
    return <div className="elysior-universe elysior-universe--static" aria-hidden />
  }

  return (
    <div className="elysior-universe" aria-hidden>
      <UniverseErrorBoundary>
        <UniverseCanvas
          scrollVelocityRef={velocityRef}
          progressVelocityRef={progressVelocityRef}
          isMobile={isMobile}
        />
      </UniverseErrorBoundary>
    </div>
  )
}
