"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"


export const Modal=({children})=>{

    const modalRef = useRef(null)

    useEffect(()=>{

        if(!modalRef.current?.open) {
            modalRef.current?.showModal()
        }

    },[])

    return createPortal(
        <dialog ref={modalRef}>
            {children}
            <span>
                <Image src="../public/icons/xmark.svg" alt="" width={100} height={100}/>
            </span>
        </dialog> , document.getElementById("modalId")
    )
}