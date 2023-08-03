import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
function ConnectOnTwitter() {
    return <div className='text-center p-3'>
        <div className='flex my-3'>
            <FontAwesomeIcon icon={faTwitter} />
        </div>
        <p className='my-2 text-sm'>Discover Medium writers you already follow on Twitter.</p>
        <button className='my-2 bg-white border-[1px] border-black rounded-full px-4 py-2'>Connect to Twitter</button>
        <p className='my-2 underline text-xs text-gray-400 cursor-pointer'>Maybe Later</p>
    </div>;

}

export default ConnectOnTwitter