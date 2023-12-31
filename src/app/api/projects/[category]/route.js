import connect from "@/utils/db";
import {NextResponse} from "next/server";
import Project from "@/models/Project";

export const GET = async (req, {params}) => {
    try {
        await connect();
        const project = await Project.find({type: params.category}, "title name description");
        return new NextResponse(JSON.stringify(project), {status: 200});
    } catch (err) {
        return new NextResponse("Database error: " + err.toString(), {status: 500});
    }
}