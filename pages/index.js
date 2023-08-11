import React, { useContext, useState } from 'react'
import PublicHeader from '@/components/header/PublicHeader'
import AuthContext from '@/components/context'
import PrivateHeader from '@/components/header/PrivateHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ArticalCard from '@/components/ArticalCard';
import UserImage from '../public/user.png'
import SunImage from '../public/sun.jpg'
import WritingOnMedium from '@/components/WritingOnMedium';
import ConnectOnTwitter from '@/components/ConnectOnTwitter';
import RecommendedTopics from '@/components/RecommendedTopics';
import Footer from '@/components/Footer';
import { sliceString } from '@/utils/sliceString';
export default function Home({ articles }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("for-you");
  const tabs = [
    { label: "For you", slug: "for-you" },
    { label: "Following", slug: "following" },
    { label: "Food", slug: "food" },
    { label: "Health", slug: "health" },
    { label: "Family", slug: "family" },
  ]
  return (
    <>
      {isLoggedIn ? (<><PrivateHeader /> <section className='flex px-28'>
        <div className='w-full'>
          <div className='flex items-center px-2'>
            <FontAwesomeIcon icon={faPlus} />&nbsp;
            {tabs.map(item => {
              return <h5 onClick={() => setActiveTab(item.slug)} className={`p-2 cursor-pointer border-b-2 ${activeTab === item.slug ? 'border-black' : 'border-gray-300 text-gray-500'} `}>{item.label}</h5>
            })}
          </div>
          <div>
            <ArticalCard link={"/blog/i-am-a-bad-software-developer"} categoryLink={"/account"} date={"Nov, 7 2022"} thumbnail={SunImage} profileImage={UserImage} authorName={"Vivek Nimbolkar"} heading={"I am a bad software developer and this is my life"} shortDescription={"What is next? Over the past four months, I have been focusing on self-discovery. This journey began seven months ago when I was employed at a job that didn’t make me happy, but I couldn’t pinpoint why. "} category={"Programming"} timeToRead={"4 min read"} onSave={(e) => { console.log(e); }} />

            {articles && articles.articles.map((article, i) => {
              console.log(article);
              return <ArticalCard key={article._id} link={article.link} categoryLink={article.categoryLink} date={article.date} thumbnail={article.thumbnail} profileImage={article.profileImage} authorName={article.authorName} heading={article.heading} shortDescription={sliceString(article.article)} category={article.category} timeToRead={article.timeToRead} onSave={(e) => { console.log(e); }} />
            })}

          </div>
        </div>
        <div className='w-96 p-2'>
          <WritingOnMedium />
          <ConnectOnTwitter />
          <RecommendedTopics topics={[{ label: "Programming", link: "https://google.com" }, { label: "Programming Backend", link: "https://google.com" }, { label: "Progamming", link: "https://google.com" }, { label: "Proming", link: "https://google.com" }]} />
        </div>
      </section> </>) : <><PublicHeader /><section className='flex h-[70vh] bg-yellow-400 border-b border-black pl-[100px]'>
        <div className='flex flex-col justify-center gap-5'>
          <h1 className='font-bold text-8xl font-serif'>Stay curious.</h1>
          <p className='text-2xl w-2/3'>Discover stories, like, thinking & experties from writers on any topics.</p>
          <button className='bg-slate-950 hover:bg-black text-white w-44 font-bold text-white p-2 rounded-full '>Start reading</button>
        </div>
        <div>

        </div>
      </section>
        <Footer />
      </>}

    </>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`http://localhost:3000/api/article/all-articles`);
  const articles = await response.json();

  return {
    props: {
      articles
    }
  }

}