'use client'

import React from 'react'
import { AiFillHome, AiOutlineBook, AiOutlineLogout, AiOutlineSetting, AiTwotoneCalendar } from 'react-icons/ai'
import { BsBadge8K } from 'react-icons/bs'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { getAuth, signOut } from "firebase/auth";
import Link from 'next/link'
import useAuth from '@/provider/auth'
import toast from 'react-hot-toast'
import { createUserProfile, getUser, googleAuth } from '@/lib/auth'
import Image from 'next/image'
import Logo from '../assets/logo.png'

const SideBar = () => {
  const links = [
    { text: 'Human Resource', icon: AiFillHome, link: "/" },
    { text: 'Performance Appraisal', icon: AiOutlineBook, link: "performance-appraisal" },
    { text: 'Employment Details', icon: AiTwotoneCalendar, link: "explore-courses" },
    { text: 'Report & Analysis', icon: HiOutlineBadgeCheck, link: "" },
    { text: 'Settings', icon: AiOutlineSetting, link: "/" },
  ]

  const { user } = useAuth()

  const username = user?.displayName ?? 'Darrel Enaikele'

  const auth = getAuth();

  const LogOut = async () => {
    try {
      await signOut(auth)
      toast.success("Successfully signed out")
    } catch (e: any) {
      toast.error(e.message)
    }
  }

  const Login = async () => {
    try {
      const res = await googleAuth()
      const userDoc = await getUser(res.user.uid)

      if (!userDoc) {
        await createUserProfile(res!.user!)
      }

      toast.success(" Welcome " + res.user.displayName)
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <Image className=' h-[2rem] w-[2rem] flex flex-col rounded-full ' src={Logo} alt='' />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  JAKS
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Welcome to the Home of Justified Assessment & Key Solutions (JAKS), where excellence meets performance in our Human Resource system.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ), {
        duration: 9000
      })
    } catch (error: any) {
      console.log(error);
      toast.error(error.message)
    }

  }

  return (
    <div className=' h-[100vh] shadow-xl px-7 fixed top-0 left-0  bg-[white] w-1/5'>
      <ul className='mb-9'>
        <li className=' flex text-[1.4em] pt-9 font-bold items-center'>
          <Image className=' h-[2rem] w-[2rem] flex flex-col mr-3 rounded-full ' src={Logo} alt='' /> JAKS</li>
        <p className="text-[.6em] my-4 font-medium text-gray-400">
          Justified Assessment & Key Solutions
        </p>
      </ul>
      <ul className='flex h-full pt-4 flex-col justify-start gap-[2em]'>
        {links.map((link) => <Link href={`/${link.link}`} className='flex gap-3 decoration-white hover:underline hover:underline-offset-8 items-center justify-start hover:fill-blue-800 hover:bg-black hover:py-3 hover:px-4 rounded-xl hover:text-white cursor-pointer transition-all ease-in duration-300'>{<link.icon size={20} />} {link.text} </Link>)}

        {
          !user?.email ? <Link onClick={() => Login()} href={''} className='flex gap-3 items-center justify-start hover:fill-blue-800 hover:bg-blue-50 hover:py-2 hover:px-4 rounded-xl hover:text-blue-800 cursor-pointer transition-all ease-in duration-300'>{<AiOutlineLogout size={20} />} Login </Link>
            :
            <Link onClick={() => LogOut()} href={''} className='flex gap-3 items-center justify-start hover:fill-blue-800 hover:bg-blue-50 hover:py-2 hover:px-4 rounded-xl hover:text-blue-800 cursor-pointer transition-all ease-in duration-300'>{<AiOutlineLogout size={20} />} Logout </Link>
        }
      </ul>
    </div>
  )
}

export default SideBar