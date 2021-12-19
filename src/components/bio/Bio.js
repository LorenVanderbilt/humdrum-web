import React from 'react';
import loren from '../../resources/images/humdrum_portrait_web.jpg';
import Photo from '../../elements/Photo';

import './Bio.css';

export default function Bio(props) {
  return (
    <div id={'Bio-Section'}>
      <div className={'bio-container'}>
        <div className={'bio-header-wrapper'}>
          <div className={'bio-header-text'}>bio</div>
          <Photo
            image={loren}
            credit={'Vincente Santiago'}
            alt={'loren standing in wildflowers'}
          />
        </div>
        <div className={'bio-text'}>
          Combining carefree melodies and fuzzy guitars, Humdrum is the latest
          music project of Chicago's Loren Vanderbilt III. After the dissolution
          of previous band Star Tropics, Loren spent the beginning of the
          pandemic writing new music alone in his apartment to dissociate from
          the crumbling world outside. Daydreaming to the jangle pop of IRS-era
          R.E.M., Felt, The Railway Children, New Order, and 90's staples like
          Ride and Slowdive, Humdrum was built from this escapist nostalgia for
          the musical eras gone by, and informed by the anxious need for said
          escape. With the release of the first song, 'Wave Goodbye', in
          September 2021, Loren plans to release more new music in the coming
          autumn/winter season.
        </div>
      </div>
    </div>
  );
}
