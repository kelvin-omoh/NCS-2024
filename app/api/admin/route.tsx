import { auth, db } from "@/config/admin";
import { createAdminSchema } from "@/validators/admin";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json()
        const { email, password } = createAdminSchema.parse(body)

        const user = await auth.createUser({ email, password })
        await auth.setCustomUserClaims(user.uid, { role: 'admin' })

        await db.collection('admins').doc(user.uid).set({
            uid: user.uid,
            email: user.email,
        })

        return NextResponse.json({
            email,
            password,
            ...user
        });
    } catch (e) {
        console.log(e)
        return new NextResponse("invalid body", { status: 400 });
    }
}