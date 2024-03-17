import React from 'react';
import image from "../../styles/static/cover.png";
import image_1 from "../../styles/static/gorrilaz.jpg";
import image_2 from "../../styles/static/ta.jpg";

const ListArtists = () => {
    return (
        <div className="grid grid-cols-6 gap-6 mt-5">
            <div className="flex flex-col items-center text-2xl cursor-pointer hover:bg-button-color p-2">
                <div className="object-contain h-full ">
                    <img src={image_1} className="h-full rounded-full" alt="artist"/>
                </div>

                Sia
                <span className="text-sm text-gray-500">Artist</span>
            </div>
            <div className="flex flex-col items-center text-2xl cursor-pointer hover:bg-button-color p-2">
                <div className="object-contain h-full ">
                    <img src={image} className="h-full rounded-full" alt="artist" />
                </div>

                Sia
                <span className="text-sm text-gray-500">Artist</span>
            </div>
            <div className="flex flex-col items-center text-2xl cursor-pointer hover:bg-button-color p-2">
                <div className="object-contain h-full ">
                    <img src={image_2} className="h-full rounded-full" alt="artist"/>
                </div>

                Sia
                <span className="text-sm text-gray-500">Artist</span>
            </div>



        </div>

    )
        ;
};

export default ListArtists;