import React from 'react';




const MusicPlayer = ({id}) => {

    const url = `https://open.spotify.com/embed/track/${id}?utm_source=generator`
    return (

        <>

            <iframe
                    title="player"
                    src={url}
                    width="90%" height="170rem" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
            </iframe>

        </>
    );
};

export default MusicPlayer;