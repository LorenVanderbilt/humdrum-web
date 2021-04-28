import React from 'react';
import Twitter from '../../resources/images/twitter.svg'
import Facebook from '../../resources/images/facebook.svg'
import Instagram from '../../resources/images/instagram.svg'
import Tiktok from '../../resources/images/tiktok.svg'
import Soundcloud from '../../resources/images/soundcloud.svg'
import Bandcamp from '../../resources/images/bandcamp.svg'


import './socials.css'

const social = [
    {image: Facebook, url:'facebook.com/heyhumdrum'},
    {image: Instagram, url:'instagram.com/heyhumdrum'},
    {image: Tiktok, url:'tiktok.com/heyhumdrumm'},
    {image: Twitter, url:'twitter.com/heyhumdrum'},
    {image: Soundcloud, url:'soundcloud.com/heyhumdrum'},
    {image: Bandcamp, url:'bandcamp.com/heyhumdrum'},
]

export default function Socials(props){

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return(
        <div className={'socialsContainer'}>
            {social.map((obj, index)=>{
                return(
                    <div className={'socialsCircle'} key={`social-button-${index}`} onClick={() => openInNewTab(obj.url)}>
                        <img src={obj.image}/>
                    </div>
                )
            })}
        </div>
    )
}