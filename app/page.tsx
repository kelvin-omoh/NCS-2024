"use client"

import { AiOutlineBook } from "react-icons/ai";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { BsBookmarks, BsChevronRight } from "react-icons/bs";
import PopularCourses from "@/components/courses/popular";

export default function Home() {
	const cards = {
		firstCard: [
			{
				title: "My Courses",
				total: 16,
				icon: <AiOutlineBook size={20} />
			},
			{
				title: "Complete Courses",
				total: 16,
				icon: <BsBookmarks size={20} />
			},
			{
				title: "Certificate Courses",
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
			<section className="flex gap-2 h-[200vh] py-4 px-1">
				{/* Left */}
				<section className="flex gap-4 justify-between w-full px-4 relative">
					<div className="w-3/4 px-2">
						<h1 className="text-xl font-medium mb-6">Learning Overview</h1>

						<div className="grid grid-cols-3 gap-5">
							{cards.firstCard.map((card, index) => (
								<div key={index} className="text-black w-full bg-white  text-[.9em] pb-1 shadow-lg rounded">
									<div className="bg-black h-11 px-3 py-2 rounded-t-xl text-white flex gap-3 items-center text-sm justify-start font-normal">
										{card.icon}
										<h1>{card.title}</h1>
									</div>
									<div className="flex flex-col py-2 px-3 rounded-b-xl">
										<p className="text-slate-400 text-sm font-medium mt-1">Total</p>
										<h1 className="mt-1 mb-2 text-2xl font-semibold">{card.total} Course</h1>
										<h1 className="dm-sans font-medium text-blue-500 gap-1 text-base flex justify-start items-center cursor-pointer">View details <BsChevronRight className="mt-px" size={12} /></h1>
									</div>

								</div>
							))}
						</div>

						<div className="my-6 py-6 rounded-xl text-white px-4 bg-[url(../assets/pattern.jpeg)] w-2/5 h-[28vh]" style={{ backgroundImage: "url('../assets/pattern.jpeg')`" }}>
							<h1 className="text-sm font-medium dm-sans">Valid 2 weeks before class start </h1>
							<h1 className="py-4 text-xl max-w-sm font-medium">Valid 2 weeks before class start </h1>
							<div className=" flex gap-4 pt-10">
								<button className=" text-sm bg-blue-500 px-4 py-2 rounded-xl font-medium">Bootcamp details </button>
								<button className=" text-sm bg-white text-blue-500 px-4 py-2 rounded-xl font-medium ">Contact us </button>
							</div>
						</div>

						<PopularCourses />
					</div>


					{/* Right */}
					<div className="w-1/4">
						<div className="text-black bg-white px-3 py-4 flex flex-col gap-5  rounded-lg ">
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

					</div>



				</section>
				{/* </div> */}
			</section>
		</>
	);
}
