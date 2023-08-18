import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './anime-one.scss';




export default function AnimeOne() {

    // const canvasRef = useRef(null);

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    
    //     // Create a three.js scene, renderer, and camera here
    //     // and use the canvas element as the renderer's DOM element.
    
    //     return () => {
    //       // Clean up the scene, renderer, and camera when the component unmounts
    //     };
    //   }, []);

    return (
        <div className="anime-one-main-container">
 <iframe
        title="Spline Scene"
        src="https://my.spline.design/untitled-40fea87e43681d174f35ab1c7aaeef01/"
        width="100%"
        height="600px"
        frameBorder="0"
      />

        </div>
    )
}
