import crypto from 'crypto'
import { NextResponse } from 'next/server';

const secret = process.env.SECRET_KEY;

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    console.log(body)

    const hash = crypto.createHmac('sha512', secret!).update(JSON.stringify(body)).digest('hex');

    if (hash != req.headers.get('x-paystack-signature')) {
        return NextResponse.json({ message: "Invalid sender" }, { status: 501 })
    }

    const { event, data } = body

    if (event != 'charge.success') {
        return NextResponse.json({ message: "Invalid event" }, { status: 501 })
    }

    // unlock course to user...

    return NextResponse.json({
        message: "Processed event"
    }, { status: 200 })
}