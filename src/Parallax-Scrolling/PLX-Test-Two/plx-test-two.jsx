import React from 'react';
import './plx-test-two.scss';
import { Parallax } from "react-parallax";
import Woman from "../../img/parallax-two-img/woman.jpg";
import City from "../../img/parallax-two-img/city.jpg";
import Fly from "../../img/parallax-two-img/fly.jpg";

export default function PLXTestTwo() {
    return (
        <div className="plx-test-two-main-container">
            <Parallax strength={300} bgImage={Woman}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={City}>
        <div className="content">
          <div className="text-content">Blur</div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={Fly}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>

      <div className="content"></div>
        </div>
    )
}
