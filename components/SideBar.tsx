import React from 'react'
import { Logo } from './icons'
import { AiFillHome, AiOutlineBook, AiOutlineLogout, AiOutlineSetting, AiTwotoneCalendar } from 'react-icons/ai'
import { BsBadge8K } from 'react-icons/bs'
import { HiOutlineBadgeCheck } from 'react-icons/hi'

const SideBar = () => {
  const links = [
    { text: 'Dashboard', icon: AiFillHome },
    { text: 'My Course', icon: AiOutlineBook },
    { text: 'Explore Course', icon: AiTwotoneCalendar },
    { text: 'Learn Progress', icon: HiOutlineBadgeCheck },
    { text: 'Settings', icon: AiOutlineSetting },
    { text: 'Logout', icon: AiOutlineLogout },
  ]


  return (
    <div className=' h-[100vh] shadow-xl px-7  fixed top-0 left-0  bg-[white] w-1/6'>
      <ul className=' mb-9'>
        <li className=' flex   text-[1.4em] pt-9 font-bold items-center'><Logo /> LearnVerse</li>
      </ul>
      <ul className=' flex  h-full  flex-col justify-start gap-[2em]  '>
        {links.map((link) => <li className='flex gap-3 items-center justify-start hover:fill-blue-800 hover:bg-blue-50 hover:py-2 hover:px-4 rounded-xl hover:text-blue-800 cursor-pointer transition-all ease-in duration-300'>{<link.icon size={20} />} {link.text} </li>)}
      </ul>
    </div>
  )
}

export default SideBar