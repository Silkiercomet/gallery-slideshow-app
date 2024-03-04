import { useState } from 'react'

const Footer = ({id, name, author}) => {
    const [total, setTotal] = useState(6.66)
    if(id > 0){
      Newtotal = total * (id +1)
      setTotal(Newtotal)
    }
  return (
    <footer className={`max-w-[1440px] xl:mx-auto flex justify-between items-center p-8 border-t-2 relative after:h-0.5 after:absolute after:bg-black after:w-[${total}%] after:top-0 after:left-0`}>
      <div>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-[#696868]">{author}</p>
      </div>
      <div className='flex items-center gap-4 '>
      <Link href={"/"}>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24"><g stroke="#000" fill="none" fillRule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" strokeWidth="2"/><path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/></g></svg>
      </Link>
      <Link href={"/"}>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24"><g stroke="#000" fill="none" fillRule="evenodd"><path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" strokeWidth="2"/><path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/></g></svg>
      </Link>
      </div>

    </footer>
  )
}

export default Footer