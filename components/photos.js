import PhotoCard from "./photoCard";

export default function Photos({photos}) {

  return (
    <div className="img-grid">
      {photos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
    </div>
    
  )
}
