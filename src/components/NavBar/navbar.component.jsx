import React from "react";
import {BiChevronRight,BiSearch,BiMenu,BiChevronDown} from "react-icons/bi"

const NavSM = () =>{
    return(
        <>
        <div className="text-white flex items-center justify-between ">
            <div>
                <h3 className="text-xl font-bold">It's All start here!</h3>
                <span className="text-gray-400 text-xs flex items-center">Hyderabad<BiChevronRight/></span>
            </div>
            <div className="h-8 w-8">
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    )
}

const NavMd =()=>{
    return(
       <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
        <BiSearch/>
        <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events,Sports and Activities"/>
        </div>
        
    )
}
const NavLg=()=>{
    return(
        <>
        <div className="container mx-auto px-4 flex items-center justify-between ">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-12 h-12">
                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" className="w-full h-full" alt="logo"/>
                </div>
                <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                    <BiSearch className=""/>
                    <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events,Sports and Activities"/>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between gap-3">
                <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white ">Hyderabad<BiChevronDown/></span>
                <button className="text-white text-sm bg-red-600 px-2 py-1 rounded">Sign In</button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

const Navbar = () =>{
    return(<>
        <nav className="bg-bms-700 p-4">
            <div className="md:hidden">{/*Mobile devices */ }<NavSM/></div>
            <div className="hidden md:flex lg:hidden">{/*Medium screens */ }<NavMd/></div>
            <div className="hidden lg:flex">{/*Large screens */ }<NavLg/></div>
        </nav>
    </>
    )
}

export default Navbar;