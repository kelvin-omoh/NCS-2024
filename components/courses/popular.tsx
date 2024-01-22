import { getCourses } from "@/lib/courses"
import { useEffect, useState } from "react"
import { BsChevronRight } from "react-icons/bs"
import SkeletonTemplate from "../skeleton/template"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const PopularCourses = () => {
    const router = useRouter()
    const [courses, setCourses] = useState<any>(null)

    const getPopularCourses = async () => {
        try {
            const res = await getCourses()
            const data = res.map((a) => ({ id: a.id, ...a.data() }))
            setCourses(data)
        } catch (e: any) {
            toast(e.message)
        }
    }

    useEffect(() => {
        getPopularCourses()
    }, [])

    return (
        <div>
            <div className=" flex  justify-between  w-full h-10">
                <h1 className="text-xl font-medium">Popular Courses</h1>
                <button onClick={() => router.push('/my-courses')} className=" text-sm dm-sans font-medium text-blue-600 flex gap-2 items-center justify-center">
                    View all <BsChevronRight size={14} />
                </button>
            </div>

            <div className="grid grid-cols-4 gap-4 py-2">
                {courses === null && Array.from(new Array(4)).map((a: any, i: number) => <SkeletonTemplate key={i} />)}

                {courses !== null && courses.map((course: any, i: number) => <div
                    onClick={() => router.push('/my-courses/' + course.id)}
                    key={i}
                    className="course-card cursor-pointer bg-white h-full rounded-xl h-[4em] w-[20rem]"
                >
                    <img
                        className="px-2 py-2 h-40 w-full object-cover rounded-2xl"
                        src={course.image}
                        alt={course.name}
                    />

                    <div className="px-3 pb-3">
                        <h1 className=" text-[1.1em] font-bold" >${course.price}</h1>
                        <h1 className=" text-sm text-gray-500 font-medium ">{course.name}</h1>
                        <h1 className=" text-lg font-semibold dm-sans w-60 truncate" >{course.subtitle}</h1>
                    </div>
                </div>
                )}
            </div>
        </div >

    )
}

export default PopularCourses