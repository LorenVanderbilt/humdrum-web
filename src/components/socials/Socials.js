import React from 'react';
import Twitter from '../../resources/images/twitter.svg';
import Facebook from '../../resources/images/facebook.svg';
import Instagram from '../../resources/images/instagram.svg';
import Tiktok from '../../resources/images/tiktok.svg';
import Bandcamp from '../../resources/images/bandcamp.svg';
import Apple from '../../resources/images/apple.svg';
import Spotify from '../../resources/images/spotify.svg';
import Email from '../../resources/images/email.svg';
import './Socials.scss';


export default function Socials(props) {
  const {mobile} = props
  
  const social = [
    { image: Bandcamp, url: 'https://heyhumdrum.bandcamp.com/releases' },
    { image: Spotify, url: 'https://open.spotify.com/album/4Ipdloec3fPT77HqDN70AJ' },
    { image: Apple, url: 'https://music.apple.com/us/album/wave-goodbye-single/1588532279?uo=4&app=itunes' },
    { image: Instagram, url: 'http://instagram.com/heyhumdrum' },
    { image: Twitter, url: 'http://twitter.com/heyhumdrum' },
    { image: Tiktok, url: 'http://tiktok.com/@heyhumdrumm' },
    { image: Facebook, url: 'http://www.facebook.com/heyhumdrum' },
    // { image: Email, url: 'mailto:heyhumdrum@gmail.com'}
  ];
  
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={'socials-wrapper'}>
      {mobile && <div style={{height: '200px'}}/>}
      {social.map((obj, index) => {
        return (
          <div
            className={ `socials-circle ${mobile && 'mobile-margin'}`}
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
