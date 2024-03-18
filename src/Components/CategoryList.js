import React from "react";
import Link from "next/link";
// import ImageAvatars from "./Avatar";
import { Avatar } from "@mui/material";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
    // by default nextjs caches your request , we dont wanna do that cause it's just a project
  });

  if (!res.ok) {
    throw new Error("Failed");
  } else {
    return res.json();
  }
};

// console.log("weiu")
//  console.log wont work here
export default async function CategoryList() {
  const data = await getData();
  // console.log(data);

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
          // ?. optional chaining - will check will iterating data if it gets a undefined data it will print undefined rather than giving an error
          <div
            className=" flex justify-center gap-x-[10px] flex-1 text-center bg-[#57c4ff31] h-[60px] pt-[10px] m-3 mt-6 rounded-md lg:pt-[4px] lg:h-[200px] "
            key={item.title}
          >
            {item.img && <Avatar src={item.img} />}
            {/* used && cause in schema we have set img in Category model as not required , so if in case img is not set then avatar should not work , that's why item.img && */}

            <Link

              key={item._id}
              href={`/blog?page=1&cat=${item.title}`}
              className="mt-[8px] lg:text-[15px] md:text-[13px] hover:underline"
            >
              {/* In mongodb we use _id */}
              {capitalizeFirstLetter(item.title)}

              {/* {item.title.capitalizeFirstLetter()} */}
            </Link>
          </div>
        ))}

        {/* <div className=" flex justify-center gap-x-[10px] flex-1 text-center bg-[#da85c731] h-[60px] pt-[10px] mr-8 mt-6 rounded-md">
          <Avatar />

          <Link href={"/"} className="mt-[8px]">
            Fashion
          </Link>
        </div>

        <div className=" flex justify-center gap-x-[10px] flex-1 text-center bg-[#7fb88133] h-[60px] pt-[10px] mr-8 mt-6 rounded-md">
          <Avatar />

          <Link href={"/"} className="mt-[8px]">
            Food
          </Link>
        </div>
        <div className=" flex justify-center gap-x-[10px] flex-1 text-center bg-[#ff795736] h-[60px] pt-[10px] mr-8 mt-6 rounded-md">
          <Avatar />

          <Link href={"/"} className="mt-[8px]">
            Travel
          </Link>
        </div>
        <div className=" flex justify-center gap-x-[10px] flex-1 text-center bg-[#ffb04f45] h-[60px] pt-[10px] mr-8 mt-6 rounded-md">
          <Avatar />

          <Link href={"/"} className="mt-[8px]">
            Culture
          </Link>
        </div>

        <div className=" flex justify-center gap-x-[10px] flex-1 text-center bg-[#5e4fff31] h-[60px] pt-[10px] mr-8 mt-6 rounded-md">
          <Avatar />

          <Link href={"/"} className="mt-[8px]">
            Coding
          </Link>
        </div> */}
      </div>
    </>
  );
}
