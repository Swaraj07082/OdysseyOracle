import React from "react";
import blog from "../../public/blog.jpg";
import Image from "next/image";

export default function ExploreFashion() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-[860px]">
        <div className="flex items-center justify-center gap-x">
          <div>
            <Image src={blog} className="h-[400px] w-[250px]" />
          </div>
          <div>
            <Image src={blog} className="h-[400px] w-[250px]" />
          </div>
          <div>
            <Image src={blog} className="h-[400px] w-[250px]" />
          </div>
          <div>
            <Image src={blog} className="h-[400px] w-[250px]" />
          </div>
        </div>

        <div>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}
