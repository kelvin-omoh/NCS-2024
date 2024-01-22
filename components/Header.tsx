'use client'

import { googleAuth } from '@/lib/auth'
import useAuth from '@/provider/auth'
import React from 'react'
import { AiOutlineBell, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'

const Header = () => {
  const { user } = useAuth()

  const username = user?.displayName ?? 'Hello Guest'

  return (
    <div className='sticky bg-white z-20 top-0 flex border-b-2 pt-4 pb-5 gap-[4em] items-center justify-between px-5'>
      <div className='mt-1 flex flex-col'>
        <h1 onClick={() => googleAuth()} className='text-2xl font-normal'>{username}</h1>
        <p
          className='dm-sans text-sm font-normal text-gray-400'

        >Welcome back to Learn Verse</p>
      </div>

      <div className='flex justify-center shadow-lg rounded-lg px-3 items-center gap-4 bg-white'>
        <AiOutlineSearch className='text-gray-600' size={24} />
        <input type="text" className=' w-[30vw] text-[1.2em] py-3 outline-none text-gray-600 text-sm font-medium' placeholder=' search Course' />
      </div>

      <div className=' flex justify-center items-center gap-3 '>
        <div className=' relative bg-white  w-fit  flex flex-col items-center justify-center px-2 py-2 rounded-full'>

          <AiOutlineBell className='  text-gray-600' size={26} />
          <div className=' h-[.5rem] absolute w-[.5rem] top-4 right-3 rounded-full bg-red-500 '>
          </div>
        </div>

        <AiOutlineUser size={24} />
        <h1 className=' text-sm  font-medium'>{username}</h1>
      </div>
    </div>
  )
}

export default Header