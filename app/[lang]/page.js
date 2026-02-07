import Image from "next/image";
import { getDictionary } from "./dictionary/dictionary";
import Photos from "@/components/photos";

export default async function Home() {
  

  

    const response = await fetch(`${process.env.BASE_API_URL}/photos`)
    const photos =  await response.json();

  return (
    <div>
     <Photos photos={photos}></Photos>
    </div>
  );
}
