import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Image from 'next/image'
import BlogImage from '../../public/blogimage.webp'
import UserImage from '../../public/user.png'
import PrivateHeader from '@/components/header/PrivateHeader';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCircle, faCirclePlay, faComment, faEnvelope, faShareFromSquare, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import ArticalCardVertical from '@/components/ArticalCardVertical'
import Article1 from '../../public/women-money.jpg'
import Article2 from '../../public/women-grid.png'

function Blog() {
  const [follow, setFollow] = useState(false);
  const router = useRouter();
  console.log(router.query.blogid);

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
      <Image src={BlogImage} className='w-full' />
      <h1 className='font-bold text-4xl text-slate-950 my-4'>KERC Announces Presale Date to Merge Web3 and Healthcare Industries</h1>
      <div className='flex items-center gap-3 my-4'>
        <Image src={UserImage} width={50} height={50} />
        <div className='text-sm'>
          <div className='flex gap-3'>
            <Link href={"/"} className='hover:underline'>
              <strong>The Capital Platform</strong>
            </Link>
            &middot;
            <button className='text-gray-500' onClick={e => { setFollow(!follow) }}>{follow ? "Follow" : "Following"}</button>
          </div>
          <div className='flex gap-3'>
            <p>Published in  <Link href={"/"} className='hover:underline'>
              The Capital Platform
            </Link></p>&middot;<span>4 min read</span>&middot;<date>4, Jul 2023</date>
          </div>
        </div>
      </div>
      <ActionBar />
      <div className='my-5'>
        KERC has proudly announced its upcoming presale, which will mark the beginning of a revolutionary leap in the healthcare industry. KERC will provide a unique solution for merging web3 and healthcare industries. The strategy intends to give patients access to their data while providing sustainable disruption within the trillion-dollar industry.

        Through its business model, $KERC gives users an innovative way of reforming payors and insurance systems through outpatient memberships. With this presale, KERC looks forward to bringing about real change in healthcare that will benefit providers and consumers.

        All There Is to Know about the Upcoming Presale
        KERC’s team has shared the details for their upcoming presale. The presale will begin on 11 July 2023 at 7 pm UTC and last 14 days. For those getting in early, it’s possible to purchase tokens at $1.

        After the presale period ends, the token price will increase to $1.10 for the public sale. There is a hard cap set for the event at $2.5 million.

        KERC will offer a raffle of four seats to reward initial investors from those staking during the presale. With this opportunity, holders can fly down to audit the company and its operations on behalf of all other holders. Staking coins for 12 months allows for airdrop rewards with an APY of 114.5 percent in extra tokens.

        Understanding KERC Through Its Business Model
        When looking for new crypto investments, one common best practice is understanding the underlying business model. Through its whitepaper, KERC details its business model and how it earns revenue.

        KERC generates income from traditional healthcare businesses, such as:

        Fees applied from medical services
        Subscriptions for healthcare-as-a-service
        Software automation fees
        Managed service revenue share
        Pharmaceutical sales.
        Another essential aspect to understand is the performance-based team incentives. KERC’s management draws a base salary, with bonus earnings determined by their return on investment (ROI). The project will not apply any bonuses if the ROI falls below 3%. But if it’s between 3 and 4%, 25% of the base salary will be added as a bonus. There are also better scenarios, with 50% and 100% bonuses if the ROI is above 4 or 5%, respectively.

        By looking at KERC’s business model, investors can understand their potential ROI and the team’s overall commitment to its mission.

        How Does $KERC Work?
        The KERC token, built on Arbitrum, provides a means of exchange for the community and rewards holders through staking. By staking their tokens, users will receive 1.5% of the par token price in USDC each month. Moreover, they will obtain participation bonuses based on the performance of KERC businesses.

        Additionally, by establishing more business chains, KERC tokens will allow purchasing goods and services from KERC operating outlets. The token allocation is the following:

        70% for ecosystem rewards and future utility
        15% for operations
        8% for team members
        2% for advisors
        5% for reserves.
        From its experience, the team believes that 10–15% monthly profit margins are a realistic expectation from new acquisitions. This would eventually increase to 50–60% EBITDA margins at full operating capacity.

        These earnings may experience a decrease in the first 3–6 months due to various factors. The team mentions changing personnel, transfer, implementation of existing agreements, and regulatory compliance among the initial decline reasons.

        Overall, KERC aims to build a sustainable tokenomics model that rewards holders while driving the long-term growth of its businesses.

        About KERC
        KERC is an innovative platform that connects two major industries, primary and alternative healthcare (PAH) and cryptocurrency. It helps users access high-yielding sustainable USDC earnings directly from investments in traditional businesses. The project wishes to offer this possibility without requiring large sums of money or domain expertise.

        Due to its low volume and margins, many see PAH as a cost center rather than a revenue generator. KERC, however, provides an uncomplicated way for investors to acquire real work income-generating healthcare assets with digital currencies.

        This lets them benefit from an appreciating asset avoiding the hassle of managing staff, dealing with vendors, and so on. KERC intends to let users earn from healthcare businesses with ease and confidence.

        Anyone curious to find out more about KERC can visit its official website for further information. Moreover, KERC’s social media pages (mentioned below) provide the latest updates and insights into the platform’s progress.
      </div>
      <div className='flex gap-3'>
        <Link href={"/"} className='underline text-lg'>Twitter</Link> |
        <Link href={"/"} className='underline text-lg'>Twitter</Link>
      </div>
      {/* end of article */}
      <div className='flex justify-center items-center gap-3  my-6'>
        <FontAwesomeIcon icon={faCircle} size='sm' />
        <FontAwesomeIcon icon={faCircle} size='sm' />
        <FontAwesomeIcon icon={faCircle} size='sm' />
      </div>
      <div>
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

export default Blog