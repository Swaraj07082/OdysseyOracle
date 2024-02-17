import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

const {Searchparams} = new URL(req.url);

const page = Searchparams.get('page')

const POST_PER_PAGE = 4

  try {
    const posts = await prisma.Post.findMany({take : POST_PER_PAGE , skip : POST_PER_PAGE * (page -1)});

    // will send GET req to database to and respone will be shown on the browser
    // added records in prisma , this records will automatically get added on mongodb as we connected it , above function reads model Category records and gives the response on browser , so 'api/categories/' now has all Category records and it is a end point now as we can fetch data now from this end point

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
