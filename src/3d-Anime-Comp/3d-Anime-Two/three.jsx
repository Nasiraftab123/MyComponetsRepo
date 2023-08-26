import React, { useEffect, useState, useRef } from 'react';

import { angleToRadians } from './angle';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';

import img from '../../img/Mgroup527.png';

export default function Three() {
    const [isClicked, setIsClicked] = useState(true)
    const [isClicked1, setIsClicked1] = useState(true)


    const orbitContolRef = useRef(null);
    useFrame((state) => {
        // console.log(state.mouse)

        if (!!orbitContolRef.current) {
            const { x, y } = state.mouse;
            orbitContolRef.current.setAzimuthalAngle(-x * angleToRadians(45))
            orbitContolRef.current.setPolarAngle((y + 0.5) * angleToRadians(90))
        }

    })

    useEffect(() => {
        if (!!orbitContolRef.current) {
            // console.log(orbitContolRef.current)
        }

    }, [orbitContolRef.current])

    return (
        <>

            <PerspectiveCamera makeDefault position={[0, 1, 5]} />
            <OrbitControls ref={orbitContolRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />

            {/* sphere  */}
            <mesh position={[0, 0.5, 0]} castShadow
                onClick={() => { setIsClicked(!isClicked) }}
            >
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial
                    color={isClicked ? '#e1ff00' : 'pink'}
                    metalness={0.6}
                    roughness={0.2}
                />
            </mesh>
            <mesh position={[1, 0.2, -2]} castShadow
                onClick={() => { setIsClicked1(!isClicked1) }}
            >
                <sphereGeometry args={[0.2, 32, 32]} files={['']}/>
                <meshStandardMaterial
                    color={isClicked1 ? '#ffffff' : '#7091F5'}
                    // metalness={0.6}
                    // roughness={0.2}
                />
            </mesh>


            {/* Floor */}
            <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                <planeGeometry args={[7, 7]} />
                <meshStandardMaterial color='#7091F5' />

            </mesh>


            {/* Ambient light */}
            <ambientLight args={['#ffffff', 0.25]} />

            {/* Directional Light */}
            <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />


            {/* Environment */}

            <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial color='#7091F5' side={THREE.BackSide} />
                </mesh>
            </Environment>

        </>
    )
}
