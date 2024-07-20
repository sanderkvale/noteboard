import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
  return (
    <div className='w-full py-6 group grid grid-cols-8 max-w-screen-lg'>
      <div className='col col-span-1 flex items-center justify-center'>
        <LiaSearchSolid size={40} color='#cccccc' />
      </div>
      <div className='col col-span-6 w-full'>
        <input
          type="text"
          placeholder="Search through your Notes"
          className='flex-1 py-2 text-2xl border-b border-gray-300 bg-transparent focus:outline-none w-full'
        />
      </div>
      <div className='col col-span-1'></div>
    </div>
  )
}

export default SearchBar
