"use client"

import LessonTile from "@/components/courses/lesson"
import { getCourseDetails, getUnits } from "@/lib/courses"
import { onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"

const Index = ({ params }: any) => {
    const [course, setCourse] = useState<any>(null)
    const [units, setUnits] = useState<any>(null)

    useEffect(() => {
        const unSub = onSnapshot(
            getCourseDetails(params.unit),
            (snapshot) => setCourse(snapshot.data())
        )

        return () => {
            unSub()
        }
    }, [])

    useEffect(() => {
        const unSub = onSnapshot(
            getUnits(params.unit),
            (snapshot) => {
                var data = snapshot.docs.map((a) => ({ id: a.id, ...a.data() }))
                setUnits(data)
            }
        )

        return () => {
            unSub()
        }
    }, [])

    return (
        <>
            {course !== null && <div className="px-6 py-2">
                <div className="text-xl font-medium">{course.name}</div>
                <div className="text-sm dm-sans text-gray-500 mt-1">{course.description}</div>
                <div className="text-base dm-sans mt-5 mb-3">Units</div>

                {units != null && units.map((unit: any, index: number) => <LessonTile
                    key={index}
                    course={course}
                    unit={unit}
                    index={index}
                />)}
            </div>}
        </>
    )
}

export default Index