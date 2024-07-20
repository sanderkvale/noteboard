import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
  return (
    <div className='w-full flex items-center gap-5'>
      <LiaSearchSolid size={40} color='#cccccc'/>
      <input
        type="text"
        placeholder="Search through your Notes"
        className='flex-1 py-2 px-4 border-b border-gray-300 bg-transparent focus:outline-none'
      />
    </div>
  )
}

export default SearchBar
