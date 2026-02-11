import { Modal } from '@/components/Modal'
import PhotoDetails from '@/components/PhotoDetails'
import React from 'react'

export default function ModalPhotoPage({params : {id, lang}}) {
  return (
    <div>
      <Modal>
            <PhotoDetails id={id} lang={lang} ></PhotoDetails>
      </Modal>
    </div>
  )
}
