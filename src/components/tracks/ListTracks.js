import React, {useState} from 'react';
import {FaClock} from "react-icons/fa";
import TrackCard from "./TrackCard";
const ListTracks = ({tracks, playTrack}) => {

    const [playingTrack, setPlayingTrack] = useState('');

    const handlePlayingTrack = (track) =>
    {
        setPlayingTrack(track)
    }
    return (
        <>
            <div className="overflow-auto tracks-table mt-5 xs:h-100 ">
                <table className="w-full">
                    <tbody>

                    {tracks && tracks.length > 0 && (
                        <>
                            <tr className="text-gray-400 text-sm bg-button-color w-full">
                                <th className="xs:hidden">№</th>
                                <th className="text-left">Name</th>
                                <th className="text-left xs:hidden">Album</th>
                                <th><FaClock/></th>
                            </tr>
                            {tracks.map((track, index) => (
                                <TrackCard
                                    key={index}
                                    track={track}
                                    index={index + 1}
                                    playTrack={playTrack}
                                    playingTrack={playingTrack}
                                    setPlayingTrack={handlePlayingTrack}
                                />
                            ))}
                        </>
                    )}


                </tbody>
            </table>
        </div>

        </>
    );
};

export default ListTracks;