import React, { useState, useEffect, useRef } from 'react';
import "./test-one.scss";


export default function TestOne() {

    const divRef = useRef(null);
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                rootMargin: "-90px"
            }
        );

        observer.observe(divRef.current);

        return () => observer.disconnect();
    }, []);


    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 setIsVisible(true);
    //                 setIsVisible(true)
    //                 // console.log(entry.boundingClientRect)
    //                 // observer.disconnect();
    //             } else {
    //                 setIsVisible(false);
    //                 setIsVisible(false)
    //                 // observer.disconnect();
    //             }
    //         });
    //     });

    //     observer.observe(divRef.current);
    //     observer.observe(footerRef.current)

    //     return () => observer.disconnect();
    // }, []);

    return (<>
        <div className="One">
            <div className="intoView-div">{isVisible.toString()}</div>
            <div className="footer-intoView-div">{footerVisible.toString()}</div>

            <div className="div2"></div>
            <div ref={divRef} className={`div1 ${isVisible ? 'visible' : ''}`}>
                <h1>Div</h1>
            </div>
            <div className="div3"></div>
            <div ref={footerRef} className="footer-div"><h1>Footer</h1></div>


        </div>

    </>);
}