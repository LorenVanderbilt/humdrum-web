import React from 'react';
import loren from '../../resources/images/humdrum_portrait_web.jpg';
import humdrumPhoto from '../../resources/images/Humdrum_port.jpg'
import Photo from '../../elements/Photo';

import './Bio.css';

export default function Bio(props) {
  return (
    <div id={'Bio-Section'}>
      <div className={'bio-container'}>
        <div className={'bio-header-wrapper'}>
          <div className={'bio-header-text'}>bio</div>
          <Photo
            image={humdrumPhoto}
            credit={'Erin Lyle'}
            alt={'blurry photo of humdrum'}
          />
        </div>
        <div className={'bio-text'}>

          When the world — and his previous band Star Tropics — crumbled in the early days of the pandemic, Chicago's Loren Vanderbilt began rebuilding himself through song. Daydreaming to the chime of IRS-era R.E.M., Felt, The Railway Children, New Order, and 90's staples like Ride, Pale Saints and Slowdive, he fell backwards in time through records as a means of escape. To break away from the present and embrace the nostalgia of musical eras gone by, Loren formed Humdrum — a band built around his favorite elements of dream-pop, indiepop, shoegaze, and new wave.
          <br/><br/>
On his debut album, "Every Heaven," Loren establishes himself as a talented songwriter and master of melody across 10 tracks brimming with jangly guitars and lovelorn vocals—all punctuated by the pulse of a driving beat. A deeper listen reveals a juxtaposition between the album's carefree melodies, and its sobering truths about the life, loss, and the questions of being a queer 30-something artist. With "Every Heaven" Humdrum has presented 10 songs that speak to life's dynamic moments. And they can't wait for you to hear them.
        </div>
      </div>
    </div>
  );
}
