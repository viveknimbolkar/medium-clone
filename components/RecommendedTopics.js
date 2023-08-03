import React from 'react'
import Link from 'next/link'
function RecommendedTopics({topics}) {
  return (
    <div className='flex flex-wrap gap-3'>
      <h1 className='font-bold'>Recommended Topics</h1>
        {topics && topics.map(topic=>{
            return <Link className={'rounded-full bg-gray-200 px-3 py-2 text-sm'} href={topic.link}>{topic.label}</Link>
        })}
    </div>
  )
}

export default RecommendedTopics