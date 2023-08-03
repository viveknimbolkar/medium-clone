import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex items-center justify-center gap-4 text-gray-500 py-4 text-sm border-t-2'>
        <Link className='hover:text-black' href={"/"}>Help</Link>
        <Link className='hover:text-black' href={"/"}>Status</Link>
        <Link className='hover:text-black' href={"/"}>Writers</Link>
        <Link className='hover:text-black' href={"/"}>Blog</Link>
        <Link className='hover:text-black' href={"/"}>Careers</Link>
        <Link className='hover:text-black' href={"/"}>Privacy</Link>
        <Link className='hover:text-black' href={"/"}>Terms</Link>
        <Link className='hover:text-black' href={"/"}>Teams</Link>
        <Link className='hover:text-black' href={"/"}>Text to speech</Link>
        <Link className='hover:text-black' href={"/"}>About</Link>
    
    </footer>
  )
}

export default Footer