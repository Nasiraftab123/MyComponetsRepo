import React, { useRef } from 'react';
import useIntersectionObserver from './intersection-observer';
import './test-one2.scss';

export default function TestOne2() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const entries = useIntersectionObserver([ref1, ref2], { threshold: 0.5 });

  const isVisible1 = entries[0]?.isIntersecting;
  const isVisible2 = entries[1]?.isIntersecting;

    return (
        <div className="test-one2-main-container">
            <div className="details1 isVisible">{isVisible1 ? isVisible1.toString() : 'false'}</div>
            <div className="details2 isVisible">{isVisible2 ? isVisible2.toString() : 'false'}</div>

            <div className="div1">1</div>
            <div className="div2">2</div>
            <div ref={ref1} className="div3">3</div>
            <div className="div4">4</div>
            <div ref={ref2} className="div5">5</div>



        </div>
    )
}
