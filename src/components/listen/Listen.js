import React from 'react';
import './Listen.css';
export default function Listen(props) {
  return (
    <div id={'Listen-Section'}>
      <div className={'listen-container'}>
        <div className={'listen-header-text'}>listen</div>

        <iframe 
        style={{ border: 0, width: '350px', height: '622px', marginBottom: '30px' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=3252435323/size=large/bgcol=ffffff/linkcol=0687f5/track=863815641/transparent=true/" 
        seamless
        title="bandcamp widget"
        >
          <a href="https://heyhumdrum.bandcamp.com/album/every-heaven">Every Heaven by Humdrum</a>
          </iframe>
       
        <iframe
          style={{ border: 0, width: '350px', height: '442px', marginBottom: '30px' }}
          src="https://bandcamp.com/EmbeddedPlayer/track=1650045633/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
          title="bandcamp widget"

        >
          <a href="https://heyhumdrum.bandcamp.com/track/superbloom">
            Superbloom by Humdrum
          </a>
        </iframe>
        <iframe
          style={{ border: 0, width: '350px', height: '442px' }}
          src="https://bandcamp.com/EmbeddedPlayer/track=1548728806/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
          seamless
          title="bandcamp widget"
        >
          <a href="https://heyhumdrum.bandcamp.com/track/wave-goodbye">
            Wave Goodbye by Humdrum
          </a>
        </iframe>
      </div>
    </div>
  );
}
