import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Image from 'next/image'
import BlogImage from '../../public/blogimage.webp'
import UserImage from '../../public/user.png'
import BlogThumbnail from '../../public/thumbnail.png'
import PrivateHeader from '@/components/header/PrivateHeader';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCircle, faCirclePlay, faComment, faEnvelope, faShareFromSquare, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import ArticalCardVertical from '@/components/ArticalCardVertical'
import Article1 from '../../public/women-money.jpg'
import Article2 from '../../public/women-grid.png'
import { calculateTimeToRead } from '@/utils/calculateTimeToRead'

export default function Blog({ articles }) {
  const router = useRouter();

if(articles.status === 404){
  router.push("/");
  return;
}

  const [follow, setFollow] = useState(false);
  const { article } = articles;
  const publishDate = new Date(Number(article.date)).toString().split(" ");

  function ActionBar() {
    return <> <div className='my-6 flex justify-between items-center duration-300 text-gray-500 p-2'>
      <div className='flex gap-6'>
        <FontAwesomeIcon className='hover:text-black cursor-pointer' icon={faThumbsUp} />
        <FontAwesomeIcon className='hover:text-black cursor-pointer' icon={faComment} />
      </div>
      <div className='flex gap-6'>
        <FontAwesomeIcon className='hover:text-black cursor-pointer' icon={faBookmark} />
        <FontAwesomeIcon className='hover:text-black cursor-pointer' icon={faCirclePlay} />
        <FontAwesomeIcon className='hover:text-black cursor-pointer' icon={faShareFromSquare} />
        <FontAwesomeIcon className='hover:text-black cursor-pointer' icon={faEllipsis} />
      </div>
    </div></>
  }
  function AuthorCard() {
    return <div className='p-1 py-4'>
      <div>
        <Image src={UserImage} width={50} height={50} />
      </div>
      <div className='flex justify-between'>
        <h1 className='font-medium text-gray-900 text-2xl'><strong>Written by The Capital Platform</strong></h1>
        <div>
          <button className='rounded-full bg-slate-700 text-white px-3 py-2 mr-2 text-sm '>Follow</button>
          <span className='bg-slate-700 rounded-full text-white px-3 py-2 text-center  text-sm '><FontAwesomeIcon icon={faEnvelope} /></span>
        </div>
      </div>
      <div className='text-sm'>
        <label>4.5K Followers</label> &middot; Editor for &nbsp;
        <Link href={"/"} className='hover:underline'>The Capital Platform</Link>
      </div>
      <span className='text-sm'>A social networking platform that turns creators into entrepreneurs.</span>
    </div>
  }

  return <>
    <PrivateHeader />
    <section className='w-1/2 mx-auto mt-4'>
      <Image alt='Article Thumbnail' src={article?.thumbnail ? article.thumbnail : BlogThumbnail} className='w-full' />
      <h1 className='font-bold text-4xl text-slate-950 my-4'>{article?.heading ? article.heading : <>No Title</>}</h1>
      <div className='flex items-center gap-3 my-4'>
        <Image src={UserImage} width={50} height={50} />
        <div className='text-sm'>
          <div className='flex gap-3'>
            <Link href={"/"} className='hover:underline'>
              <strong>{article.authorName}</strong>
            </Link>
            &middot;
            <button className='text-gray-500' onClick={e => { setFollow(!follow) }}>{follow ? "Follow" : "Following"}</button>
          </div>
          <div className='flex gap-4'>
            <p>Published in  <Link href={"/"} className='hover:underline'>
              The Capital Platform
            </Link></p>&middot;<span>{article.timeToRead}</span>&middot;<date>{`${publishDate[2]}, ${publishDate[1]} ${publishDate[3]}`}</date>
          </div>
        </div>
      </div>
      <ActionBar />
      <div className='my-5'>
        {article?.article ? article.article : <></>}
      </div>
      <div className='flex gap-3'>
        {article && article?.socialLinks?.map((item, i) => {
          console.log(item);
          return <Link target='_blank' key={`link-${i}-${item.label}`} href={item.link} className='underline text-lg'>{item.label}</Link>
        })}

      </div>
      {/* end of article */}
      <div className='flex justify-center items-center gap-3  my-6'>
        <FontAwesomeIcon icon={faCircle} size='sm' />
        <FontAwesomeIcon icon={faCircle} size='sm' />
        <FontAwesomeIcon icon={faCircle} size='sm' />
      </div>
      <div className='text-gray-500'>
        Disclaimer: This article is not intended to be a source of investment, financial, technical, tax, or legal advice. All of this content is for informational purposes only. Readers should do their own research. The Capital is not responsible, directly or indirectly, for any damage or loss caused or alleged to be caused by reliance on any information mentioned in this article.
      </div>
      <div className='flex gap-4 my-6'>
        <Link className={'rounded-full bg-gray-200 px-3 py-2 text-sm'} href={"/"}>topic.label</Link>
      </div>
      <ActionBar />
      <AuthorCard />
      <div class="grid grid-cols-2 gap-3">
        <ArticalCardVertical heading={'I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.'} description={'Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny'} thumbnail={Article1} profileImage={UserImage} username={'username'} />
        <ArticalCardVertical heading={'I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.'} description={'Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny'} thumbnail={Article2} profileImage={UserImage} username={'username'} />
        <ArticalCardVertical heading={'I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.'} description={'Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny'} thumbnail={Article2} profileImage={UserImage} username={'username'} />
        <ArticalCardVertical heading={'I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.'} description={'Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny'} thumbnail={Article1} profileImage={UserImage} username={'username'} />
        <ArticalCardVertical heading={'I Asked ChatGPT How To Earn $1000 Online. It Was Hilarious.'} description={'Peering in the hive mind can be really helpful, but it can also be so stupid it’s funny'} thumbnail={Article2} profileImage={UserImage} username={'username'} />
      </div>
    </section>
  </>
}


export async function getServerSideProps({ query }) {
  const response = await fetch(`http://localhost:3000/api/article/${query.blogid}`);
  const articles = await response.json();
  return {
    props: {
      articles
    }
  }

}