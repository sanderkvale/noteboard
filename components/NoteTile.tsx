import React from 'react'
import { HiUserAdd } from "react-icons/hi";
import { SlTrash } from "react-icons/sl";
import { PiPushPinThin } from "react-icons/pi";

const NoteTile = ({ note }: {note: any;}) => {
    return (
        <div className='w-full py-6 group grid grid-cols-8 max-w-screen-lg'>
            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 col col-span-1 flex items-center justify-center'>
                < PiPushPinThin size={40} color='#cccccc' />
            </div>
            <div className='col col-span-6'>
                <p className='text-3xl text-[#8d8d8d] mb-3 font-semibold'>{note.content}</p>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <HiUserAdd size={30} color='#cccccc' />
                        <p className='text-[#cccccc]'>Firstname Lastname</p>
                    </div>
                    <div>
                        <p className='text-[#cccccc]'>2 mins ago</p>
                    </div>
                </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 col col-span-1 flex items-center justify-center">
                <SlTrash size={40} color="red" />
            </div>


        </div>
    )
}

export default NoteTile
