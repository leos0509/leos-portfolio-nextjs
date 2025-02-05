import connectMongoDB from "@/lib/db";
import Work from "@/models/work";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, description, date, img, url } = await req.json();
  await connectMongoDB();

  await Work.create({ title, description, date, img, url });
  return NextResponse.json({ message: "Work Created!" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const works = await Work.find({});
    return NextResponse.json(works);
}

export async function DELETE(req: Request) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    await connectMongoDB();
    await Work.findByIdAndDelete(id);
    return NextResponse.json({ message: "Work Deleted!" });
}