import PhotoDetails from '@/components/PhotoDetails'
import React from 'react'

export default function PhotosPage({params : {id, lang}}) {
    console.log("id is",id, "lang is", lang)
  return (
    <div>
      <PhotoDetails></PhotoDetails>
    </div>
  )
}
