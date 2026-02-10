import { getAllPhotos } from "@/app/lib/image-data";
import { NextResponse } from "next/server";


export async function GET() {

    const data = await getAllPhotos();
    console.log("Total Photos:", data.length, "photos");
    console.log("First Photo:", data[0]);

    return NextResponse.json(data)


}