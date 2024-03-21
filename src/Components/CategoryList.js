import React from "react";
import Link from "next/link";
import { Avatar } from "@mui/material";
import fetchPonyfill from "fetch-ponyfill";

const getData = async () => { 
  const res = await fetchPonyfill().fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  } else {
    return res.json();
  }
};

export const dynamic = 'force-dynamic'

export default async function CategoryList() {
  const data = await getData();
  const parsedata = Array.from(data);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <div className=" personalcategories text-2xl mt-[35px] cs:text-[25px]">
        Personal Categories
      </div>
      <div className="flex mt-4 flex-wrap lg:flex-col">
        {parsedata?.map((item) => (
          <div
            className=" flex justify-center gap-x-[10px] flex-1 text-center bg-[#57c4ff31] h-[60px] pt-[10px] m-3 mt-6 rounded-md lg:pt-[4px] lg:h-[200px] "
            key={item.img}
          >
            {item.img && <Avatar src={item.img} />}
            <Link
              key={item._id}
              href={`/blog?page=1&cat=${item.title}`}
              className="mt-[8px] lg:text-[15px] md:text-[13px] hover:underline"
            >
              {capitalizeFirstLetter(item.title)}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
