import React, {useState} from 'react';
import Splatter from '../../resources/images/custom-splatter-06.jpg';
import Square from '../../resources/images/newSquare40.png';
import Socials from '../socials/Socials';
import './Mobile.css'

export default function Mobile() {
  const [tap, setTap]= useState(false)

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
        overflowX: 'hidden',
      }}
    >
      <div className={'half-screen'}>
        <Socials mobile={true} />
      </div>
      <div className={'half-screen'}>
        <div
         className={'mobile-humdrum-text'}
         onClick={()=> setTap(!tap)}
        >
          humdrum
        </div>
        <img src={Square} className={`square-mobile ${tap && 'spin-mobile'}`} />
      </div>
    </div>
  );
}
