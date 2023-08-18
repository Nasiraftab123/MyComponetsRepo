import React, { useRef, useEffect, useState } from 'react';
import Stickyroll from "@stickyroll/react/stickyroll";

import './example-three.scss';
// import video from '../../video-src/PitchCatalystHomePage.mp4'
const RoadMap = "https://rentweb.s3.ap-south-1.amazonaws.com/videos/Road+Map2.mp4";


export default function ExampleThree({ src, ...props }) {
    const [scrollPos, setScrollPos] = useState(0);


    var vid = document.getElementById("myVideo");


    useEffect(() => {
        const handleScroll = () => {
            // const currentScrollPos = window.pageYOffset;
            vid.currentTime = window.pageYOffset * 0.01;

            // Update the current scroll position
            setScrollPos(window.pageYOffset * 0.008);
            // alert('fd')
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);



    return (
        <Stickyroll
            pages={4}
            factor={1}

        >
            <div className="example-three-main-container">
                <video id='myVideo'
                    src={RoadMap}
                    controls
                    currentTime={scrollPos}
                    style={{
                        width: '100%',
                        height: '50vh'
                    }} />
                {/* <video id="myVideo" width="320" height="176" currentTime={scrollPos}>
                    <source src='../../video-src/PitchCatalystHomePage.mp4' type="video/mp4" />
                </video> */}
                <p>{scrollPos}</p>

            </div>
        </Stickyroll>
    )
}



