import { getPhotoById } from "@/app/lib/image-data"
import { NextResponse } from "next/server";


export async function GET(request, {params}) {
    const photoId = params.id

    const data = getPhotoById(photoId);
    
    if (!data) {
        return NextResponse.json(
            { error: `Photo not found: ${photoId}` },
            { status: 404 }
        );
    }

    return NextResponse.json(data)
}