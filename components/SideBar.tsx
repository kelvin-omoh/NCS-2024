'use client'
import React from 'react'
import { AiFillHome, AiOutlineBook, AiOutlineLogout, AiOutlineSetting, AiTwotoneCalendar } from 'react-icons/ai'
import { BsBadge8K } from 'react-icons/bs'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { getAuth, signOut } from "firebase/auth";
import Link from 'next/link'
import useAuth from '@/provider/auth'
import toast from 'react-hot-toast'
import { googleAuth } from '@/lib/auth'
import Image from 'next/image'
import Logo from '../assets/logo.png'
const SideBar = () => {
  const links = [
    { text: 'Dashboard', icon: AiFillHome, link: "/" },
    { text: 'My Course', icon: AiOutlineBook, link: "my-courses" },
    { text: 'Explore Course', icon: AiTwotoneCalendar, link: "explore-courses" },
    { text: 'Learn Progress', icon: HiOutlineBadgeCheck, link: "" },
    { text: 'Settings', icon: AiOutlineSetting, link: "/" },
  ]

  const { user } = useAuth()

  const username = user?.displayName ?? 'Darrel Enaikele'

  const auth = getAuth();


  const LogOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success("Successfully signed out")
    }).catch((error) => {
      // An error happened.
      toast.error(error)
      console.log(error);

    });
  }

  const Login = async () => {
    try {
      const res = await googleAuth()
      if (res) {
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
                    Learn Verse
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Welcome to the Home of Knowledge to  explore and discover the endless realms of learning.
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


      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again")

    }

  }

  return (
    <div className=' h-[100vh] shadow-xl px-7 fixed top-0 left-0  bg-[white] w-1/5'>
      <ul className='mb-9'>
        <li className=' flex text-[1.4em] pt-9 font-bold items-center'><Image className=' h-[2rem] w-[2rem] flex flex-col mr-3 rounded-full ' src={Logo} alt='' /> LearnVerse</li>
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