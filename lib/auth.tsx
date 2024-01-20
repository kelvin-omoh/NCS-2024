import { auth, db } from '@/config/firebase'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    User
} from 'firebase/auth'

import {
    doc,
    setDoc,
    serverTimestamp
} from 'firebase/firestore'

export const login = async (email: string, password: string) => {
    const cred = await signInWithEmailAndPassword(auth, email, password)
    return cred
}

export const register = async (email: string, password: string, username: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(cred.user, { displayName: username })

    return cred;
}

export const googleAuth = async () => {
    const provider = new GoogleAuthProvider()
    const cred = await signInWithPopup(auth, provider)
    return cred;
}

export const createUserProfile = (user: User) => {
    const ref = doc(db, 'users', user.uid)
     return setDoc(ref, {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        joined: serverTimestamp()
    })
}