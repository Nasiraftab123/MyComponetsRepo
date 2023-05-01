import { useEffect, useState } from 'react';
import './mouse-dragging.scss';

export default function MouseDragging() {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [distance, setDistance] = useState(0)

    const[mouseMovement, setMouseMovement]= useState('')

    const [prevX, setPrev] = useState(null);

    function handleMouseDown() {
        setIsMouseDown(true)
    }
    function handleMouseUp() {
        setIsMouseDown(false)
    }

    useEffect(() => {
        function handleMouseMove(e) {
            // handle mouse move event
            const currX = e.clientX;

            if (prevX !== null) {
                if (currX > prevX) {
                    setMouseMovement('Mouse moving left');
                } else if (currX < prevX) {
                    setMouseMovement('Mouse moving right');
                }
            }

            setPrev(currX);
            // setDistance(e.clientX)
        }

        if (isMouseDown) {
            document.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMouseDown]);
    return (
        <div className="mouse-dragging-main-container">
            <div className="demo-div"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                style={{
                    cursor: isMouseDown && 'grabbing'
                }}

            >{mouseMovement}</div>
        </div>
    )
}
