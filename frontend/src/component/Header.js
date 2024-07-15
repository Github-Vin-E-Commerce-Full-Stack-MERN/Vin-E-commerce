import React from 'react';
import logo from '../assest/logo.png';
import { Link } from 'react-router-dom';
import { PiUserCircleFill } from "react-icons/pi";
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='header shadow-md w-full h-16 px-2 md:px-4 bg-[#0f172a]'>
      <div className='flex items-center h-full justify-between'>
        <Link to={""}>
          <div className='h-16 md:h-20 hidden md:block'>
            <img src={logo} className="h-full" alt="Logo" />
          </div>
        </Link>

        {/* Centered search input */}
        <div className='flex items-center text-white flex-grow justify-center'>
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

          <div className='text-3xl text-slate-white w-13 relative flex items-center'>
            <span className="mr-1"><FaShoppingCart /></span>
            <div className='bg-red-600 text-white w-5 p-1 h-5 rounded-full flex items-center justify-center'>
              <p className='text-xs m-0'>0</p>
            </div>
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
