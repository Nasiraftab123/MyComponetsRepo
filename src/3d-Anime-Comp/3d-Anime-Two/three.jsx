import React from 'react';

import { angleToRadians } from './angle';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

export default function Three() {
    return (
        <>

            <PerspectiveCamera makeDefault position={[0, 1, 5]} />
            <OrbitControls />

            {/* sphere  */}
            <mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color='#ffffff' />
            </mesh>


            {/* Floor */}
            <mesh rotation={[-(angleToRadians(90)), 0, 0]}>
                <planeGeometry args={[7, 7]} />
                <meshStandardMaterial color='#e1ff00' />

            </mesh>


            {/* Ambient light */}
            <ambientLight args={['#ffffff', 1]} />

        </>
    )
}
