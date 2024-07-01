import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../style'
import {logo,menu,close} from '../assets/index'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active,setActive]=useState('')
  const[toggle,setToggle]=useState(false)
  return (
  <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

   <div className=' w-full flex justify-between items-center max-auto max-w-7xl'>
   <Link
   to='/'
   className='flex items-center gap-2'
   onClick={()=>{
    setActive('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
   }}
   >
    <img src={logo} alt="logo" className='w-17  h-12 object-contain left-0' />
     <p  className=' text-white font-bold text-[18px] cursor-pointer'> 
      Khurshid Shaikh</p>
   </Link>

   <ul className=' list-none flex-row gap-10 hidden sm:flex'>
     {navLinks.map((link)=>(
      <li key={link.id}
      className={`${active===link.title?'text-white':'text-secondary'}`}
      onClick={()=>setActive(link.title)}
      ><a href={`#${link.id}`}>{link.title} </a></li>
     ))}

   </ul>
     <div className='sm:hidden flex flex-1 justify-end items-center'>
       <img src={toggle?close:menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
       onClick={()=>setToggle(!toggle)}
       />
       <div className={`${!toggle?'hidden':'flex '} 
       p-6 black-gradient absolute top-20 right-0  mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className=' list-none flex-col gap-4 flex sm:hidden'>
     {navLinks.map((link)=>(
      <li key={link.id}
      className={`${active===link.title?'text-white':'text-secondary'}
       font-poppins font-medium text-[16px] cursor-pointer`}
      onClick={()=>{
        setToggle(!toggle)
        setActive(link.title)}}
      ><a href={`#${link.id}`}>{link.title} </a></li>
     ))}

   </ul>

       </div>
     </div>



   </div>

   


  </nav>
  )
}

export default Navbar