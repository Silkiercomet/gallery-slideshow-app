import Image from "next/image";
import Link from "next/link"
import galleryData from "../db/db.json"
export default function Home() {

  return (
    <main >
      <Link href="/mona-lisa">hello </Link>
      <div className=" ">
      <Image src={"/assets/girl-with-pearl-earring/gallery.jpg"} width={310} height={500} ></Image>
      </div>
      <div className=" ">
      <Image src={"/assets/girl-with-pearl-earring/gallery.jpg"} width={310} height={500} ></Image>
      </div>
      <div className=" ">
      <Image src={"/assets/girl-with-pearl-earring/gallery.jpg"} width={310} height={500} ></Image>
      </div>
      <div className=" ">
      <Image src={"/assets/girl-with-pearl-earring/gallery.jpg"} width={310} height={500} ></Image>
      </div>
    </main>
  );
}
