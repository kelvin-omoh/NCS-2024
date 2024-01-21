import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

var serviceAccount = require("./learn-verse.json");

const app = getApps().length > 0 ? getApp() : initializeApp({
    credential: cert(serviceAccount)
})

export const auth = getAuth(app)
export const db = getFirestore(app)

export const getAuthSession = async (uid: string) => {
    const user = await auth.getUser(uid)
    return user.customClaims
}