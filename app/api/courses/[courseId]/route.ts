import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    if (!params.courseId)
      new NextResponse("Store id is required", { status: 400 });

    const courses = await prisma.course.findUnique({
      where: {
        id: params.courseId,
      },
      include: {
        units: {
          include: {
            chapters: true,
          },
        },
      },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.log("[COURSES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
