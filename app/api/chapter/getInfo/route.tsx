import { db } from "@/config/admin";
import { strict_output } from "@/lib/gpt";
import {
    getQuestionsFromTranscript,
    getTranscript,
    searchYoutube,
} from "@/lib/youtube";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodyParser = z.object({
    chapterId: z.string(),
    courseId: z.string(),
    unitId: z.string(),
});

function shuffleArray(array: Array<any>) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();
        const { chapterId, courseId, unitId } = bodyParser.parse(body);

        const response = await db.collectionGroup('chapters').where('id', '==', chapterId).where('courseId', '==', courseId).where('unitId', '==', unitId).limit(1).get()
        const doc = response.docs[0]
        const chapter = doc.data()

        if (!doc.exists) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Chapter not found",
                },
                { status: 404 }
            );
        }

        const videoId = await searchYoutube(chapter.youtubeSearchQuery);
        let transcript = await getTranscript(videoId);
        let maxLength = 500;
        transcript = transcript.split(" ").slice(0, maxLength).join(" ");

        const { summary }: { summary: string } = await strict_output(
            "You are an AI capable of summarising a youtube transcript that will follow the output format of json with key summary ",
            "summarise in 250 words or less and do not talk of the sponsors or anything unrelated to the main topic, also do not introduce what the summary is about.\n" +
            transcript,
            { summary: "summary of the transcript" }
        );

        const questions = await getQuestionsFromTranscript(
            transcript,
            chapter.name
        );

        const randomQuestions = shuffleArray(questions)

        if (randomQuestions.length > 0) {
            for (let i = 0; i < randomQuestions.length; i++) {
                const q = randomQuestions[i]
                const qColl = await doc.ref.collection('questions').add(q)
                await qColl.update({ questionId: qColl.id, chapterId, courseId, unitId })
            }
        }

        await doc.ref.update({
            videoId: videoId,
            summary: summary,
        })

        return NextResponse.json({ success: true, randomQuestions, summary });
    } catch (error) {
        console.log(error)
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid body",
                },
                { status: 400 }
            );
        } else {
            return NextResponse.json(
                {
                    success: false,
                    error: "unknown",
                },
                { status: 500 }
            );
        }
    }
}