import Image from "next/image";
import { getDictionary } from "./dictionary/dictionary";

export default async function Home({ params: { lang } }) {
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1>{dictionaries.views}</h1>
    </div>
  );
}
