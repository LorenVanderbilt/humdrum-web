import React, { useState } from 'react';
import Shapes from '../../resources/images/parallax-test-background.png';
import Splatter from '../../resources/images/custom-splatter-06.jpg';
import Content from '../content/Content';
import Socials from '../socials/Socials';
import './Desktop.css';

export default function Desktop() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(false);

  const handleScroll = (evt) => {
    const target = evt.target;
    // console.log('BAM', evt.target.scrollTop);
    if (target.scrollTop > 300) {
      setBackgroundOpacity(true);
    } else {
      setBackgroundOpacity(false);
    }
  };

  //make something that will fit in the default size of dev console on open
  console.log("dP                                 dP                              ")
  console.log("88                                 88                              ")
  console.log("88d888b. dP    dP 88d8b.d8b. .d888b88 88d888b. dP    dP 88d8b.d8b. ")
  console.log("88'  `88 88    88 88'`88'`88 88'  `88 88'  `88 88    88 88'`88'`88 ")
  console.log("88    88 88.  .88 88  88  88 88.  .88 88       88.  .88 88  88  88 ")
  console.log("dP    dP `88888P' dP  dP  dP `88888P8 dP       `88888P' dP  dP  dP ")
  console.log("ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
  console.log("                                                                   ")
  console.log("                                                                   ")

  return (
    <div
      className={'background'}
      style={{
        backgroundImage: `url(${Splatter})`,
      }}
      onScroll={handleScroll}
      id="desktop-background"
    >
      <div
        className="floating-shapes"
        style={{
          backgroundImage: `url(${Shapes})`,
        }}
      />
      <div className="content">
        <Content backgroundOpacity={backgroundOpacity} />
      </div>
      <div className="socials-container">
        <Socials mobile={false} />
      </div> 
    </div>
  );
}
