import { getChapter } from "@/lib/courses"
import { onSnapshot } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const LessonTile = ({ course, unit, index }: { course: any, unit: any, index: any }) => {
    const router = useRouter()
    const [chapters, setChapters] = useState<any>(null)


    useEffect(() => {
        const unSub = onSnapshot(
            getChapter(unit.courseId, unit.id),
            (snapshot) => {
                var data = snapshot.docs.map((a) => ({ id: a.id, ...a.data() }))
                setChapters(data)
            },
            (err) => console.log(err.message)
        )

        return () => {
            unSub()
        }
    }, [])

    return (
        <>
            <div
                // onClick={() => router.push(`/my-courses/${params.unit}/chapter`)}
                className="flex flex-col items-start bg-black text-white rounded-lg px-3 py-3 mb-2 w-1/2 hover:rounded-2xl transition-all ease-in duration-300 hover:shadow cursor-pointer"
            >
                <div>Unit {index + 1}</div>
            </div>

            <div className="bg-black py-2 px-3 rounded-xl w-1/2 mb-6 text-white">
                {chapters != null && chapters.map((chapter: any, index: number) => (
                    <div onClick={() => router.push(`/my-courses/${unit.courseId}/${unit.id}`)} key={index} className="pt-1 pb-1 cursor-pointer">{chapter.name}</div>
                ))}
            </div>
        </>
    )
}

export default LessonTile