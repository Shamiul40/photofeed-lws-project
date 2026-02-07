import Image from "next/image";
import Link from "next/link";


export default function PhotoCard() {
  return (
    <div>
     <Link href="/" className="group">
        <Image src="https://source.unsplash.com/ztpUS4N1xhY" alt="" />

        {/* <!-- title --> */}
        <div className="title-container">
          <h4 className="title">The Beautiful Nature</h4>
        </div>
      </Link>
    </div>
  )
}
