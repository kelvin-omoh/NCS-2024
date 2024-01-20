'use client'

import { googleAuth } from '@/lib/auth'
import useAuth from '@/provider/auth'
import React from 'react'
import { AiOutlineBell, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'

const Header = () => {
  const { user } = useAuth()

  const username = user?.displayName ?? 'Darrel Enaikele'

  return (
    <div className=' flex border-b-2 pb-5 gap-[4em] items-center justify-between '>
      <div className=' flex flex-col'>
        <h1 className=' text-[1.5em]  font-bold'>{username}</h1>
        <p>Welcome back to Learn Verse</p>
      </div>

      <div className=' flex justify-center shadow-lg rounded-lg px-3 items-center gap-4 bg-white'>
        <AiOutlineSearch className=' text-gray-600' size={30} />
        <input type="text" className=' w-[30vw] text-[1.2em] py-3 outline-none text-gray-600' placeholder=' search Course' />
      </div>

      <div className=' flex justify-center items-center gap-2 '>
        <div className=' relative bg-white   px-3 w-fit py-2 rounded-full'>

          <AiOutlineBell className='  text-gray-600' size={30} />
          <div className=' h-[.5rem] absolute w-[.5rem] top-4  right-3 rounded-full bg-red-500 '>
          </div>
        </div>

        <AiOutlineUser size={30} />
        <h1 className=' text-[.8em]  font-bold'>{username}</h1>


      </div>
    </div>
  )
}

export default Header