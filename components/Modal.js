"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"


export const Modal=({children})=>{

    const modalRef = useRef(null)
    const router = useRouter()

    useEffect(()=>{

        if(!modalRef.current?.open) {
            modalRef.current?.showModal()
        }

    },[])

    const onHide =()=>{
        router.back()
    }

    return createPortal(
        <dialog className="
        rounded-xl
        border border-white/10
        bg-white/95
        backdrop:bg-black/60
        p-2
        shadow-2xl
       
       
        w-full
        animate-in fade-in zoom-in-95
      " onClose={onHide} ref={modalRef}>
           
            <span onClick={onHide} className="my-2 flex justify-end px-2 cursor-pointer text-sm text-zinc-500 hover:text-zinc-900 ">
                ✕
            </span>
             {children}
        </dialog> , document.getElementById("modalId")
    )
}