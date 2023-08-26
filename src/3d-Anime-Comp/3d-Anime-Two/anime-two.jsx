import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import './anime-two.scss';
import Three from './three';


export default function AnimeTwo() {


    return (

        <Canvas className="anime-two-main-container" shadows>
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



// Azimuthal : when we measure angle in left or right direction we use polar angle. Azimuthal angle is how much angle you cover when you move the camera along the x-axis.

// Polar : when we measure angle in up or down direction we use polar angle. Polar angle is how much angle you cover when you move the camera along the y-axis. More you come down will increase the polar angle.


//During Consoleloging
// enableDamping set to true [neccessory] when you darg and leave it will not stop all of sudden.
// enablePan set to true [neccessory] you can press shift and grag the frame left to right or up ot down likewise. it is basically changes the position property of perspective camera.
//getter and setter of azimuthaland polar angle found in console.log.