import { Button } from "@nextui-org/button";
import { AiOutlineUser } from "react-icons/ai";

type Employee = {
    EmployeeID: string;
    FirstName: string;
    LastName: string;
    sex: string;
    age: number;
    Position: string;
    Department: string;
}

const EmployeeCard = ({ employee, handleViewDetails, onOpen }: any) => {
    return (
        <div className="text-black w-full bg-white text-[.9em] pb-1 shadow rounded-xl">
            <div className="flex items-center justify-start">
                <div className="bg-black h-11 w-11 mx-3 mt-4 px-3 py-2 rounded-full text-white flex gap-3 items-center text-sm justify-center font-normal">
                    <AiOutlineUser size={20} />
                </div>

                <div className="dm-sans mt-4 text-base">
                    {employee.FirstName} {employee.LastName}
                </div>
            </div>
            <div className="flex flex-col py-2 px-3 rounded-b-xl">

                <p className="text-slate-900 text-sm font-medium mt-1">	First Name: {employee.FirstName}</p>
                <p className="text-slate-900 text-sm font-medium mt-1">	Last Name: {employee.LastName}</p>
                <p className="text-slate-900 text-sm font-medium mt-1">	Sex: {employee.Sex}</p>
                <p className="text-slate-900 text-sm font-medium mt-1">	Position: {employee.Position}</p>

                {/* <h1 className="mt-1 mb-2 text-2xl font-semibold">{card.total} Course</h1> */}
                <Button
                    variant="flat"
                    className="bg-black dm-sans text-center mt-4 mb-1 font-normal text-white gap-1 text-sm flex justify-center items-center cursor-pointer"
                    onPress={() => {
                        handleViewDetails(employee)
                        onOpen()
                    }}
                >
                    View details
                </Button>
            </div>
        </div>
    )
}

export default EmployeeCard