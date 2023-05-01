import React, { useState, useEffect, useRef } from "react";
import "./test-two.scss";

export default function TestTwo() {


    const cntrOne = useRef();
    const cntrTwo = useRef();
    const cntrThree = useRef();
    const cntrFour = useRef();

    const [isClientOne, setClientOne] = useState();
    const [isClientTwo, setClientTwo] = useState();
    const [isClientThree, setClientThree] = useState();


    useEffect(() => {
        const observerOne = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    setClientOne(entry.boundingClientRect.height)
                    // observer.disconnect();

                }

            });
        });
        observerOne.observe(cntrOne.current);

        const observerTwo = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    setClientTwo(entry.boundingClientRect.height)
                    // observer.disconnect();

                }
            });
        });
        observerTwo.observe(cntrTwo.current);

        const observerThree = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    setClientThree(entry.boundingClientRect.height)
                    // observer.disconnect();

                }
            });
        });
        observerThree.observe(cntrThree.current);

        return () => {
            observerOne.disconnect();
            observerTwo.disconnect();
            observerThree.disconnect();

        }
    }, []);



    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);

    const handleScrollEvents = () => {

    }

    if (scrollTop > (isClientOne - 50) && scrollTop < (isClientOne + 50)) {
        // cntrTwo.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "center" })
        window.scrollTo({
            top: (isClientOne),
            behavior: "smooth"
        })
    }

    else if (scrollTop > (isClientOne + isClientTwo - 50) && scrollTop < (isClientOne + isClientTwo + 50)) {
        window.scrollTo({
            top: (isClientOne + isClientTwo),
            behavior: "smooth"
        })

    }
    else if (scrollTop > (isClientOne + isClientTwo + isClientThree - 50) && scrollTop < (isClientOne + isClientTwo + isClientThree + 50)) {
        window.scrollTo({
            top: (isClientOne + isClientTwo + isClientThree),
            behavior: "smooth"
        })

    }

    return (
        <>

            <div className="test-two-main-container">
                <p onClick={handleScrollEvents}>{scrollTop}</p>
                <div
                    className="container-one"
                    ref={cntrOne}
                >CONTAINER ONE</div>
                <div
                    className="container-two"
                    ref={cntrTwo}
                >CONTAINER TWO</div>
                <div
                    className="container-three"
                    ref={cntrThree}
                >CONTAINER THREE</div>
                <div
                    className="container-four"
                    ref={cntrFour}
                >CONTAINER FOUR</div>


            </div>

        </>
    );
}