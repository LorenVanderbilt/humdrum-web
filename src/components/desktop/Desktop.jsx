import React, {useState} from 'react';
import Shapes from '../../resources/images/parallax-test-background.png';
import Splatter from '../../resources/images/custom-splatter-06.jpg';
import Content from '../content/Content'
import Socials from '../socials/socials'
import './Desktop.css';

export default function Desktop() {
    const [backgroundOpacity, setBackgroundOpacity] = useState(false);

    const handleOpacity = (evt) => {
        const target = evt.target;
        console.log('BAM', evt.target.scrollTop);
        if (target.scrollTop > 300) {
          setBackgroundOpacity(true);
        } else {
          setBackgroundOpacity(false);
        }
      };

  return (
      <div
        className={'background-container'}
        style={{
          backgroundImage: `url(${Splatter})`,
        }}
        onScroll={handleOpacity}
      >
        <div
          className="floating-shapes"
          style={{
            backgroundImage: `url(${Shapes})`,
          }}
        />        
         <div
          className="content"
        >
          <Content backgroundOpacity={backgroundOpacity} />
        </div> 
        <Socials mobile={false}/> 
      </div>
  );
}
