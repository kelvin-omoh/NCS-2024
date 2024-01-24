import { useDialogStore } from "@/stores/dialog";
import {
    Button,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectSection,
    SelectItem
} from "@nextui-org/react"
import { Input, Radio, RadioGroup } from "@nextui-org/react";

const CreateEmployee = () => {
    const { hide } = useDialogStore()

    const positons = [
        { label: "Intern", value: "intern", description: "Internship role" },
        { label: "Software Developer", value: "full-time", description: "Full Time role" },
        { label: "Data Analyst", value: "full-time", description: "Full Time role" },
        { label: "Project Manager", value: "full-time", description: "Full Time role" },
        { label: "Human Resource MAnager", value: "full-time", description: "Full Time role" },
        { label: "Data Analyst", value: "full-time", description: "Full Time role" },
        { label: "Research and Development", value: "full-time", description: "Full Time role" },
        { label: "Data Analyst", value: "full-time", description: "Software Engineer" },
        { label: "Others..", value: "full-time", description: "Full Time role" },
  
    ]

    return (
        <ModalContent>
            <ModalHeader>Add Employee</ModalHeader>
            <ModalBody>
                <Input type="email" label="Enter Email" />
                <Input type="text" label="Enter Name" />               
                 <Input type="number" label=" Enter Age" />
                <Input type="text" label=" Enter Position" />
                <Input type="text" label=" Enter Deparment" />

                
 

                <RadioGroup
                    className="my-2"
                    label="Select your gender"
                >
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                </RadioGroup>

                <Select
                    label="Select a position"
                    className="mt-1"
                >
                    {positons.map((position) => (
                        <SelectItem classNames={{
                        }} key={position.value} value={position.value}>
                            {position.label}
                        </SelectItem>
                    ))}
                </Select>

            </ModalBody>
            <ModalFooter>
                <Button className="bg-transparent" onClick={hide}>Cancel</Button>
                <Button className="bg-black text-white" color="primary" variant="solid">Create</Button>
            </ModalFooter>
        </ModalContent>
    )
}

export default CreateEmployee