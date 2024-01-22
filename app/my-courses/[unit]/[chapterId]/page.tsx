'use client'

import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle, AiOutlineBackward, AiOutlineCheck, AiOutlineForward } from 'react-icons/ai';
import { BsChevronBarLeft, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import vid1 from '../../../assets/vid1.png'
import { Progress } from "@nextui-org/react";
import { onSnapshot } from 'firebase/firestore';
import { getChapter, getCourseDetails, getQuestions, getUnits } from '@/lib/courses';
import ReactPlayer from 'react-player'

const Page = ({ params }: any) => {
    const pathname = useParams()
    const [chapters, setChapter] = useState<any>(null)
    const [questions, setQuestions] = useState<any>(null)

    useEffect(() => {
        const unSub = onSnapshot(
            getChapter(params.unit, params.chapterId),
            (snapshot) => {
                var data = snapshot.docs.map((a) => ({ id: a.id, ...a.data() }))
                setChapter(data)
            }
        )

        return () => {
            unSub()
        }
    }, [])

    // useEffect(() => {
    //     const unSub = onSnapshot(
    //         getQuestions(params.courseId, params.unit, params.chapterId),
    //         (snapshot) => {
    //             var data = snapshot.docs.map((a) => ({ id: a.id, ...a.data() }))
    //             setQuestions(data)
    //         }
    //     )

    //     return () => {
    //         unSub()
    //     }
    // }, [])

    return (
        <>
            {chapters !== null && <div className='flex justify-between gap-3'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between items-center pt-3 px-4'>
                        {/* <h1>Course: <span className='font-bold text-blue-600'>{course.name}</span> </h1> */}
                        <div className=' flex justify-center items-center gap-4'>
                            <button className='font-medium text-sm flex gap-1 bg-blue-900 justify-center text-white px-2 py-3 rounded-lg items-center'><BsChevronLeft size={14} /> previous</button>
                            <button className='font-medium text-sm flex gap-1 bg-blue-900 justify-center text-white px-2 py-3 rounded-lg items-center'><BsChevronRight size={14} /> Next</button>
                        </div>
                    </div>

                    <div className='px-4 pt-6'>
                        <div className='h-[20em] m-0 w-full justify-center flex items-center gap-3'>
                            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                            {/* <Image className='rounded-xl object-cover m-0 w-full h-full' src={vid1} alt={course.image} /> */}
                        </div>
                        <div className='flex gap-3 px-3 py-4 my-9 flex-col bg-white rounded-lg'>
                            <h1 className='border-b pb-5 text-[1.2em] font-bold'>Description</h1>
                            {/* <p className='text-gray-500'>{course.description} <span className=' text-blue-600'>ViewMore</span></p> */}
                        </div>
                    </div>
                </div>

                <div className='bg-white px-3 py-5 rounded-lg w-[50rem]  '>
                    <div className='flex flex-col justify-between '>
                        <h1 className='text-xl font-bold'>Your Progress</h1>
                        {/* <h1 className='text-[1.1em] font-bold'>1 of {course.units} </h1> */}
                    </div>
                    {/* <Progress
      label=""
      size="sm"
      value={4000}
      maxValue={10000}
      color="warning"
    //   formatOptions={{style: "currency", currency: "ARS"}}
      showValueLabel={true}
      className="max-w-md"
    /> */}

                    <div className="flex px-6 bg-white">
                        <div className=' '>
                            {/* {units.map((unit: any, i: number) => (
                                <div className="relative text-lg">
                                    <h1 className="mt-3 text-base block border-l-4 w-[20em] font-semi-bold border-dotted px-4">{unit.name}</h1>
                                    <h1 className="mt-1 text-gray-400 text-sm dm-sans block border-l-4 w-[20em] border-dotted px-4">Last Accessed: Date here</h1>
                                    <div className="absolute top-0 ml-[-1.4em] text-sm font-bold h-4 w-4 rounded-full text-center flex justify-center items-center text-white px-4 py-4 bg-blue-600">
                                        {unit.name === unit.name ? <button className=' bg-blue-500 rounded-full'> <AiOutlineCheck size={26} /></button> : `${i + 1}`}
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Page;