import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PhotoCards({photo}) {
    console.log(photo)
  return (
    <div>
        <Link href="/">
                <h1>{photo.id}</h1>
                <h1>{photo.title}</h1>
                <Image src={photo.url} alt={photo.title} width={700} height={700}/>
        </Link>
    </div>
  )
}
