import React, { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import './anime-two.scss';
import Three from './three';


export default function AnimeTwo() {


    return (

        <Canvas className="anime-two-main-container">
            <Suspense fallback={null}>
                <Three />
            </Suspense>

        </Canvas>)
}



// to create dom element inside canvas need to import Html component 
//  import {Html} from '@react-three/drei';
{/* <Html>
   <div>Text</div>

</Html> */}


//Convert degrees into Radians
//2 pie = 360 deg
// if you want angle of your desire do calc i.e.
// 2pie/360 * {whatever angle you want}