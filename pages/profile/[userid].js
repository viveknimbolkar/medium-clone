import React from 'react'
import { useRouter } from 'next/router'
import PrivateHeader from '@/components/header/PrivateHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import { Avatar } from 'antd';

function Profile() {
  const router = useRouter();
  console.log(router.query.userid);
  return (
    <>
      <PrivateHeader />
      <div className='flex bg-purple-300 px-32'>
        <div className='flex w-full bg-red-500'>
          <div className='p-10 w-full flex items-center justify-between bg-red-200'>
            <h1 className='text-[50px] font-medium'>Vivek</h1>
            <FontAwesomeIcon className='p-1 cursor-pointer' icon={faEllipsis} />
          </div>
          <div className='w-96 '>
            <Avatar size={64} icon={<FontAwesomeIcon icon={faUser} />} />
            <Link href={"/profile"} className='text-green-400'>Edit Profile</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile