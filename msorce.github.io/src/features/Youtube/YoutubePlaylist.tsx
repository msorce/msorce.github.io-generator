
import React from 'react';
// import './YoutubePlaylist.css';

function YoutubePlaylist({ id }: { id: string }): JSX.Element {
    return (
        <div className="w-full h-full object-center object-cover">
            <iframe id={id}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed?listType=playlist&list=${id}`}
                allow="fullscreen;">
            </iframe>
        </div>
    );
}

export default YoutubePlaylist;