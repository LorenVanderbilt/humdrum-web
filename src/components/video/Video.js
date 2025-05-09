import React from 'react';
import './Video.css';

export default function Video(props) {
    return (
        <div id={'Video-Section'}>
             <div className={'video-container'}>
                <div className={'video-header-wrapper'}>
                    <div className={'video-header-text'}>
                        VIDEO
                    </div>
             </div>
            {/* COME AND GET ME */}
             <iframe 
             width="560" 
             height="315" 
             src="https://www.youtube.com/embed/b2gkDf5Kv30?si=vRolLuZK1M6HHy-D" 
             title="YouTube video player" 
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerpolicy="strict-origin-when-cross-origin" 
             allowfullscreen>
             </iframe>
             <br/>
             <br/>
            {/* ETERNAL BLUE */}
             <iframe
              width="560"
               height="315"
                src="https://www.youtube.com/embed/WnMcrYRwQXo?si=Pnt9RQcT71p6vDbu"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
            <br/>
            <br/>
            {/* THERE AND BACK AGAIN */}
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/SaqSNSLZ-4I?si=CLle1fYfPgRCeACU" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                >
            </iframe>
            <br/>
            <br/>
            {/* SEE THROUGH YOU */}
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/p4wj8EMGBUo?si=VNZTLGQFE8dwt45H" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            >
            </iframe>
            </div>
        </div>
    )
}