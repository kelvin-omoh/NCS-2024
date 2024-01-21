import { NextResponse } from "next/server";
import axios from 'axios'

const headers = {
    'Authorization': `Bearer ${process.env.PAYSTACK_SECRET}`,
    'Content-Type': 'application/json'
}

export async function POST(req: Request, res: Response) {
    // get email / uid automatically...
    const body = await req.json()
    const { courseId } = body
    const response = await axios.post(
        'https://api.paystack.co/transaction/initialize',
        { email: "sam@sam.com", amount: "200000", metadata: JSON.stringify({ courseId }) },
        { headers },
    )

    const { data } = response.data

    return NextResponse.json(data)
}