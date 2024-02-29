import React from 'react'
import galleryData from "../../db/db.json"

const getPiece = (src) => {
  const data = galleryData.filter(e => e.src === src)
  return data[0]
}

const index = ({ params }) => {
  const {id, background, date, author, wiki} = getPiece(params.id)
  console.log(wiki)
  return (
    <div>index: {params.id}</div>
  )
}

export default index

export async function generateStaticParams() {
  const posts = await galleryData
  
  return posts.map((post) => ({
    id: post.src
  }))
}