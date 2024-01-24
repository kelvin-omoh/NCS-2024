"use client"

import { AiOutlineBook, AiOutlineUser } from "react-icons/ai";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { BsBookmarks, BsChevronRight } from "react-icons/bs";
import PopularCourses from "@/components/courses/popular";
import { employeeData } from "./data";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import EmployeeCard from "@/components/card/employee";
import { useDialogStore } from "@/stores/dialog";
import CreateEmployee from "@/components/modals/create-employee";
import Holiday from "@/components/card/holiday";
import Payroll from "@/components/card/payroll";
import Target from "@/components/card/target";

export default function Home() {
	const { show } = useDialogStore()

	const cards = {
		firstCard: [
			{
				EmployeeID: "Adewale",
				FirstName: "Yusuf",
				LastName: "kolawole",
				sex: "Male",
				age: 20,
				Position: " Employee",
				Department: "ICT"
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

	const itemsPerPage = 8;
	const totalPages = Math.ceil(employeeData.length / itemsPerPage);

	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentEmployees = employeeData.slice(startIndex, endIndex);

	const handlePageChange = (page: any) => {
		setCurrentPage(page);
	};


	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
	const [isModalOpen, setModalOpen] = useState(false);

	const handleViewDetails = (employee: any) => {
		setSelectedEmployee(employee);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<section className="flex gap-2 h-[100vh] py-4 px-1 z-0">
				{/* Left */}
				<section className="flex gap-4 justify-between w-full px-4 relative">
{/*  */}
					<div className="w-3/4 px-2">
						<div className="flex items-center justify-between">
							<h1 className="text-xl font-medium mb-4">Overview</h1>
						</div>
						<div className="grid grid-cols-5">
							<Holiday />
							<Payroll />
							<Target />
						</div>

						<div className="py-10 flex items-center justify-between">
							<h1 className="text-xl font-medium ">Employee Overview</h1>
							<Button
								onClick={() => show(<CreateEmployee />)}
								variant="solid"
								// color="primary"
								className="text-sm rounded-xl font-normal bg-black text-white"
							>
								Add Employee
							</Button>

						</div>

						<div className="grid grid-cols-3 gap-5">
							{currentEmployees.map((employee, index) => <EmployeeCard
								employee={employee}
								key={index}
								handleViewDetails={() => handleViewDetails(employee)}
								onOpen={onOpen}
							/>)}
						</div>

						<section className="flex z-0 justify-center items-center w-full my-5">
							<Pagination
								loop
								showControls
								// color="primary"
								classNames={{
									next: 'bg-black text-white',
									item: 'bg-white text-gray-400',
									cursor: 'bg-black text-white',
								}}
								total={totalPages}
								initialPage={currentPage}
								onChange={handlePageChange}
							/>
						</section>
					</div>

					{/* Right */}

					<div className="w-1/4   ">
						<div className="text-black bg-white px-3 py-4 flex flex-col gap-5 rounded-lg shadow h-1/3 flex items-center justify-center h-full  bg w-full">
							<div className=" px-5 py-4 rounded-lg bg-gray-200">
<div className="text-lg dm-sans text-gray-400">No events yet</div>
							<div className="text-sm dm-sans text-gray-400">Check back later</div>
							</div>
							
							<div className="overflow-y-scroll w-full">
							{employeeData.map((employee, index) =>(
								<div className=" my-7">
										<h5>{employee.EmployeeID} </h5>
								</div>
								
							))} 

				
						
					</div>
					</div>


					</div>

				</section>
				{/* </div> */}
			</section>















			<>
				<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className="flex flex-col gap-1">Employee Details</ModalHeader>
								<ModalBody>
									{selectedEmployee && (
										<>
											<p>
												<strong>First Name:</strong>{" "}
												{selectedEmployee.FirstName}
											</p>
											<p>
												<strong>Last Name:</strong>{" "}
												{selectedEmployee.LastName}
											</p>
											<p>
												<strong>Sex:</strong> {selectedEmployee.Sex}
											</p>
											<p>
												<strong>Age:</strong> {selectedEmployee.Age}
											</p>
											<p>
												<strong>Position:</strong>{" "}
												{selectedEmployee.Position}
											</p>
											<p>
												<strong>Department:</strong>{" "}
												{selectedEmployee.Department}
											</p>
										</>
									)}
								</ModalBody>
								<ModalFooter>
									<Button className="bg-black text-white" onPress={onClose}>
										Close
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</>
		</>
	);
}
