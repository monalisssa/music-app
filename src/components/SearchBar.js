import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";


const SearchBar = ({setValue}) => {

    const [activeButton, setActiveButton] = useState('1')
    const handleSetActiveButton = (index) =>
    {
        setActiveButton(index)
    }
    return (
        <div className="p-2 flex flex-col justify-start items-start">

            <div className="relative w-1/3 xs:w-full sm:w-full">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 " size={20}/>
                <input className="bg-button-color p-3 pl-10 rounded-3xl w-full" placeholder="Search..." onChange={event => setValue(event.target.value)}/>
            </div>

            <div className="text-sm space-x-5 mt-5">
                <button className={activeButton === '1' ? 'bg-custom-background' : 'bg-button-color'} onClick={() => handleSetActiveButton('1')}>All</button>
                <button className={activeButton === '2' ? 'bg-custom-background' : 'bg-button-color'} onClick={() => handleSetActiveButton('2')}>Tracks</button>
            </div>
        </div>

    );
};

export default SearchBar;