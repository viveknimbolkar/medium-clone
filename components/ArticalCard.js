import React, { useState } from 'react'
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import ArticleCardThumbnail from '../public/article-card.png'
import UserImage from '../public/user.png'
import Link from 'next/link'

function ArticalCard({ profileImage = UserImage, categoryLink, thumbnail = ArticleCardThumbnail, link, heading, date, shortDescription, onSave, authorName, category, timeToRead }) {
    const [showActions, setShowActions] = useState(false)
    const dateObj = new Date(Number(date)).toString().split(" ");
    const parsedDate = `${dateObj[1]}, ${dateObj[2]} ${dateObj[3]}`

    return (
        <div className='w-full p-4 border-b'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-3'>
                    <Image src={profileImage} width={28} height={28} className='rounde-full' />
                    <h1 className='t'>{authorName}</h1>
                </div>
                <date className={"text-gray-500 text-sm"}>{parsedDate}</date>
            </div>
            <div className='flex my-3 w-full justify-between gap-2'>
                <div className='flex flex-col justify-between w-full'>
                    <Link href={`${link}`} className='w-full'>
                        <h1 className='font-bold text-2xl'>{heading}</h1>
                        <p className='text-gray-700 text-sm'>
                            {shortDescription}
                        </p>
                    </Link>
                    <div className='flex text-sm justify-between w-full items-center mr-4 mt-4'>
                        <div className='flex items-center gap-2'>
                            {
                                categoryLink && (<Link href={`${categoryLink}`} className='rounded-full bg-gray-100 px-3 py-1 '>{category}</Link>)
                            }

                            <span>{timeToRead}</span></div>
                        <div className='flex items-center  gap-3 relative'>
                            <FontAwesomeIcon onClick={onSave} icon={faBookmark} size='lg' />
                            <FontAwesomeIcon className='p-2' onClick={() => setShowActions(!showActions)} icon={faEllipsis} size='lg' />
                            {showActions && <ul className='absolute bg-white shadow-md rounded p-2 top-10 w-40'>
                                <Link className='text-gray-500 hover:text-black' href={"/"}>
                                    <li>Mute this author</li>
                                </Link>
                                <Link className='text-gray-500 hover:text-black' href={"/"}>
                                    <li>Report</li>
                                </Link>

                            </ul>}
                        </div>
                    </div>
                </div>
                <Image src={thumbnail} width={150} height={200} />

            </div>

        </div>
    )
}

export default ArticalCard