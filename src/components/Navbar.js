import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-[30px] '>
      <div className='font-bold font-sans text-[14px] text-violet-900 md:text-2xl' >Maa Achhma</div>
      <ul className='md:flex hidden font-semibold'>
        <li className='mx-[15px] cursor-pointer  link link-underline '>Home</li>
        <li className='mx-[15px] cursor-pointer link link-underline '>About Us</li>
        <li className='mx-[15px] cursor-pointer link link-underline '>Contact Us</li>
      </ul>
      <div className='hidden md:block px-2 py-1 text-white rounded-md font-semibold bg-violet-600 cursor-pointer'>Login/Signup</div>
      <div className='md:hidden'>
        <a className='text-3xl' href="#">&#8801;</a>
      </div>
    </nav>
  )
}

export default Navbar

