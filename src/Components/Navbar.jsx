import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='flex justify-center'>
      <nav className='w-[80%] bg-[#0f0f0f] rounded-full h-16  flex flex-row align-middle mt-10'>
        <img src={logo} alt="logo" className='h-fit mt-3 ml-3'></img>
        <ul className='flex  text-[18px] gap-10 mt-4 ml-44 text-[#96979C] '>
            <li className=''>HOME</li>
            <li className=''>ABOUT</li>
            <li className=''> 
                OUR SERVICES
            </li>
            <li className=''>BENIFITS</li>
            <li className=''>BLOGS</li>
            <li className=''>CONTACTS</li>
            <button className='bg-[#EB0000] w-auto h-fit px-[28px] py-[14px] rounded-full mt-[-13px] ml-5'> Join us now</button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
