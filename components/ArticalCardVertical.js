import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faStar } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

function ArticalCardVertical({ thumbnail, profileImage, username, heading, description, timeToRead, date, likes, totalComments, isSaved }) {
    return (
        <Link href={"/"}>
            <div className='w-full h-44 overflow-hidden object-cover'>
                <Image src={thumbnail} className='' />
            </div>
            <div className='flex gap-2 my-3'>
                <Image src={profileImage} width={25} height={25} />
                <label >{username}</label>
            </div>
            <div className='my-3'>
                <h1><strong className='text-xl text-gray-900'>{heading}</strong></h1>
                <p className='text-gray-400 leading-4 my-3'>{description}</p>
            </div>
            <div className='my-3 flex text-sm items-center gap-2'>
                <FontAwesomeIcon icon={faStar} color='yellow' /> &middot;
                <span>5 min read</span>&middot;
                <date>6, Jul 2023</date>
            </div>
            <div className='my-3 flex justify-between px-3 text-gray-600'>
                <div className='flex gap-3'>
                    <FontAwesomeIcon size='lg cursor-pointer hover:text-black' icon={faThumbsUp} /><label>{likes}</label>
                    <FontAwesomeIcon size='lg cursor-pointer hover:text-black' icon={faComment} /><label>{totalComments}</label>
                </div>
                <div className='flex gap-3'>
                    <FontAwesomeIcon size='lg cursor-pointer hover:text-black' icon={faBookmark} />
                    <FontAwesomeIcon size='lg cursor-pointer hover:text-black' icon={faEllipsis} />
                </div>
            </div>
        </Link>
    )
}

export default ArticalCardVertical