import React, { useState} from 'react';
import Splatter from '../../resources/images/Splatter.jpg';
import Socials from '../socials/Socials.js';
import Bio from '../bio/Bio';
// import { Parallax } from 'react-scroll-parallax';
import './Home.css';


export default function Home(props) {
  const [section, setSection] = useState(null);

  const homeOptions = ['Bio', 'Shows', 'Store', 'Contact'];
  // console.log('SECTION', section)

  const moveMenu =()=> {
    // document.getElementById('img').className = 'classname';
    document.getElementById('home-header').classList.add('moveUp')
  }

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
        overflow: 'scroll',
      }}
    >
      <Socials />
      <div className={'homeMenuContainer'} id={'home-header'}>
        <div className={'headerText'}>HUMDRUM</div>
        {/* <div className={'homeMenuOptionsContainer'}>
          {homeOptions.map((option, index) => {
            return (
              <span
                onClick={() => {setSection(option);moveMenu()}}
                key={index}
                className={'homeMenuOption'}
              >
                {option}
              </span>
            );
          })}
        </div> */}
      </div>
      {/* {section && (
        <div className={'homeBodyContent'}>{section === 'Bio' && <Bio />}</div>
      )} */}
    </div>
  );
}
