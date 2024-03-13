import React from "react";
import blog from "../../public/blog.jpg";
import Image from "next/image";
import { wrap } from "module";

export default function ExploreFashion() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-[860px] gap-y-9">
        <div className="text-[42px] self-start ml-[150px] mt-[180px]">
          Fashion
        </div>
        <div className="flex items-center justify-center gap-x-7">
          <div>
            <Image src={blog} className="h-[400px] w-[250px]" />
            <div className="text-[13px] pt-4 pb-1">Date</div>
            <div className="w-[250px] text-[21px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              architecto.
            </div>
          </div>
          <div>
            <Image src={blog} className="h-[400px] w-[250px]" />
            <div className="text-[13px] pt-4 pb-1">Date</div>
            <div className="w-[250px] text-[21px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              nobis!
            </div>
          </div>
          <div>
            <Image src={blog} className="h-[400px] w-[250px]" />
            <div className="text-[13px] pt-4 pb-1">Date</div>
            <div className="w-[250px] text-[21px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              nobis!
            </div>
          </div>
          <div>
            <Image src={blog} className="h-[400px] w-[250px]" />
            <div className="text-[13px] pt-4 pb-1">Date</div>
            <div className="w-[250px] text-[21px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              nobis!
            </div>
          </div>
        </div>

        <div>
          <button className=" bg-black  text-white w-[350px] h-[65px] text-[13px]">
            Explore Fashion
          </button>
        </div>
      </div>
    </>
  );
}
