//PracOne
import React, { useRef } from 'react';
import { angleToRadians } from '../../3d-Anime-Two/angle';
import { useFrame } from 'react-three-fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import * as THREE  from 'three';

export default function Three() {

    const orbitControlRef = useRef(null);

    useFrame((state) => {
        const { x, y } = state.mouse;
        if (!!orbitControlRef.current) {
            orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlRef.current.setPolarAngle((y + 0.5) * angleToRadians(80))
        }
    })




    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 5]} />
            <OrbitControls ref={orbitControlRef} maxPolarAngle={angleToRadians(80)} minPolarAngle={angleToRadians(60)} />

            <mesh position={[0, 0.5, 0]} castShadow>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color='gray' metalness={0.5} roughness={0.2} />
            </mesh>

            <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
                <planeGeometry args={[7, 7]} />
                <meshStandardMaterial color='#4D3C77' />
            </mesh>

            <ambientLight args={['#ffffff', 1]} />
            <spotLight args={['#ffffff', 1.5, 8, angleToRadians(45), 0.2]} position={[-3, 1, 0]} castShadow />

            <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial color='#ffffff' side={THREE.BackSide} />
                </mesh>
            </Environment>

        </>
    )
}
