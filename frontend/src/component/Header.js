import React from 'react'
import logo from '../assest/logo.png'
import { Link } from 'react-router-dom'
import { PiUserCircleFill } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <header className='fixed shadow-md w-full h-16px px-2 md:px4 bg-[#0f172a]'>
      {/* desktop */}
      <div className='flex items center h-full justify-between '>
        <Link to={""}>
          <div className='h-20 '>
            <img src={logo} className="h-full" />
          </div>
        </Link>

        <div className='flex items-center text-white gap-5 md:gap-7'>
          <nav className='flex gap-4 md:gap-7 text-base md:text-lg'>
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>

          </nav>
          <div className='text-3xl text-slate-white'>
            <IoCartOutline />
          </div>
          <div className='text-3xl text-slate-white'>
            <PiUserCircleFill />
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  )
}

export default Header