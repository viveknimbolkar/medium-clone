import React, { useState } from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import headercss from './PrivateHeader.module.scss'
import UserMenu from '../userMenu'
import BecomePro from '../promember/becomePro';
import Link from 'next/link'
function PrivateHeader({ hasNewStory = false, onPublish }) {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  return (<>
    <header className={`${headercss.mainHeader} w-full flex justify-between px-5 py-3`}>
      <div className='flex gap-4'>
        <svg width={50} viewBox="0 0 1043.63 592.71" class="q r"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
        <div className='flex items-center bg-slate-100 rounded-full gap-2 p-2'>
          <FontAwesomeIcon icon={faSearch} className='text-slate-500' />
          <input className='px-2 bg-slate-100 rounded-full focus:outline-0 text-sm' type='text' placeholder='Search Medium' />
        </div>
      </div>
      <div className='flex gap-5 items-center'>
        {hasNewStory && <button onClick={onPublish} className='rounded-full text-white bg-green-800 text-sm p-2 px-3' >Publish</button>}
        {!hasNewStory && <Link href={"/new-story"}>
          <FontAwesomeIcon icon={faPenSquare} className='fa-xl hover:cursor-pointer' /> <label className='hover:cursor-pointer'>Write</label>
        </Link>}
        <FontAwesomeIcon icon={faBell} className='fa-xl hover:cursor-pointer' />
        <FontAwesomeIcon onClick={() => setIsUserMenuVisible(!isUserMenuVisible)} icon={faUser} className='fa-xl hover:cursor-pointer' />
        {isUserMenuVisible && <UserMenu />}
      </div>
    </header>
    <BecomePro />
  </>
  )
}

export default PrivateHeader