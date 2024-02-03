import React from "react";
import Link from "next/link";
// import ImageAvatars from "./Avatar";
import { Avatar } from "@mui/material";

export default function CategoryList() {
  return (
    <div>
      <div className=" personalcategories text-2xl mt-[35px]">
        Personal Categories
      </div>
      <div className="flex mt-4 flex-wrap">
        <div className=" flex justify-center gap-x-[10px] flex-1 text-center bg-[#57c4ff31] h-[60px] pt-[10px] mr-8 mt-6 rounded-md">
          <Avatar />

          <Link href={"/"} className="mt-[8px] ">
            Style
          </Link>
        </div>
        <div className=" flex justify-center gap-x-[10px] flex-1 text-center bg-[#da85c731] h-[60px] pt-[10px] mr-8 mt-6 rounded-md">
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
        </div>
      </div>
    </div>
  );
}
