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