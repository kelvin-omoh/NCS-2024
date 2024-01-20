import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { AiOutlineBook } from "react-icons/ai";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { BsBookmarks, BsChevronRight } from "react-icons/bs";
import web from '../assets/web.jpeg'
import graphics from '../assets/graphic.png'
import devops from '../assets/graphic.png'
import Image from "next/image";

export default function Home() {
	const cards={
			firstCard:[
				{
					title:"My Courses",
					total:16,
					icon:<AiOutlineBook size={20}/>
				},
				{
					title:"My Courses",
					total:16,
					icon:<BsBookmarks  size={20}/>
				},
				{
					title:"My Courses",
					total:16,
					icon:<HiOutlineBadgeCheck  size={20}/>
				},

			]
			,
			popularCourses:[
				{
					title:" Web Development",
					subtitle:"Front end for web development",
					price:"200",
					image:'../assets/web.jpeg'

				},
				{
					title:"Graphic Design",
					subtitle:"UI/UX web development",
					price:"300",
					image:'../assets/graphic.png'

				},
				{
					title:"Devops",
					subtitle:"Build and release Engineering",
					price:"800",
					image:'../assets/release_management.jpeg'

				},

			]
	}
	return (
		<>
		<section className=" flex gap-5 h-[200vh] p-4   ">
				{/* <SideBar/>
				<div className="  ml-[17%]">
				<Header/> */}



				{/* Left */}
				<section  className=" flex gap-4 justify-between w-full  ">
					<div>
					<h1>Learning Overview</h1>

					<div className=" flex justify-between gap-3 items-center">
						{cards.firstCard.map(card =>(
							<div className=" text-black w-[20rem] bg-white  text-[.9em] pb-4 shadow-lg   rounded-lg ">
								<div className=" bg-black  px-3 py-1 rounded-t-xl text-white flex gap-4  items-center   justify-start">
								
									{card.icon}
								<h1>{card.title}</h1>
								</div>
								<div className=" flex flex-col  py-2  px-3">
									<p className=" text-slate-400">Total</p>
									<h1 className=" my-3 text-[1.8em] font-bold">{card.total} Course</h1>
									<h1 className=" my-0 font-bold text-blue-600 gap-3 text-[1.5em] flex justify-start items-center  ">View Details <BsChevronRight size={20}/></h1>
								</div>
								
							</div>
						))}
					</div>
					<div className=" my-6 py-6 rounded-xl text-white px-[3em] bg-[url(../assets/pattern.jpeg)] w-[50%] h-[30vh]     " style={{ backgroundImage: "url('../assets/pattern.jpeg')`" }}>
							<h1 className=" text-[1.4em]  ">Valid 2 weeks before class start </h1>
							<h1 className=" text-[2em] font-bold ">Valid 2 weeks before class start </h1>
							<div className=" flex gap-4">
								<button className=" bg-blue-500 px-4 py-2 rounded-lg font-bold ">Bootcamp details </button>
								<button className=" bg-white text-blue-500 px-4 py-2 rounded-lg font-bold ">Contact us </button>
							</div>
							
					</div>


								<div className=" flex  justify-between  w-full">
										<h1>Popular Courses</h1>
										<button className=" text-[1.5em]  font-bold text-blue-600 flex gap-2 items-center justify-center">
											View all <BsChevronRight size={20}/>
										</button>
									</div>
								<div className=" flex  w-full  justify-between gap-4">
									
									
									<div className=" flex w-full justify-between ">

											{cards.popularCourses.map((course) => (
											<div
												key={course.title}
												className="course-card  h-[4em] w-[20rem]" // Add a generic class name for styling
											
											>
												
												<Image className="  h-fit w-fit object-contain  " src={devops} alt="w" />

												<div>
												<h1 className=" text-[1.1em] font-bold" >${course.price}</h1>
												<h1 className=" text-[1.3em] ">{course.title}</h1>
												<h1 className=" text-[1.6em] " >{course.subtitle}</h1>
												</div>
											</div>
											))}
									</div>


									</div>
									</div>
					

	{/* Right */}
	<section>
					<div className=" text-black bg-white px-3 py-4 flex flex-col gap-5  rounded-lg ">
						<div className=" text-[1.3em] bg-slate-100 px-1 py-1 shadow-lg">
							<h1 className=" text-[.9em]">Upcoming event</h1>
							<h1 className=" text-[.9em]">Upcoming event</h1>
							<h1 className=" text-[.9em]">Upcoming event</h1>
					
						</div>
						<div className=" text-[1.3em] bg-slate-100 px-1 py-1 shadow-lg">
							<h1 className=" text-[.9em]">Upcoming event</h1>
							<h1 className=" text-[.9em]">Upcoming event</h1>
							<h1 className=" text-[.9em]">Upcoming event</h1>
					
						</div>
						<div className=" text-[1.3em] bg-slate-100 px-1 py-1 shadow-lg">
							<h1 className=" text-[.9em]">Upcoming event</h1>
							<h1 className=" text-[.9em]">Upcoming event</h1>
							<h1 className=" text-[.9em]">Upcoming event</h1>
					
						</div>
						
					</div>
					
				</section>



				</section>




			

				{/* </div> */}

		</section>

		
	
		
		</>
	);
}
