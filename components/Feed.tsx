import React from 'react'
import NoteTile from './NoteTile'

const Feed = () => {
  return (
    <div className='w-full gap-10 flex flex-col items-center'>
        <NoteTile />
        <NoteTile />
        <NoteTile />
    </div>
  )
}

export default Feed
