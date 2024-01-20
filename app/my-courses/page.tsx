
'use client'
 
import React from 'react'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { AiOutlineBarChart, AiOutlineRight, AiOutlineVerified, AiOutlineVideoCamera } from 'react-icons/ai';

import img from '../../assets/web.jpeg'
import Image from 'next/image';
import Router from 'next/router';

import { useRouter } from 'next/navigation'
 
const AllCourses=[
   {
      label:"Education",
      title:"Web Development",
      percentage:"75",
      description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum a quo ipsam commodi blanditiis praesentium tenetur sapiente tempore aliquid voluptates...", 
      level:"01",
      duration:"5h 2m",
      noOfLessons:10
},
   {
      label:"Education",
      title:"Web Development",
      percentage:"75",
      description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum a quo ipsam commodi blanditiis praesentium tenetur sapiente tempore aliquid voluptates...", 
      level:"01",
      duration:"5h 2m",
      noOfLessons:10
},
   {
      label:"Education",
      title:"Web Development",
      percentage:"75",
      description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum a quo ipsam commodi blanditiis praesentium tenetur sapiente tempore aliquid voluptates...", 
      level:"01",
      duration:"5h 2m",
      noOfLessons:10
},
   {
      label:"Education",
      title:"Web Development",
      percentage:"75",
      description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum a quo ipsam commodi blanditiis praesentium tenetur sapiente tempore aliquid voluptates...", 
      level:"01",
      duration:"5h 2m",
      noOfLessons:10
},
]


export default function Page() {

const router = useRouter()


    return <div className=' mx-[6em] '>



          <Link color="foreground"  className=' text-[1.5em]  my-3 font-semi-bold' href="#">
            All Courses
          </Link>
   


       
       {AllCourses.map((courses)=>(
         <section onClick={() => router.push(`/my-courses/${courses.title}`)} className='  py-8 flex my-5 flex-col gap-6 bg-slate-400/30 px-5 rounded-lg'>
         <div className=' flex   gap-4'>
                <div className=' w-[30em] h-[15em] '>
                    <Image className=' object-cover h-full rounded-md' src={img} alt={"logo"} />
                </div>
                <div>
                    <div className=' flex flex-col gap-4'>
                        <div className=' flex justify-between'>
                             <button className=' px-4 py-2 bg-blue-600 text-white rounded-lg '>Education</button>
                             <button className=' flex gap-2 px-4 py-2 border  border-blue-600 text-blue-600 rounded-lg '><AiOutlineVerified/> Certification</button> 
                        </div>
                        <h1 className=' m-1'>Web Development </h1>
                        <p>75% completed</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum a quo ipsam commodi blanditiis praesentium tenetur sapiente tempore aliquid voluptates...</p>


                        <div className=' flex justify-between items-center'>
                        <div className=' flex gap-3 items-center'>
                            <div className=' flex gap-1  items-center'><AiOutlineBarChart/> level 01 </div>
                            <div className=' flex gap-1  items-center'><AiOutlineBarChart/> 15h 59m </div>
                            <div className=' flex gap-1  items-center'><AiOutlineVideoCamera/> 10 lessons </div>
                        </div>
                        <button className=' px-4 py-2 bg-blue-600 text-white rounded-lg flex justify-center items-center '>View <AiOutlineRight/></button>
                        </div>
                        
                    </div>
                </div>
            </div>
    </section>
       ))}
           

    


    </div>
  }