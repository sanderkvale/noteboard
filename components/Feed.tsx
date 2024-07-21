"use client";
import React, { useState } from 'react';
import NoteTile from './NoteTile';
import SearchBar from './SearchBar';
import { FaPlusCircle } from 'react-icons/fa';
import AddNote from './AddNote';

interface Note {
  id: string;
  content: string;
}

interface FeedProps {
  notes: Note[];
  addNote: (content: string) => void;
  deleteNote: (id: string) => void;
}

const Feed = ({ notes, addNote, deleteNote }: FeedProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='w-full gap-10 flex flex-col items-center'>
      <SearchBar />
      {notes.length === 0 ? (
        <div className='w-full group grid grid-cols-8 max-w-screen-lg'>
        <div className='col col-span-1'>
        </div>
        <div className='col col-span-6 w-full'>
        <div className='flex flex-col w-full'>
          <p className='text-2xl text-[#8d8d8d] mb-3'>Add your first note.</p>
          <button onClick={openModal}>
            <FaPlusCircle size={50} color="#61eb6e" />
          </button>
          {isModalOpen && (
                <AddNote 
                    closeModal={closeModal} 
                    addNote={addNote}
                />
            )}
        </div>
        </div>
        <div className='col col-span-1'></div>
      </div>
        

      ) : (
        notes.map(note => (
          <NoteTile key={note.id} note={note} deleteNote={deleteNote} />
        ))
      )}
    </div>
  )
}

export default Feed;
