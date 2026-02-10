import PhotoDetails from '@/components/PhotoDetails'
import React from 'react'

export default function PhotosPage({params : {id, lang}}) {
    
  return (
    <div>
      <PhotoDetails id={id} lang={lang}></PhotoDetails>
    </div>
  )
}
