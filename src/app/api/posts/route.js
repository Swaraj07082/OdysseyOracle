import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 4;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    // these are options in prisma findMany();
    where: {
      ...(cat && { catslug: cat }),
    },
  };
  
  try {
    const [posts, count , popular] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
      prisma.post.findMany({
        orderBy:{
          views : 'desc'
        },
        take : 4
      })
      // found the popular posts by ordering them in descending and choosing 4 from them as we will display 4 only

      // count the no of posts on basis of its catslug ,

    // will send GET req to database to and respone will be shown on the browser
    // added records in prisma , this records will automatically get added on mongodb as we connected it , above function reads model Category records and gives the response on browser , so 'api/categories/' now has all Category records and it is a end point now as we can fetch data now from this end point
    ]);
    return new NextResponse(JSON.stringify({ posts, count , popular}, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};













export const POST = async (req) => {
  
const session = await getAuthSession();

if(!session){
  return new NextResponse(
    JSON.stringify({message : "Not Authenticated!"} , {status : 401})
  );
}

  
  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data :{ ...body , userEmail : session.user.email}
    })

    return new NextResponse(JSON.stringify(post , { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};







