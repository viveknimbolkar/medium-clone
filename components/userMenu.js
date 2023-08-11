import React, { useContext } from 'react'
import Link from 'next/link';
import { faBook, faHistory, faMap, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthContext from './context';
import { useRouter } from 'next/router';

function UserMenu() {
    const { userEmail } = useContext(AuthContext);
    const router = useRouter();
    return (
        <div className='absolute bg-white text-base h-[80vh] right-5 top-14 w-56 overflow-y-auto'>
            <ul className='border-b-2 px-5 text-slate-500'>
                <Link href="/profile/@viveknimbolkar"><li className='py-1 hover:text-black'><FontAwesomeIcon icon={faUser} /> Profile</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'><FontAwesomeIcon icon={faBook} /> Library</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'><FontAwesomeIcon icon={faHistory} /> Story</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'><FontAwesomeIcon icon={faMap} /> State</li></Link>
            </ul>
            <ul cla className='border-b-2 px-5 text-slate-500'>
                <Link href="/"><li className='py-1 hover:text-black'> Settings</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'> Refine Recommendations</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'> Manage Publications</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'> Help</li></Link>
            </ul>
            <ul cla className='border-b-2 px-5 text-slate-500'>
                <Link href="/"><li className='py-1 hover:text-black'> Become a Member</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'> Create Mastadon Account</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'> Apply for authoer verification</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'> Apply to the Partner Program</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'>Get Membership</li></Link>
                <Link href="/"><li className='py-1 hover:text-black' onClick={(e) => { localStorage.removeItem("token"); router.push("/") }}> Sign Out</li></Link>
                <Link href="/"><li className='py-1 hover:text-black'> {userEmail}</li></Link>
            </ul >
        </div >
    )
}

export default UserMenu