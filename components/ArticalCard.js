import React from 'react'
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faEllipsisVertical, faSave, faTag } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
function ArticalCard({ profileImage, categoryLink, thumbnail, link, heading, date, shortDescription, onSave, authorName, category, timeToRead }) {
    return (
        <Link href={link} className='w-full p-4'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-3'>
                    <Image src={profileImage} width={28} height={28} className='rounde-full' />
                    <h1 className='t'>{authorName}</h1>
                </div>
                <date className={"text-gray-500 text-sm"}>{date}</date>
            </div>
            <div className='flex my-3 gap-2'>
                <div>
                    <h1 className='font-bold text-2xl'>{heading}</h1>
                    <p className='text-gray-700 text-sm'>
                        {shortDescription}
                    </p>
                    <div className='flex text-sm justify-between items-center mr-4 mt-4'>
                        <div className='flex items-center gap-2'> <Link href={categoryLink} className='rounded-full bg-gray-100 px-3 py-1 '>{category}</Link>
                            <span>{timeToRead}</span></div>
                        <div className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faBookmark} size='lg' />
                            <FontAwesomeIcon icon={faEllipsis} size='lg' />
                        </div>
                    </div>
                </div>
                <Image src={thumbnail} />

            </div>

        </Link>
    )
}

export default ArticalCard