import React from 'react';
import Twitter from '../../resources/images/twitter.svg';
import Facebook from '../../resources/images/facebook.svg';
import Instagram from '../../resources/images/instagram.svg';
import Tiktok from '../../resources/images/tiktok.svg';
import Soundcloud from '../../resources/images/soundcloud.svg';
import Bandcamp from '../../resources/images/bandcamp.svg';
import './socials.css';

const social = [
  { image: Bandcamp, url: 'https://heyhumdrum.bandcamp.com/releases' },
  { image: Instagram, url: 'http://instagram.com/heyhumdrum' },
  { image: Twitter, url: 'http://twitter.com/heyhumdrum' },
  { image: Soundcloud, url: 'http://soundcloud.com/heyhumdrum' },
  { image: Tiktok, url: 'http://tiktok.com/@heyhumdrumm' },
  { image: Facebook, url: 'http://www.facebook.com/heyhumdrum' },

];

export default function Socials(props) {

  const {mobile} = props
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={'socialsContainer'}>
      {mobile && <div style={{height: '300px'}}/>}
      {social.map((obj, index) => {
        return (
          <div
            className={mobile? 'socialsCircleMobile':'socialsCircle'}
            key={`social-button-${index}`}
            onClick={() => openInNewTab(obj.url)}
          >
            <img src={obj.image} alt={'social media'} />
          </div>
        );
      })}
    </div>
  );
}
