import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/lws_logo.png";

export default function Logo() {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100}  />
        </Link>
      </div>
    </nav>
  );
}
