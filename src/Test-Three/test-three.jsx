import React, { useState, useEffect, useRef } from "react";
import "./test-three.scss";

export default function TestThree() {

    const [x, setX] = useState(350)
    // const currentItem = useRef(null);

    const [count, setCount] = useState(2)

    function handleNext() {
        x === -350 ? setX(350) : setX(x - 140)

        count === 7 ? setCount(2) : setCount(count + 1)

    }
    function handlePrev() {
        x === 350 ? setX(-350) : setX(x + 140)

        count === 2 ? setCount(7) : setCount(count - 1)
    }

    // setX(200)

    return (
        <>
            <div className="test-three-main-container" >
                <p>{x}</p>
                {/* <p>{count}</p> */}

                <div className="btn-div">
                    <div className="prev" onClick={handlePrev}>Prev</div>
                    <div className="next" onClick={handleNext}>Next</div>

                </div>
                <div className="slider">
                    {
                        [...Array(10)].map((_, i) => {
                            return (
                                <div className="slides" key={i}
                                    style={{
                                        transform: i === count ? `translate(${x}%) scale(1.4)` :
                                            i === count - 1 ? `translate(${x}%) scale(1.2)` :
                                                i === count + 1 ? `translate(${x}%) scale(1.2)` : `translate(${x}%)`,
                                        margin: i === count ? '0 3.5% 0 3.5%' : " 0 2% 0 2%",


                                    }}
                                >
                                    {i}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}