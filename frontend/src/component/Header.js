import React from 'react';
import logo from '../assest/logo.png';
import { Link } from 'react-router-dom';
import { PiUserCircleFill } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from 'react-icons/ci';

const Header = () => {
  return (
    <header className='header shadow-md w-full h-16 px-2 md:px-4 bg-[#0f172a]'>
      <div className='flex items-center h-full justify-between'>
        <Link to={""}>
          {/* Conditionally render logo based on screen size */}
          <div className='h-16 md:h-20 hidden md:block'>
            <img src={logo} className="h-full" alt="Logo" />
          </div>
        </Link>

        <div className='flex items-center text-white flex-grow'>
          <input
            type='text'
            placeholder='Enter Product'
            className='p-2 rounded-l-full w-full md:w-80 lg:w-96'
          />
          <div className='text-2xl min-w-[60px] p-2 bg-white text-black rounded-r-full'>
            <CiSearch />
          </div>
        </div>

        <div className='flex items-center text-white gap-5 md:gap-7'>
          <div><Link to={""}>Home</Link></div>

          <div className='text-3xl text-slate-white w-13'>
            <IoCartOutline />
          </div>

          <div className='text-3xl text-slate-white'>
            <PiUserCircleFill />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
