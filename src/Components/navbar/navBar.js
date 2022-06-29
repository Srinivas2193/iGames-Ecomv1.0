import React,{useState} from 'react'
import GameLogo from "../../assets/logoes/fire.jpg";
import navBGIMG from "../../assets/backGround/Fire-Background.jpg";
import "./navBar.css";
import { Link } from 'react-router-dom';

export default function NavBar(props) {

  return (
    <>
   {/* This example requires Tailwind CSS v2.0+ */}
<nav className="text-black border-b-2 bg-white-800" style={{height:"56px",marginBottom:"0rem"}}>
  <img className='navBGImg1'  src={navBGIMG} alt="navBGImg1" />
  <img className='navBGImg2'  src={navBGIMG} alt="navBGImg2" />
  <img className='navBGImg3'  src={navBGIMG} alt="navBGImg3" />
  <div className="z-10 mx-auto max-w-7xl">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu butto */}
        <button type="button" className="inline-flex items-center justify-center p-2 text-black text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          {/* Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
          <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/* Icon when menu is open.  Heroicon name: outline/x  Menu open: "block", Menu closed: "hidden" */}
          <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
        <Link to='/'>
        <div className="flex items-center flex-shrink-0 rounded-br-xl rounded-tl-xl ">
          <img src={GameLogo} className="absolute w-28 h-9 rounded-tl-2xl rounded-br-2xl" alt="FireGameLogo"/>
          <h2 className='z-50 text-4xl font-black' style={{fontFamily:"Lato, sans-serif",cursor:"pointer"}} title="iGames Logo">
            <span style={{color:"#EC7625"}}>i</span>
            <span style={{color:"#2580dd"}}>Games</span>
          </h2>
        </div>
        </Link>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            {/* Current: "bg-white-900 text-black", Default: " text-black" */}
            <Link to='/' className="py-2 text-base font-medium text-white rounded-md " aria-current="page" title="Home" onClick={()=>props.callProgressBar()}>Home</Link>
            <Link to='/products' className="py-2 text-base font-medium text-white rounded-md " title="Product" onClick={()=>props.callProgressBar()}>Products</Link>
            <Link to='/about' className="py-2 text-base font-medium text-white rounded-md " title="About"   onClick={()=>props.callProgressBar()}>About</Link>
            <Link to='/contact' className="py-2 text-base font-medium text-white rounded-md " title="Contact" onClick={()=>props.callProgressBar()}>Contact</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 text-white sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div>
          <span className='py-2 text-base font-medium text-white rounded-md loginAndReg'>
            {!props.showSigninSignOut && <Link to="/login"  onClick={()=>props.callProgressBar()}>Sign in</Link>}
          </span>
          <span className='py-2 ml-3 text-base font-medium text-white rounded-md loginAndReg'>
            {!props.showSigninSignOut && <Link to="/signup" onClick={()=>props.callProgressBar()}>Signup</Link>}
          </span>
        </div>
        <Link to="/cart" className="p-1 mx-2 text-black text-gray-400 rounded-full navCart bg-white-800" onClick={()=>props.callProgressBar()}>
          <i className="text-white scale-150 fa fa-shopping-cart" aria-hidden="true"></i><sup className='w-3 px-1 font-bold text-white rounded-full text-1xl' style={{top:"-0.7rem"}}>{props.cartItems.length}</sup>
        </Link>

        {/* Profile icon dropdown */}
        <div className="relative mx-2">
          <div>
            <button type="button" className={`${props.userMenuButton?"block":"hidden"} w-8 h-8 text-sm border rounded-full bg-white-800`} id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => props.setIsOpen(true)}>
                <i style={{fontSize:"1.8em"}} className="text-white fa fa-user fa-lg" aria-hidden="true"></i>
            </button>
          </div>

          {/* Dropdown menu, show/hide based on menu state. Entering: "transition ease-out duration-100"From: "transform opacity-0 scale-95"To: "transform opacity-100 scale-100"Leaving: "transition ease-in duration-75"From: "transform opacity-100 scale-100"To: "transform opacity-0 scale-95" */}
          {/* <div className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> */}
            {/* Active: "bg-white-100", Not Active: "" */}
            {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  </div>

</nav>
<hr/>
    </>
  )
}
