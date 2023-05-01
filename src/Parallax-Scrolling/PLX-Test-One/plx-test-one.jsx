import React from 'react';
import './plx-test-one.scss';
import Plx from 'react-plx';

import Frame1 from '../../img/parallax-img/bg.png';
import Frame2 from '../../img/parallax-img/background.jpg';
import Frame3 from '../../img/parallax-img/text-img.webp';

// import frame from '../../img/parallax-img';
export default function PLXTestOne() {
    return (
        <div className="test-one-main-container">
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 700,
                        easing: "ease-in",
                        properties: [
                            {
                                startValue: 1,
                                endValue: 1.6,
                                property: "scale"
                            }
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: 100
                }}
            >
                <img style={{ width: "100%" }} src={Frame1} alt="foreground" />
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 800,
                        properties: [
                            {
                                startValue: 1,
                                endValue: 1.18,
                                property: "scale"
                            }
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%"
                }}
            >
                <img style={{ width: "100%" }} src={Frame2} alt="background" />
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 400,
                        properties: [
                            {
                                startValue: 1,
                                endValue: 0,
                                property: "opacity"
                            }
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: 0,
                    top: "26vw",
                    width: "100%"
                }}
            >
                <img
                    style={{
                        width: "30vw"
                    }}
                    src={Frame3}
                    alt="Goonies"
                />
            </Plx>
            <div
                style={{
                    position: "fixed",
                    lefft: 0,
                    top: 0,
                    zIndex: 200,
                    paddingTop: "56%",
                    height: "400vh",
                    width: "100%"
                }}
            >
                <div
                    style={{
                        background: "#000",
                        height: "100%"
                    }}
                ></div>
            </div>



        </div>
    )
}
