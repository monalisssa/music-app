import React, {useEffect, useState} from 'react';
import MusicPlayer from "./MusicPlayer";
import ArtistInfo from "./ArtistInfo";
import {getArtist} from "../../utils/api";
import Loading from "react-loading";

const SideBar = ({currentTrack, setCurrentTrack}) => {
    const [loading, setLoading] = useState(false)
    const [currentTrackArtists, setCurrentTrackArtists] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(currentTrack!=='') {
            setLoading(true)
            setTimeout(function () {
                getArtist(currentTrack.artists[0].id, token).then(data => {
                    setLoading(false)
                    setCurrentTrackArtists(data.artist)
                });
            }, 1000)

        }

    }, [currentTrack]);
    return (

        <div className='bg-main-color w-1/4 rounded text-cyan-50 h-full flex flex-col items-center p-3 xs:w-full xs:min-h-screen sm:w-full sm:min-h-screen '>
            {
                currentTrackArtists ?
                    <>
                        {
                            loading ? <Loading/>
                                :
                                <>
                                    <MusicPlayer id={currentTrack.id}/>
                                    <ArtistInfo artists={currentTrackArtists} setCurrentTrack={setCurrentTrack}/>
                                </>
                        }

                    </>


                    : <p>
                        {
                            loading ? <Loading type="spin" className="m-auto" width={50}/>
                                :
                                <p>Choose track...</p>
                        }
                    </p>
            }
        </div>
    );
};

export default SideBar;