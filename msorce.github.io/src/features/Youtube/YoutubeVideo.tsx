import React from 'react';
import './YoutubeVideo.css';

function YoutubeVideo({ id }: { id: string }): JSX.Element {
    return (
        <div className="w-full h-full object-center object-cover">
            <iframe id="player"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jQmZ8uCJmmw"
                allow="fullscreen;">
            </iframe>
        </div>
    );
}

export default YoutubeVideo;
