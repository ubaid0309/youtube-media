import React, { useState } from 'react'
import LOGO from "../assets/logo.PNG"
import {FaSearch } from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {

  const [searchValue , setSearchValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if(searchValue){
      navigate(`/search/${searchValue}`);
    }
  }
  return (
    <div className='navbar bg-black flex justify-between items-center'>
      
      
      <div className='logo'>
        <Link to={"/"} ><img className='w-4/5' src={LOGO} alt="youtube-logo" /></Link>
      </div>

      <form className='search-container flex items-center p-4' onSubmit={handleSubmit}>
        <input  
        className='bg-black outline-none border border-[#393030] px-4 py-2 rounded-l-full text-gray-400 text-lg w-4/5'
        type="text"
        placeholder='Search' 
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}/>

        <button className='bg-[#383636]  rounded-r-full py-[14px] px-3'><FaSearch  className='text-white text-lg'/></button>
        
      </form>
    </div>
  )
}

export default Navbar