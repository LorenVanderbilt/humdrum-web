import React, {useState} from 'react';
import Splatter from '../../resources/images/Splatter.jpg';
import Socials from '../socials/socials.js';
import './home.css';

export default function Home(props) {
    const [hover, toggleHover]=useState(false)
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
      onMouseEnter={()=> toggleHover(true)}
      onMouseLeave={()=> toggleHover(false)}
    >
        {hover && <Socials />}
      HUMDRUM
    </div>
  );
}
