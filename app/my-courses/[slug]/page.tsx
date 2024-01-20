'use client'
 
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import { AiFillCheckCircle, AiOutlineBackward, AiOutlineCheck, AiOutlineForward } from 'react-icons/ai';
import { BsChevronBarLeft, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import vid1 from '../../../assets/vid1.png'
import {Progress} from "@nextui-org/react";


interface PageProps {
    params: {
        slug: string[];
    };
}


const courseDetails=[
    {
        tittle:"Intro",
        date:"16th January 2024",
        access:true,
        checked:true,
    },
    {
        tittle:"What is Web Development",
        date:"16th January 2024",
        access:true,
        checked:true,
    },
    {
        tittle:"Intro",
        date:"16th January 2024",
        access:true,
        checked:false,
    },
    {
        tittle:"Intro",
        date:"16th January 2024",
        access:true,
        checked:false,
    },

]

const Page: React.FC<PageProps> = ({ params }: { params: {slug: any } }) => {
    const pathname = useParams()
    // const formattedSlug = (params.slug || []).join('').replace(/\s+/g, ''); // Remove spaces

    return (
        <div className=' flex justify-between gap-7'>
            <div className=' flex flex-col gap-5'>
                <div className=' flex justify-between items-center  px-4'>
                    <h1>  Course: <span className=' font-bold text-blue-600'>{params.slug.replace('%20', ' ')}</span> </h1>
                    <div className=' flex justify-center items-center gap-4'>
                        <button className=' font-bold flex gap-1 bg-blue-900 justify center text-white px-2 py-3 rounded-lg items-center'><BsChevronLeft  size={20}/> previous</button>
                        <button  className=' font-bold flex gap-1 bg-blue-900 justify center text-white px-2 py-3 rounded-lg items-center'><BsChevronRight size={20}/> Next</button>
                    </div>
                </div>

                <div className=' px-4'>
                    <div className=' h-[20em] m-0 w-full justify-center flex items-center gap-3'>
                        <Image className=' rounded-xl object-cover m-0   w-full h-full ' src={vid1}  alt={params.slug}/>
                    </div>
                    <div className=' flex gap-3 px-3 py-4 my-9 flex-col bg-white rounded-lg '>
                        <h1 className=' border-b pb-5 text-[1.2em] font-bold '>Description</h1>
                        <p className=' text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur vitae non eius sint eligendi ea temporibus nesciunt autem quam. Dolores vero odit id, in natus amet harum eum sed Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit provident deserunt voluptates atque consequatur modi officia dicta obcaecati itaque rem!.... <span className=' text-blue-600'>ViewMore</span></p>
                    </div>
                  
                </div>
              
                </div>





            <div className=' bg-white px-3 py-5 rounded-lg w-[90rem]  '>
                <div className=' flex justify-between '>
                    <h1 className=' text-[1.1em] font-bold '>Your Progress</h1>
                    <h1 className='  text-[1.1em] font-bold'>2 of 4 </h1>
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
                       
                   <div className="flex   px-6  bg-white">
  <div className=' '>
  {courseDetails.map((courseDetails ,i)=>(
    <div className="relative  text-[.5em]  ">
      <h1 className="mt-6 block border-l-4 w-[20em] border-dotted px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit Cumque quidem id {courseDetails.tittle}</h1>
      <h1 className="mt-2 text-gray-400   block border-l-4 w-[20em] border-dotted px-4"> Last Accessed:{courseDetails.date}</h1>
      <div className="absolute top-0 ml-[-1.9em] font-bold h-4 w-4 rounded-full  text-center flex justify-center items-center text-white px-4 py-4 bg-blue-600"> 
      {/* 1 */}
      {courseDetails.checked === true ? <button className=' bg-blue-500 rounded-full   '> <AiOutlineCheck size={20}/></button> :`${i+1}` }
     
      
       </div>
    </div>
       ))}
   

</div>
                
                
        
                    </div>
               
            </div>
        </div>
    );
};

export default Page;