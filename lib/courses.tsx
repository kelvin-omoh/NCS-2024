import { db } from "@/config/firebase";
import { collection, doc, getDoc, getDocs, limit, query } from 'firebase/firestore'

export const getCourses = async () => {
    const ref = collection(db, 'courses')
    const q = query(ref, limit(4))
    const res = await getDocs(q)

    return res.docs
}

export const getCourseDetails = (id: string) => {
    var ref = doc(db, 'courses', id)
    return ref
}

export const getCourseRef = () => collection(db, 'courses')

export const getUnits = (courseId: string) => {
    var ref = collection(db, 'courses', courseId, 'units')
    return ref
}

export const getChapter = (courseId: string, unitId: string) => {
    var ref = collection(db, 'courses', courseId, 'units', unitId, 'chapters')
    return ref
}

export const getQuestions = (courseId: string, unitId: string, chapterId: string) => {
    var ref = collection(db, 'courses', courseId, 'units', unitId, 'chapters', chapterId, 'questions')
    return ref
}
