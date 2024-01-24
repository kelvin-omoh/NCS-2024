import React from 'react'
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

const CalculateKPI = () => {
    const { hide } = useDialogStore()

    const positons = [
        { label: "Very Satisfied (5)", value: 5, description: "Internship role" },
        { label: "Saisfied (4) ", value: 4, description: "Full Time role" },
        { label: "Neutral (3)", value: 3, description: "Full Time role" },
        { label: "Unsatisfied (2)", value: 2, description: "Full Time role" },
        { label: "Very Unsatisfied (1)", value: 1, description: "Full Time role" },
    
    ]

  return (
    <ModalContent>
            <ModalHeader>Calculate KPI</ModalHeader>
            <p className=' px-6 text-blue-500  text-sm'>Fill this following  to calculate this employee KPI</p>
            <p className=' px-6 my-4 text-gray-500  text-sm'>Evaluating with Integrity: Please complete this assessment with fairness, focusing on objective criteria and factual performance.</p>
            <ModalBody>
                
                

    

                <Select
                    label="Quality of Work"
                    className="mt-1"
                >
                    {positons.map((position) => (
                        <SelectItem classNames={{
                        }} key={position.value} value={position.value}>
                            {position.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Productivity"
                    className="mt-1"
                >
                    {positons.map((position) => (
                        <SelectItem classNames={{
                        }} key={position.value} value={position.value}>
                            {position.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Efficiency"
                    className="mt-1"
                >
                    {positons.map((position) => (
                        <SelectItem classNames={{
                        }} key={position.value} value={position.value}>
                            {position.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Goal Achievement"
                    className="mt-1"
                >
                    {positons.map((position) => (
                        <SelectItem classNames={{
                        }} key={position.value} value={position.value}>
                            {position.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Team Work and collaboration"
                    className="mt-1"
                >
                    {positons.map((position) => (
                        <SelectItem classNames={{
                        }} key={position.value} value={position.value}>
                            {position.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Problem solving and creativity"
                    className="mt-1"
                >
                    {positons.map((position) => (
                        <SelectItem classNames={{
                        }} key={position.value} value={position.value}>
                            {position.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Punctuality"
                    className="mt-1"
                >
                    {positons.map((position) => (
                        <SelectItem classNames={{
                        }} key={position.value} value={position.value}>
                            {position.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Ethics"
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
                <Button  onClick={hide} className="bg-black text-white" color="primary" variant="solid">Calculate</Button>
            </ModalFooter>
        </ModalContent>
  )
}

export default CalculateKPI



