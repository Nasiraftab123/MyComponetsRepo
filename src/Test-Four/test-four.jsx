import React, { useState, useEffect, useRef } from 'react';
import "./test-four.scss";

export default function TestFour() {

    const [details, setDetails] = useState()
    const divOneRef = useRef(null);
    const divTwoRef = useRef(null);
    const divThreeRef = useRef(null);
    const divFourRef = useRef(null);

    // const [isVisibleOne, setIsVisibleOne] = useState(false);
    // const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    // const [isVisibleThree, setIsVisibleThree] = useState(false);
    // const [isVisibleFour, setIsVisibleFour] = useState(false);

    const [isClientOne, setClientOne] = useState();
    const [isClientTwo, setClientTwo] = useState();
    const [isClientThree, setClientThree] = useState();
    const [isClientFour, setClientFour] = useState();



    useEffect(() => {
        const observerOne = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    // console.log(entry.boundingClientRect);
                    setClientOne(entry.boundingClientRect.height)
                    // observer.disconnect();
                    // setIsVisibleOne(true)

                }

            });
        });
        observerOne.observe(divOneRef.current);

        const observerTwo = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    // setIsVisibleTwo(true)
                    setClientTwo(entry.boundingClientRect.height)
                    // observer.disconnect();

                }
            });
        });
        observerTwo.observe(divTwoRef.current);

        const observerThree = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    // setIsVisibleThree(true)
                    setClientThree(entry.boundingClientRect.height)
                }
            });
        });
        observerThree.observe(divThreeRef.current);

        return () => {
            observerOne.disconnect();
            observerTwo.disconnect();
            observerThree.disconnect();

        }
    }, []);



    let [scroll, setScroll] = useState()

    useEffect(() => {
        const handleScroll = event => {
            setScroll(scroll = window.scrollY)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className="test-fout-main-container">
                <div className="nav-bar-div">
                    <p>
                        {/* {"One=" + isVisibleOne.toString() + " / Two=" + isVisibleTwo.toString() + " / Three=" + isVisibleThree.toString() + " / Four=" + isVisibleFour.toString()} */}
                        {scroll}
                        {/* {isClientTwo} */}

                    </p>


                    <div className="one"
                        style={{
                            paddingLeft: scroll < isClientOne ? `${scroll / 53.6}%` : "0%"
                        }}
                    >
                        <div className="content-div">Lorem, ipsum dolor.</div>
                    </div>
                    <div className="two"
                        style={{
                            paddingLeft: scroll > isClientOne && scroll < (isClientTwo + isClientOne) ? `${(scroll - isClientOne) / 40}%` : "0%"
                        }}
                    >
                        <div className="content-div">Lorem, ipsum dolor.</div>
                    </div>
                    <div className="three"
                        style={{
                            paddingLeft: scroll > (isClientTwo + isClientOne) && scroll < (isClientTwo + isClientOne + isClientThree) ? `${(scroll - isClientOne - isClientTwo) / 60}%` : "0%"
                        }}
                    >
                        <div className="content-div">Lorem, ipsum dolor.</div>
                    </div>
                    <div className="four"></div>

                </div>
                <div
                    ref={divOneRef}
                    className="container-one"
                ><p className='para-content'>CONTAINER ONE</p></div>

                <div
                    ref={divTwoRef}
                    className="container-two"

                ><p className='para-content'>CONTAINER TWO</p></div>

                <div
                    ref={divThreeRef}
                    className="container-three"
                ><p className='para-content'>CONTAINER THREE</p></div>

                <div
                    ref={divFourRef}
                    className="container-four"
                ><p className='para-content'>CONTAINER FOUR</p></div>

            </div>

        </>
    )
}