import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "/public/lws_logo"

export default function Logo() {
  return (
    <div>
        <Link href="/">
            <Image 
            src={logo}
            alt='logo'
            width={100}
            height={100}
            />
        </Link>
    </div>
  )
}
