import React from 'react'

function UserId() {
  return (
    <>
        
    </>
  )
}

export default UserId


export async function getServerSideProps({ query }) {
    const response = await fetch(`http://localhost:3000/api/article/${query.blogid}`);
    const articles = await response.json();
    return {
      props: {
        articles
      }
    }
  
  }