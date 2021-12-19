import React from 'react';
import './Listen.css';
export default function Listen(props) {
  return (
    <div id={'Listen-Section'}>
      <div className={'listen-container'}>
        <div className={'listen-header-text'}>
          listen
        </div>
        <iframe
          style={{border: 0, width: '350px', height: '442px'}}
          src="https://bandcamp.com/EmbeddedPlayer/track=1548728806/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://heyhumdrum.bandcamp.com/track/wave-goodbye">
            Wave Goodbye by Humdrum
          </a>
        </iframe>
      </div>
    </div>
  );
}
