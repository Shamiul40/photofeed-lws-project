import Image from "next/image";
import { getDictionary } from "./dictionary/dictionary";

export default async function Home({ params: { lang } }) {
  const dictionaries = await getDictionary(lang);

  console.log(process.env.BASE_API_URL)

    const response = await fetch(`${process.env.BASE_API_URL}/photos`)
    const photos =  await response.json();

  return (
    <div>
      <h1>{dictionaries.views}</h1>
    </div>
  );
}
