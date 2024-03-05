import React from 'react'
import Image from 'next/image'

const GalleryItem = ({url, author,priority}) => {
    const name = url.replaceAll("-", " ")
    const imageStyle = {
        position: "relative",
        width: "100%",
        heught: "100%"
      }
  return (
    <figure className='group min-w-full mb-10 max-w-80 relative transition-all cursor-pointer after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:transition-all after:to-[#03030391] hover:after:opacity-50'>
        <Image src={`/assets/${url}/gallery.jpg`} priority={priority} width={320} height={500} style={imageStyle} alt={`portrait named ${name}`}/>
        <header className='absolute bottom-5 left-5 pr-4 z-50'>
            <h3 id={url} className="text-3xl text-[#ebebeb] capitalize group-hover:text-[#ebebeb]">{name}</h3>
            <label htmlFor={url} className='text-white'>{author}</label>
        </header>
    </figure>
  )
}

export default GalleryItem