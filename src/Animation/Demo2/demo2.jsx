import { useEffect, useState } from 'react';
import './demo2.scss';
// import File from '../../3D-Anime-src/RealCLoth2.0_DemoScene.113/RealCLoth2.0_DemoScene.113.html';

export default function Demo2() {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleWindowMouseMove = event => {
            setCoords({
                x: event.clientX,
                y: event.clientY,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
    }, []);

    return (
        <div className="demo2-main-container">
            <p>
                Mouse positioned at:{' '}
                <b>
                    ({coords.x}, {coords.y})
                </b>
            </p>

            <div className="square-div"
            style={{
                // transform: `translate(${coords.x}%, ${coords.y}%)`
                top: `${coords.y}px`,
                left: `${coords.x}px`
            }}
            ></div>

        </div>
    )
}
