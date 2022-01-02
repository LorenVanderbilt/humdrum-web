import React, { useState, useEffect } from 'react';
// import Shapes from '../../resources/images/parallax-test-background.png';
// import Shapes from '../../resources/images/backgroundShapes.png';
// import Shapes from './Shapes';
import Splatter from '../../resources/images/custom-splatter-06.jpg';
import Content from '../content/Content';
import Socials from '../socials/Socials';
import './Desktop.css';

export default function Desktop() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(false);

  const handleScroll = (evt) => {
    const target = evt.target;
    if (target.scrollTop > 300) {
      setBackgroundOpacity(true);
    } else {
      setBackgroundOpacity(false);
    }
  };
  
/* eslint-disable */
  useEffect(()=>{
    console.log(
    `     _                             
    | |                            
    | |__   _   _  _ __ ___        
    | '_ \\\ | | | || '_ \` _ \\\       
    | | | || |_| || | | | | |      
    |_| |_| \\\__,_||_| |_| |_|      
        | |                        
      __| | _ __  _   _  _ __ ___  
     / _\` || '__|| | | || '_ \` _ \\\ 
    | (_| || |   | |_| || | | | | |
     \\\__,_||_|    \\\__,_||_| |_| |_|
     ==============================`)
  }, [])
  /* eslint-enable */

  return (
    <div
      className={'background'}
      style={{
        backgroundImage: `url(${Splatter})`,
      }}
      onScroll={handleScroll}
      id="desktop-background"
    >
      {/* <div
        className="floating-shapes"
        // style={{
        //   backgroundImage: `url(${Shapes})`,
        // }}
      >
       <Shapes />   
      </div> */}
      <div className="content">
        <Content backgroundOpacity={backgroundOpacity} />
      </div>
      <div className="socials-container">
        <Socials mobile={false} />
      </div> 
    </div>
  );
}
