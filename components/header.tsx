import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="w-full ">

        <nav className="w-full sm:w-auto bg-black  py-8 px-[5%]">
          <ul className='flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 md:gap-10 text-white text-lg sm:text-xl md:text-2xl font-bold '>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#569DAA]'><Link href="/">Home</Link></li>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#569DAA]'><Link href="/portfolio">Portfolio</Link></li>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#569DAA]'><Link href="/contact">Contact</Link></li>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#569DAA]'><Link href="/about">About</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Header