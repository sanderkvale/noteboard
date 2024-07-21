"use client"
import React, { useState } from 'react';

interface AddNoteProps {
    closeModal: () => void;
    addNote: (content: string) => void;
}

const AddNote = ({ closeModal, addNote }: AddNoteProps) => {
    const [note, setNote] = useState<string>('');

    const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    };

    const handleSubmit = () => {
        if (note.trim()) {
            addNote(note);
            setNote('');
            closeModal();
        } else {
            alert("Note content cannot be empty.");
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission if inside a form
            handleSubmit();
        }
    };

    return (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-10 overflow-auto backdrop-blur flex justify-center items-center" open>
            <div className="bg-white p-6 rounded-lg w-[50%]">
                <div className="flex flex-col">
                    <h3 className='text-2xl font-semibold'>Add New Note</h3>
                    <br />
                    <input
                        type="text"
                        value={note}
                        onChange={handleNoteChange}
                        onKeyDown={handleKeyDown} 
                        className="border p-2 mb-4 w-full rounded"
                        placeholder="Enter your note here"
                    />
                    <div className="flex justify-between w-full mt-3">
                        <button
                            type="button"
                            className="bg-[#61eb6e] text-white font-semibold p-2 rounded"
                            onClick={handleSubmit}
                        >
                            Add Note
                        </button>
                        <button
                            type="button"
                            className="bg-red-500 text-white p-2 rounded font-semibold"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    );
}

export default AddNote;
