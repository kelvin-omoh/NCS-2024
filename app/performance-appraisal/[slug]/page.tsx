'use client'
import { employeeData } from '@/app/data';
import React, { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { Progress } from "@nextui-org/react";
import { useDialogStore } from "@/stores/dialog";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
  } from 'chart.js';

  import {Button} from "@nextui-org/react";

  import { Radar } from 'react-chartjs-2';
  import { Bar } from 'react-chartjs-2';

  import { faker } from '@faker-js/faker';
import CreateEmployee from '@/components/modals/create-employee';
import CalculateKPI from '@/components/modals/CalculateKPI';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  
  const labels =  ['Quality of work', 'Productivity ', 'Efficiency', 'Goal Achievement', 'Team Work ', 'Problem solving', 'Puntuality ','Ethics'];



export const data1 = {
    labels: ['Quality of work', 'Productivity ', 'Efficiency', 'Goal Achievement', 'Team Work ', 'Problem solving', 'Puntuality ','Ethics'],
    datasets: [
      {
        label: 'KPIs and Evaaluation',
        data: [2, 9, 3, 5, 2, 3, 5,9],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };



export const data = {
    labels,
    datasets: [
      {
        label: 'KPI',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Peer Review',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };



export default function page({ params }: { params: { slug: string } }) {

    const userId=params.slug.replace("%7D",'');
  console.log(params.slug);
  
        const[userData,setUserData] =useState<any>({})
     useEffect(()=>{
  const data= employeeData.find((user:any)=>(user.EmployeeID===userId))
   setUserData(data)
   console.log(data);
   
     },[userId])





    const { show } = useDialogStore()
   



    return(
    <div className=' flex justify-between px-5 h-[100vh] '>
        <div>
            <div className='  justify-between h-[40vh]   w-fit '>
                    <div className=' w-fit my-4  items-center flex justify-between'>
 <BsPerson size={200}/>
                <Button onClick={() => show(<CalculateKPI/>)} radius="full" className="bg-gradient-to-tr text-center  flex  from-pink-500 to-yellow-500 text-white shadow-lg">
 Calculate KPI
    </Button>
                    </div>
               
                <div>
                    <p className=' text-white py-3  bg-black px-4'>Live Stats</p> 
               <h1 className='text-[.9em]'> <span className='  font-semibold'>Firstt Name: </span>  {userData.FirstName}</h1>
               <h1 className='text-[.9em]'> <span className='  font-semibold'>Last Name: </span>  {userData.LastName}</h1>
               <h1 className='text-[.9em]'> <span className='  font-semibold'>Sex: </span>  {userData.Sex}</h1>
           
                </div>

                <div className=' grid grid-cols-2'>
                    <h1 className=' items-center justify-center  p-9 flex flex-col  mx-auto my-auto border-2'>45  <span className=' text-sm'> Punctuality </span> </h1>
                    <h1 className=' items-center justify-center  px-9 py-5 flex flex-col  mx-auto my-auto border-2'>45  <span className=' text-sm flex  text-center'> <h1 className=' w-full text-sm '> Goal  Achievement</h1> </span> </h1>
                </div>
                <Bar options={options} data={data} />
            </div>
        </div>





        <div className=' w-[60%] py-3 mx-7 bg-gray-50 px-4 '>

            <div className='p-4  rounded-lg shadow-lg grid grid-cols-3 gap-5'>
                <div className=' border-4 rounded-lg  px-5 py-5 flex text-center  border-black justify-center items-center px-auto font-bold text-[1.2em]  '> 
                  <h1 className='  items-center text-center flex'>45 %</h1>
                  <div>
                      <h1 className=' text-[.8rem] text-blue-500'>+ Quality of Work </h1>
                  <Progress
                    size="sm"
                    radius="sm"
                    classNames={{
                        base: "max-w-md",
                        track: "drop-shadow-md border border-default",
                        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                        label: "tracking-wider font-medium text-default-600",
                        value: "text-foreground/60",
                    }}
                    // label="work improvement & performance"
                    value={45}
                    showValueLabel={true}
                    />  
                  </div>
                
                </div>
               
                <div className=' border-4 rounded-lg  px-5 py-5 flex text-center  border-black justify-center items-center px-auto font-bold text-[1.2em]  '> 
                  <h1 className='  items-center text-center flex'>90 %</h1>
                  <div>
                      <h1 className=' text-[.8rem] text-blue-500'>+ Efficiency</h1>
                  <Progress
                    size="sm"
                    radius="sm"
                    classNames={{
                        base: "max-w-md",
                        track: "drop-shadow-md border border-default",
                        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                        label: "tracking-wider font-medium text-default-600",
                        value: "text-foreground/60",
                    }}
                    // label="work improvement & performance"
                    value={90}
                    showValueLabel={true}
                    />  
                  </div>
                
                </div>
               
                <div className=' border-4 rounded-lg  px-5 py-5 flex text-center  border-black justify-center items-center px-auto font-bold text-[1.2em]  '> 
                  <h1 className='  items-center text-center flex'>95 %</h1>
                  <div>
                      <h1 className=' text-[.8rem] text-blue-500'>+ Productivity </h1>
                  <Progress
                    size="sm"
                    radius="sm"
                    classNames={{
                        base: "max-w-md",
                        track: "drop-shadow-md border border-default",
                        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                        label: "tracking-wider font-medium text-default-600",
                        value: "text-foreground/60",
                    }}
                    // label="work improvement & performance"
                    value={95}
                    showValueLabel={true}
                    />  
                  </div>
                
                </div>
               
            </div>
            <div className=' w-[80%] h-[70%]' id='acquisitions'>


            <Radar data={data1} />
          
            </div>
        </div>


    
    
    </div>
  )}


