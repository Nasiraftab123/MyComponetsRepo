import React, {useRef } from 'react';


import Spline from '@splinetool/react-spline';

import './example-two.scss';

export default function ExampleTwo() {

   

    // -----------------------------------------TWO---------------------
    const objectToAnimate = useRef()
    function onLoad(spline) {
        const obj = spline.findObjectByName('Cube');
        // save the object in a ref for later use
        objectToAnimate.current = obj;
    }

    function triggerAnimation() {
        objectToAnimate.current.emitEvent('mouseHover', 'Cube');
    }

    // convas.style.width='100px'

    const styling = {
        width: '60%',
        height: '80%',
        // backgroundColor: 'yellow'

    }

    // --------------------------------------------------------------------


    return (
        <div className="example-two-main-container">

            {/* ------------------------------------ONE----------------------------------- */}
            <div className="spline-element-div">

                <Spline
                    className='spline-element'
                    style={styling}
                    // scene="https://my.spline.design/applewatchcopy-794877a5ff45446678a93708903d60f7/scene.splinecode"
                    scene="https://my.spline.design/untitled-40fea87e43681d174f35ab1c7aaeef01/scene.splinecode"

                />
            </div>

            {/* -------------------------------------------------------------------------- */}



            {/* <div className="spline-element-div">

                <Spline
                    scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                    onLoad={onLoad}
                    style={styling}

                />
                <button type="button" onClick={triggerAnimation}>
                    Trigger Spline Animation
                </button>
            </div> */}

        </div>)
}



