import React from 'react';
import './sticky-roll.scss';
import Stickyroll from "@stickyroll/react/stickyroll";
import { CSS_VARS } from "@stickyroll/react/constants";


export default function StickyRoll() {
    return (
        <div className="sticky-roll-main-container">
            {/* <Stickyroll pages={1} factor={1}>
                Scroll here.
            </Stickyroll> */}

            {/*--------------------------------------------------------  */}
            {/* <div className="last-page"
                style={{
                    width: '100%',
                    height: '500px',
                    backgroundColor: '#555',
                    color: 'yellow'
                }}
            >
                HELLO

            </div> */}

            {/* <Stickyroll pages={1} factor={1}>
                <div
                    style={{
                        height: 10,
                        background: "red",
                        transform: `scaleX(var(${CSS_VARS.progress}, 0))`,
                    }}
                />
            </Stickyroll> */}
            {/* <div className="last-page"
                style={{
                    width: '100%',
                    height: '500px',
                    backgroundColor: '#555',
                    color: '#fff'
                }}
            >HELLO

            </div> */}
            {/* ---------------------------------------------------------------------------- */}
            <Stickyroll
                pages={1}
                onStart={() => {
                    console.log("onStart");
                }}
                onPage={(page, index) => {
                    console.log("onPage", page, index);
                }}
                onProgress={(progress, page, index) => {
                    console.log("onProgress", progress, page, index);
                }}
                onEnd={() => {
                    console.log("onEnd");
                }}
            >
                Scroll here.
            </Stickyroll>
        </div>
    )

}
