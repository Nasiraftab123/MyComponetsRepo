import React, { useEffect, useRef } from 'react';
import './react-tilt.scss';
import { Tilt } from 'react-tilt';
import VanillaTilt from "vanilla-tilt";







export default function ReactTilt() {
    function VTilt(props) {
        const { options, ...rest } = props;
        const tilt = useRef(null);

        useEffect(() => {
            VanillaTilt.init(tilt.current, options);
        }, [options]);

        return <div ref={tilt} {...rest} />;
    }


    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }


    /* 
  {
    reverse:           false,  // reverse the tilt direction
    max:               35,     // max tilt rotation (degrees)
    perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:             300,    // Speed of the enter/exit transition
    transition:        true,   // Set a transition on enter/exit.
    axis:              null,   // What axis should be disabled. Can be X or Y.
    reset:             true,   // If the tilt effect has to be reset on exit.
    easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:             false,   // if it should have a "glare" effect
    "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                               // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
} */

    const options = {
        scale: 1.1,
        speed: 1000,
        max: 15,
        reverse: true

    };

    return (
        <div className="react-tilt-main-container">
            <Tilt className='tilt-comp' options={{ reverse: "true"}} style={{ height: 250, width: 250 }} >
            </Tilt>
            <VTilt className='vanilla-tilt-comp' options={options} style={{ height: 250, width: 250 }} data-titl-scale='13'>
                <div>
                    You can put whatever you want inside this
                </div>
            </VTilt>


            <div className="btn-anime-div">
                <div className="btn-div">
                    <div className="anime-strip"></div>

                </div>
            </div>


        </div>
    )
}

//Tilt Element vanilla-tilt
// Creating a parallax effect
// Add transform-style: preserve-3d to your tilt element.
// Add transform: perspective(1000px); to your tilt element. (1000px is default perspective, but can be changed)
// Add a transform: translateZ(20px) to your inner elements that have to pop out.