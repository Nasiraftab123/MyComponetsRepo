import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TestOne from './Test-One/test-one';
import TestOne2 from './Test-One/test-one2';
import TestTwo from './Test-Two/test-two';
import TestThree from './Test-Three/test-three';
import TestFour from './Test-Four/test-four';
import TestGetApi from './Test-Get-Api/test-api';
import TestImgMasking from './Test-Img-Masking/test-img-masking';
import Demo from './Animation/Demo/demo';
import Demo2 from './Animation/Demo2/demo2';
import MouseDragging from './Mouse-Dragging/mouse-dragging';
import ReactTilt from './React-Tilt/react-tilt';
import PLXTestOne from './Parallax-Scrolling/PLX-Test-One/plx-test-one';
import AnimeOne from './3d-Anime-Comp/3d-Anime-One/anime-one';
import AnimeTwo from './3d-Anime-Comp/3d-Anime-Two/anime-two';
import PLXTestTwo from './Parallax-Scrolling/PLX-Test-Two/plx-test-two';
import StickyRoll from './StickyRoll/sticky-roll';
import ReactRipple from './React-Ripple/react-ripple';
import ExampleOne from './Exemples/Example-One/example-one';
import ExampleTwo from './Exemples/Exemple-Two/example-two';
import ExampleThree from './Exemples/Exemple-Three/example-three';
import OverscrollPrevention from './Over-Scroll-Prevent/overscroll-prevention';

// -------------------------[ useContext Hook ]-------------------------------------------
import UseContextComp from './React-useContext-Hook/UseContext/use-context-comp';
import MainApp from './React-useContext-Hook/AppContext/main-app';

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

  </React.StrictMode>
);