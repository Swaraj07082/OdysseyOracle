import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    // these are options in prisma findMany();
    where: {
      ...(cat && { catSlug: cat }),
    },
  };
  
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),

      // count the no of posts on basis of its catslug ,

    // will send GET req to database to and respone will be shown on the browser
    // added records in prisma , this records will automatically get added on mongodb as we connected it , above function reads model Category records and gives the response on browser , so 'api/categories/' now has all Category records and it is a end point now as we can fetch data now from this end point
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};









