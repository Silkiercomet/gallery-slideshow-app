import Link from "next/link"
import galleryData from "../db/db.json"
import GalleryItem from "@/components/GalleryItem";
export default function Home() {

  return (
    <main className="*:break-inside-avoid columns-[290px] gap-8 m-8 *:mb-4 max-w-[1536px] 2xl:mx-auto">
      {galleryData.map(e => <Link href={e.src} key={`${e.id}-${e.src}`}>
        <GalleryItem url={e.src} author={e.author} priority={e.id<2?true:false}/>
      </Link>)}
    </main>
  );
}
