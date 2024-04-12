import { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
        <header className='w-full px-5 h-14 md:h-20 flex flex-row justify-between items-center bg-white fixed top-0 left-0 shadow-md z-40'>
            <a href="/" className=' text-2xl font-light hidden md:block'>yoga soul</a>
            <a href="/" className='md:absolute md:left-1/2 md:-translate-x-1/2 cursor-pointer'><img src="/images/logo_ys.png" alt="Yoga Soul Logo" className='h-9 md:h-16' /></a>
            <MdMenu onClick={() => setMenuOpen(true)} className='text-4xl cursor-pointer' />
        </header>
        <div className={menuOpen ? 'w-full md:max-w-xs h-svh fixed top-0 right-0 bg-white z-50 transition-all' : 'w-full md:max-w-xs h-svh fixed top-0 -right-full md:-right-80 bg-white z-50 transition-all'}>
            <MdOutlineClose onClick={() => setMenuOpen(false)} className='text-4xl absolute top-6 right-4 cursor-pointer' />
        </div>
    </>
  )
}

export default Header