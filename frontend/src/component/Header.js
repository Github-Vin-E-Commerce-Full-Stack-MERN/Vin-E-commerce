import React from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import {toast} from 'react-toastify';
import {setUserDetails} from '../store/userSlice';

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include',
    })

    const dataApi = await fetchData.json()

    if (dataApi.success) {
      toast.success(dataApi.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if (dataApi.error) {
      toast.error(dataApi.message)
    }

  }

  return (
    <header className="header shadow-md w-full h-16 px-2 md:px-4 bg-[#0f172ad0]">
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="">
            <Logo w={40} h={40} />
          </div>
        </Link>

        {/* Centered  */}
        <div className="hidden md:flex items-center text-white flex-grow justify-center">
          <input
            type="text"
            placeholder="Enter Product"
            className="p-2 pl-3 rounded-l-full w-98 md:w-80 lg:w-95 text-black"
          />
          <div className="text-2xl min-w-[60px] p-2 bg-white text-black rounded-r-full">
            <CiSearch />
          </div>
        </div>

        <div className="flex items-center text-white gap-5 md:gap-7">
          <div>
            <Link to={""}>Home</Link>
          </div>

          <div className="text-3xl text-slate-white relative cursor-pointer">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white w-5 p-1 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-xs m-0">0</p>
            </div>
          </div>

          <div className="text-3xl text-slate-white cursor-pointer">
          {
            user?.profilePic ? (<img src={user?.profilePic} className="w-10 h-10 rounded-full" alt={user?.name}></img>) : (<PiUserCircleFill />)
          }
            
          </div>

          <div>
          {
            user?._id ? (
              <button onClick={handleLogout} className="text-xl px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-800">Log Out</button>
            ) : (
              <Link to={"/login"} className="text-xl px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-800">Login</Link>
            )
          }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
