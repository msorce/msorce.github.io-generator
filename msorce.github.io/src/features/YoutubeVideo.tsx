import React from 'react';
import './YoutubeVideo.css';

function YoutubeVideo({ id }: { id: string }): JSX.Element {
    return (
        <div>
            this should return a yt vid
            <iframe id="player"
                height="100%"
                src="https://www.youtube.com/embed/jQmZ8uCJmmw"
                allow="fullscreen;">
            </iframe>
        </div>
    );
}

export default YoutubeVideo;
