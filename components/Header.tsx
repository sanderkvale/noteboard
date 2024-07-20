import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div className="w-full py-6 group grid grid-cols-8 max-w-screen-lg">
            <div className='col col-span-1'></div>
            <div className='col col-span-6'>
                <div className='flex justify-between'>
                    <h1 className="text-4xl font-semibold text-gray-700">Notes</h1>
                    <FaPlusCircle size={50} color="#61eb6e" />
                </div>
            </div>
            <div className='col col-span-1'></div>
        </div>
    )
}

export default Header
