"use client"
import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import AddNote from './AddNote';

interface HeaderProps {
    addNote: (content: string) => void;
}

const Header = ({ addNote }: HeaderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="w-full py-6 group grid grid-cols-8 max-w-screen-lg">
            <div className='col col-span-1'></div>
            <div className='col col-span-6'>
                <div className='flex justify-between'>
                    <h1 className="text-4xl font-semibold text-gray-700">Notes</h1>
                    <button onClick={openModal}>
                        <FaPlusCircle size={50} color="#61eb6e" />
                    </button>
                </div>
            </div>
            <div className='col col-span-1'></div>
            {isModalOpen && (
                <AddNote 
                    closeModal={closeModal} 
                    addNote={addNote}
                />
            )}
        </div>
    )
}

export default Header;
