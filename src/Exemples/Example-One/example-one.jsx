import React, { useState, useEffect, useRef } from 'react';
import './example-one.scss';
import { gsap } from 'gsap';
export default function ExampleOne() {

    const [isHovering, setIsHovering] = useState(false);
    const elementRef = useRef(null);

    // useEffect(() => {
    //     if (isHovering) {
    //         gsap.to('.gsap-comp', {
    //             x: 500,
    //             y: '-300',
    //             duration: 2,
    //             opacity: 0,
    //             rotation: '180',
    //             // ease: 'bounce'
    //             ease: 'slow(0.2, 1, true)'
    //         })
    //     }
    // }, [elementRef.current])

    let tween

    useEffect(() => {


        //  tween = gsap.to('.gsap-comp', {
        //     x: 500,
        //     y: '-300',
        //     duration: 2,
        //     // opacity: 0,
        //     rotation: '180',
        //     // ease: 'bounce'
        //     ease: 'slow(0.2, 1, true)'
        // })


        // tween.pause();
        if (isHovering) {
            const tween = gsap.to('.gsap-comp', {
                x: 500,
                y: '-300',
                duration: 2,
                opacity: 0,
                rotation: '180',
                // ease: 'bounce'
                ease: 'slow(0.2, 1, true)'
            })

        }
    }, [elementRef.current])
    function handleMouseEvent(e) {
        setIsHovering(e.type === 'mouseover');
        // tween.reverse();
        // tween.play();

    }

    return (
        <div className="example-one-main-container">
            <div className="bg-color-div"></div>

            <div className="circle-one circle"></div>
            <div className="circle-two circle"></div>
            <div className="circle-three circle"></div>

            <div className="gradient-div"></div>

            <div className="btn-div">Neon Button</div>

            <div className="gsap-comp" ref={elementRef} onMouseOver={handleMouseEvent} >gsap example</div>




        </div>)
}
