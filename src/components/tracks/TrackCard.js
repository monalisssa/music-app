import React from 'react';
import {formatMilliseconds} from "../../math_functions";
import {useResize} from "../../utils/use_resize";


const TrackCard = ({track, index, playTrack, playingTrack, setPlayingTrack}) => {


    const {isScreenSm, isScreenMd} = useResize()
    const handlePlayTrack = (track) => {
        playTrack(track);
        setPlayingTrack(track)
    };


    return (
        <tr onClick = {() => handlePlayTrack(track) } className={playingTrack.id === track.id ? "cursor-pointer bg-button-color border-amber-50" : "cursor-pointer hover:bg-button-color"} >
            <td className="w-10 text-gray-400 text-sm xs:hidden">{index}</td>
            <td className="flex items-center justify-start gap-5 w-full">
                <img src={track.album.image} alt="track" width={45} className="rounded"/>
                <div className="flex flex-col items-start">
                    {
                        isScreenSm ?
                            <>
                                {track.name.length > 20 ? track.name.substring(0, 20) + '...' : track.name}
                            </>

                            : track.name


                    }


                    <span className="text-gray-400 text-sm">
                        {track.artists.length === 1 && track.artists[0].name
                        }
                        {track.artists.length === 2 && track.artists[0].name + ' & ' + track.artists[1].name
                        }
                        {track.artists.length > 2 && track.artists[0].name + ', ' + track.artists[1].name + '...'
                        }

                    </span>
                </div>
            </td>
            <td className="text-left text-gray-400 text-sm xs:hidden">
                {track.album.name}
            </td>
            <td className="text-left text-gray-400 text-sm">
                {formatMilliseconds(track.duration_ms)}
            </td>
        </tr>

    );
};

export default TrackCard;