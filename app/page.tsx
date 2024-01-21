"use client"

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
import useAuth from "@/provider/auth";
import { googleAuth } from "@/lib/auth";

export default function Home() {
	const cards = {
		firstCard: [
			{
				title: "My Courses",
				total: 16,
				icon: <AiOutlineBook size={20} />
			},
			{
				title: "My Courses",
				total: 16,
				icon: <BsBookmarks size={20} />
			},
			{
				title: "My Courses",
				total: 16,
				icon: <HiOutlineBadgeCheck size={20} />
			},

		]
		,
		popularCourses: [
			{
				title: " Web Development",
				subtitle: "Front end for web development",
				price: "200",
				image: '../assets/web.jpeg'

			},
			{
				title: "Graphic Design",
				subtitle: "UI/UX web development",
				price: "300",
				image: '../assets/graphic.png'

			},
			{
				title: "Devops",
				subtitle: "Build and release Engineering",
				price: "800",
				image: '../assets/release_management.jpeg'

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
				<section className=" flex gap-4 justify-between w-full  ">
					<div>
						<h1 className="text-xl font-medium mb-6">Learning Overview</h1>

						<div className=" flex justify-between gap-3 items-center">
							{cards.firstCard.map(card => (
								<div className=" text-black w-[20rem] bg-white  text-[.9em] pb-1 shadow-lg rounded">
									<div className="bg-black h-11 px-3 py-2 rounded-t-xl text-white flex gap-3 items-center text-sm justify-start font-normal">
										{card.icon}
										<h1>{card.title}</h1>
									</div>
									<div className="flex flex-col py-2 px-3 rounded-b-xl">
										<p className="text-slate-400 text-sm font-medium mt-1">Total</p>
										<h1 className="mt-1 mb-3 text-2xl font-semibold">{card.total} Course</h1>
										<h1 className="dm-sans font-medium text-blue-600 gap-1 text-base flex justify-start items-center cursor-pointer">View details <BsChevronRight className="mt-px" size={12} /></h1>
									</div>

								</div>
							))}
						</div>

						<div className="opcaity-25 my-6 py-6 rounded-xl text-white px-4 bg-[url(../assets/pattern.jpeg)] w-1/3 h-[28vh]" style={{ backgroundImage: "url('../assets/pattern.jpeg')`" }}>
							<h1 className="text-sm font-medium dm-sans">Valid 2 weeks before class start </h1>
							<h1 className="py-4 text-xl max-w-sm font-medium">Valid 2 weeks before class start </h1>
							<div className=" flex gap-4 pt-10">
								<button className=" text-sm bg-blue-500 px-4 py-2 rounded-xl font-medium">Bootcamp details </button>
								<button className=" text-sm bg-white text-blue-500 px-4 py-2 rounded-xl font-medium ">Contact us </button>
							</div>
						</div>


						<div className=" flex  justify-between  w-full h-10">
							<h1 className="text-xl font-medium">Popular Courses</h1>
							<button className=" text-sm dm-sans font-medium text-blue-600 flex gap-2 items-center justify-center">
								View all <BsChevronRight size={14} />
							</button>
						</div>
						<div className=" flex  w-full  justify-between gap-1">


							<div className=" flex w-full justify-between gap-5">

								{cards.popularCourses.map((course) => (
									<div
										key={course.title}
										className="course-card  bg-white h-full rounded-xl h-[4em] w-[20rem]" // Add a generic class name for styling
									>
										<Image className="px-2 py-2 h-48 object-cover rounded-xl" src={devops} alt="w" />

										<div className="px-3 pb-3">
											<h1 className=" text-[1.1em] font-bold" >${course.price}</h1>
											<h1 className=" text-sm text-gray-500 font-medium ">{course.title}</h1>
											<h1 className=" text-lg font-semibold dm-sans w-60 truncate" >{course.subtitle}</h1>
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
