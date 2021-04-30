import React, { useState } from 'react';
import Splatter from '../../resources/images/Splatter.jpg';
import Socials from '../socials/Socials.js';
import { Parallax } from 'react-scroll-parallax';
import './Home.css';

export default function Home(props) {
  const [hover, toggleHover] = useState(false);
  return (
    <div
      className={'homeContainer'}
      style={{
        backgroundImage: `url(${Splatter})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      {hover && <Socials />}
      {/* <Parallax className="custom-class"
       offsetYMax={100}
       offsetYMin={-120}
       slowerScrollRate
        tagOuter="figure"> */}
        <div className={'headerText'}>HUMDRUM</div>
      {/* </Parallax> */}
      <div className={'homeMenuContainer'}>
        <span>Bio</span>
        <span>Shows</span>
        <span>Store</span>
        <span>Contact</span>
      </div>
    </div>
  );
}
