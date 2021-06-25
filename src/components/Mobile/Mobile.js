import React from 'react';
import Splatter from '../../resources/images/custom-splatter-06.jpg';
import Socials from '../socials/socials';

export default function Mobile() {
  return (
    <div
      style={{
        backgroundImage: `url(${Splatter})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'row',
        // width: '100%',
        overflowX: 'hidden',
      }}
    >
        <div style={{width: '50%'}}>
            <Socials/>
        </div>
        <div style={{width: '50%'}}>
        <div
        style={{
          transform: 'rotate(90deg)',
          color: '#ed5f5f',
          fontFamily: 'Akira',
          fontSize: '75px',
          position: 'relative',
          top: 50,
          right: 0
        }}
      >
        HUMDRUM
      </div>
        </div>

      
    </div>
  );
}
