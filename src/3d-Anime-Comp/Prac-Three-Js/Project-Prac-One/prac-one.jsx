import React, { Suspense } from 'react';
import './prac-one.scss';
import { Canvas } from 'react-three-fiber';
import Three from './Three';

export default function PracOne() {
    return (
        <Canvas className="prac-one-main-container" shadows>

            <Suspense fallback={null}>
                <Three />

            </Suspense>

        </Canvas>
    )
}
