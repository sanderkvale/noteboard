import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <div className="max-w-screen-md flex justify-between w-full">
                <h1 className="text-4xl font-semibold text-[#4b4b4b]">Notes</h1>
                <FaPlusCircle size={50} color={"#61eb6e"} />
            </div>
        </div>
    )
}

export default Header
