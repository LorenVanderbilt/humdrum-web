import React from 'react';
// import image from '../../resources/images/flyers/4-2-22-povos.JPG'
import './Shows.css';

export default function Shows(props) {
  return (
    <div id={'Shows-Section'}>
      <div className={'shows-container'}>
        <div className={'shows-header-text'}>shows</div>
        <div className={'shows-body'}>
          {/* <img src={'../../resources/images/flyers/4-2-22-povos.JPG'} className={'flyer'}/> */}
          <div className={'shows-sub-text'} style={{marginBottom: '50px'}}>Upcoming</div>
          <div><a href="https://www.etix.com/ticket/p/5087751/tallies-torontosunshyhumdrum-chicago-coles-bar" target="_blank" rel="noopener noreferrer">June 22, 2023 - Cole's - Chicago, Il</a></div>

          {/* <div>No live performances scheduled at this time.</div> */}
          {/* <div className={'shows-sub-text blue'} >Previous</div>
           <div><a href="https://hideoutchicago.com/" target="_blank" rel="noopener noreferrer">March 2, 2023 - The Hideout - Chicago, Il</a></div>

          <div>January 12, 2023 - Burlington Bar - Chicago, Il</div>
          <div>April 2, 2022 - Povos Gallery - Chicago, Il</div> */}
          </div>
      </div>
    </div>
  );
}
