import React from 'react'
import PhotoCards from './PhotoCards'

export default function PhotoList({photos}) {

  return (
    <div>
      {
        photos.map(photo=><PhotoCards key={photo.id} photo={photo}></PhotoCards>)
      }
    </div>
  )
}
