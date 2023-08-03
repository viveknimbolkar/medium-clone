import PrivateHeader from '@/components/header/PrivateHeader';
import React from 'react'

function NewStory() {
    return <>
        <PrivateHeader hasNewStory={true} />
        <section className='mx-auto w-[80vw]'>
            <textarea rows={20} className='rounded-lg p-3 border-2 w-full  focus:outline-none' placeholder='Write your story...'></textarea>
        </section>
    </>;
}

export default NewStory