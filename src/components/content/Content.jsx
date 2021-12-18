import React, { useState } from 'react';
import Bio from '../bio/Bio';
import Shows from '../shows/Shows.js';
import Contact from '../contact/Contact.js';
import Listen from '../listen/Listen';
import Square from '../../resources/images/newSquare40.png';
import './Content.css';

export default function Content(props) {
  const { backgroundOpacity } = props;
  const [hover, setHover] = useState(null);
  const options = ['Bio', 'Listen', 'Shows', 'Contact'];

  return (
    <div
      className={`home-wrapper ${backgroundOpacity && 'home-opaque'}
          `}
      id={'home-container'}
    >
      <div className={`square-wrapper`}>
        <img src={Square} className={`square ${backgroundOpacity && 'spin'}`} />
        <div className={'menu-wrapper'}>
          <div className={'menu-sticky'}>
            <div
              className={`header-text ${backgroundOpacity && 'pointer'}`}
              onClick={() => {
                document
                  .getElementById('desktop-background')
                  .scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              humdrum
            </div>
            <div className={'options-wrapper'}>
              {options.map((option, index) => {
                return (
                  <>
                    <span
                      onClick={() => {
                        document
                          .getElementById(`${option}-Section`)
                          .scrollIntoView({ behavior: 'smooth' });
                      }}
                      onMouseEnter={() => setHover(option)}
                      onMouseLeave={() => setHover(null)}
                      key={index}
                      className={'menu-option'}
                      style={{
                        textDecorationLine: hover === option ? 'underline' : 'none',
                        textUnderlinePosition: 'under',
                        // textDecorationColor: 'red', TODO
                      }}
                    >
                      {option}
                    </span>
                    {index < options.length - 1 && <div className={'circle'} />}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={'sections-wrapper'}>
        <hr />
        <Bio />
        <hr />
        <Listen />
        <hr />
        <Shows />
        <hr />
        <Contact />© Humdrum 2021
      </div>
    </div>
  );
}
