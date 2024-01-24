"use client"
import React, { useState } from 'react';
import { EyeIcon } from '../../components/EyeIcon';
import { EditIcon } from '../../components/EditIcon';
import { DeleteIcon } from '../../components/DeleteIcon';
import { employeeData } from '../data';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio, Pagination } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation"


const statusColorMap = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
};



const columns = [
  { name: 'Employee ID', uid: 'EmployeeID' },
  { name: 'First Name', uid: 'FirstName' },
  { name: 'Last Name', uid: 'LastName' },
  { name: 'Sex', uid: 'Sex' },
  { name: 'Age', uid: 'Age' },
  { name: 'Position', uid: 'Position' },
  { name: 'Department', uid: 'Department' },
  { name: 'Actions', uid: 'actions' },
];

const colors = ["default", "primary", "secondary", "success", "warning", "danger"];


const page = () => {

  const [selectedColor, setSelectedColor] = React.useState<any>("default");


  const itemsPerPage = 10;
  const totalPages = Math.ceil(employeeData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEmployees = employeeData.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const router = useRouter()
  return (
    <>
      <div className="flex flex-col gap-3 px-4">


        <div className="flex   justify-between py-5 items-center  gap-3">
          <h1 className=' flex justify-end text-[1.1em] font-semibold  bg'>No of Employee is :  {employeeData.length} /50</h1>

          <Popover className='  ' placement="right">
            <PopoverTrigger className=' justify-end flex w-fit '>
              <Button className=' flex  justify-end  bg-blue-100 '>
                <Progress
                  label="Percentage of employed  staff = "
                  size="sm"
                  value={employeeData.length}
                  maxValue={50}
                  color="warning"
                  // formatOptions={{style: "currency", currency: "ARS"}}
                  showValueLabel={true}
                  className="max-w-md"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Summary</div>
                <div className="text-tiny">In our organiztion, we currently have {employeeData.length} employees out of a total capacity of 50, resulting in an employee utilization rate of {employeeData.length / 50 * 100}. </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Table
          color={selectedColor}
          selectionMode="single"
          defaultSelectedKeys={["2"]}
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>S/N</TableColumn>
            <TableColumn>Employee ID</TableColumn>
            <TableColumn>First Name</TableColumn>
            <TableColumn>Last Name</TableColumn>
            <TableColumn>Sex</TableColumn>
            <TableColumn>Age</TableColumn>
            <TableColumn>Position</TableColumn>
            <TableColumn>Department</TableColumn>
          </TableHeader>
          <TableBody>

            {currentEmployees.map((employee, i) => (
              <TableRow onClick={() => router.push(`/performance-appraisal/${employee.EmployeeID}}`)} key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell  >{employee.EmployeeID}</TableCell>
                <TableCell>{employee.FirstName}</TableCell>
                <TableCell>{employee.LastName}</TableCell>
                <TableCell>{employee.Sex}</TableCell>
                <TableCell>{employee.Age}</TableCell>
                <TableCell>{employee.Position}</TableCell>
                <TableCell>{employee.Department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <RadioGroup
          label="Selection color"
          orientation="horizontal"
          value={selectedColor}
          onValueChange={setSelectedColor}
        >
          {colors.map((color: any) => (
            <Radio
              key={color}
              color={color}
              value={color}
              className="capitalize"
            >
              {color}
            </Radio>
          ))}

          <Pagination
            loop
            showControls
            color="success"
            total={totalPages}
            initialPage={currentPage}
            onChange={handlePageChange}
          />

        </RadioGroup>



      </div>

    </>
  );
}
export default page
