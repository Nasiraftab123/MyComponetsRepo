import React, { useState, useEffect } from 'react';
import './overscroll-prevention.scss';
import Stickyroll from "@stickyroll/react/stickyroll";

export default function OverscrollPrevention() {

    const [scrolling, setScrolling] = useState(0)

    const [pageNum, setPageNum] = useState({
        Page: '',
        Index: ''
    })

    const [progress, setProgress] = useState({
        Progress: '',
        Page: '',
        Index: ''
    })
    const [pageStart, setPageStart] = useState(false)
    const [pageEnd, setPageEnd] = useState(false)

    useEffect(() => {


        const handleScrolling = (e) => {
            // console.log(e)
            setScrolling(window.scrollY)
            e.preventDefault();

        }

        window.addEventListener('scroll', handleScrolling)
        window.addEventListener('wheel', (e) => { e.preventDefault() });

        return () => {
            window.removeEventListener('scroll', handleScrolling)
            window.removeEventListener('wheel', (e) => { e.preventDefault() });

        }
    }
        , [])


    return (
        <div className="overscroll-prevention-main-container">
            <Stickyroll pages={1} factor={5}
                onStart={() => {
                    setPageEnd(false)
                    setPageStart(true)
                }}
                onPage={(page, index) => {
                    // console.log("onPage", page, index);
                    setPageNum({
                        Page: page,
                        Index: index
                    })
                }}
                onProgress={(progress, page, index) => {
                    // console.log("onProgress", progress, page, index);
                    setProgress({
                        Progress: progress,
                        Page: page,
                        Index: index
                    })
                }}
                onEnd={() => {
                    setPageStart(false)
                    setPageEnd(true)

                }}
            >
                <div className="inner-div" style={{
                    top: `${Math.pow(30, progress.Progress)}vw`,
                    left: `${Math.pow(44.49, progress.Progress)}vw`

                }}>


                </div>
                <div className="inner-div"
                    style={{
                        // backgroundColor: 'orange',
                        top: `${Math.pow(30, progress.Progress)}vw`,
                        right: `${Math.pow(44.49, progress.Progress)}vw`

                    }}></div>

            </Stickyroll>

            <div className="fixed-div">
                <p>{`Scroll:(${scrolling}`})</p>
                <p>{`Page:(${pageNum.Page}) / index(${pageNum.Index})`}</p>
                <p>{`Progress:(${progress.Progress}) / Page(${progress.Page}) / index(${progress.Index})`}</p>
                <p>{`pageStart:(${pageStart}`})</p>
                <p>{`pageEnd:(${pageEnd}`})</p>

            </div>
            <div className='below'></div>
        </div>
    )
}
