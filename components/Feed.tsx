"use client";
import React from 'react';
import NoteTile from './NoteTile';
import SearchBar from './SearchBar';

interface Note {
  id: string;
  content: string;
}

interface FeedProps {
  notes: Note[];
}

const Feed = ({ notes }: FeedProps) => (
  <div className='w-full gap-10 flex flex-col items-center'>
    <SearchBar />
    {notes.length === 0 ? (
      <p>No notes found</p>
    ) : (
      notes.map(note => (
        <NoteTile key={note.id} note={note} />
      ))
    )}
  </div>
);

export default Feed;
