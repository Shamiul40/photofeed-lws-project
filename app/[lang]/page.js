

export default async function Home() {
  
// http://localhost:3000/api/photos
  

    const response = await fetch(`${process.env.BASE_API_URL}/photos`)
    const photos =  await response.json();
    console.log("Photos from API:", photos.length, "photos received");
    console.log("First photo:", photos[0]);
    console.log("All photos:", photos);

  return (
    <div>
    <h1>shamiul islma</h1>
    </div>
  );
}
