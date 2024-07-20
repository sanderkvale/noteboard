import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
  return (
    <div className='w-full flex items-center gap-5 '>
        <LiaSearchSolid size={40} color='#cccccc'/>
        <p className='text-2xl text-[#cccccc]'>Search through your Notes</p>
    </div>
  )
}

export default SearchBar
