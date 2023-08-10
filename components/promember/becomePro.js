import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function BecomePro() {
    return (
        <div className='bg-gray-100 w-full text-center py-2'>
            <FontAwesomeIcon icon={faStar} color='yellow'/> &nbsp;
            Get unlimited access to all of Medium for less than $1/week. &nbsp;
            <Link href={"/home"} className='underline'>
                Become a member
            </Link>
        </div>
    )
}

export default BecomePro