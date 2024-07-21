"use client"
import React, { useEffect, useState } from 'react';
import NoteTile from './NoteTile';
import { v4 as uuidv4 } from 'uuid';

interface Note {
  id: string;
  content: string;
}

const Feed = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  // Retrieve notes from local storage when the component mounts
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (content: string) => {
    const newNote = {
      id: uuidv4(),
      content,
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
    console.log('Added note:', newNote); // Debug log
  };

  // Example usage of addNote
  useEffect(() => {
    addNote('My first sample note');
    addNote('My second sample note');
  }, []);

  return (
    <div className='w-full gap-10 flex flex-col items-center'>
      {notes.length === 0 ? (
        <p>No notes found</p>
      ) : (
        notes.map(note => (
          <NoteTile key={note.id} note={note} />
        ))
      )}
    </div>
  );
}

export default Feed;
