import galleryData from "../../db/db.json";
import Image from "next/image";
import Link from "next/link";
import { getPiece, getNextAndAfter } from "@/utils";
export async function generateMetadata({ params }, parent) {
  const id = params.id;
  const { background, date, author } = getPiece(id);

  return {
    title: id.replaceAll("-", " "),
    description: background,
    keywords: [author, date]
  };
}
const index = ({ params }) => {
  const { id, background, date, author, wiki } = getPiece(params.id);
  const name = params.id.replaceAll("-", " ");
  let total = id > 0 ? 6.66 * (id + 1) : 6.66;
  const [after, next] = getNextAndAfter(id)

  return (
    <>
      <main className="p-10 xl:grid xl:grid-cols-2 xl:place-items-center gap-8 xl:mt-10 max-w-[1440px] xl:mx-auto">
        <input type="checkbox" name="modal" id="modal" className="hidden peer"/>
        <div className="transition-all pointer-events-none grid peer-checked:pointer-events-auto peer-checked:opacity-100 opacity-0 fixed inset-0  place-items-center bg-[#030303d5] w-full h-full z-50">
          <div className="max-w-[80%] md:max-w-[420px]">
          <label htmlFor="modal" className="cursor-pointer text-white ml-auto leading-10 uppercase tracking-[1rem]">close</label>
          <picture className="relative">
            <source
              media="(min-width: 720px)"
              srcSet={`/assets/${params.id}/hero-large.jpg`}
            />
            <Image
              src={`/assets/${params.id}/hero-small.jpg`}
              width={600}
              height={600}
              alt={background}
            />
          </picture>
          </div>
        </div>
        <div className="relative max-w-[450px] mx-auto  xl:mr-32">
          <picture className="relative">
            <source
              media="(min-width: 720px)"
              srcSet={`/assets/${params.id}/hero-large.jpg`}
            />
            <Image
              src={`/assets/${params.id}/hero-small.jpg`}
              width={600}
              height={600}
              alt={background}
            />
            <label htmlFor="modal" className=" cursor-pointer absolute bottom-[15%] sm:bottom-[12%] lg:bottom-4 left-4 text-white bg-[#03030362] transition-all hover:opacity-50 p-2 flex text-[10px] font-bold  items-center gap-2 uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><g fill="#FFF" fillRule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>view image</label>
          </picture>

          <header className="grid gap-2 absolute bg-slate-50 p-4 bottom-0 sm:bottom-[10%] min-w-[80%] max-w-[80%] lg:bottom-auto lg:top-0 lg:-right-3/4 xl:min-w-[20%] xl:-right-1/2 xl:p-8">
            <h1 className="font-bold text-2xl text-[#030303] capitalize lg:text-6xl lg:max-w-[13ch] lg:leading-tight xl:text-5xl xl:leading-snug xl:pb-4">
              {name}
            </h1>
            <h2 className="text-[#7d7d7d]">{author}</h2>
          </header>
          <Image
            className="translate-y-24 sm:translate-y-12 xl:absolute right-1/3 lg:translate-y-0 bottom-[80%] xl:-right-1/3 xl:bottom-1/4"
            src={`/assets/${params.id}/artist.jpg`}
            alt={`created by ${author}`}
            width={100}
            height={100}
          />
        </div>
        <div className="mt-40 sm:mt-20 max-w-prose mx-auto relative grid gap-6 text-[#696868] xl:ml-auto xl:mr-0">
          <div className="absolute right-0 -top-16 text-8xl text-[#e4dfdf] z-0 xl:text-[200px] xl:-top-[140px] xl:text-[#f3f3f3]">
            {date}
          </div>
          <p className=" z-10 leading-8 xl:max-w-[35ch]">{background}</p>
          <a href={wiki} className="underline transition-all ">
            go to source
          </a>
        </div>
      </main>
      <footer
        className={`max-w-[1440px] xl:mx-auto flex justify-between items-center p-8 border-t-2 relative `}
      >
        <div
          style={{
            height: "2px",
            position: "absolute",
            backgroundColor: "black",
            width: `${total}%`,
            left: "0",
            top: "0",
          }}
        ></div>
        <div>
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="text-[#696868]">{author}</p>
        </div>
        <div className="flex items-center gap-4 ">
          <Link href={`/${after}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24">
              <g stroke="#000" fill="none" fillRule="evenodd">
                <path
                  d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                  strokeWidth="2"
                />
                <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
              </g>
            </svg>
          </Link>
          <Link href={`/${next}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24">
              <g stroke="#000" fill="none" fillRule="evenodd">
                <path
                  d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                  strokeWidth="2"
                />
                <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
              </g>
            </svg>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default index;

export async function generateStaticParams() {
  const posts = await galleryData;

  return posts.map((post) => ({
    id: post.src,
  }));
}
