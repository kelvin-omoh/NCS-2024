import React from 'react'
import { Logo } from './icons'
import { AiFillHome, AiOutlineBook, AiOutlineLogout, AiOutlineSetting, AiTwotoneCalendar } from 'react-icons/ai'
import { BsBadge8K} from 'react-icons/bs'
import { HiOutlineBadgeCheck} from 'react-icons/hi'

const SideBar = () => {
  return (
    <div className=' h-[100vh] shadow-xl px-7  fixed top-0 left-0  bg-[white]'>
        <ul className=' mb-9'>
            <li className=' flex   text-[1.4em] pt-3 font-bold items-center'><Logo/> LearnVerse</li>
        </ul>
        <ul className=' flex  h-full  flex-col justify-start gap-[2em]  '>
            <li className=' flex gap-3 items-center  justify-start'><AiFillHome size={20}/> Dashboard</li>
            <li className=' flex gap-3 items-center    justify-start '><AiOutlineBook/> My Course</li>
            <li className=' flex gap-3 items-center    justify-start '><AiTwotoneCalendar/> Explore Course</li>
            <li className=' flex gap-3 items-center    justify-start '><HiOutlineBadgeCheck/> Learn Progress </li>
            <li className=' flex gap-3 items-center    justify-start '><AiOutlineSetting/> Settings </li>
            <li className=' flex gap-3 items-center   justify-start '><AiOutlineLogout/> Logout</li>
       
        </ul>
 

    </div>
  )
}

export default SideBar