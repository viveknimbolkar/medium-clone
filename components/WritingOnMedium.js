import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function WritingOnMedium() {
    return (
        <div className='rounded w-full bg-blue-200 p-4'>
            <div className='flex justify-between mb-3'>
                <h1 className='font-bold'>Writing on Medium</h1>
                <FontAwesomeIcon icon={faTimes} className='cursor-pointer' />
            </div>
            <h1 className='font-medium'>New writer FAQ</h1>
            <h1 className='font-medium'>Expert writing advice</h1>
            <h1 className='font-medium'>Grow your readership</h1>
            <button className='mt-3 rounded-full text-white px-3 text-sm py-1 bg-black'>Start writing</button>
        </div>
    )
}

export default WritingOnMedium