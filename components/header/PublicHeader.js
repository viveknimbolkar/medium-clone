import React from 'react'
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function PublicHeader() {
    return (
        <header className={`border-b-[1px] bg-yellow-500 border-black w-full flex justify-between px-5 py-5`}>
            <div className='flex gap-4'>
                <svg width={50} viewBox="0 0 1043.63 592.71" class="q r"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
                <h1>Medium</h1>
            </div>
            <ul className='flex gap-5 items-center text-sm'>
                <li><Link href={"/about"}> Our Story </Link> </li>
                <li><Link href={"/membership"}>Membership</Link></li>
                <li><Link href={"/write"}>Write</Link></li>
                <li><Link href={"/signin"}>Sign In</Link></li>
                <li><button className='bg-black text-white p-2 px-4 text-xs rounded-full border-none hover:bg-slate-800'>Get Started</button></li>
            </ul>
        </header>
    )
}

export default PublicHeader