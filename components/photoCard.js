import Image from "next/image";
import Link from "next/link";


export default function PhotoCard({photo}) {
  return (
    <div>

      
      
      <p className="sr-only">{photo.title}</p> 
      
     <Link href={`photos/${photo.id}`} className="group">
        <Image  src={"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80"} alt={photo.title} width={700} height={700} />

        {/* Debug: show raw URL and plain <img> to verify fetch */}
         
        {/* <div style={{display: 'none'}}>
          <img src={photo.url} alt={`debug-${photo.title}`} width="200" height="200" />
        </div>  */}

        {/* <!-- title --> */}
        <div className="title-container">
          <h4 className="title">{photo.title}</h4>
        </div>
      </Link>
    </div>
  )
}
