import React, { useState } from 'react';
import Splatter from '../../resources/images/custom-splatter-06.jpg';
import Socials from '../socials/socials.js';
import Bio from '../bio/Bio';
import Shows from '../shows/Shows.js';
import Contact from '../contact/Contact.js';
import Listen from '../listen/Listen';
import './home.css';

export default function Home(props) {
  const [backgroundOpacity, setBackgroundOpacity] = useState(false);
  const [hover, setHover] = useState(null);

  const homeOptions = ['Bio', 'Listen', 'Shows', 'Contact'];

  const handleScroll = (evt) => {
    const target = evt.target;
    if (target.scrollTop > 300) {
      setBackgroundOpacity(true);
    } else {
      setBackgroundOpacity(false);
    }
  };

  // console.log('huhuhuh', document
  // .getElementById('home-container').scrollTop)

  return (
    <div
      className={'homeContainer'}
      id={'Home-Container'}
      style={{
        backgroundImage: `url(${Splatter})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        overflow: 'scroll',
      }}
    >
      <Socials />
      <div
        className={
          backgroundOpacity
            ? 'homeContentContainer-opaque'
            : 'homeContentContainer-trans'
        }
        onScroll={handleScroll}
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
            onClick={() =>
              document
                .getElementById('home-container')
                .scrollTo({ top: 0, behavior: 'smooth' })
            }
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
          <Contact />
          © Humdrum 2021
        </div>
      </div>
    </div>
  );
}
