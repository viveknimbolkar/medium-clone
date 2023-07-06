import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import NotFoundImage from '../public/notfound.jpg'
import notFoundCss from "./notFound.module.css"
function NotFound() {
    return (
        <>
            <Head>
                <title>Not Found - Medium</title>
            </Head>
            <div className='flex h-screen items-center'>
                <div>
                    <Image src={NotFoundImage} width={700}></Image>
                </div>
                <div >
                    <h6>PAGE NOT FOUND</h6>
                    <h1 className={`${notFoundCss.mainHeading} font-bold text-slate-400`}>404</h1>
                    <h1 className={`${notFoundCss.subHeading} w-44`}>Out of nothing, something.</h1>
                    <p className='w-96'>You can find (just about) anything on Medium — apparently even a page that doesn’t exist. Maybe these stories about finding what you didn’t know you were looking for will take you somewhere new?</p>
                    <Link href={"/"}>Home</Link>
                </div>
            </div>
        </>
    )
}

export default NotFound