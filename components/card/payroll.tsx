import React from "react";
import { CircularProgress, Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

export default function Payroll() {
    return (
        <Card className="w-[140px] h-[140px] border-none bg-gradient-to-br from-orange-500 to-red-500">
            <CardBody className="justify-center items-center pb-0">
                <CircularProgress
                    classNames={{
                        svg: "w-20 h-20 drop-shadow-md",
                        indicator: "stroke-white",
                        track: "stroke-white/10",
                        value: "text-lg font-semibold text-white",
                    }}
                    value={2}
                    strokeWidth={4}
                    showValueLabel={true}
                />
            </CardBody>
            <CardFooter className="justify-center items-center pt-1">
                <Chip
                    classNames={{
                        base: "border-1 border-white/30",
                        content: "text-white/90 text-xs font-medium",
                    }}
                    variant="bordered"
                >
                    2 Payrolls
                </Chip>
            </CardFooter>
        </Card>
    );
}
