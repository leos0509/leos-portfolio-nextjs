import connectMongoDB from "@/lib/db";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, description, date, img, url } = await req.json();
  await connectMongoDB();

  await Project.create({ title, description, date, img, url });
  return NextResponse.json({ message: "Project Created!" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const projects = await Project.find({});
    return NextResponse.json(projects);
}

export async function DELETE(req: Request) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    await connectMongoDB();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ message: "Project Deleted!" });
}