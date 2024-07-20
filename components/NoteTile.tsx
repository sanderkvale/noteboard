import React from 'react'
import { HiUserAdd } from "react-icons/hi";
import { SlTrash } from "react-icons/sl";

const NoteTile = () => {
    return (
        <div className='w-full py-6'>
            <p className='text-3xl text-[#8d8d8d] mb-3'>Always Look on the Bright Side of Life</p>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <HiUserAdd size={30} color='#cccccc' />
                    <p className='text-[#cccccc]'>Author</p>
                </div>
                <div>
                    <p className='text-[#cccccc]'>2 mins ago</p>
                </div>
            </div>
        </div>
    )
}

export default NoteTile
