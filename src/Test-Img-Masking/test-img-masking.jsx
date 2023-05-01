import React from 'react';
import './test-img-masking.scss';
import BGImg from '../img/pexels-eberhard-grossgasteiger-2098427.jpg';
import Frame from '../img/vector873.png';
import FrameLogo from '../img/group527.png';

export default function TestImgMasking() {
    return (
        <div className='test-img-masking-main-container'>


            <section className='section-one'>
                {/* <video className='mask1' controls>
                    <source
                        src='https://rentweb.s3.ap-south-1.amazonaws.com/videos/RScore-slide2.mp4' type='video/mp4'
                    />
                </video> */}

                <div className="mask1" >
                    <img src={BGImg} alt="Cinque Terre" width="500" height="700"
                        style={{
                            transform: `translateY(-20%)`
                        }}
                    />


                </div>

            </section>
            
            {/* ---------------------------masking by -mixed bland mode----------------------- */}
            <div className='section-two'>
                <section></section>
            </div>
        </div>


    )
}
