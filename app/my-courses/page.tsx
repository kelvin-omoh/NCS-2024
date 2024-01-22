'use client'

import React, { useEffect, useState } from 'react'
import { Link } from "@nextui-org/react";
import CourseCard from '@/components/courses/card';
import { onSnapshot } from 'firebase/firestore';
import { getCourseRef } from '@/lib/courses';
import { Spinner } from "@nextui-org/react";

export default function Page() {
   const [courses, setCourses] = useState<any>(null)

   useEffect(() => {
      const unSub = onSnapshot(
         getCourseRef(),
         (snapshots) => {
            var data = snapshots.docs.map((a) => ({ id: a.id, ...a.data() }))
            setCourses(data)
         },
      )

      return () => {
         unSub()
      }
   }, [])

   return <div className=' mx-[6em] '>
      <Link color="foreground" className='text-[1.5em] my-3 font-semi-bold' href="#">
         All Courses
      </Link>

      {courses === null && <div className='flex items-center loader justify-center'><Spinner label="Loading..." color='default' /></div>}

      {courses !== null && courses.map((course: any, index: number) => <CourseCard key={index} course={course} />)}
   </div>
}