import React, { useRef, useState, useEffect } from 'react';
import './react-ripple.scss';
// import Ripples from 'react-ripples';
import Ripples from 'react-ripples';
// import './App.css'; // You can use your own CSS file for stylingimport './react-ripple.scss';

export default function ReactRipple(props) {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


    useEffect(() => {
        const handleMouseMove = (e) => {
            const { offsetX, offsetY } = e;
            setMousePosition({ x: offsetX, y: offsetY });
            console.log(e)

        };

        const containerEl = containerRef.current;
        containerEl.addEventListener('mousemove', handleMouseMove);

        return () => containerEl.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='react-ripple-main-container' ref={containerRef}>

            <div
                style={{
                    display: 'inline-flex',
                    borderRadius: 25,
                    overflow: 'hidden',
                }}
            >
                {/* <Ripples color={'yellow'}>
                    <button type="button" className="btn btn-primary">
                        Primary
                    </button>
                </Ripples> */}

                <div
                    style={{
                        position: 'absolute',
                        top: mousePosition.y,
                        left: mousePosition.x,
                        // width: 0,
                        // height: 0,
                        backgroundColor: 'red',
                        width: '100px',
                        height: '100px'
                    }}
                ></div>
            </div>

        </div>
    )

}
