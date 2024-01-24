"use client"

import { AiOutlineBook, AiOutlineUser } from "react-icons/ai";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { BsBookmarks, BsChevronRight } from "react-icons/bs";
import PopularCourses from "@/components/courses/popular";
import { employeeData } from "./data";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Home() {
	const cards = {
		firstCard: [
			{
				EmployeeID : "Adewale",
				FirstName: "Yusuf",
				LastName: "kolawole",
				sex: "Male",
				age:20,
				Position:" Employee",
				Department :"ICT"
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
  
	const handlePageChange = (page:any) => {
	  setCurrentPage(page);
	};








	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
	const [isModalOpen, setModalOpen] = useState(false);

	const handleViewDetails = (employee:any) => {
		setSelectedEmployee(employee);
		setModalOpen(true);
	  };
	
	  const handleCloseModal = () => {
		setModalOpen(false);
	  };
	
	return (
		<>
			<section className="flex gap-2 h-[200vh] py-4 px-1">
				{/* Left */}
				<section className="flex gap-4 justify-between w-full px-4 relative">
					<div className="w-full px-2">
						<h1 className="text-xl font-medium mb-6">Learning Overview</h1>

						<div className="grid grid-cols-4 gap-5">
						{currentEmployees.map((employee,index) => (
								<div key={index} className="text-black w-full bg-white flex   text-[.9em] pb-1 shadow-lg rounded">
									<div className="bg-black h-11 px-3 py-2 rounded-t-xl text-white flex gap-3 items-center text-sm justify-start font-normal">
								<AiOutlineUser size={30}/>
									</div>
									<div className="flex flex-col py-2 px-3 rounded-b-xl">
										
										<p className="text-slate-900 text-sm font-medium mt-1">	First Name: {employee.FirstName}</p>
										<p className="text-slate-900 text-sm font-medium mt-1">	Last Name: {employee.LastName}</p>
										<p className="text-slate-900 text-sm font-medium mt-1">	Sex: {employee.Sex}</p>
										<p className="text-slate-900 text-sm font-medium mt-1">	Position: {employee.Position}</p>

										{/* <h1 className="mt-1 mb-2 text-2xl font-semibold">{card.total} Course</h1> */}
										<Button
										
                      className="dm-sans font-medium text-blue-500 gap-1 text-base flex justify-start items-center cursor-pointer"
                      onPress={() => {
						handleViewDetails(employee)
						onOpen()	}}
                    >
                      View details
                    </Button>
				
									</div>

								</div>
							))}
						</div>

						

			
						<section className=" flex justify-center items-center w-full my-5">
							<Pagination
							loop
							showControls
							color="success"
							total={totalPages}
							initialPage={currentPage}
							onChange={handlePageChange}
						/>
						</section>
						

					</div>


					{/* Right */}
					{/* <div className="w-1/4">
						<div className="text-black bg-white px-3 py-4 flex flex-col gap-5  rounded-lg ">
							<div className=" text-[1.3em] bg-slate-100 px-1 py-1 shadow-lg">
								<h1 className=" text-[.9em]">Upcoming event</h1>
								<h1 className=" text-[.9em]">Upcoming event</h1>
								<h1 className=" text-[.9em]">Upcoming event</h1>

							</div>
							

						</div>

					</div> */}


				
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
			  <Button color="primary" onPress={onClose}>
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
