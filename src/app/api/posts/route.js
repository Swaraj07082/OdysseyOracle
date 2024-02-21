import prisma from "@/utils/connect";
import StaticGenerationSearchParamsBailoutProvider from "next/dist/client/components/static-generation-searchparams-bailout-provider";
import { useSearchParams } from "next/navigation";

import { NextResponse } from "next/server";

import { use } from "react";
import React from "react";

export const GET = async (req) => {
  // console.log(req);
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  // const cat = searchParams.get('page')

  const POST_PER_PAGE = 2;

  try {
    const posts = await prisma.Post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
      // these are options in prisma findMany()
    });

    const count = await prisma.Post.count();
    // count the no of posts on basis of its catslug ,

    // will send GET req to database to and respone will be shown on the browser
    // added records in prisma , this records will automatically get added on mongodb as we connected it , above function reads model Category records and gives the response on browser , so 'api/categories/' now has all Category records and it is a end point now as we can fetch data now from this end point

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
