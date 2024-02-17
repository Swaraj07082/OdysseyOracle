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

  return (
    <>
      <div className=" personalcategories text-2xl mt-[35px]">
        Personal Categories
      </div>
      <div className="flex mt-4 flex-wrap">
        {data?.map((item) => (
          <div className=" flex justify-center gap-x-[10px] flex-1 text-center bg-[#57c4ff31] h-[60px] pt-[10px] mr-8 mt-6 rounded-md">
            {item.img && <Avatar src={item.img} />}
            {/* used && cause in schema we have set img in Category model as not required , so if in case img is not set then avatar should not work , that's why item.img && */}

            <Link key={item._id} href={"/"} className="mt-[8px] ">
              {/* In mongodb we use _id */}
              {item.title}
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
