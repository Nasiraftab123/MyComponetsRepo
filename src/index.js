import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line
import App from './App';
// eslint-disable-next-line
import TestOne from './Test-One/test-one';
// eslint-disable-next-line
import TestOne2 from './Test-One/test-one2';
// eslint-disable-next-line
import TestTwo from './Test-Two/test-two';
// eslint-disable-next-line
import TestThree from './Test-Three/test-three';
// eslint-disable-next-line
import TestFour from './Test-Four/test-four';
// eslint-disable-next-line
import TestGetApi from './Test-Get-Api/test-api';
// eslint-disable-next-line
import TestImgMasking from './Test-Img-Masking/test-img-masking';
// eslint-disable-next-line
import Demo from './Animation/Demo/demo';
// eslint-disable-next-line
import Demo2 from './Animation/Demo2/demo2';
// eslint-disable-next-line
import MouseDragging from './Mouse-Dragging/mouse-dragging';
// eslint-disable-next-line
import ReactTilt from './React-Tilt/react-tilt';
// eslint-disable-next-line
import PLXTestOne from './Parallax-Scrolling/PLX-Test-One/plx-test-one';
// eslint-disable-next-line
import AnimeOne from './3d-Anime-Comp/3d-Anime-One/anime-one';
// eslint-disable-next-line
import AnimeTwo from './3d-Anime-Comp/3d-Anime-Two/anime-two';
// eslint-disable-next-line
import PLXTestTwo from './Parallax-Scrolling/PLX-Test-Two/plx-test-two';
// eslint-disable-next-line
import StickyRoll from './StickyRoll/sticky-roll';
// eslint-disable-next-line
import ReactRipple from './React-Ripple/react-ripple';
// eslint-disable-next-line
import ExampleOne from './Exemples/Example-One/example-one';
// eslint-disable-next-line
import ExampleTwo from './Exemples/Exemple-Two/example-two';
// eslint-disable-next-line
import ExampleThree from './Exemples/Exemple-Three/example-three';
// eslint-disable-next-line
import OverscrollPrevention from './Over-Scroll-Prevent/overscroll-prevention';
// eslint-disable-next-line

import PracOne from './3d-Anime-Comp/Prac-Three-Js/Project-Prac-One/prac-one';

// -------------------------[ useContext Hook ]-------------------------------------------
// eslint-disable-next-line
import UseContextComp from './React-useContext-Hook/UseContext/use-context-comp';
// eslint-disable-next-line
import MainApp from './React-useContext-Hook/AppContext/main-app';
// eslint-disable-next-line

//   const backgroundImage = 'path/to/your/background/image.jpg'; // Replace this with the actual path

// import video from './video-src/PitchCatalystHomePage.mp4'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TestOne /> */}
    {/* <TestOne2 /> */}
    {/* <TestTwo /> */}
    {/* <TestThree /> */}
    {/* <TestFour /> */}
    {/* <TestGetApi /> */}
    {/* <TestImgMasking /> */}
    {/* <Demo /> */}
    {/* <Demo2 /> */}
    {/* <MouseDragging /> */}
    {/* <ReactTilt /> */}
    {/* <PLXTestOne /> */}
    {/* <AnimeOne /> */}
    <AnimeTwo />
    {/* <PLXTestTwo/> */}
    {/* <StickyRoll /> */}
    {/* <ReactRipple /> */}
    {/* <ExampleOne /> */}
    {/* <ExampleTwo /> */}
    {/* <ExampleThree src='./video-src/PitchCatalystHomePage.mp4'/> */}
    {/* <UseContextComp/> */}
    {/* <MainApp /> */}
    {/* <OverscrollPrevention /> */}
    {/* <PracOne /> */}

  </React.StrictMode>
);