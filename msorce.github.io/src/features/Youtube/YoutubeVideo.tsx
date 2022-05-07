// import React from 'react';
import React from 'react';
import './YoutubeVideo.css';

const YoutubeVideo = ({ id }: { id: string }): JSX.Element => {
    return (
        <div className="w-full h-full object-center object-cover">
            <iframe id="player"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}`}
                allow="fullscreen;">
            </iframe>
        </div>
    );
}

export default YoutubeVideo;
