import React from "react";
import hamburger from "./hamburger.jpg";
import youtube from "./youtube.png";
import user from "./user.png";
import { useDispatch } from "react-redux";
import { toggleMenu} from '../utils/appSlice';


const Head =  () => {
    const dispatch = useDispatch 

    const toggleMenuHandler = () => {
    dispatch (toggleMenu());
    };
    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img 
                onClick={() => toggleMenuHandler()}
                className="h-8 cursor-pointer" 
                 alt="menu" src={hamburger}/>
                 <a>
                <img className="h-8 mx-2"
                alt="youtube-logo" src={youtube}/>
                </a>
            </div>
        <div className="col-span-10 px-10">
        <input 
        className="w-1/2 border border-gray-400 rounded-l-full"
        type="text"/>
        <button className="border border-gray-400  rounded-r-full bg-gray-100">
            Search </button>
        </div>
        <div className="col-span-10">
        <img className="h-8 cursor-pointer"
         alt="user" src={user}/>
        </div>
        </div>
    );
}

export default Head;