import React from 'react';
import Bio from '../bio/Bio';
import Shows from '../shows/Shows.js';
import Contact from '../contact/Contact.js';
import Listen from '../listen/Listen';
import Video from '../video/Video.js';
import Square from '../../resources/images/newSquare40.png';
import {ReactComponent as Squiggle01} from '../../resources/images/squiggle01.svg';
import {ReactComponent as Squiggle02} from '../../resources/images/squiggle02.svg';
import {ReactComponent as Squiggle03} from '../../resources/images/squiggle03.svg';
import './Content.css';

export default function Content(props) {
  const { backgroundOpacity } = props;
  const options = ['Bio', 'Listen', 'Video', 'Shows', 'Contact'];

  return (
    <div
      className={`home-wrapper ${backgroundOpacity && 'home-opaque'}
          `}
      id={'home-container'}
    >
      <div className={`square-wrapper`}>
        <img
          src={Square}
          className={`square ${backgroundOpacity && 'spin'}`}
          alt={'black square'}
        />
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
                  <React.Fragment key={`option-${index}`}>
                    <div
                      onClick={() => {
                        document
                          .getElementById(`${option}-Section`)
                          .scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={'menu-option'}
                    >
                      {option}
                    </div>
                    {index < options.length - 1 && <div className={'circle'} key={`circle-${index}`}/>}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={'sections-wrapper'}>
        <Bio />
        <div className={'separation-wrapper'} style={{ transform: 'rotate(14deg)'}}>
          <Squiggle01 />
        </div>
        <Listen />
        <Video />
        <div className={'separation-wrapper'} style={{ transform: 'rotate(-14deg)'}}>
          <Squiggle02 /> 
        </div>
        <Shows />
        <div className={'separation-wrapper'}>
          <Squiggle03 /> 
        </div>
        <Contact />© Humdrum 2025
      </div>
    </div>
  );
}
