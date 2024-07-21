"use client"
import Feed from '@/components/Feed';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Note {
  id: string;
  content: string;
}

export default function Home() {
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

  // Function for adding notes
  const addNote = (content: string) => {
    const newNote = {
      id: uuidv4(),
      content,
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  // Function for deleting notes
  const deleteNote = (id: string) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <main className="min-h-screen flex justify-center md:p-24 p-6 bg-cover bg-[url('/Background.png')]">
      <div className="flex flex-col items-center w-full">
        <Header addNote={addNote} />
        <Feed notes={notes} addNote={addNote} deleteNote={deleteNote}/>
      </div>
    </main>
  );
}
