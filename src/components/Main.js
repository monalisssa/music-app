import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import ListTracks from "./tracks/ListTracks";
import SideBar from "./current_track/SideBar";
import Loading from "react-loading";
import {FaMusic, FaSearch} from "react-icons/fa";
import {getToken, getTracks} from "../utils/api";
import {useResize} from "../utils/use_resize"

const Main = ({setValue, tracks}) => {

    const [search_tracks, setSearch_tracks] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [trackPage, setTrackPage] = useState(false)
    const [currentTrack, setCurrentTrack] = useState('')
    const {  isScreenSm, isScreenMd, isScreenLg } = useResize();
    const handleSetCurrentTrack = (track) => {
        setCurrentTrack(track)
        setTrackPage(track)
    }


    useEffect(() => {
        const token = localStorage.getItem('token');
        setSearch_tracks([]);
        if (searchValue !== '' && token) {
            setLoading(true);
            setTimeout(function () {
                getTracks(searchValue, token).then(data => {
                    setLoading(false);
                    setSearch_tracks(data.tracks.items);
                });
            }, 1000);
        }
    }, [searchValue]);

    const handleSearchValue = (value) =>
    {
        setSearchValue(value)
    }


    useEffect(() => {
        getToken().then(data => localStorage.setItem('token', data.access_token))
    }, []);

    return (
        <div className="App bg-black xl:h-screen h-full p-2 text-cyan-50 flex gap-5  xs:p-0 xs:h-full sm:p-0">

            {
                (isScreenSm || isScreenMd || isScreenLg) && trackPage && <SideBar currentTrack={currentTrack} setCurrentTrack={handleSetCurrentTrack}/>
            }

            {
                !isScreenSm && !isScreenMd && !isScreenLg &&
                <>
                        <SideBar currentTrack={currentTrack} setCurrentTrack={handleSetCurrentTrack}/>
                        <div className="bg-main-color w-5/6 rounded h-full p-5">
                            <SearchBar setValue={handleSearchValue}/>
                            {
                                loading ? <Loading type="spin" className="m-auto" width={50}/>
                                    : <ListTracks tracks={search_tracks} playTrack={handleSetCurrentTrack}/>
                            }

                        </div>
                </>

            }

            {
                (isScreenSm || isScreenMd || isScreenLg) && !trackPage &&
                <div className="bg-main-color w-5/6 rounded h-full p-5 xs:w-full xs:min-h-screen  sm:w-full sm:min-h-screen">
                    <SearchBar setValue={handleSearchValue}/>
                    {
                        loading ? <Loading type="spin" className="m-auto" width={50}/>
                            : <ListTracks tracks={search_tracks} playTrack={handleSetCurrentTrack}/>
                    }

                </div>
            }

            {
                (isScreenSm || isScreenMd || isScreenLg) &&
                <footer
                    className="fixed bottom-0 w-full flex justify-center items-center bg-button-color h-16 gap-2">
                    <button className="p-2 rounded-full bg-custom-background flex justify-center">
                        <FaSearch size={20} onClick={() => setTrackPage(false)}/>
                    </button>
                    <button className="p-2 rounded-full bg-custom-background flex justify-center">
                        <FaMusic size={20} onClick={() => setTrackPage(true)}/>
                    </button>
                </footer>
            }


        </div>
    );
};

export default Main;