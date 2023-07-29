import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import PrivateHeader from '@/components/header/PrivateHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import Tabs from '@/components/Tabs';
import Image from 'next/image';
import UserProfileImage from '../../public/user.png'
import RootLayout from '@/components/RootLayout';

function MoreOptions({ menuRef, isMenuActive, setIsMenuActive }) {

  return <div className='p-2' ref={menuRef}>
    <FontAwesomeIcon onClick={() => setIsMenuActive(!isMenuActive)} className='p-1 cursor-pointer' icon={faEllipsis} />
    {
      isMenuActive && (<ul className='absolute bg-white p-2 rounded-sm shadow-md text-sm text-gray-500'>
        <li className='hover:text-black py-1 cursor-pointer'>Copy link to profile</li>
        <li className='hover:text-black py-1 cursor-pointer'>Design your profile</li>
      </ul>)
    }
  </div>
}

function UserProfile() {
  return <div className='px-2'>
    <Image className='mt-10' src={UserProfileImage} width={100} height={100} />
    <h1 className='my-5 text-2xl'>Vivek Nimbolkar</h1>
    <Link href={"/me/settings/account"} className='text-green-700'>Edit Profile</Link></div>
}

function HomeTab() {
  return <>Home</>

}

function AboutTab() {
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

function Profile() {
  const menuRef = useRef(null);
  const [isMenuActive, setIsMenuActive] = useState(false)
  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target))
      setIsMenuActive(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () =>
      document.removeEventListener('click', handleOutsideClick)
  }, [])


  return (
    <>
      <PrivateHeader />
      <RootLayout tabs={[{ label: "Home", children: <HomeTab /> }, { label: "About", children: <AboutTab /> },]} header={'Vivek Nimbolkar'} actionComponent={<MoreOptions isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} menuRef={menuRef} />} rightSideBar={<UserProfile />} />
      {/* <div className='flex px-32'>
        <div className='flex w-full'>
          <div className='p-10 w-full'>
            <div className='flex justify-between items-center w-full'>
              <h1 className='text-[50px] font-medium'>Vivek Nimbolkar</h1>
              <div className='p-2' ref={menuRef}>
                <FontAwesomeIcon onClick={() => setIsMenuActive(!isMenuActive)} className='p-1 cursor-pointer' icon={faEllipsis} />
                {
                  isMenuActive && (<ul className='absolute bg-white p-2 rounded-sm shadow-md text-sm text-gray-500'>
                    <li className='hover:text-black py-1 cursor-pointer'>Copy link to profile</li>
                    <li className='hover:text-black py-1 cursor-pointer'>Design your profile</li>
                  </ul>)
                }
              </div>
            </div>
            <Tabs />
          </div>
          <div className='w-96'>
            <Image className='mt-10' src={UserProfileImage} width={100} height={100} />
            <h1 className='my-5 text-2xl'>Vivek Nimbolkar</h1>
            <Link href={"/profile"} className='text-green-700'>Edit Profile</Link>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Profile