import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex justify-between w-full max-w-screen-md">
            <h1 className="text-4xl font-semibold text-gray-700">Notes</h1>
            <FaPlusCircle size={50} color="#61eb6e" />
        </div>
    )
}

export default Header
