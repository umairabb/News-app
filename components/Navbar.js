import React from 'react'
import Link from 'next/link'
import {AiOutlineRead} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import{ GrFormClose } from 'react-icons/gr'
import { useState } from 'react'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
      <div>
        <header className='shadow-md sticky z-10 top-0'>
            <div className='flex p-4 justify-between mx-auto'>
                <Link href="/"><h1 className='flex font-bold text-2xl px-6'><span className='flex'>READ<AiOutlineRead size={30} className='text-orange-500'/></span>TALKS</h1></Link>
                <ul className='hidden md:flex font-semibold py-2 px-14 space-x-4 capitalize'>
                <Link href="/business"><li>business</li></Link>
                <Link href="/entertainment"><li>entertainment</li></Link>
                <Link href="/general"><li>general</li></Link>
                <Link href="/health"><li>health</li></Link>
                <Link href="/science"><li>science</li></Link>
                <Link href="/sports"><li>sports</li></Link>
                <Link href="/technology"><li>technology</li></Link>
                </ul>

                <div className='md:hidden flex px-2 py-1'>
{
  toggle ? (
    <GrFormClose onClick={()=>setToggle(!toggle)} size={25} className='md:hidden block '/>
  ): (
    <FiMenu onClick={()=>setToggle(!toggle)} size={25} className='md:hidden block' />
  )
}

            </div>
            <div className={`duration-300 md:hidden flex flex-col gap-3 w-[70%] h-screen fixed bg-gray-700 text-white capitalize list-none px-4 text-xl top-[65px] py-6 ${toggle ? `left-[0]` : `left-[-100%]`}`}>
            <Link href="/business"><li>business</li></Link>
                <Link href="/entertainment"><li>entertainment</li></Link>
                <Link href="/general"><li>general</li></Link>
                <Link href="/health"><li>health</li></Link>
                <Link href="/science"><li>science</li></Link>
                <Link href="/sports"><li>sports</li></Link>
                <Link href="/technology"><li>technology</li></Link>
            </div>
            
            </div>
            
        </header>
  
         <h1 className='text-2xl font-bold text-center capitalize py-10 pb-0'>TOP-HEADLINES</h1>
    <hr className='w-1/5 mx-auto'/>
    </div>
   
  )
}

export default Navbar


    