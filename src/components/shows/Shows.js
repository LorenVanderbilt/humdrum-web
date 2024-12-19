import React from 'react';
// import image from '../../resources/images/flyers/fallen_log_flyer.JPG'
import './Shows.css';

export default function Shows(props) {
  return (
    <div id={'Shows-Section'}>
      <div className={'shows-container'}>
        <div className={'shows-header-text'}>shows</div>
        <div className={'shows-body'}>
          <div className={'shows-sub-text'} style={{marginBottom: '15px'}}>u p c o m i n g</div>
          <div><a href="https://lh-st.com/shows/02-16-2025-emily-jane-powers/" target="_blank" rel="noopener noreferrer">February 16, 2025 - Schubas - Chicago, Il</a></div>
          <div><a href="https://www.newcolossusfestival.com/badges" target="_blank" rel="noopener noreferrer">March, 2025 - The New Colossus Festival - New York, NY (details TBA)</a></div>
          {/* <div style={{marginBottom: '50px'}}>August 6, 2024 - Empty Bottle - Chicago, Il</div> */}
          {/* <img src={image} className={'flyer'} alt={'flyer for upcoming show'}/> */}
          {/* <div><a href="https://www.newcolossusfestival.com/badges" target="_blank" rel="noopener noreferrer">June 22, 2023 - Cole's - Chicago, Il</a></div> */}
          {/* <div>No live performances scheduled at this time.</div> */}
          <div className={'shows-sub-text blue'}  style={{marginBottom: '15px'}}>p r e v i o u s</div>
          <div>December 7, 2024 - Tone Deaf Records - Chicago, Il</div>
          <div>November 6, 2024 - Cobra Lounge - Chicago, Il</div>
          <div>October 18, 2024 - Album Listening Party + DJ night w/ Smashed Plastic @ Reed's Local</div>
          <div>August 6, 2024 - Empty Bottle - Chicago, Il</div>
          <div>June 12, 2024 - Fallen Log - Chicago, Il</div>
          <div>March 8, 2024 - Burlington - Chicago, Il</div>
          <div>June 22, 2023 - Cole's - Chicago, Il</div>
          <div>March 2, 2023 - The Hideout - Chicago, Il</div>
          <div>January 12, 2023 - Burlington - Chicago, Il</div>
          <div>April 2, 2022 - Povos Gallery - Chicago, Il</div>
          </div>
      </div>
    </div>
  );
}
