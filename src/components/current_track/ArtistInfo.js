import React from 'react';
import {FaHeart, FaStar} from "react-icons/fa";
import {formatFollowers} from "../../math_functions";
const ArtistInfo = ({ artists, setCurrentTrack}) => {

    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
            <div className="flex items-center justify-center gap-3">
                <div className="rounded-full overflow-hidden w-50">
                    <img
                        src={artists.artist_info.images}
                        alt="Artist"
                        className="object-cover w-24 h-1/3 transform"

                    />
                </div>
                <ul className="text-gray-400 text-sm flex flex-col justify-start items-start">
                    <li>{artists.artist_info.name}</li>
                    <li className="flex items-center gap-2">{formatFollowers(artists.artist_info.followers)} <FaHeart
                        fill={"#9400D3"}/></li>
                    <li className="flex items-center gap-2">{artists.artist_info.popularity} / 100 <FaStar/></li>
                    <li></li>
                </ul>

            </div>

            <div className="pl-5">
               Albums
                <ul className="text-gray-400 text-sm flex flex-col justify-start items-start max-h-52 overflow-auto gap-3 mt-3">
                    {artists.albums.items.map(album =>
                        <li className="flex items-center gap-3 text-left">
                            <img src={album.images[2].url} width={30} alt="album"/>
                            {album.name}
                        </li>
                    )}

                </ul>
            </div>


            <div className="pl-2 xs:mb-20 sm:mb-20">
                Top Tracks
                <ul className="text-gray-400 text-sm flex flex-col justify-start  overflow-auto gap-1 mt-3">
                    {artists.top_tracks.map((track, index) => (
                        <li key={index} className="grid grid-cols-grid_top_tracks justify-items-start">
                            <span>{index + 1}.</span>
                            <p className="hover:underline cursor-pointer text-left" onClick={() => setCurrentTrack(track)}>
                               {track.name}
                            </p>

                            <span>
                                 {track.popularity}
                            </span>
                            <FaStar size={15} fill={"#9400D3"}/>

                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};
export default ArtistInfo;