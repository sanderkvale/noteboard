import React from 'react'
import { HiUserAdd } from "react-icons/hi";
import { SlTrash } from "react-icons/sl";

const NoteTile = () => {
    return (
        <div className='w-full py-6 group grid grid-cols-6'>
            <div className='col col-span-5'>
                <p className='text-3xl text-[#8d8d8d] mb-3 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                {/* Box 1 */}
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <HiUserAdd size={30} color='#cccccc' />
                        <p className='text-[#cccccc]'>Firstname Lastname</p>
                    </div>
                    <div>
                        <p className='text-[#cccccc]'>2 mins ago</p>
                    </div>
                </div>
                {/* Box 2 */}
            </div>
            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 col col-span-1'>
                <SlTrash size={40} color='red' />
            </div>


        </div>
    )
}

export default NoteTile
