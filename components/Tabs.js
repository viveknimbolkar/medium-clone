import React, { useState } from 'react';

function Home() {
  return <>HOme</>

}

function About() {
  return <>
    {/* <div className='bg-gray-100 text-center p-10 px-18'>
      <h1 className='font-bold text-lg'>Tell the world about yourself</h1>
      <p className='my-2 text-sm'>
        Here’s where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.
      </p>
      <button className='border-[1px] px-3 py-1 my-2 border-black rounded-full'>Get Started</button>
    </div> */}
    <div>
      <textarea rows={6} className='border-none focus:outline-none w-full' placeholder='Write something about you...'></textarea>

      <button className='border-2 px-4 py-2 hover:bg-gray-800 bg-black text-white rounded-full text-sm mr-3 w-24'>Save</button>
      <button className='border-2 px-4 py-2 w-24 rounded-full text-sm'>Cancel</button>

    </div>
  </>

}

function Tabs() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <div className='flex gap-4 my-5'>
        <h5 className={`cursor-pointer ${activeTab === 'home' ? 'border-b' : ""} border-black`} onClick={() => setActiveTab('home')}>Home</h5>
        <h5 className={`cursor-pointer ${activeTab === 'about' ? 'border-b' : ""} border-black`} onClick={() => setActiveTab('about')}>About</h5>
      </div>
      {activeTab === 'home' ? <Home /> : <About />}
    </>
  )
}

export default Tabs