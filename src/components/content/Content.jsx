import React, {useEffect, useState}from 'react'
import Bio from '../bio/Bio';
import Shows from '../shows/Shows.js';
import Contact from '../contact/Contact.js';
import Listen from '../listen/Listen';
import './Content.css'



export default function Content(props){
    const {backgroundOpacity} = props
    const [hover, setHover] = useState(null);
    const homeOptions = ['Bio', 'Listen', 'Shows', 'Contact'];

    return (
      <div
        className={
          backgroundOpacity
            ? 'homeContentContainer-opaque'
            : 'homeContentContainer-trans'
        }
        id={'home-container'}
      >
        <div
          className={
            backgroundOpacity
              ? 'homeMenuContainer-opaque'
              : 'homeMenuContainer-trans'
          }
        >
          <div
            className={'headerText'}
            onClick={() =>{
                console.log('TEST');
              document
                .getElementById('home-container')
                .scrollTo({ top: 0, behavior: 'smooth' })
            }}
            // style={{cursor: 'pointer'}}
          >
            HUMDRUM
          </div>
          <div className={'homeMenuOptionsContainer'}>
            {homeOptions.map((option, index) => {
              return (
                <span
                  onClick={() => {
                    document
                      .getElementById(`${option}-Section`)
                      .scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={() => setHover(option)}
                  onMouseLeave={() => setHover(null)}
                  key={index}
                  className={'homeMenuOption'}
                  style={{
                    textDecoration: hover === option ? 'underline' : 'none',
                  }}
                >
                  {option}
                </span>
              );
            })}
          </div>
        </div>
        <div className={'homeSections'}>
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
  };
