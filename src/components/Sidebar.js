import React, { useState } from 'react'
import { categories } from '../utils/constant'
const Sidebar = ({selectedCategory , setSelectedCategory}) => {

  
  return (
    <div className='categories lg:fixed px-2 border-r border-[#343232] flex flex-row text-xl  lg:flex-col overflow-scroll md:overflow-hidden gap-4 '>
      {categories.map((category , index)=>(
        <button
        key={index}
        className={ `${category.name === selectedCategory && "bg-[#F71B0B]"} flex   gap-2 rounded-full px-2 py-2 items-center hover:bg-[#F71B0B] group `}
        onClick={()=>setSelectedCategory(category.name)}
        >
          <span className={`${category.name === selectedCategory ? "text-white" : "text-[#F71B0B]" } group-hover:text-white `}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}

export default Sidebar