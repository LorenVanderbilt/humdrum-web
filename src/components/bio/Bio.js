import React from 'react';
import humdrumphoto from '../../resources/images/humdrum_small.jpg';
import './Bio.css';

export default function Bio(props) {
  return (
    <div id={'Bio-Section'}>
      <div className={'bioContainer'}>
        <img src={humdrumphoto} alt={'flowers test'} />
        <div className={'bioText'}>
          Combining carefree melodies and fuzzy guitars, Humdrum is the latest
          music project of Chicago's Loren Vanderbilt. Built on the influence of
          jangle pop, shoegaze, and new wave during the pandemic year, Loren
          plans to release the debut Humdrum EP in Summer 2021.
        </div>
      </div>
    </div>
  );
}
