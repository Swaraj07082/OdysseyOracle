import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");
  // console.log(req.url)

  try {
    const comments = await prisma.Comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments , { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};












export const POST = async (req) => {
  // const { searchParams } = new URL(req.url);
  // const postSlug = searchParams.get("postSlug");
  // // console.log(req.url)
  // console.log(req)
const session = await getAuthSession();

if(!session){
  return new NextResponse(
    JSON.stringify({message : "Not Authenticated!"} , {status : 401})
  );
}

  
  try {
    const body = await req.json();
    const comment = await prisma.Comment.create({
      data :{ ...body , userEmail : session.user.email}
    })

    return new NextResponse(JSON.stringify(comment , { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
